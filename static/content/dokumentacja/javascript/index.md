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

Jest to bardzo przydatne narzędzie do debugowania kodu, ponieważ pozwala programistom wyświetlać różne wartości, zmienne czy komunikaty w konsoli, co ułatwia zrozumienie, co się dzieje w danym fragmencie kodu.

Aby np. wyświetlić jakiś tekst w konsoli, po otwarciu konsoli (patrz poprzedni rozdział) wpisz `console.log("Tutaj może być dowolny tekst w cudzysłowiu")` i kliknij Enter. Spróbuj już teraz!

Możesz też zdefiniować jakąś zmienną i wyświetlić ją w konsoli w ten sposób:

```
let message = "Hello, World!"; // definiujemy zmienną

console.log(message); // wyświetlamy wartość zmiennej (bez cudzysłowia!)
```

Możesz też wywołać jakąć funkcję w konsoli:

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

W JavaScript, zmienne są symbolicznymi nazwami używanymi do przechowywania danych. Definicja zmiennej w JavaScript polega na zadeklarowaniu nazwy, którą można używać do odwoływania się do określonej wartości. Te wartości mogą być liczbami, tekstem, obiektami, tablicami lub innymi typami danych.

W JavaScript używa się słowa kluczowego `let` lub `const` do zadeklarowania zmiennej:

- `let` tworzy zmienną, której wartość można później zmienić:

```
// tworzymy zmienną, którą można modyfikować:

let message = "Hello, World!";
console.log(message); // konsola wyświetla "Hello, World!""

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
yourName = "John"; // w konsoli wyświetla się błąd:

// Uncaught TypeError: Assignment to constant variable.

```

### Zmienne globalne i lokalne

Zmienne globalne i lokalne w JavaScript różnią się zakresem dostępności. 

**Zmienne globalne** w JavaScript to zmienne zadeklarowane poza jakimkolwiek blokiem kodu (funkcją lub pętlą) i są dostępne z każdego miejsca w skrypcie. Zmienne te są zwykle zdefiniowane na najwyższym poziomie skryptu (pliku).

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

Tablica w JavaScript to struktura danych służąca do przechowywania wielu elementów w jednym miejscu. Może zawierać różne typy danych, takie jak liczby, ciągi znaków czy nawet inne tablice. Elementy tablicy są umieszczane pomiędzy klamrami kwadratowymi `[]` i są oddzielane przecinkami.

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

## Funkcje

### Argumenty funkcji

### Zwracanie wartości i słowo kluczowe return

## Pętle

## Instrukcje warunkowe i operatory

### Operatory

### if else