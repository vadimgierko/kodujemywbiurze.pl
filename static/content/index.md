## Wprowadzenie. Co stworzymy i czego się nauczymy?

- **Pracujesz w biurze?**
- **Masz do dyspozycji komputer/ laptop, Internet i kubek kawy/ herbaty?**

A może tak spróbujesz przekonać się, czy **kodowanie może być równie dobrym wypełniaczem Twojego czasu w biurze, jak skrollowanie Fejsa czy Insta**?

*Kodujemy w biurze* powstało w ramach eksperymentu i impulsu, by **zachęcić pracowników biurowych do spróbowania swoich sił w kodowaniu** webowym w przyjazny i nie wymagający żadnych konfiguracji sposób.

Chodzi mi przede wszystkim o **pobudzenie Twojej ciekawości** i pokazanie, że **pisanie kodu jest dostępne dla każdego** i może być świetną **zabawą** (w szczególności w biurze)!

W ramach tego krótkiego kursu **stworzymy i odpalimy prostą aplikację do zarządzania listą zadań do zrobienia, która będzie działać w konsoli naszej przeglądarki** *(za chwilę dowiesz się, czym jest konsola i jak z niej korzystać)*.

Aplikacja, którą stworzymy, umożliwi nam:

- zapisywanie,
- przechowywanie,
- wyświetlanie oraz
- dodawanie

zadań do zrobienia za pomocą poleceń napisanych przez nas kodem JavaScript w konsoli.

Ponieważ zakładam, że nigdy nie napisałeś/aś żadnego kodu i nie masz pojęcia, jak to w ogóle działa, **przy okazji** tworzenia aplikacji **opanujemy wybrane podstawy języka JavaScript**! Osobiście wolę uczyć się nowych rzeczy w praktyce, widząc natychmiastowe rezultaty mojej nauki i pracy, dlatego w trakcie lektury zdobędziesz dokładnie tyle wiedzy, ile jest potrzebne, by stworzyć wspomniane funkcjonalności, i niczego ponad to.

Jak na razie, aplikacja ta będzie w pewnym sensie "tajna", czyli będzie dostępna tylko dla Ciebie w Twojej przeglądarce i tylko na tej stronie oraz... nikt inny z dostępem do Twojej przeglądarki raczej nie będzie w stanie z niej skorzystać, ponieważ na początku będziemy zarządzać naszymi zadaniami za pomocą poleceń, które sami napiszemy. Jeśli ktoś nie zna poleceń, to nie odkryje Twoich tajnych i bardzo ważnych zadań w biurze ;-)

Potem, w ramach rozbudowy niniejszej strony (co zależy od zainteresowania projektem), będziemy przekształcać i dalej rozwijać tę aplikację w aplikację z pełnego zdarzenia - z interfacem użytkownika, bazą danych, rejestracją użytkowników itd. *Sky is the limit*, aczkolwiek na razie w ramach eksperymentu ograniczymy się do funkcjonalności, które umożliwia nasza przeglądarka.

Mam nadzieję, że kiedy dobrniesz do końca tego tutoriala, to będziesz chciał/a więcej! Jeśli tak będzie, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu.

*Happy Coding!*

## Czym jest JavaScript i dlaczego warto?

<!-- <figure>
	<img
		src="/img/kodujemy-w-biurze-czym-jest-programowanie.jpg"
		width="100%"
		alt="zdjęcie laptopa z kodem na ekranie"
	/>
	<figcaption>
		źródło obrazka: <a
			href="https://pl.freepik.com/darmowe-zdjecie/koncepcja-kolazu-html-i-css-z-osoba_36295463.htm#page=2&query=computer%20code%20javascript&position=34&from_view=search&track=ais"
			target="_blank">Freepik</a
		>
	</figcaption>
</figure> -->

JavaScript jest obecnie **najbardziej popularnym językiem programowania**. Programowanie to nic innego, jak pisanie poleceń w języku programowania zrozumiałym dla komputera/ urządzenia/ programu/ przeglądarki, które określają, co urządzenie/ program ma wyświetlić, jak to wyświetlić, jak ma reagować na działania użytkownika, skąd ma pobrać dane lub gdzie je zapisać itd.

JavaScript w połączeniu z dwoma innymi językami - HTML i CSS - służy do tworzenia stron i aplikacji webowych (czyli aplikacji, które działają w przeglądarce):

- **HTML pozwala stworzyć strukturę strony www** (tutaj jest nagłówek, tam lista, w innym miejscu zdjęcie itd.),
- **CSS pozwala nadać stronom i aplikacjom ładnego wyglądu** (nagłówek jest wyśrodkowany, wyróżnione słowa mają inny kolor, a tło ma być ciemnoszarego koloru), natomiast
- **JavaScript dodaje szczyptę magii**:
  - reaguje na działania użytkownika, tj.: kliknięcia w przycisk, współdziała z bazą danych, pobierając i wysyłając dane,
	- może nawet dynamicznie zmieniać istniejący kod HTML i CSS (np. zmieniać kolor jakiegoś elementu, dodawać nowe elementy, które wcześniej nie istniały itd.) oraz 
	- mnóstwo innych rzeczy - możliwości są nieograniczone!

To właśnie dzięki JavaScript strony i aplikacje są dynamiczne i interaktywne - jest on silnikiem napędzającym stronę.

## Zaczynamy pisać kod! Czym jest konsola, jak jej używać i co to jest *Hello, World!*?

Niniejsza strona, jak większość innych w Internecie, używa JavaScript. Każda przeglądarka również rozumie i przetwarza kod JavaScript, a ponadto umożliwia nam pisanie kodu bezpośrednio w przeglądarce, a dokładniej w konsoli. Konsola jest jednym z wielu wbudowanych narzędzi każdej przeglądarki. Przekonajmy się o tym i otwórzmy konsolę przeglądarki!

Używam przeglądarki *Google Chrome* i żeby w niej otworzyć konsolę, należy w prawym górnym rogu przeglądarki kliknąć ikonkę menu (3 kropki ustawione w pionie), wybrać opcję *Więcej narzędzi*, a potem wybrać opcję *Narzędzia dla developerów*. Możesz też po prostu użyć skrótu klawiszowego `Ctrl+Shift+I`. Polecam korzystać z przeglądarki *Google Chrome*, którą można pobrać i zainstalować nie mając nawet uprawnień administratora na swoim komputerze ;-)

Jeśli z kolei używasz *Mozilli*, to w prawym górnym rogu kliknij ikonkę menu (tzw. hamburger, czyli 3 poziome linie), potem wybierz opcję *Dla twórców stron*, potem kliknij w *Konsola WWW*. Możesz także użyć skrótu klawiszowego `Ctrl+Shift+I` lub `Ctrl+Shift+K`.

Ok, więc teraz powinieneś/ powinnaś zobaczyć nowe dodatkowe okienko w Twojej przeglądarce - witaj w konsoli! Wpisz teraz następujące polecenie w konsoli i kliknij Enter:

```
console.log("Hello, World!")
```

Jeśli wszystko wpisałeś/aś poprawnie, konsola wyświetliła napis *Hello, World!* w następnej linijce. Gratuluję, właśnie wywołałeś/aś swoje pierwsze polecenie napisane w języku JavaScript!

`console.log()` jest wbudowanym poleceniem *(jednym z wielu, a z niektórych z nich będziemy korzystać później w tym tutorialu)*, które wyświetla dowolną zawartość umieszczoną w nawiasach (w naszym poprzednim przykładzie był nią ciąg tekstowy "Hello, World!"). Tak jak prawdziwi programiści, będziemy często korzystać z tego polecenia.

A gdybyście byli ciekawi, jakich jeszcze ciekawych poleceń możemy użyć w konsoli, to spróbujcie wpisać następujący kod i kliknąć Enter:

```
alert("Hej, jestem wyskakującym okienkiem, które czasami denerwuje użytkowników ;-)")
```

*PS. zdradzę Ci tajemnicę: programiści bardzo często używają polecenia `console.log()` w swoim kodzie, by sprawdzić, co się dzieje z niektórymi zmiennymi w trakcie działania programu. Dzięki temu można sprawdzić, czy nasz kod działa poprawnie lub też odkryć, że zawiera błąd. Ten chwyt odnosi się do szerszego pojęcia w programowaniu, które się nazywa "debugowanie", czyli wyszukiwanie i naprawianie błędów.*

Dlaczego akurat użyłem określenia *Hello, World!*? Jest to taka niepisana tradycja wśród programistów - tego określenia używamy np. kiedy testujemy nowe narzędzia, języki itd.

Ok, więc wiemy już, czym jest konsola, jak ją otworzyć, a nawet wpisaliśmy i uruchomiliśmy nasze pierwsze polecenie. Jak już wspomniałem wcześniej, konsola umożliwia nam m. in. pisanie i uruchamianie kodu JavaScript, chociaż nie jest to jej główny cel - każdy edytor kodu jest zdecydowanie lepszym narzędziem do pisania kodu. Natomiast na razie nie chcemy żadnego edytora kodu. Chcemy po prostu napisać kilka linijek kodu i zobaczyć, jak to działa oraz *złapać bakcyla*. Jedziemy!

## Stwórzmy pierwsze zadanie w naszej aplikacji | Zmienne, wartości i słowo kluczowe `let`

Jeśli mamy jakieś ważne zadanie do zrobienia, to najprawdopodobniej zapiszemy go na jakiejś kartce i umieścimy w widocznym miejscu. Podobnie działa to w programowaniu.

Jeśli chcemy przechowywać nasze zadania (lub cokolwiek innego) w kodzie, musimy stworzyć dla nich dedykowane miejsce (odpowiednik naszej kartki). Na razie nasza konsola (czyli de facto nasz prosty program) nie przechowuje niczego.

Ale zanim przechowamy wiele zadań, spróbujmy najpierw stworzyć 1 zadanie (to jest typowe podejście dla programisty - rozbijamy problem na mniejsze problemy). Żeby to zrobić, należy stworzyć zmienną i przypisać do niej pewne wartości. Co to znaczy?

Zanim wytłumaczę, czym jest zmienna i wartości:

- spójrz na poniższy kod,
- przepisz go do konsoli (nie kopiuj tego kodu, tylko wpisz go własnoręcznie - to sprawi, że bardziej się oswoisz z pisaniem kodu i jego składnią),
- kliknij Enter,
- spróbuj intuicyjnie zrozumieć, co się w nim dzieje:

```
let task = "zrobić kawę"
console.log(task)
```

W powyższym kodzie utworzyliśmy/ zadeklarowaliśmy za pomocą słowa kluczowego `let` nową zmienną o nazwie `task` (z ang. *zadanie*) i przypisaliśmy do niej wartość `zrobić kawę`. Zmienna to nic innego, jak swego rodzaju podpisane pudełko, które w środku może coś zawierać. Sama nazwa zmiennej nie ulega zmianie - nie możemy jej zmienić. Możemy natomiast zmienić wartość, przypisaną do tej zmiennej.

Mamy więc pudełko o nazwie `task`, które w środku może przechowywać jakiekolwiek zadanie - w naszym przypadku jest to `zrobić kawę` (zdecydowanie najważniejsza i podstawowa rzecz do zrobienia podczas pracy w biurze, najlepiej kilkakrotnie w ciągu dnia), ale równie dobrze mogłoby to być *sprawdzić maila* lub *zajrzeć na stronę kodujemywbiurze.pl*.

Nasz program wie już o istnieniu zmiennej `task` i będzie o niej pamiętał. W każdej chwili możemy się do niej odwołać na kilka sposobów, np. poprzez wywołanie `console.log(task)`.

Możemy też wpisać w nowej linijce konsoli po prostu samą nazwę zmiennej `task`, a konsola wyświetli Ci już w trakcie samego pisania nazwy zmiennej, jaką wartość w danej chwili przechowuje (spróbuj to zrobić).

Możesz też napisać `task`, a potem kliknąć Enter. W tej sytuacji konsola zwróci Ci wartość tej zmiennej w następnej linijce.

## Zmieńmy nasze zadanie | Nadpisywanie wartości zmiennych

Ok, zrobiliśmy kawę, więc zadanie zostało odhaczone i teraz chcemy go zmienić na kolejne zadanie. Możemy więc nadpisać (zmienić, zaktualizować) wartość naszego `task`'a w następujący sposób:

```
task = "sprawdzić maila"
```

Zwróć uwagę na to, że tym razem nie użyliśmy słowa kluczowego `let`, ponieważ używamy go tylko raz, kiedy tworzymy nową zmienną, żeby powiedzieć programowi, że *oto jest nowa zmienna, będę w niej coś przechowywał/a, nie zapomnij o tym oraz daj mi do niej dostęp za każdym razem, kiedy będę tego potrzebował/a*. Później posługujemy się już tylko samą nazwą zmiennej.

W powyższym kodzie przypisaliśmy do naszej zmiennej nową wartość, w związku z czym nasz program zapamięta i wyświetli nową wartość, jeśli wpiszemy nazwę zmiennej w konsoli (spróbuj to zrobić).

Możemy tak przypisywać nowe wartości do tej samej zmiennej mnóstwo razy, a po poprzednich nie pozostanie ani śladu, czego należy być świadomym.

## Dobre praktyki w nazewnictwie zmiennych

Dobrą praktyką jest nazywanie zmiennych w taki sposób, aby nazwy te niewątpliwie odzwierciedlały charakter wartości tych zmiennych. Każdy, kto rozumie znaczenie słowa *task*, będzie się spodziewał, że jest to jakieś zadanie, a nie na przykład numer telefonu. Gdybyśmy chcieli przechować numer telefonu w zmiennej, nazwalibyśmy ją `phoneNumber`:

```
let phoneNumber = "666-999-666"
```

Pewnie zastanawiasz się, dlaczego, po pierwsze, nazywam zmienne po angielsku, a po drugie, dlaczego nazwa zmiennej `phoneNumber` wygląda tak dziwnie?

Jeśli chodzi o nazewnictwo w języku angielskim, to jest to oczywista powszechna i globalna praktyka - język angielski jest głównym językiem programowania. Nic oczywiście nie stoi na przeszkodzie, by nazwać zmienną `numerTelefonu`, natomiast programiści z innych krajów, nie znający języka polskiego, nie byliby w stanie zrozumieć, co to znaczy, a w zespołach międzynarodowych komunikacja to podstawa, zarówno pomiędzy programistami, jak i ich klientami. W związku z tym, musisz używać języka angielskiego w swoim kodzie i kropka.

A to, że nasze zadania, które przechowujemy w kodzie, są zapisane w języku polskim, jest jak najbardziej w porządku, ponieważ to są wartości zmiennych, one mogą ulec zmianie, dowolny użytkownik naszej aplikacji na świecie może używać swojego języka. Każdy programista będzie wiedział, że `task` to `task`, niezależnie od tego, w jakim języku zapisana jest jego wartość.

Z kolei sposób łączenia słów w jedną całość w kodzie w ten sposób: `phoneNumber` nazywa się `camelCase`. Taki sposób zapisu rozwiązuje jeden problem: nazwa zmiennej musi być ciągiem znaków, nie mogą to być dwa oddzielone od siebie wyrazy. Możemy też zapisać nazwę zmiennej na kilka innych sposobów (które są właściwe w niektórych sytuacjach): `phone_number` lub `phone-number`, najczęściej jednak w JavaScripcie używamy pisowni `camelCase`.

## Tworzymy listę zadań | Tablica, metoda `push()`, indeksy i modyfikacja elementów w tablicy

Ok, więc potrafimy już utworzyć nową zmienną, by przechować jej wartość w naszym kodzie, potrafimy też tę wartość zmodyfikować/ nadpisać. Natomiast posiadanie tylko jednej zmiennej `task`, którą będziemy ciągle modyfikować, jest bardzo niepraktyczne i nie do tego dążymy. Chcemy utworzyć listę zadań (masz przecież dużo zadań do zrobienia w biurze, także związanych bezpośrednio z pracą ;-), do której będziemy mogli dodawać zadania, usuwać je, lub też wyświetlić listę zadań w całości!

Stwórzmy zatem najpierw pustą listę zadań, którą przypiszemy do nowej zmiennej:

```
let tasks = []
```

Zauważ, że tym razem wartością zmiennej nie jest ciąg znaków (czyli słowa, zdania, znaki zawarte pomiędzy cudzysłowami, jak w np.: "zrobić kawę"), tylko dwa nawiasy kwadratowe `[]`. Jest to `tablica` (po angielsku `array`), która jest niczym innym, jak kontenerem/ listą różnych elementów, które znajdą się w środku.

Na razie nasza tablica/ lista `tasks` jest pusta (pomiędzy kwadratowymi nawiasami nie ma żadnych elementów). Gdybyśmy chcieli dodać do niej manualnie (ręcznie wpisując) nasze zadania, to moglibyśmy to zrobić np. na kilka sposobów:

1. Ręcznie wpisujemy każde zadanie jako ciąg znaków zawarty w cudzysłowie i oddzielone przecinkiem:

```
tasks = [ "zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]
```

2. Używamy wbudowanej metody `push()`, która dodaje zadania wpisane między nawiasami do istniejących już wcześniej zadań w tablicy:

```
tasks.push("zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl")
```

Czym się różnią te dwa sposoby?

Pierwszy sposób jest oczywisty: po prostu wpisujemy zadania po przecinku i przypisujemy całą listę z zadaniami do zmiennej `tasks`. Aczkolwiek, jest do dość niebezpieczny sposób na dodawanie wartości do listy... Dlaczego? Na przykład dlatego, że załóżmy nasz kod w konsoli ma mnóstwo linijek, a wielokrotnie dodawaliśmy jakieś zadania do naszej listy, o czym już zapomnieliśmy. Były to ważne zadania, jak np.: `porozmawiać z koleżanką z biura o jej wczorajszej randce` lub `zarejestrować fakturę, która wpłynęła do biura już dwa dni temu`. A teraz, jeśli napiszemy taki kod: `tasks = [ "zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]`, to wszystkie wcześniejsze zadania zostaną nadpisane przez te nowo dodane, w związku z czym je utracimy!

Dlatego to drugie rozwiązanie jest bardziej bezpieczne i czytelne w niektórych przypadkach. Kiedy używamy metody `push()` w ten sposób: `tasks.push("zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl")`, to zadania zostają dodane do wcześniej istniejących zadań - nie nadpisujemy całej zmiennej, a jedynie "wciskamy" nowe elementy na koniec listy.

Są też inne, bardziej nowoczesne sposoby dodania elementów do tablicy, ale nam na razie wystarczy tyle. Spróbujmy teraz sprawdzić w konsoli, jakie wartości przechowuje zmienna `tasks` - albo tak jak to robiliśmy wcześniej (po prostu wpisując nazwę zmiennej w konsoli), albo też poprzez wpisanie następującego kodu `console.log(tasks)` i klikając Enter.

W obydwu przypadkach w konsoli wyświetliło się coś takiego: `(3) ['zrobić kawę', 'sprawdzić maila', 'zajrzeć na stronę kodujemywbiurze.pl']`. Liczba w nawiasach wskazuje liczbę elementów w tablicy. Jeśli z kolei klikniesz w ikonkę trójkąta, która poprzedza liczbę elementów, to nasza lista rozwinie się w konsoli i będzie bardziej czytelna. Spróbuj rozwinąć listę!

Jak rozwinąłeś/aś listę, to zauważ, że obok naszych zadań po lewej stronie pojawiły się cyfry 0, 1, 2. Te liczby to indeksy. Indeks oznacza numer pozycji elementu w tablicy. Zauważ, że indeksy zaczynają się nie od 1., tylko od 0! Dzięki indeksom możemy mieć dostęp do wybranych elementów z listy, np. jeśli chcemy wyświetlić/ zwrócić pierwszy element z listy `tasks`, to musimy napisać następujący kod w konsoli: `tasks[0]`, drugi element: `tasks[1]` itd.

Dzięki indeksom możemy też mieć dostęp do poszczególnych elementów listy i modyfikować je, nadpisując ich wartość:

```
tasks[0] = "zrobić kawę z mlekiem";
```

Teraz, kiedy ponownie sprawdzimy wartość `tasks[0]` w konsoli, to wyświetli nam się `zrobić kawę z mlekiem`, a nie `zrobić kawę`.

Świetnie! Potrafimy tworzyć listę zadań, uzyskiwać dostęp do poszczególnych elementów z listy i modyfikować je oraz dodawać nowe elementy do listy/ tablicy. Teraz nadszedł czas na pisanie reużywalnego kodu, który będzie wykonywał pewne powtarzalne zadania - dodawanie nowych zadań!

## Wstęp do funkcji | Wyświetlamy listę zadań (znowu)

Każdorazowe dodawanie zadań do listy zadań poprzez użycie kodu, z którego wcześniej korzystaliśmy (`tasks.push("nowe zadanie")`), działa, ale programiści "opakowują" kod, z którego często korzystamy (a będziemy często dodawać zadania do listy), w reużywalne "kawałki" kodu, które nazywają się funkcjami.

Funkcja to zakmnięty w sobie fragment kodu, który wykonuje pewne zadania/ polecenia w nim zdefiniowane za każdym razem, kiedy go wywołamy.

Tak naprawdę, już korzystaliśmy z wbudowanych funkcji, tj. `console.log()` lub `tasks.push()`. Zauważ, że w odróżnieniu od zmiennych, funkcja zawiera nawiasy na końcu.

Spróbujmy zatem stworzyć naszą pierwszą funkcję, by zrozumieć, o co w tym chodzi. Stworzymy funkcję, która będzie wyświetlała nam listę wszystkich naszych zadań.

Owszem, wcześniej już wyświetlaliśmy nasze zadania poprzez wpisanie w konsoli zmiennej `tasks` lub poprzez wywołanie funkcji `console.log(tasks)`, ale teraz zrobimy to w sposób bardziej ucywilizowany:

```
function showTasks() {
  console.log(tasks)
}
```

***Uwaga!*** Żeby napisać kilkulinijkowy kod w konsoli, musisz zamiast Enter używać kombinacji klawiszy Shift+Enter, żeby przejść do następnej linii, ponieważ wciśnięcie klawisza Enter spowoduje wywołanie tego kodu, który już napisałeś/aś, co najprawdopodobniej wywoła błąd w konsoli, ponieważ kod nie jest ukończony. Jeśli to się zdarzy, odśwież stronę, co wyczyści pamięć konsoli i wpis kod jeszcze raz, ale pamiętaj, że lista zadań `let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]` również zniknęła, więc najpierw musisz ją ponownie wpisać, zanim napiszesz powyższą funkcję.

W powyższym kodzie używając słowa kluczowego `function` zdefiniowaliśmy nową funckję o nazwie `showTasks`, która... (jak sama nazwa wskazuje) wyświetla listę naszych zadań. 

Jak widzisz, polecenie `console.log(tasks)`, którego wcześniej używaliśmy osobno, zostało "opakowane" w funkcję, której nazwa ewidentnie wskazuje na to, czego możemy się od niej spodziewać, w związku z czym ktoś, kto nie widział całości naszego kodu, ani nie wie, co jest w środku tej funkcji, raczej się domyśli, co ta funkcja robi i sam będzie mógł jej użyć.

Ponadto, jeśli wrócisz do swojego kodu za kilka dni lub tygodni, to mimo, że nie będziesz pamiętał/a, co znajduje się w środku funkcji `showTasks()`, to zdecydowanie zrozumiesz, co ona robi. Uwierz mi, że programiści o wiele częściej dosłownie czytają kod, niż go piszą, dlatego trafne nazwy zarówno zmiennych, jak i funkcji, niezwykle ułatwiają jego zrozumienie, mimo że nie zna się/ nie pamięta się szczegółów.

Żeby nasza funkcja zadziałała i wyświetliła nasze zadania, musimy ją wywołać poprzez wpisanie w konsoli `showTasks()` i kliknąć Enter. Dzięki temu, nie musimy pamiętać, jak wyświetlić nasze zadania w konsoli, wystarczy wywołać funkcję `showTasks()`.

Na pierwszy rzut oka może się wydawać, że wykonaliśmy zbędną pracę - definicja funkcji zajęła nam 3 linijki kodu! Ale, po pierwsze, uczyniła nasz kod bardziej zrozumiałym i reużywalnym, a po drugie, większość funkcji będzie bardziej rozbudowana, będą tam miały miejsce różne procesy, być może będą tam w środku też inne funkcje i tymczasowe zmienne, więc w tym przypadku oszczędność czasu będzie ogromna. Poza tym, musieliśmy tylko raz się zastanowić nad tym, jak wyświetlić nasze zadania, tworząc funkcję i nie będziemy musieli znowu się nad tym zastanawiać, co miałoby miejsce, gdybyśmy każdorazowo pisali `console.log(tasks)`.

Warto też zwrócić uwagę na samą konstrukcję funkcji:

- zaczyna się ona od słowa kluczowego `function`,
- potem po spacji jest jej nazwa (która jeśli zawiera zlepek słów, to powinna być napisana `camelCasem`),
- potem bez spacji po nazwie dodajemy nawiasy `()` (później dowiemy się, do czego służą),
- a potem mamy dwie klamry `{ }`, pomiędzy którymi możemy pisać wiele linijek kodu - to, co znajduje się pomiędzy klamrami, nazywa się ciałem funkcji.

Moglibyśmy powyższą funkcję zapisać także w jednej linijce (ponieważ jest mała):

```
function showTasks() { console.log(tasks) }
```

aczkolwiek taki zapis nie jest czytelny, dlatego lepiej używać wielolinijkowego formatu.

Ogólnie funkcje możemy zadeklarować też na kilka innych sposobów, ale na razie wystarczy nam ten jeden.

Zanim stworzymy kolejne funkcje, chciałbym zwrócić Twoją uwagę na nazewnictwo funkcji. Pamiętasz, że nazwa zmiennej powinna odzwierciedlać to, jaką wartość przechowuje? Z funkcjami jest podobnie, tyle że funkcje nie reprezentują jakieś wartości, tylko czynności - funkcja coś "robi". W związku z tym, jeśli funkcja powinna wyświetlić zadania, to należy ją nazwać `showTasks` lub `displayTasks`, albo też `logTasks`. Te nazwy brzmią jak komendy: "pokaż/ wyświetl zadania!" i tak właśnie jest z funkcjami - są one poleceniami dla komputera/ przeglądarki.

## Funkcja dodająca zadanie | Argumenty funkcji

Wcześniej dodawaliśmy nasze zadania używając tego kodu: `tasks.push("jakieś tam zadanie")`. Zwróć uwagę na to, że `"jakieś tam zadanie"` znajduje się w nawiasach funkcji, w związku z tym `"jakieś tam zadanie"` zostało przekazane funkcji `push()` jako argument, który zostanie przez tę funkcję wykorzystany.

Nasza funkcja `showTasks()` nie ma żadnych argumentów w nawiasach, ponieważ ich nie potrzebuje - ma dostęp do zadań, ponieważ zmienna `tasks` istnieje w naszym kodzie i zawsze mamy do niej dostęp (innymi słowy, jest zmienną globalną). Czyli już wiemy, że funkcja może w ogóle nie mieć żadnych argumentów.

Wyobraźmy natomiast, że chcemy dodać nowe zadanie, które nie istnieje nigdzie w kodzie w postaci zmiennej, wiemy także, że dysponujemy funkcją o nazwie `addTask()` (za chwilę ją napiszemy, ale na razie wyobraźmy, że ktoś już ją napisał). Jak możemy to zrobić?

W tym przypadku należałoby tej funkcji przekazać pewną informację (w naszym przypadku będzie to nowe zadanie), czego możemy dokonać poprzez wpisanie naszego zadania w nawiasach tej funkcji w następujący sposób: `addTask("zrobić kawę po raz drugi")`.

Chciałbym też zauważyć, że taki kod zadziała tylko w tym przypadku, jeśli funkcja `addTask()` oczekuje jakiegoś argumentu, czyli że funkcja ta została napisana w pewien określony sposób, który zaraz zobaczymy:

```
function addTask(newTask) {
  tasks.push(newTask)
}
```

Zwróć uwagę, że po nazwie funkcji `addTask` w nawiasach mamy zawarty argument `newTask`. Tak naprawdę `newTask` jest zmienną, która jeszcze nie ma żadnej przypisanej wartości, czyli jest to "puste podpisane pudełko", do którego dopiero później coś włożymy (w momencie wywołania funkcji w ten sposób: `addtask("to zadanie jest właśnie tą wartością, która zostanie przypisana do argumentu newTask")`).

Mimo że w samej definicji funkcji `addTask` argument `newTask` nie ma żadnej wartości, to możemy go wykorzystać w kodzie funkcji tak, jakby tę wartość miał (co też robimy w dalszej części kodu funkcji: `tasks.push(newTask)` - tak naprawdę mówimy przeglądarce, że cokolwiek by się znalazło z zmiennej `newTask`, powinno zostać dodane do `tasks`).

Innymi słowy, wyobraź sobie, że mówisz koleżance z biura: *"Na biurku leży żółty segregator, który na razie jest pusty, ale później przyjdzie sekretarka i włoży do tego segregatora stertę dokumentów. Wtedy weź segregator i włóż go do szafy"*. Koleżanka nie musi wiedzieć, jakie dokumenty znajdą się w segregatorze. Wie tylko, że jak się tam znajdą, trzeba odłożyć segregator. Gdyby wspomniana koleżanka bardzo się nudziła, mogłaby wziąć pusty segregator i włożyć go do szafy, mimo że nie ma w nim żadnych dokumentów, by przećwiczyć tę czynność na przyszłość.

Wpisz więc do konsoli powyższy kod, by zdefiniować funkcję `addTask` i móc jej użyć w dalszej części naszej aplikacji.

Teraz możemy dodawać zadania poprzez wywołanie funkcji `addTask` z argumentami (poćwicz to w konsoli):

```
addTask("sprawdzić Facebooka")
addTask("wyskoczyć do sklepu po jogurt")
addTask("położyć jogurt na grzejniku, by się zacieplił")
```

Jeśli wszystko poszło zgodnie z planem, to teraz po wywołaniu funkcji `showTasks()`, powinniśmy zobaczyć w konsoli naprawdę wiele zadań - ileż to my mamy do zrobienia dzisiaj w biurze!

## Sukces! | Kod aplikacji w całości

Gratuluję! Właśnie stworzyłeś/aś aplikację w języku JavaScript, która działa w konsoli Twojej przeglądarki, może przechowywać listę Twoich zadań do zrobienia oraz umożliwia dodawanie zadań do tej listy! Przy okazji poznałeś/aś pewne podstawowe pojęcia jeżyka JavaScript:

- zmienna i wartość
- tablica
- funkcja

Poniżej znajduje się cały kod naszej aplikacji, który możemy skopiować i wkleić do konsoli, dzięki czemu aplikacja będzie działać *(kodu jest o wiele mniej, niż dotychczas napisaliśmy, ponieważ znajdują się w nim jedynie niezbędne funkcjonalności - taki starter, którego będziemy używać, by przechowywać, dodawać i wyświetlać zadania)*:

```
let tasks = []

function showTasks() {
  console.log(tasks)
}

function addTask(newTask) {
  tasks.push(newTask)
}

// teraz możesz wywoływać funckję addTask(), by dodawać zadania
// (pamiętaj, by wpisać zadanie jako argument funkcji w nawiasach!)
// oraz funkcję showTasks, by sprawdzić zapisane zadania.
```

Spróbuj teraz opowiedzieć swoimi słowami koleżance/koledze z biura, co robi/ co się dzieje w każdej z linijek powyśzego kodu.

Gratuluję jeszcze raz!

Właśnie dobrnąłeś/aś do końca tego krótkiego tutoriala. Spodobało się? Chcesz więcej? Jeśli tak, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu *(zakładam, że będziemy dalej rozwijać naszą aplikację do zadań, dodając coraz to nowsze funkcjonalności oraz poznając również podstawy HTML i CSS, by wyjść poza konsolę i stworzyć stronę/ aplikację internetową z prawdziwego zdarzenia)*.

## Darmowe źródła do samodzielnej nauki

Poniżej znajdziesz listę sprawdzonych źródeł do samodzielnej nauki *JavaScript* i nie tylko.

Niestety, większość nie jest dostępna (przetłumaczona) w języku polskim, aczkolwiek zachęcam do nauki w języku angielskim, nawet jeśli Twój angielski nie jest na najwyższym poziomie, ponieważ tutoriale są zwykle pisane bardzo postym językiem:

- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
- https://javascript.info/
- https://www.geeksforgeeks.org/javascript/
- https://www.codecademy.com/resources/docs/javascript
- https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/