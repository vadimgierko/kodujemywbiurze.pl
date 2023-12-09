## Wprowadzenie

---

**Witaj w darmowym kursie *Podstawy HTML. Pierwsza statyczna strona internetowa***!

Najprawdopodobniej trafiłeś/aś tutaj, ponieważ ukończyłeś 3 moduły pierwszego kursu na tej stronie nt. <a href="/kursy/javascript" target="_blank">JavaScript</a>, gdzie poznaliśmy podstawy tego języka i mamy już ukończoną aplikację do zarządzania zadaniami, która działa w konsoli przeglądarki i przechowuje zadania w pamięci przeglądarki `localStorage`.

Jeśli z kolei zajrzałeś/aś tutaj z czystej ciekawości, to polecam zacząć od <a href="/kursy/javascript" target="_blank">kursu JavaScript</a>, ponieważ tutaj **poznamy niezbędne podstawy języka HTML, by stworzyć prawdziwy interface dla JavaScriptowej aplikacji, którą już zbudowaliśmy w konsoli**.

Niemniej jednak, możesz zacząć poznawać programowanie webowe od tego kursu i HTML (tak, jak radzi większość), jednakże stworzymy tutaj wyłącznie minimalistyczną statyczną stronę dla aplikacji. Potem będziesz musiał/a i tak powrócić do JavaScript, by ją ożywić, więc w pewnym momencie powstanie małoprzyjemna "dziura", w trakcie której będziesz opanowywał/a podstawy JSa...

### Co zrobimy w niniejszym kursie i co dalej?

W niniejszym kursie dowiemy się, czym są oraz dodamy takie elementy UI, jak:

- nagłówek `<h1>` - tytuł naszej aplikacji,
- linia rozdzielająca `<hr>`,
- lista `<ul>` + `<li>` wyświetlającą zadania,
- przyciski usunięcia oraz dodania zadania.

Kiedy dobrniesz do końca tego kursu, przejdziemy do <a href="/kursy/html-javascript-dom" target="_blank">kolejnego kursu łączącego HTML i JavaScript za pomocą DOM</a>, dzięki czemu powstanie prawdziwa interaktywna i działająca aplikacja z prawdziwego zdarzenia!

*Happy Coding!*

## Czym jest HTML i dlaczego warto się go uczyć?

---

Czym jest zatem HTML?

**HTML** *(HyperText Markup Language)* jest jednym z 3 podstawowych języków (razem z JavaScript i CSS) używanych do tworzenia stron internetowych. Definiuje strukturę i zawartość strony internetowej, określając elementy tj. nagłówki, paragrafy, linki, obrazy itp.

HTML wykorzystuje znaczniki (tagi), które opisują różne elementy treści na stronie, umożliwiając przeglądarkom internetowym interpretację i wyświetlanie tych elementów w czytelny sposób dla użytkowników.

Technicznie rzecz biorąc, HTML nie jest uważany za język programowania w ścisłym sensie. HTML opisuje, jak treść na stronie ma być prezentowana, ale nie posiada zdolności do tworzenia algorytmów ani wykonywania złożonych operacji (które np. robiliśmy za pomocą JavaScript w pierwszym kursie), co jest charakterystyczne dla języków programowania.

W odróżnieniu od języków programowania, **HTML nie jest przeznaczony do manipulowania danymi**. Jego głównym celem jest **organizacja i prezentacja informacji** na stronie internetowej, definiując strukturę, zawartość i wygląd elementów.

Języki takie jak JavaScript są uważane za języki programowania, ponieważ pozwalają na tworzenie algorytmów, wykonywanie obliczeń, manipulowanie danymi i wiele innych operacji, których HTML nie jest w stanie wykonać.

Właśnie z tego względu postanowiłem, że pierwszym kursem na tej stronie oraz pierwszym kursem, od którego polecam zacząć naukę programowania webowego, będzie JavaScript. Mam nadzieję, że przerobiłeś/aś wspomniany kurs i jesteś tutaj, dlatego że zostałeś/aś z niego przekierowany. Jeśli z kolei nie przerobiłeś/aś jeszcze kursu JavaScript, to polecam najpierw to zrobić, ponieważ w tym kursie będziemy dalej rozwijać poprzednią aplikację i dodawać nową wiedzę do zdobytych wcześniej fundamentów.

## Plik HTML, nagłówek h1, tagi, znaczniki

---

Stwórzmy nasz pierwszy plik z kodem HTML! Niestety, zakładka `snippets` w przeglądarce jest dostosowana tylko do plików zawierających kod JavaScript, dlatego nie możemy tam zapisać pliku z kodem HTML.

W prawdziwym programistycznym świecie używamy w tym celu edytorów kodu (pobranych na komputer lub w wersji online), natomiast my na razie nie chcemy bawić się w te rzeczy, żeby nic dodatkowo nie rozpraszało naszej uwagi (później będziemy z tego korzystać, nie martw się), dlatego użyjemy najprostszego narzędzia: wbudowanej aplikacji Windows pt. *Notatnik*.

Wyszukaj aplikację *Notatnik* na swoim komputerze i uruchom ją. Zobaczysz totalnie minimalistyczne okno aplikacji.

Teoretycznie powinniśmy w tej chwili zainicjować plik HTML poniższym kodem (nie rób tego na razie), który jest w pewnym sensie "kontenerem" dla kodu naszej aplikacji:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>

  <body>
  </body>
</html>
```

Ale... możemy na razie zrobić coś innego, co również zadziała, a jednocześnie nie przeciąży naszej percepcji 😜 Stwórzmy nasz pierwszy nagłówek w HTML, który *de facto* jest tytułem naszej aplikacji, wpisując poniższy kod w pliku:

```html
<h1>Twoje zadania</h1>
```

`<h1>` jest znacznikiem lub inaczej tagiem HTML, który mówi przeglądarce: *wyświetl nagłówek o poziomie 1 (czyli ten największy)*.

Tagi są podstawowym budulcem strony internetowej. Są jak klocki lego, z których układamy wieżę - dosłownie, ponieważ kod HTML, podobnie jak JavaScript, jest uruchamiany przez przeglądarkę od góry do dołu.

Jak widzisz, tagi są ujęte w `< >`, przy czym najpierw używamy tagu otwarcia, czyli `< >`, potem wpisujemy treść, którą chcemy pokazać na ekranie, a potem używamy tagu zamknięcia `</>`.

Sprawdźmy, co w ogóle robi ten kod! Kliknij w zakładkę *Plik* aplikacji *Notatnik* i z rozwijanego menu wybierz opcję *Zapisz jako*, po czym wpisz następującą nazwę pliku: `todo-app.html` (`.html` jest rozszerzeniem pliku, które oznacza, że plik zawiera kod HTML), natomiast w rozwijanym polu *Zapisz jako typ* wybierz *Wszystkie pliki*, by można było zapisać plik w dowolnym formacie. Po czym sprawdź, w jakiej lokalizacji zostanie zapisany plik (sugeruję wybrać pulpit, ponieważ tak będzie łatwiej zapamiętać) i kliknij *Zapisz*.

Teraz zajrzyj na pulpit swojego urządzenia i powinieneś/aś szukać ikonki Twojej domyślnej przeglądarki (np. Chrome), ale z nazwą `todo-app`. To jest właśnie nasz plik! Dlaczego ma ikonkę przeglądarki? A no właśnie dlatego, że zapisaliśmy go z rozszerzeniem `.html`, co jest sygnałem dla komputera, że jest to... strona internetowa!

Kliknij w plik dwa razy myszką i zobaczysz, że otworzy Ci się okno Twojej domyślnej przeglądarki, a na ekranie zobaczysz nagłówek *Twoje zadania*!

Mam nadzieję, że Twoją domyślną przeglądarką jest Chrome, jeśli nie, to możesz kilknąć w plik prawym przyciskiem myszki i wybrać opcję *Otwórz za pomocą*, po czym wybrać Chrome. Dlaczego? Dlatego, że za chwilę "podepniemy" plik JavaScript z zakładki `snippets`, który jest dostępny tylko w Chromie i Edge.

Gratuluję! Właśnie odpaliłeś/aś własną lokalną (ponieważ dostępną tylko na Twoim komputerze) stronę internetową (dokładniej mówiąc plik w przeglądarce, ale nie wchodźmy w szczegóły).

Jeszcze raz zaznaczę, że tę jedyną linijkę kodu powinniśmy zawrzeć w środku większego kodu, który napisałem powyżej, ale na razie nasze rozwiązanie również działa, więc skupmy się na samym HTMLu.

Wiemy już, co to są znaczniki oraz jak utworzyć nagłówek. Jest 6 poziomów nagłówków, których możemy używać w HTMLu:

```html
<h1>Twoje zadania</h1>
<h2>Twoje zadania</h2>
<h3>Twoje zadania</h3>
<h4>Twoje zadania</h4>
<h5>Twoje zadania</h5>
<h6>Twoje zadania</h6>
```

Wpisz powyższy kod do pliku HTML, zapisz go (`Ctrl+S`) i odśwież okno przeglądarki, w której działa nasz plik - zobaczysz, że zmiany w kodzie zostały wygenerowane.

Łatwizna, co? Po JavaScripcie na pewno!

Istnieje mnóstwo tagów HTML i nie znam ich wszystkich na pamięć, mimo że koduję od 3 lat. Ty również nie musisz, będziemy zatem poznawać tylko te tagi które są potrzebne nam do stworzenia naszej aplikacji jak najszybciej!

Żeby ładnie oddzielić tytuł aplikacji od zadań, które będziemy wyświetlać pod spodem, dodajmy poziomę linię:

```html
<h1>Twoje zadania</h1>

<hr>
```

Wpisz powyższy kod do pliku HTML, zapisz go (`Ctrl+S`) i odśwież okno przeglądarki. Zobaczysz, że pod tytułem pojawiła się linia. Zwróć uwagę na to, że tag `<hr>` nie ma tagu zamykającego, ponieważ... nie jest potrzebny - nie przechowuje żadnej treści, jak np. nagłówek.

## Listy HTML, ol, ul

---

No to teraz możemy stworzyć listę kilku zadań. Na razie będzie to statyczna lista, czyli taka, którą wpisaliśmy "z palca" jako kod HTML, a nie utworzyliśmy dynamicznie za pomocą JavaScript, co zrobimy już niedługo.

W HTMLu możemy tworzyć 2 rodzaje list: uporządkowane (*ordered*) za pomocą znacznika `<ol>` (*ordered list*) i nieuporządkowane (*unordered*) za pomocą tagu `<ul>` (*unordered list*).

Pomiędzy tagami `<ul>` lub `<ol>` umieszczamy elementy listy, które tworzymy w obu przypadkach za pomocą tagu `<li>` (*list element* => mówiłem, że angielski przydaje się w programowaniu 😉).

Kod nieuporządkowanej listy wygląda tak:

```html
<ul>
  <li>zrobić kawę</li>
  <li>wypić jogurt</li>
  <li>sprawdzić maila</li>
</ul>
```

Natomiast uporządkowana lista wygląda tak:

```html
<ol>
  <li>zrobić kawę</li>
  <li>wypić jogurt</li>
  <li>sprawdzić maila</li>
</ol>
```

Doklej powyższy kod do naszego pliku, by zobaczyć, jak będzie wyglądał w przeglądarce (nie zapomnij najpierw zapisać plik, a potem odświeżyć przeglądarkę).

## Przyciski button | Dodajemy przyciski do dodawania i usuwania zadań

---

W aplikacji konsolowej dodawaliśmy i usuwaliśmy zadania za pomocą poleceń JavaScript opakowanych w stworzone przez nas funkcje, które ręcznie wywoływaliśmy w konsoli. W realnym świecie i aplikacjach nikt oczywiście tak nie robi. Potrzebujemy przycisków, w które będziemy klikać, kiedy będziemy chcieli dodać lub usunąć zadanie, ale także wyczyścić listę.

W HTMLu przyciski tworzymy za pomocą tagu `<button>`. Zróbmy więc to za pomocą poniższego kodu:

```html
<h1>Twoje zadania</h1>

<hr>

<button>dodaj zadanie</button>

<ul>
  <li>zrobić kawę <button>usuń</button></li>
  <li>wypić jogurt <button>usuń</button></li>
  <li>sprawdzić maila <button>usuń</button></li>
</ul>

<button>wyczyść listę</button>
```

## Kod HTML aplikacji

---

Jak widzisz, przykład listy pokazuje, w jaki sposób umieszczamy jedne elementy w innych w HTML. Najpierw stworzyliśmy "kontener" składający się z `<ul></ul>`, a potem pomiędzy tymi tagami umieściliśmy dużo elementów.

Ostateczny dotychczasowy kod HTML naszej aplikacji wygląda w ten sposób:

```html
<h1>Twoje zadania</h1>

<hr>

<button>dodaj zadanie</button>

<ul>
  <li>zrobić kawę <button>usuń</button></li>
  <li>wypić jogurt <button>usuń</button></li>
  <li>sprawdzić maila <button>usuń</button></li>
</ul>

<button>wyczyść listę</button>
```

## Szablon pliku HTML

---

Kod naszej dotychczasowej strony działa w przeglądarce, jednak jest skrótem myślowym. Poprawniej byłoby go umieścić w poniższym kodzie w tagu `<body>`, który dostarcza przeglądarce więcej informacji: 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todo App | kodujemywbiurze.pl</title>
  </head>

  <body>
    <h1>Twoje zadania</h1>

    <hr>

    <button>dodaj zadanie</button>

    <ul>
      <li>zrobić kawę <button>usuń</button></li>
      <li>wypić jogurt <button>usuń</button></li>
      <li>sprawdzić maila <button>usuń</button></li>
    </ul>

    <button>wyczyść listę</button>
  </body>
</html>
```

Co się dzieje w powyższym kodzie? W gruncie rzeczy, na razie musisz zrozumieć tylko kilka kwestii:

- `<!DOCTYPE html>` mówi przeglądarce, że dany plik jest plikiem HTML, czyli stroną internetową;
- całość kodu w pliku HTML musi być osadzona pomiędzy tagami `<html></html>` - cokolwiek będzie poza nim, nie zadziała, ani nie zostanie wyświetlone;
- pomiędzy tagami `<head></head>` możemy umiejscowić to, co nie jest wyświetlane w przeglądarce, a jednak jest istotne dla funkcjonowania strony www:
  - tzw. metadane strony www, tj.:
    - autor,
    - tytuł (`<title>`, który przy okazji wyświetli się w zakładce przeglądarki),
    - słowa kluczowe,
    - opis,
  - ale także możemy tu podpinać różne pliki, w tym CSS i JavaScript,
  - oraz pobierać dane;
- z kolei to, co zostanie osadzone w tagu `<body>`, zostanie wyświetlone w przeglądarce, dlatego właśnie tu umieściliśmy kod reprezentujący naszą aplikację; w tagu tym możemy także podpiąć kod JavaScript, ale o tym powiemy później.

Dlaczego nasz kod zadziałał w przeglądarce, mimo że nie umieściliśmy go w tym szablonie (*HTML template*)? Dlatego że przeglądarka zrobiła to za nas!

Ale... nie znaczy to, że możemy zawsze tak postępować. Tak naprawdę... nigdy nie powinniśmy tak postępować. A zrobiłem wyjątek tylko po to, by pokazać Wam od razu najciekawsze i najbardziej praktyczne rzeczy, które działają natychmiast.

Wiem, że jesteście niecierpliwi i po każdej kolejnej lekcji zastanawiacie się nad tym, czy warto w ogóle dalej brnąć, więc próbuję wszelako Was zachęcić do dalszego kodowania, umożliwiając jak najszybsze rezultaty. Musicie to uwzględniać.

Dlatego, najbezpieczniej jest zawsze swój kod HTML umieścić w poniższym minimalistycznym szablonie w tagu `<body>` (możecie go zawsze skopiować - nie musicie tego przepisywać za każdym razem w swoich aplikacjach):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tutaj wpisz tytuł swojej strony</title>
  </head>

  <body>
    <!-- tutaj pisz swój kod HTML (przy okazji to jest komentarz w HTML) -->
  </body>
</html>
```

## Zakończenie

---

Nie będę udawać, że wygląd naszej aplikacji nie jest brzydki, ale jest tak dlatego, że jest nieostylowany - w tym celu musielibyśmy użyć języka CSS, czego na razie nie będziemy robić, bo chcemy, że aplikacja jak najszybciej zaczęła działać, a na razie po prostu wyświetla zadania, które ręcznie wpisaliśmy kodem HTML... Najwyższy czas połączyć HTML i nasz dotyhczasowy kod JavaScript!

PS. na razie poznaliśmy dokładnie tyle HTML, ile jest nam potrzebne, później najprawdopodobniej poznamy więcej, ale nie mam zamiaru robić rozbudowanego kursu HTML, dlatego wszystkich ciekawskich odsyłam do... konkurencji - innego polskiego kursu, który sam przerobiłem 3 lata temu.

Jest świetny, minimalistyczny i zawiera niezbędne podstawy. Dlatego jeśli chcesz natychmiast zanurzyć się w HTML, to przejdź do kursu <a href="https://how2html.pl/" target="_blank">how2html</a>.

My natomiast zajmiemy się integracją HTML i JavaScript, co zapewni nam zarówno funkcjonalność/ logikę aplikacji (zarządzanie zadaniami - JavaScript), jak i jej reprezentację w przeglądarce, czyli tzw. *user interface* napisany już w HTML.

Gratuluję! Możesz śmiało przejść do kolejnego kursu 👉 ***[Integrujemy HTML i JavaScript. Podstawy DOM. Pierwsza interaktywna aplikacja webowa](/kursy/html-javascript-dom)***!