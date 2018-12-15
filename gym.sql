-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 15, 2018 at 06:47 PM
-- Server version: 5.7.24-0ubuntu0.18.04.1
-- PHP Version: 7.2.11-3+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `ID` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Admin`
--

INSERT INTO `Admin` (`ID`, `Username`, `Password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `Client`
--

CREATE TABLE `Client` (
  `ID` int(11) NOT NULL,
  `Exp_Date` date NOT NULL,
  `UserID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Client`
--

INSERT INTO `Client` (`ID`, `Exp_Date`, `UserID`) VALUES
(21, '2019-01-03', 46),
(22, '2019-01-03', 47),
(23, '2019-01-03', 48),
(24, '2019-01-03', 49),
(25, '2019-03-03', 50),
(26, '2019-01-03', 51),
(27, '2019-01-03', 52),
(28, '2019-01-15', 53);

-- --------------------------------------------------------

--
-- Table structure for table `Coach`
--

CREATE TABLE `Coach` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Coach`
--

INSERT INTO `Coach` (`ID`, `UserID`) VALUES
(1, 45);

-- --------------------------------------------------------

--
-- Table structure for table `Offer`
--

CREATE TABLE `Offer` (
  `ID` int(11) NOT NULL,
  `Duration` int(11) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `Deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Offer`
--

INSERT INTO `Offer` (`ID`, `Duration`, `Price`, `Deleted`) VALUES
(1, 1, '15', 0),
(2, 3, '40', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `ID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `OfferID` int(11) NOT NULL,
  `ClientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `ID` int(11) NOT NULL,
  `Full_Name` varchar(150) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Code` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`ID`, `Full_Name`, `Email`, `Code`) VALUES
(45, 'Yahya Omar Ali Ahmad', 'mugewara2@gmail.com', '{06F37C15-6F51-8F3F-00F7-0E59B6D63994}'),
(46, 'dfas', 'sadf', '{C16FB8C2-C6D8-16F2-6AEE-07A2FA54A569}'),
(47, 'dfasg', 'sadfd', '{6CD48B74-39BF-B0AF-C2D3-5C0246310BC4}'),
(48, 'dfasg', 'sadfd', '{4D11E051-4944-BB26-0692-3AC0BE1FE2FC}'),
(49, 'dfasg', 'sadfd', '{17E1EF5E-0D96-09DF-6F67-418700ECBD55}'),
(50, 'Yahya Omar', 'mugewara2@gmail.com', '{B84B80E4-F6F8-F963-9B4F-526B36E40501}'),
(51, 'SoSo', 'mugewara2@gmail.com', '{D9C84A4D-E668-7DD9-443E-E6CA06A0934F}'),
(52, 'ASD', 'abcd@yahoo.com', '{83FEEB9B-249B-833C-6B79-AAA48FB7A941}'),
(53, 'yaaa', 'asdasdas@yahhoo.com', '{2DEE81C1-BB8E-2DA7-D9D6-46F549661F1F}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Client`
--
ALTER TABLE `Client`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `Coach`
--
ALTER TABLE `Coach`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `Offer`
--
ALTER TABLE `Offer`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `OfferID` (`OfferID`),
  ADD KEY `ClientID` (`ClientID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Client`
--
ALTER TABLE `Client`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `Coach`
--
ALTER TABLE `Coach`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Offer`
--
ALTER TABLE `Offer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Client`
--
ALTER TABLE `Client`
  ADD CONSTRAINT `Client_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

--
-- Constraints for table `Coach`
--
ALTER TABLE `Coach`
  ADD CONSTRAINT `Coach_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`OfferID`) REFERENCES `Offer` (`ID`),
  ADD CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`ClientID`) REFERENCES `Client` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
