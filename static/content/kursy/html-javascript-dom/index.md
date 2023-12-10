## Wprowadzenie

---

**Witaj w darmowym kursie *Integrujemy HTML i JavaScript. Podstawy DOM. Pierwsza interaktywna aplikacja webowa***!

W niniejszym kursie poznamy podstawy integracji HTML i JavaScript za pomocą DOM, wystarczające do **przeniesienia naszej aplikacji do zarządzania zadaniami z konsoli bezpośrednio do przeglądarki, dzięki czemu będzie funkcjonowała jak aplikacja z prawdziwego zdarzenia**, z którymi miałeś/aś do czynienia mnóstwo razy.

Na tym etapie powinniśmy już mieć działającą dynamiczną aplikację konsolową, w której możemy zarządzać zadaniami i znać podstawy JavaScipt, co znaczy, że probiłeś/aś [kurs JavaScript](/kursy/javascript).

Powinniśmy mieć też prosty interface - podstawowy statyczny kod HTML, który zrobiliśmy w [kursie HTML](/kursy/html).

W związku z tym rób ten kurs tylko jeśli znasz podstawy HTML i JavaScript - niezależnie od tego, czy poznałeś/aś je samodzielnie, czy też przerobiłeś/aś moje 2 poprzedzające kursy: <a href="/kursy/javascript" target="_blank">kurs JavaScript</a> i <a href="/kursy/html" target="_blank">kurs HTML</a>

Musimy teraz połączyć/ zintegrować te dwie warstwy - tzw. logikę (kod JavaScript) oraz UI (*user interface*, kod HTML) - w jedną spójną aplikację.

Ta integracja będzie możliwa dzięki wykorzystaniu właściwości i metod DOM, które dają nam dostęp i możliwość manipulacji HTML za pomocą JavaScript! Zrobimy to stopniowo, poznając krok po kroku podstawy pracy z DOM.

DOM (*Document Object Model*) jest kluczowym elementem, który łączy HTML z JavaScriptem. DOM jest reprezentacją struktury HTML i jest manipulowany za pomocą JavaScriptu, ponieważ DOM sam w sobie jest JavaScriptowym obiektem (nie omawialiśmy tego jeszcze w kursie JavaScript), a to znaczy, że udostępnia różne właściwości oraz metody, za pomocą których możemy wprowadzać wszelakie zmiany w kodzie HTML z poziomu kodu JavaScript.

HTML jest fundamentalnym elementem, na którym opiera się struktura strony internetowej, a znajomość jego podstaw jest niezbędna do zrozumienia DOM-u. Z kolei JavaScript jest niezbędny do manipulacji DOMem.

### Co zrobimy w niniejszym kursie?

W tym kursie połączymy zarówno naszą wiedzę z zakresu HTML i JavaScript, jak również zintegrujemy zbudowany przez nas HTMLowy UI oraz konsolową aplikację JavaScript w jedną interaktywną i niepodzielną aplikację webową do zarządzania zadaniami.

Najpierw poznamy wybrane metody i właściwości **DOM**, tj.:

- `document.getElementById()`,
- `document.createElement()`,
- `appendChild()`,
- `textContent`,
- `innerHTML`,

dzięki którym będziemy manipulować HTMLem z poziomu konsoli.

Ponadto poznamy i wykorzystamy także JavaScriptowe pętle `for` i `forEach`.

Później przeniesiemy zarządzanie zadaniami z konsoli do pliku JavaScript, który połączymy z plikiem HTML.

Wykorzystamy także wbudowane okna dialogowe przeglądarki:

- `alert`,
- `confirm`,
- `prompt`

do wygodnego wprowadzania naszych zadań, co pozwoli nam na razie uniknąć konieczności poznawania podstaw obsługi formularzy.

I jak na razie będzie to ostatni kurs na *kodujemywbiurze.pl* oraz ostatni etap budowy naszej aplikacji. Potem będę czekał na feedback pierwszych użytkowników i ewentualnie dalej rozbudowywał zarówno stronę i kursy, jak i samą aplikację, którą stworzyliśmy!

*Happy Coding!*

## `document.getElementById()`, id | Uzyskujemy dostęp do elementu drzewa DOM - listy zadań

---

Na razie nasz UI (czyli to, co widzimy w przeglądarce - HTML, który napisaliśmy w poprzednim kursie) jest absolutnie statyczny. Owszem, mamy listę zadań, ale są one zakodowane w HTMLu i nie możemy z nimi nic zrobić jako użytkownicy.

Chcemy pobrać zadania z `localStorage`, co już udało się nam zrobić w kursie JavaScript, i wyświetlić właśnie te zadania! Żeby to zrobić, musimy uzyskać dostęp do naszej listy HTML `<ul>` z poziomu kodu JavaScript.

Możemy to zrobić na kilka sposobów, ale posłużymy się metodą `document.getElementById()`.

Metoda `document.getElementById()`, jak sama nazwa wskazuje, pozwala na uzyskanie dostępu do elementu drzewa DOM (czyli dowolnego znacznika) o określonym `id`.

Nasza lista HTML nie ma przypisanego `id`, więc musimy najpierw je dodać do kodu HTML. W tagu otwierającym `<ul>` dodaj `id="tasks-list"` w ten sposób:

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
let tasksList = document.getElementById("tasks-list");

console.log(tasksList);
```

Jak widzisz, w konsoli wyświetlił Ci się wycinek drzewa DOM, zawierający listę `<ul>`, którą można rozwinąć i zobaczyć wszystkie elementy listy `<li>`. Z kolei możesz teraz wpisać w konsoli po prostu `tasksList.` i zobaczysz, że po kropce wyświetli Ci się długa lista dostępnych metod, które możesz zastosować do danego węzła (*node*) DOM, np. `tasksList.children`, który wyświetli Ci tablicę zawierającą wszystkie "dzieci" danego węzła.

To wszystko oznacza, że właśnie poprawnie uzyskałeś/aś dostęp do HTMLa za pomocą JavaScript i możesz teraz manipulować tymi węzłami.

## `document.createElement()`, `textContent`, `appendChild()` | Tworzymy i dodajemy zadania jako nowe węzły DOM

---

Ok, więc wiemy już, jak uzyskać dostęp do elementu/ węzła DOM. Spróbujmy teraz stworzyć i dodać zadania do naszej listy z poziomu kodu JavaScript. Będzie nam to potrzebne w przyszłości, by po pobraniu zadań z `localStorage` za pomocą JavaScript, dodać je w postaci kodu HMTL do listy.

Usuńmy najpierw ręcznie wszystkie elementy `<li>` z naszego kodu HTML, zapiszmy plik i odświeżmy przeglądarkę. Twoja lista w przeglądarce powinna teraz być pusta, a kod HTML powinien wyglądać tak:

```html
<h1>Twoje zadania</h1>

<hr>

<button>dodaj zadanie</button>

<ul id="tasks-list">

</ul>

<button>wyczyść listę</button>
```

Teraz przejdźmy do konsoli i stwórzmy nowy element `<li>` za pomocą metody `document.createElement()`, przypisując go do zmiennej `li` (*list element*):

```javascript
let li = document.createElement("li");

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
let tasksList = document.getElementById("tasks-list");

// dodajemy wcześniej utworzony element li z przypisaną treścią do listy:
tasksList.appendChild(li); // jeśli wcześniej przeładowałeś/aś stronę, to musisz stworzyć ten element jeszcze raz

console.log(tasksList);
```

Udało się! Utworzyliśmy nowy element, przypisaliśmy do niego wartość, a potem dodaliśmy do istniejącego drzewa DOM za pomocą JavaScript! Zarówno w konsoli, jak i w przeglądarce widzimy, że do listy `<ul id="tasks-list">` zostało dodane zadanie `<li>zrobić kawę</li>`.

Teraz, gdybyśmy chcieli dodać kolejne zadania, musielibyśmy za każdym razem napisać dużo kodu... Ale na szczęście znamy trochę JavaScript i wiemy, że powtarzalne zadania najlepiej jest przechowywać w postaci reużywalnych funkcji.

Stwórzmy więc w konsoli funkcję `addTask()`, służącą do dodawania zadań do naszej listy, która będzie przyjmować argument w postaci treści zadania:

```javascript
function addTask(task) {
  // najpierw uzyskujemy dostęp do listy, tak jak wcześniej:
  // mimo że w konsoli mamy już dostęp do tej listy,
  // na wszelki wypadek zadeklarujmy ją jeszcze raz
  let tasksList = document.getElementById("tasks-list");

  // tworzymy nowy element li:
  let li = document.createElement("li");
  // przypisujemy do elementu li wartość tekstową (argument funkcji):
  li.textContent = task;

  // dodajemy w pełni ukształtowany element do listy:
  tasksList.appendChild(li);

  // sprawdźmy, jak teraz wygląda lista w konsoli:
  console.log(tasksList);
}
```

Pamiętasz pewnie, że w naszej wcześniejszej aplikacji JavaScript też mieliśmy funkcję <a href="/kursy/javascript/funkcje-argumenty-funkcje-wewnatrz-funkcji" target="_blank">addTask()</a>, tyle że dodawała zadanie do `localStorage`. Ponieważ teraz nie jesteśmy w tamtym pliku, tylko w konsoli, te dwie funkcje nie kolidują ze sobą, niemniej jednak, kiedy skorzystamy z tej powyższej funkcji w naszym pliku (a za niedługo to właśnie zrobimy), to zmienimy jej nazwę na bardziej opisową, np.: `appendTaskToTheTasksList()` lub coś w tym stylu, żeby dokładnie zaznaczyć, co robi ta funkcja.

Teraz możesz dodawać zadania w konsoli używając funkcji `addTask()`, a pojawią się one natychmiast w oknie przegladarki. Zobacz, ile trudu sobie zaoszczędziliśmy "opakowując" wcześniejszy kod w funkcję!

```javascript
addTask("wypić jogurt");
addTask("sprawdzić maila");
addTask("posprzątać na biurku");
```

## `innerHTML` | Czyścimy listę zadań za jednym zamachem za pomocą innerHTML

---

Znowu mamy dużo zadań, tyle że tym razem wyświetlają się one bezpośrednio w przeglądarce jako węzły DOM, czyli część prawdziwej strony internetowej, a nie w konsoli, tak jak wcześniej. Jesteśmy coraz bliżej celu.

Spróbujmy teraz dla odmiany wyczyścić naszą listę za jednym zamachem - przyda nam się to w przyszłości. Możemy to zrobić (jak zwykle) na kilka sposobów, a najprostszym z nich jest skorzystanie z właściwości `innerHTML`, czyli dosłownie *wewnętrzny HTML*.

Dzięki tej właściwości dowolnego węzła DOM, możemy przypisać dowolny kod HTML do danego elementu. Nie zagłębiajmy się w szczegóły, tylko przypiszmy do naszej listy... pusty ciąg znaków! W ten sposób usuniemy cały HTML, który znajduje się wewnątrz `<ul>`, czyli elementy listy `<li>`, zawierające nasze zadania:

```javascript
// na wszelki wypadek zadeklarujmy listę jeszcze raz:
let tasksList = document.getElementById("tasks-list");

// czyścimy listę:
tasksList.innerHTML = "";

console.log(tasksList); // => zadania zniknęły!
```

Zaszalejmy i przypiszmy ten kod do funkcji `deleteAllTasks`:

```javascript
function deleteAllTasks() {
  // na wszelki wypadek zadeklarujmy listę jeszcze raz:
  let tasksList = document.getElementById("tasks-list");

  // czyścimy listę:
  tasksList.innerHTML = "";

  console.log(tasksList); // => zadania zniknęły!
}
```

Teraz możemy wygodnie dodawać zadania jako węzły drzewa DOM, czyli przekształcać je w kod HTML naszej strony internetowej w przeglądarce, a potem je usuwać za jednym zamachem. Pobaw się trochę tym kodem znowu, dodaj kilka zadań, potem je usuń.

Możesz też odświeżyć stronę i spróbować samodzielnie od nowa uzyskać dostęp do naszej listy za pomocą `document.getElementById()` i dodać tam zadania za pomocą `document.createElement()`, `textContent` i `appendChild()`.

Wszystko jest fajnie, ale jeśli odświeżymy stronę, to zniknie zarówno kod, który stworzyliśmy, jak również i nasze zadania...

Dlatego w kolejnej lekcji przeniesiemy to, co stworzylismy, do naszego pliku JavaScript w `snippets` (a raczej stworzymy nowy plik - kolejną wersję aplikacji, o matko!) i podłączymy się do `localStorage`, by stamtąd ściągać zadania i wyświetlać je już nie w konsoli, tylko na stronie internetowej w przeglądarce.

Do dzieła!

## Aktualizujemy kod JavaScript o funkcjonalności DOM - pierwsza wersja aplikacji `todo-app-dom`

---

Nie ma sensu dalej tworzyć funkcji w konsoli - stwórzmy nowy plik w `snippets` i nazwijmy go `todo-app-dom`. Skopiuj i wklej tam <a href="/kursy/javascript/podsumowanie-modulu-3-kompletny-kod-aplikacji-w-wersji-20-zintegrowanej-z-localstorage" target="_blank">kod z modułu 3. kursu JavaScript</a>, czyli naszą aplikację konsolową z dostępem do `localStorage`.

PS. Pamiętasz jeszcze, co się dzieje w tym kodzie? 😂😏

Ok, zacznijmy implementować funkcjonalności DOM. Ale...

Tak naprawdę musimy teraz zastanowić się nad pewną kwestią. Możemy wdrożyć funkcjonalności DOM na 2 sposoby:

1. Dodać do kodu stworzone wcześniej funkcje, tj. `deleteAllTasks()` i `addTask()` (zmieniając ich nazwy, by nie kolidowały z identycznie nazwanymi funkcjami w istniejącej już aplikacji) oraz dopisać funkcję usuwającą zadanie z drzewa DOM (używając metody `document.removeChild()`, której jeszcze nie poznaliśmy), a potem wywołać te funkcje w istniejących funkcjach.
2. Podążyć przykładem uniwersalnej funkcji `updateTasksInLocalStorage()`, którą wywoływaliśmy w każdej z funkcji modyfikującej listę zadań i stworzyć podobną uniwersalną funkcję modyfikującą listę HTML w ten sposób, że będzie ona każdorazowo uzupełniać listę o aktualne zadania (niezależnie od tego, czy je dodaliśmy, czy usunęliśmy).

Drugi sposób jest łatwiejszy oraz wymaga mniej kodu, niemniej jednak może być mniej optymalny w przypadku długich list oraz wchodzimy w dość poważny temat związany z architekturą aplikacji i zarządzania jej stanem, a dokładniej chodzi tu o pojedyncze źródło prawdy (*single source of truth*).

Pierwszy sposób wymaga więcej kodu, poznania kolejnych metod DOM oraz JavaScript, ale jest bardziej optymalny w sytuacji, gdyby nasza lista była naprawdę duża.

Mógłbym wybrać jedną z tych opcji, ale... dla Twojego programistycznego rozwoju dobrze będzie poznać obydwa podejścia i ewentualnie samodzielnie dokonać wyboru, która z nich jest dla Ciebie lepsza oraz ewentualnie mieć większy wybór w przyszłości, kiedy będziesz tworzyć kolejne aplikacje.

W programowaniu często nie ma tak, że któraś z opcji jest najlepsza; podobnie też jest z językami programowania - każde podejście, każdy język i technologia mają swoje plusy i minusy oraz jedne są po prostu lepsze w pewnego rodzaju sytuacjach, w innych natomiast nie sprawdziłyby się tak dobrze.

Dlatego zaczniemy od wdrażania najpierw prostszej pod względem kodu opcji 2, a potem zrobimy też kolejną wersję tej aplikacji, implementując nową wiedzę i kroki opisane w podejściu 1.

Otwórz nasz plik HTML `todo-app.html` w przeglądarce, przejdź do konsoli do zadkładki `snippets` i otwórz tam nowo utworzony plik `todo-app-dom`, do którego wcześniej przekopiowałeś/aś kod aplikacji z 3. modułu kursu JavaScript.

Początek pozostawiamy bez zmian:

```javascript
console.clear();

function getTasksFromLocalStorage() {
  let storedTasksStringified = localStorage.getItem("tasks");

  let storedTasks = JSON.parse(storedTasksStringified);

  return storedTasks;
}

let tasks = getTasksFromLocalStorage() || [];

// => tutaj zaczniemy pisać nowy kod => funkcję renderTasks()
// + dopiszemy jedną linijkę do funkcji showTasks()

// ...dalszy kod dotychczasowej aplikacji bez zmian
```

*PS. Jeśli właśnie odkryłeś/aś, że patrzysz na ten kod i nie pamiętasz, jak działa, to wróć do kursu JavaScript i zrób sobie powtórkę!*

Ok, więc na początek czyścimy konsolę, potem deklarujemy funkcję pobierającą zadania zapisane w `localStorage` i zwracającą je oraz deklarujemy zmienną `tasks`, do której przypisujemy pobrane zadania. Dalszy kod aplikacji nas nie będzie interesował i pozostanie bez zmian (oprócz `showTasks()`).

Teraz musimy te pobrane zadania wyświetlić na ekranie, a dokładniej - musimy dodać każde zadanie jako element listy HTML. Najpierw więc musimy uzyskać dostęp do listy zadań w HTML, co już wcześniej robiliśmy:

```javascript
// ...powyższy kod z poprzedniego akapitu...

// po deklaracji globalnej zmiennej tasks:
// let tasks = getTasksFromLocalStorage() || [];
// zadeklaruj globalną zmienną przechowującą HTMLową listę zadań:
let tasksList = document.getElementById("tasks-list");

// teraz mamy dostęp i możemy korzystać z HTMLowej listy w dalszym kodzie!
```

Dodajmy teraz pomocniczą funkcję `appendTaskToTheTasksList()` tworząca nowy element listy, pobierającą zadanie jako argument i dodającą zadanie do listy - funkcja ta na razie będzie identyczna do funkcji `addTask()`, którą stworzyliśmy wcześniej w tym kursie:

```javascript
// ...powyższy kod z poprzedniego akapitu...

function appendTaskToTheTasksList(task) {
  // utwórz nowy element listy li:
  let li = document.createElement("li");
  // i przypisz do niego wartość zadania:
  li.textContent = task;

  // dodaj element listy do listy:
  // (pamiętaj, że HTMLowa lista jest zmienną globalną, więc mamy do niej dostęp)
  tasksList.appendChild(li);
}
```

## Renderujemy każde zadanie za pomocą własnej funkcji `renderTasks()` oraz metody tablicy `forEach()`

---

Super! Możemy dodawać pojedyncze nowe elementy do listy, ale... musimy teraz stworzyć funkcję `renderTasks()`, która "przejdzie się" po wszystkich pobranych zadaniach z `localStorage` i każde z nich doda do HTMLowej listy używając funkcji pomocniczej `appendTaskToTheTasksList`.

PS. *Wyrenderować* coś, to znaczy wyświetlić na ekranie.

Natomiast, że funkcja `renderTasks()` "przeszła się" po wszystkich zadaniach z naszej listy `tasks`, która jest tablicą, wykorzystamy metodę tablicy `forEach()`.

Metoda `forEach()` przyjmuje jako argument dowolną funkcję, którą wywoła na każdym elemencie tablicy. Jednocześnie `forEach()` przekazuje tej funkcji 2 argumenty, z których tamta funkcja może zrobić użytek: sam element tablicy oraz jego indeks. Zobacz poniższy przykład i wypróbuj go w konsoli:

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

Możemy to zrobić, dodając `renderTasks()` na końcu każdej z wymienionych funkcji, ale... to jest za dużo pracy, ale także łamie jedną z zasad dobrego programowania: **DRY**, która znaczy *Don't repeat yourself*, czyli *nie powtarzaj się*.

Dlatego bardziej efektywnie byłoby dodać `renderTasks()` wewnątrz funkcji `showTasks()`, dlatego że jest ona wywoływana w każdej z wymienionych funkcji oraz jest wywołana na końcu naszego kodu, dzięki czemu, kiedy odpalamy aplikację, pokazuje nam zadania w konsoli. Teraz także wyrenderuje nam zadania w przeglądarce!

```javascript
// zmodyfikuj funkcję showTasks()
// dodając do niej renderTasks():
function showTasks() {
  console.log("Twoje zapisane zadania:", tasks);
  renderTasks(); // <== nowy kod idzie tutaj
}
```

Brawo! Wiem, że łatwo jest w tym wszystkim się pogubić, ale taki rozrost programu i odpowiednio kodu jest czymś normalnym. Zresztą, nie dodaliśmy jeszcze nawet wszystkich funkcjonalności! A na dodatek jest to tylko mała aplikacja do zarządzania zadaniami, od której zaczyna większość programistów...

Niemniej jednak, na tym etapie, możesz odpalić jednocześnie plik HTML `todo-app.html` w przeglądarce, przejść do konsoli do zadkładki `snippets` i otworzyć tam zaktualizowany plik `todo-app-dom`, uruchomić go klikając w ikonkę trójkąta lub stosując skrót klawiszowy `Ctrl+Enter` i w konsoli, która się otworzy, będziesz mógł/a na razie dodawać i usuwać zadania w konsoli, ale wynik tych działań (zmiany w liście zadań) będą wyświetlały się w przeglądarce!

Spróbuj pododawać kilka zadań, usunąć jakieś itd., ale najpierw upewnij się, że kod Twojej aplikacji wygląda następująco:

```javascript
console.clear();

function getTasksFromLocalStorage() {
  let storedTasksStringified = localStorage.getItem("tasks");

  let storedTasks = JSON.parse(storedTasksStringified);

  return storedTasks;
}

let tasks = getTasksFromLocalStorage() || [];

//================= nowy kod DOM: ==========================//

// zadeklaruj globalną zmienną przechowującą HTMLową listę zadań:
let tasksList = document.getElementById("tasks-list");

// dodaj teraz pomocniczą funkcję `appendTaskToTheTasksList()`
// tworząca nowy element listy,
// pobierającą zadanie jako argument i dodającą zadanie do listy:    
function appendTaskToTheTasksList(task) {
  // utwórz nowy element listy li:
  let li = document.createElement("li");
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

Wszystko działa super, natomiast moglibyśmy usprawnić nasz kod w następujący sposób: funckja `showTasks()` *de facto* nie spełnia już w pewnym sensie swojej funkcji. Potrzebowaliśmy jej wcześniej, by wyświetlić zadania w konsoli, natomiast teraz naszym priorytetem jest wyrenderowanie zadań w przeglądarce, natomiast teraz mamy 2 mylące funkcje: `showTasks()` i `renderTasks()`, gdzie ta druda funkcja powinna wieść prym.

W związku z tym proponuję usunąć funkcję `showTasks()` i zastąpić ją całkowicie funkcją `renderTasks()`, która dodatkowo będzie wyświetlała zaktualizowane zadania w konsoli (tak na wszelki wypadek). Zatem zróbmy to, w związku z czym nasz kod teraz będzie wyglądał następująco *(usunąłem wczesniejsze komentarze z kodu)*:

```javascript
console.clear();

function getTasksFromLocalStorage() {
  let storedTasksStringified = localStorage.getItem("tasks");

  let storedTasks = JSON.parse(storedTasksStringified);

  return storedTasks;
}

let tasks = getTasksFromLocalStorage() || [];

let tasksList = document.getElementById("tasks-list");
  
function appendTaskToTheTasksList(task) {
  let li = document.createElement("li");
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

## Single Source of Truth

---

Zwróć uwagę na to, jak rozrasta się logika naszej aplikacji, a dokładniej jej warstwy i ich wzajemne powiązania:

1. `localStorage` jako swego rodzaju baza/ magazyn danych - ta warstwa potrafi przetrwać nawet wtedy, kiedy zamkniemy przeglądarkę (czyli kiedy  nasza aplikacja nie będzie działać),
2. aplikacja JavaScript, która na starcie/ podczas uruchomienia pobiera dane, a potem je modyfikuje i aktualizuje w `localStorage`,
3. oraz warstwa UI/ interface użytkownika/ kod HTML tworzący reprezentację naszej aplikacji w przeglądarce, która to warstwa jest odzwierciedleniem stanu aplikacji JavaScript, która z kolei jest odzwierciedleniem tego, co jest zapisane w `localStorage`.

Ponadto, po dodaniu obsługi przycisków, ta trzecia warstwa (UI/ HTML) będzie uruchamiała w odpowiedzi kod JavaScript z drugiej warstwy, który z kolei będzie aktualizował `localStorage` i ponownie renderował zauktualizowane zadania jako elementy listy HTML. Koło się zamyka.

W tym przypadku mamy do czynienia z podejściem/ koncepcją w programowaniu, którą określa się mianem *single source of truth* (*pojedyncze źródło prawdy).

W naszej aplikacji wszystko zależy od tego, co jest w `localStorage`. Z niego pobieramy zadania, a dopiero potem je wyświetlamy na ekranie; aktualizujemy zadania w `localStorage` po każdej modyfikacji, w związku z czym zmienna `tasks` jest ściśle zsynchronizowana z `localStorage`, a kod HTML jest z kolei zsynchronizowany z JavaScriptem - zmienną `tasks`.

W związku z tym nasze podejście było następujące:

- pobieramy dane z `localStorage`,
- renderujemy je na ekranie,
- kiedy jakieś zadanie zostaje dodane/ usunięte, aktualizujemy `localStorage` i na nowo renderujemy zaktualizowaną listę zadań (co znaczy, że najpierw usuwamy starą listę i tworzymy jej nową wersję - to zajmuje milisekundę).

Dzięki takiemu zabiegowi, możemy stworzyć jedną funkcję - `renderTasks()`, która właśnie renderuje wszystkie `task`i za każdym razem, kiedy dochodzi do zmian oraz kiedy po raz pierwszy pobieramy je z `localStorage`.

Podobnie updatujemy nasz `localStorage` za pomocą jednej funkcji `updateTasksInLocalStorage()`, którą wywołujemy w każdej funkcji modyfikującej listę zadań.

## Dodajemy zadanie za pomocą przycisku i okna dialogowego `prompt`

---

Mimo że nasze zadania wyświetlają się i aktualizują już nie tylko w konsoli, ale także w przeglądarce, nadal musimy nimi zarządzać z poziomu konsoli za pomocą ręcznie wpisywanych stworzonych przez nas funkcji...

Jest to niewygodne, ale także uniemożliwia zwykłym nieprogramującym użytkownikom korzystanie z naszej aplikacji.

Dlatego naszym kolejnym krokiem jest zmodyfikowanie funkcji `addTask()` w taki sposób, aby otwierała wbudowane okno dialogowe przeglądarki `prompt`, w którym użytkownik może wpisać swoje zadanie i kliknąć Enter, natomiast funkcja ta będzie wywoływana przez kliknięcie przycisku "dodaj zadanie".

Możemy to zrobić (jak zawsze) na 2 (kilka) sposoby, ale na razie wybierzemy najprostszy z nich.

### `prompt()`

Najpierw sprawdźmy, czym jest wbudowana funkcja `prompt()`. Wpisz w konsoli `prompt()`, kliknij Enter i zobacz, co się stało. Na górze przeglądarki otworzyło się nowe okno z polem do wprowadzania treści.

Jeśli coś tam wpiszesz, a potem klikniesz Enter lub przycisk OK, w konsoli zostanie zwrócona treść, którą wpisałeś/aś! Jeśli z kolei klikniesz przycisk Anuluj/ Cancel lub też przycisk Esc na klawiaturze, funkcja zwróci `null`, czyli brak treści.

Mamy teraz wygodne wbudowane narzędzie do pobierania danych od użytkownika, które może nam zastąpić klasyczny formularz (oraz konieczność wklepywania tej treści ręcznie w funkcji `addTask()` w konsoli). Rozbudujmy teraz funkcję `addTask()`, dodając tę funkcjonalność:

```javascript
// usuń argument newTask z nawiasów funkcji,
// ponieważ nie będziemy już go wprowadzać ręcznie:
function addTask() {
  // deklarujemy zmienną newTask,
  // która przyjmuje wartość zwracaną przez wbudowaną funkcję prompt(),
  // która to wartość jest tym, co wpisze użytkownik w oknie:
  let newTask = prompt("Wpisz nowe zadanie:");

  // reszta kodu pozostaje bez zmian:
  tasks.push(newTask);

  updateTasksInLocalStorage();

  console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

  renderTasks();
}
```

Wow! Teraz możemy doświadczyć namiastki prawdziwej aplikacji! Co ciekawe, to okienko jest także dostępne na telefonach, w związku z czym, gdybyśmy opublikowali naszą aplikację jako prawdziwą stronę w internecie, a potem otworzylibyśmy ją w przeglądarce na telefonie, to zadziała tak samo.

Musimy teraz dopisać dosłownie kilka znaków w naszym kodzie HTML, by wywołać funkcję `addTask()` poprzez kliknięcie przycisku W związku z tym otwórz plik `todo-app.html` w notatniku i zmień tylko linijkę zawierającą 

```html
<!-- poprzedni kod -->

<button onclick="addTask()">dodaj zadanie</button>

<!-- kolejny kod -->
```

Do znacznika `<button>` można dodać atrybut `onclick`, do którego można przypisać funkcję, która ma być wywołana po kliknięciu w przycisk. Nie jest to najlepszy sposób na dodawanie funkcjonalności do HTMLa, ale nam na razie wystarczy.

Zapisz teraz plik `todo-app.html` (Ctrl+S), odśwież przeglądarkę, uruchom plik `todo-app-dom` z poziomu konsoli (zakładka `snippets`) => `Ctrl+Enter` lub klikając ikonkę trójkąta, a teraz spróbuj kliknąć w przycisk "Dodaj zadanie".

Jeśli wszystko zrobiłeś/aś dobrze, to w odpowiedzi na kliknięcie przycisku otworzyło się okno dialogowe, możesz wpisać treść zadania, a zostanie ono dodane do `localStorage` i wyświetli się w przeglądarce!

Nasza aplikacja jest coraz bardziej interaktywna!


---

Spodobało się? Chcesz więcej *(pamiętaj, że ta strona dopiero się rozwija)*?

Jeśli tak, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu *(zakładam, że będziemy dalej rozwijać naszą aplikację do zadań, dodając coraz to nowsze funkcjonalności oraz poznając również podstawy HTML i CSS, by wyjść poza konsolę i stworzyć stronę/ aplikację internetową z prawdziwego zdarzenia)*.

Jeśli więc chcesz zrobić ten kolejny i następne kroki, daj znać!