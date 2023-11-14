## Wprowadzenie. Co stworzymy i czego się nauczymy?

- **Pracujesz w biurze?**
- **Masz do dyspozycji komputer/ laptop, Internet i kubek kawy/ herbaty?**
- A może tak spróbujesz przekonać się, czy **kodowanie może być równie dobrym wypełniaczem Twojego czasu w biurze, jak skrollowanie Fejsa czy Insta**?

*Kodujemy w biurze* powstało, by **zachęcić pracowników biurowych do spróbowania swoich sił w kodowaniu** webowym w przyjazny i nie wymagający żadnych konfiguracji sposób.

Chodzi mi przede wszystkim o **pobudzenie Twojej ciekawości** i pokazanie, że **pisanie kodu jest dostępne dla każdego** i może być świetną **zabawą** (w szczególności w biurze)!

W ramach tego krótkiego kursu **stworzymy i odpalimy prostą aplikację do zarządzania listą zadań do zrobienia, która będzie działać w konsoli naszej przeglądarki** *(za chwilę dowiesz się, czym jest konsola i jak z niej korzystać)*.

Aplikacja, którą stworzymy, umożliwi nam:

- zapisywanie,
- przechowywanie,
- wyświetlanie oraz
- dodawanie

zadań do zrobienia za pomocą poleceń napisanych przez nas kodem JavaScript w konsoli.

Ponieważ zakładam, że nigdy nie napisałeś/aś żadnego kodu i nie masz pojęcia, jak to w ogóle działa, **przy okazji** tworzenia aplikacji **opanujemy wybrane podstawy języka JavaScript**!

Osobiście wolę **uczyć się nowych rzeczy w praktyce, widząc natychmiastowe rezultaty** mojej nauki i pracy, dlatego w trakcie lektury zdobędziesz **dokładnie tyle wiedzy, ile jest potrzebne, by stworzyć wspomniane funkcjonalności**, i niczego ponad to.

Jak na razie, aplikacja ta będzie w pewnym sensie "tajna", czyli będzie dostępna tylko dla Ciebie w Twojej przeglądarce i tylko na tej stronie oraz... nikt inny z dostępem do Twojej przeglądarki raczej nie będzie w stanie z niej skorzystać, ponieważ na początku będziemy zarządzać naszymi zadaniami za pomocą poleceń, które sami napiszemy. Jeśli ktoś nie zna tych poleceń, to nie odkryje Twoich tajnych i bardzo ważnych zadań w biurze ;-)

Potem, w ramach rozbudowy niniejszej strony (co zależy od Waszego zainteresowania projektem), będziemy przekształcać i dalej rozwijać tę aplikację w aplikację z pełnego zdarzenia - z interfacem użytkownika, bazą danych, rejestracją użytkowników itd. *Sky is the limit*, aczkolwiek na razie w ramach eksperymentu ograniczymy się do funkcjonalności, którymi dysponuje nasza przeglądarka.

Mam nadzieję, że kiedy dobrniesz do końca tego tutoriala, to będziesz chciał/a więcej! Jeśli tak będzie, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu.

*Happy Coding!*

## Czym jest JavaScript i dlaczego warto się go uczyć?

JavaScript jest obecnie **najbardziej popularnym językiem programowania**. Programowanie to nic innego, jak pisanie poleceń w języku programowania zrozumiałym dla komputera/ urządzenia/ programu/ przeglądarki, które określają, co urządzenie/ program ma wyświetlić, jak to wyświetlić, jak ma reagować na działania użytkownika, skąd ma pobrać dane lub gdzie je zapisać itd.

JavaScript w połączeniu z dwoma innymi językami - HTML i CSS - służy do tworzenia stron i aplikacji webowych (czyli takich, które działają w przeglądarce):

- **HTML pozwala stworzyć strukturę strony www** (określa, gdzie w hierarchii jest nagłówek, lista, zdjęcie itd.),
- **CSS pozwala nadać stronom i aplikacjom ładnego wyglądu** (np.: nagłówek jest wyśrodkowany, wyróżnione słowa mają inny kolor, a tło jest ciemnoszarego koloru), natomiast
- **JavaScript dodaje szczyptę magii**, np.:
  - reaguje na działania użytkownika, tj.: kliknięcia w przycisk,
	- współdziała z bazą danych, pobierając i wysyłając dane,
	- dynamicznie zmienia istniejący kod HTML i CSS (np. zmienia kolor jakiegoś elementu, dodawaje nowe elementy).

Możliwości są nieograniczone!

To właśnie dzięki JavaScript strony i aplikacje są dynamiczne i interaktywne - jest on silnikiem napędzającym stronę.

## Zaczynamy pisać kod! Czym jest konsola, jak jej używać i co to jest *Hello, World!*?

Niniejsza strona, jak większość innych w Internecie, używa JavaScript. Każda **przeglądarka** również **rozumie i przetwarza kod JavaScript**, a ponadto umożliwia nam pisanie kodu bezpośrednio w przeglądarce, a dokładniej w konsoli. Konsola jest jednym z wielu wbudowanych narzędzi każdej przeglądarki. Przekonajmy się o tym i otwórzmy konsolę przeglądarki!

Używam przeglądarki *Google Chrome* i żeby w niej otworzyć konsolę, należy w prawym górnym rogu przeglądarki kliknąć ikonkę menu (3 kropki ustawione w pionie), wybrać opcję *Więcej narzędzi*, a potem wybrać opcję *Narzędzia dla developerów*. Możesz też po prostu użyć skrótu klawiszowego `Ctrl+Shift+I`. Polecam korzystać z przeglądarki *Google Chrome*, którą można pobrać i zainstalować nie mając nawet uprawnień administratora na swoim komputerze ;-)

Jeśli z kolei używasz *Mozilli*, to w prawym górnym rogu kliknij ikonkę menu (tzw. hamburger, czyli 3 poziome linie), potem wybierz opcję *Dla twórców stron*, potem kliknij w *Konsola WWW*. Możesz także użyć skrótu klawiszowego `Ctrl+Shift+I` lub `Ctrl+Shift+K`.

Ok, więc teraz powinieneś/ powinnaś zobaczyć nowe dodatkowe okienko w Twojej przeglądarce - witaj w konsoli! Wpisz teraz następujące polecenie w konsoli i kliknij Enter:

```
console.log("Hello, World!")
```

Jeśli wszystko wpisałeś/aś poprawnie, konsola wyświetliła napis *Hello, World!* w następnej linijce. Gratuluję, właśnie wywołałeś/aś swoje pierwsze polecenie napisane w języku JavaScript!

`console.log()` jest wbudowanym poleceniem *(jednym z wielu - z niektórych z nich będziemy korzystać później w tym tutorialu)*, które wyświetla dowolną zawartość umieszczoną w nawiasach (w naszym poprzednim przykładzie był nią ciąg tekstowy "Hello, World!"). Tak jak prawdziwi programiści, będziemy często korzystać z tego polecenia.

A gdybyście byli ciekawi, jakich jeszcze ciekawych poleceń możemy użyć w konsoli, to spróbujcie wpisać następujący kod i kliknąć Enter:

```
alert("Hej, jestem wyskakującym okienkiem, które czasami denerwuje użytkowników ;-)")
```

*PS. zdradzę Ci tajemnicę: programiści bardzo często używają polecenia `console.log()` w swoim kodzie, by sprawdzić, co się dzieje z niektórymi zmiennymi w trakcie działania programu. Dzięki temu można sprawdzić, czy nasz kod działa poprawnie lub też odkryć, że zawiera błąd. Ten chwyt odnosi się do szerszego pojęcia w programowaniu - "debugowania", czyli wyszukiwania i naprawiania błędów.*

Dlaczego akurat użyłem określenia *Hello, World!*? Jest to taka niepisana tradycja wśród programistów - tego określenia używamy np. kiedy testujemy nowe narzędzia, języki itd.

Ok, więc wiemy już, czym jest konsola, jak ją otworzyć, a nawet wpisaliśmy i uruchomiliśmy nasze pierwsze polecenie. Jak już wspomniałem wcześniej, konsola umożliwia nam m. in. pisanie i uruchamianie kodu JavaScript, chociaż nie jest to jej główny cel - każdy edytor kodu jest zdecydowanie lepszym narzędziem do pisania kodu. Natomiast na razie nie chcemy żadnego edytora kodu. Chcemy po prostu napisać kilka linijek kodu i zobaczyć, jak to działa oraz *złapać bakcyla*.

## Stwórzmy pierwsze zadanie w naszej aplikacji | Zmienne, wartości i słowo kluczowe `let`

Jeśli mamy jakieś ważne zadanie do zrobienia, to najprawdopodobniej zapiszemy go na jakiejś kartce i umieścimy w widocznym miejscu. Podobnie działa to w programowaniu.

Jeśli chcemy przechowywać nasze zadania (lub cokolwiek innego) w kodzie, musimy stworzyć dla nich dedykowane miejsce (odpowiednik naszej kartki). Na razie nasza konsola (czyli de facto nasz prosty program) nie przechowuje niczego.

Zanim przechowamy wiele zadań, spróbujmy najpierw stworzyć 1 zadanie *(jest typowe podejście dla programisty - rozbijamy problem na mniejsze problemy)*. Żeby to zrobić, należy **stworzyć zmienną i przypisać do niej pewne wartości**. Co to znaczy?

Zanim wytłumaczę, czym jest zmienna i wartości:

- spójrz na poniższy kod,
- przepisz go do konsoli (nie kopiuj tego kodu, tylko wpisz go własnoręcznie - to sprawi, że bardziej się oswoisz z pisaniem kodu i jego składnią),
- kliknij Enter,
- spróbuj najpierw intuicyjnie zrozumieć, co się w nim dzieje:

```
let task = "zrobić kawę"
console.log(task)
```

W powyższym kodzie utworzyliśmy/ zadeklarowaliśmy za pomocą słowa kluczowego `let` nową zmienną o nazwie `task` (z ang. *zadanie*) i przypisaliśmy do niej wartość `zrobić kawę`. Zmienna to nic innego, jak swego rodzaju podpisane pudełko, które w środku może coś zawierać. Sama nazwa zmiennej nie ulega zmianie - nie możemy jej zmienić. Możemy natomiast zmienić wartość, przypisaną do tej zmiennej.

Mamy więc pudełko o nazwie `task`, które w środku może przechowywać jakiekolwiek zadanie - w naszym przypadku jest to ciąg tekstowy `zrobić kawę` (zdecydowanie najważniejsza i podstawowa rzecz do zrobienia podczas pracy w biurze, najlepiej kilkakrotnie w ciągu dnia), ale równie dobrze mogłoby to być *sprawdzić maila* lub *zajrzeć na stronę kodujemywbiurze.pl*.

Zmienne mogą przechowywać wiele typów danych (liczby, obiekty, funkcje itd.), nie tylko ciągi tekstowe, natomiast nie musimy na raize wiedzieć za wiele na ten temat.

Nasz program wie już o istnieniu zmiennej `task` i będzie o niej pamiętał. W każdej chwili możemy się do niej odwołać na kilka sposobów, np. poprzez wywołanie `console.log(task)`.

Możemy też wpisać w nowej linijce konsoli po prostu samą nazwę zmiennej `task`, a konsola wyświetli Ci już w trakcie samego pisania nazwy zmiennej, jaką wartość w danej chwili przechowuje (spróbuj to zrobić).

Możesz też napisać `task`, a potem kliknąć Enter. W tej sytuacji konsola zwróci Ci wartość tej zmiennej w następnej linijce.

## Zmieńmy nasze zadanie | Nadpisywanie wartości zmiennych

Ok, zrobiliśmy kawę, więc zadanie zostało odhaczone i teraz chcemy go zmienić na kolejne zadanie. Możemy więc nadpisać (zmienić, zaktualizować) wartość naszego `task`'a w następujący sposób:

```
task = "sprawdzić maila"
```

Zwróć uwagę na to, że tym razem nie użyliśmy **słowa kluczowego `let`**, ponieważ **używamy** go **tylko raz, kiedy tworzymy nową zmienną**, żeby powiedzieć programowi, że *oto jest nowa zmienna, będę w niej coś przechowywał/a, nie zapomnij o tym oraz daj mi do niej dostęp za każdym razem, kiedy będę tego potrzebował/a*. Później posługujemy się już tylko samą nazwą zmiennej.

W powyższym kodzie przypisaliśmy do naszej zmiennej nową wartość, w związku z czym nasz program zapamięta i wyświetli nową wartość, jeśli wpiszemy nazwę zmiennej w konsoli (spróbuj to zrobić).

Możemy tak przypisywać nowe wartości do tej samej zmiennej mnóstwo razy, a po poprzednich nie pozostanie ani śladu, o czym należy pamiętać.

## Dobre praktyki w nazewnictwie zmiennych

Dobrą praktyką jest nazywanie zmiennych w taki sposób, aby nazwy te niewątpliwie odzwierciedlały charakter wartości tych zmiennych. Każdy, kto rozumie znaczenie słowa *task*, będzie się spodziewał, że jest to jakieś zadanie, a nie na przykład numer telefonu. Gdybyśmy chcieli przechować numer telefonu w zmiennej, nazwalibyśmy ją `phoneNumber`:

```
let phoneNumber = "666-999-666"
```

Pewnie zastanawiasz się, dlaczego, po pierwsze, nazywam zmienne po angielsku, a po drugie, dlaczego nazwa zmiennej `phoneNumber` wygląda tak dziwnie?

Jeśli chodzi o nazewnictwo w języku angielskim, to jest to oczywista powszechna i globalna praktyka - **język angielski jest głównym językiem programowania**. Nic oczywiście nie stoi na przeszkodzie, by nazwać zmienną `numerTelefonu`, natomiast programiści z innych krajów, nie znający języka polskiego, nie byliby w stanie zrozumieć, co to znaczy, a w zespołach międzynarodowych komunikacja to podstawa, zarówno pomiędzy programistami, jak i ich klientami. W związku z tym, musisz używać języka angielskiego w swoim kodzie i kropka. Ponadto, nawet jeśli współpracujemy z programistami, posługującymi się językiem polskim, to i tak piszemy kod (a nawet komentarze do niego!) po angielsku.

Natomiast to, że nasze zadania, które przechowujemy w kodzie, są zapisane w języku polskim, jest jak najbardziej w porządku. Są to wartości zmiennych, one mogą ulec zmianie; dowolny użytkownik naszej aplikacji na świecie może używać swojego języka. Z kolei każdy programista będzie wiedział, że `task` to `task`, niezależnie od tego, w jakim języku zapisana jest jego wartość.

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

2. Używamy wbudowanej metody `push()`, która dodaje zadania wpisane między nawiasami do istniejących już wcześniej zadań w tablicy *(Uwaga! Jeśli wcześniej użyłeś kodu z poprzedniego akapitu, to w poniższe zadania już są zawarte w zmiennej `tasks`, dlatego najpierw wyczyść zmienną przypisując do niej pustą tablicę: `tasks = []`)*:

```
tasks.push("zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl")
```

Czym się różnią te dwa sposoby?

Pierwszy sposób jest oczywisty: po prostu wpisujemy zadania po przecinku i przypisujemy całą listę z zadaniami do zmiennej `tasks`. Aczkolwiek, jest to dość niebezpieczny sposób na dodawanie wartości do listy... Dlaczego?

To podejście może być dobrym w przypadku, kiedy inicjujemy nową zmienną z jakimiś domyślnymi wartościami na początek, np. `let initialTasks = ["zrób kawę", "wyświetl Hello, World w konsoli"]`.

Jeśli z kolei nasz kod w konsoli (lub w programie z prawdziwego zdarzenia) ma mnóstwo linijek i wielokrotnie dodawaliśmy jakieś zadania do naszej listy, jak np.: `porozmawiać z koleżanką z biura o jej wczorajszej randce` lub `zarejestrować fakturę, która wpłynęła do biura już dwa dni temu`, to teraz, jeśli napiszemy taki kod: `tasks = [ "zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]`, wszystkie wcześniejsze zadania zostaną nadpisane przez te nowo dodane, w związku z czym je utracimy!

Dlatego to drugie rozwiązanie jest bardziej bezpieczne i czytelniejsze od pierwszego w wielu przypadkach. Kiedy używamy metody `push()` w ten sposób: `tasks.push("zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl")`, to zadania zostają dodane do wcześniej istniejących zadań - nie nadpisujemy całej zmiennej, a jedynie "wciskamy" nowe elementy na koniec listy.

Są też inne, bardziej nowoczesne sposoby dodania elementów do tablicy, ale nam na razie wystarczy tyle. Spróbujmy teraz sprawdzić w konsoli, jakie wartości przechowuje zmienna `tasks` - albo tak jak to robiliśmy wcześniej (po prostu wpisując nazwę zmiennej w konsoli), albo też poprzez wpisanie następującego kodu `console.log(tasks)` i klikając Enter.

W obydwu przypadkach w konsoli wyświetliło się coś takiego: `(3) ['zrobić kawę', 'sprawdzić maila', 'zajrzeć na stronę kodujemywbiurze.pl']`. Liczba w nawiasach wskazuje liczbę elementów w tablicy. Jeśli z kolei klikniesz w ikonkę trójkąta, która poprzedza liczbę elementów, to nasza lista rozwinie się w konsoli i będzie bardziej czytelna. Spróbuj rozwinąć listę!

Jak rozwinąłeś/aś listę, to zauważ, że obok naszych zadań po lewej stronie pojawiły się cyfry 0, 1, 2. Te liczby to indeksy. ***Indeks* oznacza numer pozycji elementu w tablicy**. Zauważ, że **indeksy zaczynają się od 0**, nie od 1! Dzięki indeksom możemy mieć dostęp do wybranych elementów z listy, np. jeśli chcemy wyświetlić/ zwrócić pierwszy element z listy `tasks`, to musimy napisać następujący kod w konsoli: `tasks[0]`, drugi element: `tasks[1]` itd.

Dzięki indeksom możemy też mieć dostęp do poszczególnych elementów listy i modyfikować je, nadpisując ich wartość:

```
tasks[0] = "zrobić kawę z mlekiem";
```

Teraz, kiedy ponownie sprawdzimy wartość `tasks[0]` w konsoli, to wyświetli nam się `zrobić kawę z mlekiem`, a nie `zrobić kawę`.

Świetnie! Potrafimy tworzyć listę zadań, uzyskiwać dostęp do poszczególnych elementów z listy i modyfikować je oraz dodawać nowe elementy do listy/ tablicy. Teraz nadszedł czas na pisanie reużywalnego kodu, który będzie wykonywał pewne powtarzalne zadania - dodawanie nowych zadań!

## Wstęp do funkcji | Wyświetlamy listę zadań (znowu)

Każdorazowe dodawanie zadań do listy zadań poprzez użycie kodu, z którego wcześniej korzystaliśmy (`tasks.push("nowe zadanie")`), działa, ale programiści "opakowują" kod, z którego często korzystamy (a będziemy często dodawać zadania do listy), w reużywalne "kawałki" kodu, które nazywają się funkcjami.

**Funkcja to pewien zakmnięty w sobie fragment kodu, który wykonuje pewne zadania/ polecenia w nim zdefiniowane za każdym razem, kiedy go wywołamy.**

Tak naprawdę, już korzystaliśmy z wbudowanych funkcji, tj. `console.log()`, `alert()` lub `tasks.push()`. Zauważ, że w odróżnieniu od zmiennych, **funkcja zawiera nawiasy tuż po swojej nazwie**.

Spróbujmy zatem stworzyć naszą pierwszą funkcję, by zrozumieć, o co w tym chodzi. Stworzymy funkcję, która będzie wyświetlała nam listę wszystkich naszych zadań.

Owszem, wcześniej już wyświetlaliśmy nasze zadania poprzez wpisanie w konsoli zmiennej `tasks` lub poprzez wywołanie funkcji `console.log(tasks)`, ale teraz zrobimy to w sposób bardziej ucywilizowany:

```
function showTasks() {
  console.log(tasks)
}
```

***Uwaga!*** W zależności od przeglądarki, może się okazać, że żeby napisać kilkulinijkowy kod w konsoli, musimy zamiast Enter używać kombinacji klawiszy Shift+Enter, żeby przejść do następnej linii, ponieważ wciśnięcie klawisza Enter spowoduje wywołanie tego kodu, który już napisałeś/aś, co najprawdopodobniej wywoła błąd w konsoli, ponieważ kod nie jest ukończony.

Jeśli to się zdarzy (pojawi się komunikat błędu) i po ponownym poprawnym wpisaniu kodu nie uda się zainicjować funkcji (ponieważ została niepoprawnie zaincjowana niekompletnym, przedwcześnie wywołanym kodem), odśwież stronę, co wyczyści pamięć konsoli i wpis kod jeszcze raz. Ale pamiętaj, że lista zadań `let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]` również zniknęła, więc najpierw musisz ją ponownie wpisać, zanim napiszesz powyższą funkcję.

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

Owszem, funkcja może również zwracać wartość, np. w tym przypadku:

```
function calculateSum(a, b) {
	const sum = a + b;
	console.log("a + b =", sum);

	return sum;
}
```

aczkolwiek zwrócona wartość jest wynikiem działania funkcji, więc funkcja musiała "coś zrobić", by "wyprodukować" wartość, którą zwraca.

## Funkcja dodająca zadanie | Argumenty funkcji, wywoływanie innych funkcji wewnątrz funkcji oraz komentarze

Wcześniej dodawaliśmy nasze zadania używając tego kodu: `tasks.push("jakieś tam zadanie")`. Zwróć uwagę na to, że `"jakieś tam zadanie"` znajduje się w nawiasach funkcji, w związku z tym `"jakieś tam zadanie"` zostało przekazane funkcji `push()` jako argument (pewien zasób/ wartość/ informacja), który zostanie przez tę funkcję wykorzystany.

Nasza funkcja `showTasks()` nie ma żadnych argumentów w nawiasach, ponieważ ich nie potrzebuje - ma dostęp do zadań, gdyż zmienna `tasks` istnieje już w naszym kodzie i zawsze mamy do niej dostęp z poziomu każdej funkcji (innymi słowy, jest zmienną globalną). Czyli wiemy, że funkcja może w ogóle nie mieć żadnych argumentów.

Wyobraźmy natomiast, że chcemy dodać nowe zadanie, które nie istnieje nigdzie w kodzie w postaci zmiennej, wiemy także, że dysponujemy funkcją o nazwie `addTask()` (za chwilę ją napiszemy, ale na razie wyobraźmy, że ktoś już ją napisał). Jak możemy to zrobić?

W tym przypadku należałoby tej funkcji przekazać pewną informację (w naszym przypadku będzie to nowe zadanie), czego możemy dokonać poprzez wpisanie naszego zadania w nawiasach tej funkcji w następujący sposób: `addTask("zrobić kawę po raz drugi")`.

Chciałbym też zauważyć, że taki kod zadziała tylko w tym przypadku, jeśli funkcja `addTask()` oczekuje jakiegoś argumentu, czyli że funkcja ta została napisana w pewien określony sposób, który zaraz zobaczymy (pojawi się tam też kilka nowych rzeczy):

```
function addTask(newTask) {

	// w poniższej linijce dodajemy zadanie do listy zadań:
	tasks.push(newTask);

	// wyświetlamy komunikat w konsoli o nowo dodanym zadaniu:
	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	// wyświetlamy zaktualizowaną pełną listę zadań:
	showTasks();
}
```

Po pierwsze, zwróć uwagę, że po nazwie funkcji `addTask` w nawiasach mamy zawarty argument `newTask`. Tak naprawdę `newTask` jest zmienną, która jeszcze nie ma żadnej przypisanej wartości, czyli jest to "puste podpisane pudełko", do którego dopiero później coś włożymy - a dokładnie w momencie wywołania funkcji w ten sposób: `addtask("to zadanie jest właśnie tą wartością, która zostanie przypisana do argumentu newTask")`.

Mimo że w samej definicji funkcji `addTask` argument `newTask` nie ma żadnej wartości, to możemy go wykorzystać w kodzie funkcji tak, jakby tę wartość miał (co też robimy w dalszej części kodu funkcji: `tasks.push(newTask)` - tak naprawdę mówimy przeglądarce, że cokolwiek by się znalazło z zmiennej `newTask`, powinno zostać dodane do `tasks`).

Innymi słowy, wyobraź sobie, że mówisz koleżance z biura: *"Na biurku leży żółty segregator, który na razie jest pusty, ale później przyjdzie sekretarka i włoży do tego segregatora stertę dokumentów. Wtedy weź segregator i włóż go do szafy"*. Koleżanka nie musi wiedzieć, jakie dokumenty znajdą się w segregatorze. Wie tylko, że jak się tam znajdą, trzeba odłożyć segregator. Gdyby wspomniana koleżanka bardzo się nudziła, mogłaby wziąć pusty segregator i włożyć go do szafy, mimo że nie ma w nim żadnych dokumentów, by przećwiczyć tę czynność na przyszłość.

Po drugie, pewnie zauważyłeś/aś, że w kodzie znalazły się linijki z tekstem, które poprzedzają te symbole: `//`. Dzięki tym symbolom dodajemy **komentarze** do swojego kodu - są one widoczne w kodzie, natomiast nie są traktowane jako kod przez program (w naszym przypadku przez przeglądarkę).

Dzięki komentarzom możemy też "wyłączyć" pewien fragment kodu, czyli go "zakomentować", jeśli z jakiegoś powodu nie chcemy, by akurat zadziałał. Wystarczy, że zakomentujemy kod w następujący sposób:

```
// addTask("To zadanie nie zostanie dodane, ponieważ polecenie addTask w ogóle nie zostanie wywołane...");
```

Po trzecie, zauważ, że w funkcji `addTask()` nie tylko dodajemy zadanie do listy, ale także wyświetlamy komunikat w konsoli o tym, że zostało dodane nowe zadanie, przy czym wyświetlamy także samo zadanie. Dzieje się tak dlatego, że tym razem przekazaliśmy `console.log()` zarówno pewną wiadomość: `"Do Twoich zadań zostało dodane nowe zadanie:"`, a potem po przecinku przekazaliśmy samą zmienną, reprezentującą nowe zadanie, w związku z czym konsola wyświetli wiadomość oraz wartość zmiennej przechowującej nowe zadanie (treść nowego zadania):

```
console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);
```

Po czwarte, po dodaniu nowego zadania i wyświetleniu komunikatu, wywołujemy funkcję `showTasks()`, którą wcześniej napisaliśmy, dzięki czemu konsola automatycznie wyświetli zaktualizowaną listę zadań z nowo dodanym zadaniem na końcu. Widzisz, mówiłem, że funkcje przydają się do ponownego wykorzystania! W funkcji `addTask()` zawarliśmy i wywołujemy inną naszą funkcję `showTasks()` (a w sumie wywołujemy też wbudowaną funkcję `console.log()`). Być może nawet nie pamiętasz już, co dokładnie znajdowało się w funkcji `showTasks()`, ale na pewno wiesz, co robi i właśnie z tego skorzystałeś/aś! Właśnie na tym polega korzyść z tworzenia dobrze nazwanych reużywalnych funkcji!

Dzięki temu, że dodaliśmy automatyczne wyświetlenie zaktualizowanej listy zadań, nie musimy za każdym razem po dodaniu nowego zadania wywoływać ręcznie dodatkowo `showTasks()`, żeby wyświetlić naszą listę.

Ok, wpisz więc do konsoli kod nowej funkcji `addTask()`, ale bez moich komentarzy (to te linijki, które zaczynają się od `//`, pamiętasz?).

Teraz możemy dodawać zadania poprzez wywołanie funkcji `addTask` z argumentami (poćwicz to w konsoli):

```
addTask("sprawdzić Facebooka")
addTask("wyskoczyć do sklepu po jogurt")
addTask("położyć jogurt na grzejniku, by się zacieplił")
```

Jeśli wszystko poszło zgodnie z planem, to za każdym razem po dodaniu zadania, wyświtla Ci się komunikat oraz coraz to dłuża lista - ileż to my mamy do zrobienia dzisiaj w biurze!

## Wyświetlanie zadań po kolei | Pętla `for`, długość tablicy `length`

A co powiesz na to, że zamiast wyświetlać całą tablicę zadań, wyświetlimy każde zadanie w osobnej linijce, dzięki czemu lista będzie bardziej przejrzysta?

Możemy to osiągnąć na wiele sposobów, ale wykorzystamy w tym celu starą dobrą klasyczną metodę - pętlę `for`. Czym jest pętla?

Pętla jest poleceniem, które wykonuje pewne zadanie raz po raz, dopóki pewien warunek jest spełniony. Ogólnie początkujący programiści czasami mają problem ze zrozumieniem działania pętli, więc w razie czego, nie poddawaj się od razu ;-)

Zobaczmy poniższy kod i zastanówmy się nad nim:

```
for (let i = 0; i < 10; i++) {
	console.log(i)
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

Gdybyśmy teraz chcieli wyświetlić nasze zadania w podobny sposób, moglibyśmy stworzyć nową funkcję, nazwijmy ją `loopTasks()` i zamiast sprawdzać, czy `i` jest mniejsze od 10, będziemy sprawdzać, czy `i` jest mniejsze od długości naszej listy (a możemy sprawdzić długość naszej listy, która jest `tablicą`, w ten sposób: `tasks.length`), czyli liczby elementów, które zawiera:

```
function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(tasks[i]);
	}
}
```

W powyższym kodzie iterujemy po naszych zadaniach z listy, dopóki zmienna `i` jest mniejsza od długości listy, do której mamy dostęp sprawdzając długość tablicy `tasks.length` (możesz to osobno sprawdzić, wpisując ten kod do konsoli). Dlaczego nie sprawdzimy długości listy w konsoli i nie użyjemy tej konkretnej liczby w naszej pętli? Takie podejście nie ma sensu, ponieważ długość listy będzie najprawdopobniej się zmieniać (np. za chwilę stworzymy funckję do usuwania zadań z listy), a właściwość `length` zawsze dynamicznie zwróci nam realną długość każdej tablicy.

Z drugiej strony zwróć uwagę na to, w jaki sposób uzyskujemy dostęp do każdego zadania za pomocą indeksu tablicy. Robiliśmy to już wcześniej, kiedy omawialiśmy tablice i indeksy, np. kiedy pisaliśmy kod `tasks[0]`, żeby zwrócić pierwszy element z listy. Teraz używamy dynamicznej zmiennej `i`, która każdorazowo automatycznie podstawia kolejny indeks poprzez `tasks[i]` - jeśli `i` w danej chwili będzie równe 5, to program potraktuje nasz dynamiczny kod jako `tasks[5]`.

No i ciekawostka: jak uzyskać ostatni element z listy, której długości nie znamy? Nie wiemy przecież, jaką wartość indeksu mamy wpisać w `tasks[?]`... Otóż możemy to robić na kilka sposobów (jak zwykle w programowaniu), natomiast na początek w tym celu możemy użyć nowo poznanej właściwości `length` w ten sposób:

```
tasks[tasks.length - 1];
```

Co się dzieje w powyższym kodzie? Ponieważ nie znamy długości listy, ale wiemy, że właściwość `length` zawsze zwraca atkualną długość tablicy, dynamicznie obliczyliśmy indeks ostatniego elementu odejmując od długości jedynkę.

Może się to wydawać zagmatwane, więc przyjrzyjmy się temu lepiej. Pamiętasz mówiłem, że indeksy zaczynają się od 0, a nie od 1? Jeśli więc mamy listę, która zawiera np. 10 elementów, to indeksem ostatniego elementu będzie... 9! Jeśli z kolei sprawdzimy, co zwraca właściwość `length`, to zwróci ona... 10! Dzieje się tak dlatego, że długość tablicy równa się liczbie elementów, które przechowuje. W związku z tym, jeśli chcemy uzyskać dostęp do ostatniego (dziesiątego) elementu tej listy, musimy użyć indeksu 9: `tenElementsList[9]`. Żeby uzyskać 9, musimy od (długości) 10 odjąć 1. W związku z tym, żeby uzyskać dostęp do ostatniego elementu tablicy o dowolnej nieznanej długości, korzystamy z kodu `list[list.length - 1]` (zamiast `list` podstawiamy oczywiście nazwę naszej zmiennej).

## Usuwanie zadań z listy | Metoda `splice()`

Ok, więc inicjujemy listę zadań, dodajemy i przechowujemy zadania w kodzie, czas więc na kolejną funkcjonalność - usuwanie zadania z listy. Powinniśmy być w stanie usunąć zadanie, które jest już nieaktualne albo wykonane z naszej listy, że się nie rozpraszać oraz widzieć nasz progres.

Usuwanie konkretnego elementu z tablicy może dokonać na kilka sposobów. Ze względu na to, że wiemy, czym są indeksy oraz nasza lista pozwala na wyświetlenie indeksów każdego z zadań, najłatwiej będzie sprawdzić, jaki jest indeks zadania, które chcemy usunąć, a potem użyć wbudowanej metody tablicy `splice()` w ten sposób:

```
// załóżmy, że chcemy usunąć zadanie o indeksie 4:

tasks.splice(4, 1);
```

Metoda `splice()` w tym przypadku potrzebuje przekazania do niej dwóch argumentów:

- pierwszy (w naszym przykładzie jest to `4`) jest indeksem elementu, który chcemy usunąć,
- drugi z kolei wskazuje na ilość elementów, które chcemy usunąć, zaczynając od tego indeksu (my chcemy usunąć tylko jedno zadanie, więc napiszemy `1`).

Oczywistym jest, że nie będziemy usuwać elementów bezpośrednio w ten sposób, tylko... no zgadnij... dokładnie - napiszemy dedykowaną reużywalną funkcję! No bo kto by pamiętał za każdym razem, jakie argumenty i w jakiej kolejności mamy przekazać do metody `slice()`? Zresztą, kto by pamiętał w ogóle, jak nazywa się ta metoda.

Stwórzmy więc funkcję `deleteTask(index)`:

```
function deleteTask(index) {
  tasks.splice(index, 1);
	
	// możemy tutaj dodać komunikat o tym, że zadanie zostało usunięte:
	// haha, ale nie napiszę jak to zrobić, ponieważ robiliśmy już podobne rzeczy ;-)
	// musisz więc sam/a się z tym uporać, ale...
	// podpowiem, że jest to zadanie z pewnym haczykiem ;-)

	// możemy też wyświetlić zaktualizowaną listę naszych zadań:
	// to też wiesz, jak zrobić ;-)
}
```

Po przepisaniu tej funkcji do konsoli (oraz opcjonalnym samodzielnym dopisaniu dwóch linijek kodu, o których wspominam w komentarzach), spróbuj usunąć kilka zadań, uprzednio sprawdzając, jakie indeksy chcesz usunąć.

Spróbuj teraz stworzyć funckję o nazwie `deleteAllTasks()`, która usuwa od razu wszystkie zadania. Można to oczywiście zrobić na wiele sposobów:

- można to zrobić bardzo, ale to bardzo łatwo (właśnie tego od Ciebie oczekuję),
- ale można też zaszaleć i w tym celu użyć pętli, a nawet pętli, która wykorzystuje już wcześniej stworzoną funkcję `deleteTask()`, która by usuwała każde zadanie po kolei, przy okazji wyrzucała do konsoli każde usunięte zadanie.

## Podstawy podstaw za nami! | Kod dotychczasowej aplikacji w całości

No teraz nasza aplikacja jest już naprawdę zaawansowana! I przy okazji zobacz, ile już wiemy nt. *JavaScript*!

Gratuluję! Właśnie stworzyłeś/aś aplikację w języku JavaScript, która działa w konsoli Twojej przeglądarki, może przechowywać listę Twoich zadań do zrobienia oraz umożliwia dodawanie zadań do tej listy! Przy okazji poznałeś/aś pewne podstawowe pojęcia jeżyka JavaScript:

- zmienna i wartość
- tablica, indeks, `push()`, `length`, `splice()`
- funkcje i `console.log()`

Poniżej znajduje się cały kod naszej aplikacji, który możemy skopiować i wkleić do konsoli, dzięki czemu aplikacja będzie działać - pamiętaj tylko, by odświeżyć stronę, żeby usunąć z konsoli dotychczasowy kod.

*UWAGA: kodu jest o wiele mniej, niż dotychczas napisaliśmy, ponieważ znajdują się w nim jedynie niezbędne funkcjonalności:*

```
let tasks = [];

function showTasks() {
  console.log(tasks);
}

function addTask(newTask) {
	tasks.push(newTask);

	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	showTasks();
}

function deleteTask(index) {
	// jeśli chcemy wyświetlić zadanie, które zostało usunięte,
	// to najpierw musimy je przechować w zmiennej,
	// ponieważ po usunięciu nie będziemy mieć do niego dostępu:

	let deletedTask = tasks[index];

  tasks.splice(index, 1);

	console.log("Zadanie", deletedTask, "zostało usunięte...");

	showTasks();
}
```

Możesz teraz dodawać zadania za pomocą kodu `addTask("jakieś zadanie")`, a potem je usuwać, sprawdzając uprzednio ich indeks: `deleteTask(3)`.

Spróbuj teraz opowiedzieć swoimi słowami koleżance/koledze z biura, co robi/ co się dzieje w każdej z linijek powyśzego kodu.

Jeśli nie masz, komu to opowiedzieć lub po prostu nie chcesz dzielić się swoją tajną wiedzą, możesz opowiedzieć to swoim kwiatkom na parapecie/ biurku lub, tak jak niektórzy programiści, żółtej gumowej kaczce ;-)

Gratuluję jeszcze raz!

Właśnie dobrnąłeś/aś do końca tego krótkiego tutoriala. Spodobało się? Chcesz więcej? Jeśli tak, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu *(zakładam, że będziemy dalej rozwijać naszą aplikację do zadań, dodając coraz to nowsze funkcjonalności oraz poznając również podstawy HTML i CSS, by wyjść poza konsolę i stworzyć stronę/ aplikację internetową z prawdziwego zdarzenia)*.

A co byśmy zrobili w następnej kolejności? No na przykład to:

Na razie nasze zadania są przechowywane w przeglądarce tylko dopóki nie zresetujemy tej strony. Jest to w pewnym sensie dobre, ponieważ jutro nie przytłoczy Cię nadmiar zapisanych zadań! Aczkolwiek fajnie by było, gdyby nasze zadania pozostawały zapisane tak długo, jak chcemy.

Możemy to zrobić za pomocą wbudowanego narzędzia każdej przeglądarki `localStorage`, które jest czymś w rodzaju magazynu, w którymi możemy przechowywać pewne ilości danych.

Jeśli więc chcesz zrobić ten kolejny i następne kroki, daj znać!

## Darmowe źródła do samodzielnej nauki

Poniżej znajdziesz listę sprawdzonych źródeł do samodzielnej nauki *JavaScript* i nie tylko.

Niestety, większość nie jest dostępna (przetłumaczona) w języku polskim, aczkolwiek zachęcam do nauki w języku angielskim, nawet jeśli Twój angielski nie jest na najwyższym poziomie, ponieważ tutoriale są zwykle pisane bardzo postym językiem:

- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
- https://javascript.info/
- https://www.geeksforgeeks.org/javascript/
- https://www.codecademy.com/resources/docs/javascript
- https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/