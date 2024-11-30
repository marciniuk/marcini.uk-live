const htmlForNaglowek = `
      <div class="sticky top-0 flex w-full z-10 bezzaznaczenia">
        <nav class="bg-gray-700 lg:bg-gray-900 text-gray-400 w-full">
          <div class="px-6 mx-auto lg:mr-64 lg:ml-auto flex flex-col">
            <div class="flex justify-between items-center">
              <a class="flex items-center lg:mb-0" href="/pl/">
                <img class="w-12 lg:w-16" src="/assets/img/logo.png" />
                <b class="text-2xl md:text-3xl text-white">Marcini.uk</b>
              </a>
              <div id="hamburger" class="fas fa-bars fa-lg text-gray-200"></div>
            </div>

            <div class="lg:fixed right-0 xl:top-0">
              <div
                id="nav-right"
                class="nav-hidden sidebar truncate flex flex-col -mx-2 mt-2 xl:top-0 text-gray-200"
              >
                <a
                  class="mx-2 my-1 text-2xl hover:text-blue-200"
                  href="/pl/profile/"
                >
                  <i class="fas fa-address-card w-8 text-center"></i> Profile
                </a>
                <a
                  class="mx-2 my-1 text-2xl hover:text-green-200"
                  href="/pl/projekty/"
                >
                  <i class="fas fa-project-diagram w-8 text-center"></i>
                  Projekty
                </a>
                <a
                  class="mx-2 my-1 text-2xl hover:text-yellow-100"
                  href="/pl/setup/"
                >
                  <i class="fas fa-laptop-code w-8 text-center"></i> Setup
                </a>
                <a
                  class="mx-2 my-1 text-2xl hover:text-indigo-300"
                  href="/pl/kontakt/"
                >
                  <i class="fas fa-envelope-open-text w-8 text-center"></i>
                  Kontakt
                </a>
                <a
                  class="mx-2 my-1 text-2xl hover:text-red-200"
                  href="/pl/ulubiency"
                >
                  <i class="fas fa-heart w-8 text-center"></i> Ulubieńcy
                </a>
                <a
                  class="mx-2 my-1 text-2xl hover:text-fuchsia-300"
                  href="/pl/ksiazki"
                >
                  <i class="fa-solid fa-book w-8 text-center"></i> Książki
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
`;

const htmlForStopka = `
    <footer
      class="bg-gray-700 text-gray-300 mt-auto fixed w-full bottom-0 z-40 bezzaznaczenia"
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

// Funkcja wstawiająca kod HTML do elementu o danym ID
function insertHtmlIfElementExists(id, htmlContent) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = htmlContent;
  }
}

// Wstawianie kodu do elementów, jeśli istnieją
insertHtmlIfElementExists("stopka", htmlForStopka);
insertHtmlIfElementExists("naglowek", htmlForNaglowek);
