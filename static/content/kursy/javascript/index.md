# Kurs JavaScript

---

## Wprowadzenie

---

- **Pracujesz w biurze?**
- **Masz do dyspozycji komputer/ laptop, Internet i kubek kawy/ herbaty?**
- A może tak spróbujesz przekonać się, czy **kodowanie może być równie dobrym wypełniaczem Twojego czasu w biurze, jak skrollowanie Fejsa czy Insta**?

*Kodujemy w biurze* powstało, by **zachęcić pracowników biurowych do spróbowania swoich sił w kodowaniu** webowym w przyjazny i nie wymagający żadnych konfiguracji sposób.

Chodzi mi przede wszystkim o **pobudzenie Twojej ciekawości** i pokazanie, że **pisanie kodu jest dostępne dla każdego** i może być świetną **zabawą oraz rozrywką intelektualną** (w szczególności w biurze)!

Ponieważ wolę **uczyć się nowych rzeczy w praktyce, widząc natychmiastowe rezultaty** mojej nauki i pracy, dlatego w trakcie tego kursu:

- od samego początku **będziemy tworzyć coraz bardziej rozbudowaną aplikację do zarządzania listą zadań do zrobienia, która będzie działać w konsoli naszej przeglądarki bezpośrednio na tej stronie** *(za chwilę dowiesz się, czym jest konsola i jak z niej korzystać)*, a potem zostanie przekształcona w samodzielną aplikację webową,
- **przy okazji** tworzenia aplikacji **opanujemy podstawy języka JavaScript** - <a href="https://bulldogjob.pl/readme/najpopularniejsze-jezyki-programowania-2020" target="_blank">najbardziej popularnego języka programowania</a>, a potem także niezbędne podstawy HTML i CSS (w kolejnych kursach).

**PS.** *de facto* stworzymy co najmniej kilka samodzielnych, samowystarczalnych i coraz bardziej rozbudowanych i zaawansowanych wersji wspomnianej aplikacji, rozbudowując ją przy okazji poznawania kolejnych zagadnień z języka JavaScript (a później też HTML i CSS). Każda z wersji aplikacji będzie całością samą w sobie i można będzie ich używać osobno - te pierwsze wersje będą działać tylko w konsoli przeglądarki, kolejne natomiast będą możliwe do pobrania.

Aplikacja, którą stworzymy, umożliwi nam:

- zapisywanie,
- przechowywanie,
- wyświetlanie,
- dodawanie,
- modyfikowanie oraz
- usuwanie zadań do zrobienia.

Na początku (w Module 1.) będzie to możliwe za pomocą poleceń napisanych przez nas kodem (poleceniami w czystym) JavaScript w konsoli.

Później (Moduł 2.) stworzymy i będziemy używać własnych funkcji, które zostaną zapisane w pliku bezpośrednio w przeglądarce, dzięki czemu nasz kod zostanie zachowany nawet po przeładowaniu strony oraz będziemy mogli go uruchomić w konsoli. W ten sposób powstanie aplikacja w wersji 1.0.

Natomiast w Module 3. (na razie w niniejszym kursie mamy 3 moduły) rozbudujemy naszą aplikację w ten sposób, że nie tylko kod będzie zachowany w przeglądarce, ale także same zadania zostaną zapisane w przeglądarce za pośrednictwem wbudowanej funkcjonalności `localStorage`, która jest swego rodzaju magazynem danych. W ten sposób powstanie aplikacja w wersji 2.0.

W ramach rozbudowy niniejszej strony i dodawania kolejnych lekcji i kursów (co zależy od Waszego zainteresowania projektem, dlatego zachęcam do polubienia i śledzenia profilu na <a href="https://www.facebook.com/kodujemywbiurze" target="_blank">Facebooku</a> i <a href="https://www.linkedin.com/company/kodujemywbiurze" target="_blank">LinkedIn</a>), będziemy przekształcać i dalej rozwijać tę aplikację w aplikację z pełnego zdarzenia - z interfacem użytkownika, bazą danych, rejestracją użytkowników itd. *Sky is the limit*, aczkolwiek na początek w ramach eksperymentu ograniczymy się do funkcjonalności, którymi dysponuje nasza przeglądarka.

Mam nadzieję, że kiedy dobrniesz do końca tego tutoriala, to będziesz chciał/a więcej! Jeśli tak będzie, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu.

*Happy Coding!*

# Moduł 1. Zarządzanie zadaniami za pomocą poleceń JavaScript w konsoli

---

## Czym jest JavaScript i dlaczego warto się go uczyć?

---

> Wszystko, co może zostać napisane w JavaScript, ostatecznie zostanie napisane w JavaScript.

*Douglas Crockford*

JavaScript jest obecnie **<a href="https://bulldogjob.pl/readme/najpopularniejsze-jezyki-programowania-2020" target="_blank">najbardziej popularnym językiem programowania</a>**. Programowanie to nic innego, jak pisanie poleceń w języku programowania zrozumiałym dla komputera/ urządzenia/ programu/ przeglądarki, które określają, co urządzenie/ program ma wyświetlić, jak to wyświetlić, jak ma reagować na działania użytkownika, skąd ma pobrać dane lub gdzie je zapisać itd.

JavaScript w połączeniu z dwoma innymi językami - HTML i CSS - służy do tworzenia stron i aplikacji webowych (czyli takich, które działają w przeglądarce):

- **HTML pozwala stworzyć strukturę strony www** (określa, gdzie w hierarchii jest nagłówek, lista, zdjęcie itd.),
- **CSS pozwala nadać stronom i aplikacjom ładnego wyglądu** (np.: nagłówek jest wyśrodkowany, wyróżnione słowa mają inny kolor, a tło jest ciemnoszarego koloru), natomiast
- **JavaScript dodaje szczyptę magii**, np.:
  - reaguje na działania użytkownika, tj.: kliknięcia w przycisk,
	- współdziała z bazą danych, pobierając i wysyłając dane,
	- dynamicznie zmienia istniejący kod HTML i CSS (np. zmienia kolor jakiegoś elementu, dodawaje nowe elementy).

Możliwości są nieograniczone!

To właśnie dzięki JavaScript strony i aplikacje są dynamiczne i interaktywne - jest on silnikiem napędzającym stronę.

## Konsola, console.log(), console.clear() | Zaczynamy pisać kod! Czym jest konsola, jak jej używać, console.log() i co to jest *Hello, World!*?

---

Niniejsza strona, jak większość innych w Internecie, używa JavaScript. Każda **przeglądarka** również **rozumie i przetwarza kod JavaScript**, a ponadto umożliwia nam pisanie kodu bezpośrednio w przeglądarce, a dokładniej w konsoli. Konsola jest jednym z wielu wbudowanych narzędzi każdej przeglądarki i dzięki temu, że możemy w niej pisać kod (a nawet przechowywać pliki z kodem, co też zrobimy później), będzie naszym podstawowym narzędziem kodowania i nauki w tym kursie. Przekonajmy się o tym i otwórzmy konsolę w naszej przeglądarce!

---

### Konsola w Google Chrome *(zalecana przeglądarka w niniejszym kursie)*

Na co dzień oraz w tym i wszystkich kolejnych kursach oraz dokumentacji używam przeglądarki ***Google Chrome***, w związku z tym polecam korzystanie z tej przeglądarki w trakcie kursu. Ponadto, Chrome (oraz Microsoft Edge) posiada niezbędną dla niniejszego funkcjonalność *snippets*, bez której, owszem, można przejść kurs, ale w pewnym momencie pisanie kodu będzie mniej wygodne, dlatego naprawdę polecam tę przeglądarkę.

Jeśli nie masz zainstalowanej przeglądarki Google Chrome, możesz ją za darmo pobrać <a href="https://www.google.pl/chrome/" target="_blank">tutaj</a>. Jeśli podczas instalacji Chrome wyświetli Ci się komunikat, że potrzebujesz uprawnienia administratora, zignoruj je, ponieważ później i tak wyświetli Ci się komunikat o tym, że mimo braku uprawnień, możesz ją zainstalować ;-) Jeśli z kolei masz Chrome, to polecam jego zaktualizowanie do najnowszej wersji przed rozpoczęciem niniejszego kursu.

Żeby otworzyć konsolę w Chrome, należy:

- w prawym górnym rogu przeglądarki kliknąć ikonkę menu (3 kropki ustawione w pionie),
- wybrać opcję *Więcej narzędzi*, a potem
- wybrać opcję *Narzędzia dla developerów*.

Możesz też po prostu użyć skrótu klawiszowego `Ctrl+Shift+I`.

### Konsola w Microsoft Edge *(druga w kolejności zalecana przeglądarka w niniejszym kursie)*

Żeby otworzyć konsolę w Edge, należy:

- w prawym górnym rogu przeglądarki kliknąć ikonkę menu (3 kropki ułożone w poziomie),
- wybrać opcję *Więcej narzędzi*, a potem
- wybrać opcję *Narzędzia programistyczne* (oraz może trzeba będzie dodatkowo kliknąć w *Konsola* lub *Console*).

Możesz też po prostu użyć skrótu klawiszowego `Ctrl+Shift+I`.

### Konsola w Mozilla Firefox *(nie polecam, ponieważ brakuje niezbędnej dla kursu funkcjonalności)*

Ogólnie Firefox jest świetną przeglądarką (w niektórych aspektach lepszą od Chrome), niemniej jednak nie ma ona jednej istotnej w tym kursie funkcjonalności, w związku z tym nie polecam korzystania z niej w niniejszym kursie (aczkolwiek nawet bez tej funkcjonalności również możesz pracować z tym kursem, tyle że będzie trochę trudniej oraz w ostateczności nie będziesz mógł/mogła zapisać kodu w postaci pliku w przeglądarce).

Jeśli jednak używasz *Mozilli*, to aby otworzyć konsolę:

- w prawym górnym rogu kliknij ikonkę menu (tzw. hamburger, czyli 3 poziome linie),
- wybierz opcję *Dla twórców stron*, potem
- kliknij w *Konsola WWW*.

Możesz także użyć skrótu klawiszowego `Ctrl+Shift+I` lub `Ctrl+Shift+K`.

---

Ok, więc teraz powinieneś/ powinnaś zobaczyć nowe dodatkowe okienko w Twojej przeglądarce - witaj w konsoli! Wpisz teraz następujące polecenie w konsoli i kliknij Enter:

```
console.log("Hello, World!");
```

Jeśli wszystko wpisałeś/aś poprawnie, konsola wyświetliła napis *Hello, World!* w następnej linijce. Gratuluję, właśnie wywołałeś/aś swoje pierwsze polecenie napisane w języku JavaScript!

`console.log()` jest wbudowanym poleceniem *(jednym z wielu - z niektórych z nich będziemy korzystać później w tym tutorialu)*, które wyświetla dowolną zawartość umieszczoną w nawiasach (w naszym poprzednim przykładzie był nią ciąg tekstowy "Hello, World!"). Tak jak prawdziwi programiści, będziemy często korzystać z tego polecenia.

Jeśli z kolei chcemy wyczyścić konsolę (usunąć kod, który napisaliśmy oraz komunikaty wyświetlone w konsoli), to należy wpisać inne wbudowane polecenie `console.clear()` i kliknąć Enter:

```
console.clear();
```

*PS. zdradzę Ci tajemnicę: programiści bardzo często używają polecenia `console.log()` w swoim kodzie, by sprawdzić, co się dzieje z niektórymi zmiennymi w trakcie działania programu. Dzięki temu można sprawdzić, czy nasz kod działa poprawnie lub też odkryć, że zawiera błąd. Ten chwyt odnosi się do szerszego pojęcia w programowaniu - "debugowania", czyli wyszukiwania i naprawiania błędów.*

Dlaczego akurat użyłem określenia *Hello, World!*? Jest to taka niepisana tradycja wśród programistów - tego określenia używamy np. kiedy testujemy nowe narzędzia, języki itd.

Ok, więc wiemy już, czym jest konsola, jak ją otworzyć, a nawet wpisaliśmy i uruchomiliśmy nasze pierwsze polecenie.

Jak już wspomniałem wcześniej, konsola umożliwia nam m. in. pisanie i uruchamianie kodu JavaScript, chociaż nie jest to jej główny cel - każdy edytor kodu jest zdecydowanie lepszym narzędziem do pisania kodu. Natomiast na razie nie chcemy żadnego osobnego edytora kodu. Chcemy po prostu napisać kilka linijek kodu i zobaczyć, jak to działa oraz *złapać bakcyla*. Co prawda, w pewnym momencie w tym kursie zaczniemy korzystać z dodatkowej funkcjonalności w przeglądarce, która ułatwi nam pisanie kodu, ale na razie pozostajemy w "czystej" konsoli. Z kolei w kolejnych kursach będziemy najprawdopodbniej korzystać z edytorów kodu dostępnych online.

## Zmienne i ich deklaracja | Tworzymy pierwsze zadanie

---

Jeśli mamy jakieś ważne zadanie do zrobienia, to najprawdopodobniej zapiszemy go na jakiejś kartce i umieścimy w widocznym miejscu. Podobnie działa to w programowaniu.

Jeśli chcemy przechowywać nasze zadania (lub cokolwiek innego) w kodzie, musimy stworzyć dla nich dedykowane miejsce (odpowiednik naszej kartki). Na razie nasza konsola (czyli de facto nasz prosty program) nie przechowuje niczego.

Zanim przechowamy wiele zadań, spróbujmy najpierw stworzyć 1 zadanie *(jest typowe podejście dla programisty - rozbijamy problem na mniejsze problemy)*. Żeby to zrobić, należy **stworzyć zmienną i przypisać do niej pewne wartości**. Co to znaczy?

Zanim wytłumaczę, czym jest zmienna i wartości:

- spójrz na poniższy kod,
- przepisz go do konsoli (nie kopiuj tego kodu, tylko wpisz go własnoręcznie - to sprawi, że bardziej się oswoisz z pisaniem kodu i jego składnią),
- kliknij Enter,
- spróbuj najpierw intuicyjnie zrozumieć, co się w nim dzieje:

```
let task = "zrobić kawę";

console.log(task);
```

W powyższym kodzie utworzyliśmy/ zadeklarowaliśmy za pomocą słowa kluczowego `let` nową zmienną o nazwie `task` (ang. *zadanie*) i przypisaliśmy do niej wartość `zrobić kawę`. Zmienna to nic innego, jak swego rodzaju podpisane pudełko, które w środku może coś zawierać. Sama nazwa zmiennej nie ulega zmianie - nie możemy jej zmienić. Możemy natomiast zmienić wartość, przypisaną do tej zmiennej.

Mamy więc pudełko o nazwie `task`, które w środku może przechowywać jakiekolwiek zadanie - w naszym przypadku jest to ciąg tekstowy `zrobić kawę` (zdecydowanie najważniejsza i podstawowa rzecz do zrobienia podczas pracy w biurze, najlepiej kilkakrotnie w ciągu dnia), ale równie dobrze mogłoby to być *sprawdzić maila* lub *zajrzeć na stronę kodujemywbiurze.pl*.

Zmienne mogą przechowywać wiele typów danych (liczby, obiekty, funkcje itd.), nie tylko ciągi tekstowe, natomiast nie musimy na razie wiedzieć za wiele na ten temat - w trakcie kursu poznamy większość.

Nasz program wie już o istnieniu zmiennej `task` i będzie o niej pamiętał. W każdej chwili możemy się do niej odwołać na kilka sposobów, np. poprzez wywołanie `console.log(task)`.

Możemy też wpisać w nowej linijce konsoli po prostu samą nazwę zmiennej `task`, a konsola wyświetli Ci już w trakcie samego pisania nazwy zmiennej, jaką wartość w danej chwili przechowuje (spróbuj to zrobić).

Możesz też napisać `task`, a potem kliknąć Enter. W tej sytuacji konsola zwróci Ci wartość tej zmiennej w następnej linijce.

## Zmienne. Nadpisywanie wartości | Aktualizujemy nasze zadanie

---

Ok, zrobiliśmy kawę, więc zadanie zostało odhaczone i teraz chcemy go zmienić na kolejne zadanie. Możemy więc nadpisać (zmienić, zaktualizować) wartość naszego `task`'a w następujący sposób:

```
task = "sprawdzić maila";
```

Zwróć uwagę na to, że tym razem nie użyliśmy **słowa kluczowego `let`**, ponieważ **używamy** go **tylko raz, kiedy tworzymy nową zmienną**, żeby powiedzieć programowi, że *oto jest nowa zmienna, będę w niej coś przechowywał/a, nie zapomnij o tym oraz daj mi do niej dostęp za każdym razem, kiedy będę tego potrzebował/a*. Później posługujemy się już tylko samą nazwą zmiennej.

W powyższym kodzie przypisaliśmy do naszej zmiennej nową wartość, w związku z czym nasz program zapamięta i wyświetli nową wartość, jeśli wpiszemy nazwę zmiennej w konsoli (spróbuj to zrobić).

Możemy tak przypisywać nowe wartości do tej samej zmiennej mnóstwo razy, a po poprzednich nie pozostanie ani śladu, o czym należy pamiętać.

## Dobre praktyki w nazewnictwie zmiennych

---

Dobrą praktyką jest nazywanie zmiennych w taki sposób, aby nazwy te niewątpliwie odzwierciedlały charakter wartości tych zmiennych. Każdy, kto rozumie znaczenie słowa *task*, będzie się spodziewał, że jest to jakieś zadanie, a nie na przykład numer telefonu. Gdybyśmy chcieli przechować numer telefonu w zmiennej, nazwalibyśmy ją `phoneNumber`:

```
let phoneNumber = "666-999-666";
```

Pewnie zastanawiasz się, dlaczego, po pierwsze, nazywam zmienne po angielsku, a po drugie, dlaczego nazwa zmiennej `phoneNumber` wygląda tak dziwnie?

Jeśli chodzi o nazewnictwo w języku angielskim, to jest to oczywista powszechna i globalna praktyka - **język angielski jest głównym językiem programowania**. Nic oczywiście nie stoi na przeszkodzie, by nazwać zmienną `numerTelefonu`, natomiast programiści z innych krajów, nie znający języka polskiego, nie byliby w stanie zrozumieć, co to znaczy, a w zespołach międzynarodowych komunikacja to podstawa, zarówno pomiędzy programistami, jak i ich klientami. W związku z tym, musisz używać języka angielskiego w swoim kodzie i kropka. Ponadto, nawet jeśli współpracujemy z programistami, posługującymi się językiem polskim, to i tak piszemy kod (a nawet komentarze do niego!) po angielsku.

Natomiast to, że nasze zadania, które przechowujemy w kodzie, są zapisane w języku polskim, jest jak najbardziej w porządku. Są to wartości zmiennych, one mogą ulec zmianie; dowolny użytkownik naszej aplikacji na świecie może używać swojego języka. Z kolei każdy programista będzie wiedział, że `task` to `task`, niezależnie od tego, w jakim języku zapisana jest jego wartość.

Z kolei sposób łączenia słów w jedną całość w kodzie w ten sposób: `phoneNumber` nazywa się `camelCase`. Taki sposób zapisu rozwiązuje jeden problem: nazwa zmiennej musi być ciągiem znaków, nie mogą to być dwa oddzielone od siebie wyrazy. Możemy też zapisać nazwę zmiennej na kilka innych sposobów (które są właściwe w niektórych sytuacjach): `phone_number` lub `phone-number`, najczęściej jednak w JavaScripcie używamy pisowni `camelCase`.

## Tablice. push(), indeksy i modyfikacja elementów | Tworzymy listę zadań

---

Ok, więc potrafimy już utworzyć nową zmienną, by przechować jej wartość w naszym kodzie, potrafimy też tę wartość zmodyfikować/ nadpisać. Natomiast posiadanie tylko jednej zmiennej `task`, którą będziemy ciągle modyfikować, jest bardzo niepraktyczne i nie do tego dążymy. Chcemy utworzyć listę zadań *(masz przecież dużo zadań do zrobienia w biurze, także związanych bezpośrednio z pracą ;-)*, do której będziemy mogli dodawać zadania, usuwać je, lub też wyświetlić listę zadań w całości!

Stwórzmy zatem najpierw pustą listę zadań, którą przypiszemy do nowej zmiennej:

```
let tasks = [];
```

Zauważ, że tym razem wartością zmiennej nie jest **ciąg znaków** (ang. `string`, czyli ciąg znaków ujęty w cudzysłów, jak w np.: "zrobić kawę"), tylko dwa nawiasy kwadratowe `[]`. Jest to **tablica** (ang. `array`), która jest niczym innym, jak kontenerem/ kolekcją/ listą różnych elementów, które znajdą się w środku.

Na razie nasza tablica/ lista `tasks` jest pusta (pomiędzy kwadratowymi nawiasami nie ma żadnych elementów). Gdybyśmy chcieli dodać do niej manualnie (ręcznie wpisując) nasze zadania, to moglibyśmy to zrobić np. na kilka sposobów:

1. Ręcznie wpisujemy każde zadanie jako ciągi znaków ujęte w cudzysłów i oddzielone przecinkiem:

```
tasks = [ "zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];
```

2. Używamy wbudowanej metody `push()`, która dodaje zadania wpisane między nawiasami do istniejących już wcześniej zadań w tablicy *(Uwaga! Jeśli wcześniej użyłeś kodu z poprzedniego akapitu, to w poniższe zadania już są zawarte w zmiennej `tasks`, dlatego najpierw wyczyść zmienną przypisując do niej pustą tablicę: `tasks = []`)*:

```
tasks.push("zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl");
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

## Komentarze

Czasami chcemy dodać jakąś dodatkową informację do naszego kodu, ale też nie chcemy, by program uznał tego za kod sam w sobie i nie wywołał go lub też nie spróbował go wywołać, co doprowadziłoby najprawdopodobniej do błędu. Do tego właśnie służą **komentarze** - tekst, który poprzedzają te symbole: `//`:

```
// to jest komentarz, program wie, że ten tekst nie jest kodem, więc go nie wywoła

// mogę np. ostrzec innego programistę, by nie używał kodu poniżej:
console.error("Wywołanie tego kodu było (i w sumie jest) błędem, kolego... Wiem, że chcesz go przetestować w konsoli 😈");

// mogę też napisać jakiś motywacyjny cytat:
// "Wszystko, co może zostać napisane w JavaScript, ostatecznie zostanie napisane w JavaScript."
// Douglas Crockford
```

Dzięki komentarzom możemy też "wyłączyć" pewien fragment kodu, czyli go "zakomentować", jeśli z jakiegoś powodu nie chcemy, by akurat zadziałał. Wystarczy, że zakomentujemy kod w następujący sposób:

```
// addTask("To zadanie nie zostanie dodane");
```

Możemy też tworzyć komentarze wielolinijkowe, umieszczając dowolny wielolinijkowy tekst (wraz z pustymi wierszami) pomiędzy `/* */` w ten sposób:

```
/*
Dlaczego warto uczyć się JavaScript?

Odpowiedzi na to pytanie możemy doszukać się
w wypowiedzi Douglasa Crockforda:

"Wszystko, co może zostać napisane w JavaScript,
ostatecznie zostanie napisane w JavaScript."
*/
```

## Tablice. splice() i usuwanie elementów | Usuwanie zadań z listy

Ok, więc inicjujemy listę zadań, dodajemy i przechowujemy zadania w kodzie, czas więc na kolejną funkcjonalność - usuwanie zadania z listy. Powinniśmy być w stanie usunąć zadanie, które jest już nieaktualne albo wykonane z naszej listy, żeby się nie rozpraszać oraz widzieć nasz progres.

Usunięcia konkretnego elementu z tablicy można dokonać na kilka sposobów. Ze względu na to, że wiemy, czym są indeksy oraz nasza lista pozwala na wyświetlenie indeksów każdego z zadań, najłatwiej będzie sprawdzić, jaki jest indeks zadania, które chcemy usunąć, a potem użyć wbudowanej metody tablicy `splice()` w ten sposób:

```
// załóżmy, że chcemy usunąć zadanie o indeksie 4:

tasks.splice(4, 1);
```

Metoda `splice()` w tym przypadku potrzebuje przekazania do niej dwóch argumentów:

- pierwszy (w naszym przykładzie jest to `4`) jest indeksem elementu, który chcemy usunąć,
- drugi z kolei wskazuje na ilość elementów, które chcemy usunąć, zaczynając od tego indeksu (my chcemy usunąć tylko jedno zadanie, więc napiszemy `1`).

Spróbuj usunąć drugie zadanie w konsoli (pamiętaj, że indeksem drugiego zadania jest... 1).

Metoda `splice()` służy nie tylko do usuwania pojedynczych elementów z tablicy.

Można z niej korzystać także, by usunąć ileś elementów zacznając od określonego indeksu:

```
let letters = ["a", "b", "c", "d", "e"];

// usuń 3 elementy, zaczynając od drugiego indeksu:
letters.splice(2, 3);

console.log(letters);
```

Ponadto, w przypadku usuwania elementów z tablicy, `splice()` nie tylko usuwa elementy z tablicy, modyfikując ją, ale także jednocześnie zwraca nową talicę, w której zawarte są usunięte elementy, którą to tablicę możemy np. przypisać do zmiennej:

```
let letters = ["a", "b", "c", "d", "e"];

// usuń 3 elementy, zaczynając od drugiego indeksu
// i przypisz usunięte elementy do nowej tablicy removedLetters: 
let removedLetters = letters.splice(2, 3);

console.log("letters:", letters);
console.log("removedLetters:", removedLetters);
```

To może być bardzo przydatne, jeśli chcemy później wykorzystać usunięte elementy, np. w powyższym przykładzie wypisaliśmy usunięte litery w konsoli - gdybyśmy ich nie zapisali w zmiennej, to zostałyby one utracone na zawsze.

Pamiętaj tylko, że jeśli usuniesz jeden element, to `splice()` zwróci ten jeden element, ale w tablicy! W związku z tym, gdybyś chciał/a zapisać samą wartość usuniętego elementu, to należy ją "wyciągnąć" za pomocą indeksu 0 ze zwróconej tablicy:

```
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

// usuń "sprawdzić maila" z listy zadań (indeks 1),
// przypisz usunięte zadanie do tablicy removedTasks,
// wyciągnij usunięte zadanie z tablicy removedTasks i przypisz do zmiennej removedTask:

let removedTasks = tasks.splice(1, 1); // zwraca tablicę
let removedTask = removedTasks[0]; // wyciągamy zadanie z tablicy

console.log("Usunięte zadania:", removedTasks);
console.log("Zadanie", removedTask, "zostało usunięte z listy...");
console.log("Zauktualizowane zadania po usunięciu zadania:", tasks);
```

## Tablice. splice() i dodawanie elementów | Dodawanie zadań w określonym miejscu na liście

---

Korzystając z metody `splice()` możemy też dodawać dowolną ilość elementów po określonym indeksie. Żeby to zrobić, musimy przekazać `splice()` co najmniej 3 argumenty (w ściśle określonej kolejności!):

1. liczba elementów do dodania, np. 3,
2. zamiast liczby elementów do usunięcia, jak w poprzednich przykładach, wpisujemy 0 (czyli zero elementów do usunięcia ;-),
3. od tego miejsca możemy kolejno zawrzeć elementy do dodania, np. 3 zadania ujęte w cudzysłów i oddzielone przecinkami (możemy też przekazać zmienną, do której wcześniej przypisaliśmy elementy do dodania, ale w tym przypadku jest mały haczyk, więc na razie nie omawiamy tej kwestii).

Zobacz, jak to wygląda w kodzie poniżej (i przetestuj w konsoli):

```
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

console.log(tasks); // 3 zadania

// dodaj 1 zadanie po "zrobić kawę" => przypisz zadanie do indeksu 1:
tasks.splice(1, 0, "podlać kwiatki na biurku");

console.log(tasks); // 4 zadania

// dodaj 3 nowe zadania po "sprawdzić maila" (czyli zaczynając od indeksu 3):

tasks.splice(3, 0, "zarejestrować dokumenty", "zamówić buty na Zalando", "ogarnąć w końcu, jak się liczy te indeksy w tablicach...");

console.log(tasks); // 7 zadań
```

Taki zabieg jest z kolei bardzo przydatny, jeśli chcemy dodać element/y nie na końcu tablicy, jak to robiliśmy metodą `push()`, tylko w jakimś określonym miejscu w środku, np. chcemy, by jakieś ważniejsze zadanie znalazło się przed tymi mniej ważnymi. 

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

## Podsumowanie Modułu 1. JavaScriptowy kod do zarządzania zadaniami w konsoli w całości (wersja 0 aplikacji)

Świetnie! Potrafimy tworzyć listę zadań, uzyskiwać dostęp do poszczególnych elementów z listy i modyfikować je, dodawać nowe elementy do listy/ tablicy oraz usuwać je za pomocą poleceń JavaScript, których się nauczyliśmy (mam nadzieję 😏).

*De facto* powstała już mała pseudo aplikacja (na razie jeszcze trochę nieudolna) - uznajmy zatem, że jest to `wersja 0` naszej aplikacji. Zanim przejdziemy do kolejnych zagadnień i rozbudowywania aplikacji oraz zmodyfikowania jej w taki sposób, by pracowało się z nią przyjemniej, przypomnijmy sobie cały kod, którego możemy używać do zarządzania naszymi zadaniami w konsoli na tym etapie:

```
// czyścimy konsolę z całego dotychczasowego kodu i komunikatów:
console.clear();

// inicjujemy pustą listę zadań:
let tasks = [];

// żeby wyświetlić listę zadań w całości, używamy console.log():
console.log("tasks:", tasks);

// żeby dodać zadanie (na końcu listy), używamy metody push(), np.:
tasks.push("zrobić kawę");
tasks.push("zajrzeć na stronę kodujemywbiurze.pl");
tasks.push("sprawdzić maila");

console.log("tasks:", tasks);

// żeby usunąć zadanie z listy, sprawdzamy jego indeks,
// a potem używamy metody splice() w ten sposób:
tasks.splice(2, 1); // usuwamy "sprawdzić maila" (indeks 2)

console.log("tasks:", tasks);

// żeby dodać zadanie w określonym miejscu (indeksie),
// używamy metody splice() w ten sposób:
// dodajemy "podlać kwiatki" po "zrobić kawę"(indeks 1):
tasks.splice(1, 0, "podlać kwiatki");

console.log("tasks:", tasks);

// żeby wyświetlić całą listę zadań,
// ale tak, by każde było w nowej linijce poprzedzone indeksem,
// używamy pętli for:
for (let i = 0; i < tasks.length; i++) {
	console.log(i, tasks[i]);
}

// BONUS:
// żeby usunąć wszystkie zadania...
// przypisujemy do zmiennej tasks pustą tablicę ;-)
tasks = [];

console.log("tasks:", tasks);
```

PS. możemy też usuwać kilka zadań od określonego indeksu oraz dodawać kilka zadań od określonego indeksu dzięki metodzie splice(), o czym wspominaliśmy wcześniej, aczkolwiek nie ująłem tego w podsumowującym ten etap kursu kodzie, ponieważ raczej nie będziemy działać w ten sposób. Ale pamiętaj, że masz również taką możliwość. Pamiętasz, jak to zrobić? 😅

Zanim przejdziesz dalej:

- pobaw się tymi poleceniami w konsoli, tworząc swoją listę zadań (nie za dużą),
- spróbuj opowiedzieć koleżance/ koledze z biura, co robią poszczególne metody,
- sprawdź, co i ile pamiętasz i w razie czego przejrzyj wybrane lekcje jeszcze raz.

# Moduł 2. Zarządzanie zadaniami za pomocą własnych funkcji. Przechowywanie kodu w pliku. Aplikacja w wersji 1.0

---

## Programowanie imperatywne a deklaratywne (funkcyjne) | Jest dobrze, ale chcemy lepiej. Tworzymy własne zrozumiałe polecenia

---

Aplikacja działa, ale tak naprawdę zarządzamy nią za pośrednictwem poleceń z języka JavaScript, które poznaliśmy i które musimy zapamiętać... Podejrzewam, że z tym zapamiętaniem każdej metody może być na razie problem... 

*Podejrzewam też, że możesz się zastanawiać: "Co to za aplikacja? Gdzie są przyciski, pola do wpisywania zadań, checkboxy do odhaczania i ładna lista zadań?". Jeśli takie pytanie przeszło Ci przez myśl, to bardzo dobrze - to znaczy, że chcesz więcej! Powiem więcej - zrobisz to i nawet stosunkowo niedługo, ale jest jeszcze trochę nauki przed Tobą. W tym celu będziesz musiał/a poznać nie tylko kolejne podstawowe zagadnienia JavaScript, ale także minimalne podstawy HTML i CSS oraz sposoby na dostęp JavaScript do HTML (DOM). Wszystko w swoim czasie.*

Na razie natomiast będziemy zarządzać zadaniami w konsoli za pomocą poleceń, ale... nie tych, które wypisaliśmy powyżej 😅. Kod, którego używamy na razie do zarządzania naszymi zadaniami, jest kodem w stylu imperatywnym. **Styl programowania imperatywnego skupia się głównie na tym, w jaki sposób możemy osiągnąć określony rezultat za pomocą kodu**. Taki styl wymaga **dużej ilości komentarzy** (spójrz, ile ich jest w dotychczasowym kodzie), żeby zrozumieć, co się dzieje w kodzie. Taki kod jest **mało czytelny** nawet dla osoby, która go stworzyła.

**W kolejnych lekcjach natomiast stworzymy** swoje **własne, czytelne i zrozumiałe polecenia** w stylu deklaratywnym (funkcyjnym), jak np.:

- `showTasks()`, które wyświetli zadania,
- `addTask()`, za pomocą którego będziemy dodawać zadanie,
- `deleteTask()`, za pomocą którego będziemy usuwać zadania,
- i wiele innych!

Nazwy z powyższej listy wyglądają chyba lepiej i łatwiej je zapamiętać, niż np. `tasks.push()`, `tasks.splice()` itd.? Też tak myślę. To jest przykład stylu programowania deklaratywnego (funkcyjnego). **Styl programowania deklaratywnego (funkcyjnego) skupia się na tym, by sama składnia (nazwy zmiennych, funkcji, ale także metod) mówiła sama za siebie (co się dzieje w kodzie) oraz by szczegóły działania poszczególnych fragmentów były określone i wyizolowane gdzie indziej**. W programowaniu funkcyjnym tworzymy dużo małych i dobrze nazwanych funkcji, z których powstaje program.

Innymi słowy, nawet jeśli nie masz żadnego pojęcia o programowaniu (a Ty już jakieś masz 😎), to jeśli zobaczysz w kodzie taki zapis: `showTasks()`, to raczej domyślisz się, że to "coś" ma coś wspólnego z pokazywaniem/ wyświetleniem zadań; na pewno jest to bardziej czytelne od `console.log(tasks)` czy `splice(1, 0, "coś tam")`.

Dlatego za chwilę poznamy kolejne fundamentalne zagadnienie w programowaniu - **funkcje** - i **"opakujemy" nasze dotychczasowe trudne do zapamiętania JavaScriptowe metody** *(ale i tak część z nich trzeba będzie zapamiętać, chociaż wystarczy po prostu często pisać kod)* **we własne, łatwe, zrozumiałe i reużywalne polecenia**. W ten sposób powstanie wersja 1.0 naszej aplikacji.

Do dzieła!

## Funkcje | Wyświetlamy listę zadań (znowu), ale tym razem za pomocą własnej funkcji `showTasks()`

---

Jak wspomniałem w poprzednim podrozdziale, zarządzanie naszymi zadaniami (naszą aplikacją) za pomocą "czystych" JavaScriptowych poleceń typu `tasks.push("nowe zadanie")` lub `splice(1, 0, "coś tam")` działa, ale programiści "opakowują" taki imperatywny (patrz poprzedni podrozdział) kod, z którego często korzystamy (a będziemy często dodawać zadania do listy oraz je usuwać), w reużywalne "kawałki" kodu, które nazywają się **funkcjami**.

**Funkcja to pewien zakmnięty w sobie fragment kodu o zrozumiałej, czytelnej nazwie, który wykonuje pewne zadania/ polecenia w nim zdefiniowane za każdym razem, kiedy go wywołamy.**

Tak naprawdę, już korzystaliśmy z wbudowanych funkcji (a dokładniej metod - nie przejmuj się na razie tym rozróżnieniem), tj. `console.log()` lub `tasks.push()`. Zauważ, że w odróżnieniu od zmiennych, **funkcja zawiera nawiasy tuż po swojej nazwie**.

Spróbujmy zatem stworzyć naszą pierwszą funkcję, by zrozumieć, o co w tym chodzi. Stworzymy funkcję, która będzie wyświetlała nam listę wszystkich naszych zadań.

Owszem, wcześniej już wyświetlaliśmy nasze zadania poprzez wpisanie w konsoli zmiennej `tasks` lub poprzez wywołanie funkcji `console.log(tasks)`, ale teraz zrobimy to w sposób bardziej profesjonalny, zgodnie z paradygmatem programowania funkcyjnego. "Opakujmy" zatem nasz wcześniejszy kod `console.log(tasks)` w funkcję:

```
function showTasks() {
  console.log(tasks);
}
```

**UWAGA!** Jeśli wyczyściłeś konsolę lub przeładowałeś stronę, to nie mamy już dostępu do globalnej zmiennej `tasks`, należy więc na nowo ją zadeklarować, odkomentowując poniższy kod i wpisując go przed definicją funkcji:

```
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];
```

W powyższym kodzie używając słowa kluczowego `function` zdefiniowaliśmy nową funckję o nazwie `showTasks`, która... (jak sama nazwa wskazuje) wyświetla listę naszych zadań. 

Jak widzisz, polecenie `console.log(tasks)`, którego wcześniej używaliśmy osobno, zostało "opakowane" w funkcję, której nazwa ewidentnie wskazuje na to, czego możemy się od niej spodziewać, w związku z czym ktoś, kto nie widział całości naszego kodu, ani nie wie, co jest w środku tej funkcji, raczej się domyśli, co ta funkcja robi i sam będzie mógł jej użyć.

Ponadto, jeśli wrócisz do swojego kodu za kilka dni lub tygodni, to mimo że nie będziesz pamiętał/a, co znajduje się w środku funkcji `showTasks()` i nie będziesz nawet pamiętał/a, jak wyświetlić coś w konsoli za pomocą `console.log()`, to zdecydowanie zrozumiesz, co robi funkcja `showTasks()`. Uwierz mi, że **programiści o wiele częściej dosłownie czytają kod, niż go piszą**, dlatego trafne nazwy zarówno zmiennych, jak i funkcji, niezwykle ułatwiają jego zrozumienie, mimo że nie zna się/ nie pamięta szczegółów.

Żeby nasza funkcja zadziałała i wyświetliła nasze zadania, musimy ją wywołać poprzez wpisanie w konsoli `showTasks()` i kliknąć Enter. Dzięki temu, nie musimy pamiętać, jak wyświetlić nasze zadania w konsoli, wystarczy wywołać funkcję `showTasks()`.

Na pierwszy rzut oka może się wydawać, że wykonaliśmy zbędną pracę - definicja funkcji zajęła nam 3 linijki kodu, a `console.log(tasks)` zajęłoby tylko jedną! Ale, po pierwsze, uczyniła nasz kod bardziej zrozumiałym, czytelnym i reużywalnym, a po drugie, większość funkcji będzie bardziej rozbudowana, będą tam miały miejsce różne procesy, być może będą tam w środku też inne funkcje i tymczasowe (lokalne) zmienne, więc w tym przypadku oszczędność czasu będzie ogromna.

Poza tym, musieliśmy tylko raz się zastanowić nad tym, jak wyświetlić nasze zadania, tworząc funkcję i nie będziemy musieli znowu się nad tym zastanawiać, co miałoby miejsce, gdybyśmy każdorazowo pisali `console.log(tasks)`.

Warto też zwrócić uwagę na samą konstrukcję funkcji:

- zaczyna się ona od słowa kluczowego `function`,
- potem po spacji jest jej nazwa (która jeśli zawiera zlepek słów, to powinna być napisana `camelCasem`),
- potem bez spacji po nazwie dodajemy nawiasy `()` (później dowiemy się, do czego służą, chociaż... być może już zwróciłeś/aś uwagę, jak działały nawiasy w wcześniejszych funkcjach/metodach),
- a potem mamy dwie klamry `{ }`, pomiędzy którymi możemy pisać wiele linijek kodu - to, co znajduje się pomiędzy klamrami, nazywa się ciałem funkcji.

Moglibyśmy powyższą funkcję zapisać także w jednej linijce (ponieważ jest mała):

```
function showTasks() { console.log(tasks); }
```

aczkolwiek taki zapis nie jest czytelny, dlatego lepiej używać wielolinijkowego formatu.

Ogólnie funkcje możemy zadeklarować też na kilka innych sposobów, ale na razie wystarczy nam ten jeden.

Zanim stworzymy kolejne funkcje, chciałbym zwrócić Twoją uwagę na nazewnictwo funkcji. Pamiętasz, że nazwa zmiennej powinna odzwierciedlać to, jaką wartość przechowuje? Z funkcjami jest podobnie, tyle że funkcje nie reprezentują jakieś wartości, tylko czynności - funkcja coś "robi". W związku z tym, jeśli funkcja powinna wyświetlić zadania, to należy ją nazwać `showTasks` lub `displayTasks`, albo też `logTasks`. Te nazwy brzmią jak komendy: "pokaż/ wyświetl zadania!" i tak właśnie jest z funkcjami - są one poleceniami dla komputera/ przeglądarki.

## Funkcje. Zwracanie wartości i słowo kluczowe return

Owszem, funkcja może również zwracać wartość *(tak jak metoda `splice()` podczas usuwania elementu z tablicy zwracała także tablicę zawierającą listę usuniętych elementów, pamiętasz?)*, np. w tym przypadku:

```
function calculateSum(a, b) { // oblicz sumę
  // tworzymy lokalną zmienną sum,
  // która przechowuje wartość dodawania a i b:
	const sum = a + b;

	// wyświetlamy w konsoli wynik dodawania:
	console.log(a, "+", b, "=", sum);

  // zwracamy wynik, który można przypisać do zmiennej:
	return sum;
}

// teraz inicjujemy zmienną,
// do której przypisujemy wartość zwróconą przez calculateSum():
let sum = calculateSum(3, 5);

console.log("sum:", sum);
```

Zwrócona wartość jest wynikiem działania funkcji, więc funkcja musiała "coś zrobić", by "wyprodukować" wartość, którą zwraca.

## Błędy oraz wielolinijkowy kod w konsoli

---

Zanim przejdziemy dalej i utworzymy więcej customowych funkcji, chciałbym poruszyć kwestię pisania wielolinijkowego kodu w konsoli (np. w przypadku pisania funkcji, jak w wcześniejszym przykładzie), błędów oraz utracie kodu po odświeżeniu strony.

W związku z tym polecę też korzystanie z wbudowanej funkcjonalności Chrome i Edge o nazwie `snippets` do zapisywania kodu bezpośrednio w przeglądarce, dzięki czemu go nie utracimy. Są to ważne kwestie, które sprawią, że pisanie kodu w przeglądarce będzie bardziej przyjemne *(bez wątpienia najprzyjemniej pisze się kod w dedykowanych edytorach kodu, ale na razie w to nie wchodzimy, ponieważ na razie chcemy pobawić się kodem bez zbędnych konfiguracji i rozpraszaczy)*, mniej podatne na błędy oraz zapewni pewną funkcjonalność aplikacji, którą budujemy.

**UWAGA!** W zależności od przeglądarki, **może się okazać**, że żeby napisać kilkulinijkowy kod w konsoli (taki, jak w poprzedniej funkcji), musimy **zamiast Enter używać kombinacji klawiszy Shift+Enter**, żeby przejść do następnej linii, ponieważ wciśnięcie klawisza Enter w niektórych przypadkach może spowodować wywołanie tego kodu, który już napisałeś/aś, co najprawdopodobniej wywoła błąd w konsoli, ponieważ kod nie jest ukończony.

Jeśli to się zdarzy (pojawi się komunikat błędu) i po ponownym poprawnym wpisaniu kodu nie uda się zainicjować funkcji (ponieważ została niepoprawnie zaincjowana niekompletnym, przedwcześnie wywołanym kodem), odśwież stronę, co wyczyści pamięć konsoli i wpisz kod jeszcze raz.

Ale pamiętaj, że lista zadań `let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]` (oraz jakikolwiek inny kod) zniknęła, więc najpierw musisz ją ponownie wpisać, zanim napiszesz powyższą funkcję.

## Praca z plikami kodu w zakładce snippets w Chrome i Edge. Umieszczamy kod aplikacji w wersji 1.0 w pliku

---

Proponuję, byśmy skorzystali z **wbudowanej funkcjonalności (i zakładce) przeglądarek Chrome i Edge o nazwie `snippets` do zapisywania kodu w pliku bezpośrednio w przeglądarce** *(Mozilla nie ma tej funkcjonalności, dlatego nie polecałem pracy z tą przeglądarką podczas niniejszego kursu, ale mimo wszystko, jeśli korzystasz z Mozilli, możesz nadal pisać kod w konsoli, tylko uważaj na kilkulinijkowy kod)*! Jest to świetne narzędzie, o czym się zaraz przekonamy.

Żeby otworzyć *snippets*, musisz kliknąć *Sources*, które znajdują się tuż obok *Console*, a tam z rozwijanego menu wybrać zakładkę *Snippets*. Teraz możemy kliknąć ikonkę ze znakiem plus i napisem *New snippet*, co utworzy nowy plik z domyślną nazwą, którą możemy zmienić na np. `todo-app` *(pozostańmy przy tej nazwie, ponieważ będę jej używał w dalszych częściach tutoriala)*.

Ten plik będzie teraz zapisany w naszej przeglądarce i zawsze będziemy mieli do niego dostęp. Ponadto, plik ten możemy uruchomić w naszej konsoli, która będzie miała dostęp zarówno do pliku, jak i do zawartości strony (co nam przyda się w kolejnych kursach).

Możemy teraz przepisać do tego pliku dotychczasowy kod naszej aplikacji w wersji 1.0. Potrzebne nam są tylko zadeklarowanie zmiennej `tasks` oraz definicja poprzedniej funkcji `showTasks()`:

```
// todo-app file:

let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

function showTasks() {
  console.log(tasks);
}
```

## Uruchomienie pliku z snippets w konsoli przeglądarki

---

Jeśli zapisałeś/aś w konsoli w zakładce `Sources` plik `todo-app`, umieściłeś/aś w nim kod, który napisałem powyżej, oraz zapisałeś/aś ten plik (klikając `Ctrl+S`), to musisz teraz uruchomić ten plik, by konsola miała do niego dostęp *(na wszelki wypadek odśwież stronę ten jeden raz, by wyczyścić pamięć konsoli oraz wcześniej zadeklarowanej zmiennej `tasks`)*.

Aby uruchomić kod z pliku, kliknij w ikonkę trójkąta w dolnym prawym rogu lub użyć kombinacji `Ctrl+Enter`, by uruchomić nasz plik, otworzyć konsolę pod spodem pliku oraz przekazać funkcjonalności i zmienne w nim zdefiniowane do konsoli. To otwiera przed nami niesamowite możliwości!

Po automatycznym otwarciu się konsoli, wpisz do niej polecenie `showTasks()` oraz wywołaj go, klikając Enter. Przekonasz się, że funkcja zwróciła listę zadań zdefiniowanych w pliku `todo-app`: `(3) ['zrobić kawę', 'sprawdzić maila', 'zajrzeć na stronę kodujemywbiurze.pl']`.

Zwróć też uwagę na to, że po prawej stronie od komunikatów w konsoli wyświetla się też źródło tych komunikatów: nasz plik o nazwie `todo-app` oraz numer linijki kodu (po dwukropku), który generuje komunikat: `todo-app:6`. Jeśli klikniesz w ten link w konsoli, to podświetli Ci ona tę linijkę w kodzie w pliku. Dzięki temu wiemy dokładnie, co i gdzie się zadziało oraz ewentualnie gdzie szukać błędu w razie czego. Zresztą, dzięki temu wiemy też, że komunikat został wygenerowany przez plik, a nie przez np. jakąś funkcję zdefiniowaną w samej konsoli.

---

**UWAGA!**

**Będziemy teraz pisać kod zarówno w tym pliku *(tylko ten niezbędny dla aplikacji; w komentarzu w przykładach kodu zawrę ten zapis: `// todo-app file:`, który będzie odróżniał kod aplikacji od innego testowego kodu w konsoli)* oraz czasami w samej konsoli, by coś tam przetestować lub wywołać funkcje z pliku**.

**Pamiętaj, by po każdej zmianie w pliku za go za pomocą skrótu `Ctrl+S` oraz uruchomić klikając w ikonkę trójkąta w prawym dolnym rogu zakładki lub wciskając `Ctrl+Enter`**.

Będę jeszcze kilkakrotnie o tym przypominał, ale tylko do pewnego momentu. Jeśli zmieniłeś/aś kod, ale coś nie działa, sprawdź najpierw, czy zapisałeś/aś plik o uruchomiłeś/aś go, a dopiero potem szukaj ewentualnych błędów.

---

Możesz też nie korzystać z tej funkcjonalności i dalej pisać kod wyłącznie w konsoli, ale pamiętaj o sytuacjach, które opisałem powyżej, które mogą mieć miejsce i zakłócić Twoją pracę z kodem. No i jeśli będziesz pisać kod programu wyłącznie w konsoli, to utracisz go po przeładowaniu strony... Konsola jest dobra do testowania, pliki są dobre dla programów, które uruchamiamy i testujemy.

---

Dlaczego zasugerowałem odświeżenie strony zanim uruchomimy plik? Otóż dlatego, że być może w konsoli mieliśmy wcześniej zadeklarowaną zmienną `tasks`. W pliku również mamy tę zmienną, w związku z czym w pewnym momencie wartości w zmiennej mogłyby się "rozjechać", ponieważ teraz, kiedy pracujemy z plikiem, konsola ma dostęp zarówno do kodu w pliku, jak również w konsoli. Jeśli więc w jednym, albo w drugim miejscu zadeklarujemy taką samą zmienną, to napisze ona wcześniejszą. Dlatego trzeba na to uważać.

Ponadto, **jeśli pracujemy w konsoli z otwartym plikiem, zmodyfikujemy plik, zapiszemy go/ zmiany (`Ctrl+S`) oraz uruchomimy (ikonka trójkąta lub `Ctrl+Enter`), to poprzednie zmienne, których używaliśmy w konsoli, zostaną nadpisane zgodnie z kodem w pliku**!

Np.: w pliku tworzymy listę z 3 zadaniami, uruchamiamy plik w konsoli, widzimy, że są 3 zadania, potem w konsoli dodajemy kolejne 2 zadania do pliku, sprawdzamy, że teraz mamy 5 zadań, ale potem zmieniamy jakiś kod w pliku i uruchamiamy go jeszcze raz, to teraz, kiedy sprawdzimy listę zadań, to ponownie zobaczymy te pierwotne 3 zadania, mimo że wcześniej dodaliśmy kolejne 2 - zostały one nadpisane przez ponownie uruchomiony kod!

Super! Rozwialiśmy różne wątpliwości, wprowadziliśmy nowe mega narzędzie, idziemy dalej! **Od teraz będziemy działać w ten sposób - będziemy pisać i uzupełniać kod w pliku i wywoływać go w konsoli**.

## Funkcje. Argumenty, funkcje wewnątrz funkcji | Funkcja dodająca zadanie `addTask()`

---

Wcześniej dodawaliśmy nasze zadania używając tego kodu: `tasks.push("jakieś tam zadanie")`. Zwróć uwagę na to, że `"jakieś tam zadanie"` znajduje się w nawiasach funkcji, w związku z tym `"jakieś tam zadanie"` zostało przekazane metody `push()` jako argument (pewien zasób/ wartość/ informacja), który zostanie przez tę funkcję wykorzystany.

Nasza (na razie jedyna) funkcja `showTasks()` nie ma żadnych argumentów w nawiasach, ponieważ ich nie potrzebuje - ma dostęp do zadań, gdyż zmienna `tasks` istnieje już w naszym kodzie i zawsze mamy do niej dostęp z poziomu każdej funkcji (innymi słowy, jest **zmienną globalną**). Czyli wiemy już, że funkcja może w ogóle nie mieć żadnych argumentów.

Wyobraźmy natomiast, że chcemy dodać nowe zadanie, które nie istnieje nigdzie w kodzie w postaci zmiennej, wiemy także, że dysponujemy funkcją o nazwie `addTask()` *(za chwilę ją napiszemy, ale na razie wyobraźmy, że ktoś już ją napisał)*. Jak możemy to zrobić?

W tym przypadku należałoby tej funkcji przekazać pewną informację (w naszym przypadku będzie to nowe zadanie), czego możemy dokonać poprzez wpisanie naszego zadania w nawiasach tej funkcji w następujący sposób: `addTask("zrobić kawę po raz drugi")`.

Chciałbym też zauważyć, że taki kod zadziała tylko w tym przypadku, jeśli funkcja `addTask()` oczekuje jakiegoś argumentu, czyli że funkcja ta została napisana w pewien określony sposób, który zaraz zobaczymy (pojawi się tutaj też kilka nowych rzeczy):

```
function addTask(newTask) {

	// w poniższej linijce dodajemy zadanie do listy zadań,
	// w taki sam sposób, jak robiliśmy to wcześniej:
	tasks.push(newTask);

	// dodatkowo wyświetlamy komunikat w konsoli o nowo dodanym zadaniu:
	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	// wyświetlamy zaktualizowaną pełną listę zadań,
	// używając zdefiniowanej wcześniej funkcji showTasks():
	showTasks();
}
```

Przeczytaj ten powyższy kod i spróbuj najpierw intuicyjnie zrozumieć, co się w nim dzieje oraz dopisz go do pliku `todo-app` na samym końcu (ale przepisz własnoręcznie, nie kopiuj tego kodu!). No i oczywiście zapisz zmiany skrótem `Ctrl+S`, a potem kliknij ikonkę trójkąta lub kolejny skrót `Ctrl+Enter`, by kod zadziałał w przyszłości w konsoli.

Po pierwsze, zwróć uwagę, że po nazwie funkcji `addTask` w nawiasach mamy zawarty argument `newTask`. Tak naprawdę `newTask` jest zmienną, która jeszcze nie ma żadnej przypisanej wartości, czyli jest to "puste podpisane pudełko", swego rodzaju pośrednik, do którego dopiero później coś włożymy - a dokładnie w momencie wywołania funkcji w ten sposób: `addtask("to zadanie jest właśnie tą wartością, która zostanie przypisana do argumentu newTask")`.

Mimo że w samej definicji funkcji `addTask` argument `newTask` nie ma żadnej wartości, to możemy go wykorzystać w kodzie funkcji tak, jakby tę wartość miał (co też robimy w dalszej części kodu funkcji: `tasks.push(newTask)` - tak naprawdę mówimy przeglądarce, że cokolwiek by się znalazło z zmiennej `newTask`, powinno zostać dodane do `tasks`).

Innymi słowy, wyobraź sobie, że mówisz koleżance z biura: *"Na biurku leży żółty segregator, który na razie jest pusty, ale później przyjdzie sekretarka i włoży do tego segregatora stertę dokumentów. Wtedy weź segregator i włóż go do szafy"*. Koleżanka nie musi wiedzieć, jakie dokumenty znajdą się w segregatorze. Wie tylko, że jak się tam znajdą, trzeba odłożyć segregator. Gdyby wspomniana koleżanka bardzo się nudziła, mogłaby wziąć pusty segregator i włożyć go do szafy, mimo że nie ma w nim żadnych dokumentów, by przećwiczyć tę czynność na przyszłość.

Po drugie, zauważ, że w funkcji `addTask()` nie tylko dodajemy zadanie do listy, ale także wyświetlamy komunikat w konsoli o tym, że zostało dodane nowe zadanie, przy czym wyświetlamy także samo zadanie. Dzieje się tak dlatego, że tym razem przekazaliśmy `console.log()` zarówno pewną wiadomość: `"Do Twoich zadań zostało dodane nowe zadanie:"`, a potem po przecinku przekazaliśmy samą zmienną, reprezentującą nowe zadanie, w związku z czym konsola wyświetli wiadomość oraz wartość zmiennej przechowującej nowe zadanie (treść nowego zadania):

```
console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);
```

Po trzecie, po dodaniu nowego zadania i wyświetleniu komunikatu, wywołujemy funkcję `showTasks()`, którą wcześniej napisaliśmy, dzięki czemu konsola automatycznie wyświetli zaktualizowaną listę zadań z nowo dodanym zadaniem na końcu. Widzisz, mówiłem, że funkcje przydają się do ponownego wykorzystania! W funkcji `addTask()` zawarliśmy i wywołujemy inną naszą funkcję `showTasks()` (a w sumie wywołujemy też wbudowaną funkcję `console.log()`).

Być może nawet nie pamiętasz już, co dokładnie znajdowało się w funkcji `showTasks()`, ale na pewno wiesz, co robi i z tego skorzystałeś/aś! Właśnie na tym polega korzyść z tworzenia dobrze nazwanych reużywalnych funkcji!

Dzięki temu, że dodaliśmy automatyczne wyświetlenie zaktualizowanej listy zadań, nie musimy za każdym razem po dodaniu nowego zadania wywoływać ręcznie dodatkowo `showTasks()`, żeby wyświetlić naszą listę. Widzisz, ile może się dziać w jednej funkcji!

Ok, dopisz więc do pliku `todo-app` kod nowej funkcji `addTask()`, ale bez moich komentarzy (to te linijki, które zaczynają się od `//`, pamiętasz?), zapisz plik (tak jak zwykle za pomocą `Ctrl+S`) i uruchom go klikając ikonkę trójkąta lub używając skrótu `Ctrl+Enter`.

Teraz możemy dodawać zadania poprzez wywołanie funkcji `addTask` z argumentami (poćwicz to w konsoli):

```
addTask("sprawdzić Facebooka");
addTask("wyskoczyć do sklepu po jogurt");
addTask("położyć jogurt na grzejniku, by się zacieplił");
```

Jeśli wszystko poszło zgodnie z planem, to za każdym razem po dodaniu zadania, wyświetla Ci się komunikat oraz coraz to dłuża lista - ileż to my mamy do zrobienia dzisiaj w biurze!

## Usuwanie zadań z listy za pomocą funkcji `deleteTask()` i `deleteAllTasks()`

---

Pamiętasz, jak usuwaliśmy zadania za pomocą metody `splice()`? Oczywistym jest, że nie będziemy więcej usuwać elementów bezpośrednio w ten sposób, tylko napiszemy dedykowaną reużywalną funkcję. No bo kto by pamiętał za każdym razem, jakie argumenty i w jakiej kolejności mamy przekazać do metody `splice()`? Zresztą, kto by w ogóle pamiętał, jak nazywa się ta metoda.

Stwórzmy więc funkcję `deleteTask(index)`:

```
function deleteTask(index) {
  // usuwamy 1 zadanie zlokalizowane pod przekazanym indeksem,
	// w taki sam sposób, jak robiliśmy to wcześniej:
  tasks.splice(index, 1);

	// wyświetlamy zaktualizowaną listę zadań:
	showTasks();
}
```

Po przepisaniu tej funkcji do konsoli, spróbuj usunąć kilka zadań, uprzednio sprawdzając, jakie indeksy chcesz usunąć.

Spróbujmy teraz stworzyć funckję o nazwie `deleteAllTasks()`, która usuwa od razu wszystkie zadania. Najłatwiej jest po prostu przypisać do zmiennej `tasks` pustą tablicę:

```
function deleteAllTasks() {
  tasks = [];

	console.log("Wszystkie zadania zostały usunięte...");

	showTasks();
}
```

- Przepisz te nowe funkcje do pliku, zapisz go i uruchom, a potem przetestuj,
- usuwając wybrane zadania za pomocą `deleteTask()`,
- dodając nowe zadania za pomocą `addTask()`,
- a ostatecznie usuwając wszystkie zadania za pomocą `deleteTasks()`.

## Podsumowanie Modułu 2. Podstawy podstaw za nami! Kompletny kod aplikacji w wersji 1.0 z funkcjami zapisany w pliku

---

No teraz nasza aplikacja jest już naprawdę zaawansowana! Przekształciliśmy nasze wcześniejsze czysto JavaScriptowe polecenia we własne reużywalne funkcje o bardziej "ludzkich" nazwach. Teraz będzie nam znacznie przyjmniej i łatwiej zarządzać naszymi zadaniami!

A przy okazji zobacz, ile już wiesz o JavaScript:

- czym jest konsola
  - jak pisać i wywoływać kod w konsoli,
	- jak zapisać plik z kodem JavaScript w przeglądarce w `snippets`,
	- jak zrobić działającą aplikację w swojej przeglądarce!
- czym jest zmienna
  - jak możemy ją zadeklarować,
	- jak przypisujemy do niej wartość,
	- jak możemy tę wartość zmienić,
	- jak nadać zmiennym dobre nazwy,
- czym jest tablica
  - jak dodać element do tablicy,
	- jak usunąć element z tablicy,
	- jak sprawdzić długość tablicy,
	- jak uzyskać dostęp do określonego elementu w tablicy za pomocą indeksu,
	- jak nadpisać wartość tego elementu,
- czym jest funkcja
  - jak ją deklarujemy i wywołujemy,
	- jak możemy przekazać funkcji pewne dane,
	- jak tworzyć reużywalne funkcje i wywoływać je w innych funkcjach,
	- jak nadać funkcjom dobre nazwy,
- czym jest pętla `for`
  - jak wyświetlić wszystkie elementy tablicy po kolei,
	- jak wykonać jakąś czynność (wywołać funkcję) określoną ilość razy 

**Gratuluję!**

Spróbuj teraz odpowiedzieć swoimi słowami na wszystkie powyższe pytania, by sprawdzić, co umiesz, a co jeszcze tak nie do końca.

Poniżej znajduje się cały dotychczasowy kod naszej aplikacji, który powinien znaleźć się w pliku `todo-app` zapisanym w zakładce `snippets` *(który możemy też skopiować i wkleić do konsoli, jeśli nie zapisywaliśmy kodu w pliku - pamiętaj tylko, by odświeżyć stronę, żeby usunąć z konsoli dotychczasowy kod)*.

```
// czyścimy konsolę z całego dotychczasowego kodu i komunikatów:
console.clear();

// inicjujemy pustą listę zadań:
let tasks = [];

function showTasks() {
  console.log("tasks:", tasks);
}

function addTask(newTask) {
	tasks.push(newTask);

	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	showTasks();
}

// możemy też dodawać zadania do określonego indeksu,
// korzystając z wcześniejszego kodu wersji 0:

function addTaskAtIndex(index, newTask) {
  tasks.splice(index, 0, newTask);

	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	showTasks();
}

// poniższa funkcja wyświetla zadania jedno po drugim;
// nie utworzyliśmy poniższej funkcji w kursie,
// ale użyliśmy jej wcześniej w kodzie wersji 0:

function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(i, tasks[i]);
	}
}

function deleteTask(index) {
  tasks.splice(index, 1);

	showTasks();
}

function deleteAllTasks() {
  tasks = [];
	
	console.log("Wszystkie zadania zostały usunięte...");
	
	showTasks();
}
```

Możesz teraz:

- dodawać zadania na koniec listy za pomocą funkcji `addTask("jakieś zadanie")`,
- wstawiać zadania w określonym miejscu (indeksie) za pomocą `addTaskAtIndex(index, newTask)`,
- usuwać zadania, sprawdzając uprzednio ich indeks, np. `deleteTask(3)`,
- wyświetlić swoje zadania w konsoli, wywołując `showTasks()` lub `loopTasks()`,
- wyczyścić/ zresetować listę za pomocą `deleteAllTasks()`.

## Czym się różni kod aplikacji w wersji 1.0 (Moduł 2.) od 0 (Moduł 1.) oraz co dalej?

---

Zwróć uwagę na to, czym powyższy kod z pliku różni się od kodu, którego używaliśmy w wersji 0. *De facto* robi on to samo, ale:

- wcześniejszy imperatywny kod ("gołe" polecenia JavaScript) wraz z komentarzami został przekształcony w samoopisujące się funkcje, których nazwy wskazują na to, co robią,
- nie musimy już wszędzie ręcznie wywoływać `console.log()`, by wyświetlić zadania, ani za każdym razem zastanawiać się, jakie argumenty przekazać do metody `splice()`, by usunąć zadanie,
- kod jest nie tylko bardziej zrozumiały, ale także bardziej czytelny, przejrzysty oraz pogrupowany i zformatowany,
- teraz możemy zarządzać naszymi zadaniami za pomocą zrozumiałych komend, których możemy nauczyć naszych współpracowników, ponieważ są napisane w "ludzkim języku" - nie muszą oni rozumieć kodu, który kryje się za tymi poleceniami,
- no i kod został zapisany w pliku w przeglądarce, w związku z tym nie zniknie, jak kod pisany bezpośrednio w konsoli; poza tym, łatwiej jest go modyfikować oraz tworzyć kolejne wersje programu w nowych plikach (co też właśnie zrobimy 😏).

Gratuluję jeszcze raz!

Ale...

Na razie nasze zadania (nie kod!) są przechowywane w przeglądarce tylko dopóki nie zresetujemy tej strony lub nie zmienimy czegoś w pliku `todo-app`, a potem nie zapiszemy tego pliku (`Ctrl+S`) i nie uruchomimy go w konsoli. Dzieje się tak dlatego, że po odświeżeniu strony lub po ponownym uruchomieniu pliku, plik zgodnie z zawartymi poleceniami czyści konsolę (`console.clear()`), a potem przypisuje do zmiennej `tasks` pustą tablicę.

Jest to w pewnym sensie dobre, ponieważ jutro nie przytłoczy Cię w pracy nadmiar zapisanych (i niezrealizowanych) zadań! Aczkolwiek fajnie by było, gdyby nasze zadania pozostawały zapisane tak długo, jak chcemy. Żebyśmy mogli nagle zamknąć przeglądarkę lub tę stronę (żeby przełożony nie zobaczył), a potem otworzyć ją znowu i mieć dostęp do naszych ważnych zadań!

Więc możemy to zrobić i zrobimy w kolejnej części tutoriala. Będzie to wiedza bardziej zaawansowana od tego, co zrobiliśmy dotychczas (wykorzystamy wbudowaną funkcjonalność przeglądarki `localStorage`), dlatego też stworzymy kolejny plik, w którym będziemy modyfikować naszą aplikację, dzięki czemu... będziemy mieli 2 aplikacje (2 pliki z różnymi aplikacjami - nie wliczając kodu wersji 0)!

Do dzieła!

# Moduł 3. Przechowywanie zadań w Local Storage. Aplikacja w wersji 2.0

---

## localStorage | Zapisujemy oraz pobieramy zadania w przeglądarce za pośrednictwem localStorage

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

```
localStorage.setItem("nazwaKlucza", "wartośćKlucza");
```

`setItem()` jest jedną z metod obiektu `localStorage`, dzięki której możemy przypisać wartość do jakiegoś klucza, podobnie jak przypisujemy wartość do zmiennej, tyle że zarówno nazwa klucza, jak i jego wartość mają być ujęte w cudzysłów.

Spróbuj zapisać lub zaktualizować swoje imię w `localStorage` w ten sposób:

```
localStorage.setItem("name", "TutajWpiszSwojeImię");
```

i kliknij Enter, po czym wpisz `localStorage` i znowu kliknij Enter, by zobaczyć, że nowy klucz jest teraz w obiekcie.

**Uwaga!** Metoda **`setItem()` zawsze nadpisuje poprzednią wartość klucza**. Jeśli dany klucz nie istniał wcześniej, zostanie utworzony, jeśli istniał - jego wartość zostanie nadpisana przez nową wartość.

Żeby **pobrać** jakiś klucz z `localStorage`, należy użyć metody `getItem()`, podając w nawiasach nazwę klucza w cudzysłowiu, np. tak:

```
localStorage.getItem("name");
```

Spróbuj pobrać zapisane przez siebie imię z `localStorage`.

Pobrane dane z `localStorage` możemy przypisać do zmiennej, by móc nimi operować w naszym programie. Można to zrobić w następujący sposób:

```
let name = localStorage.getItem("name");

console.log("Imię zapisane w localStorage:", name);
```

Żeby **usunąć** jakiś klucz (i odpowiednio jego wartość) z `localStorage`, trzeba użyć wbudowanej metody `removeItem()`, podając w nawiasach nazwę klucza w cudzysłowiu, np. tak:

```
localStorage.removeItem("name");

console.log(localStorage.getItem("name")); // konsola zwróci wartość null, co znaczy że nie ma takiej wartości
```

Spróbuj teraz usunąć klucz `name` z `localStorage`, a potem sprawdź, czy na pewno został usunięty.

## Dodawanie tablicy do localStorage (JSON.stringify()) | Zapisujemy nasze zadania w localStorage

---

Zapisanie bardziej złożonych struktur danych w `localStorage` wymaga dodatkowej czynności. Kiedy np. chcemy przechować lub nadpisać tablicę (a będziemy chcieli przechować tablicę z naszymi zadaniami), to musimy przekształcić ją na postać tekstową (stąd nazwa metody `stringify()`, czyli coś w rodzaju `przekształć w string (ciąg znaków)`) i przypisać do klucza:

```
localStorage.setItem("tasks", JSON.stringify(["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]))
```

Powyższy kod wygląda strasznie 😬, ale zaraz "rozbijemy" go na mniejsze polecenia i rozłożymy na czynniki pierwsze.

Zwróc uwagę, że do metody `setItem()` przekazaliśmy najpierw tak, jak wcześniej, nazwę klucza `"tasks"` w cudzysłowiu, natomiast drugim argumentem nie jest po prostu tablica, tylko tablica przekazana jako argument do metody `JSON.stringify()`, która zwraca tablicę w ciąg znaków.

Bardziej klarownym i czytelnym rozwiązaniem byłoby najpierw przypisać tablicę do zmiennej, a potem zmienną przekazać do `JSON.stringify()`:

```
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

localStorage.setItem("tasks", JSON.stringify(tasks));
```

Możemy też ten kod rozbić jeszcze bardziej:

```
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];
let tasksStringified = JSON.stringify(tasks);

localStorage.setItem("tasks", tasksStringified);
```

## Pobranie tablicy z localStorage (JSON.parse()) | Pobieramy nasze zadania z localStorage

---

Żeby pobrać tablicę z `localStorage` również musimy zastosować dodatkową metodę uzupełniającą `getItem()`, ponieważ tablica jest zapisana w postaci ciągu tekstowego. W związku z tym, musimy "opakować" metodę `getItem()` w `JSON.parse()` - metodę, która przekształci naszą tablicę z ciągu tekstowego z powrotem w JavaScriptową tablicę:

```
let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
```

Powyższy kod również wygląda strasznie 😬, więc podobnie "rozbijemy" go na mniejsze polecenia i rozłożymy na czynniki pierwsze.

Zwróć uwagę na liczbę nawiasów: ponieważ `localStorage.getItem("tasks")` zostało przekazane do `JSON.parse()` jako argument, w związku z tym zostało "opakowane" w dodatkowe nawiasy.

Tutaj również moglibyśmy zastosować bardziej czytelne rozwiązanie:

```
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

Utwórz zatem plik o nazwie `todo-app-local-storage` w zakładce `snippets` i zaczynamy przenosić do niego i uzupełniać kod z wersji 1.0. Zaczynamy!

Najpierw czyścimy konsolę, jak wcześniej:

```
// todo-app-local-storage app code:

console.clear();

// ...tu będziemy pisać kolejne liniki kodu
```

Teraz, zamiast deklarować zmienną `tasks` i przypisywać do niej pustą tablicę, zdefiniujmy funkcję `getTasksFromLocalStorage()`, której nazwa wskazuje na to, że będzie pobierać i zwracać zapisane zadania z `localStorage`. Funkcja ta musi nie tylko pobrać, ale i zwrócić nasze zadania, byśmy mogli potem zadeklarować zmienną `tasks` i przypisać do niej pobrane zadania podczas uruchomienia programu.

Identycznie działa każda aplikacja, która pobiera dane z bazy danych, np. kiedy uruchamiamy Messengera, to przez jakąś chwilę pobiera on pewną ilość danych z bazy - ostatnie konwersacje, nowe wiadomości itd.

```
// todo-app-local-storage app code:

// ...tutaj jest poprzedni kod w pliku

function getTasksFromLocalStorage() {
	// pobieramy tablicę zadań zapisaną w localStorage w postaci tekstowej:
	let storedTasksStringified = localStorage.getItem("tasks");

	// konwertujemy pobrane dane w JavaScriptową tablicę:
	let storedTasks = JSON.parse(storedTasksStringified);

	// zwracamy wartość:
	return storedTasks;
}

// zadeklarujmy zmienną tasks i przypiszmy do niej to,
// co zwróci funkcja getTasksFromLocalStorage():
let tasks = getTasksFromLocalStorage();

// funkcja showTasks() i loopTasks() pozostają bez zmian:
function showTasks() {
  console.log("tasks:", tasks);
}

function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(i, tasks[i]);
	}
}

// ...tu będzie kolejny kod
```

Przepisz powyższy kod do pliku, uruchom go i wpisz w konsoli, która się pojawiła, polecenie `showTasks()`. Co Ci się wyświetliło?

Jeśli zrobiłeś/aś wcześniej to, o co prosiłem (czyli po eksperymentach z `localStorage` usunąłeś/aś klucz `"tasks"`), to powinno Ci się wyświetlić `tasks: null`.

Co to znaczy? W JavaScript `null` jest specjalną wartością, która oznacza brak wartości. Klucz został usunięty z `localStorage`, więc jego wartość wynosi... nic. I to jest w porządku:

- jeśli są zadania lub też zadania zostały usunięte, ale klucz `"tasks"` jest nadal dostępny w `localStorage`, to funkcja `getTasksFromLocalStorage()` zwróci tablicę (pustą lub zawierającą zadania),
- jeśli z kolei klucz `"tasks"` został usunięty lub nie było go wcale, to funkcja zwróci `null`.

Jeśli po raz pierwszy odpalamy naszą aplikację na tej konkretnej stronie (pamiętasz, że `localStorage` przypisuje dane do konkretnego adresu url?), nigdy nie przechowywaliśmy tutaj zadań, w związku z czym ich wartość jest `null`. Podobnie jest w przypadku, gdy klucz został usunięty z `localStorage`.

No i mógłbyś/abyś zapytać: w czym problem? Funkcja zwróciła `null` i tyle.

Sprawdźmy zatem! Do kodu, który już masz w pliku, dodajmy zmodyfikowaną funkcję `addTasks`, która także wymaga utworzenia funkcji pomocniczej `updateTasksInLocalStorage()`, która będzie aktualizowała zadania w `localStorage`:

```
// todo-app-local-storage app code:

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

W tym celu musimy dodać mechanizm sprawdzający, czy wartość klucza `"tasks"` w `localStorage` jest tablicą (nieważne, czy pustą, czy też zawierającą zadania), czy też `null` i w tym drugim przypadku zamiast `null` funkcja powinna zwrócić po prostu pustą tablicę.

Żeby wdrożyć taki mechanizm, potrzebujemy... kolejnej dawki wiedzy! Dlatego teraz poznamy i zastosujemy po raz pierwszy konstrukcję warunkową `if-else` oraz powiązane z nią wartości logiczne `true` i `false`. Zacznijmy od `true` i `false`!

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

Zaktualizuj funkcję `getTasksFromLocalStorage()`, zapisz plik, uruchom go i zobaczysz, że w konsoli pojawił się komunikat o wartości `null` klucza `"tasks"`. Teraz wyświetl listę zadań (`showTasks()`), która powinna zwrócić pustą tablicę. No i teraz możesz spróbować dodać jakieś zadanie: `addTask("zadanie testowe")`. Mało tego, że tym razem udało się w końcu dodać zadanie, to w dodatku zostało ono zapisane w `localStorage`! Możesz to sprawdzić, uruchamiając kod jeszcze raz (kliknij ikonkę trójkąta lub `Ctrl+Enter`). Tym razem nie zobaczysz żadnego komunikatu o wartości `null`. Spróbuj teraz wpisać `showTasks()` i powinieneś/aś zobaczyć to: `tasks: ['test']`. Udało się!

W sumie, fajnie by było, gdyby plik po uruchomieniu od razu pokazał nam nasze zapisane zadania (lub ich brak). W tym celu musimy dokonać dwóch zmian:

1. zmodyfikować funkcję `showTasks()`, dodając konstrukcję `if-else`, sprawdzającą, czy długość tablicy `tasks` jest truthy:

```
function showTasks() {
	if (tasks.length) {
		console.log("Twoje zapisane zadania:", tasks);
	} else {
		console.log("Na razie nie masz żadnych zapisanych zadań... Dodaj jakieś!");
	}
}
```

2. dodać wywołanie funkcji `showTasks()` na końcu pliku (pamiętaj, że JavaScript czyta i wywołuje kod od góry do dołu).

## Modyfikujemy pozostałe funkcje, aby aktualizowały localStorage

---

Aby dokończyć wersję 2.0 aplikacji, pozostało nam tylko dodać funkcję `updateTasksInLocalStorage()` do pozostałych funkcji (po prostu kopiuj i wklejaj `updateTasksInLocalStorage();` we właściwych miejscach w funkcjach, czyli po modyfikacji zmiennej `tasks`):

```
// todo-app-local-storage app code:

// ...tutaj jest poprzedni kod w pliku

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

## Podsumowanie Modułu 3. Kompletny kod aplikacji w wersji 2.0 zintegrowanej z localStorage

---

Poniżej znajduje się cały kod aplikacji w wersji 2.0 zapisanej w pliku `todo-app-local-storage` w zakładce `snippets`, która przechowuje zadania w `localStorage`, dzięki czemu **Twoje zadania będą zapisane w pamięci przeglądarki tak długo, aż nie wyczyścisz `localStorage`**! Spróbuj odświeżyć stronę lub zamknąć przeglądarkę, a potem znowu uruchomić plik - zadania nadal są w pamięci przeglądarki!

Pozwoliłem sobie usunąć komentarze z poniższego kodu, ponieważ widziałeś/aś je już nie raz, a ponadto nasz kod jest wystarczająco czytelny, a funkcje mają właściwe i opisowe nazwy, więc wszystko powinno być jasne.

*Gdybyś jednak nie mógł/a sobie przypomnieć, co robią poszczególne funkcje, to zapraszam do odpowiednich fragmentów kursu.*

```
console.clear();

function getTasksFromLocalStorage() {
	let storedTasksStringified = localStorage.getItem("tasks");

	let storedTasks = JSON.parse(storedTasksStringified);

	if (storedTasks) {
		return storedTasks;
	} else {
		console.log("Klucz 'tasks' ma wartość", storedTasks, "więc zwracamy pustą tablicę, by móc do niej dodawać elementy za pomocą metodu push()");

		return [];
	}
}

let tasks = getTasksFromLocalStorage();

function showTasks() {
	if (tasks.length) {
		console.log("Twoje zapisane zadania:", tasks);
	} else {
		console.log("Na razie nie masz żadnych zapisanych zadań... Dodaj jakieś!");
	}
}

function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(i, tasks[i]);
	}
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

## Zakończenie oraz darmowe źródła do samodzielnej nauki (po angielsku)

---

Właśnie dobrnąłeś/aś do końca 3. modułu kursu i na tym na razie kończy się ten tutorial!

Spodobało się? Chcesz więcej *(pamiętaj, że ta strona dopiero się rozwija)*?

Jeśli tak, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu *(zakładam, że będziemy dalej rozwijać naszą aplikację do zadań, dodając coraz to nowsze funkcjonalności oraz poznając również podstawy HTML i CSS, by wyjść poza konsolę i stworzyć stronę/ aplikację internetową z prawdziwego zdarzenia)*.

Jeśli więc chcesz zrobić ten kolejny i następne kroki, daj znać!

A zanim powstaną kolejne moduły tego kursu (a mamy jeszcze wiele rzeczy do omówienia) oraz kolejne kursy na *kodujemywbiurze.pl*, zachęcam do dalszej samodzielnej nauki (patrz linki poniżej)!

### BONUS: Darmowe źródła do samodzielnej nauki (po angielsku)

---

Poniżej znajdziesz listę sprawdzonych źródeł do samodzielnej nauki *JavaScript* i nie tylko.

Niestety, większość nie jest dostępna w języku polskim, aczkolwiek zachęcam do nauki w języku angielskim, nawet jeśli Twój angielski nie jest na najwyższym poziomie, ponieważ tutoriale są zwykle pisane bardzo postym językiem:

- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
- https://javascript.info/
- https://www.geeksforgeeks.org/javascript/
- https://www.codecademy.com/resources/docs/javascript
- https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/