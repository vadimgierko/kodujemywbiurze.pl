## Wprowadzenie

---

**Witaj w darmowym kursie *Integrujemy HTML i JavaScript. Podstawy DOM. Pierwsza interaktywna aplikacja webowa***!

W niniejszym kursie poznamy podstawy integracji HTML i JavaScript za pomocą DOM, wystarczające do **przeniesienia naszej aplikacji do zarządzania zadaniami z konsoli bezpośrednio do przeglądarki, dzięki czemu będzie funkcjonowała jak aplikacja z prawdziwego zdarzenia**, z którymi miałeś/aś do czynienia mnóstwo razy.

Na tym etapie powinniśmy już mieć działającą dynamiczną aplikację konsolową, w której możemy zarządzać zadaniami i znać podstawy JavaScipt, co znaczy, że przerobiłeś/aś <a href="/kursy/javascript" target="_blank">kurs JavaScript</a> oraz <a href="/kursy/local-storage" target="_blank">kurs Local Storage</a>.

Powinniśmy mieć też prosty interface - podstawowy statyczny kod HTML, który zrobiliśmy w <a href="/kursy/html" target="_blank">kursie HTML</a>.

W związku z tym rób ten kurs tylko jeśli znasz podstawy HTML i JavaScript - niezależnie od tego, czy poznałeś/aś je samodzielnie, czy też przerobiłeś/aś moje 3 poprzedzające kursy na tej stronie.

Musimy teraz połączyć/ zintegrować te dwie warstwy - tzw. logikę (kod JavaScript) oraz UI (*user interface*, kod HTML) - w jedną spójną aplikację.

Ta integracja będzie możliwa dzięki wykorzystaniu właściwości i metod DOM, które dają nam dostęp i możliwość manipulacji HTML za pomocą JavaScript! Zrobimy to stopniowo, poznając krok po kroku podstawy pracy z DOM.

DOM (*Document Object Model*) jest kluczowym elementem, który łączy HTML z JavaScriptem. DOM jest reprezentacją struktury HTML i jest manipulowany za pomocą JavaScriptu, ponieważ DOM sam w sobie jest JavaScriptowym obiektem (nie omawialiśmy tego jeszcze w kursie JavaScript), a to znaczy, że udostępnia różne właściwości oraz metody, za pomocą których możemy wprowadzać wszelakie zmiany w kodzie HTML z poziomu kodu JavaScript.

HTML jest fundamentalnym elementem, na którym opiera się struktura strony internetowej, a znajomość jego podstaw jest niezbędna do zrozumienia DOM-u. Z kolei JavaScript jest niezbędny do manipulacji DOMem.

### Co zrobimy w niniejszym kursie?

W tym kursie połączymy zarówno naszą wiedzę z zakresu HTML i JavaScript, jak również zintegrujemy zbudowany przez nas HTMLowy UI oraz konsolową aplikację JavaScript w jedną interaktywną i niepodzielną aplikację webową do zarządzania zadaniami działającą bezpośrednio w przeglądarce.

Najpierw poznamy wybrane metody i właściwości **DOM**, tj.:

- `document.getElementById()`,
- `document.createElement()`,
- `appendChild()`,
- `textContent`,
- `innerHTML`,

dzięki którym będziemy manipulować HTMLem z poziomu konsoli.

Ponadto poznamy i wykorzystamy także JavaScriptową pętlę `forEach`.

Później przeniesiemy zarządzanie zadaniami z konsoli do pliku JavaScript, który połączymy z plikiem HTML.

Wykorzystamy także wbudowane okno dialogowe przeglądarki `prompt` do wygodnego wprowadzania naszych zadań, co pozwoli nam na razie uniknąć konieczności poznawania podstaw obsługi formularzy.

I jak na razie będzie to ostatni kurs na *kodujemywbiurze.pl* oraz ostatni etap budowy naszej aplikacji. Potem będę czekał na feedback pierwszych użytkowników i ewentualnie dalej rozbudowywał zarówno stronę i kursy, jak i samą aplikację, którą stworzyliśmy!

*Happy Coding!*

## `document.getElementById()`, id | Uzyskujemy dostęp do elementu drzewa DOM - listy zadań

---

Na razie nasz UI (czyli to, co widzimy w przeglądarce - HTML, który napisaliśmy w poprzednim kursie) jest absolutnie statyczny. Owszem, mamy listę zadań, ale są one zakodowane w HTMLu i nie możemy z nimi nic zrobić jako użytkownicy.

Chcemy pobrać zadania z `localStorage`, co już udało się nam zrobić w kursie JavaScript, i wyświetlić właśnie te zadania! Żeby to zrobić, musimy uzyskać dostęp do naszej listy HTML `<ul>` z poziomu kodu JavaScript.

Możemy to zrobić na kilka sposobów, ale posłużymy się metodą `document.getElementById()`.

Metoda `document.getElementById()`, jak sama nazwa wskazuje, pozwala na uzyskanie dostępu do elementu drzewa DOM (czyli dowolnego znacznika) o określonym `id`.

Nasza lista HTML nie ma przypisanego `id`, więc musimy najpierw je dodać do kodu w pliku HTML, który stworzyliśmy w poprzednim kursie. W tagu otwierającym `<ul>` dodaj `id="tasks-list"` w ten sposób:

```html
<!-- ... wcześniejszy kod HTML -->

<ul id="tasks-list">
  <li>zrobić kawę <button>usuń</button></li>
  <li>wypić jogurt <button>usuń</button></li>
  <li>sprawdzić maila <button>usuń</button></li>
</ul>

<!-- ... dalszy kod HTML -->
```

Każdy tag może mieć unikalne `id`, dzięki czemu możemy precyzyjnie uzyskać do niego dostęp z poziomu kodu JavaScript. `id` powinno mieć opisową nazwę, podobnie jak <a href="/kursy/javascript/dobre-praktyki-w-nazewnictwie-zmiennych" target="_blank">nazwy zmiennych czy funkcji</a>, w związku z tym naszą listę zadań nazwaliśmy `"tasks-list"`.

Teraz, zapisz zmiany w pliku HTML, odśwież przeglądarkę i otwórz konsolę.

Możesz z ciekawości przejść do zakładki `Elements`, by zobaczyć kod HTML Twojej strony - jak widzisz, przeglądarka "osadziła" nasz niekompletny kod w <a href="/kursy/html/szablon-pliku-html" target="_blank">szablon pliku HTML</a>, o czym wspominałem wcześniej. W tej zakładce możesz mieć podgląd drzewa DOM dowolnej strony www, ale także dodatkowej zawartości pliku HTML, jak np. skryptów JavaScript.

Powróćmy teraz do konsoli i spróbujmy uzyskać dostęp do listy zadań za pomocą `document.getElementById()` na razie z poziomu konsoli:

```javascript
const tasksList = document.getElementById("tasks-list");

console.log(tasksList);
```

Jak widzisz, w konsoli wyświetlił Ci się wycinek drzewa DOM, zawierający listę `<ul>`, którą można rozwinąć i zobaczyć wszystkie elementy listy `<li>`. Z kolei możesz teraz wpisać w konsoli po prostu `tasksList.` i zobaczysz, że po kropce wyświetli Ci się długa lista dostępnych metod, które możesz zastosować do danego węzła (*node*) DOM, np. `tasksList.children`, który wyświetli Ci tablicę zawierającą wszystkie "dzieci" danego węzła.

To wszystko oznacza, że właśnie poprawnie uzyskałeś/aś dostęp do HTMLa/ elementu DOM za pomocą właściwości `id`, przypisałeś/aś ten element (listę) do JavaScriptowej zmiennej (a dokładniej stałej) `tasksList`, w związku z czym możesz teraz manipulować tym węzłem - dodawać/ usuwać elementy listy (oraz robić całe mnóstwo innych rzeczy!).

## `document.createElement()`, `textContent`, `appendChild()` | Tworzymy i dodajemy zadania jako nowe węzły DOM

---

Ok, więc wiemy już, jak uzyskać dostęp do elementu/ węzła DOM. Spróbujmy teraz stworzyć i dodać zadania do naszej listy z poziomu kodu JavaScript w konsoli. Będzie nam to potrzebne w przyszłości, by po pobraniu zadań z `localStorage` za pomocą JavaScript, dodać je w postaci kodu HMTL do listy.

Usuńmy najpierw ręcznie wszystkie elementy `<li>` z naszego kodu HTML, zapiszmy plik i odświeżmy przeglądarkę. Twoja lista w przeglądarce powinna teraz być pusta, a kod HTML powinien wyglądać tak:

```html
<h1>Twoje zadania</h1>

<hr>

<button>dodaj zadanie</button>

<ul id="tasks-list">

</ul>

<button>wyczyść listę</button>
```

Teraz przejdźmy do konsoli i stwórzmy nowy element listy `<li>` za pomocą metody `document.createElement()`, przypisując go do zmiennej `li` (*list element*):

```javascript
const li = document.createElement("li");

console.log(li);
```

Za pomocą `document.createElement()` możemy utworzyć dowolny znacznik HTML, podając jego nazwę ujętą w cudzysłów w nawiasach metody: `document.createElement("li")`. Gdybyśmy chcieli stworzyć nowy nagłówek h1, to zrobilibyśmy to tak: `document.createElement("h1")`.

Konsola wyświetliła nam nowy element listy, który na razie "wisi w powietrzu" i nie zawiera żadnej treści pomiędzy `<li></li>`. Dodajmy więc teraz treść naszego zadania za pomocą właściwości `textContent`, która reprezentuje treść węzła DOM:

```javascript
li.textContent = "zrobić kawę";

console.log(li);
```

Widzimy teraz w konsoli, że pomiędzy tagami `<li></li>` pojawiła się treść naszego zadania: `<li>zrobić kawę</li>`. Jak widzisz, JavaScript jest potężnym językiem programowania - ma moc tworzenia nowych elementów HTML (i nie tylko!).

Ok, mamy już ukształtowane zadanie w postaci elementu DOM, zawierającego treść, tyle że nadal nie widzimy go w przeglądarce... Żeby tak się stało, musimy teraz ten "lewitujący" w pamięci konsoli element dodać do istniejącego już drzewa DOM, a dokładniej do listy `<ul id="tasks-list">`. Możemy to zrobić za pomocą metody `appendChild()`:

```javascript
// najpierw uzyskujemy dostęp do listy, tak jak wcześniej:
const tasksList = document.getElementById("tasks-list");

// dodajemy wcześniej utworzony element li z przypisaną treścią do listy:
tasksList.appendChild(li); // jeśli wcześniej przeładowałeś/aś stronę, to musisz stworzyć ten element jeszcze raz

console.log(tasksList);
```

Udało się! Utworzyliśmy nowy element, przypisaliśmy do niego wartość, a potem dodaliśmy do istniejącego drzewa DOM za pomocą JavaScript! Zarówno w konsoli, jak i w przeglądarce widzimy, że do listy `<ul id="tasks-list">` zostało dodane zadanie `<li>zrobić kawę</li>`.

Teraz, gdybyśmy chcieli dodać kolejne zadania, musielibyśmy za każdym razem napisać dużo kodu... Ale na szczęście znamy trochę JavaScript i wiemy, że powtarzalne zadania najlepiej jest przechowywać w postaci reużywalnych funkcji, co zrobimy za chwilę, a raczej zmodyfikujemy istniejącą już funkcję `addTask()`.

## `innerHTML` | Czyścimy listę zadań za jednym zamachem za pomocą innerHTML

---

Zadanie, które dodaliśmy w poprzedniej lekcji wyświetla się bezpośrednio w przeglądarce jako węzeł DOM, czyli część prawdziwej strony internetowej, a nie w konsoli, tak jak wcześniej. Jesteśmy coraz bliżej celu.

Spróbujmy teraz dla odmiany wyczyścić naszą listę za jednym zamachem - przyda nam się to w przyszłości. Możemy to zrobić (jak zwykle) na kilka sposobów, a najprostszym z nich jest skorzystanie z właściwości `innerHTML`, czyli dosłownie *wewnętrzny HTML*.

Dzięki tej właściwości dowolnego węzła DOM, możemy przypisać dowolny kod HTML do danego elementu. Nie zagłębiajmy się w szczegóły, tylko przypiszmy do naszej listy... pusty ciąg znaków! W ten sposób usuniemy cały HTML, który znajduje się wewnątrz `<ul>`, czyli elementy listy `<li>`, zawierające nasze zadania:

```javascript
// na wszelki wypadek zadeklarujmy listę jeszcze raz:
const tasksList = document.getElementById("tasks-list");

// czyścimy listę:
tasksList.innerHTML = "";

console.log(tasksList); // => zadania zniknęły!
```

Zaszalejmy i przypiszmy ten kod do funkcji `deleteAllTasks`:

```javascript
function deleteAllTasks() {
  // na wszelki wypadek zadeklarujmy listę jeszcze raz:
  const tasksList = document.getElementById("tasks-list");

  // czyścimy listę:
  tasksList.innerHTML = "";

  console.log(tasksList); // => zadania zniknęły!
}
```

Teraz wiemy, jak dodawać zadania jako węzły drzewa DOM, czyli przekształcać je w kod HTML naszej strony internetowej w przeglądarce, a potem je usuwać za jednym zamachem. Pobaw się trochę tym kodem znowu, dodaj kilka zadań, potem je usuń.

Możesz też odświeżyć stronę i spróbować samodzielnie od nowa uzyskać dostęp do naszej listy za pomocą `document.getElementById()` i dodać tam zadania za pomocą `document.createElement()`, `textContent` i `appendChild()`.

Wszystko jest fajnie, ale jeśli odświeżymy stronę, to zniknie zarówno kod, który stworzyliśmy, jak również i nasze zadania...

Dlatego w kolejnej lekcji przeniesiemy to, czego nauczyliśmy się, do nowego pliku JavaScript w `snippets`, modyfikując stworzone wcześniej funkcje i podłączymy się do `localStorage`, by stamtąd ściągać zadania i wyświetlać je już nie w konsoli, tylko na stronie internetowej w przeglądarce.

Do dzieła!

## Aktualizujemy kod JavaScript o funkcjonalności DOM - pierwsza wersja aplikacji `todo-app-dom`

---

Zacznijmy implementować funkcjonalności DOM, co jak zawsze możemy zrobić na kilka sposobów... Nie będę wdawał się w szczegóły, tylko zaproponuję podożęnie przykładem uniwersalnej funkcji `updateTasksInLocalStorage()`, którą wywoływaliśmy w każdej z funkcji modyfikującej listę zadań i stworzyć podobną uniwersalną funkcję modyfikującą listę HTML w ten sposób, że będzie ona każdorazowo uzupełniać listę o aktualne zadania (niezależnie od tego, czy je dodaliśmy, czy usunęliśmy).

*PS. Pamiętasz jeszcze, co się dzieje w tym kodzie?* 😂😏

Ten sposób jest wg mnie najłatwiejszy oraz wymaga mniej kodu, niemniej jednak może być mniej optymalny w przypadku długich list oraz wchodzimy w dość poważny temat związany z architekturą aplikacji i zarządzania jej stanem, a dokładniej chodzi tu o pojedyncze źródło prawdy (*single source of truth*).

W programowaniu często nie ma tak, że któraś z opcji jest najlepsza; podobnie też jest z językami programowania - każde podejście, każdy język i technologia mają swoje plusy i minusy oraz jedne są po prostu lepsze w pewnego rodzaju sytuacjach, w innych natomiast nie sprawdziłyby się tak dobrze.

Dlatego skupimy się na wdrożeniu najprostszej pod względem kodu opcji, żeby aplikacja zadziałała jak najszybciej.

- Otwórz nasz plik HTML `todo-app.html` w przeglądarce,
- Przejdź do konsoli do zadkładki `snippets` i stwórz tam nowy plik o nazwie `todo-app-dom`. Skopiuj i wklej tam <a href="/kursy/local-storage/podsumowanie-kompletny-kod-aplikacji-w-wersji-20-aplikacji-do-zarzadzania-zadaniami-zintegrowanej-z-localstorage" target="_blank">kod naszej aplikacji z kursu Local Storage</a>.

Początek pozostawiamy bez zmian:

```javascript
console.clear();

function getTasksFromLocalStorage() {
  const storedTasksStringified = localStorage.getItem("tasks");

  const storedTasks = JSON.parse(storedTasksStringified);

  return storedTasks;
}

let tasks = getTasksFromLocalStorage() || [];

// => tutaj zaczniemy pisać nowy kod => funkcję renderTasks()
// + dopiszemy jedną linijkę do funkcji showTasks()

// ...dalszy kod dotychczasowej aplikacji bez zmian
```

*PS. Jeśli właśnie odkryłeś/aś, że patrzysz na ten kod i nie pamiętasz, jak działa, to wróć do kursu Local Storage i zrób sobie powtórkę!*

Ok, więc na początek czyścimy konsolę, potem deklarujemy funkcję pobierającą zadania zapisane w `localStorage` i zwracającą je oraz deklarujemy zmienną `tasks`, do której przypisujemy pobrane zadania. Dalszy kod aplikacji nas nie będzie interesował i na razie pozostanie bez zmian (oprócz `showTasks()`).

Teraz musimy te pobrane zadania wyświetlić (*wyrenderować*) na ekranie, a dokładniej - musimy dodać każde zadanie jako element listy HTML. Najpierw więc musimy uzyskać dostęp do listy zadań w HTML, co już wcześniej robiliśmy:

```javascript
// ...powyższy kod z poprzedniego akapitu...

// po deklaracji globalnej zmiennej tasks:
// let tasks = getTasksFromLocalStorage() || [];
// zadeklaruj globalną zmienną przechowującą HTMLową listę zadań:
const tasksList = document.getElementById("tasks-list");

// teraz mamy dostęp i możemy korzystać z HTMLowej listy w dalszym kodzie!
```

Dodajmy teraz pomocniczą funkcję `appendTaskToTheTasksList()` tworząca nowy element listy, pobierającą zadanie jako argument i dodającą zadanie do listy - funkcja ta na razie będzie identyczna do funkcji `addTask()`, którą stworzyliśmy wcześniej w tym kursie:

```javascript
// ...powyższy kod z poprzedniego akapitu...

function appendTaskToTheTasksList(task) {
  // utwórz nowy element listy li:
  const li = document.createElement("li");
  // i przypisz do niego wartość zadania:
  li.textContent = task;

  // dodaj element listy do listy:
  // (pamiętaj, że HTMLowa lista jest zmienną globalną, więc mamy do niej dostęp)
  tasksList.appendChild(li);
}
```

## Renderujemy każde zadanie za pomocą własnej funkcji `renderTasks()` oraz metody tablicy `forEach()`

---

Super! Możemy dodawać pojedyncze nowe elementy do listy za pomocą `appendTaskToTheTasksList()`, ale... musimy teraz stworzyć funkcję `renderTasks()`, która "przejdzie się" po wszystkich pobranych zadaniach z `localStorage` i każde z nich doda do HTMLowej listy używając `appendTaskToTheTasksList()`.

Żeby funkcja `renderTasks()` "przeszła się" po wszystkich zadaniach z naszej listy `tasks`, która jest tablicą, wykorzystamy metodę tablicy `forEach()`.

Metoda `forEach()` przyjmuje jako argument dowolną funkcję, którą wywoła na każdym elemencie tablicy. Jednocześnie `forEach()` przekazuje tej funkcji 2 argumenty, z których tamta funkcja może zrobić użytek: sam element tablicy oraz jego indeks. Zobacz poniższy przykład i wypróbuj go w konsoli (nie w pliku!):

```javascript
let elements = ["a", "b", "c"];

// funkcja logElement() potrzebuje dwóch argumentów:
// elementu oraz jego indeksu, by wyświetlić to w konsoli:
function logElementAndIndex(element, index) {
  console.log("Element:", element, "ma indeks:", index);
}

// iterujemy po wszystkich elementach tablicy elements,
// wywołując na każdym elemencie funkcję logElementAndIndex(),
// która otrzyma od forEach 2 argumenty: element i indeks elementu:
elements.forEach(logElementAndIndex);

// UWAGA! Zwróć uwagę, że przekazaliśmy samą funkcję, bez nawiasów,
// ponieważ gdybyśmy dodali nawiasy, to automatycznie wywołalibyśmy tę funkcję bez argumentów!

// Możemy też wykorzystać tylko pierwszy argument,
// przekazany przez forEach() => sam element:
function logElementOnly(element) {
  console.log("Element:", element);
}

elements.forEach(logElementOnly);

// w tym przypadku drugi argument (indeks)
// przekazany przez forEach() będzie po prostu pominięty
```

Mam nadzieję, że zrozumiałeś/aś, jak działa metoda `forEach()`. Spróbujmy teraz jej przekazać funkcję `appendTaskToTheTasksList()`:

```javascript
function renderTasks() {
  // wyczyść listę/ usuń wszystkie elementy listy,
  // żeby później wyrenderować/ dodać ich aktualną wartość na nowo:
  // (pamiętaj, że HTMLowa lista jest wcześniej zadeklarowaną zmienną globalną,
  // więc mamy do niej dostęp)
  tasksList.innerHTML = "";

  // przeiterujmy teraz wszystkie pobrane zadania
  // i wywołajmy na każdym z nich funkcję appendTaskToTheTasksList(),
  // która po kolei wyrenderuje każde z nich jako element listy:
  tasks.forEach(appendTaskToTheTasksList);
}
```

Uff... Teraz musimy dopilnować, żeby funkcja `renderTasks()` była wywoływana za każdym razem, kiedy dojdzie do jakiejkolwiek modyfikacji zmiennej `tasks`, czyli w funkcjach `addTask()`, `addTaskAtIndex()`, `deleteTask()` i `deleteAllTasks()`, aby lista, wyświetlana na ekranie zawsze była zsynchronizowana ze stanem naszej aplikacji i `localStorage`.

Możemy to zrobić, wywołując `renderTasks()` wewnątrz funkcji `showTasks()`, dlatego że jest ona wywoływana w każdej z wymienionych funkcji oraz jest wywołana na końcu naszego kodu, dzięki czemu, kiedy odpalamy aplikację, pokazuje nam zadania w konsoli. Teraz także wyrenderuje nam zadania w przeglądarce!

```javascript
// zmodyfikuj funkcję showTasks()
// dodając do niej renderTasks():
function showTasks() {
  console.log("Twoje zapisane zadania:", tasks);
  renderTasks(); // <== nowy kod idzie tutaj
}
```

Brawo! Wiem, że łatwo jest w tym wszystkim się pogubić, ale taki rozrost programu i odpowiednio kodu jest czymś normalnym. Zresztą, nie dodaliśmy jeszcze nawet wszystkich funkcjonalności! A na dodatek jest to tylko mała aplikacja do zarządzania zadaniami, od której zaczyna większość programistów...

Niemniej jednak, na tym etapie, możesz odpalić jednocześnie plik HTML `todo-app.html` w przeglądarce, przejść do konsoli do zadkładki `snippets` i otworzyć tam zaktualizowany plik `todo-app-dom`, uruchomić go klikając w ikonkę trójkąta lub stosując skrót klawiszowy `Ctrl+Enter` i w konsoli, która się otworzy, będziesz mógł/a na razie dodawać i usuwać zadania w konsoli (tak, jak wcześniej), ale wynik tych działań (zmiany w liście zadań) będą wyświetlały się także w przeglądarce!

Spróbuj pododawać kilka zadań, usunąć jakieś itd., ale najpierw upewnij się, że kod Twojej aplikacji wygląda następująco:

```javascript
console.clear();

function getTasksFromLocalStorage() {
  const storedTasksStringified = localStorage.getItem("tasks");

  const storedTasks = JSON.parse(storedTasksStringified);

  return storedTasks;
}

let tasks = getTasksFromLocalStorage() || [];

//================= nowy kod DOM: ==========================//

// zadeklaruj globalną zmienną przechowującą HTMLową listę zadań:
const tasksList = document.getElementById("tasks-list");

// dodaj teraz pomocniczą funkcję `appendTaskToTheTasksList()`
// tworząca nowy element listy,
// pobierającą zadanie jako argument i dodającą zadanie do listy:    
function appendTaskToTheTasksList(task) {
  // utwórz nowy element listy li:
  const li = document.createElement("li");
  // i przypisz do niego wartość zadania:
  li.textContent = task;

  // dodaj element listy do listy:
  // (pamiętaj, że HTMLowa lista jest zmienną globalną, więc mamy do niej dostęp)
  tasksList.appendChild(li);
}

function renderTasks() {
  // wyczyść listę/ usuń wszystkie elementy listy,
  // żeby później wyrenderować/ dodać ich aktualną wartość na nowo:
  // (pamiętaj, że HTMLowa lista jest wcześniej zadeklarowaną zmienną globalną,
  // więc mamy do niej dostęp)
  tasksList.innerHTML = "";

  // przeiterujmy teraz wszystkie pobrane zadania
  // i wywołajmy na każdym z nich funkcję appendTaskToTheTasksList(),
  // która po kolei wyrenderuje każde z nich jako element listy:
  tasks.forEach(appendTaskToTheTasksList);
}

function showTasks() {
  console.log("Twoje zapisane zadania:", tasks);
  renderTasks(); // <== nowy kod
}
//=========== koniec nowego kodu DOM =============//

function updateTasksInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(newTask) {
  tasks.push(newTask);

  updateTasksInLocalStorage();

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  showTasks();
}

function addTaskAtIndex(index, newTask) {
  tasks.splice(index, 0, newTask);

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  updateTasksInLocalStorage();

  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  updateTasksInLocalStorage();

  showTasks();
}

function deleteAllTasks() {
  tasks = [];

  console.log("Wszystkie zadania zostały usunięte...");

  updateTasksInLocalStorage(tasks);

  showTasks();
}

// odpalając program, wyświetlamy zapisane zadania na start
// w konsoli, ale też w przeglądarce (renderujemy je):
showTasks();
```

Teraz dodawaj i usuwaj zadania w konsoli, przypisuj je do indeksu lub też usuń wszystko, obserwując, co się dzieje na ekranie *(tylko nie wklejaj od razu całego poniższego kodu do konsoli, bo na ekranie wyświetli Ci się... nic, ponieważ ostatnim poleceniem jest `deleteAllTasks()`, aczkolwiek w konsoli zobaczysz każdą operację)*:

```javascript
addTask("zrobić kawę");
addTask("zjeść naleśniki");

addTaskAtIndex(1, "zanim zjesz naleśniki, zadzwoń do sekretariatu");

deleteTask(1); // jednak nie dzwoń do sekretariatu

deleteAllTasks();
```

Wszystko działa super, natomiast moglibyśmy usprawnić (*zrefaktorować*) nasz kod w następujący sposób: funckja `showTasks()` *de facto* nie spełnia już w pewnym sensie swojej funkcji. Potrzebowaliśmy jej wcześniej, by wyświetlić zadania w konsoli, natomiast teraz naszym priorytetem jest wyrenderowanie zadań w przeglądarce i teraz mamy 2 mylące funkcje: `showTasks()` i `renderTasks()`, gdzie ta druga funkcja powinna wieść prym.

W związku z tym proponuję usunąć funkcję `showTasks()` i zastąpić ją całkowicie funkcją `renderTasks()`, która dodatkowo będzie wyświetlała zaktualizowane zadania w konsoli (tak na wszelki wypadek). Zróbmy to, w związku z czym nasz kod teraz będzie teraz wyglądał następująco *(usunąłem wczesniejsze komentarze z kodu)*:

```javascript
console.clear();

function getTasksFromLocalStorage() {
  const storedTasksStringified = localStorage.getItem("tasks");

  const storedTasks = JSON.parse(storedTasksStringified);

  return storedTasks;
}

let tasks = getTasksFromLocalStorage() || [];

const tasksList = document.getElementById("tasks-list");
  
function appendTaskToTheTasksList(task) {
  const li = document.createElement("li");
  li.textContent = task;

  tasksList.appendChild(li);
}

function renderTasks() {
  tasksList.innerHTML = "";

  tasks.forEach(appendTaskToTheTasksList);

  // oprócz wyrenderowania zadań w przeglądarce
  // wypisujemy je także w konsoli:
  console.log("Twoje zapisane zadania:", tasks)
}

function updateTasksInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(newTask) {
  tasks.push(newTask);

  updateTasksInLocalStorage();

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  renderTasks(); // <= zamieniamy showTasks() na renderTasks()
}

function addTaskAtIndex(index, newTask) {
  tasks.splice(index, 0, newTask);

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  updateTasksInLocalStorage();

  renderTasks(); // <= zamieniamy showTasks() na renderTasks()
}

function deleteTask(index) {
  tasks.splice(index, 1);

  updateTasksInLocalStorage();

  renderTasks(); // <= zamieniamy showTasks() na renderTasks()
}

function deleteAllTasks() {
  tasks = [];

  console.log("Wszystkie zadania zostały usunięte...");

  updateTasksInLocalStorage(tasks);

  renderTasks(); // <= zamieniamy showTasks() na renderTasks()
}

renderTasks(); // <= zamieniamy showTasks() na renderTasks()
```

Teraz nasz kod jest trochę bardziej czytelny!

## Single Source of Truth. 3 warstwy aplikacji

---

Zwróć uwagę na to, jak rozrasta się logika naszej aplikacji, a dokładniej jej warstwy i ich wzajemne powiązania:

1. `localStorage` jako swego rodzaju baza/ magazyn danych - ta warstwa potrafi przetrwać nawet wtedy, kiedy zamkniemy przeglądarkę,
2. aplikacja JavaScript, która na starcie/ podczas uruchomienia pobiera dane, a potem je modyfikuje i aktualizuje w `localStorage`,
3. oraz warstwa UI/ interface użytkownika/ kod HTML tworzący reprezentację naszej aplikacji w przeglądarce, która to warstwa jest odzwierciedleniem stanu aplikacji JavaScript, która z kolei jest odzwierciedleniem tego, co jest zapisane w `localStorage`.

Ponadto, po dodaniu obsługi przycisków, ta trzecia warstwa (UI/ HTML) będzie uruchamiała w odpowiedzi kod JavaScript z drugiej warstwy, który z kolei będzie aktualizował `localStorage` i ponownie renderował zauktualizowane zadania jako elementy listy HTML. Koło się zamyka.

W tym przypadku mamy do czynienia z podejściem/ koncepcją w programowaniu, którą określa się mianem *single source of truth* (*pojedyncze źródło prawdy*).

W naszej aplikacji wszystko zależy od tego, co jest w `localStorage` - to jest nasze źródło prawdy. Z niego pobieramy zadania, a dopiero potem je wyświetlamy na ekranie; aktualizujemy zadania w `localStorage` po każdej modyfikacji, w związku z czym zmienna `tasks` jest ściśle zsynchronizowana z `localStorage`, a kod HTML jest z kolei zsynchronizowany z JavaScriptem - zmienną `tasks`.

W związku z tym nasze podejście było następujące:

- pobieramy dane z `localStorage`,
- renderujemy je na ekranie,
- kiedy jakieś zadanie zostaje dodane/ usunięte, aktualizujemy `localStorage` i na nowo renderujemy zaktualizowaną listę zadań (co znaczy, że najpierw usuwamy starą listę i tworzymy jej nową wersję - to zajmuje milisekundę).

Dzięki takiemu zabiegowi, mogliśmy stworzyć jedną funkcję - `renderTasks()`, która właśnie renderuje wszystkie `task`i za każdym razem, kiedy dochodzi do zmian oraz kiedy po raz pierwszy pobieramy je z `localStorage`.

Podobnie updatujemy nasz `localStorage` za pomocą jednej funkcji `updateTasksInLocalStorage()`, którą wywołujemy w każdej funkcji modyfikującej listę zadań.

## Okno dialogowe `prompt` i atrybut `onclick` | Dodajemy zadanie za pomocą przycisku i okna dialogowego `prompt`

---

Mimo że nasze zadania wyświetlają się i aktualizują już nie tylko w konsoli, ale także w przeglądarce, nadal musimy nimi zarządzać z poziomu konsoli za pomocą ręcznie wpisywanych stworzonych przez nas funkcji...

Jest to niewygodne, ale także uniemożliwia zwykłym nieprogramującym użytkownikom korzystanie z naszej aplikacji.

Dlatego naszym kolejnym krokiem jest zmodyfikowanie funkcji `addTask()` w taki sposób, aby otwierała wbudowane okno dialogowe przeglądarki `prompt`, w którym użytkownik może wpisać swoje zadanie i kliknąć Enter, natomiast funkcja ta będzie wywoływana przez kliknięcie przycisku "dodaj zadanie".

### `prompt()`

Najpierw sprawdźmy, czym jest wbudowana funkcja `prompt()`. Wpisz w konsoli `prompt()`, kliknij Enter i zobacz, co się stało. Na górze przeglądarki otworzyło się nowe okno z polem do wprowadzania treści.

Jeśli coś tam wpiszesz, a potem klikniesz *Enter* lub przycisk *OK*, w konsoli zostanie zwrócona treść, którą wpisałeś/aś, w postaci ciągu tekstowego (*string*)! Jeśli z kolei klikniesz przycisk *Anuluj/ Cancel* lub też *Esc* na klawiaturze, funkcja zwróci `null`, czyli brak treści.

Mamy teraz wygodne wbudowane narzędzie do pobierania danych od użytkownika, które może nam zastąpić klasyczny formularz (oraz konieczność wklepywania tej treści ręcznie w funkcji `addTask()` w konsoli). Owszem, w poważnych aplikacjach korzystamy z formularzy, aczkolwiek na razie wystarczy nam takie działające rozwiązanie. Rozbudujmy teraz funkcję `addTask()`, dodając tę funkcjonalność:

```javascript
// usuń argument newTask z nawiasów funkcji,
// ponieważ nie będziemy już go wprowadzać ręcznie:
function addTask() {
  // deklarujemy zmienną newTask, używając const, ponieważ nie będziemy jej modyfikować,
  // która przyjmuje wartość zwracaną przez wbudowaną funkcję prompt(),
  // która to wartość jest tym, co wpisze użytkownik w oknie:
  const newTask = prompt("Wpisz nowe zadanie:");

  // reszta kodu pozostaje bez zmian:
  tasks.push(newTask);

  updateTasksInLocalStorage();

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  renderTasks();
}
```

Tak! Teraz możemy doświadczyć namiastki prawdziwej aplikacji! Co ciekawe, to okienko jest także dostępne na telefonach, w związku z czym, gdybyśmy opublikowali naszą aplikację jako prawdziwą stronę w internecie (a mogę Cię tego nauczyć), a potem otworzylibyśmy ją w przeglądarce na telefonie, to zadziała tak samo.

### atrybut HTML `onclick`

Musimy teraz dopisać dosłownie kilka znaków w naszym kodzie HTML, by wywołać funkcję `addTask()` poprzez kliknięcie przycisku *Dodaj zadanie*. W związku z tym otwórz plik `todo-app.html` w notatniku i uzupełnij tylko jedną linijkę zawierającą `<button>dodaj zadanie</button>` o następujący kod:

```html
<!-- poprzedni kod HTML -->

<button onclick="addTask()">dodaj zadanie</button>

<!-- kolejny kod HTML -->
```

Do znacznika `<button>`, ale także wielu innych znaczników, można dodać **atrybut `onclick`, do którego można przypisać funkcję, która ma być wywołana po kliknięciu** w przycisk. Nie jest to najlepszy sposób na dodawanie funkcjonalności do HTMLa, ale nam na razie wystarczy.

Zapisz teraz plik `todo-app.html` (Ctrl+S), odśwież przeglądarkę, uruchom plik `todo-app-dom` z poziomu konsoli (zakładka `snippets`) => `Ctrl+Enter` lub klikając ikonkę trójkąta, a teraz spróbuj kliknąć w przycisk "Dodaj zadanie".

Jeśli wszystko zrobiłeś/aś dobrze, to w odpowiedzi na kliknięcie przycisku otworzyło się okno dialogowe, możesz wpisać treść zadania, a zostanie ono dodane do `localStorage` i wyświetli się w przeglądarce!

Nasza aplikacja jest coraz bardziej interaktywna!

## Usuwamy zadania za pomocą przycisku

---

### Czyścimy listę | Usuwamy wszystkie zadania

Skoro tak dobrze poszło nam przypisywanie funkcji do przycisków, zróbmy to samo w celu usuwania zadań. Zacznijmy od usunięcia wszystkich zadań na raz za pomocą przycisku *wyczyść listę*, ponieważ to będzie najłatwiejsze - mamy już gotową funkcję `deleteAllTasks()`, której nie będziemy nawet modyfikować oraz wiemy, jak przypisać obsługę kliknięcia do elementu HTML. Zmodyfikujmy więc ostatnią linijkę w naszym kodzie HTML:

```html
<!-- poprzedni kod HTML -->

<button onclick="deleteAllTasks()">wyczyść listę</button>
```

I to tyle! Zapisz plik HTML, otwórz go w przeglądarce, uruchom nasz plik JavaScript w zakładce `snippets` oraz spróbuj teraz dodać kilka zadań (oczywiście za pomocą przycisku *dodaj zadanie*), po czym usuń je wszystkie na raz klikając w przycisk *wyczyść listę*. Nasze 2 (na razie jedyne) przyciski aplikacji działają!

### Usuwamy pojedyncze zadania

Jeśli chodzi usunięcie pojedynczego zadania, to sprawa się trochę komplikuje. Przede wszystkim, zauważ, że nie mamy w ogóle przycisku/ów do usuwania poszczególnych zadań! W kursie HTML dodaliśmy taki przycisk do każdego statycznie wpisanego zadania, aczkolwiek później w tym kursie dynamicznie tworzymy nowe zadanie jako element listy, ale bez przycisku.

W związku z tym, musimy zmodyfikować funkcję `appendTaskToTheTasksList()` w taki sposób, żeby tworząc element listy (zadanie) nie tylko wyświetliła zadanie, ale także wyrenderowała obok niego przycisk do usuwania tego zadania.

Zmodyfikuj funkcję `appendTaskToTheTasksList()` zgodnie z poniższym kodem - wszelkie szczegóły są wyjaśnione w komentarzach:

```javascript

// dodaj w nawiasach drugi argument - indeks zadania,
// byśmy mogli go przekazać do deleteTask(), która potrzebuje indeksu
// (pamiętaj, że appendTaskToTheTasksList() jest później przekazana do metody forEach,
// która przekaże 2 argumenty: task i index):
function appendTaskToTheTasksList(task, index) {
  // utwórz nowy element listy li:
  const li = document.createElement("li");
  // i przypisz do niego wartość zadania:

  //====================> ZMODYFIKOWANY KOD: ============================//
  li.textContent = task + " "; // dodajemy spację, by oddzielić tekst od przycisku usuń

  // utwórz przycisk usuwania zadania:
  const deleteButton = document.createElement("button");
  // przypisz do niego nazwę:
  deleteButton.textContent = "usuń";

  // przypisz do niego funkcję usuwania tego konkretnego zadania
  // (to jest nasza istniejąca już funkcja deleteTask())
  deleteButton.onclick = function() {
    deleteTask(index);
  }
  // dodaj przycisk do nowego elementu listy
  li.appendChild(deleteButton); // teraz przycisk będzie dodany po zadaniu po spacji

  //================> KONIEC ZMODYFIKOWANEGO KODU =======================//
  tasksList.appendChild(li);
}
```

Brawo! Teraz musimy przetestować usuwanie zadań!

W tym miejscu chciałbym dokładniej wyjaśnić, co się dzieje w tym framencie kodu powyższej zmodyfikowanej funkcji:

```javascript
// ... kod funkcji appendTaskToTheTasksList()...

// przypisz do niego funkcję usuwania tego konkretnego zadania
// (to jest nasza istniejąca już funkcja deleteTask())
deleteButton.onclick = function() {
  deleteTask(index);
}

  // ...dalszy kod funkcji appendTaskToTheTasksList()...
```

W powyższym kodzie przypisaliśmy funkcję usuwania zadania do atrybutu `onclick`, ale nie bezpośrednio w HTMLu, jak to robiliśmy wcześniej, tylko za pośrednictwem kodu JavaScript. `deleteButton` jest zmienną reprezentującą przycisk, w związku z tym mamy dostęp także do atrybutów tego przycisku, tj. np. wspomniany `onclick`. Po prostu przypisaliśmy do niego wartość w postaci funkcji.

Dlaczego natomiast użyliśmy słowa kluczowego `function()`, a nie np. po prostu podaliśmy nazwę funkcji? Jest tak dlatego, że gdybyśmy przypisali funkcję z argumentem w ten sposób: `deleteButton.onclick = deleteTask(index);`, to wyskoczy nam błąd podczas usuwania, ponieważ nie przypisaliśmy tak naprawdę funkcji, ile ją wywołaliśmy wraz z argumentem już w momencie przypisania!

Moglibyśmy z kolei poprawnie przypisać funkcję w ten sposób: `deleteButton.onclick = deleteTask;`. Jak widzisz, nie ma nawiasów, w związku z tym nie ma błędu i można by było wywołać teraz tę przypisaną funkcję w ten sposób: `deleteButton.onclick(index)`, tyle że nie jesteśmy w stanie tego zrobić, ponieważ `deleteButton.onclick` zostanie wywołane z poziomu HTML i nie ma jak przekazać tam argumentu `index`.

W związku z tym przypisaliśmy do `deleteButton.onclick` deklarację funkcji anonimowej `function(){}` (anonimowej, czyli nie posiadającej nazwy po słowie kluczowym `function`), która z kolei wywołuje wewnątrz funkcję `deleteTask(index)` w momencie, kiedy kliknie się w przycisk.

W nowoczesnym JavaScripcie moglibyśmy to także zrobić prościej, za pomocą funkcji strzałkowej (*arrow function*): `deleteButton.onclick = () => deleteTask(index)`, aczkolwiek ten zapis również wymagałby wyjaśnienia, natomiast znamy się już na definiowaniu funkcji za pomocą słowa kluczowego `function`, w związku z czym wybrałem tę opcję.

## Dodajemy zadanie do określonego indeksu za pomocą przycisku i zmodyfikowanej funkcji `addTaskAtIndex()`

---

Mamy jeszcze jedną funkcję pochodzącą z naszej konsolowej aplikacji, która nie została zmodyfikowana, by współdziałała z HTMLem - `addTaskAtIndex()`, dodająca zadanie w określonym miejscu (indeksie). Niemniej jednak jest bardzo przydatna, w związku z czym także ją zaimplementujemy.

Zastanówmy się, uwzględniając wszystko, co dotychczas zrobiliśmy, jak możemy to zrobić?

1. Najpierw zmodyfikujemy funkcję `addTaskAtIndex()` w podobny sposób, w jaki zmodyfikowaliśmy funkcję `addTask()`, czyli tak, by zamiast pobierać zadanie jako argument, będzie otwierała okno dialogowe `prompt` i pobierała treść wprowadzoną przez użytkownika:

```javascript
// usuń argument newTask z nawiasów,
// ponieważ będzie wprowadzany przez użytkownika:
function addTaskAtIndex(index) {
  // deklarujemy zmienną newTask,
  // która przyjmuje wartość zwracaną przez wbudowaną funkcję prompt():
  const newTask = prompt("Wpisz nowe zadanie:");

  tasks.splice(index, 0, newTask);

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  updateTasksInLocalStorage();

  renderTasks();
}
```

2. Podczas tworzenia elementu listy zadań, za co jest odpowiedzialna funkcja `appendTaskToTheTasksList()`, oprócz samego zadania oraz przycisku usunięcia działania, dodamy także przycisk *dodaj przed*, który będzie służył do dodania zadania przed wybranym zadaniem, czyli innymi słowy dodamy nowe zadanie pod tym samym indeksem, pod którym obecnie znajduje się inne zadanie (czyli to, co już w tej chwili robi funkcja `addTaskAtIndex()`). Na pierwszy rzut oka może się to wydawać dziwne: przycisk nazwaliśmy *dodaj przed*, a dodajemy właśnie w tym konkretnym miejscu, niemniej jednak chodzi o podkreślenie faktu dodania nowego zadania nie tyle pod danym indeksem, ile przed zadaniem, które w tej chwili jest pod tym indeksem, ale po chwili przesunie się o jedną pozycję (indeks).
3. Do przycisku *dodaj przed* przypiszemy wywołanie funkcji `addTaskAtIndex()` i przekażemy jej indeks jako argument:

```javascript
function appendTaskToTheTasksList(task, index) {
  //====================> DOTYCHCZASOWY KOD: ============================//
  const li = document.createElement("li");

  li.textContent = task + " ";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "usuń";

  deleteButton.onclick = function() {
    deleteTask(index);
  }

  li.appendChild(deleteButton);

  //====================> NOWY KOD: ============================//

  // utwórz przycisk dodania zadania pod tym indeksem:
  const addAtIndexButton = document.createElement("button");
  // przypisz do niego nazwę:
  addAtIndexButton.textContent = "dodaj przed";

  // przypisz do niego funkcję dodania zadania pod konkretnym indeksem
  // (to jest nasza zmodyfikowana funkcja addTaskAtIndex())
  addAtIndexButton.onclick = function() {
    addTaskAtIndex(index);
  }
  // dodaj przycisk do nowego elementu listy
  li.appendChild(addAtIndexButton);

  //================> KONIEC NOWEGO KODU =======================//
  tasksList.appendChild(li);
}
```

Zapisz zmiany w pliku, uruchom go po raz kolejny w konsoli i sprawdź, jak działa!

## Kompletny kod pliku HTML i pliku JavaScript

Po ukończeniu tego kursu uproszczony kod pliku HTML powinien wyglądać tak:

```html
<h1>Twoje zadania</h1>

<hr>

<button onclick="addTask()">dodaj zadanie</button>

<ul id="tasks-list">

</ul>

<button onclick="deleteAllTasks()">wyczyść listę</button>
```

Z kolei kod pliku JavaScript powinien wyglądać tak:

```javascript
console.clear();

function getTasksFromLocalStorage() {
  const storedTasksStringified = localStorage.getItem("tasks");

  const storedTasks = JSON.parse(storedTasksStringified);

  return storedTasks;
}

let tasks = getTasksFromLocalStorage() || [];

//========================== DOM ======================//

const tasksList = document.getElementById("tasks-list");

function appendTaskToTheTasksList(task, index) {
  const li = document.createElement("li");
  li.textContent = task + " ";
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "usuń";

  deleteButton.onclick = function() {
    deleteTask(index);
  }

  li.appendChild(deleteButton);

  const addAtIndexButton = document.createElement("button");
  addAtIndexButton.textContent = "dodaj przed";

  addAtIndexButton.onclick = function() {
    addTaskAtIndex(index);
  }

  li.appendChild(addAtIndexButton);
  
  tasksList.appendChild(li);
}

function renderTasks() {
  tasksList.innerHTML = "";

  tasks.forEach(appendTaskToTheTasksList);

  console.log("Twoje zapisane zadania:", tasks);
}

//============================ DOM (koniec) ==========================//

function updateTasksInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const newTask = prompt("Wpisz nowe zadanie:"); // <= prompt()

  tasks.push(newTask);

  updateTasksInLocalStorage();

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  renderTasks();
}

function addTaskAtIndex(index) {
  const newTask = prompt("Wpisz nowe zadanie:"); // <= prompt()
  
  tasks.splice(index, 0, newTask);

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  updateTasksInLocalStorage();

  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  updateTasksInLocalStorage();

  renderTasks();
}

function deleteAllTasks() {
  tasks = [];

  console.log("Wszystkie zadania zostały usunięte...");

  updateTasksInLocalStorage(tasks);

  renderTasks();
}

renderTasks();
```

W następnym rozdziale połączymy te dwa pliki w jeden plik HTML. Do dzieła!

## Kompletny kod aplikacji w jednym pliku HTML, zawierającym kod JavaScript w tagu `<script>`

---

Nasza aplikacja działa, ale nie jest to jeszcze aż tak wygodne, jakim by mogło być, ponieważ musimy najpierw odpalić plik HTML w przeglądarce, a potem dodatkowo odpalić plik JavaScript z poziomu konsoli i zakładki `snippets`.

Nasz HTML i JavaScript żyją swoim życiem. Musimy natomiast powiązać te pliki. Możemy to zrobić na 2 sposoby.

Pierwszym sposobem jest skopiować <a href="/kursy/html-javascript-dom/kompletny-kod-pliku-html-i-pliku-javascript" target="_blank">kod naszej aplikacji JavaScript z poprzedniej rozdziału</a> (lub z pliku z zakładki `snippets`) i wkleić go wewnątrz tagu `<script></script>` bezpośrednio w pliku HTML (stwórz nowy plik z nową nazwą).

Nasz kod HTML musimy z kolei osadzić w szablonie HTML, co już robiliśmy <a href="/kursy/html/szablon-pliku-html" target="_blank">tutaj</a>):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todo App | kodujemywbiurze.pl</title>
  </head>

  <body>
    <!-- kod HTML -->
    <h1>Twoje zadania</h1>

    <hr>

    <button onclick="addTask()">dodaj zadanie</button>

    <ul id="tasks-list">

    </ul>

    <button onclick="deleteAllTasks()">wyczyść listę</button>

    <!-- kod JavaScript (umieszczony pomiędzy tagami <script></script>) -->
    <!--
        1. dodaj poniżej otwierający tag <script>
        2. od następnej linijki po otwierającycm tagu <script> wklej całość kodu JavaScript
        3. po kodzie JavaScipt w nowej linijce dodaj zamykający tag </script>
    -->
    <script>
      console.clear();

      function getTasksFromLocalStorage() {
        const storedTasksStringified = localStorage.getItem("tasks");

        const storedTasks = JSON.parse(storedTasksStringified);

        return storedTasks;
      }

      let tasks = getTasksFromLocalStorage() || [];

      const tasksList = document.getElementById("tasks-list");

      function appendTaskToTheTasksList(task, index) {
        const li = document.createElement("li");
        li.textContent = task + " ";
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "usuń";

        deleteButton.onclick = function() {
          deleteTask(index);
        }
        
        li.appendChild(deleteButton);

        const addAtIndexButton = document.createElement("button");
        addAtIndexButton.textContent = "dodaj przed";

        addAtIndexButton.onclick = function() {
          addTaskAtIndex(index);
        }

        li.appendChild(addAtIndexButton);
        
        tasksList.appendChild(li);
      }

      function renderTasks() {
        tasksList.innerHTML = "";

        tasks.forEach(appendTaskToTheTasksList);

        console.log("Twoje zapisane zadania:", tasks);
      }

      function updateTasksInLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

      function addTask() {
        const newTask = prompt("Wpisz nowe zadanie:");

        tasks.push(newTask);

        updateTasksInLocalStorage();

        console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

        renderTasks();
      }

      function addTaskAtIndex(index) {
        const newTask = prompt("Wpisz nowe zadanie:");
        
        tasks.splice(index, 0, newTask);

        console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

        updateTasksInLocalStorage();

        renderTasks();
      }

      function deleteTask(index) {
        tasks.splice(index, 1);

        updateTasksInLocalStorage();

        renderTasks();
      }

      function deleteAllTasks() {
        tasks = [];

        console.log("Wszystkie zadania zostały usunięte...");

        updateTasksInLocalStorage(tasks);

        renderTasks();
      }

      renderTasks();
    </script>
  </body>
</html>
```

Teraz możemy odpalić ten plik w przeglądarce, dzięki czemu aplikacja będzie działać natychmiast - bez uruchamiania żadnego dodatkowego pliku js w `snippets`, jak to miało miejsce dotychczas!

Wszystko jest w jednym pliku - nasza prawdziwa aplikacja webowa, którą możemy zapisać na komputerze lub też przesłać mailem znajomemu, dzięki czemu pobierze plik i odpali na swoim komputerze.

W związku z tym pamiętaj, że gdybyś chciał/a pisać kod HTML i JavaScript w jednym pliku, to powinieneś/aś utworzyć plik HTML, po czym wypełnić go w następujący sposób:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tutaj wpisz tytuł swojej aplikacji/ strony internetowej</title>
  </head>

  <body>
    <!-- tutaj poniżej pisz kod HTML -->

    <!-- tutaj (po kodzie HTML) możesz pisać kod JavaScript wewnątrz tagu <script> -->
    <script>
      // kod JavaScript...
    </script>
  </body>
</html>
```

## Kompletny kod aplikacji w jednym folderze zawierającym plik HTML oraz plik JavaScript podpięty w tagu `<script>`

---

Teraz jest już znacznie lepiej - cały kod naszej aplikacji jest w jednym pliku, więc możemy go odpalić w przeglądarce i wszystko działa od razu. Najpierw przeglądarka renderuje HTML, a potem przetwarza kod JavaScript zawarty w tagu `<script>`. Kod nadal ma dostęp do `localStorage`, dzięki czemu będzie przechowywał nasze zadania przypisane do tego konkretnego pliku.

Niemniej jednak, nasz plik HTML jest dość długi, a w związku z tym nieczytelny. Dlatego w prawdziwym programistycznym świecie, kod JavaScript jest zapisywany w osobnym pliku (lub plikach), który później podpinamy do pliku HTML również za pośrednictwem tagu `<script>`. Żeby to zadziałało, musimy zrobić kilka rzeczy:

1. Utwórz folder (np. na pulpicie) o nazwie `todo-app`.
2. Otwórz aplikację *Notatnik*, wklej tam <a href="/kursy/html-javascript-dom/kompletny-kod-pliku-html-i-pliku-javascript" target="_blank">kod naszej aplikacji JavaScript z poprzedniej rozdziału</a> (lub z pliku z zakładki `snippets`), po czym zapisz ten plik pod nazwą `script.js` w folderze `todo-app`, pamiętając o rozszerzeniu `.js` po nazwie pliku i o tym, by wybrać typ "wszystkie pliki".
3. Otwórz aplikację *Notatnik*, wklej tam kod HTML (bez JavaScriptu). Musisz teraz "podpiąć" plik `script.js` do `index.html` w ten sposób, że przed tagiem zamykającym `</body>` umieszczamy następujący kod `<script src="script.js">`, gdzie atrybut `src` (skrót od *source* - źródło) otrzymuje nazwę pliku JavaScript, co automatycznie "zaciąga" cały JavaScriptowy kod. Po tej zmianie plik HTML wygląda tak:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todo App | kodujemywbiurze.pl</title>
  </head>

  <body>
    <!-- kod HTML -->
    <h1>Twoje zadania</h1>

    <hr>

    <button onclick="addTask()">dodaj zadanie</button>

    <ul id="tasks-list">

    </ul>

    <button onclick="deleteAllTasks()">wyczyść listę</button>

    <!-- kod JavaScript -->
    <!-- podepnij plik .js 👇 -->
    <script src="script.js"></script>
  </body>
</html>
```

4. Zapisz plik pod nazwą `index.html` (nazwa *index* jest powszechną praktyką w przypadku nazewnictwa głównego pliku HTML aplikacji; ponadto przeglądarka szuka najpierw pliku o takiej nazwie i ma on pierwszeństwo podczas uruchomienia), pamiętając o rozszerzeniu `.html` oraz o tym, żeby wybrać typ pliku "wszystkie pliki".

Teraz nasz kod jest podzielony na dwa pliki, HTML i JavaScript, znajdują się w jednym folderze oraz plik .js jest podpięty do pliku HTML za pośrednictwem tagu `<script>`. Teraz wystarczy, że wejdziemy do folderu `todo-app`, otworzymy plik `index.html` w przeglądarce i aplikacja działa natychmiastowo!

Jest to najbardziej profesjonalny sposób, w jaki możemy zorganizować kod naszej aplikacji w danej chwili, czyli... po ukończeniu wszystkich 4 kursów dostępnych w chwili obecnej na *kodujemywbiurze.pl*!

Poświęć jeszcze chwilę na przeczytanie *Zakończenia* - następnego artykułu, w którym piszę, jaka przyszłość czeka *kodujemywbiurze.pl* i dlaczego w dużej mierze zależy od Ciebie 😏😉! 

## Zakończenie

---

Jeśli dotarłeś/aś do tego miejsca, jestem z Ciebie niesamowicie dumny! Wykonałeś/aś kawał ogromnej roboty! I mimo że ja również wykonałem kawał ogromnej roboty, to nie jestem w stanie wyobrazić, co teraz czujesz, ponieważ swoje początki z kodowaniem miałem pod koniec 2020 roku...

Dlatego zazdroszczę Ci - chciałbym zacząć naukę jeszcze raz, mądrzej, lepiej, szybciej, czyli dokładnie w taki sposób, w jaki zaprojektowałem i napisałem niniejszy kurs *(mam na myśli kurs, na który składają się wszystkie dotychczasowe kursy na tej stronie)*.

Chociaż dzięki temu, że od dwóch miesięcy pracowałem nad niniejszym kursem, mogłem się poczuć trochę jak nowicjusz z kilku powodów:

1. Po pierwsze, musiałem sobie wyobrazić, z jednej strony, że nic nie wiem nt. programowania webowego, z drugiej zaś strony, musiałem zebrać się z myślami i przeanalizować swoją 3-letnią przygodę z programowaniem, by wyłuskać najistotniejsze podstawy, które są niezbędne na samym początku w określonej kolejności.
2. Po drugie, może to zabrzmieć dziwnie, ale... sam się nauczyłem wielu rzeczy pisząc ten kurs. Od dawna nie piszę kodu w czystym JavaScripcie (*Vanilla JavaScript*) i HTMLu (ogólnie obecnie żaden doświadczony programista tego nie robi), tylko używam JavaScriptowych frameworków, tj. React, Next.js, Svelte i SvelteKit, a ostatnio nawet Vue. Dzięki frameworkom można tworzyć niesamowite i bardzo złożone rzeczy o wiele szybciej, wydajniej i bardziej czytelnie. Niemniej jednak, najpierw trzeba poznać i zrozumieć podstawy, które, jak widzisz, doprowadziły nas do stworzenia prawdziwej, interaktywnej aplikacji. Dlatego sam musiałem odświeżyć wybrane podstawy JavaScriptu i... niejednokrotnie byłem zaskoczony!
3. Po raz pierwszy korzystałem z Chrome snippets i jestem mega zadowolony z tego sposobu na testowanie i reużywanie kodu JavaScript w przeglądarce.

Jeśli wydaje Ci się, że podstawy HTMLa i JavaScriptu masz już za sobą, cóż, muszę Cię trochę rozczarować... To jest dopiero część podstaw, aczkolwiek im dalej, tym będzie już łatwiej.

Dlatego teraz muszę zrobić sobie świąteczną przerwę od tworzenia treści, oficjalnie opublikować kurs i... czekać na feedback z Waszej strony.

Jeśli uważasz, że ten kurs (w sumie 3 kursy) był dla Ciebie przydatny, podobało Ci się, w jaki sposób dzielę się wiedzą, to bardzo chętnie będę to kontynuował - nic nie motywuje nauczyciela/ mentora bardziej, niż chłonni wiedzy uczniowe!

Dlatego proszę Cię o to, byś dał/a mi znać, czy chcesz... więcej! Plan mam na kilka kursów do przodu, więc teraz kolej na Twój krok:

- polub i obserwuj <a href="https://www.facebook.com/kodujemywbiurze" target="_blank">stronę *Kodujemy w biurze* na Facebooku</a>, no i oczywiście udostępnij tę stronę i jej profil, by inni także mogli skorzystać z tej samej wiedzy i spróbować swoich sił w kodowaniu,
- możesz też obserwować i polecić ten projekt na <a href="https://www.linkedin.com/company/kodujemywbiurze" target="_blank">LinkedIn</a> (nie wiem, który z tych portali bardziej się sprawdzi).

Możesz też odezwać się do mnie bezpośrednio na Facebooku lub LinkedInie!

Niech JavaScript będzie z Tobą!

*Vadim*


