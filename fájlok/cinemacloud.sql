-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 29. 09:38
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `cinemacloud`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `ertekesitesek`
--

INSERT INTO `ertekesitesek` (`Datum`, `VTS_Id`, `VSO_E_mail`, `Sorozatszam`) VALUES
('2024-04-29 09:36:59', 1, 'MatatAKakiban@gmail.com', '12345678901234567890'),
('2024-04-29 09:36:59', 2, 'nagymari@gmail.com', '19658742365889414550'),
('2024-04-29 09:36:59', 3, 'lakcsiberi@gmail.com', '15478903260214578960'),
('2024-04-29 09:36:59', 4, 'keresztlacika@gmail.com', '14536021478960215780');

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
  `leiras` varchar(500) DEFAULT NULL,
  `kepLink` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `filmek`
--

INSERT INTO `filmek` (`Id`, `Cim`, `Kategoria`, `Rendezo`, `Hossz`, `Korhatar`, `Tipus`, `Megjelenesi_Ev`, `Nyelv`, `Szereplok`, `Felirat`, `ertekeles`, `leiras`, `kepLink`) VALUES
(1, 'Az – Második fejezet', 'Horror', 'Andy Muschietti', '02:49:00', 18, '2D,3D', 2019, 'Magyar', 'James McAvoy, Jessica Chastain, Bill Hader, Isaiah Mustafa, Jay Ryan, Bill Skarsgård, James Ransone, Andy Bean, Teach Grant, Jaeden Martell, Sophia Lillis, Finn Wolfhard, Chosen Jacobs, Jeremy Ray Taylor, Jack Dylan Grazer profilképeJack Dylan Grazer, Wyatt Oleff, Nicholas Hamilton, Javier Botet, Xavier Dolan profilképeXavier Dolan, Jess Weixler profilképeJess Weixler, Ryan Kiera Armstrong', 0, NULL, NULL, 'https://media.port.hu/images/001/158/794.jpg'),
(2, 'A nyolcadik utas: a Halál', 'Horror', 'Ridley Scott', '01:57:00', 15, '2D', 1979, 'Magyar', 'Sigourney Weaver, John Hurt, Tom Skerritt, Veronica Cartwright, Harry Dean Stanton, Sir Ian Holm, Yaphet Kotto', 0, NULL, NULL, 'https://upload.wikimedia.org/wikipedia/hu/c/cd/A_nyolcadik_utas_a_Hal%C3%A1l.png'),
(3, 'Jurassic World: Világuralom', 'Akció/Sci-fi,kalandfilm', 'Colin Trevorrow', '02:26:00', 16, '2D,3D', 2022, 'Magyar', 'Bryce Dallas Howard, Chris Pratt, Dichen Lachman, Sam Neill, Laura Dern, Jake Johnson, Jeff Goldblum, Justice Smith, Daniella Pineda, B.D. Wong, Omar Sy, Mamoudou Athie, DeWanda Wise, Scott Haze', 0, NULL, NULL, 'https://media.port.hu/images/001/485/113.jpg'),
(4, 'Ted', 'vígjáték', 'Seth MacFarlane', '01:46:00', 16, '2D,3D', 2012, 'Magyar', 'Mark Wahlberg, Seth MacFarlane,Mila Kunis,Giovanni Ribisi,Patrick Warburton,Laura Vandervoort,Joel McHale,Melissa Ordway,Jessica Barth,Jessica Stroup,Ralph Garman', 0, NULL, NULL, 'https://m.media-amazon.com/images/M/MV5BNDlkYzIwYTYtOWZjMC00M2NlLWI1NDgtNjUzN2NmYWI5YThkXkEyXkFqcGdeQXVyMTYzMjQ4Nzg@._V1_.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kosarak`
--

CREATE TABLE `kosarak` (
  `Datum` date NOT NULL DEFAULT current_timestamp(),
  `VTS_Id` int(11) NOT NULL,
  `VSO_E_mail` varchar(40) NOT NULL,
  `Darabszam` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kosarak`
--

INSERT INTO `kosarak` (`Datum`, `VTS_Id`, `VSO_E_mail`, `Darabszam`) VALUES
('2024-04-29', 1, 'MatatAKakiban@gmail.com', 199),
('2024-04-29', 2, 'nagymari@gmail.com', 99),
('2024-04-29', 3, 'lakcsiberi@gmail.com', 77),
('2024-04-29', 4, 'keresztlacika@gmail.com', 49);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tipusarak`
--

INSERT INTO `tipusarak` (`Datum_Kezdete`, `TPS_Tipus`, `AR`, `Datum_Vege`) VALUES
('2024-04-29 09:36:59', '2D', 1999, NULL),
('2024-04-29 09:36:59', '3D', 2999, NULL),
('2024-04-29 09:36:59', 'IMAX', 3999, NULL),
('2024-04-29 09:36:59', 'SCREENX', 4999, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tipusok`
--

CREATE TABLE `tipusok` (
  `Tipus` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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
  `Jelszo` varchar(40) NOT NULL,
  `Utolsobelepes_Datum` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `vasarlok`
--

INSERT INTO `vasarlok` (`Vnev`, `Knev`, `E_mail`, `Telefonszam`, `Allapot`, `Adoszam`, `Jelszo`, `Utolsobelepes_Datum`) VALUES
('Keresztes', 'Lacika', 'keresztlacika@gmail.com', '+36201478625', 'Aktív', NULL, 'titok_23', '2024-04-29'),
('Lakatos', 'Bertalan', 'lakcsiberi@gmail.com', '+36204586520', 'Aktív', NULL, 'titok_23', '2024-04-29'),
('Nagy', 'Lajos', 'MatatAKakiban@gmail.com', '06302478620', 'Aktív', NULL, 'titok_23', '2024-04-29'),
('Nagy', 'Márta', 'nagymari@gmail.com', '+36301653459', 'Aktív', NULL, 'titok_23', '2024-04-29');

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
  `Datum` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `vetitesek`
--

INSERT INTO `vetitesek` (`Id`, `TRM_Id`, `VTT_FIM_Id`, `VTT_TPS_Tipus`, `Helyek_Szama`, `Datum`) VALUES
(1, 1, 1, '2D', 0, '2024-04-29 09:36:59'),
(2, 2, 2, '2D', 0, '2024-04-29 09:36:59'),
(3, 3, 3, '3D', 0, '2024-04-29 09:36:59'),
(4, 4, 4, '2D', 0, '2024-04-29 09:36:59');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
