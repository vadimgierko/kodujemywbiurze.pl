# Javascript i Local Storage. Przechowujemy dane w przeglądarce. Aplikacja w wersji 2.0

---

## Wprowadzenie. Czym jest Local Storage?

---

Kod aplikacji w wersji 0. oraz 1. działa, aczkolwiek przechowuje dane (nasze zadania) tylko w trakcie sesji użytkownika w przeglądarce lub do momentu odświeżenia strony lub pliku z kodem. Gdybyśmy zrobili naszą aplikację tak, jak się to robi w prawdziwym świecie, to wykorzystalibyśmy **bazy danych** do przechowywania naszych zadań. Przechowywalibyśmy tam także dane użytkowników, którzy by z niej korzystali.

Dzięki bazom danych aplikacje mają dostęp do danych niezależnie od tego, na jakim urządzeniu korzysta się z aplikacji (w naszej aplikacji dane są dostępne tylko w tej konkretnej przeglądarce... a na telefonie to w ogóle nie działa). Ale są to zaawansowane tematy (mam nadzieję, że dojdziemy do nich w kolejnych kursach na *kodujemywbiurze.pl* - wszystko zależy od Was!).

Niemniej jednak, możemy doświadczyć, jak to jest pracować z bazą danych, dzięki wbudowanemu narzędziu każdej przeglądarki - `localStorage`. `localStorage` jest czymś w rodzaju magazynu, w którym możemy przechowywać pewne ilości danych w formie tekstowej (a dokładnie 5 MB - nie za wiele, ale nam wystarczy).

Chciałbym tylko od razu zaznaczyć, że `localStorage` przechowuje osobne zestawy danych dla każdego adresu url, co znaczy, że jak wdrożymy to rozwiązanie, to zadania zapisane w trakcie korzystania ze strony *kodujemywbiurze.pl* będą możliwe do odczytania tylko na tej stronie.

Jeśli z kolei będziemy korzystać z aplikacji na jakiejś innej stronie, np. *vadimgierko.com*, to tam będą przechowywane inne zadania, czyli teoretycznie mógłbyś/ mogłabyś odpalać plik `todo-app` na każdej stronie w Internecie i na każdej z nich przechowywać i modyfikować inne zestawy zadań (ale kod pozostaje taki sam i funkcjonuje w ten sam sposób).

Ok, wpisz więc do konsoli `localStorage` i kliknij Enter. Jeśli po raz pierwszy masz do czynienia z `localStorage` na tej stronie (nie robiłeś/aś wcześniej tego kursu), to wyświetli Ci się to: `Storage {theme: 'dark', length: 1}`. Ten komunikat pokazuje zawartość obiektu `Storage` *(nie omawialiśmy jeszcze obiektów, ale jest to zestaw kluczy i wartości zawartych pomiędzy klamrami `{}`, np. `{firstName: "Vadim", lastName: "Gierko"}`)*, który jak na razie przechowuje jedynie preferowany przez Ciebie tryb (jasny lub ciemny).

Tak, zgadza się, w tajemnicy przed Tobą przechowuję za pomocą `localStorage` to, czy korzystasz z ciemnego czy jasnego trybu na swoim urządzeniu lub czy samodzielnie zmieniłeś tryb wyświetlania na tej stronie klikając w ikonkę księżyca lub słońca w górnym menu. Jak widzisz, `localStorage` jest bardzo przydatny dla twórców stron, kiedy sięganie do bazy danych z prawdziwego zdarzenia jest zbyt dużym *overkillem*.

## Dodawanie, pobieranie i usuwanie prostych danych tekstowych z localStorage

---

Żeby **dodać** proste dane tekstowe do `localStorage`, trzeba użyć mniej więcej takiego kodu *(nie wpisuj go na razie w konsoli)*:

```javascript
localStorage.setItem("nazwaKlucza", "wartośćKlucza");
```

`setItem()` jest jedną z metod obiektu `localStorage`, dzięki której możemy przypisać wartość do jakiegoś klucza, podobnie jak przypisujemy wartość do zmiennej, tyle że zarówno nazwa klucza, jak i jego wartość mają być ujęte w cudzysłów.

Spróbuj zapisać lub zaktualizować swoje imię w `localStorage` w ten sposób:

```javascript
localStorage.setItem("name", "TutajWpiszSwojeImię");
```

i kliknij Enter, po czym wpisz `localStorage` i znowu kliknij Enter, by zobaczyć, że nowy klucz jest teraz w obiekcie.

**Uwaga!** Metoda **`setItem()` zawsze nadpisuje poprzednią wartość klucza**. Jeśli dany klucz nie istniał wcześniej, zostanie utworzony, jeśli istniał - jego wartość zostanie nadpisana przez nową wartość.

Żeby **pobrać** jakiś klucz z `localStorage`, należy użyć metody `getItem()`, podając w nawiasach nazwę klucza w cudzysłowiu, np. tak:

```javascript
localStorage.getItem("name");
```

Spróbuj pobrać zapisane przez siebie imię z `localStorage`.

Pobrane dane z `localStorage` możemy przypisać do zmiennej, by móc nimi operować w naszym programie. Można to zrobić w następujący sposób:

```javascript
let name = localStorage.getItem("name");

console.log("Imię zapisane w localStorage:", name);
```

Żeby **usunąć** jakiś klucz (i odpowiednio jego wartość) z `localStorage`, trzeba użyć wbudowanej metody `removeItem()`, podając w nawiasach nazwę klucza w cudzysłowiu, np. tak:

```javascript
localStorage.removeItem("name");

console.log(localStorage.getItem("name")); // konsola zwróci wartość null, co znaczy że nie ma takiej wartości
```

Spróbuj teraz usunąć klucz `name` z `localStorage`, a potem sprawdź, czy na pewno został usunięty.

## Dodawanie tablicy do localStorage (`JSON.stringify()`) | Zapisujemy nasze zadania w localStorage

---

Zapisanie bardziej złożonych struktur danych w `localStorage` wymaga dodatkowej czynności. Kiedy np. chcemy przechować lub nadpisać tablicę (a będziemy chcieli przechować tablicę z naszymi zadaniami), to musimy przekształcić ją na postać tekstową (stąd nazwa metody `stringify()`, czyli coś w rodzaju `przekształć w string (ciąg znaków)`) i przypisać do klucza:

```javascript
localStorage.setItem("tasks", JSON.stringify(["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]))
```

Powyższy kod wygląda strasznie 😬, ale zaraz "rozbijemy" go na mniejsze polecenia i rozłożymy na czynniki pierwsze.

Zwróc uwagę, że do metody `setItem()` przekazaliśmy najpierw tak, jak wcześniej, nazwę klucza `"tasks"` w cudzysłowiu, natomiast drugim argumentem nie jest po prostu tablica, tylko tablica przekazana jako argument do metody `JSON.stringify()`, która zwraca tablicę w ciąg znaków.

Bardziej klarownym i czytelnym rozwiązaniem byłoby najpierw przypisać tablicę do zmiennej, a potem zmienną przekazać do `JSON.stringify()`:

```javascript
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

localStorage.setItem("tasks", JSON.stringify(tasks));
```

Możemy też ten kod rozbić jeszcze bardziej:

```javascript
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];
let tasksStringified = JSON.stringify(tasks);

localStorage.setItem("tasks", tasksStringified);
```

## Pobranie tablicy z localStorage (`JSON.parse()`) | Pobieramy nasze zadania z localStorage

---

Żeby pobrać tablicę z `localStorage` również musimy zastosować dodatkową metodę uzupełniającą `getItem()`, ponieważ tablica jest zapisana w postaci ciągu tekstowego. W związku z tym, musimy "opakować" metodę `getItem()` w `JSON.parse()` - metodę, która przekształci naszą tablicę z ciągu tekstowego z powrotem w JavaScriptową tablicę:

```javascript
let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
```

Powyższy kod również wygląda strasznie 😬, więc podobnie "rozbijemy" go na mniejsze polecenia i rozłożymy na czynniki pierwsze.

Zwróć uwagę na liczbę nawiasów: ponieważ `localStorage.getItem("tasks")` zostało przekazane do `JSON.parse()` jako argument, w związku z tym zostało "opakowane" w dodatkowe nawiasy.

Tutaj również moglibyśmy zastosować bardziej czytelne rozwiązanie:

```javascript
// pobieramy tablicę zapisaną w localStorage w postaci ciągu tekstowego:
let tasksStringified = localStorage.getItem("tasks");

console.log("pobrana tablica w postaci ciągu tekstowego:", tasksStringified);

// przekształcamy ją z powrotem w JavaScriptową tablicę:
let tasksArray = JSON.parse(tasksStringified); // możemy też po prostu nazwać tasks

console.log("przekształcona z powrotem tablica:", tasksArray);
```

Powyższy kod jest nie tylko bardziej czytelny, ale też najprawdopodbniej bardziej zrozumiały dla Ciebie, gdyż rozbiliśmy złożoną czynność na 2 części: pobranie ciągu tekstowego i przypisanie go do zmiennej, a potem przekazanie tej zmiennej jako argumentu do `JSON.parse()`. No i nie mamy teraz tylu nawiasów (które *nota bene* mogą powodować dużą ilość błędów)!

Pobaw się tym kodem w konsoli i sprawdź, czym się różnią zmienne `tasksStringified` i `tasksArray`.

**UWAGA!** Po testowaniu i zabawie z kodem, **usuń klucz `"tasks"` z `localStorage` za pomocą `localStorage.remove("tasks")`**, żebyśmy mogli zacząć implementację kodu od podstaw.

## Zaczynamy implementować funkcjonalności localStorage. Pobieramy zadania

---

Uff... Znamy już podstawy pracy z `localStorage`, a nawet przetestowaliśmy dodawanie, pobieranie i usuwanie naszych zadań z `localStorage` za pomocą poleceń. Musimy teraz zaimplementować to w naszej aplikacji, a dokładnie zmodyfikować wszystkie dotychczasowe funkcje (a nawet deklarację zmiennej `tasks`!), by były zsynchronizowane z `localStorage`.

Utwórz zatem nowy plik o nazwie `todo-app-console-local-storage-snippet` w zakładce `snippets` i zaczynamy przenosić do niego i uzupełniać kod z wersji 1.0.

Być może się zastanawiasz, po co utworzyliśmy nowy plik, a nie modyfikujemy poprzedni, z którym pracowaliśmy wcześniej?

Otóż, jak najbardziej możemy modyfikować poprzedni plik z pierwszą wersją aplikacji, aczkolwiek wtedy ją utracimy. Owszem, być może nie będzie nam potrzebna, ponieważ nowa wersja będzie bardziej zaawansowana, aczkolwiek dobrą praktyką jest przechowywanie różnych wersji w różnych plikach.

W programowaniu nazywamy to kontrolą wersji i używa się do tego zaawansowanych narzędzi, tj. <a href="https://github.com/" target="_blank">GitHub</a>, aczkolwiek nam na razie wystarczy, że będziemy tworzyć nowy plik (lub później foldery z plikami) dla każdej wersji aplikacji, którą będziemy tworzyć. Ponadto, ten sposób organizacji naszego kodu pozwala nie tylko na wyizolowane korzystanie z każdej z wersji, ale także, w pewnym sensie, podróż w czasie, jeśli chodzi o naszą naukę, ale też rozwój aplikacji.

Zaczynamy!

Najpierw czyścimy konsolę, jak wcześniej:

```javascript
console.clear();

// ...tu będziemy pisać kolejne liniki kodu
```

Teraz, zamiast deklarować zmienną `tasks` i przypisywać do niej pustą tablicę, zdefiniujmy funkcję `getTasksFromLocalStorage()`, której nazwa wskazuje na to, że będzie pobierać i zwracać zapisane zadania z `localStorage`. Funkcja ta musi nie tylko pobrać, ale i zwrócić nasze zadania, byśmy mogli potem zadeklarować zmienną `tasks` i przypisać do niej pobrane zadania podczas uruchomienia programu.

Identycznie działa każda aplikacja, która pobiera dane z bazy danych, np. kiedy uruchamiamy Messengera, to przez jakąś chwilę pobiera on pewną ilość danych z bazy - ostatnie konwersacje, nowe wiadomości itd.

```javascript
// ...tutaj jest poprzedni kod w pliku

function getTasksFromLocalStorage() {
	// pobieramy tablicę zadań zapisaną w localStorage w postaci tekstowej:
	const storedTasksStringified = localStorage.getItem("tasks");

	// konwertujemy pobrane dane w JavaScriptową tablicę:
	const storedTasks = JSON.parse(storedTasksStringified);

	// UWAGA!
	// zadeklarowaliśmy powyższe zmienne za pomocą słowa kluczowego const, a nie let,
	// ponieważ nie będziemy tych zmiennych... zmieniać:
	// przypisujemy do nich pobraną wartość z localStorage lub też jej przekonwertowaną wersję,
	// a potem zwracamy tę zmienną (przekazujemy ją dalej do ponownego wykorzystania),
	// nie będziemy ich w żaden sposób modyfikować!

	// Jeśli nie pamiętasz, o co chodzi ze słowem kluczowym const,
	// wróć do lekcji nt. zmiennych w module 1. kursu JavaScript

	// PS. użycie słowa kluczowego let także zadziała,
	// aczkolwiek użycie const w tym przypadku będzie dobrą praktyką. 

	// zwracamy wartość:
	return storedTasks;
}

// zadeklarujmy zmienną tasks i przypiszmy do niej to,
// co zwróci funkcja getTasksFromLocalStorage():

let tasks = getTasksFromLocalStorage();

// funkcja showTasks() pozostaje bez zmian:

function showTasks() {
  console.log("Twoje zapisane zadania:", tasks);
}

// ...tu będzie kolejny kod
```

Przepisz powyższy kod do pliku, uruchom go i wpisz w konsoli, która się pojawiła, polecenie `showTasks()`. Co Ci się wyświetliło?

Jeśli zrobiłeś/aś wcześniej to, o co prosiłem (czyli po eksperymentach z `localStorage` usunąłeś/aś klucz `"tasks"`), to powinno Ci się wyświetlić `tasks: null`.

Co to znaczy? W JavaScript `null` jest specjalną wartością, która oznacza brak wartości. Klucz został usunięty z `localStorage`, więc jego wartość wynosi... nic. I to jest w porządku:

- jeśli są zadania lub też zadania zostały usunięte, ale klucz `"tasks"` jest nadal dostępny w `localStorage`, to funkcja `getTasksFromLocalStorage()` zwróci tablicę (pustą lub zawierającą zadania),
- jeśli z kolei klucz `"tasks"` został usunięty lub nie było go wcale, to funkcja zwróci `null`.

Jeśli po raz pierwszy odpalamy naszą aplikację na tej konkretnej stronie (pamiętasz, że `localStorage` przypisuje dane do konkretnego adresu url?), nigdy nie przechowywaliśmy tutaj zadań, w związku z czym ich wartość jest `null`. Podobnie jest w przypadku, gdy klucz został usunięty z `localStorage`.

No i mógłbyś/abyś zapytać: *W czym problem? Funkcja zwróciła `null` i tyle*.

Sprawdźmy zatem! Do kodu, który już masz w pliku, dodajmy zmodyfikowaną funkcję `addTasks`, która także wymaga utworzenia funkcji pomocniczej `updateTasksInLocalStorage()`, która będzie aktualizowała zadania w `localStorage`:

```javascript
// ...tutaj jest poprzedni kod w pliku

// dodajemy funkcję aktualizującą tablicę zadań w localStorage
// (czyli nadpisującą jej poprzednią wartość):

function updateTasksInLocalStorage() {
	// aktualizujemy localStorage o właśnie zmienione tasks
	// pamiętaj, że musimy przekształcić tablicę w dane tekstowe,
	// dlatego używamy JSON.stringify():

	localStorage.setItem("tasks", JSON.stringify(tasks));

	// pamiętaj, że tasks jest zmienną globalną,
	// czyli zawsze mamy dostęp do jej aktualnej wartości
	// z poziomu każdej funkcji
}

function addTask(newTask) {
  // dodajemy zadanie do zmiennej, tak jak wcześniej:
	tasks.push(newTask);

	// uzupełniamy funkcję addTasks o aktualizację localStorage
	// za pomocą funkcji updateTasksInLocalStorage():

	updateTasksInLocalStorage();

  // tu pozostawiamy dotychczasowy kod:
	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	showTasks();
}
```

Zapisz teraz plik, wyświetl zadania w konsoli, a potem spróbuj dodać zadanie za pomocą funkcji `addTasks("test")`. I co się stało?

Powinien wyświetlić się komunikat błędu (`error`): `Uncaught TypeError: Cannot read properties of null (reading 'push')`. Dlaczego pojawił się błąd?

Przyczyną błędu jest, że próbowaliśmy zastosować metodę `push()` (w środku funkcji `addTask()`), która jest metodą właściwą dla tablic, na wartości `null`, która tablicą nie jest... Nie da się "wcisnąć" jakiejś wartości do czegoś, co nie istnieje, a `null` jest właśnie reprezentacją niczego.

Dlatego musimy upewnić się, że funkcja `getTasksFromLocalStorage()` zawsze zwraca tablicę, nawet jeśli nie mamy klucza reprezentującego zadania w `localStorage` (lub też jeśli do klucza `"tasks"` z jakiegoś powodu byłaby przypisana wartość `null`, co jak najbardziej możemy zrobić, gdybyśmy tego chcieli).

W tym celu musimy dodać mechanizm sprawdzający, czy wartość klucza `"tasks"` w `localStorage` jest tablicą (nieważne, czy pustą, czy też zawierającą zadania), czy też `null` ~~i w tym drugim przypadku zamiast `null` funkcja powinna zwrócić po prostu pustą tablicę~~.

~~Żeby wdrożyć taki mechanizm, potrzebujemy... kolejnej dawki wiedzy! Dlatego teraz poznamy i zastosujemy po raz pierwszy konstrukcję warunkową `if-else` oraz powiązane z nią wartości logiczne `true` i `false`. Zacznijmy od `true` i `false`!~~

Nie przez przypadek przekreśliłem powyższe akapity. Chciałem Ci pokazać, że owszem, przekreślone zagadnienia są mega ważne i zdecydowanie zaliczają się do podstaw języka JavaScript oraz że owszem dzięki nim moglibyśmy wdrożyć wspomniany mechanizm sprawdzający, czy funkcja `getTasksFromLocalStorage()` zawsze zwraca tablicę, aczkolwiek...

Przed publikacją tego kursu przejrzałem jego treść jeszcze raz i stwierdziłem, że na tym etapie (w tym module oraz w kursie ogólnie) zależy mi na tym, abyście jak najszybciej zbudowali coś wartościowego, coś co działa, z czego możecie korzystać i jednocześnie wymaga jak najmniej wiedzy, żeby Was nie przytłoczyć jej nadmiarem. Moim celem jest Was zachęcić do spróbowania swoich sił w kodowaniu, dlatego...

Zamiast lektury dwóch większych rozdziałów (ponad 200 linijek tekstu i przykładów, które oczywiście i tak później wypłyną), zastosujemy pewien trick - skrót myślowy, który rozwiąże nasz problem w sekundę, bez nadmiaru wiedzy i przykładów, a jednocześnie jest powszechną i poprawną techniką sprawdzania czy wartość jest prawdziwa (istnieje). **Użyjemy operatora logicznego `||`** podczas zadeklarowania zmiennej `tasks` w ten sposób:

```javascript
let tasks = getTasksFromLocalStorage() || [];
```

Zauważ, że po wywołaniu funkcji, która zwraca albo tablicę z zadaniami, albo `null`, czyli nic, co zdecydowanie nie jest tablicą i później doprowadzi do błędu, wstawiliśmy mały fragment kodu: `|| []`.

Operator logiczny `||` (bardzo upraszczając) oznacza dosłownie `lub` (ang. `or`) i w tym przypadku działa w ten sposób: **jeśli `getTasksFromLocalStorage()` zwraca "nic", czyli innymi słowami, jeśli nie ma zwróconych zadań, to przypisz do zmiennej `tasks` pustą tablicę**.

Lub jeszcze inaczej: **przypisz do zmiennej `tasks` realną/ rzeczywistą wartość zwróconą przez `getTasksFromLocalStorage()` (czyli np. tablicę) LUB (`||`) przypisz pustą tablicę**. Zadania lub pusta tablica.

Od razu powiem, że jest to ogromne uproszczenie i wręcz spłaszczenie tego, co się dzieje naprawdę, ale uznałem, że na razie wystarczy nam taki trick - te tematy poruszymy we właściwym czasie!

- zmodyfikuj zatem wcześniejszy kod, służący do deklaracji zmiennej `let tasks = getTasksFromLocalStorage();` i zamień go na `let tasks = getTasksFromLocalStorage() || [];`,
- zapisz plik,
- uruchom go

i zobaczysz, że w konsoli po odpaleniu programu znowu pojawił się komunikat o wartości `null` klucza `"tasks"`.

Teraz wyświetl listę zadań (`showTasks()`), która powinna zwrócić pustą tablicę!

No i teraz możesz spróbować dodać jakieś zadanie: `addTask("zadanie testowe")`.

Mało tego, że tym razem udało się w końcu dodać zadanie, to w dodatku zostało ono zapisane w `localStorage` (ponieważ `addTask()` zawiera teraz dodatkową funkcję updatejtującą `localStorage` po dodaniu zadania `updateTasksInLocalStorage()`)!

Możesz to sprawdzić, uruchamiając kod jeszcze raz (kliknij ikonkę trójkąta lub `Ctrl+Enter` lub przeładowując stronę i uruchamiając plik). Tym razem nie zobaczysz żadnego komunikatu o wartości `null`. Spróbuj teraz wpisać `showTasks()` i powinieneś/aś zobaczyć to: `tasks: ['test']`. Udało się!

Fajnie by było również, gdyby aplikacja po uruchomieniu od razu pokazała nam nasze zapisane zadania lub też ich brak. Dodaj więc wywołanie funkcji `showTasks()` na końcu pliku (pamiętaj, że JavaScript czyta i wywołuje kod od góry do dołu, dlatego zainicjuje wszystkie zmienne i funkcje, a potem wywoła `showTasks()`, która będzie już miała dostęp do pobranych (lub nie) zadań).

## Modyfikujemy pozostałe funkcje, aby aktualizowały `localStorage`

---

Aby dokończyć wersję 2.0 aplikacji, pozostało nam tylko dodać funkcję `updateTasksInLocalStorage()` do pozostałych funkcji (po prostu kopiuj i wklejaj `updateTasksInLocalStorage();` we właściwych miejscach w funkcjach, czyli po modyfikacji zmiennej `tasks`):

```javascript
// todo-app-local-storage app code:

// ...tutaj jest poprzedni kod w pliku

function addTaskAtIndex(index, newTask) {
  tasks.splice(index, 0, newTask);

	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	updateTasksInLocalStorage(); // <= dodajemy updateTasksInLocalStorage()

	showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

	updateTasksInLocalStorage(); // <= dodajemy updateTasksInLocalStorage()

	showTasks();
}

function deleteAllTasks() {
  tasks = [];
	
	console.log("Wszystkie zadania zostały usunięte...");

	updateTasksInLocalStorage(tasks); // <= dodajemy updateTasksInLocalStorage()
	
	showTasks();
}

// odpalając program, wyświetlamy zapisane zadania na start:
showTasks();
```

Jeszcze raz (na wszelki wypadek) wytłumaczę, dlaczego dodaliśmy funkcję `updateTasksInLocalStorage()` i dlaczego dodaliśmy ją w określonym miejscu w naszym kodzie.

Wspomniana funkcja ma dostęp do globalnej zmiennej `tasks`. Zmienna ta nazywa się globalną, ponieważ została zadeklarowana poza żadną funkcją, w związku z czym nic nie ogranicza jej zasięgu - mamy do niej dostęp w dowolnej linijce kodu poniżej jej deklaracji. `updateTasksInLocalStorage()` nie robi nic innego, jak przypisuje do klucza `"tasks"`, znajdującego się w `localStorage`, aktualną wartość zmiennej `tasks`, czyli jej rzeczywistą wartość w chwili zapisu.

Jeśli np. dodaliśmy coś do tablicy `tasks`, a potem wywołamy `updateTasksInLocalStorage()`, to będzie miała ona dostęp do zmienionej przed sekundą tablicy zadań. Dlatego tak ważne jest, by wywołać `updateTasksInLocalStorage()` dopiero po aktualizacji zadań, a nie np. przed, ponieważ w tym przypadku zapisalibyśmy wartość `tasks` przed zmianą jej wartości.

Zobaczmy przykład ✅ poprawnej aktualizacji `localStorage`:

```javascript
// przykładowa lista zadań:

let tasks = ["a", "b", "c"];
console.log(tasks); // => ["a", "b", "c"]

// 1. najpierw dodajemy zadanie do zmiennej:
tasks.push("d");
console.log(tasks); // => ["a", "b", "c", "d"]

// 2. dopiero teraz aktualizujemy localStorage,
// czyli wrzucamy do niego taski z nowododanym "d":

updateTasksInLocalStorage(); // zapisaliśmy ["a", "b", "c", "d"] do localStorage
```

W tym przykładzie zachowaliśmy spójny stan aplikacji: zmienna `task` jest "zsynchronizowana" z wartością `"tasks"` w `localStorage`.

Poniżej z kolei jest przykład ❌ niepoprawnej aktualizacji `localStorage`:

```javascript
// przykładowa lista zadań:

let tasks = ["a", "b", "c"];
console.log(tasks); // => ["a", "b", "c"]

// 1. najpierw aktualizujemy localStorage:
updateTasksInLocalStorage(); // w localStorage zapisujemy aktualną wartość tasków => ["a", "b", "c"]

// 2. dodajemy zadanie do zmiennej:
tasks.push("d");
console.log(tasks); // => ["a", "b", "c", "d"]
```

Jak widzisz, "rozjechał" nam się stan aplikacji: `localStorage` przechowuje wartość `tasks` sprzed dodania nowego zadania do listy, w związku z czym `localStorage` i `tasks` nie są zsynchronizowane.

Pamiętaj zatem, żeby pilnować:

- kolejności poleceń w JavaScript - kod jest wykonywany od góry do dołu;
- pilnuj stanu aplikacji, jeśli zmienne/ lokalizacje wymieniają się danymi.

## Podsumowanie. Kompletny kod aplikacji w wersji 2.0 aplikacji do zarządzania zadaniami zintegrowanej z localStorage

---

Poniżej znajduje się cały kod aplikacji w wersji 2.0 zapisanej w pliku `todo-app-console-local-storage-snippet` w zakładce `snippets`, która przechowuje zadania w `localStorage`, dzięki czemu **Twoje zadania będą zapisane w pamięci przeglądarki tak długo, aż nie wyczyścisz `localStorage`**!

Spróbuj odświeżyć stronę lub zamknąć przeglądarkę, a potem znowu uruchomić plik - zadania nadal są w pamięci przeglądarki!

Pozwoliłem sobie usunąć komentarze z poniższego kodu, ponieważ widziałeś/aś je już nie raz, a ponadto nasz kod jest wystarczająco czytelny, a funkcje mają właściwe i opisowe nazwy, więc wszystko powinno być jasne.

*Gdybyś jednak nie mógł/a sobie przypomnieć, co robią poszczególne funkcje, to zapraszam do odpowiednich fragmentów kursu JavaScript.*

```javascript
console.clear();

function getTasksFromLocalStorage() {
	const storedTasksStringified = localStorage.getItem("tasks");

	const storedTasks = JSON.parse(storedTasksStringified);

	return storedTasks;
}

let tasks = getTasksFromLocalStorage() || [];

function showTasks() {
	console.log("Twoje zapisane zadania:", tasks);
}

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

// odpalając program, wyświetlamy zapisane zadania na start:
showTasks();
```

## Zakończenie oraz kolejny kurs (HTML)

---

Właśnie dobrnąłeś/aś do końca kursu o `localStorage`! Twoja aplikacja działa w konsoli oraz przechowuje dane w przeglądarce!

Czas najwyższy zbudować prosty widok naszej aplikacji za pomocą HTML (prosty interface użytkownika), a potem zintegrować ten widok z JavaScriptem, czym się zajmiemy w kolejnych kursach.

Gratuluję! Możesz śmiało przejść do kolejnego kursu 👉 ***[Integrujemy HTML i JavaScript. Podstawy DOM. Pierwsza interaktywna aplikacja webowa](/kursy/html)***!