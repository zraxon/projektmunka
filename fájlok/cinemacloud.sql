-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Máj 07. 14:19
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `mozi`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ertekesitesek`
--

CREATE TABLE `ertekesitesek` (
  `Datum` datetime NOT NULL DEFAULT current_timestamp(),
  `VTS_Id` int(11) NOT NULL,
  `VSO_E_mail` varchar(40) NOT NULL,
  `Sorozatszam` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `ertekesitesek`
--

INSERT INTO `ertekesitesek` (`Datum`, `VTS_Id`, `VSO_E_mail`, `Sorozatszam`) VALUES
('2024-05-05 00:05:30', 1, 'MatatAKakiban@gmail.com', '12345678901234567890'),
('2024-05-05 00:05:30', 2, 'nagymari@gmail.com', '19658742365889414550'),
('2024-05-05 00:05:30', 3, 'lakcsiberi@gmail.com', '15478903260214578960'),
('2024-05-05 00:05:30', 4, 'keresztlacika@gmail.com', '14536021478960215780');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `filmek`
--

CREATE TABLE `filmek` (
  `Id` int(11) NOT NULL,
  `Cim` varchar(50) NOT NULL,
  `Kategoria` varchar(30) NOT NULL,
  `Rendezo` varchar(50) NOT NULL,
  `Hossz` time NOT NULL,
  `Korhatar` int(2) NOT NULL,
  `Tipus` varchar(20) NOT NULL,
  `Megjelenesi_Ev` int(4) NOT NULL,
  `Nyelv` varchar(20) NOT NULL,
  `Szereplok` varchar(600) NOT NULL,
  `Felirat` tinyint(1) DEFAULT NULL,
  `ertekeles` float DEFAULT NULL,
  `leiras` varchar(1000) DEFAULT NULL,
  `kepLink` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `filmek`
--

INSERT INTO `filmek` (`Id`, `Cim`, `Kategoria`, `Rendezo`, `Hossz`, `Korhatar`, `Tipus`, `Megjelenesi_Ev`, `Nyelv`, `Szereplok`, `Felirat`, `ertekeles`, `leiras`, `kepLink`) VALUES
(1, 'Az – Második fejezet', 'Horror', 'Andy Muschietti', '02:49:00', 18, '2D,3D', 2019, 'Magyar', 'James McAvoy, Jessica Chastain, Bill Hader, Isaiah Mustafa, Jay Ryan, Bill Skarsgård, James Ransone, Andy Bean, Teach Grant, Jaeden Martell, Sophia Lillis, Finn Wolfhard, Chosen Jacobs, Jeremy Ray Taylor, Jack Dylan Grazer profilképeJack Dylan Grazer, Wyatt Oleff, Nicholas Hamilton, Javier Botet, Xavier Dolan profilképeXavier Dolan, Jess Weixler profilképeJess Weixler, Ryan Kiera Armstrong', 0, 5.5, 'A Vesztesek Klubja legyőzte a kísérteties Pennywise bohócot, túlélte a felfoghatatlan kalandot, tagjai szétszóródtak – felnőttek. De mindannyian tudják, hogy nem hagyhatják maguk mögött a múltjukat. Hiába győzték le a gonoszt, ha az elpusztíthatatlan…\n27 évvel később egy telefonhívás ébreszti mindannyiukat: Derryből keresik őket. Újrakezdődtek a megmagyarázhatatlan eltűnések, a kisváros utcáit és házait ismét hatalmába keríti a rettegés.\nA Vesztesek hűek egykori fogadalmukhoz: hazamennek, hogy újra szembenézzenek a lisztes képű, festett arcú, kacsázó léptű borzalommal.\n', 'https://media.port.hu/images/001/158/794.jpg'),
(2, 'A nyolcadik utas: a Halál', 'Horror', 'Ridley Scott', '01:57:00', 18, '2D', 1979, 'Magyar', 'Sigourney Weaver, John Hurt, Tom Skerritt, Veronica Cartwright, Harry Dean Stanton, Sir Ian Holm, Yaphet Kotto', 0, 9, 'A Nostromo űrhajó a hazatérés helyett a képernyőn villogó pont nyomába ered. Váratlan küldetésük egy kihalt bolygóra vezeti őket, ahol egy elhagyott űrhajót találnak, belsejében számtalan, tojás alakú kapszulával. Miközben óvatosan próbálják feltárni az űrsikló titkát, az egyik tojásból hirtelen kirobban egy lény és rátapad Kane (John Hurt) arcára, aki teljesen megbénul. Miután Kane visszanyeri az eszméletét és csatlakozik a többiekhez, megdöbbentő dolog történik. Kane testéből egy szörny kel ki, amely sorra végez az űrhajósokkal. Ripley (Sigourney Weaver) azonban nem törődik bele a halálba.', 'https://upload.wikimedia.org/wikipedia/hu/c/cd/A_nyolcadik_utas_a_Hal%C3%A1l.png'),
(3, 'Jurassic World: Világuralom', 'Akció/Sci-fi,kalandfilm', 'Colin Trevorrow', '02:26:00', 16, '2D,3D', 2022, 'Magyar', 'Bryce Dallas Howard, Chris Pratt, Dichen Lachman, Sam Neill, Laura Dern, Jake Johnson, Jeff Goldblum, Justice Smith, Daniella Pineda, B.D. Wong, Omar Sy, Mamoudou Athie, DeWanda Wise, Scott Haze', 0, 5.8, 'A Jurassic World rendezője, Colin Trevorrow új filmje, a Világuralom négy évvel azután játszódik, hogy a Nublar-sziget elpusztult. A dinoszauruszok most már világszerte az emberek között élnek – és vadásznak. Ez a törékeny egyensúly átformálja a jövőt és egyszer s mindenkorra meghatározza, hogy az emberi lények maradnak-e a fő ragadozók a bolygón, melyen most a történelem legfélelmetesebb teremtményeivel kell osztozniuk.\nIdén nyáron tanúi lehetünk az eddig 5 milliárd dollárt hozó Jurassic-korszak nagyszabású lezárásának, melyben a két generáció most először egyesül. Chris Pratthez és Bryce Dallas Howardhoz csatlakozik az Oscar-díjas Laura Dern, Jeff Goldblum és Sam Neill a Jurassic World: Világuralomban, ebben a merész, időszerű és lélegzetelállító kalandban, mely felöleli az egész világot, eddig sosem látott dinoszauruszokkal, nyaktörő akciókkal, és elképesztő, új vizuális effektekkel.\n', 'https://media.port.hu/images/001/485/113.jpg'),
(4, 'Ted', 'vígjáték', 'Seth MacFarlane', '01:46:00', 16, '2D,3D', 2012, 'Magyar', 'Mark Wahlberg, Seth MacFarlane,Mila Kunis,Giovanni Ribisi,Patrick Warburton,Laura Vandervoort,Joel McHale,Melissa Ordway,Jessica Barth,Jessica Stroup,Ralph Garman', 0, 6.6, 'A Family Guy megalkotója, Seth MacFairlane sajátos, eredeti humorát most első mozifilmjében csillogtatja meg, íróként és rendezőként egyaránt. Az élő szereplőket és a számítógépes animációt ötvöző vígjáték John Bennettről szól, aki felnőtt férfiként kénytelen szeretett játékmackójával foglalkozni, aki egy gyermekkori kívánság eredményeként életre kelt, és azóta is ott él mellette.', 'https://m.media-amazon.com/images/I/71kHn13C1pL._AC_UF894,1000_QL80_.jpg'),
(5, 'Öt éjjel Freddy pizzázójában', 'Horror/Misztikus', 'Emma Tammi', '01:50:00', 16, '2D,3D', 2023, 'Magyar', 'Josh Hutcherson, Elizabeth Lail, Piper Rubio, Mary Stuart Masterson, Matthew Lillard', 0, 6.2, 'Túl tudsz élni öt éjszakát?\nA félelmetes horrorjáték-jelenségből vérfagyasztó moziesemény lesz, mert a Blumhouse – a M3GAN, a Fekete telefon és a Láthatatlan ember mögött álló stúdió – felvarázsolja a FIVE NIGHTS AT FREDDY’S filmet a vászonra.\nA film egy zaklatott éjjeliőrt követ, aki dolgozni kezd a Freddy Fazbear’s Pizzánál. Miközben az első éjszakáját tölti az új munkahelyén, ráébred, hogy az éjszakai műszakot Freddy’snél nem lesz olyan könnyű túlélni.\n', 'https://media.port.hu/images/001/597/836.webp'),
(6, 'Üvegtigris', 'magyar vígjáték', 'Rudolf Péter, Kapitány Iván', '01:45:00', 16, '2D,3D', 2001, 'Magyar', 'Rudolf Péter, Reviczky Gábor, Gáspár Sándor, Szarvas József, Horváth Lajos Ottó, Csuja Imre, Bodrogi Gyula, Básti Juli, Kecskés Karina, Szilágyi Tibor, Kállai Ferenc, Nagy-Kálózy Eszter, Széles László, Selmeczi Roland, Kovács Koko István, Besenczi Árpád, Dörner György, Kaszás Attila, Magyar Attila, Kránitz Lajos, Egyed Attila', 0, 8, 'Az Üvegtigris hat barát pár eseménytelen napjának története. Lali, az Amerika-mániás büfés, aki az Üvegtigris nevű rozoga, útszéli büfékocsi tulajdonosa; Gaben, az autónepper, Róka, a piti csencselő; Sanyi a félnótás hajléktalan; Csoki, aki mindig arról szövegel, hogy majd szerez pénzt és elmegy Amerikába; és Cingár, aki a többiek idegeit nem kímélve szaxizik. Gaben rábeszéli Lalit, hogy vegyen meg egy, az amerikai álmot ízig-vérig megtestesítő régi Chevrolet Impalát. Amikor hosszú kálvária után meghozza a rég várt autót, Lali ki sem tudja próbálni, egy úton visszaforduló teherautó összetöri. Közben Róka izgatottan keresi a \"Vasat\", melyet korábban odavitt, hátha akad rá vevő. Lali azonban pár nappal azelőtt eladta a semmire sem használhatónak vélt \"fémhulladékot\". Rókára rászálltak a nehézfiúk, s halálosan megfenyegették, hogy hozza vissza, vagy fizessen. Pénzt kell tehát szerezni mindenáron. Csoki szerint egyetlen megoldás van, ki kell rabolni a közeli postát. Mindenki kocsiba száll.', 'https://snitt.hu/system/covers/big/covers_59501.jpg?1617135188'),
(7, 'Némó nyomában', 'Kaland/Vígjáték', 'Andrew Stanton', '01:40:00', 0, '2D,3D', 2003, 'Magyar', 'Alexander Gould, Albert Brooks, Ellen DeGeneres, Willem Dafoe, Brad Garrett, Allison Janney, Austin Pendleton, Stephen Root, Vicki Lewis', 0, 9, 'Amikor Némót, a fiatal bohóchalat kifogják a Nagy-korallzátony környékén és Sydney-be viszik, Pizsi, a túlságosan védelmező apa, és Szenilla, a barátságos, de feledékeny doktorhal epikus utat kell, hogy megtegyen Némó kiszabadítása érdekében.\n', 'https://images.justwatch.com/poster/111461383/s718/nemo-nyomaban.jpg'),
(8, 'Nagypapa hadművelet', 'Vígjáték/Filmdráma', 'Tim Hill', '01:38:00', 12, '2D,3D', 2020, 'Magyar', 'Robert De Niro, Uma Thurman, Rob Riggle, Jane Seymour, Christopher Walken, Colin Ford, Oakes Fegley', 0, 6.2, 'Ed, családja unszolására beköltözik a lányáékhoz, ezzel akaratlanul is kitúrva középső unokáját, Petert a szobájából. A padlásra száműzött fiút persze nem kell félteni, úgy dönt, felveszi a kesztyűt nagyapja ellen, és visszaszerzi azt, ami az övé. Amire Peter nem számít, hogy egy meglehetősen harcedzett öregúrral sodorta össze a sors.\nRobert Kimmel Smith nagy sikerű, azonos címet viselő regényének adaptációja egy nagyapa és unokája közti párharcra koncentrál.\n', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-q6W7Xb0h_1tDYpEKi3PHuXcz6WJ7f5wHJ0VdB_qkfCAI_8o6'),
(9, 'Fekete Özvegy', 'Akció/Thriller', 'Cate Shortland', '02:13:00', 12, '2D,3D', 2021, 'Magyar', 'Scarlett Johansson, Florence Pugh, Rachel Weisz, David Harbour, O.T. Fagbenle, William Hurt, Ray Winstone, Michelle Lee, Olga Kurylenko, Ryan Kiera Armstrong', 0, 6.2, 'A Marvel Studios akciódús kém-thrillerében, a FEKETE ÖZVEGY-ben Natasha Romanoff kénytelen lesz szembenézni múltja sötét epizódjaival, amikor egy veszedelmes összeesküvés hozzá is elér. Nyomában egy életére törő, kérlelhetetlen erővel, Natasha számot kell vessen kémes múltjával és családi kötelékeivel, amiket már jóval azelőtt felbontott, hogy Bosszúálló lett.\n', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmw3UML710LR-9OwUkCx23MdCg7_UGqvq-0-VhR8-URuRaUfu0'),
(10, 'Kingsman - A titkos szolgálat', 'Akció/Vígjáték', 'Matthew Vaughn', '02:10:00', 16, '2D,3D', 2014, 'Magyar', 'Taron Egerton, Colin Firth, Samuel L. Jackson, Michael Caine, Mark Strong, Jack Davenport, Sofia Boutella, Sophie Cookson, Mark Hamill', 0, 7.7, 'Tökit kicsapták az iskolából, munka nélkül tengődik, az anyja lakásában lakik és zűrös életet él. Amikor autólopásért lecsukják, felhívja az apja halála után kapott érmén lévő telefonszámot. Ki is hozza őt a sittről a kifogástalan modorú, angolosan elegáns kém, Harry Hart, akinek annak idején a fiú apja mentette meg az életét. Harry megütközik a srác életmódján, ám lenyűgözi a fiú tehetsége és az intelligenciája, ezért felajánlja neki, hogy jelentkezhet a csapatába, ahol igazi James Bondot faragnak belőle.\n', 'https://media.port.hu/images/000/714/140.jpg'),
(11, 'Álom doktor', 'Horror/Fantasy', 'Mike Flanagan', '02:32:00', 16, '2D,3D', 2019, 'Magyar', 'Rebecca Ferguson, Ewan McGregor, Jacob Tremblay, Zahn McClarnon, Bruce Greenwood, Carel Struycken, Emily Alyn Lind, Jocelin Donahue, Nicholas Pryor, Carl Lumbly', 0, 7.2, 'A ragyogás nem múlik el. A kisfiú, aki túlélte mindazt, amit apja művelt vele és családjával a magányos Szépkilátás Hotelben, felnőtt – de viseli az egykori traumák nyomát. Miután nagy nehezen kiverekszi magát az alkoholizmusból, egy hospice-házban talál munkát, ahol halálukra váló ápoltjai Álom doktornak becézik.\nDanny Torrance (Ewan McGregor) tudja magáról, hogy különleges erők laknak benne. És ezek akkor támadnak fel, amikor találkozik egy lánnyal, aki az övéhez hasonló képességgel rendelkezik, csak sokkal erősebbel.\nÉs a régi szellemek és a régi félelmek visszatérnek. A ragyogás erősebb, mint valaha…\nStephen King végre megírta kultikus regénye, A ragyogás folytatását, amely még szerinte is „túl félelmetes” lett.\nA filmváltozat világsztárokat vet be, és szintén nem takarékoskodik a rémülettel.', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRre2AYjaM1vkRqS-xtYqrZLeaV_iw0yZCyY7tU3yiVI3ldubk'),
(12, 'Eszeveszett birodalom', 'Gyerek/Vígjáték', 'Mark Dindal', '01:18:00', 6, '2D,3D', 2000, 'Magyar', 'David Spade, John Goodman, Eartha Kitt, Patrick Warburton, Wendie Malick, Eli Russell Linnetz', 0, 9.1, 'Kuzkónál nincs lazább uralkodó egész Dél-Amerikában: élvezi a gazdagságot, a hatalmat és a jó zenét. Aki pedig nem tetszik neki, azt egyik segédje szívesen kihajítja az ablakon. Legújabb terve: vízividámpark építése egy közeli napsütéses hegyoldalon. Hogy ott most még egy falu áll? A részletek nem érdeklik Kuzkót. Az viszont nyilván érdekelné, ha tudna róla, hogy udvari boszorkánya, Yzma is a trónra vágyik. Ám a méreg, amit a varázslónő ütődött szolgája, Kronk kever a császár levesébe, nem tökéletes, és Kuzko véletlenül lámává változik. Menekülés közben pedig belekeveredik egy jólelkű pásztor, Pacha nyájába: Pachával csupán az a baj, hogy pont az ő faluját kellett volna lerombolni a vízicsúszda kedvéért.\nMiközben a császár igyekszik megszokni a lámaságot, és így visszajutni a palotába, a nyafka varázslónő és bamba szolgája elkapni szeretné őt. Pacha pedig maga sem tudja, mit tegyen. Segítsen a fenséges és nagyszájú lámának? Vagy jobban jár, ha magára hagyja a dzsungelben?\n', 'https://images.justwatch.com/poster/176971571/s592/eszeveszett-birodalom'),
(13, 'A tengeri fenevad', 'Gyerek/Kaland', 'Chris Williams', '01:55:00', 6, '2D,3D', 2022, 'Magyar', 'Karl Urban, Jared Harris, Marianne Jean-Baptiste', 0, 7.8, 'Egy legendás tengeri szörnyvadász élete a feje tetejére áll, amikor egy fiatal lány a hajójára száll, és összebarátkozik a legveszélyesebb fenevaddal. Egy szörnyvadász élete teljesen megváltozik, miután egy fiatal lány érkezik a hajójára, ő pedig szoros kapcsolatot köt a tenger egyik legveszélyesebb teremtményével.\n', 'https://www.mafab.hu/static/2022/191/10/536243_1657527328.1364.jpg'),
(14, 'Kincs, ami nincs', 'Vígjáték/Kaland', 'Sergio Corbucci', '01:48:00', 12, '2D,3D', 1981, 'Magyar', 'Terence Hill, Bud Spencer, John Fujioka, Sal Borgese, Kainowa Lauritzen, Terry Moni Mapuana, Mirna Seya, Herb Goldstein, Louise Bennett', 0, 9.4, 'Alan (Terence Hill) kincset akar, mégpedig mindenáron. Óriási szerencséjére talál egy térképet, amely egy közeli szigeten kincset jelöl. De hogyan jusson oda? Elrejtőzik Charlie (Bud Spencer), a kalandor hajóján és becsapva az iránytűt, a sziget felé irányítja a hajót. Charlie-nak persze az egyszemélyes hajón nem nehéz megtalálni a potyautast, ám hamarosan mindketten a vízben kötnek ki. Charlie legnagyobb bánatára kénytelenek kiúszni a szigetre, ahol összebarátkoznak a sziget lakóival, a barátságos és vidám királynővel és csinos lányaival, akik elvezetik őket a térképen jelzett helyre. A baj csak az, hogy \"a mesés kincset\" Kamasuka (John Fujioka), a második világháború óta ottfelejtett szamuráj őrzi.', 'https://images.justwatch.com/poster/305566357/s718/kincs-ami-nincs.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kosarak`
--

CREATE TABLE `kosarak` (
  `Datum` date NOT NULL DEFAULT current_timestamp(),
  `VTS_Id` int(11) NOT NULL,
  `VSO_E_mail` varchar(40) NOT NULL,
  `Darabszam` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `kosarak`
--

INSERT INTO `kosarak` (`Datum`, `VTS_Id`, `VSO_E_mail`, `Darabszam`) VALUES
('2024-05-05', 1, 'MatatAKakiban@gmail.com', 199),
('2024-05-05', 2, 'nagymari@gmail.com', 99),
('2024-05-05', 3, 'lakcsiberi@gmail.com', 77),
('2024-05-05', 4, 'keresztlacika@gmail.com', 49);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `mozik`
--

CREATE TABLE `mozik` (
  `Id` int(11) NOT NULL,
  `Telepules_Nev` varchar(30) NOT NULL,
  `Ir_Szam` varchar(30) NOT NULL,
  `Kozterulet_Nev` varchar(30) NOT NULL,
  `Kozterulet_Tipus` varchar(30) NOT NULL,
  `Haz_Szam` int(4) NOT NULL,
  `Mozi_Nev` varchar(30) NOT NULL,
  `Nyitvatartas` varchar(100) NOT NULL,
  `Weboldal` varchar(100) NOT NULL,
  `Telefonszam` varchar(14) NOT NULL,
  `Email_Cim` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `mozik`
--

INSERT INTO `mozik` (`Id`, `Telepules_Nev`, `Ir_Szam`, `Kozterulet_Nev`, `Kozterulet_Tipus`, `Haz_Szam`, `Mozi_Nev`, `Nyitvatartas`, `Weboldal`, `Telefonszam`, `Email_Cim`) VALUES
(1, 'Szeged', '6724', 'Kossuth Lajos', 'sugárút', 119, 'Cinema City', 'első előadás előtt 30 perccel', 'https://www.cinemacity.hu', '0680800800', '-'),
(2, 'Békéscsaba', '5600', 'Andrássy', 'út', 37, 'Center mozi', 'Vetítés előtt 30 perccel', 'https://www.centermozi.hu/', '+36 66-524-500', 'info@centermozi.hu'),
(3, 'Budapest', '1087', 'VIII. kerület, Kerepesi', 'út', 9, 'Cinema City Aréna', 'első vetítés előtt 30 perccel', 'http://www.cinemacity.hu', '+36 80-800-800', '-'),
(4, 'Kecskemét', '6000', 'Korona', 'utca', 2, 'Malom mozi', 'Vetítés előtt 30 perccel', 'http://www.malommozi.hu', '+36 76-900-120', 'kecskemet@malommozi.hu');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `termek`
--

CREATE TABLE `termek` (
  `Id` int(11) NOT NULL,
  `MZI_Id` int(11) NOT NULL,
  `Terem_Nev` varchar(40) NOT NULL,
  `Ferohely` int(4) NOT NULL,
  `Kompatibilis` varchar(30) NOT NULL,
  `Elerheto` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `termek`
--

INSERT INTO `termek` (`Id`, `MZI_Id`, `Terem_Nev`, `Ferohely`, `Kompatibilis`, `Elerheto`) VALUES
(1, 1, 'Keleti', 150, '2D, 3D', 'Elérhető'),
(2, 4, '1-es Terem', 176, '2D,3D', 'Elérhető'),
(3, 3, '1-es Terem', 196, '2D,3D,IMAX,SCREENX', 'Elérhető'),
(4, 2, 'Kelet', 160, '2D,3D', 'Elérhető');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tipusarak`
--

CREATE TABLE `tipusarak` (
  `Datum_Kezdete` datetime NOT NULL DEFAULT current_timestamp(),
  `TPS_Tipus` varchar(10) NOT NULL,
  `AR` int(11) NOT NULL,
  `Datum_Vege` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `tipusarak`
--

INSERT INTO `tipusarak` (`Datum_Kezdete`, `TPS_Tipus`, `AR`, `Datum_Vege`) VALUES
('2024-05-05 00:05:30', '2D', 1999, NULL),
('2024-05-05 00:05:30', '3D', 2999, NULL),
('2024-05-05 00:05:30', 'IMAX', 3999, NULL),
('2024-05-05 00:05:30', 'SCREENX', 4999, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tipusok`
--

CREATE TABLE `tipusok` (
  `Tipus` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `tipusok`
--

INSERT INTO `tipusok` (`Tipus`) VALUES
('2D'),
('3D'),
('IMAX'),
('SCREENX');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `valtozatok`
--

CREATE TABLE `valtozatok` (
  `FIM_Id` int(11) NOT NULL,
  `TPS_Tipus` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `valtozatok`
--

INSERT INTO `valtozatok` (`FIM_Id`, `TPS_Tipus`) VALUES
(1, '2D'),
(2, '2D'),
(3, '3D'),
(4, '2D');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `vasarlok`
--

CREATE TABLE `vasarlok` (
  `Vnev` varchar(40) NOT NULL,
  `Knev` varchar(40) NOT NULL,
  `E_mail` varchar(40) NOT NULL,
  `Telefonszam` varchar(14) NOT NULL,
  `Allapot` varchar(20) NOT NULL,
  `Adoszam` varchar(16) DEFAULT NULL,
  `Jelszo` varchar(2000) NOT NULL,
  `Utolsobelepes_Datum` date NOT NULL DEFAULT current_timestamp(),
  `pKep` varchar(2000) DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png',
  `penz` int(11) NOT NULL DEFAULT 10000
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `vasarlok`
--

INSERT INTO `vasarlok` (`Vnev`, `Knev`, `E_mail`, `Telefonszam`, `Allapot`, `Adoszam`, `Jelszo`, `Utolsobelepes_Datum`, `pKep`, `penz`) VALUES
('Keresztes', 'Lacika', 'keresztlacika@gmail.com', '+36201478625', 'Aktív', NULL, 'asd', '2024-05-05', 'https://www.kepfeltoltes.eu/images/2024/05/04/157asd.png', 10000),
('Lakatos', 'Bertalan', 'lakcsiberi@gmail.com', '+36204586520', 'Aktív', NULL, 'titok_23', '2024-05-05', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png', 10000),
('Nagy', 'Lajos', 'MatatAKakiban@gmail.com', '06302478620', 'Aktív', NULL, 'titok_23', '2024-05-05', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png', 10000),
('Nagy', 'Márta', 'nagymari@gmail.com', '+36301653459', 'Aktív', NULL, 'titok_23', '2024-05-05', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png', 10000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `vetitesek`
--

CREATE TABLE `vetitesek` (
  `Id` int(11) NOT NULL,
  `TRM_Id` int(11) NOT NULL,
  `VTT_FIM_Id` int(11) NOT NULL,
  `VTT_TPS_Tipus` varchar(10) NOT NULL,
  `Helyek_Szama` int(11) NOT NULL,
  `Datum` varchar(12) NOT NULL DEFAULT current_timestamp(),
  `IdoPont` varchar(10) NOT NULL DEFAULT '09:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `vetitesek`
--

INSERT INTO `vetitesek` (`Id`, `TRM_Id`, `VTT_FIM_Id`, `VTT_TPS_Tipus`, `Helyek_Szama`, `Datum`, `IdoPont`) VALUES
(1, 1, 1, '2D', 150, '2024-05-05', '09:00'),
(2, 2, 2, '2D', 176, '2024-05-05', '09:00'),
(3, 3, 3, '3D', 196, '2024-05-05', '09:00'),
(4, 4, 4, '2D', 160, '2024-05-05', '09:00'),
(5, 1, 1, '2D', 150, '2024-05-05', '09:00');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `ertekesitesek`
--
ALTER TABLE `ertekesitesek`
  ADD PRIMARY KEY (`Datum`,`VTS_Id`,`VSO_E_mail`),
  ADD KEY `VTS_Id` (`VTS_Id`),
  ADD KEY `VSO_E_mail` (`VSO_E_mail`);

--
-- A tábla indexei `filmek`
--
ALTER TABLE `filmek`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `kosarak`
--
ALTER TABLE `kosarak`
  ADD PRIMARY KEY (`Datum`,`VTS_Id`,`VSO_E_mail`),
  ADD KEY `VTS_Id` (`VTS_Id`),
  ADD KEY `VSO_E_mail` (`VSO_E_mail`);

--
-- A tábla indexei `mozik`
--
ALTER TABLE `mozik`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `termek`
--
ALTER TABLE `termek`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `MZI_Id` (`MZI_Id`);

--
-- A tábla indexei `tipusarak`
--
ALTER TABLE `tipusarak`
  ADD PRIMARY KEY (`Datum_Kezdete`,`TPS_Tipus`),
  ADD KEY `TPS_Tipus` (`TPS_Tipus`);

--
-- A tábla indexei `tipusok`
--
ALTER TABLE `tipusok`
  ADD PRIMARY KEY (`Tipus`);

--
-- A tábla indexei `valtozatok`
--
ALTER TABLE `valtozatok`
  ADD PRIMARY KEY (`FIM_Id`,`TPS_Tipus`),
  ADD KEY `TPS_Tipus` (`TPS_Tipus`);

--
-- A tábla indexei `vasarlok`
--
ALTER TABLE `vasarlok`
  ADD PRIMARY KEY (`E_mail`);

--
-- A tábla indexei `vetitesek`
--
ALTER TABLE `vetitesek`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `TRM_Id` (`TRM_Id`),
  ADD KEY `VTT_FIM_Id` (`VTT_FIM_Id`),
  ADD KEY `VTT_TPS_Tipus` (`VTT_TPS_Tipus`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `filmek`
--
ALTER TABLE `filmek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `mozik`
--
ALTER TABLE `mozik`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `termek`
--
ALTER TABLE `termek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `vetitesek`
--
ALTER TABLE `vetitesek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `ertekesitesek`
--
ALTER TABLE `ertekesitesek`
  ADD CONSTRAINT `ertekesitesek_ibfk_1` FOREIGN KEY (`VTS_Id`) REFERENCES `vetitesek` (`Id`),
  ADD CONSTRAINT `ertekesitesek_ibfk_2` FOREIGN KEY (`VSO_E_mail`) REFERENCES `vasarlok` (`E_mail`);

--
-- Megkötések a táblához `kosarak`
--
ALTER TABLE `kosarak`
  ADD CONSTRAINT `kosarak_ibfk_1` FOREIGN KEY (`VTS_Id`) REFERENCES `vetitesek` (`Id`),
  ADD CONSTRAINT `kosarak_ibfk_2` FOREIGN KEY (`VSO_E_mail`) REFERENCES `vasarlok` (`E_mail`);

--
-- Megkötések a táblához `termek`
--
ALTER TABLE `termek`
  ADD CONSTRAINT `termek_ibfk_1` FOREIGN KEY (`MZI_Id`) REFERENCES `mozik` (`Id`);

--
-- Megkötések a táblához `tipusarak`
--
ALTER TABLE `tipusarak`
  ADD CONSTRAINT `tipusarak_ibfk_1` FOREIGN KEY (`TPS_Tipus`) REFERENCES `tipusok` (`Tipus`);

--
-- Megkötések a táblához `valtozatok`
--
ALTER TABLE `valtozatok`
  ADD CONSTRAINT `valtozatok_ibfk_1` FOREIGN KEY (`FIM_Id`) REFERENCES `filmek` (`Id`),
  ADD CONSTRAINT `valtozatok_ibfk_2` FOREIGN KEY (`TPS_Tipus`) REFERENCES `tipusok` (`Tipus`);

--
-- Megkötések a táblához `vetitesek`
--
ALTER TABLE `vetitesek`
  ADD CONSTRAINT `vetitesek_ibfk_1` FOREIGN KEY (`TRM_Id`) REFERENCES `termek` (`Id`),
  ADD CONSTRAINT `vetitesek_ibfk_2` FOREIGN KEY (`VTT_FIM_Id`) REFERENCES `valtozatok` (`FIM_Id`),
  ADD CONSTRAINT `vetitesek_ibfk_3` FOREIGN KEY (`VTT_TPS_Tipus`) REFERENCES `valtozatok` (`TPS_Tipus`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
