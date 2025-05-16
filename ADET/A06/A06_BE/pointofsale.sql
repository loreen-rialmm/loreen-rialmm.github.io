-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2025 at 10:37 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pointofsale`
--

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `artistID` int(4) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `name` varchar(30) NOT NULL,
  `code` varchar(20) NOT NULL,
  `isAvailable` varchar(6) NOT NULL DEFAULT 'True',
  `image` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`artistID`, `categoryID`, `name`, `code`, `isAvailable`, `image`) VALUES
(1, 1, 'Twice', 'TWC', 'True', 'GG-TWC'),
(2, 1, 'Aespa', 'AES', 'True', 'GG-AES'),
(3, 1, 'IVE', 'IVE', 'True', 'GG-IVE'),
(4, 1, 'Itzy', 'ITZ', 'True', 'GG-ITZY'),
(5, 1, 'Le Sserafim', 'LEF', 'True', 'GG-LEF'),
(6, 2, 'Stray Kids', 'SKZ', 'True', 'BG-SKZ'),
(7, 2, 'ENHYPEN', 'ENH', 'True', 'BG-ENH'),
(8, 2, 'Seventeen', 'SVT', 'True', 'BG-SVT'),
(9, 2, 'Xdinary Heroes', 'XDH', 'True', 'BG-XDH'),
(10, 3, 'Lee Young Ji', 'LYJ', 'True', 'soloist-LYJ'),
(11, 3, 'Jaehyun', 'JHY', 'True', 'soloist-JHY');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(5) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`) VALUES
(1, 'Girl Groups'),
(2, 'Boy Groups'),
(3, 'Soloists');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(5) NOT NULL,
  `artistID` int(5) NOT NULL,
  `name` varchar(70) NOT NULL,
  `code` varchar(50) NOT NULL,
  `price` int(5) NOT NULL,
  `isAvailable` varchar(6) NOT NULL DEFAULT 'true',
  `inclusions` varchar(300) DEFAULT NULL,
  `image` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `artistID`, `name`, `code`, `price`, `isAvailable`, `inclusions`, `image`) VALUES
(1, 1, 'Twice - Twicetagram (Version A)', 'TWC_ALB_TCG_VER-A', 1100, 'True', 'Photobook, Photocard, Lyric Book, Sticker', 'twicetagram_verA'),
(2, 1, 'Twice - Twicetagram (Version B)', 'TWC_ALB_TCG_VER-B', 1100, 'True', 'Photobook, Photocard, Lyric Book, Sticker', 'twicetagram_verB'),
(3, 1, 'Twice - Twicetagram (Version C)', 'TWC_ALB_TCG_VER-C', 1100, 'True', 'Photobook, Photocard, Lyric Book, Sticker', 'twicetagram_verC'),
(4, 1, 'Twice - Eyes Wide Open (Story Version)', 'TWC_ALB_EWO_VER-STY', 1300, 'True', 'Photobook, CD-R, Lyric Book, Photocard (random 2 of 100), Message Card (random 1 of 9), Behind the Scenes Booklet, Poster (Pre-order Only)', 'eyeswideopen_story'),
(5, 1, 'Twice - Eyes Wide Open (Style Version)', 'TWC_ALB_EWO_VER-STL', 1300, 'True', 'Photobook, CD-R, Lyric Book, Photocard (random 2 of 100), Message Card (random 1 of 9), Behind the Scenes Booklet, Poster (Pre-order Only)', 'eyeswideopen_style'),
(6, 1, 'Twice - Eyes Wide Open (Retro Version)', 'TWC_ALB_EWO_VER-RET', 1300, 'True', 'Photobook, CD-R, Lyric Book, Photocard (random 2 of 100), Message Card (random 1 of 9), Behind the Scenes Booklet, Poster (Pre-order Only)', 'eyeswideopen_retro'),
(7, 2, 'Aespa - Savage (Version A Savage)', 'AES_ALB_SVG_VER-A', 1200, 'True', 'Photobook, Photocard, Poster, Sticker', 'aespaSavageVerA'),
(8, 2, 'Aespa - Savage (Version B Savage)', 'AES_ALB_SVG_VER-B', 1250, 'True', 'Photobook, Photocard, Poster, Sticker', 'aespaSavageVerB'),
(9, 2, 'Aespa - Drama (Version A - Drama Version)', 'AES_ALB_DRM_VER-A', 1000, 'True', 'Photobook, Photocard, Poster, Sticker', 'aespaDramaVerA'),
(10, 2, 'Aespa - Drama (Version B - Giant Version)', 'AES_ALB_DRM_VER-B', 1050, 'True', 'Photobook, Photocard, Poster, Sticker', 'aespaDramaVerB'),
(11, 3, 'IVE - After LIKE (Version A After LIKE)', 'IVE_ALB_AL_VER-A', 1200, 'True', 'Photobook, Photocard, Poster, Sticker', 'iveAlVerA'),
(12, 3, 'IVE - After LIKE (Version B After LIKE)', 'IVE_ALB_AL_VER-B', 1250, 'True', 'Photobook, Photocard, Poster, Sticker', 'iveAlVerB'),
(13, 3, 'IVE - After LIKE (Version C After LIKE)', 'IVE_ALB_AL_VER-C', 1250, 'True', 'Photobook, Photocard, Poster, Sticker', 'iveAlVerC'),
(14, 3, 'IVE - LOVE DIVE (Version A - LOVE DIVE)', 'IVE_ALB_LD_VER-A', 890, 'True', 'Photobook, Photocard, Poster, Sticker', 'iveLdVerA'),
(15, 3, 'IVE - LOVE DIVE (Version B - LOVE DIVE)', 'IVE_ALB_LD_VER-B', 1000, 'True', 'Photobook, Photocard, Poster, Sticker', 'iveLdVerB'),
(16, 3, 'IVE - LOVE DIVE (Version C - LOVE DIVE)', 'IVE_ALB_LD_VER-C', 890, 'True', 'Photobook, Photocard, Poster, Sticker', 'iveLdVerC'),
(17, 4, 'Itzy - Crazy in Love (Version A Sterio Version)', 'ITZ_ALB_CIL_VER-A', 1100, 'True', 'Photobook, Photocard, Poster, Sticker', 'itzyCILVerA'),
(18, 4, 'Itzy - Crazy in Love (Version B Photobook Version)', 'ITZ_ALB_CIL_VER-B', 1150, 'True', 'Photobook, Photocard, Poster, Sticker', 'itzyCILVerB'),
(19, 4, 'Itzy - Crazy in Love (Version B Jewel Case Version)', 'ITZ_ALB_CIL_VER-C', 1150, 'True', 'Photobook, Photocard, Poster, Sticker', 'itzyCILVerC'),
(20, 5, 'Le Sserafim - FEARLESS (Version A FEARLESS)', 'LEF_ALB_FL_VER-A', 1300, 'True', 'Photobook, Photocard, Poster, Sticker', 'leserafimFearlessVerA'),
(21, 5, 'Le Sserafim - FEARLESS (Version B FEARLESS)', 'LEF_ALB_FL_VER-B', 1350, 'True', 'Photobook, Photocard, Poster, Sticker', 'leserafimFearlessVerB'),
(22, 5, 'Le Sserafim - UNFORGIVEN (Version A UNFORGIVEN)', 'LEF_ALB_UNF_VER-A Dewy Sage', 1300, 'True', 'Photobook, Photocard, Poster, Sticker', 'lesserafimUNFVerA'),
(23, 5, 'Le Sserafim - UNFORGIVEN (Version B UNFORGIVEN)', 'LEF_ALB_UNF_VER-B Dusty Amber', 1350, 'True', 'Photobook, Photocard, Poster, Sticker', 'lesserafimUNFVerB'),
(24, 5, 'Le Sserafim - UNFORGIVEN (Version C UNFORGIVEN)', 'LEF_ALB_UNF_VER-C Bloody Rose', 1350, 'True', 'Photobook, Photocard, Poster, Sticker', 'lesserafimUNFVerC'),
(25, 6, 'Stray Kids - I Am Not (I am Version)', 'SKZ_ALB_IAMNOT_VER_IAN_IAM', 1500, 'True', 'CD, Photobook, Photocard, Lyric Book, Poster (Pre-order benefit)', 'skz_iamnot_i_am'),
(26, 6, 'Stray Kids - I Am Not (NOT Version)', 'SKZ_ALB_IAMNOT_VER_IAN_NOT', 1500, 'True', 'CD, Photobook, Photocard, Lyric Book, Poster (Pre-order benefit)', 'skz_iamnot_not'),
(27, 6, 'Stray Kids - I Am Who (I am Version)', 'SKZ_ALB_IAMWHO_VER_IAM', 1500, 'True', 'CD, Photobook, Photocard, Lyric Book, Poster (Pre-order benefit)', 'skz_iamwho_i_am'),
(28, 6, 'Stray Kids - I Am Who (WHO Version)', 'SKZ_ALB_IAMWHO_VER_WHO', 1500, 'True', 'CD, Photobook, Photocard, Lyric Book, Poster (Pre-order benefit)', 'skz_iamwho_who'),
(29, 6, 'Stray Kids - I Am You (I am Version)', 'SKZ_ALB_IAY_VER_IAM', 1500, 'True', 'CD, Photobook, QR Photocard, Poster (Pre-order benefit), Postcard Book (Pre-order benefit)', 'skz_iamyou_i_am'),
(30, 6, 'Stray Kids - I Am You (YOU Version)', 'SKZ_ALB_IAY_VER_YOU', 1500, 'True', 'CD, Photobook, QR Photocard, Poster (Pre-order benefit), Postcard Book (Pre-order benefit)', 'skz_iamyou_you'),
(31, 6, 'Stray Kids - Giant (Limited A Version)', 'SKZ_ALB_GIANT_VER_A', 1800, 'True', 'CD, Blu-ray, Photobook, Photocard, Poster', 'skz_giant_limited_a'),
(32, 6, 'Stray Kids - Giant (Limited B Version)', 'SKZ_ALB_GIANT_VER_B', 1800, 'True', 'CD, Photobook, Photocard, Poster', 'skz_giant_limited_b'),
(33, 6, 'Stray Kids - Giant (Standard Version)', 'SKZ_ALB_GIANT_VER_STD', 1800, 'True', 'CD, Photobook, Photocard, Poster', 'skz_giant_standard'),
(34, 7, 'ENHYPEN - Dimension: Dilemma (Scylla Version)', 'ENH_ALB_DD_VER_SCYLLA', 1500, 'True', 'CD, 112-page Photobook, 20-page Lyric Book, Photocard (Random 1 of 8), Hologram Photocard (Random 1 of 7), Mini Poster (Random 1 of 7), Sticker', 'enhypen_dd_scylla'),
(35, 7, 'ENHYPEN - Dimension: Dilemma (Odysseus Version)', 'ENH_ALB_DD_VER_ODYSSEUS', 1500, 'True', 'CD, 120-page Photobook, 20-page Lyric Book, Photocard (Random 1 of 8), Hologram Photocard (Random 1 of 7), Mini Poster (Random 1 of 7), Sticker', 'enhypen_dd_odysseus'),
(36, 7, 'ENHYPEN - Dimension: Dilemma (Charybdis Version)', 'ENH_ALB_DD_VER_CHARYBDIS', 1500, 'True', 'CD, 112-page Photobook, 20-page Lyric Book, Photocard (Random 1 of 8), Hologram Photocard (Random 1 of 7), Mini Poster (Random 1 of 7), Sticker', 'enhypen_dd_charybdis'),
(37, 7, 'ENHYPEN - Dimension: Dilemma (Essential Version)', 'ENH_ALB_DD_VER_ESSENTIAL', 1500, 'True', 'CD (Digipak Case), 52-page Photobook, Mini Poster, Photocard A (Random 1 of 21), Photocard B (Random 1 of 3), Top Loader, Sticker', 'enhypen_dd_essential'),
(38, 8, 'Seventeen - An Ode (Begin Version)', 'SVT_ALB_AO_VER_BEGIN', 1500, 'True', '104-page Photobook, CD-R, Mini Photobook (8 pages, Random 1 of 13), Photocard (Random 4 of 52), Seventeen Sticker (First press only), Clear Sticker (Random 1 of 13) (First press only), Folding Poster (Random 1 of 13) (First press only), Poster (Random 1 of 4) (First press only)', 'svt_ao_begin'),
(39, 8, 'Seventeen - An Ode (The Poet Version)', 'SVT_ALB_AO_VER_POET', 1500, 'True', '104-page Photobook, CD-R, Mini Photobook (8 pages, Random 1 of 13), Photocard (Random 4 of 52), Seventeen Sticker (First press only), Clear Sticker (Random 1 of 13) (First press only), Folding Poster (Random 1 of 13) (First press only), Poster (Random 1 of 4) (First press only)', 'svt_ao_poet'),
(40, 8, 'Seventeen - An Ode (Hope Version)', 'SVT_ALB_AO_VER_HOPE', 1500, 'True', '104-page Photobook, CD-R, Mini Photobook (8 pages, Random 1 of 13), Photocard (Random 4 of 52), Seventeen Sticker (First press only), Clear Sticker (Random 1 of 13) (First press only), Folding Poster (Random 1 of 13) (First press only), Poster (Random 1 of 4) (First press only)', 'svt_ao_hope'),
(41, 8, 'Seventeen - An Ode (Truth Version)', 'SVT_ALB_AO_VER_TRUTH', 1500, 'True', '104-page Photobook, CD-R, Mini Photobook (8 pages, Random 1 of 13), Photocard (Random 4 of 52), Seventeen Sticker (First press only), Clear Sticker (Random 1 of 13) (First press only), Folding Poster (Random 1 of 13) (First press only), Poster (Random 1 of 4) (First press only)', 'svt_ao_truth'),
(42, 8, 'Seventeen - An Ode (Real Version)', 'SVT_ALB_AO_VER_REAL', 1500, 'True', '104-page Photobook, CD-R, Mini Photobook (8 pages, Random 1 of 13), Photocard (Random 4 of 52), Seventeen Sticker (First press only), Clear Sticker (Random 1 of 13) (First press only), Folding Poster (Random 1 of 13) (First press only), Poster (Random 1 of 4) (First press only)', 'svt_ao_real'),
(43, 8, 'Seventeen - An Ode (Standard Version)', 'SVT_ALB_AO_VER_STD', 1500, 'True', '104-page Photobook, CD-R, Mini Photobook (8 pages, Random 1 of 13), Photocard (Random 4 of 52), Seventeen Sticker (First press only), Clear Sticker (Random 1 of 13) (First press only), Folding Poster (Random 1 of 13) (First press only), Poster (Random 1 of 4) (First press only)', 'svt_ao_std'),
(44, 9, 'Xdinary Heroes - Hello, World! (Tutorial Session)', 'XDH_ALB_HW_VER_TS', 1300, 'True', '88-page Photobook, CD-R, Photocard (Random 1 of 12), Folding Photocard (Random 1 of 6), Pop-up Card, Hologram Sticker, Hidden Poster (Random 1 of 7) (Pre-order only), Autographed Polaroid Photo (Randomly included in 300 first-press copies)', 'xdh_hw_ts'),
(45, 9, 'Xdinary Heroes - Hello, World! (Practice Session)', 'XDH_ALB_HW_VER_PS', 1300, 'True', '88-page Photobook, CD-R, Photocard (Random 1 of 12), Folding Photocard (Random 1 of 6), Pop-up Card, Hologram Sticker, Hidden Poster (Random 1 of 7) (Pre-order only), Autographed Polaroid Photo (Randomly included in 300 first-press copies)', 'xdh_hw_ps'),
(46, 9, 'Xdinary Heroes - Troubleshooting (A Version)', 'XDH_ALB_TS_VER_A', 1500, 'True', 'Case, Photobook Set (6 types), Lyric Book, Photo Essay Book, Sticker Set (10 types), Photocard (Random 1 of 12), Mirror Photocard (Random 1 of 6), Trading Card (Random 1 of 6), Postcard Set (2 types), Folding Postcard (First press only), Habit Tracker + Sticker (First press only)', 'xdh_ts_a'),
(47, 9, 'Xdinary Heroes - Troubleshooting (B Version)', 'XDH_ALB_TS_VER_B', 1500, 'True', 'Case, Photobook Set (6 types), Lyric Book, Photo Essay Book, Sticker Set (10 types), Photocard (Random 1 of 12), Mirror Photocard (Random 1 of 6), Trading Card (Random 1 of 6), Postcard Set (2 types), Folding Postcard (First press only), Habit Tracker + Sticker (First press only)', 'xdh_ts_b'),
(48, 10, 'Lee Young Ji - 16 Fantasy (Stereo Version)', 'LYJ_ALB_16F_VER_SV', 1300, 'True', '64-page Photobook, Postcard, Lyrics Paper, Bookmark, 4-piece Photocard Set, 7-piece Sticker Set, Folded Poster', 'lyj_16f_sv'),
(49, 10, 'Lee Young Ji - 16 Fantasy (Special Edition Version)', 'LYJ_ALB_16F_VER_SE', 900, 'True', '16-page Booklet, Random Photocard (1 of 3), Folded Poster, Lyrics Paper', 'lyj_16f_se'),
(50, 11, 'Jaehyun - J (J Version)', 'JHY_ALB_J_VER_J', 1300, 'True', '144-page Photobook, CD-R, Coaster (Random 1 of 2), Folded Poster (Random 1 of 2), Frame Photo, Photocard (Random 1 of 3)', 'jaehyun_j_ver'),
(51, 11, 'Jaehyun - J (Money Clip Version)', 'JHY_ALB_J_VER_MC', 1300, 'True', '72-page Photobook, Fake Polaroid (Random 1 of 5), Folded Poster (Random 1 of 2), Lyric Poster, Sticker (Random 1 of 4), Photocard (Random 1 of 3)', 'jaehyun_mc_ver'),
(52, 11, 'Jaehyun - J (Keyring Version)', 'JHY_ALB_J_VER_KR', 1300, 'True', 'Package Box, Acrylic Frame Keyring, Charm, QR Card, Photocard (Random 1 of 3)', 'jaehyun_kr_ver'),
(53, 1, 'Nayeon Photocard - Eyes Wide Open', 'NY_PC_EWO', 80, 'True', NULL, 'nyPhotocardEWO'),
(54, 1, 'Momo Photocard - Eyes Wide Open', 'MM_PC_EWO', 80, 'True', NULL, 'mmPhotocardEWO'),
(55, 1, 'Tzuyu Photocard - Twicetagram', 'TZ_PC_TCG', 80, 'True', NULL, 'tzPhotocardTCG'),
(56, 2, 'Aespa - Karina PC Savage', 'KARINA_PC_SV', 70, 'True', NULL, 'karinaPhotocardSV'),
(57, 2, 'Aespa - Winter PC Savage', 'WINTER_PC_SV', 70, 'True', NULL, 'winterPhotocardSV'),
(58, 2, 'Aespa - Ningning PC Savage', 'NINGNING_PC_SV', 70, 'True', NULL, 'ningningPhotocardSV'),
(59, 2, 'Aespa - Giselle PC Savage', 'GISELLE_PC_SV', 70, 'True', NULL, 'gisellePhotocardSV'),
(60, 3, 'IVE - Yujin PC After LIKE', 'YJ_PC_AL', 70, 'True', NULL, 'yujinPhotocardAL'),
(61, 3, 'IVE - Gaeul PC After LIKE', 'GAEUL_PC_AL', 70, 'True', NULL, 'gaeulPhotocardAL'),
(62, 3, 'IVE - Wonyoung PC After LIKE', 'WY_PC_AL', 70, 'True', NULL, 'wonyoungPhotocardAL'),
(63, 3, 'IVE - Leeseo PC After LIKE', 'LEESEO_PC_AL', 70, 'True', NULL, 'leeseoPhotocardAL'),
(64, 3, 'IVE - Rei PC After LIKE', 'REI_PC_AL', 70, 'True', NULL, 'reiPhotocardAL'),
(65, 3, 'IVE - Liz PC After LIKE', 'Liz_PC_AL', 70, 'True', NULL, 'lizPhotocardAL'),
(66, 4, 'Itzy - Yeji PC Crazy in Love', 'YEJI_PC_CIL', 70, 'True', NULL, 'yejiPhotocardCIL'),
(67, 4, 'Itzy - Ryujin PC Crazy in Love', 'Ryujin_PC_CIL', 70, 'True', NULL, 'ryujinPhotocardCIL'),
(68, 4, 'Itzy - Lia PC Crazy in Love', 'LIA_PC_CIL', 70, 'True', NULL, 'liaPhotocardCIL'),
(69, 4, 'Itzy - Chaeryeong PC Crazy in Love', 'CHAERYEONG_PC_CIL', 70, 'True', NULL, 'chaeryeongPhotocardCIL'),
(70, 4, 'Itzy - Yuna PC Crazy in Love', 'YUNA_PC_CIL', 70, 'True', NULL, 'yunaPhotocardCIL'),
(71, 5, 'Le Sserafim - Sakura PC Fearless', 'SAKURA_PC_FL', 70, 'True', NULL, 'sakuraPhotocardFL'),
(72, 5, 'Le Sserafim - Yunjin PC Fearless', 'YUNJIN_PC_FL', 70, 'True', NULL, 'yunjinPhotocardFL'),
(73, 5, 'Le Sserafim - Chaewon PC Fearless', 'CHAEWON_PC_FL', 70, 'True', NULL, 'chaewonPhotocardFL'),
(74, 5, 'Le Sserafim - Kazuha PC Fearless', 'KAZUHA_PC_FL', 70, 'True', NULL, 'kazuhaPhotocardFL'),
(75, 5, 'Le Sserafim - Eunchae PC Fearless', 'EUNCHAE_PC_FL', 70, 'True', NULL, 'eunchaePhotocardFL'),
(76, 6, 'Stray Kids - Stray Kids Photocard Set IAN', 'SKZ_PC_SET_IAN', 270, 'True', NULL, 'skz_pc_set_ian'),
(77, 6, 'Stray Kids - Stray Kids Photocard Set IAW', 'SKZ_PC_SET_IAW', 270, 'True', NULL, 'skz_pc_set_iaw'),
(78, 6, 'Stray Kids - Stray Kids Photocard Set IAY', 'SKZ_PC_SET_IAY', 270, 'True', NULL, 'skz_pc_set_iay'),
(79, 6, 'Stray Kids - Stray Kids Photocard Set Giant', 'SKZ_PC_SET_Giant', 270, 'True', NULL, 'skz_pc_set_giant'),
(80, 7, 'ENHYPEN - ENHYPEN Dimension: Dilemma Photocard Set', 'ENH_PC_DD', 70, 'True', NULL, 'enhypen_pc_dd'),
(81, 8, 'Seventeen - Seventeen An Ode Photocard Set', 'SVT_PC_AO', 500, 'True', NULL, 'svt_pc_ao'),
(82, 9, 'Xdinary Heroes - Xdinary Heroes Hello, World! Photocard Set', 'XDH_PC_HW', 370, 'True', NULL, 'xdh_pc_hw'),
(83, 9, 'Xdinary Heroes - Xdinary Heroes Troubleshooting Photocard Set', 'XDH_PC_TS', 370, 'True', NULL, 'xdh_pc_ts'),
(84, 10, 'Lee Young Ji - Lee Young Ji 16 Fantasy Photocard Set', 'LYJ_PC_16F', 170, 'True', NULL, 'lyj_pc_16f'),
(85, 11, 'Jaehyun - Jaehyun Photocard', 'JHY_PC_J', 70, 'True', NULL, 'jaehyun_pc'),
(86, 1, 'Twice Eyes Wide Open Poster', 'PST_EWO', 180, 'True', NULL, 'TW_PST_EWO'),
(87, 1, 'Twice Twicetagram Poster', 'PST_TCG', 160, 'True', NULL, 'TW_PST_TCG'),
(88, 2, 'Aespa - Aespa Savage Poster', 'AES_PST_SV', 150, 'True', NULL, 'aespaPST_SV'),
(89, 3, 'IVE - IVE After LIKE Poster', 'PST_AL', 150, 'True', NULL, 'IVE_PST_AL'),
(90, 4, 'Itzy - Itzy Crazy in Love Poster', 'PST_CIL', 150, 'True', NULL, 'itzyPST_CIL'),
(91, 5, 'Le Sserafim - Le Sserafim Fearless Poster', 'PST_FL', 150, 'True', NULL, 'leserafimPST_FL'),
(92, 6, 'Stray Kids - Stray Kids Official Poster IAN', 'SKZ_POSTER_IAN', 100, 'True', NULL, 'skz_poster_ian'),
(93, 6, 'Stray Kids - Stray Kids Official Poster IAW', 'SKZ_POSTER_IAW', 100, 'True', NULL, 'skz_poster_iaw'),
(94, 6, 'Stray Kids - Stray Kids Official Poster IAY', 'SKZ_POSTER_IAY', 100, 'True', NULL, 'skz_poster_iay'),
(95, 6, 'Stray Kids - Stray Kids Official Poster Giant', 'SKZ_POSTER_GIANT', 100, 'True', NULL, 'skz_poster_giant'),
(96, 7, 'ENHYPEN - Dimension: Dilemma Official Poster', 'ENH_POSTER_DD', 100, 'True', NULL, 'enhypen_dd_poster'),
(97, 8, 'Seventeen - An Ode Official Poster', 'SVT_POSTER_AO', 100, 'True', NULL, 'svt_ao_poster'),
(98, 9, 'Xdinary Heroes - Xdinary Heroes Hello, World! Poster', 'PST_HW', 150, 'True', NULL, 'xdh_poster_hw'),
(99, 9, 'Xdinary Heroes - Xdinary Heroes Troubleshooting Poster', 'PST_TS', 150, 'True', NULL, 'xdh_poster_ts'),
(100, 10, 'Lee Young Ji - Lee Young Ji 16 Fantasy Poster', 'PST_16F', 150, 'True', NULL, 'lyj_poster_16f'),
(101, 11, 'Jaehyun - Jaehyun J Album Poster', 'JHY_PST_J', 150, 'True', NULL, 'jaehyun_poster_j');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`artistID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `artistID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
