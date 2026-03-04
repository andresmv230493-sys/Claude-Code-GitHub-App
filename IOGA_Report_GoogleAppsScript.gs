/**
 * IOGA Founder Report — Google Apps Script
 *
 * HOW TO USE:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Delete everything and paste this entire script
 * 4. Click "Run" (play button) → select "createIOGAReport"
 * 5. Authorize when prompted (it needs permission to create Docs)
 * 6. The script will log the URL of your new Google Doc
 */

function createIOGAReport() {
  var doc = DocumentApp.create('IOGA — Reporte para Founders & Inversionistas (Mar 2026)');
  var body = doc.getBody();

  // Styles
  var titleStyle = {};
  titleStyle[DocumentApp.Attribute.FONT_SIZE] = 22;
  titleStyle[DocumentApp.Attribute.BOLD] = true;
  titleStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#1a1a1a';

  var h2Style = {};
  h2Style[DocumentApp.Attribute.FONT_SIZE] = 16;
  h2Style[DocumentApp.Attribute.BOLD] = true;
  h2Style[DocumentApp.Attribute.FOREGROUND_COLOR] = '#2d2d2d';

  var h3Style = {};
  h3Style[DocumentApp.Attribute.FONT_SIZE] = 13;
  h3Style[DocumentApp.Attribute.BOLD] = true;
  h3Style[DocumentApp.Attribute.FOREGROUND_COLOR] = '#3a3a3a';

  var normalStyle = {};
  normalStyle[DocumentApp.Attribute.FONT_SIZE] = 11;
  normalStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
  normalStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#1a1a1a';

  var subtitleStyle = {};
  subtitleStyle[DocumentApp.Attribute.FONT_SIZE] = 13;
  subtitleStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#666666';

  var greenStyle = {};
  greenStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#2d8a4e';
  greenStyle[DocumentApp.Attribute.BOLD] = true;

  // ===== TITLE =====
  var title = body.appendParagraph('IOGA — Reporte para Founders & Inversionistas');
  title.setAttributes(titleStyle);

  var subtitle = body.appendParagraph('Performance Review: Diciembre 2025 – Marzo 2026');
  subtitle.setAttributes(subtitleStyle);

  body.appendHorizontalRule();

  // ===== RESUMEN EJECUTIVO =====
  var h = body.appendParagraph('Resumen Ejecutivo');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  // Key metrics in a 3-column table
  var metricsTable = body.appendTable();
  var metricsRow = metricsTable.appendTableRow();

  var cell1 = metricsRow.appendTableCell();
  cell1.appendParagraph('VENTAS BRUTAS YTD').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 8, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#666666'});
  cell1.appendParagraph('~MX$100K').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 24, [DocumentApp.Attribute.BOLD]: true});
  cell1.appendParagraph('3 canales, 53 órdenes').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 8, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#666666'});

  var cell2 = metricsRow.appendTableCell();
  cell2.appendParagraph('CRECIMIENTO SHOPIFY').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 8, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#666666'});
  cell2.appendParagraph('+155%').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 24, [DocumentApp.Attribute.BOLD]: true, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#2d8a4e'});
  cell2.appendParagraph('ventas brutas YoY').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 8, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#666666'});

  var cell3 = metricsRow.appendTableCell();
  cell3.appendParagraph('TRÁFICO ORGÁNICO').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 8, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#666666'});
  cell3.appendParagraph('+425%').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 24, [DocumentApp.Attribute.BOLD]: true, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#2d8a4e'});
  cell3.appendParagraph('sesiones YoY (SEO)').setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 8, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#666666'});

  // Remove borders from metrics table
  metricsTable.setBorderWidth(0);

  body.appendParagraph('');

  var p = body.appendParagraph('');
  p.appendText('IOGA cerró ').setAttributes(normalStyle);
  p.appendText('~MX$100K en ventas brutas YTD').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  p.appendText(' a través de 3 canales, con ').setAttributes(normalStyle);
  p.appendText('53 órdenes').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  p.appendText(' y sin inversión en ads pagados desde Febrero. Mercado Libre se posicionó como el canal #1 en revenue (MX$47.3K), Shopify creció ').setAttributes(normalStyle);
  p.appendText('+155% YoY').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  p.appendText(' con +425% en tráfico orgánico, y Amazon generó MX$12.9K en apenas ~2 semanas tras su reactivación.').setAttributes(normalStyle);

  var p2 = body.appendParagraph('');
  p2.appendText('Sin embargo, dos blockers operativos — la suspensión de la cuenta de Amazon durante Ene-Feb y problemas con la tarjeta de crédito para Ads desde inicios de Feb — frenaron significativamente el crecimiento total. ').setAttributes(normalStyle);
  p2.appendText('Sin ads pagados y sin Amazon por 2 meses, logramos casi MX$100K en ventas orgánicas.').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  p2.appendText(' Los fundamentales del negocio son sólidos y estamos posicionados para un Q2 fuerte.').setAttributes(normalStyle);

  body.appendHorizontalRule();

  // ===== 1. VENTAS POR CANAL =====
  h = body.appendParagraph('1. Ventas por Canal (YTD: Ene 1 – Mar 4, 2026)');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  h = body.appendParagraph('Vista Consolidada — 3 Canales');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  // Consolidated table
  var data = [
    ['Canal', 'Ventas Brutas', 'Unidades', 'Ticket Promedio', '% del Total', 'Conversión'],
    ['Mercado Libre', 'MX$47,271', '29', 'MX$1,630', '47.5%', '1.80%'],
    ['Shopify', 'MX$39,334', '16', 'MX$2,441', '39.5%', '0.54%'],
    ['Amazon', 'MX$12,892', '8', 'MX$1,612', '13.0%', '—'],
    ['TOTAL', 'MX$99,497', '53', 'MX$1,877', '100%', '—']
  ];

  var table = body.appendTable(data);
  styleTable(table);

  // Callout
  var callout = body.appendParagraph('');
  callout.appendText('Contexto clave: ').setAttributes({[DocumentApp.Attribute.BOLD]: true, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#2d8a4e'});
  callout.appendText('Estos ~MX$100K se lograron con Amazon suspendida 2 de 3 meses, sin ningún ad pagado (Meta/Google/Amazon) desde Febrero, y con Mercado Libre como canal nuevo. El crecimiento es 100% orgánico.');
  callout.setBackgroundColor('#f0f7f0');
  callout.setIndentStart(18);
  callout.setIndentEnd(18);

  body.appendHorizontalRule();

  // --- SHOPIFY ---
  h = body.appendParagraph('Shopify (Canal Directo) — CRECIMIENTO FUERTE');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  var shopifyData = [
    ['Métrica', '2026 YTD', 'vs. 2025 YTD', 'Cambio'],
    ['Ventas Totales', 'MX$40,831', 'MX$16,870*', '↑ 142%'],
    ['Ventas Brutas', 'MX$39,334', 'MX$15,425*', '↑ 155%'],
    ['Ventas Netas', 'MX$39,054', 'MX$15,434*', '↑ 153%'],
    ['Órdenes', '16', '9', '↑ 78%'],
    ['AOV (Ticket Promedio)', 'MX$2,441', 'MX$1,719*', '↑ 42%'],
    ['Tasa de Retorno', '13.33%', '—', 'Clientes repitiendo'],
    ['Devoluciones', 'MX$0', '—', '0% returns']
  ];

  table = body.appendTable(shopifyData);
  styleTable(table);

  body.appendParagraph('*Valores estimados basados en los % de crecimiento reportados por Shopify Analytics.').setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 9, [DocumentApp.Attribute.ITALIC]: true, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#888888'});

  h = body.appendParagraph('Productos Top:');
  h.setAttributes({[DocumentApp.Attribute.BOLD]: true, [DocumentApp.Attribute.FONT_SIZE]: 11});

  var productsData = [
    ['Producto', 'Revenue YTD', 'Tendencia'],
    ['Journey Mat de IOGA', 'MX$23,400', 'Producto estrella'],
    ['Balance Mat de IOGA', 'MX$7,600', '↑ 20% YoY'],
    ['Serenity Mat de IOGA', 'MX$4,400', '↑ 30% YoY'],
    ['Bolsa Deportiva IOGA', '—', 'Nuevo en catálogo']
  ];

  table = body.appendTable(productsData);
  styleTable(table);

  var analysis = body.appendParagraph('');
  analysis.appendText('Análisis: ').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  analysis.appendText('El Journey Mat se consolidó como hero product representando ~59% de las ventas en Shopify. El ticket promedio subió 42%, indicando que los clientes están comprando productos de mayor valor o combinando productos. Cero devoluciones confirma la calidad del producto.');

  body.appendHorizontalRule();

  // --- AMAZON ---
  h = body.appendParagraph('Amazon — REACTIVADA, RECUPERANDO TERRENO');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  var amazonData = [
    ['Métrica', '2026 YTD'],
    ['Ventas Brutas', 'MX$12,892'],
    ['Unidades Vendidas', '8'],
    ['Ticket Promedio', 'MX$1,612'],
    ['Ene - Feb', 'Cuenta suspendida — 0 ventas durante 2 meses'],
    ['Desde reactivación (~2 semanas)', 'MX$12,892 en ventas'],
    ['Amazon Ads', 'No se pudieron activar (sin cuenta → sin tarjeta)']
  ];

  table = body.appendTable(amazonData);
  styleTable(table);

  analysis = body.appendParagraph('');
  analysis.appendText('Análisis: ').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  analysis.appendText('Amazon generó MX$12.9K en apenas ~2 semanas tras la reactivación. Esto demuestra que la demanda existe — el producto se vende en cuanto está disponible. ');
  analysis.appendText('Si Amazon hubiera estado activa todo el trimestre, estimamos conservadoramente MX$30-40K adicionales').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  analysis.appendText(', lo que habría puesto las ventas totales en MX$120-140K.');

  var warning = body.appendParagraph('');
  warning.appendText('Impacto de la suspensión: ').setAttributes({[DocumentApp.Attribute.BOLD]: true, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#e67e22'});
  warning.appendText('2 meses sin presencia = pérdida directa de ventas + pérdida de ranking orgánico dentro de Amazon. Además, sin cuenta no pudimos activar Amazon Ads, que es el principal driver de descubrimiento dentro del marketplace.');
  warning.setBackgroundColor('#fff8f0');
  warning.setIndentStart(18);
  warning.setIndentEnd(18);

  body.appendHorizontalRule();

  // --- MERCADO LIBRE ---
  h = body.appendParagraph('Mercado Libre — CANAL #1 EN REVENUE');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  var mlData = [
    ['Métrica', '2026 YTD'],
    ['Ventas Brutas', 'MX$47,271'],
    ['Unidades Vendidas', '29'],
    ['Ticket Promedio', 'MX$1,630'],
    ['Visitas', '1,613'],
    ['Tasa de Conversión', '1.80%'],
    ['Ventas Canceladas', '3']
  ];

  table = body.appendTable(mlData);
  styleTable(table);

  analysis = body.appendParagraph('');
  analysis.appendText('Análisis: ').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  analysis.appendText('Mercado Libre es la gran sorpresa: ');
  analysis.appendText('canal #1 en revenue').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  analysis.appendText(' con MX$47.3K, representando el 47.5% de las ventas totales. La tasa de conversión de 1.8% es ');
  analysis.appendText('3.3x mayor que Shopify').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  analysis.appendText(' (0.54%), lo que indica que el tráfico de marketplace tiene alta intención de compra — la gente que busca en ML ya está lista para comprar.');

  body.appendParagraph('Las comisiones son las más altas (19.5% merchant fees vs 3.5% Shopify vs 15% Amazon), lo que reduce el margen neto a ~26%. Sin embargo, el volumen compensa: ML generó más revenue que Shopify con tráfico que no nos costó adquirir. A medida que construyamos más reseñas y posicionamiento orgánico, este canal seguirá escalando.');

  body.appendHorizontalRule();

  // ===== 2. TRÁFICO WEB =====
  h = body.appendParagraph('2. Tráfico Web (Shopify) — SEO está funcionando');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  var trafficData = [
    ['Métrica', '2026 YTD', 'vs. 2025 YTD', 'Cambio'],
    ['Sesiones', '2,912', '555*', '↑ 425%'],
    ['Added to Cart', '62 (2.12%)', '36*', '↑ 72%'],
    ['Reached Checkout', '38 (1.30%)', '30*', '↑ 27%'],
    ['Conversión a Compra', '16 (0.54%)', '9*', '↑ 78%']
  ];

  table = body.appendTable(trafficData);
  styleTable(table);

  h = body.appendParagraph('Análisis del Funnel:');
  h.setAttributes({[DocumentApp.Attribute.BOLD]: true});

  // Funnel visualization as table
  var funnelData = [
    ['Etapa', 'Cantidad', 'Tasa', 'Crecimiento YoY'],
    ['Sesiones', '2,912', '100%', '↑ 425%'],
    ['Add to Cart', '62', '2.12%', '↑ 72%'],
    ['Checkout', '38', '1.30%', '↑ 27%'],
    ['Compra', '16', '0.54%', '↑ 78%']
  ];

  table = body.appendTable(funnelData);
  styleTable(table);

  var item1 = body.appendListItem('');
  item1.appendText('Lo positivo: ').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item1.appendText('El tráfico orgánico creció ').setAttributes(normalStyle);
  item1.appendText('4.25x').setAttributes({[DocumentApp.Attribute.BOLD]: true, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#2d8a4e'});
  item1.appendText(' — resultado directo del trabajo de SEO que hicimos. Esto es tráfico gratuito y sostenible.').setAttributes(normalStyle);
  item1.setGlyphType(DocumentApp.GlyphType.BULLET);

  var item2 = body.appendListItem('');
  item2.appendText('La conversión bajó (0.54% vs ~1.6% antes): ').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item2.appendText('Esto es normal y esperado. Cuando el tráfico crece exponencialmente por SEO, mucho de ese tráfico es top-of-funnel. La conversión se normaliza cuando: 1) Activemos retargeting con Meta Ads, 2) Esos visitantes regresen como returning customers, 3) Optimicemos landing pages.');
  item2.setGlyphType(DocumentApp.GlyphType.BULLET);

  var item3 = body.appendListItem('');
  item3.appendText('Add-to-cart creció 72%: ').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item3.appendText('La intención de compra está ahí — necesitamos cerrar más de esas 62 personas que agregan al carrito.');
  item3.setGlyphType(DocumentApp.GlyphType.BULLET);

  body.appendHorizontalRule();

  // ===== 3. UNIT ECONOMICS =====
  h = body.appendParagraph('3. Unit Economics por Canal');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  var econData = [
    ['Producto (Mat)', 'Shopify', 'Amazon', 'Mercado Libre'],
    ['Precio de Venta', 'MX$1,599', 'MX$1,599', 'MX$1,599'],
    ['Landed Cost', 'MX$660', 'MX$660', 'MX$660'],
    ['Merchant Fees', '3.5%', '15%', '19.5%'],
    ['Publicidad', '0%', '7%', '7%'],
    ['Net Profit', 'MX$763 (47.7%)', 'MX$489 (30.6%)', 'MX$412 (25.8%)']
  ];

  table = body.appendTable(econData);
  styleTable(table);

  analysis = body.appendParagraph('');
  analysis.appendText('Insight: ').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  analysis.appendText('Shopify es con diferencia el canal más rentable (~48% margen neto vs ~31% Amazon vs ~26% ML). Cada venta en Shopify vale casi el doble que una venta en Mercado Libre en profit. Por eso el crecimiento orgánico en Shopify (via SEO) es tan valioso.');

  h = body.appendParagraph('Kit Bundles — Incremento de rentabilidad:');
  h.setAttributes({[DocumentApp.Attribute.BOLD]: true});

  var kitData = [
    ['Kit', 'Precio Final', 'Profit', 'vs. Solo Mat'],
    ['Kit Yoga Completo Balance', 'MX$2,646', 'MX$1,030', '+35% profit'],
    ['Kit Yoga Completo Serenity', 'MX$2,646', 'MX$1,015', '+36% profit'],
    ['Kit Accesorios Premium', 'MX$1,147', 'MX$367', 'Cross-sell']
  ];

  table = body.appendTable(kitData);
  styleTable(table);

  body.appendHorizontalRule();

  // ===== 4. MARKETING & BLOCKERS =====
  h = body.appendParagraph('4. Inversión en Marketing & Blockers');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  h = body.appendParagraph('Gastos Ejecutados (Dic 2025 - Feb 2026)');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  body.appendParagraph('Inversión en SEO, configuración de canales (Shopify, Amazon, ML), product seeding con influencers, y setup de campañas de Ads.');

  h = body.appendParagraph('Blocker Principal: Tarjeta de Crédito');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  p = body.appendParagraph('');
  p.appendText('Desde ').setAttributes(normalStyle);
  p.appendText('inicios de Febrero').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  p.appendText(', no hemos podido ejecutar campañas pagadas:');

  var adsData = [
    ['Canal de Ads', 'Status', 'Impacto'],
    ['Meta Ads (IG/FB)', '❌ DETENIDO desde Feb', 'Sin retargeting ni prospecting'],
    ['Google Ads', '❌ DETENIDO desde Feb', 'Sin captura de demanda de búsqueda'],
    ['Amazon Ads', '❌ DETENIDO (sin cuenta)', 'Sin visibilidad dentro de Amazon']
  ];

  table = body.appendTable(adsData);
  styleTable(table);

  var redCallout = body.appendParagraph('');
  redCallout.appendText('Impacto real: ').setAttributes({[DocumentApp.Attribute.BOLD]: true, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#e74c3c'});
  redCallout.appendText('Tenemos 2,912 sesiones orgánicas, 62 add-to-carts, pero solo 16 compras en Shopify. Con retargeting activo en Meta, podríamos estar convirtiendo una porción significativa de esos 46 carritos abandonados. Estimación conservadora: con Ads podríamos estar en ');
  redCallout.appendText('22-25 órdenes').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  redCallout.appendText(' en lugar de 16.');
  redCallout.setBackgroundColor('#fef0f0');
  redCallout.setIndentStart(18);
  redCallout.setIndentEnd(18);

  body.appendHorizontalRule();

  // ===== 5. PLAN MARZO =====
  h = body.appendParagraph('5. Plan de Marzo 2026');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  h = body.appendParagraph('Ads (Requiere tarjeta funcionando)');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  var adsplan = [
    ['Plataforma', 'Budget Diario', 'Budget Mensual', 'Objetivo'],
    ['Meta Ads', '$10 USD/día', '~$310 USD', 'Retargeting + prospecting'],
    ['Google Ads', '$10 USD/día', '~$310 USD', 'Captura de demanda'],
    ['Amazon Ads', 'Variable (ROAS-based)', 'TBD', 'Posicionamiento + ventas'],
    ['Total estimado', '', '~$620+ USD', '']
  ];

  table = body.appendTable(adsplan);
  styleTable(table);

  h = body.appendParagraph('Product Seeding (Brand Awareness)');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  item1 = body.appendListItem('');
  item1.appendText('5-6 product seedings').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item1.appendText(' adicionales en Marzo');
  item1.setGlyphType(DocumentApp.GlyphType.BULLET);

  item2 = body.appendListItem('');
  item2.appendText('Objetivo dual: ');
  item2.appendText('brand awareness').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item2.appendText(' + ');
  item2.appendText('construir base de brand ambassadors').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item2.setGlyphType(DocumentApp.GlyphType.BULLET);

  item3 = body.appendListItem('Los influencers/creadores que reciben producto generan contenido orgánico que alimenta el funnel de adquisición');
  item3.setGlyphType(DocumentApp.GlyphType.BULLET);

  h = body.appendParagraph('Lo que necesitamos para desbloquear el crecimiento');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  var blockersData = [
    ['Blocker', 'Status', 'Impacto si se resuelve'],
    ['Tarjeta de crédito funcionando', '🔴 CRÍTICO', 'Desbloquea Meta + Google + Amazon Ads'],
    ['Accesorios nuevos (inventario)', '🔴 CRÍTICO', 'Ambassadors esperan nuevos accesorios y ropa']
  ];

  table = body.appendTable(blockersData);
  styleTable(table);

  body.appendHorizontalRule();

  // ===== 6. ROADMAP Q2 =====
  h = body.appendParagraph('6. Roadmap Q2 2026');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  h = body.appendParagraph('Abril: Website Revamp');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  body.appendListItem('Rediseño de la web preparando para la nueva arquitectura de marca').setGlyphType(DocumentApp.GlyphType.BULLET);

  item1 = body.appendListItem('');
  item1.appendText('Separación visual clara: ');
  item1.appendText('Ioga (Yoga Gear)').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item1.appendText(' vs ');
  item1.appendText('Ioga Activewear').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item1.setGlyphType(DocumentApp.GlyphType.BULLET);

  body.appendListItem('Optimización de conversión basada en los datos del funnel actual').setGlyphType(DocumentApp.GlyphType.BULLET);

  h = body.appendParagraph('Mayo: Lanzamiento de Sportswear');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  item1 = body.appendListItem('');
  item1.appendText('Launch de la línea ');
  item1.appendText('Ioga Activewear').setAttributes({[DocumentApp.Attribute.BOLD]: true});
  item1.appendText(' — "Built to move."');
  item1.setGlyphType(DocumentApp.GlyphType.BULLET);

  body.appendListItem('Ropa deportiva multi-disciplina (training, running, studio, lifestyle)').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.appendListItem('Segmento premium, posicionamiento global con origen MX').setGlyphType(DocumentApp.GlyphType.BULLET);

  h = body.appendParagraph('Ambassadors Pipeline');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  h.setAttributes(h3Style);

  body.appendListItem('Varios creadores/influencers ya han expresado interés en colaborar').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.appendListItem('Están esperando: nuevos accesorios y la línea de ropa').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.appendListItem('Una vez tengamos producto, activamos ambassador program formal').setGlyphType(DocumentApp.GlyphType.BULLET);

  body.appendHorizontalRule();

  // ===== 7. CONTEXTO INVERSIONISTAS =====
  h = body.appendParagraph('7. La Historia Completa — Contexto para Inversionistas');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  h = body.appendParagraph('Lo que salió bien:');
  h.setAttributes(h3Style);

  var wins = [
    ['~MX$100K en ventas orgánicas YTD', ' — sin ads pagados desde Febrero'],
    ['Mercado Libre es #1:', ' MX$47.3K, 29 unidades, 1.8% conversión — canal nuevo que ya lidera en revenue'],
    ['SEO funciona:', ' +425% tráfico orgánico en Shopify — crecimiento gratuito y compuesto'],
    ['Shopify crece fuerte:', ' +155% ventas brutas, +42% ticket promedio, 0% devoluciones'],
    ['Amazon se recupera rápido:', ' MX$12.9K en ~2 semanas post-reactivación — la demanda está ahí'],
    ['Producto es sólido:', ' 0% devoluciones, 13.33% returning customers, ticket promedio alto']
  ];

  for (var i = 0; i < wins.length; i++) {
    var li = body.appendListItem('');
    li.appendText(wins[i][0]).setAttributes({[DocumentApp.Attribute.BOLD]: true});
    li.appendText(wins[i][1]);
    li.setGlyphType(DocumentApp.GlyphType.BULLET);
  }

  h = body.appendParagraph('Lo que nos frenó (factores temporales, no estructurales):');
  h.setAttributes(h3Style);

  var blockers = [
    ['Amazon suspendido 2 meses:', ' perdimos un estimado de MX$30-40K en ventas + ranking orgánico → ya reactivada'],
    ['Tarjeta de crédito:', ' sin Ads desde Febrero → bloqueó retargeting y crecimiento pagado en todos los canales'],
    ['Sin accesorios nuevos:', ' limita activación de ambassadors que ya quieren trabajar con nosotros']
  ];

  for (var i = 0; i < blockers.length; i++) {
    var li = body.appendListItem('');
    li.appendText(blockers[i][0]).setAttributes({[DocumentApp.Attribute.BOLD]: true});
    li.appendText(blockers[i][1]);
    li.setGlyphType(DocumentApp.GlyphType.BULLET);
  }

  var estimate = body.appendParagraph('');
  estimate.appendText('Sin estos blockers, estimamos que las ventas YTD estarían en MX$140-160K').setAttributes({[DocumentApp.Attribute.BOLD]: true, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#e67e22'});
  estimate.appendText(' en lugar de MX$100K.');
  estimate.setBackgroundColor('#fff8f0');
  estimate.setIndentStart(18);
  estimate.setIndentEnd(18);

  h = body.appendParagraph('La oportunidad:');
  h.setAttributes(h3Style);

  body.appendListItem('Con Amazon reactivada + Ads corriendo + ambassador program activo, el potencial de ventas para Q2 es significativamente mayor').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.appendListItem('Mercado Libre demostró que el marketplace LATAM es un canal de alto volumen — escalar aquí es prioritario').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.appendListItem('El lanzamiento de Ioga Activewear en Mayo abre un mercado mucho más grande que solo yoga gear').setGlyphType(DocumentApp.GlyphType.BULLET);
  body.appendListItem('La base de tráfico orgánico que construimos con SEO será el foundation para el lanzamiento de sportswear').setGlyphType(DocumentApp.GlyphType.BULLET);

  body.appendHorizontalRule();

  // ===== KPIs =====
  h = body.appendParagraph('Métricas Clave a Monitorear (KPIs para próximo reporte)');
  h.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  h.setAttributes(h2Style);

  var kpiData = [
    ['KPI', 'Baseline YTD (2 meses)', 'Meta Marzo', 'Meta Abril'],
    ['Ventas Totales (3 canales)', 'MX$99.5K', 'MX$55K+', 'MX$70K+'],
    ['Ventas Shopify', 'MX$39.3K', 'MX$25K+', 'MX$30K+'],
    ['Ventas Mercado Libre', 'MX$47.3K', 'MX$25K+', 'MX$30K+'],
    ['Ventas Amazon', 'MX$12.9K (~2 sem)', 'MX$15K+', 'MX$25K+'],
    ['Órdenes Totales', '53', '30+', '40+'],
    ['Tráfico orgánico Shopify', '2,912', '1,500+', '2,000+'],
    ['Conversión Shopify', '0.54%', '>1.0%', '>1.5%'],
    ['Conversión ML', '1.80%', '>1.8%', '>2.0%'],
    ['Product seedings', '—', '5-6', '8-10'],
    ['ROAS Meta/Google', '—', '>2.0x', '>2.5x']
  ];

  table = body.appendTable(kpiData);
  styleTable(table);

  body.appendHorizontalRule();

  // Footer
  var footer = body.appendParagraph('Reporte generado el 4 de Marzo de 2026\nDatos: Shopify Analytics, Amazon Seller Central, Mercado Libre (YTD Jan 1 – Mar 4, 2026)');
  footer.setAttributes({[DocumentApp.Attribute.FONT_SIZE]: 9, [DocumentApp.Attribute.FOREGROUND_COLOR]: '#999999', [DocumentApp.Attribute.ITALIC]: true});
  footer.setAlignment(DocumentApp.HorizontalAlignment.CENTER);

  // Log the URL
  Logger.log('✅ Report created! URL: ' + doc.getUrl());
  Logger.log('Doc ID: ' + doc.getId());

  // Return the URL
  return doc.getUrl();
}

/**
 * Helper: Style a table with header row formatting
 */
function styleTable(table) {
  // Style header row
  var headerRow = table.getRow(0);
  for (var j = 0; j < headerRow.getNumCells(); j++) {
    var cell = headerRow.getCell(j);
    cell.setBackgroundColor('#1a1a1a');
    cell.editAsText().setForegroundColor('#ffffff').setBold(true).setFontSize(10);
    cell.setPaddingTop(6);
    cell.setPaddingBottom(6);
    cell.setPaddingLeft(8);
    cell.setPaddingRight(8);
  }

  // Style data rows
  for (var i = 1; i < table.getNumRows(); i++) {
    var row = table.getRow(i);
    var bgColor = (i % 2 === 0) ? '#f8f8f8' : '#ffffff';

    // Last row gets special treatment (totals)
    if (i === table.getNumRows() - 1) {
      bgColor = '#f0f0f0';
    }

    for (var j = 0; j < row.getNumCells(); j++) {
      var cell = row.getCell(j);
      cell.setBackgroundColor(bgColor);
      cell.editAsText().setFontSize(10);
      cell.setPaddingTop(5);
      cell.setPaddingBottom(5);
      cell.setPaddingLeft(8);
      cell.setPaddingRight(8);
    }
  }

  // Set border color
  table.setBorderColor('#e0e0e0');
  table.setBorderWidth(1);
}
