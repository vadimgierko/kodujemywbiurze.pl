## Wprowadzenie

---

Mamy działającą dynamiczną aplikację konsolową, w której możemy zarządzać zadaniami. Mamy też prosty interface - podstawowy kod HTML, aczkolwiek jest on totalnie statyczny. Musimy teraz połączyć/ zintegorować te dwie warstwy - tzw. logikę (kod JavaScript) oraz UI (*user interface*, kod HTML) - w jedną spójną aplikację.

Ta integracja będzie możliwa dzięki wykorzystaniu właściwości i metod DOM, które dają nam dostęp i możliwość manipulacji HTML za pomocą JavaScript! Zrobimy to stopniowo, poznając krok po kroku podstawy pracy z DOM.

DOM (*Document Object Model*) jest kluczowym elementem, który łączy HTML z JavaScriptem. DOM jest reprezentacją struktury HTML i jest manipulowany za pomocą JavaScriptu.

HTML jest fundamentalnym elementem, na którym opiera się struktura strony internetowej, a znajomość jego podstaw jest niezbędna do zrozumienia DOM-u. Z kolei JavaScript jest niezbędny do manipulacji DOMem. W związku z tym po poznaniu podstaw JavaScript i HTML, możemy przejść do nauki DOM, który sprawi, że nasza aplikacja konsolowa przekształci się w interaktywną aplikację webową (czyli *de facto* stronę internetową).

## `document.getElementById()`, id | Uzyskujemy dostęp do elementu drzewa DOM - listy zadań

---

Najpierw musimy uzyskać dostęp do naszej listy HTML `<ul>` z poziomu JavaScript. Możemy to zrobić na kilka sposobów, ale posłużymy się `document.getElementById()`.

Metoda `document.getElementById()` pozwala na uzyskanie dostępu do elementu drzewa DOM (czyli dowolnego znacznika) o określonym `id`. Nasza lista HTML nie ma żadnego id, więc musimy najpierw je dodać do kodu HTML. W tagu otwierającym `<ul>` dodaj `id="tasks-list"` w ten sposób:

```html
<!-- ... wcześniejszy kod HTML -->

<ul id="tasks-list">
  <li>Zrobić kawę</li>
  <li>Zrobić kawę</li>
  <li>Zrobić kawę</li>
</ul>
```

Każdy tag może mieć unikalne id, dzięki czemu możemy precyzyjnie uzyskać do niego dostęp z poziomu kodu JavaScript. Id powinno być opisowe, podobnie jak nazwy zmiennych czy funkcji, w związku z tym naszą listę zadań nazwaliśmy `"tasks-list"`.

Teraz, zapisz zmiany w pliku HTML, odśwież przeglądarkę i otwórz konsolę.

Możesz z ciekawości przejść do zakładki `Elements`, by zobaczyć kod HTML Twojej strony - jak widzisz, przeglądarka "osadziła" nasz niekompletny kod w szablon pliku HTML, o czym wspominałem wcześniej. W tej zakładce możesz mieć podgląd drzewa DOM dowolnej strony www, ale także dodatkowej zawartości pliku HTML, jak np. skryptów JavaScript.

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

<ul id="tasks-list">

</ul>
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

Teraz, gdybyśmy chcieli dodać kolejne zadania, musielibyśmy za każdym razem napisać dużo kodu... Ale na szczęście znamy trochę JavaScript i wiemy, że powtarzalne zadania najlepiej jest przechowywać w postaci reużywalnych funkcji. Stwórzmy więc w konsoli funkcję `addTask()`, służącą do dodawania zadań do naszej listy, która będzie przyjmować argument w postaci treści zadania:

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
}
```

Pamiętasz pewnie, że w naszej wcześniejszej aplikacji JavaScript też mieliśmy funkcję `addTask()`, tyle że dodawała zadanie do `localStorage`. Ponieważ teraz nie jesteśmy w tamtym pliku, tylko w konsoli, te dwie funkcje nie kolidują ze sobą, niemniej jednak, kiedy skorzystamy z tej powyższej funkcji w naszym pliku (a za niedługo to właśnie zrobimy), to zmienimy jej nazwę na bardziej opisową, np.: `appendTaskToTheTasksList()` lub coś w tym stylu, żeby dokładnie zaznaczyć, co robi ta funkcja.

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

Teraz możemy wygodnie dodawać zadania jako węzły drzewa DOM, czyli przekształcać je w kod HTML naszej strony internetowej w przeglądarce, a potem je usuwać za jednym zamachem. Pobaw się trochę tym kodem znowu, dodaj kilka zadań, potem je usuń. Możesz też odświeżyć stronę i spróbować samodzielnie od nowa uzyskać dostęp do naszej listy za pomocą `document.getElementById()` i dodać tam zadania za pomocą `document.createElement()`, `textContent` i `appendChild()`.

Wszystko jest fajnie, ale jeśli odświeżymy stronę, to zniknie zarówno kod, który stworzyliśmy, jak również i nasze zadania... Dlatego w kolejnej lekcji przeniesiemy to, co stworzylismy, do naszego pliku JavaScript w `snippets` i podłączymy się do `localStorage`, by stamtąd ściągać zadania i wyświetlać je już nie w konsoli, tylko na stronie internetowej w przeglądarce. Do dzieła!

## Przenosimy funkcjonalności DOM do pliku

---

...Przejdź do zakładki `snippets` w konsoli i otwórz nasz plik `todo-app-local-storage` z kodem aplikacji z modułu 3. kursu JavaScript.

cdn...
