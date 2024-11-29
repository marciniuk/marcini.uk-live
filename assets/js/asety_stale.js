const htmlForStopka = `
    <footer
      class="bg-gray-700 text-gray-300 mt-auto md:fixed w-full md:bottom-0 z-40"
    >
      <div
        class="flex flex-col sm:flex-row sm:justify-around items-center px-5 py-4 lg:mr-64"
      >
        <div>
          2019-<span id="year"></span>
          <span class="far fa-copyright"></span> Adrian Marciniuk
        </div>
        <a href="/pl/polityka-prywatnosci"
          ><span class="fas fa-user-secret"></span> Polityka Prywatności</a
        >
      </div>
    </footer>
`;

const htmlForNaglowek = `
  <div class="custom-header">
    <h1>Witamy na naszej stronie!</h1>
  </div>
`;

// Funkcja wstawiająca kod HTML do elementu o danym ID
function insertHtmlIfElementExists(id, htmlContent) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = htmlContent;
  }
}

// Wstawianie kodu do elementów, jeśli istnieją
insertHtmlIfElementExists("Stopka", htmlForStopka);
insertHtmlIfElementExists("Naglowek", htmlForNaglowek);
