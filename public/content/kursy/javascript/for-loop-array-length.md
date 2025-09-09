## Pętla for, długość tablicy length | Wyświetlanie zadań po kolei

---

A co powiesz na to, że zamiast wyświetlać całą tablicę zadań, wyświetlimy każde zadanie w osobnej linijce, dzięki czemu lista będzie bardziej przejrzysta?

Możemy to osiągnąć na wiele sposobów, ale wykorzystamy (i poznamy) w tym celu starą dobrą klasyczną metodę - pętlę `for`. Czym jest pętla?

**Pętla jest poleceniem, które wykonuje pewne zadanie raz po raz, dopóki pewien warunek jest spełniony**. Ogólnie początkujący programiści czasami mają problem ze zrozumieniem działania pętli, więc w razie czego, nie poddawaj się od razu ;-)

Zobaczmy poniższy kod i zastanówmy się nad nim:

```
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

Jak Ci się wydaje, co się dzieje w tym kodzie? Spróbuj go przepisać do konsoli (lub skopiować), kliknij Enter i zobacz, co się stanie! Jeśli wszystko poszło dobrze, to powinny Ci się wyświetlić liczby od 0 do 9, przy czym każda liczba została wyświetlona w nowej linijce.

Jak to działa?

Więc po słowie kluczowym `for` dzieją się 3 rzeczy w nawiasach:

- `let i = 0;` => w tej części definiujemy zmienną `i`, której przypisujemy wartość 0,
- `i < 10;` => to jest warunek, który ma być spełniony, by pętla działała - w tym konkretnym przypadku pętla ma działać, dopóki `i` jest mniejsze, niż 10 (czyli jeśli `i` będzie równe 10, pętla przestanie działać),
- `i++` => ten kod z kolei zwiększa wartość `i` o 1 po każdej iteracji pętli.

Natomiast pomiędzy klamrami `{ }` wpisujemy to, co ma się wydarzyć podczas każdej iteracji pętli (podobnie jak w funkcjach). W naszym przykładzie za każdym razem będzie wywoływana funkcja `console.log()`, która będzie wyświetlała aktualną wartość zmiennej `i`, która jest za każdym razem powiększana o 1.

Gdybyśmy chcieli "przetłumaczyć" cały powyższy kod na ludzki język, to moglibyśmy to zrobić w ten sposób:

1. Sprawdź, czy aktualnie `i` jest mniejsze, niż 10.
2. Jeśli tak, to wywołaj kod zawarty w klamrach (jeden raz), po czym zwiększ `i` o 1 i wróć do pierwszego punktu.
3. Jeśli nie (`i` jest równe lub większe niż 10), nie wywołuj żadnego kodu i zakończ zadanie (nie wracaj do pierwszego punktu).

Gdybyśmy teraz chcieli wyświetlić nasze zadania w podobny sposób, moglibyśmy stworzyć nową pętlę, aczkolwiek zamiast sprawdzać, czy `i` jest mniejsze od 10, będziemy sprawdzać, czy `i` jest mniejsze od długości naszej listy (a możemy sprawdzić długość naszej listy, która jest tablicą, w ten sposób: `tasks.length`), czyli liczby elementów, które zawiera:

```
for (let i = 0; i < tasks.length; i++) {
	console.log(tasks[i]);
}
```

W powyższym kodzie iterujemy po naszych zadaniach z listy, dopóki zmienna `i` jest mniejsza od długości listy, do której mamy dostęp sprawdzając długość tablicy `tasks.length` (możesz to osobno sprawdzić, wpisując ten kod do konsoli).

Dlaczego nie sprawdzimy długości listy w konsoli i nie użyjemy tej konkretnej liczby w naszej pętli? Takie podejście nie ma sensu, ponieważ długość listy będzie najprawdopobniej się zmieniać (np. za chwilę stworzymy funckję do usuwania zadań z listy), a właściwość `length` zawsze dynamicznie zwróci nam realną długość każdej tablicy.

Z drugiej strony zwróć uwagę na to, w jaki sposób uzyskujemy dostęp do każdego zadania za pomocą indeksu tablicy. Robiliśmy to już wcześniej, kiedy omawialiśmy tablice i indeksy, np. kiedy pisaliśmy kod `tasks[0]`, żeby zwrócić pierwszy element z listy. Teraz używamy dynamicznej zmiennej `i`, która każdorazowo automatycznie podstawia kolejny indeks poprzez `tasks[i]` - jeśli `i` w danej chwili będzie równe 5, to program potraktuje nasz dynamiczny kod jako `tasks[5]`.

No i ciekawostka: **jak uzyskać ostatni element z listy**, której długości nie znamy? Nie wiemy przecież, jaką wartość indeksu mamy wpisać w `tasks[?]`... Otóż możemy to robić na kilka sposobów (jak zwykle w programowaniu), natomiast na początek w tym celu możemy użyć nowo poznanej właściwości `length` w ten sposób:

```
tasks[tasks.length - 1];
```

Co się dzieje w powyższym kodzie? Ponieważ nie znamy długości listy, ale wiemy, że właściwość `length` zawsze zwraca atkualną długość tablicy, dynamicznie obliczyliśmy indeks ostatniego elementu odejmując od długości jedynkę.

Może się to wydawać zagmatwane, więc przyjrzyjmy się temu lepiej. Pamiętasz mówiłem, że indeksy zaczynają się od 0, a nie od 1? Jeśli więc mamy listę, która zawiera np. 10 elementów, to indeksem ostatniego elementu będzie... 9! Jeśli z kolei sprawdzimy, co zwraca właściwość `length`, to zwróci ona... 10! Dzieje się tak dlatego, że długość tablicy równa się liczbie elementów, które przechowuje. W związku z tym, jeśli chcemy uzyskać dostęp do ostatniego (dziesiątego) elementu tej listy, musimy użyć indeksu 9: `tenElementsList[9]`. Żeby uzyskać 9, musimy od (długości) 10 odjąć 1. W związku z tym, żeby uzyskać dostęp do ostatniego elementu tablicy o dowolnej nieznanej długości, korzystamy z kodu `list[list.length - 1]` (zamiast `list` podstawiamy oczywiście nazwę naszej zmiennej).

Ok, ale jak widzisz, kiedy wyświetlamy zadania za pomocą pętli, to wyświetlają się nam same zadania bez przypisanych indeksów. To może sprawić problem przy ich usuwaniu, ponieważ musimy wiedzieć, jaki jest indeks zadania, które usuwamy. Dlatego zmodyfikujmy (a raczej stwórzmy nową) pętlę w taki sposób, aby przed nazwą zadania wyświetlała także jego indeks:

```
for (let i = 0; i < tasks.length; i++) {
	console.log(i, tasks[i]);
}
```

Przekształćmy to w funkcję:

```
// poniższa funkcja wyświetla zadania jedno po drugim;
// nie utworzyliśmy poniższej funkcji w kursie,
// ale użyliśmy jej wcześniej w kodzie wersji 0:

function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(i, tasks[i]);
	}
}
```