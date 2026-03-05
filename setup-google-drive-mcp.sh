#!/bin/bash
# Setup script for Google Drive MCP Server
# This configures Claude Code to access Google Drive, Docs, Sheets, and Slides

set -e

echo "=== Google Drive MCP Setup for Claude Code ==="
echo ""

# Detect config directory
CONFIG_DIR="$HOME/.config/google-drive-mcp"
mkdir -p "$CONFIG_DIR"

echo "Config directory: $CONFIG_DIR"

# Step 1: Check for OAuth credentials
OAUTH_FILE="$CONFIG_DIR/gcp-oauth.keys.json"
if [ -f "$OAUTH_FILE" ]; then
    echo "[OK] OAuth credentials found at $OAUTH_FILE"
else
    echo "[!] OAuth credentials not found."
    echo "    Please create $OAUTH_FILE with your Google Cloud OAuth client credentials."
    echo "    Format:"
    echo '    {"installed":{"client_id":"YOUR_CLIENT_ID","client_secret":"YOUR_SECRET","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"],"auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token"}}'
    echo ""
    echo "    Get these from: https://console.cloud.google.com/apis/credentials"
    exit 1
fi

# Step 2: Check for tokens
TOKEN_FILE="$CONFIG_DIR/tokens.json"
if [ -f "$TOKEN_FILE" ]; then
    echo "[OK] Token file found at $TOKEN_FILE"
else
    echo "[!] No token file found. The MCP server will prompt for authentication on first use."
fi

# Step 3: Create/update .mcp.json in the project directory
MCP_JSON='{
  "mcpServers": {
    "google-drive": {
      "command": "npx",
      "args": ["-y", "@piotr-agier/google-drive-mcp"],
      "env": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "'"$OAUTH_FILE"'",
        "GOOGLE_DRIVE_MCP_TOKEN_PATH": "'"$TOKEN_FILE"'"
      }
    }
  }
}'

# Write to project .mcp.json
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
echo "$MCP_JSON" > "$SCRIPT_DIR/.mcp.json"
echo "[OK] Updated .mcp.json in $SCRIPT_DIR"

# Step 4: Also configure globally for Claude Code (so it works from any directory)
CLAUDE_CONFIG_DIR="$HOME/.claude"
mkdir -p "$CLAUDE_CONFIG_DIR"
if [ -f "$CLAUDE_CONFIG_DIR/.mcp.json" ]; then
    echo "[INFO] Global Claude config exists at $CLAUDE_CONFIG_DIR/.mcp.json"
    echo "       Merging google-drive server..."
    python3 -c "
import json, sys
try:
    with open('$CLAUDE_CONFIG_DIR/.mcp.json') as f:
        config = json.load(f)
except:
    config = {'mcpServers': {}}

config.setdefault('mcpServers', {})
config['mcpServers']['google-drive'] = {
    'command': 'npx',
    'args': ['-y', '@piotr-agier/google-drive-mcp'],
    'env': {
        'GOOGLE_DRIVE_OAUTH_CREDENTIALS': '$OAUTH_FILE',
        'GOOGLE_DRIVE_MCP_TOKEN_PATH': '$TOKEN_FILE'
    }
}
with open('$CLAUDE_CONFIG_DIR/.mcp.json', 'w') as f:
    json.dump(config, f, indent=2)
print('[OK] Updated global .mcp.json')
"
else
    echo "$MCP_JSON" > "$CLAUDE_CONFIG_DIR/.mcp.json"
    echo "[OK] Created global .mcp.json at $CLAUDE_CONFIG_DIR/.mcp.json"
fi

# Step 5: Verify APIs are enabled
echo ""
echo "=== Verification ==="
echo "Testing Google Drive API access..."

if [ -f "$TOKEN_FILE" ]; then
    ACCESS_TOKEN=$(python3 -c "import json; print(json.load(open('$TOKEN_FILE'))['access_token'])" 2>/dev/null || echo "")
    if [ -n "$ACCESS_TOKEN" ]; then
        HTTP_CODE=$(curl -s -o /tmp/gdrive_test.json -w "%{http_code}" \
            -H "Authorization: Bearer $ACCESS_TOKEN" \
            "https://www.googleapis.com/drive/v3/about?fields=user" 2>/dev/null)

        if [ "$HTTP_CODE" = "200" ]; then
            USER_NAME=$(python3 -c "import json; print(json.load(open('/tmp/gdrive_test.json'))['user']['displayName'])" 2>/dev/null)
            echo "[OK] Google Drive API works! Connected as: $USER_NAME"
        elif [ "$HTTP_CODE" = "401" ]; then
            echo "[!] Token expired. The MCP server should auto-refresh on next use."
            echo "    If it doesn't work, delete $TOKEN_FILE and re-authenticate."
        elif [ "$HTTP_CODE" = "403" ]; then
            echo "[ERROR] Google Drive API returned 403 (Forbidden)."
            echo ""
            echo "  You need to ENABLE the APIs in Google Cloud Console:"
            echo "  1. Go to: https://console.cloud.google.com/apis/library"
            echo "  2. Search and enable each of these:"
            echo "     - Google Drive API"
            echo "     - Google Docs API"
            echo "     - Google Sheets API"
            echo "     - Google Slides API"
            echo ""
            echo "  NOTE: Configuring OAuth scopes is NOT the same as enabling APIs."
            echo "  OAuth scopes (in 'Acceso a los datos') = what permissions your app requests"
            echo "  Enabled APIs (in 'APIs & Services > Library') = which APIs are turned ON"
        else
            echo "[?] Unexpected response: HTTP $HTTP_CODE"
            cat /tmp/gdrive_test.json 2>/dev/null
        fi
        rm -f /tmp/gdrive_test.json
    else
        echo "[!] Could not read access token. Re-authentication may be needed."
    fi
else
    echo "[!] No tokens yet. Run Claude Code and the MCP server will prompt for auth."
fi

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Next steps:"
echo "1. Make sure Google Drive API is enabled (see above)"
echo "2. Restart Claude Code"
echo "3. Ask Claude to create a Google Doc!"
echo ""
echo "If Claude still can't see Google Drive tools, try running Claude Code"
echo "from this project directory: cd $SCRIPT_DIR && claude"
