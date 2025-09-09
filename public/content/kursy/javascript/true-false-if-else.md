## Wartości logiczne true i false - wybrane podstawy

---

W JavaScript *(ale też w innych językach programowania)* wartości `true` i `false` są używane do reprezentowania logicznych prawd i fałszu. Są one często używane w warunkach logicznych, takich jak instrukcje warunkowe `if-else` *(które za chwilę omówimy i wykorzystamy)*, operatory logiczne () i wiele innych.

`true` reprezentuje prawdę. Oznacza, że warunek jest spełniony lub wartość logiczna jest prawdziwa. `false` reprezentuje fałsz. Oznacza, że warunek nie jest spełniony lub wartość logiczna jest fałszywa. Zobaczmy kilka przykładów:

```
let inOffice = false;
let inHomeOffice = true;
let onVacation = false;

console.log("Czy pracownik jest w biurze?", inOffice); // zwraca false
console.log("Czy pracownik jest na pracy zdalnej?", inHomeOffice); // zwraca true
console.log("Czy pracownik jest na urlopie?", onVacation); // zwraca false

inOffice = true;
console.log("Czy pracownik jest w biurze?", inOffice);
```

```
let a = 10;
let b = 5;

console.log("Czy a jest większe od b?", a > b);
console.log("Czy a jest mniejsze od b?", a < b);
console.log("Czy b jest większe od a?", b > a);

console.log(a + b > 10); // zwraca true, ponieważ 10 + 5 jest większe od 10
console.log(a + b > 20); // zwraca false, ponieważ 10 + 5 nie jest większe od 20
```

Znaki `<` i `>` to niektóre z operatorów porównania, których na razie nie omawiamy, ponieważ nie są nam na razie potrzebne w naszej aplikacji - na pewno temat operatorów *(który jest jednym z podstawowych tematów w nauce programowania)* zostanie poruszony, jak tylko zajdzie taka potrzeba.

Wartości logiczne `true` i `false` są fundamentalne w JavaScript i stanowią podstawę do podejmowania decyzji na podstawie warunków w programach, o czym się zaraz przekonamy.

## Konstrukcja warunkowa if-else - wybrane podstawy | Jeśli w localStorage nie ma zapisanych zadań, zwracamy pustą tablicę

---

W JavaScript, `if-else` to konstrukcja warunkowa używana do wykonywania różnych fragmentów kodu w zależności od warunku logicznego. Wygląda to mniej więcej tak:

```
if (warunek) {
  // kod bloku if do wykonania, jeśli warunek jest prawdziwy
} else {
  // kod bloku else do wykonania, jeśli warunek jest fałszywy
}
```

Jeśli warunek wewnątrz `if` jest spełniony, czyli jest prawdziwy, co znaczy że zwraca wartość logiczą `true`, kod w jego bloku zostanie wykonany. W przeciwnym razie, jeśli warunek nie jest spełniony (zwraca `false`), wykonany zostanie kod w bloku `else`.

Istnieje również możliwość zagnieżdżania wielu warunków z użyciem `else if`, co pozwala sprawdzać kolejne warunki, jeśli pierwszy warunek nie jest spełniony:

```
if (warunek1) {
  // kod do wykonania, jeśli warunek1 jest prawdziwy
} else if (warunek2) {
  // kod do wykonania, jeśli warunek1 nie jest prawdziwy, natomiast warunek2 jest prawdziwy
} else {
  // kod do wykonania, jeśli żaden z warunków nie jest spełniony
}
```

To pozwala na bardziej skomplikowane zachowania w zależności od różnych warunków w kodzie JavaScript.

Wykorzystajmy przykłady z poprzedniej lekcji o `true` i `false` w konstrukcjach warunkowych.

Wyobraź sobie, że mamy aplikację z bazą danych pracowników, w której odznacza się, czy pracownik pracuje dziś w biurze, jest na pracy zdalnej lub też na urlopie. Poniższy kod mógłby w pewien sposób odzwierciedlać logikę działania takiego wyszukiwania i wyświetlania komunikatów:

```
let inOffice = false;
let inHomeOffice = true;
let onVacation = false;

if (inOffice) {
  console.log("Pracownik jest dziś w pracy!");
} else if (inHomeOffice) {
  console.log("Pracownik udaje, że pracuje w domu.");
} else if (onVacation) {
  console.log("Pracownik dorabia na czarno podczas urlopu (dobrze, że nie dorabia w trakcie pracy zdalnej!)");
} else {
	console.log("Brak danych...");
}
```

Wklej powyższy kod do konsoli, a potem kliknij Enter. Sprawdź, jaki jest komunikat. A potem wklej całość kodu znowu, ale zanim klikniesz Enter, zmień `true` na `false` i przypisz `true` do innej zmiennej. Kliknij Enter i sprawdź komunikat.

A teraz... wklej cały ten kod jeszcze raz i zmień wszystkie wartości na `true`, zanim klikniesz Enter. Jak myślisz, co się stanie? Wyświetlą się wszystkie 3 komunikaty? Otóż nie, ponieważ konstrukcja `if-else` zwraca zawsze tylko pierwszy napotkany spełniony warunek (w naszym przypadku będzie to komunikat `console.log("Pracownik jest dziś w pracy!")`), a pozostałe ignoruje, dlatego trzeba uważać.

Jeśli z kolei wszystkie warunki ustawimy na `false`, to wyświetli się komunikat z bloku `else`, który działa, jeśli żaden ze zdefiniowanych warunków nie został spełniony. W tym przypadku wyświetli się komunikat `Brak danych...`.

Jest jeszcze jedna istotna kwestia, którą musimy przyswoić, by rozwiązać nasz problem z funkcją `getTasksFromLocalStorage()`:

**W programowaniu niektóre wartości same z siebie są traktowane jako prawda (`true`) albo fałsz (`false`). Takie wartości odpowiednio określa się jako `truthy` i `falsy`.**

Wartościami `falsy`, czyli tymi, które zwracają fałsz (`false`) w sensie logicznym (i odpowiednio w warunkach zawartych w konstrukcjach `if-else`), są m. in.:

- wartość logiczna `false` (to chyba jest oczywiste), 
- liczba 0 (ale liczby ujemne już nie - są `truthy`!),
- pusty `string` (ciąg znaków), czyli `""` lub `''` (ale pusta tablica `[]` jest `truthy` - tak, JavaScript jest czasami dziwny...),
- wartość `null`,
- wartość `undefined` (taką wartość ma zmienna, która została zadeklarowana, ale nie została do niej przypisana żadna wartość, np. `let task;`)  

Wszystkie pozostałe wartości są `truthy`, czyli zwracają `true` w warunkach.

Wiem, że dużo tego jest i niektóre rzeczy może nie być tak łatwo sobie przyswoić, ale w końcu jesteśmy w 3. module 😜.

Zobaczmy kilka przykładów i przetestujmy je w konsoli:

```
let name = ""; // name jest pustym ciągiem znaków

if (name) {
  // name jest truthy; innymi słowy, jeśli zawiera choćby jeden znak, to jest już czymś:
  console.log("Imię:", name);
} else {
  // name jest falsy...
  console.log("Nie masz imienia...", name);
}

let tasks = null;

if (tasks) {
  console.log("Zadania:", tasks);
} else {
  console.log("Nie ma zadań...");
}

let list = []; // list jest pustą tablicą, więc jest truthy, ale...

if (list.length) {
  console.log("Lista ma długość (zawiera co najmniej jeden element) - jest to jakaś liczba większa od zera, a dokładnie:", list.length);
} else {
  console.log("Długość tablicy wynosi 0, więc jest falsy", list.length);
}
```

Powyższe przykłady zawsze wywołują kod z bloku `else`, ponieważ wszystkie warunki zwracają fałsz. Spróbuj je przetestować, a potem przypisać do zmiennych wartości truthy, np.: `name = "Freddie"; tasks = ["zrozumieć logikę JavaScript"]; list = [1, 2, 3];`.

Uff... wróćmy więc teraz do funkcji `getTasksFromLocalStorage()` i dodajmy do niej sprawdzającą logikę, na którą tak czekamy:

```
function getTasksFromLocalStorage() {
	// pobieramy tablicę zadań zapisaną w localStorage w postaci tekstowej:
	let storedTasksStringified = localStorage.getItem("tasks");

	// konwertujemy pobrane dane w JavaScriptową tablicę (lub null):
	let storedTasks = JSON.parse(storedTasksStringified);

	// sprawdzamy, czy storedTasks są truthy,
	// czyli są pustą tablicą lub tablicą z elementami:
	
	if (storedTasks) {
		return storedTasks; // zwracamy storedTasks
	} else { // jeśli tasks są falsy, czyli w naszym przypadku null
	  // dodajmy komunikat komunikat, żebyśmy byli pewni,
		// że w localStorage nie było klucza tasks,
		// więc zwracamy tablicę:
		console.log("Klucz 'tasks' ma wartość", storedTasks, "więc zwracamy pustą tablicę, by móc do niej dodawać elementy za pomocą metodu push()");
		return []; // zwracamy pustą tablicę
	}
}
```