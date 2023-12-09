## Wprowadzenie

---

**Witaj w darmowym kursie *Integrujemy HTML i JavaScript. Podstawy DOM. Pierwsza interaktywna aplikacja webowa***!

W niniejszym kursie poznamy podstawy integracji HTML i JavaScript za pomocą DOM, wystarczające do **przeniesienia naszej aplikacji do zarządzania zadaniami z konsoli bezpośrednio do przeglądarki, dzięki czemu będzie funkcjonowała jak aplikacja z prawdziwego zdarzenia**, z którymi miałeś/aś do czynienia mnóstwo razy.

Na tym etapie powinniśmy już mieć działającą dynamiczną aplikację konsolową, w której możemy zarządzać zadaniami i znać podstawy JavaScipt, co znaczy, że probiłeś/aś [kurs JavaScript](/kursy/javascript).

Powinniśmy mieć też prosty interface - podstawowy statyczny kod HTML, który zrobiliśmy w [kursie HTML](/kursy/html).

W związku z tym rób ten kurs tylko jeśli znasz podstawy HTML i JavaScript - niezależnie od tego, czy poznałeś/aś je samodzielnie, czy też przerobiłeś/aś moje 2 poprzedzające kursy: <a href="/kursy/javascript" target="_blank">kurs JavaScript</a> i <a href="/kursy/html" target="_blank">kurs HTML</a>

Musimy teraz połączyć/ zintegrować te dwie warstwy - tzw. logikę (kod JavaScript) oraz UI (*user interface*, kod HTML) - w jedną spójną aplikację.

Ta integracja będzie możliwa dzięki wykorzystaniu właściwości i metod DOM, które dają nam dostęp i możliwość manipulacji HTML za pomocą JavaScript! Zrobimy to stopniowo, poznając krok po kroku podstawy pracy z DOM.

DOM (*Document Object Model*) jest kluczowym elementem, który łączy HTML z JavaScriptem. DOM jest reprezentacją struktury HTML i jest manipulowany za pomocą JavaScriptu.

HTML jest fundamentalnym elementem, na którym opiera się struktura strony internetowej, a znajomość jego podstaw jest niezbędna do zrozumienia DOM-u. Z kolei JavaScript jest niezbędny do manipulacji DOMem.

### Co zrobimy w niniejszym kursie?

W tym kursie połączymy zarówno naszą wiedzę z zakresu HTML i JavaScript, jak również zintegrujemy zbudowany przez nas HTMLowy UI oraz konsolową aplikację JavaScript w jedną interaktywną i niepodzielną aplikację webową do zarządzania zadaniami.

Najpierw poznamy wybrane metody i właściwości **DOM**, tj.:

- `document.getElementById()`,
- `document.createElement()`,
- `appendChild()`,
- `textContent`,
- `innerHTML`,
- `addEventListener()`,

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

## Aktualizujemy kod JavaScript o funkcjonalności DOM

---

Nie ma sensu dalej tworzyć funkcje w konsoli - stwórzmy nowy plik w `snippets` i nazwijmy go `todo-app-dom`. Skopiuj i wklej tam <a href="/kursy/javascript/podsumowanie-modulu-3-kompletny-kod-aplikacji-w-wersji-20-zintegrowanej-z-localstorage" target="_blank">kod z modułu 3. kursu JavaScript</a>, czyli naszą aplikację konsolową z dostępem do `localStorage`.

PS. Pamiętasz jeszcze, co się dzieje w tym kodzie? 😂😏

Ok, zacznijmy implementować funkcjonalności DOM. Ale...

Tak naprawdę musimy teraz zastanowić się nad pewną kwestią. Możemy wdrożyć funkcjonalności DOM na 2 sposoby:

1. Dodać do kodu stworzone wcześniej funkcje, tj. `deleteAllTasks()` i `addTask()` (zmieniając ich nazwy, by nie kolidowały z identycznie nazwanymi funkcjami w istniejącej już aplikacji) oraz dopisać funkcję usuwającą zadanie z drzewa DOM (używając metody `document.removeChild()`, której jeszcze nie poznaliśmy), a potem wywołać te funkcje w istniejących funkcjach.
2. Podążyć przykładem uniwersalnej funkcji `updateTasksInLocalStorage()`, którą wywoływaliśmy w każdej z funkcji modyfikującej listę zadań i stworzyć podobną uniwersalną funkcję modyfikującą listę HTML w ten sposób, że będzie ona każdorazowo uzupełniać listę o aktualne zadania (niezależnie od tego, czy je dodaliśmy, czy usunęliśmy).

Tym się zajmę już jutro, ponieważ wchodzimy w dość poważny temat związany z architekturą aplikacji i zarządzania jej stanem, a dokładniej chodzi tu o pojedyncze źródło prawdy (*single source of truth*).

PS. Najprawdopodobniej zrobimy 2 wersje/ implementacje, żeby się przekonać, która nam bardziej przypadnie do gustu + która może okazać się bardziej optymalna.

Do usłyszenia jutro!

---
---

Spodobało się? Chcesz więcej *(pamiętaj, że ta strona dopiero się rozwija)*?

Jeśli tak, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu *(zakładam, że będziemy dalej rozwijać naszą aplikację do zadań, dodając coraz to nowsze funkcjonalności oraz poznając również podstawy HTML i CSS, by wyjść poza konsolę i stworzyć stronę/ aplikację internetową z prawdziwego zdarzenia)*.

Jeśli więc chcesz zrobić ten kolejny i następne kroki, daj znać!