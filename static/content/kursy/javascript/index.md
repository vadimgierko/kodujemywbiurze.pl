## Wprowadzenie

---

- **Pracujesz w biurze?**
- **Masz do dyspozycji komputer/ laptop, Internet i kubek kawy/ herbaty?**
- A może tak spróbujesz przekonać się, czy **kodowanie może być równie dobrym wypełniaczem Twojego czasu w biurze, jak skrollowanie Fejsa czy Insta**?

*Kodujemy w biurze* powstało, by **zachęcić pracowników biurowych do spróbowania swoich sił w kodowaniu** webowym w przyjazny i nie wymagający żadnych konfiguracji sposób.

Chodzi mi przede wszystkim o **pobudzenie Twojej ciekawości** i pokazanie, że **pisanie kodu jest dostępne dla każdego** i może być świetną **zabawą** (w szczególności w biurze)!

Ponieważ wolę **uczyć się nowych rzeczy w praktyce, widząc natychmiastowe rezultaty** mojej nauki i pracy, dlatego w trakcie tego kursu:

- **stworzymy i odpalimy prostą aplikację do zarządzania listą zadań do zrobienia, która będzie działać w konsoli naszej przeglądarki bezpośrednio na tej stronie** *(za chwilę dowiesz się, czym jest konsola i jak z niej korzystać)* oraz
- **przy okazji** tworzenia aplikacji **opanujemy wybrane podstawy języka JavaScript** - <a href="https://bulldogjob.pl/readme/najpopularniejsze-jezyki-programowania-2020" target="_blank">najbardziej popularnego języka programowania</a>.

Aplikacja, którą stworzymy, umożliwi nam:

- zapisywanie,
- przechowywanie,
- wyświetlanie
- dodawanie oraz
- usuwanie

zadań do zrobienia za pomocą poleceń napisanych przez nas kodem JavaScript w konsoli.

W ramach rozbudowy niniejszej strony i dodawania kolejnych lekcji i kursów (co zależy od Waszego zainteresowania projektem, dlatego zachęcam do polubienia i śledzenia profilu na <a href="https://www.facebook.com/kodujemywbiurze" target="_blank">Facebooku</a> i <a href="https://www.linkedin.com/company/kodujemywbiurze" target="_blank">LinkedIn</a>), będziemy przekształcać i dalej rozwijać tę aplikację w aplikację z pełnego zdarzenia - z interfacem użytkownika, bazą danych, rejestracją użytkowników itd. *Sky is the limit*, aczkolwiek na razie w ramach eksperymentu ograniczymy się do funkcjonalności, którymi dysponuje nasza przeglądarka.

Mam nadzieję, że kiedy dobrniesz do końca tego pierwszego tutoriala, to będziesz chciał/a więcej! Jeśli tak będzie, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu.

*Happy Coding!*

## Czym jest JavaScript i dlaczego warto się go uczyć?

---

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

## Konsola | Zaczynamy pisać kod! Czym jest konsola, jak jej używać i co to jest *Hello, World!*?

---

Niniejsza strona, jak większość innych w Internecie, używa JavaScript. Każda **przeglądarka** również **rozumie i przetwarza kod JavaScript**, a ponadto umożliwia nam pisanie kodu bezpośrednio w przeglądarce, a dokładniej w konsoli. <a href="/dokumentacja/javascript/konsola" target="_blank">Konsola</a> jest jednym z wielu wbudowanych narzędzi każdej przeglądarki i dzięki temu, że możemy w niej pisać kod (a nawet przechowywać pliki z kodem, co też zrobimy później), będzie naszym podstawowym narzędziem kodowania i nauki w tym kursie. Przekonajmy się o tym i otwórzmy konsolę w naszej przeglądarce!

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

A gdybyście byli ciekawi, jakich jeszcze ciekawych poleceń możemy użyć w konsoli, to spróbujcie np. wpisać następujący kod i kliknąć Enter:

```
alert("Hej, jestem wyskakującym okienkiem!");
```

*PS. zdradzę Ci tajemnicę: programiści bardzo często używają polecenia `console.log()` w swoim kodzie, by sprawdzić, co się dzieje z niektórymi zmiennymi w trakcie działania programu. Dzięki temu można sprawdzić, czy nasz kod działa poprawnie lub też odkryć, że zawiera błąd. Ten chwyt odnosi się do szerszego pojęcia w programowaniu - "debugowania", czyli wyszukiwania i naprawiania błędów.*

Dlaczego akurat użyłem określenia *Hello, World!*? Jest to taka niepisana tradycja wśród programistów - tego określenia używamy np. kiedy testujemy nowe narzędzia, języki itd.

Ok, więc wiemy już, czym jest konsola, jak ją otworzyć, a nawet wpisaliśmy i uruchomiliśmy nasze pierwsze polecenie.

Jak już wspomniałem wcześniej, konsola umożliwia nam m. in. pisanie i uruchamianie kodu JavaScript, chociaż nie jest to jej główny cel - każdy edytor kodu jest zdecydowanie lepszym narzędziem do pisania kodu. Natomiast na razie nie chcemy żadnego osobnego edytora kodu. Chcemy po prostu napisać kilka linijek kodu i zobaczyć, jak to działa oraz *złapać bakcyla*. Co prawda, w pewnym momencie w tym kursie zaczniemy korzystać z dodatkowej funkcjonalności w przeglądarce, która ułatwi nam pisanie kodu, ale na razie pozostajemy w "czystej" konsoli. Z kolei w kolejnych kursach będziemy najprawdopodbniej korzystać z edytorów kodu dostępnych online.

## Zmienne | Stwórzmy pierwsze zadanie w naszej aplikacji

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

## Nadpisywanie wartości zmiennych | Zmieńmy nasze zadanie

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

## Tablica, metoda push(), indeksy i modyfikacja elementów w tablicy | Tworzymy listę zadań

---

Ok, więc potrafimy już utworzyć nową zmienną, by przechować jej wartość w naszym kodzie, potrafimy też tę wartość zmodyfikować/ nadpisać. Natomiast posiadanie tylko jednej zmiennej `task`, którą będziemy ciągle modyfikować, jest bardzo niepraktyczne i nie do tego dążymy. Chcemy utworzyć listę zadań *(masz przecież dużo zadań do zrobienia w biurze, także związanych bezpośrednio z pracą ;-)*, do której będziemy mogli dodawać zadania, usuwać je, lub też wyświetlić listę zadań w całości!

Stwórzmy zatem najpierw pustą listę zadań, którą przypiszemy do nowej zmiennej:

```
let tasks = [];
```

Zauważ, że tym razem wartością zmiennej nie jest ciąg znaków (czyli słowa, zdania, znaki zawarte pomiędzy cudzysłowami, jak w np.: "zrobić kawę"), tylko dwa nawiasy kwadratowe `[]`. Jest to **tablica** (ang. `array`), która jest niczym innym, jak kontenerem/ listą różnych elementów, które znajdą się w środku.

Na razie nasza tablica/ lista `tasks` jest pusta (pomiędzy kwadratowymi nawiasami nie ma żadnych elementów). Gdybyśmy chcieli dodać do niej manualnie (ręcznie wpisując) nasze zadania, to moglibyśmy to zrobić np. na kilka sposobów:

1. Ręcznie wpisujemy każde zadanie jako ciąg znaków zawarty w cudzysłowie i oddzielone przecinkiem:

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

Świetnie! Potrafimy tworzyć listę zadań, uzyskiwać dostęp do poszczególnych elementów z listy i modyfikować je oraz dodawać nowe elementy do listy/ tablicy. Teraz nadszedł czas na pisanie reużywalnego kodu, który będzie wykonywał pewne powtarzalne zadania - dodawanie nowych zadań!

## Wstęp do funkcji | Wyświetlamy listę zadań (znowu)

---

Każdorazowe dodawanie zadań do listy zadań poprzez użycie kodu, z którego wcześniej korzystaliśmy (`tasks.push("nowe zadanie")`), działa, ale programiści "opakowują" kod, z którego często korzystamy (a będziemy często dodawać zadania do listy), w reużywalne "kawałki" kodu, które nazywają się **funkcjami**.

**Funkcja to pewien zakmnięty w sobie fragment kodu, który wykonuje pewne zadania/ polecenia w nim zdefiniowane za każdym razem, kiedy go wywołamy.**

Tak naprawdę, już korzystaliśmy z wbudowanych funkcji, tj. `console.log()`, `alert()` lub `tasks.push()`. Zauważ, że w odróżnieniu od zmiennych, **funkcja zawiera nawiasy tuż po swojej nazwie**.

Spróbujmy zatem stworzyć naszą pierwszą funkcję, by zrozumieć, o co w tym chodzi. Stworzymy funkcję, która będzie wyświetlała nam listę wszystkich naszych zadań.

Owszem, wcześniej już wyświetlaliśmy nasze zadania poprzez wpisanie w konsoli zmiennej `tasks` lub poprzez wywołanie funkcji `console.log(tasks)`, ale teraz zrobimy to w sposób bardziej profesjonalny:

```
function showTasks() {
  console.log(tasks);
}
```

Zanim wytłumaczę, co się dzieje w powyższym kodzie, chciałbym poruszyć kwestię pisania wielolinijkowego kodu w konsoli (jak w powyższym przykładzie), błędów oraz utracie kodu po odświeżeniu strony.

W związku z tym polecę też korzystanie z wbudowanej funkcjonalności Chrome i Edge o nazwie `snippets` do zapisywania kodu bezpośrednio w przeglądarce, dzięki czemu go nie utracimy. Są to ważne kwestie, które sprawią, że pisanie kodu w przeglądarce będzie bardziej przyjemne, mniej podatne na błędy oraz zapewni pewną funkcjonalność aplikacji, którą budujemy. Czytaj dalej!

### Kilkulinijkowy kod w konsoli oraz zalecenie korzystania ze snippets

***Uwaga!*** W zależności od przeglądarki, **może się okazać**, że żeby napisać kilkulinijkowy kod w konsoli (taki, jak w powyższej funkcji), musimy **zamiast Enter używać kombinacji klawiszy Shift+Enter**, żeby przejść do następnej linii, ponieważ wciśnięcie klawisza Enter spowoduje wywołanie tego kodu, który już napisałeś/aś, co najprawdopodobniej wywoła błąd w konsoli, ponieważ kod nie jest ukończony.

Jeśli to się zdarzy (pojawi się komunikat błędu) i po ponownym poprawnym wpisaniu kodu nie uda się zainicjować funkcji (ponieważ została niepoprawnie zaincjowana niekompletnym, przedwcześnie wywołanym kodem), odśwież stronę, co wyczyści pamięć konsoli i wpisz kod jeszcze raz.

Ale pamiętaj, że lista zadań `let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]` również zniknęła, więc najpierw musisz ją ponownie wpisać, zanim napiszesz powyższą funkcję.

Dlatego też proponuję, byśmy skorzystali z wbudowanej funkcjonalności Chrome i Edge o nazwie `snippets` do zapisywania kodu bezpośrednio w przeglądarce! Jest to świetne narzędzie, o czym się zaraz przekonamy.

Żeby otworzyć *snippets*, musisz kliknąć *Sources*, które znajdują się tuż obok *Console*, a tak wybrać *Snippets*. Teraz możemy kliknąć ikonkę ze znakiem plus i napisem *New snippet*, co utworzy nowy plik z domyślną nazwą, którą możemy zmienić na np. `todo-app`.

Ten plik będzie teraz zapisany w naszej przeglądarce i zawsze będziemy mieli do niego dostęp. Ponadto, plik ten możemy uruchomić w naszej konsoli, która będzie miała dostęp zarówno do pliku, jak i do zawartości strony (co nam przyda się w kolejnych kursach).

Możemy teraz przepisać do tego pliku dotychczasowy kod naszej aplikacji (potrzebne nam są tylko zadeklarowanie zmiennej `tasks` oraz definicja poprzedniej funkcji `showTasks()`, którą zaraz omówimy):

```
// todo-app file:

let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

function showTasks() {
  console.log(tasks);
}
```

Będziemy teraz pisać kod zarówno w tym pliku (tylko ten niezbędny dla aplikacji; w komentarzu w przykładach kodu zawrę ten zapis: `// todo-app file:`, który będzie odróżniał kod aplikacji od innego testowego kodu w konsoli) oraz czasami w samej konsoli, by coś tam przetestować lub wywołać funkcje z pliku.

Możesz też nie korzystać z tej funkcjonalności i dalej pisać kod wyłącznie w konsoli, ale pamiętaj o sytuacjach, które opisałem powyżej, które mogą mieć miejsce i zakłócić Twoją pracę z kodem.

Wracając do naszej funkcji, w powyższym kodzie używając słowa kluczowego `function` zdefiniowaliśmy nową funckję o nazwie `showTasks`, która... (jak sama nazwa wskazuje) wyświetla listę naszych zadań. 

Jak widzisz, polecenie `console.log(tasks)`, którego wcześniej używaliśmy osobno, zostało "opakowane" w funkcję, której nazwa ewidentnie wskazuje na to, czego możemy się od niej spodziewać, w związku z czym ktoś, kto nie widział całości naszego kodu, ani nie wie, co jest w środku tej funkcji, raczej się domyśli, co ta funkcja robi i sam będzie mógł jej użyć.

Ponadto, jeśli wrócisz do swojego kodu za kilka dni lub tygodni, to mimo, że nie będziesz pamiętał/a, co znajduje się w środku funkcji `showTasks()`, to zdecydowanie zrozumiesz, co ona robi. Uwierz mi, że programiści o wiele częściej dosłownie czytają kod, niż go piszą, dlatego trafne nazwy zarówno zmiennych, jak i funkcji, niezwykle ułatwiają jego zrozumienie, mimo że nie zna się/ nie pamięta się szczegółów.

Żeby nasza funkcja zadziałała i wyświetliła nasze zadania, musimy ją wywołać poprzez wpisanie w konsoli `showTasks()` i kliknąć Enter. Dzięki temu, nie musimy pamiętać, jak wyświetlić nasze zadania w konsoli, wystarczy wywołać funkcję `showTasks()`.

Jeśli zapisałeś/aś w konsoli w zakładce `Sources` plik `todo-app`, umieściłeś/aś w nim kod, który napisałem powyżej, oraz zapisałeś/aś ten plik (klikając `Ctrl+S`), to przejdź teraz z powrotem do konsoli i wpisz polecenie `showTasks()` oraz wywołaj go, klikając Enter. Przekonasz się, że funkcja zwróciła taką listę zadań: `(3) ['zrobić kawę z mlekiem', 'sprawdzić maila', 'zajrzeć na stronę kodujemywbiurze.pl']`.

Zauważ, że ta lista nie jest tą samą listą, która jest przechowana w pliku! Pierwsze zadanie powinno brzmieć `zrobić kawę`, a nie `zrobić kawę z mlekiem`. Dlaczego? Otóż dlatego, że nie uruchomiliśmy jeszcze kodu z naszego pliku, umieszczonego w `Sources`, tylko nadal odwołujemy się do funkcji `showTasks()`, którą zdefiniowaliśmy w konsoli i która wyświetla taski również wcześniej zdefiniowane w konsoli, a jeśli pamiętasz, to nadpisaliśmy pierwsze zadanie z tablicy (`tasks[0] = "zrobić kawę z mlekiem";`). W sumie, nie musisz nawet o tym pamiętać - wystarczy, że przeskrolujesz konsolę w górę, by znaleźć ten kod.

Natomiast od tego momentu chcemy pracować z kodem z pliku `todo-app` (chcemy, ale jak wspominałem, możesz nadal po prostu korzystać tylko z konsoli, niemniej jednak radzę dokładnie podążać za wskazówkami z tutoriala). Żeby uruchomić kod z naszego pliku, wróćmy do `Sources` i do naszego pliku oraz kliknijmy ikonkę trójkąta w dolnym prawym rogu lub użyjmy skrótu `Ctrl+Enter`. Jak widzisz, nasza konsola została ponownie otwarta, ale pod plikiem - teraz widzimy zarówno plik z kodem, jak i konsolę i możemy teraz odwoływać się do naszego kodu z pliku w konsoli. To otwiera przed nami niesamowite możliwości!

Spróbuj teraz wywołać `showTasks()` i przekonaj się, że wynik tej funkcji będzie teraz inny - wyświetlą się zadania, zdefiniowane w pliku (`3) ['zrobić kawę', 'sprawdzić maila', 'zajrzeć na stronę kodujemywbiurze.pl']`), a nie wcześniejsze z konsoli.

Super! Od teraz będziemy działać w ten sposób - będziemy pisać i uzupełniać kod w pliku, natomiast wywoływać go w konsoli. Odśwież teraz tą stronę (nie martw się, plik z kodem nie zniknie, jeśli go zapisałeś/aś) - pamięć konsoli została wyczyszczona (razem ze zmienną `tasks` zdefiniowaną wcześniej w konsoli) i można teraz ponownie kliknąć w ikonkę trójkąta, by uruchomić nasz plik i przekazać jego funkcjonalności oraz zmienne w nim zdefiniowane do konsoli.

Wracając do naszej funkcji `showTasks()`, na pierwszy rzut oka może się wydawać, że wykonaliśmy zbędną pracę - definicja funkcji zajęła nam 3 linijki kodu! Ale, po pierwsze, uczyniła nasz kod bardziej zrozumiałym, czytelnym i reużywalnym, a po drugie, większość funkcji będzie bardziej rozbudowana, będą tam miały miejsce różne procesy, być może będą tam w środku też inne funkcje i tymczasowe zmienne, więc w tym przypadku oszczędność czasu będzie ogromna. Poza tym, musieliśmy tylko raz się zastanowić nad tym, jak wyświetlić nasze zadania, tworząc funkcję i nie będziemy musieli znowu się nad tym zastanawiać, co miałoby miejsce, gdybyśmy każdorazowo pisali `console.log(tasks)`.

Warto też zwrócić uwagę na samą konstrukcję funkcji:

- zaczyna się ona od słowa kluczowego `function`,
- potem po spacji jest jej nazwa (która jeśli zawiera zlepek słów, to powinna być napisana `camelCasem`),
- potem bez spacji po nazwie dodajemy nawiasy `()` (później dowiemy się, do czego służą),
- a potem mamy dwie klamry `{ }`, pomiędzy którymi możemy pisać wiele linijek kodu - to, co znajduje się pomiędzy klamrami, nazywa się ciałem funkcji.

Moglibyśmy powyższą funkcję zapisać także w jednej linijce (ponieważ jest mała):

```
function showTasks() { console.log(tasks); }
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

// teraz inicjujemy zmienną,
// do której przypisujemy wartość zwróconą przez calculateSum():
let sum = calculateSum(3, 5);
```

aczkolwiek zwrócona wartość jest wynikiem działania funkcji, więc funkcja musiała "coś zrobić", by "wyprodukować" wartość, którą zwraca.

## Argumenty funkcji, wywoływanie innych funkcji wewnątrz funkcji oraz komentarze | Funkcja dodająca zadanie

---

Wcześniej dodawaliśmy nasze zadania używając tego kodu: `tasks.push("jakieś tam zadanie")`. Zwróć uwagę na to, że `"jakieś tam zadanie"` znajduje się w nawiasach funkcji, w związku z tym `"jakieś tam zadanie"` zostało przekazane funkcji `push()` jako argument (pewien zasób/ wartość/ informacja), który zostanie przez tę funkcję wykorzystany.

Nasza funkcja `showTasks()` nie ma żadnych argumentów w nawiasach, ponieważ ich nie potrzebuje - ma dostęp do zadań, gdyż zmienna `tasks` istnieje już w naszym kodzie i zawsze mamy do niej dostęp z poziomu każdej funkcji (innymi słowy, jest zmienną globalną). Czyli wiemy już, że funkcja może w ogóle nie mieć żadnych argumentów.

Wyobraźmy natomiast, że chcemy dodać nowe zadanie, które nie istnieje nigdzie w kodzie w postaci zmiennej, wiemy także, że dysponujemy funkcją o nazwie `addTask()` (za chwilę ją napiszemy, ale na razie wyobraźmy, że ktoś już ją napisał). Jak możemy to zrobić?

W tym przypadku należałoby tej funkcji przekazać pewną informację (w naszym przypadku będzie to nowe zadanie), czego możemy dokonać poprzez wpisanie naszego zadania w nawiasach tej funkcji w następujący sposób: `addTask("zrobić kawę po raz drugi")`.

Chciałbym też zauważyć, że taki kod zadziała tylko w tym przypadku, jeśli funkcja `addTask()` oczekuje jakiegoś argumentu, czyli że funkcja ta została napisana w pewien określony sposób, który zaraz zobaczymy (pojawi się tutaj też kilka nowych rzeczy):

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

Przeczytaj ten powyższy kod i spróbuj najpierw intuicyjnie zrozumieć, co się w nim dzieje oraz dopisz go do pliku `todo-app` na samym końcu (ale przepisz własnoręcznie, nie kopiuj tego kodu!). No i oczywiście zapisz zmiany skrótem `Ctrl+S`, a potem kliknij ikonkę trójkąta lub kolejny skrót `Ctrl+Enter`, by kod zadziałał w przyszłości w konsoli.

Po pierwsze, zwróć uwagę, że po nazwie funkcji `addTask` w nawiasach mamy zawarty argument `newTask`. Tak naprawdę `newTask` jest zmienną, która jeszcze nie ma żadnej przypisanej wartości, czyli jest to "puste podpisane pudełko", do którego dopiero później coś włożymy - a dokładnie w momencie wywołania funkcji w ten sposób: `addtask("to zadanie jest właśnie tą wartością, która zostanie przypisana do argumentu newTask")`.

Mimo że w samej definicji funkcji `addTask` argument `newTask` nie ma żadnej wartości, to możemy go wykorzystać w kodzie funkcji tak, jakby tę wartość miał (co też robimy w dalszej części kodu funkcji: `tasks.push(newTask)` - tak naprawdę mówimy przeglądarce, że cokolwiek by się znalazło z zmiennej `newTask`, powinno zostać dodane do `tasks`).

Innymi słowy, wyobraź sobie, że mówisz koleżance z biura: *"Na biurku leży żółty segregator, który na razie jest pusty, ale później przyjdzie sekretarka i włoży do tego segregatora stertę dokumentów. Wtedy weź segregator i włóż go do szafy"*. Koleżanka nie musi wiedzieć, jakie dokumenty znajdą się w segregatorze. Wie tylko, że jak się tam znajdą, trzeba odłożyć segregator. Gdyby wspomniana koleżanka bardzo się nudziła, mogłaby wziąć pusty segregator i włożyć go do szafy, mimo że nie ma w nim żadnych dokumentów, by przećwiczyć tę czynność na przyszłość.

Po drugie, pewnie zauważyłeś/aś, że w kodzie znalazły się linijki z tekstem, które poprzedzają te symbole: `//`. Dzięki tym symbolom dodajemy **komentarze** do swojego kodu - są one widoczne w kodzie, natomiast nie są traktowane jako kod przez program (w naszym przypadku przez przeglądarkę).

Dzięki komentarzom możemy też "wyłączyć" pewien fragment kodu, czyli go "zakomentować", jeśli z jakiegoś powodu nie chcemy, by akurat zadziałał. Wystarczy, że zakomentujemy kod w następujący sposób:

```
// addTask("To zadanie nie zostanie dodane");
```

Po trzecie, zauważ, że w funkcji `addTask()` nie tylko dodajemy zadanie do listy, ale także wyświetlamy komunikat w konsoli o tym, że zostało dodane nowe zadanie, przy czym wyświetlamy także samo zadanie. Dzieje się tak dlatego, że tym razem przekazaliśmy `console.log()` zarówno pewną wiadomość: `"Do Twoich zadań zostało dodane nowe zadanie:"`, a potem po przecinku przekazaliśmy samą zmienną, reprezentującą nowe zadanie, w związku z czym konsola wyświetli wiadomość oraz wartość zmiennej przechowującej nowe zadanie (treść nowego zadania):

```
console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);
```

Po czwarte, po dodaniu nowego zadania i wyświetleniu komunikatu, wywołujemy funkcję `showTasks()`, którą wcześniej napisaliśmy, dzięki czemu konsola automatycznie wyświetli zaktualizowaną listę zadań z nowo dodanym zadaniem na końcu. Widzisz, mówiłem, że funkcje przydają się do ponownego wykorzystania! W funkcji `addTask()` zawarliśmy i wywołujemy inną naszą funkcję `showTasks()` (a w sumie wywołujemy też wbudowaną funkcję `console.log()`). Być może nawet nie pamiętasz już, co dokładnie znajdowało się w funkcji `showTasks()`, ale na pewno wiesz, co robi i właśnie z tego skorzystałeś/aś! Właśnie na tym polega korzyść z tworzenia dobrze nazwanych reużywalnych funkcji!

Dzięki temu, że dodaliśmy automatyczne wyświetlenie zaktualizowanej listy zadań, nie musimy za każdym razem po dodaniu nowego zadania wywoływać ręcznie dodatkowo `showTasks()`, żeby wyświetlić naszą listę. Widzisz, ile może się dziać w jednej funkcji!

Ok, wpisz więc do konsoli kod nowej funkcji `addTask()`, ale bez moich komentarzy (to te linijki, które zaczynają się od `//`, pamiętasz?).

Teraz możemy dodawać zadania poprzez wywołanie funkcji `addTask` z argumentami (poćwicz to w konsoli):

```
addTask("sprawdzić Facebooka");
addTask("wyskoczyć do sklepu po jogurt");
addTask("położyć jogurt na grzejniku, by się zacieplił");
```

Jeśli wszystko poszło zgodnie z planem, to za każdym razem po dodaniu zadania, wyświetla Ci się komunikat oraz coraz to dłuża lista - ileż to my mamy do zrobienia dzisiaj w biurze!

## Pętla for, długość tablicy length | Wyświetlanie zadań po kolei

---

A co powiesz na to, że zamiast wyświetlać całą tablicę zadań, wyświetlimy każde zadanie w osobnej linijce, dzięki czemu lista będzie bardziej przejrzysta?

Możemy to osiągnąć na wiele sposobów, ale wykorzystamy w tym celu starą dobrą klasyczną metodę - pętlę `for`. Czym jest pętla?

Pętla jest poleceniem, które wykonuje pewne zadanie raz po raz, dopóki pewien warunek jest spełniony. Ogólnie początkujący programiści czasami mają problem ze zrozumieniem działania pętli, więc w razie czego, nie poddawaj się od razu ;-)

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

Gdybyśmy teraz chcieli wyświetlić nasze zadania w podobny sposób, moglibyśmy stworzyć nową funkcję, nazwijmy ją `loopTasks()` i zamiast sprawdzać, czy `i` jest mniejsze od 10, będziemy sprawdzać, czy `i` jest mniejsze od długości naszej listy (a możemy sprawdzić długość naszej listy, która jest tablicą, w ten sposób: `tasks.length`), czyli liczby elementów, które zawiera:

```
function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(tasks[i]);
	}
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

Dopiszmy kod funkcji `loopTasks()` do naszego pliku, ale z małą modyfikacją: oprócz samego zadania, wyświetlimy także jego indeks (ułatwi to nam za chwilę usuwanie zadań):

```
function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(i, tasks[i]);
	}
}
```

## Metoda splice() | Usuwanie zadań z listy

---

Ok, więc inicjujemy listę zadań, dodajemy i przechowujemy zadania w kodzie, czas więc na kolejną funkcjonalność - usuwanie zadania z listy. Powinniśmy być w stanie usunąć zadanie, które jest już nieaktualne albo wykonane z naszej listy, że się nie rozpraszać oraz widzieć nasz progres.

Usunięcia konkretnego elementu z tablicy można dokonać na kilka sposobów. Ze względu na to, że wiemy, czym są indeksy oraz nasza lista pozwala na wyświetlenie indeksów każdego z zadań, najłatwiej będzie sprawdzić, jaki jest indeks zadania, które chcemy usunąć, a potem użyć wbudowanej metody tablicy `splice()` w ten sposób:

```
// załóżmy, że chcemy usunąć zadanie o indeksie 4:

tasks.splice(4, 1);
```

Metoda `splice()` w tym przypadku potrzebuje przekazania do niej dwóch argumentów:

- pierwszy (w naszym przykładzie jest to `4`) jest indeksem elementu, który chcemy usunąć,
- drugi z kolei wskazuje na ilość elementów, które chcemy usunąć, zaczynając od tego indeksu (my chcemy usunąć tylko jedno zadanie, więc napiszemy `1`).

Oczywistym jest, że nie będziemy usuwać elementów bezpośrednio w ten sposób, tylko... no zgadnij... dokładnie - napiszemy dedykowaną reużywalną funkcję! No bo kto by pamiętał za każdym razem, jakie argumenty i w jakiej kolejności mamy przekazać do metody `splice()`? Zresztą, kto by w ogóle pamiętał, jak nazywa się ta metoda.

Stwórzmy więc funkcję `deleteTask(index)`:

```
function deleteTask(index) {
  // usuwamy 1 zadanie zlokalizowane pod przekazanym indeksem:
  tasks.splice(index, 1);

	// wyświetlamy zaktualizowaną listę zadań:
	showTasks();
}
```

Po przepisaniu tej funkcji do konsoli, spróbuj usunąć kilka zadań, uprzednio sprawdzając, jakie indeksy chcesz usunąć.

Spróbuj teraz stworzyć funckję o nazwie `deleteAllTasks()`, która usuwa od razu wszystkie zadania. Można to oczywiście zrobić na wiele sposobów:

- można to zrobić bardzo, ale to bardzo łatwo (właśnie tego od Ciebie oczekuję),
- ale można też zaszaleć i w tym celu użyć pętli, a nawet pętli, która wykorzystuje już wcześniej stworzoną funkcję `deleteTask()`, która by usuwała każde zadanie po kolei, przy okazji wyrzucała do konsoli każde usunięte zadanie.

## Podstawy podstaw za nami! Kod pierwszej wersji aplikacji w całości

---

No teraz nasza aplikacja jest już naprawdę zaawansowana!

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
	- jak napisać wartość tego elementu,
- czym jest funkcja
  - jak ją deklarujemy i wywołujemy,
	- jak możemy przekazać funkcji pewne dane,
	- jak tworzyć reużywalne funkcje i wywoływać je w innych funkcjach,
	- jak nadać funkcjom dobre nazwy,
- czym jest pętla `for`
  - jak wyświetlić wszystkie elementy tablicy po kolei,
	- jak wykonać jakąś czynność (wywołać funkcję) określoną ilość razy 

Gratuluję!

Spróbuj teraz odpowiedzieć swoimi słowami na wszystkie powyższe pytania, by sprawdzić, co umiesz, a co jeszcze tak nie do końca.

Poniżej znajduje się cały dotychczasowy kod naszej aplikacji, który powinien być w pliku `todo-app` (który możemy też skopiować i wkleić do konsoli, jeśli nie zapisywaliśmy kodu w pliku - pamiętaj tylko, by odświeżyć stronę, żeby usunąć z konsoli dotychczasowy kod).

```
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

function showTasks() {
  console.log(tasks)
}

function addTask(newTask) {

	// w poniższej linijce dodajemy zadanie do listy zadań:
	tasks.push(newTask);

	// wyświetlamy komunikat w konsoli o nowo dodanym zadaniu:
	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	// wyświetlamy zaktualizowaną pełną listę zadań:
	showTasks();
}

function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(i, tasks[i]);
	}
}

function deleteTask(index) {
  // usuwamy 1 zadanie zlokalizowane pod przekazanym indeksem:
  tasks.splice(index, 1);

	// wyświetlamy zaktualizowaną listę zadań:
	showTasks();
}
```

Możesz teraz dodawać zadania za pomocą kodu `addTask("jakieś zadanie")`, a potem je usuwać, sprawdzając uprzednio ich indeks, np. `deleteTask(3)`. Jeśli z kolei chcesz wyświetlić swoje zadania w konsoli, wywołaj `showTasks()` lub `loopTasks()`.

Spróbuj teraz opowiedzieć swoimi słowami koleżance/koledze z biura, co robi/ co się dzieje w każdej z linijek powyśzego kodu.

Jeśli nie masz, komu to opowiedzieć lub po prostu nie chcesz dzielić się swoją tajną wiedzą, możesz opowiedzieć to swoim kwiatkom na parapecie/ biurku lub, tak jak niektórzy programiści, żółtej gumowej kaczce ;-)

Gratuluję jeszcze raz!

Ale...

Na razie nasze zadania są przechowywane w przeglądarce tylko dopóki nie zresetujemy tej strony lub nie zmienimy czegoś w pliku `todo-app`, a potem nie zapiszemy tego pliku (`Ctrl+S`) i nie uruchomimy go w konsoli.

Jest to w pewnym sensie dobre, ponieważ jutro nie przytłoczy Cię w pracy nadmiar zapisanych (i niezrealizowanych) zadań! Aczkolwiek fajnie by było, gdyby nasze zadania pozostawały zapisane tak długo, jak chcemy. Żebyśmy mogli nagle zamknąć przeglądarkę lub tę stronę (żeby przełożony nie zobaczył), a potem otworzyć ją znowu i mieć dostęp do naszych ważnych zadań!

Więc możemy to zrobić i zrobimy w kolejnej części tutoriala. Będzie to wiedza bardziej zaawansowana od tego, co zrobiliśmy dotychczas (wykorzystamy wbudowaną funkcjonalność przeglądarki `localStorage`), dlatego też stworzymy kolejny plik, w którym będziemy modyfikować naszą aplikację, dzięki czemu... będziemy mieli 2 aplikacje!

Do dzieła!

## localStorage | Zapisujemy oraz pobieramy zadania w przeglądarce

Gdybyśmy zrobili naszą aplikację tak, jak się to robi w prawdziwym świecie, to wykorzystalibyśmy **bazy danych** do przechowywania naszych zadań. Przechowywalibyśmy tam także dane użytkowników, którzy by z niej korzystali.

Dzięki bazom danych aplikacje mają dostęp do danych niezależnie od tego, na jakim urządzeniu korzysta się z aplikacji (w naszej aplikacji dane są dostępne tylko w tej konkretnej przeglądarce... a na telefonie to w ogóle nie działa). Ale są to zaawansowane tematy (mam nadzieję, że dojdziemy do nich w kolejnych kursach na *kodujemywbiurze.pl* - wszystko zależy od Was!).

Niemniej jednak, możemy trochę poczuć, jak to jest pracować z bazą danych, dzięki wbudowanemu narzędziu każdej przeglądarki - `localStorage`. `localStorage` jest czymś w rodzaju magazynu, w którym możemy przechowywać pewne ilości danych w formie tekstowej (a dokładnie 5 MB - nie za wiele, ale nam wystarczy).

Chciałbym tylko od razu zaznaczyć, że `localStorage` przechowuje osobne zestawy danych dla każdego adresu url, co znaczy, że jak wdrożymy to rozwiązanie, to zadania zapisane w trakcie korzystania ze strony *kodujemywbiurze.pl* będą możliwe do odczytania tylko na tej stronie.

Jeśli z kolei będziemy korzystać z aplikacji na jakiejś innej stronie, np. *vadimgierko.com*, to tam będą przechowywane inne zadania, czyli teoretycznie mógłbyś/ mogłabyś odpalać plik `todo-app` na każdej stronie w Internecie i na każdej z nich przechowywać i modyfikować inne zestawy zadań (ale kod pozostaje taki sam i funkcjonuje w ten sam sposób).

Ok, wpisz więc do konsoli `localStorage` i kliknij Enter. Jeśli po raz pierwszy masz do czynienia z `localStorage` na tej stronie (nie robiłeś/aś wcześniej tego kursu), to wyświetli Ci się to: `Storage {theme: 'dark', length: 1}`. Ten komunikat pokazuje zawartość obiektu `Storage` *(nie omawialiśmy jeszcze obiektów, ale jest to zestaw kluczy i wartości zawartych pomiędzy klamrami `{}`, np. `{firstName: "Vadim", lastName: "Gierko"}`)*, który jak na razie przechowuje jedynie preferowany przez Ciebie tryb (jasny lub ciemny).

Tak, zgadza się, w tajemnicy przed Tobą przechowuję za pomocą `localStorage` to, czy korzystasz z ciemnego czy jasnego trybu na swoim urządzeniu lub czy samodzielnie zmieniłeś tryb wyświetlania na tej stronie klikając w ikonkę księżyca lub słońca w górnym menu. Jak widzisz, `localStorage` jest bardzo przydatny dla twórców stron, kiedy sięganie do bazy danych z prawdziwego zdarzenia jest zbyt dużym *overkillem*.

## Dodawanie, pobieranie i usuwanie prostych danych tekstowych z localStorage

Żeby **dodać** proste dane tekstowe do `localStorage`, trzeba użyć mniej więcej takiego kodu: `localStorage.setItem("nazwaKlucza", "wartośćKlucza");`. `setItem()` jest jedną z metod obiektu `localStorage`, dzięki której możemy przypisać wartość do jakiegoś klucza, podobnie jak przypisujemy wartość do zmiennej, tyle że zarówno nazwa klucza, jak i jego wartość mają być ujęte w cudzysłów.

Spróbuj zapisać lub zaktualizować swoje imię w `localStorage` w ten sposób: `localStorage.setItem("name", "TutajWpiszSwojeImię")` i kliknij Enter, po czym wpisz `localStorage` i znowu kliknij Enter, by zobaczyć, że nowy klucz jest teraz w obiekcie.

**Uwaga!** Metoda `setItem()` zawsze nadpisuje wartość klucza. Jeśli dany klucz nie istniał wcześniej, zostanie utworzony, jeśli istniał - jego wartość zostanie napisana przez nową wartość.

Żeby **pobrać** jakiś klucz z `localStorage`, należy użyć metody `getItem()`, podając w nawiasach nazwę klucza w cudzysłowiu, np. tak: `localStorage.getItem("name")`. Spróbuj pobrać zapisane przez siebie imię z `localStorage`.

Pobrane dane z `localStorage` możemy przypisać do zmiennej, by móc nimi operować w naszym programie. Można to zrobić w następujący sposób: `let name = localStorage.getItem("name")`.

Żeby **usunąć** jakiś klucz (i odpowiednio jego wartość) z `localStorage`, trzeba użyć wbudowanej metody `removeItem()`, podając w nawiasach nazwę klucza w cudzysłowiu, np. tak: `localStorage.removeItem("name")`. Spróbuj teraz usunąć klucz `name` z `localStorage`, a potem sprawdź, czy na pewno został usunięty.

## Dodawanie tablicy do localStorage (JSON.stringify()) | Zapisujemy nasze zadania w localStorage

Zapisanie bardziej złożonych struktur danych w `localStorage` wymaga dodatkowej czynności. Kiedy np. chcemy przechować lub nadpisać tablicę (a będziemy chcieli przechować tablicę z naszymi zadaniami), to musimy przekształcić ją na postać tekstową i przypisać do klucza:

```
localStorage.setItem("tasks", JSON.stringify(["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"]))
```

Zwróc uwagę, że do metody `setItem()` przekazaliśmy najpierw tak, jak wcześniej, nazwę klucza `"tasks"` w cudzysłowiu, natomiast drugim argumentem nie jest po prostu tablica, tylko tablica przekazana jako argument do `JSON.stringify()`, która przekształca tablicę w ciąg znaków.

Bardziej klarownym i czytelnym rozwiązaniem byłoby najpierw przypisać tablicę do zmiennej, a potem zmienną przekazać do `JSON.stringify()`:

```
let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

localStorage.setItem("tasks", JSON.stringify(tasks));
```

## Pobranie tablicy do localStorage (JSON.parse()) | Pobieramy nasze zadania z localStorage

Żeby pobrać tablicę z `localStorage` również musimy zastosować dodatkową metodę uzupełniającą `getItem()`, ponieważ tablica jest zapisana w postaci ciągu tekstowego. W związku z tym, musimy "opakować" metodę `getItem()` w `JSON.parse()` - metodę, która przekształci naszą tablicę z ciągu tekstowego z powrotem w JavaScriptową tablicę:

```
let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
```

Zwróć uwagę na liczbę nawiasów: ponieważ `localStorage.getItem("tasks")` zostało przekazane do `JSON.parse()` jako argument, w związku z tym zostało "opakowane" w dodatkowe nawiasy.

Tutaj również moglibyśmy zastosować bardziej czytelne rozwiązanie:

```
// pobieramy tablicę zapisaną w localStorage w postaci ciągu tekstowego:
let tasksString = localStorage.getItem("tasks");

console.log("pobrana tablica w postaci ciągu tekstowego:", tasksString);

// przekształcamy ją z powrotem w JavaScriptową tablicę:
let tasksArray = JSON.parse(tasksString);

console.log("przekształcona z powrotem tablica:", tasksArray);
```

Powyższy kod jest nie tylko bardziej czytelny, ale też najprawdopodbniej bardziej zrozumiały dla Ciebie, gdyż rozbiliśmy złożoną czynność na 2 części: pobranie ciągu tekstowego i przypisanie go do zmiennej, a potem przekazanie tej zmiennej jako argumentu do `JSON.parse()`. No i nie mamy teraz tylu nawiasów (które *nota bene* mogą powodować dużą ilość błędów)!

Pobaw się tym kodem w konsoli i sprawdź, czym się różnią zmienne `tasksString` i `tasksArray`.

## Zadania są zapisywane w przeglądarce! Kod drugiej wersji aplikacji w całości

Uff... Znamy już podstawy pracy z `localStorage`, więc możemy uzupełnić naszą aplikację w pliku o powyższe funkcjonalności.

Poniższy kod będzie zawierał zmodyfikowane dotychczasowe funkcje oraz komentarze na temat tego, co i jak się zadziało:

```
// czyścimy/ resetujemy konsolę na start,
// żeby nie wyświetlała poprzednich komunikatów:

console.clear();

// definiujemy funkcję pobierającą zadania z localStorage:

function getTasksFromLocalStorage() {
	let storedTasks = JSON.parse(localStorage.getItem("tasks"));

	// storedTasks mogą być tablicą (pustą lub zawierającą elementy)
	// lub też mieć wartość null, jeśli w localStorage nie ma w ogóle klucza tasks
	// np. nie został zainicjowany lub został wcześniej usunięty,
	// dlatego:
	
	if (storedTasks !== null) { // jeśli tasks nie jest null
		return storedTasks; // zwracamy storedTasks
	} else { // jeśli tasks === null
		return []; // zwracamy pustą tablicę, by móc np. korzystać z metody push()
	}
}

// USUWAMY: let tasks = ["zrobić kawę", "sprawdzić maila", "zajrzeć na stronę kodujemywbiurze.pl"];

// definiujemy zmienną tasks, do której przypisujemy
// wartość zwróconą przez getTasksFromLocalStorage():

let tasks = getTasksFromLocalStorage();

// zastępujemy poprzednią funkcję showTasks() nową wersją:

function showTasks() {
	if (tasks.length) {
		console.log("Twoje zapisane zadania", tasks);
	} else {
		console.log("Na razie nie masz żadnych zapisanych zadań... Dodaj jakieś!");
	}
}

// dodajemy funkcję aktualizującą tablicę zadań w localStorage
// (czyli nadpisującą poprzednią jej wartość):

function updateTasksInLocalStorage(updatedTasks) {
	// aktualizujemy localStorage o updatedTasks:
	localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// uzupełniamy funkcję addTasks o aktualizację localStorage:

function addTask(newTask) {
	// w poniższej linijce dodajemy zadanie do listy zadań:
	tasks.push(newTask);

	// wyświetlamy komunikat w konsoli o nowo dodanym zadaniu:
	console.log("Do Twoich zadań zostało dodane nowe zadanie:", newTask);

	// aktualizujemy localStorage o najnowsze tasks:
	updateTasksInLocalStorage(tasks);

	// wyświetlamy zaktualizowaną pełną listę zadań:
	showTasks();
}

function loopTasks() {
	for (let i = 0; i < tasks.length; i++) {
		console.log(i, tasks[i]);
	}
}

function deleteTask(index) {
  // usuwamy 1 zadanie zlokalizowane pod przekazanym indeksem:
  tasks.splice(index, 1);

	// aktualizujemy localStorage o najnowsze tasks:
	updateTasksInLocalStorage(tasks);

	// wyświetlamy zaktualizowaną listę zadań:
	showTasks();
}

// odpalając program, wyświetlamy zapisane zadania na start:
showTasks();
```

## Zakończenie i podsumowanie

Właśnie dobrnąłeś/aś do końca tego krótkiego kursu. Spodobało się? Chcesz więcej *(pamiętaj, że ta strona dopiero się rozwija)*?

Jeśli tak, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu *(zakładam, że będziemy dalej rozwijać naszą aplikację do zadań, dodając coraz to nowsze funkcjonalności oraz poznając również podstawy HTML i CSS, by wyjść poza konsolę i stworzyć stronę/ aplikację internetową z prawdziwego zdarzenia)*.

Jeśli więc chcesz zrobić ten kolejny i następne kroki, daj znać!

## Darmowe źródła do samodzielnej nauki (po angielsku)

---

Poniżej znajdziesz listę sprawdzonych źródeł do samodzielnej nauki *JavaScript* i nie tylko.

Niestety, większość nie jest dostępna w języku polskim, aczkolwiek zachęcam do nauki w języku angielskim, nawet jeśli Twój angielski nie jest na najwyższym poziomie, ponieważ tutoriale są zwykle pisane bardzo postym językiem:

- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
- https://javascript.info/
- https://www.geeksforgeeks.org/javascript/
- https://www.codecademy.com/resources/docs/javascript
- https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/