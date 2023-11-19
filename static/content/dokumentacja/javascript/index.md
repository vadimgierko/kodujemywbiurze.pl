## Wprowadzenie

### Czym jest dokumentacja?

W odróżnieniu od tutoriali, w których poznajemy jakąś technologię/ język programowania przy okazji tworzenia jakiegoś projektu lub rozwiązywania określonego projektu, **dokumentacja** jest zbiorem informacji, instrukcji, przykładów i wiedzy nt. tego, w jaki sposób korzysta się z danego języka/ technologii. Możesz ją potraktować jako swego rodzaju **słownik, instrukcję lub encyklopedię**.

Niniejsza **dokumentacja JavaScript** zawiera zestaw haseł, które opisują składnię języka, metody, funkcje, obiekty i inne aspekty potrzebne do kodowania w JavaScript. **Nie jest to zbiór kompletny, zawiera natomiast wszystkie pojęcia, z jakimi zetkniesz się w tutorialach** omawianych na stronie *kodujemywbiurze.pl*.

Znajdziesz tu **luźne** (zrozumiałe, napisane w jak najmniej technicznym języku) **definicje, wyizolowane przykłady** (czyli dot. konkretnego hasła - inaczej niż w tutorialach, gdzie przykłady uzupełniały się nawzajem) oraz czasami **szersze, pogłębione wytłumaczenie** danych pojęć i ich zastosowania.

### Jak korzystać z dokumentacji?

W związku z tym niniejsza **dokumentacja stanowi osobny, bardziej "suchy" i równoległy tutorial**, do którego możesz zajrzeć, by pogłębić wiedzę zaczerpniętą z praktycznych tutoriali, np. kiedy chcesz przypomnieć sobie, czym jest <a href="/dokumentacja/javascript/zmienne" target="_blank">zmienna</a>, <a href="/dokumentacja/javascript/funkcje" target="_blank">funkcje</a> lub też inne pojęcia.

W odróżnieniu od tutoriali, mimo że dokumentacja omawia pojęcia w miarę zwiększania się stopnia zaawansowania, to jednak przykłady mogą odwoływać się także do kwestii, które będą omówione później (ponieważ dokumentacja omawia kwestie bardziej dokładnie i kompleksowo), aczkolwiek **pojęcia** te będą **podlinkowane**, w związku z tym z łatwością możesz do nich "przeskoczyć" (linki będą **otwierane w nowej zakładce**), by zaczerpnąć więcej wiedzy.

### Zacząć od dokumentacji czy tutoriali?

**Jeśli nigdy wcześniej nie miałeś/aś styczności z programowaniem lub też językiem JavaScript** oraz **chcesz po prostu spróbować pobawić się kodem** i zobaczyć, co z tego wyjdzie, to zdecydowanie **radzę zacząć od tutoriala**, w którym krok po kroku poznasz podstawy przy okazji tworzenia działającego projektu.

**Jeśli** z **kolei masz już jakieś rozeznanie w temacie lub też nie, ale jesteś zdecydowany/a, że chcesz nauczyć się programować/ podstaw od A do Z i chcesz uczyć się bardziej teoretycznie, to śmiało możesz zacząć od dokumentacji**. Musisz natomiast zdawać sobie sprawę, że według mnie **będzie trochę trudniej**, no i ciężej będzie Ci zobaczyć, w jaki sposób tworzy się działający projekt od początku do końca.

Dlatego najlepszym kompromisem będzie **zacząć od tutoriali, przy jednoczesnym zaglądaniu do dokumentacji, po czym osobno przerobić dokumentację *od dechy do dechy***, by poszerzyć i ugruntować zdobytą w tutorialach wiedzę.

*Powodzenia i owocnej nauki!*

## Typy danych

W JavaScript istnieje kilka typów danych, którymi możemy operować w naszym programie/ kodzie: **typy proste i referencyjne**.

### Proste typy danych (primitive types)

- **string** - tekstowe dane, np. `"Hello, world!"` (tekst musi być zawarty w `""`, `''` lub `\`\`\`)
- **number** - liczby, zarówno całkowite, jak i zmiennoprzecinkowe, np. `42` lub `3.14`
- **boolean** - wartości logiczne `true` lub `false`, np. `let isUserLogged = false;`
- **undefined** - oznacza zmienną, która istnieje, ale nie ma przypisanej wartości, np. `let x;`.
- **null** - reprezentuje brak wartości lub pustkę, np. `let y = null;` (zmienna istnieje i została do niej świadomie przypisana wartość `null`)

### Typy referencyjne (reference types):

- **object** - obiekty, np. `{ name: 'John', age: 30 }`.
- **array** - <a href="/dokumentacja/javascript/tablice" target="_blank">tablice</a>, np. `[1, 2, 3, 4]`.
- **function** - <a href="/dokumentacja/javascript/funkcje" target="_blank">funkcje</a>, np. `function showMessage(message) { console.log(message); }`.

## Konsola

Konsola przeglądarki (ang. *browser console*) to **narzędzie** (deweloperskie - czyli stworzone z myślą o twórcach stron i programistach) **wbudowane w większość współczesnych przeglądarek internetowych**.

Pozwala ona na **pisanie i uruchamianie kodu JavaScript bezpośrednio w przeglądarce**, co umożliwia interaktywną komunikację z przeglądarką internetową oraz manipulację strukturą, wyglądem i działaniem strony internetowej.

Konsola przeglądarki umożliwia programistom przeprowadzanie testów, debugowanie kodu JavaScript, analizowanie wydajności strony, wyświetlanie komunikatów diagnostycznych oraz manipulację elementami strony, co pozwala na szybką weryfikację zmian bezpośrednio w przeglądarce.

### Jak otworzyć konsolę w Google Chrome lub Mozilla Firefox?

Aby otworzyć konsolę w Google Chrome, możesz użyć skrótu klawiszowego `Ctrl+Shift+I` lub za pośrednictwem menu przeglądarki:

- kliknij trzy kropki w prawym górnym rogu przeglądarki,
- wybierz opcję "Więcej narzędzi",
- wybierz "Narzędzia dla deweloperów",
- jesteś w konsoli i możesz pisać kod!

Aby otworzyć konsolę w Mozilla Firefox, możesz użyć skrótu klawiszowego `Ctrl+Shift+I` lub `Ctrl+Shift+K` lub za pośrednictwem menu przeglądarki:
lub Firefox możesz użyć skrótu klawiszowego `Ctrl+Shift+I` i od razu zacząć pisać w niej kod.

- kliknij trzy linie (menu) w prawym górnym rogu przeglądarki,
- wybierz opcję "Więcej narzędzi",
- wybierz "Narzędzia dla twórców witryn" lub "Konsola WWW" (być może będziesz musiał/a dodatkowo kliknąć w "Konsola" w okienku, które właśnie się pojawiło)
- jesteś w konsoli i możesz pisać kod!

### console.log()

`console.log()` jest wbudowaną funkcją w JavaScript (i samej konsoli), która służy do wyświetlania informacji w konsoli przeglądarki.

Jest to bardzo przydatne narzędzie do debugowania kodu, ponieważ pozwala programistom wyświetlać różne wartości (<a href="/dokumentacja/javascript/typy-danych" target="_blank">typy danych</a>), <a href="/dokumentacja/javascript/zmienne" target="_blank">zmienne</a> czy komunikaty w konsoli, co ułatwia zrozumienie, co się dzieje w danym fragmencie kodu.

Aby np. wyświetlić jakiś tekst w konsoli, po otwarciu konsoli (patrz poprzedni rozdział) wpisz `console.log("Tutaj może być dowolny tekst w cudzysłowiu")` i kliknij Enter. Spróbuj już teraz!

Możesz też zdefiniować jakąś zmienną i wyświetlić ją w konsoli w ten sposób:

```
let message = "Hello, World!"; // definiujemy zmienną

console.log(message); // wyświetlamy wartość zmiennej (bez cudzysłowia!)
```

Możesz też wywołać jakąć <a href="/dokumentacja/javascript/funkcje" target="_blank">funkcję</a> w konsoli:

```
function add(a, b);

console.log(add(2, 2)); // zwróć uwagę na dodatkowe nawiasy funkcji add()
```

Jeśli polecenie `console.log()` znajdzie się w pliku JavaScript, to także zostanie wywołane w konsoli przeglądarki, możesz więc śmiało korzystać z `console.log()` w swoim kodzie!

### console.clear()

`console.clear()` jest wbudowaną funkcją w JavaScript (i samej konsoli), która służy do czyszczenia zawartości konsoli przeglądarki lub środowiska programistycznego.

Gdy wywołasz `console.clear()`, wszystkie wcześniej wyświetlone komunikaty w konsoli zostaną usunięte, co sprawia, że konsola staje się czysta i pusta. Jest to przydatne szczególnie w sytuacjach, gdy chcesz uporządkować konsolę i usunąć wszystkie poprzednie komunikaty lub błędy, aby lepiej zobaczyć nowe informacje wyświetlane w konsoli.

**Uwaga!** `console.clear()` nie wpływa na pamięć przeglądarki ani nie usuwa wcześniej zdefiniowanych w trakcie sesji pracy zmiennych czy innych zasobów. To jedynie funkcja służąca do czyszczenia widoczności w konsoli deweloperskiej, czyli ekranu, na którym wyświetlane są komunikaty i informacje związane z działaniem strony.

Wszelkie wcześniej zdefiniowane zmienne, funkcje czy inne zasoby będą wciąż dostępne i przechowywane w pamięci przeglądarki, nawet po użyciu `console.clear()`.

## Zmienne

W JavaScript, zmienne są symbolicznymi nazwami używanymi do przechowywania danych. Definicja zmiennej w JavaScript polega na zadeklarowaniu nazwy, którą można używać do odwoływania się do określonej wartości. Te wartości mogą być liczbami, tekstem, obiektami, tablicami lub innymi <a href="/dokumentacja/javascript/typy-danych" target="_blank">typami danych</a>.

W JavaScript używa się słowa kluczowego `let` lub `const` do zadeklarowania zmiennej:

- `let` tworzy zmienną, której wartość można później zmienić:

```
// tworzymy zmienną, którą można modyfikować:

let message = "Hello, World!";
console.log(message); // wyświetla "Hello, World!""

// potem przypisujemy zmiennej nową wartość:

message = "Hello from the other side!";
console.log(message); // konsola wyświetla "Hello, from the other side!"
```

- `const` tworzy zmienną, której wartość jest stała i nie może być ponownie przypisana.

```
// tworzymy zmienną o stałej wartości:
const yourName = "Vadim";
console.log(yourName); // konsola wyświetla "Vadim"

// próbujemy nadpisać stałą zmienną:
yourName = "John"; // w konsoli wyświetla się poniższy błąd:

// Uncaught TypeError: Assignment to constant variable.
```

### Zmienne globalne i lokalne

Zmienne globalne i lokalne w JavaScript różnią się zakresem dostępności. 

**Zmienne globalne** w JavaScript to zmienne zadeklarowane poza jakimkolwiek blokiem kodu (<a href="/dokumentacja/javascript/funkcje" target="_blank">funckją</a> lub <a href="/dokumentacja/javascript/petle" target="_blank">pętlą</a> i są dostępne z każdego miejsca w skrypcie. Zmienne te są zwykle zdefiniowane na najwyższym poziomie skryptu (pliku).

Należy używać zmiennych globalnych z rozwagą, starając się ograniczyć ich liczbę i korzystając z nich tam, gdzie faktycznie są potrzebne na poziomie globalnym. Często lepszym podejściem jest korzystanie z zmiennych lokalnych zdefiniowanych w odpowiednich blokach kodu, aby uniknąć niepotrzebnych zmiennych globalnych i potencjalnych problemów związanych z nimi.

Zmienna globalna jest dostępna wszędzie w skrypcie, natomiast **zmienna lokalna** jest widoczna tylko wewnątrz bloku kodu, w którym została zdefiniowana.

```
const globalVariable = "Global";

function displayVariables() {

  // ta zmienna będzie dostępna tylko w tej funkcji: 
  const localVariable = "Local";

  console.log("global variable from function:", globalVariable);
  console.log("local variable from function:", localVariable);
}

// poniższa funckja wyświetli
// zarówno globalną, jak i lokalną zmienną,
// bo ma dostęp do obydwu:
displayVariables();

console.log("global variable:", globalVariable);

// poniższa funkcja wywoła błąd,
// ponieważ lokalna zmienna nie jest dostepna
// poza funkcją displayVariables(),
// w której została zdefiniowana:
console.log("local variable:", localVariable);
```

## Tablice

Tablica w JavaScript to struktura danych służąca do przechowywania wielu elementów w jednym miejscu. Może zawierać różne <a href="/dokumentacja/javascript/typy-danych" target="_blank">typy danych</a>, takie jak liczby, ciągi znaków czy nawet inne tablice. Elementy tablicy są umieszczane pomiędzy klamrami kwadratowymi `[]` i są oddzielane przecinkami.

```
let tasks = ["zrobić kawę", "uczyć się JavaScript", "wejść na kodujemywbiurze.pl"];
console.log(tasks);
```

### `length`

Właściwość `length` pozwala uzyskać dostęp do długości tablicy, która wskazuje, ile elementów zawiera tablica:

```
let tasks = ["zrobić kawę", "uczyć się JavaScript", "wejść na kodujemywbiurze.pl"];
console.log(tasks.length); // wyświetli liczbę 3, ponieważ tablica zawiera 3 elementy
```

### Indeksy

Indeksy w tablicy to numery, które identyfikują pozycję każdego elementu w tablicy. **Pierwszy element ma indeks 0** (a nie 1!). Dzięki indeksom można odwoływać się do konkretnych elementów w tablicy:

```
let tasks = ["zrobić kawę", "uczyć się JavaScript", "wejść na kodujemywbiurze.pl"];

console.log(tasks[0]); // wyświetla pierwsze zadanie
console.log(tasks[tasks.length - 1]); // wyświetla ostatnie zadanie
```

### `push()`

Metoda `push()` w JavaScript służy do dodawania nowych elementów na koniec tablicy. Po użyciu `push()`, nowy element jest dodawany do tablicy jako jej ostatni element, a jej rozmiar (ilość elementów) zostaje zwiększony o 1:

```
let tasks = ["zrobić kawę", "uczyć się JavaScript", "wejść na kodujemywbiurze.pl"];

console.log(tasks); // wyświetla 3 zadania
console.log(tasks.length); // wyświetla liczbę 3

// dodajemy nowe zadanie:
tasks.push("pokodować trochę");

console.log(tasks); // wyświetla 4 zadania
console.log(tasks.length); // wyświetla liczbę 4
```

### `splice()`

Metoda `splice()` w JavaScript służy do modyfikacji tablicy poprzez dodawanie, usuwanie i/lub zastępowanie elementów.

```
array.splice(start, deleteCount, item1, item2, ...)
```

- array: Tablica, którą chcemy zmodyfikować.
- start: Indeks, od którego zaczynamy modyfikację tablicy.
- deleteCount: Liczba określająca ilość usuwanych elementów. Jeśli ustawione na 0, nie usuwa żadnych elementów.
- item1, item2, ...: Elementy do dodania do tablicy, zaczynając od indeksu start.

Przykłady użycia:

**Usuwanie elementów** z tablicy:

```
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2); // usuwa 2 elementy od indeksu 2
console.log(numbers); // wyświetla [1, 2, 5]
```

**Dodawanie elementów** do tablicy:

```
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(2, 0, 'grape', 'pear'); // dodaje 'grape' i 'pear' na indeksie 2
console.log(fruits); // wyświetla ['apple', 'banana', 'grape', 'pear', 'orange']
```

**Zamiana elementów** w tablicy:

```
let colors = ['red', 'green', 'blue'];
colors.splice(1, 1, 'yellow'); // zastępuje element na indeksie 1 'green' przez 'yellow'
console.log(colors); // wyświetla ['red', 'yellow', 'blue']
```

**Pobieranie usuniętych** elementów:

```
let letters = ['a', 'b', 'c', 'd', 'e'];
let removed = letters.splice(1, 3); // usuwa 3 elementy od indeksu 1 i zapisuje je do zmiennej
console.log(letters); // wyświetla ['a', 'e']
console.log(removed); // wyświetla ['b', 'c', 'd']
```

Metoda `splice()` jest bardzo przydatna do dynamicznej modyfikacji tablic w JavaScript, umożliwiając dodawanie, usuwanie i zastępowanie elementów w miejscu.

## Funkcje

Funkcje w JavaScript są blokami kodu, które wykonują określone zadanie po wywołaniu. Są one definiowane za pomocą słowa kluczowego `function` i mogą przyjmować argumenty oraz zwracać wartości.

### Argumenty funkcji

Argumenty funkcji to wartości, które mogą być przekazane do funkcji podczas jej wywołania. Funkcja może przyjmować jeden lub więcej argumentów, które są używane wewnątrz funkcji do wykonywania operacji, ale może też nie zawierać żadnych argumentów:

```
let message: "Hello, World!";

function showMessage() { // nawiasy są puste, więc funkcja nie przyjmuje argumentów
  console.log(message); // funkcja ma dostęp do globalnej zmiennej message
}

showMessage(); // wyświetla "Hello, World!"

// funkcja przyjmuje argument passedMessage:
function showPassedMessage(passedMessage) {
  // funkcja wyświetla wartość przekazanego argumentu, który jest zmienną lokalną:
  console.log(messagpassedMessagee);
}

showPassedMessage("Hello from the other side!"); // wyświetla "Hello from the other side!"
showPassedMessage(); // wyświetla błąd, ponieważ do funkcji nie został przekazany oczekiwany argument

// funkcja przyjmuje argument passedMessage z przypisaną domyślną wartością "Hello, Mars!":
function showDefaultMessage(passedMessage = "Hello, Mars!") {
  console.log(passedMessage);
}

showDefaultMessage("Hello, Earth!"); // wyświetla przekazaną wartość "Hello, Earth!"
showDefaultMessage(); // ponieważ nie został przekazany argument, funkcja wyświetla domyślną wartość "Hello, Mars!"
```

### Zwracanie wartości i słowo kluczowe `return`

Funkcje w JavaScript mogą zwracać wartość za pomocą słowa kluczowego `return`. Jest to użyteczne, gdy funkcja musi zwrócić wynik, który może być wykorzystany w innym miejscu w programie.

```
function add(a, b) {
  return a + b;
}

// do nowo zadeklarowanej zmiennej sum przypisujemy wynik funkcji add() z dwoma przekazanymi argumentami:
let sum = add(3, 5);
console.log(sum); // wyświetla 8
```

## Pętle

Pętla for w JavaScript jest konstrukcją umożliwiającą wielokrotne wykonanie określonych instrukcji lub bloków kodu. Jest używana do iteracji przez elementy <a href="/dokumentacja/javascript/tablice" target="_blank">tablic</a>, kolekcji oraz do powtarzania określonych działań (np. <a href="/dokumentacja/javascript/funkcje" target="_blank">funkcji</a>) przez określoną liczbę razy.

### Pętla `for`

```
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // Wyświetla każdy element (każdą liczbę zawartą w) tablicy
}
```

Co się dzieje w powyższym kodzie?

Otóż użyliśmy słowa kluczowego `for`, po czym w nawiasach zawarliśmy 3 ważne rzeczy:

- `let i = 0;` - zadeklarowaliśmy lokalną zmienną `i`, która jest w pewnym sensie *licznikiem* i ustawiliśmy jej wartość początkową na 0;
- `i < numbers.length;` - określiliśmy warunek mówiący o tym, że pętla ma działać, dopóki zmienna `i` jest mniejsza od długości <a href="/dokumentacja/javascript/tablice" target="_blank">tablicy</a> `numbers` (po przekroczeniu tej wartości pętla przestaje działać);
- `i++` - po każdej iteracji pętli, wartość zmiennej `i` ma wzrosnąć o 1;

```
for (let i = 0; i < 5; i++) {
  console.log("Iteracja numer", i + 1); // Wyświetla komunikat 5 razy
}
```

Pętla `for` jest jednym z fundamentalnych narzędzi w JavaScript do powtarzania operacji na danych oraz iterowania przez kolekcje. Pozwala ona na elastyczne sterowanie przepływem programu w zależności od warunków i potrzeb.

### Pętla `forEach()`

`forEach` jest metodą dostępną dla tablic w JavaScript, która wykonuje określoną <a href="/dokumentacja/javascript/funkcje" target="_blank">funkcję</a> dla każdego elementu w tablicy.

Składnia `forEach()`:

```
array.forEach(function(currentValue, index, array) {
  // tutaj piszemy kod do wykonania dla każdego elementu tablicy...
});
```

- *currentValue*: Aktualny element w tablicy.
- *index*: (opcjonalny argument) Indeks aktualnego elementu.
- *array*: (opcjonalny argument) Tablica, po której iterujemy.

```
let fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function(fruit, index) {
  console.log(fruit, "ma indeks:", index); // wyświetla np. "apple ma indeks: 0"
});
```

Użycie **funkcji strzałkowej** (ang. *arrow function*) z `forEach()`:

```
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2); // Wyświetla podwojoną wartość każdego elementu
});
```

Metoda forEach jest przydatna do iterowania po elementach tablicy i wykonania określonych operacji dla każdego z nich.

## Instrukcje warunkowe

Instrukcje warunkowe w JavaScript pozwalają na wykonanie określonych fragmentów kodu w zależności od spełnienia warunków logicznych.

### if/else

```
let age = 18;

if (age >= 18) {
  console.log("Jesteś pełnoletni/a.");
} else {
  console.log("Jesteś niepełnoletni/a.");
}
```

### if/else if

```
let grade = 75;

if (grade >= 90) {
  console.log("Ocena 6");
} else if (grade >= 80) {
 console.log("Ocena 5");
} else if (grade >= 70) {
  console.log("Ocena 4");
} else {
  console.log("Ocena 3");
}
```

## Operatory

Operatory są narzędziami do porównywania, łączenia <a href="/dokumentacja/javascript/instrukcje-warunkowe" target="_blank">warunków</a> czy wykonywania operacji arytmetycznych.

### Operatory logiczne `&&, ||, !`

```
let sunny = true;
let warm = false;

if (sunny && warm) {
  console.log("Jest słonecznie i ciepło.");
}

if (sunny || warm) {
  console.log("Jest albo słonecznie, albo ciepło (lub oba).");
}

if (!sunny) {
  console.log("Nie jest słonecznie.");
}
```

### Operatory porównania `===, !==, >, <, >=, <=`

```
let x = 5;
let y = 10;

console.log(x === y); // false
console.log(x !== y); // true
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
```