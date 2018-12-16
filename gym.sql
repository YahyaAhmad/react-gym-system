-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2018 at 10:57 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `Username`, `Password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `ID` int(11) NOT NULL,
  `Exp_Date` date NOT NULL,
  `UserID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`ID`, `Exp_Date`, `UserID`) VALUES
(27, '2019-01-03', 52),
(28, '2019-01-15', 53),
(29, '2018-11-02', 54),
(30, '2019-03-15', 55),
(31, '2019-01-15', 56),
(32, '2019-01-15', 57),
(33, '2019-12-16', 58),
(35, '2019-01-15', 60),
(36, '2019-01-15', 61),
(37, '2019-01-15', 62),
(38, '2019-01-15', 63),
(39, '2019-01-16', 64),
(40, '2019-05-16', 65),
(41, '2019-03-16', 66),
(42, '2019-09-16', 67);

-- --------------------------------------------------------

--
-- Table structure for table `coach`
--

CREATE TABLE `coach` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coach`
--

INSERT INTO `coach` (`ID`, `UserID`) VALUES
(1, 45);

-- --------------------------------------------------------

--
-- Table structure for table `finance`
--

CREATE TABLE `finance` (
  `ID` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `UserID` int(11) NOT NULL,
  `OfferID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `finance`
--

INSERT INTO `finance` (`ID`, `Date`, `UserID`, `OfferID`) VALUES
(1, '2018-12-13 00:00:00', 56, 2),
(2, '2018-12-16 21:51:49', 64, 1),
(3, '2018-12-16 21:54:23', 65, 3),
(4, '2018-12-16 21:55:04', 66, 2),
(5, '2018-12-16 00:00:00', 58, 1),
(6, '2018-12-16 00:00:00', 58, 2),
(7, '2018-12-16 22:55:47', 58, 3),
(8, '2018-12-16 22:57:07', 67, 5);

-- --------------------------------------------------------

--
-- Table structure for table `inouts`
--

CREATE TABLE `inouts` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Status` int(11) NOT NULL,
  `Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inouts`
--

INSERT INTO `inouts` (`ID`, `UserID`, `Status`, `Date`) VALUES
(1, 52, 1, '0000-00-00 00:00:00'),
(2, 57, 0, '0000-00-00 00:00:00'),
(3, 58, 0, '0000-00-00 00:00:00'),
(12, 60, 0, '0000-00-00 00:00:00'),
(13, 61, 0, '0000-00-00 00:00:00'),
(14, 62, 0, '2018-12-15 00:00:00'),
(15, 58, 1, '2018-12-15 00:00:00'),
(16, 63, 0, '2018-12-15 00:00:00'),
(17, 58, 0, '2018-12-15 00:00:00'),
(18, 58, 1, '2018-12-15 20:21:33'),
(19, 58, 0, '2018-12-15 20:23:31'),
(20, 58, 1, '2018-12-15 20:23:40'),
(21, 64, 0, '2018-12-16 21:51:49'),
(22, 65, 0, '2018-12-16 21:54:23'),
(23, 66, 0, '2018-12-16 21:55:04'),
(24, 58, 0, '2018-12-16 22:15:09'),
(25, 58, 1, '2018-12-16 22:16:23'),
(26, 58, 0, '2018-12-16 22:19:48'),
(27, 58, 1, '2018-12-16 22:24:00'),
(28, 58, 0, '2018-12-16 22:24:37'),
(29, 58, 1, '2018-12-16 22:34:09'),
(30, 58, 0, '2018-12-16 22:36:04'),
(31, 58, 1, '2018-12-16 22:36:38'),
(32, 58, 0, '2018-12-16 22:46:02'),
(33, 58, 1, '2018-12-16 22:48:44'),
(34, 58, 0, '2018-12-16 22:49:30'),
(35, 58, 1, '2018-12-16 22:49:55'),
(36, 58, 0, '2018-12-16 22:52:37'),
(37, 58, 1, '2018-12-16 22:54:50'),
(38, 67, 0, '2018-12-16 22:57:07');

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE `offer` (
  `ID` int(11) NOT NULL,
  `Duration` int(11) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `Deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `offer`
--

INSERT INTO `offer` (`ID`, `Duration`, `Price`, `Deleted`) VALUES
(1, 1, '15', 0),
(2, 3, '40', 0),
(3, 5, '55', 0),
(4, 6, '58', 0),
(5, 9, '55', 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `OfferID` int(11) NOT NULL,
  `ClientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `Full_Name` varchar(150) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Code` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Full_Name`, `Email`, `Code`) VALUES
(45, 'Yahya Omar Ali Ahmad', 'mugewara2@gmail.com', '{06F37C15-6F51-8F3F-00F7-0E59B6D63994}'),
(46, 'dfas', 'sadf', '{C16FB8C2-C6D8-16F2-6AEE-07A2FA54A569}'),
(52, 'ASD', 'abcd@yahoo.com', '{83FEEB9B-249B-833C-6B79-AAA48FB7A941}'),
(53, 'yaaa', 'asdasdas@yahhoo.com', '{2DEE81C1-BB8E-2DA7-D9D6-46F549661F1F}'),
(54, 'Test Name', 'mugewara1@gmail.com', '{D387342C-3682-B126-70DB-327EADA0877B}'),
(55, 'TTttttt', 'mugewara1@gmail.com', '{A24AEFDE-987A-57D6-01C2-BBEB8E4FC302}'),
(56, 'asd', 'sdfsdf', '{B0E99CFD-61C4-9615-9AC9-A0F1649D918F}'),
(57, 'sadfsadf', 'sadgdfagdf', '{C7AE6FA0-0757-78A1-3011-306F37D72EB5}'),
(58, 'New INOUT', 'mugewara1@gmail.com', '{4B6DA59A-9270-BE7E-5FD5-EBFB96A2607E}'),
(60, 'sadf', 'asgsd', '{E4BDE4E3-945D-BC16-EC58-0EC3925B9AE4}'),
(61, 'sadf', 'asgsd', '{9BA5A0A1-A48F-BEAE-FCEF-C55DCDF3596D}'),
(62, 'sadf', 'asgsd', '{AA6917B6-9DCB-FF3A-0643-91FAC752BCD6}'),
(63, 'sadf', 'asgsd', '{E1C3A79C-AD53-2630-5DE7-21BF3512FD70}'),
(64, 'new user', 'sdfsdf', '{34E76998-5732-7582-A6FF-454C60D09724}'),
(65, 'sdafasdfasdfsd', 'asfasdf', '{4C57C8F2-0C0E-FEA4-4AB3-DE9170207674}'),
(66, 'sssssss', 'sdf', '{9E952F7E-7948-4E45-9082-BA630BC4F519}'),
(67, 'dg', 'df', '{0C89CB0F-2216-FB77-88F4-83C53D8BC1BD}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `coach`
--
ALTER TABLE `coach`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `finance`
--
ALTER TABLE `finance`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `OfferID` (`OfferID`);

--
-- Indexes for table `inouts`
--
ALTER TABLE `inouts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `OfferID` (`OfferID`),
  ADD KEY `ClientID` (`ClientID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `coach`
--
ALTER TABLE `coach`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `finance`
--
ALTER TABLE `finance`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `inouts`
--
ALTER TABLE `inouts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `offer`
--
ALTER TABLE `offer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `Client_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`ID`);

--
-- Constraints for table `coach`
--
ALTER TABLE `coach`
  ADD CONSTRAINT `Coach_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`ID`);

--
-- Constraints for table `finance`
--
ALTER TABLE `finance`
  ADD CONSTRAINT `finance_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `finance_ibfk_2` FOREIGN KEY (`OfferID`) REFERENCES `offer` (`ID`);

--
-- Constraints for table `inouts`
--
ALTER TABLE `inouts`
  ADD CONSTRAINT `inouts_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`ID`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`OfferID`) REFERENCES `offer` (`ID`),
  ADD CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`ClientID`) REFERENCES `client` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
