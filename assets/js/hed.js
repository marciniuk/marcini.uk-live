document.addEventListener("DOMContentLoaded", function () {
  const headContent = `
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Adrian Marciniuk</title>
  
      <!-- Linki do zasobów -->
      <link href="/assets/css/fontawesome.css" rel="stylesheet" />
      <link href="/assets/css/main.css" rel="stylesheet" />
  
      <!-- Open Graph -->
      <meta property="og:title" content="Adrian Marciniuk" />
      <meta property="og:description" content="¯\\_(ツ)_/¯" />
      <meta property="og:image" content="/assets/img/logo.png" />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:url" content="${window.location.href}" />
      <meta property="og:site_name" content="Adrian Marciniuk" />
      <meta property="og:type" content="website" />
  
      <!-- Favicon i konfiguracja aplikacji -->
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#CCCCCC" />
      <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
  
      <!-- SEO i struktura danych -->
      <link rel="canonical" href="${window.location.href}" />
  
      <!-- JSON-LD -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Adrian Marciniuk",
          "url": "${window.location.href}"
        }
      </script>
    `;

  // Dodajemy zawartość do head
  document.head.innerHTML += headContent;
});
