-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2023 at 10:49 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pklsmkn3bangkalan`
--

-- --------------------------------------------------------

--
-- Table structure for table `jurusans`
--

CREATE TABLE `jurusans` (
  `id` int(11) NOT NULL,
  `nama_jurusan` varchar(255) DEFAULT NULL,
  `gambar_jurusan` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `jurusans`
--

INSERT INTO `jurusans` (`id`, `nama_jurusan`, `gambar_jurusan`, `createdAt`, `updatedAt`) VALUES
(1, 'Perhotelan', 'https://i.imgur.com/LMiS3vC.png', '2023-12-17 07:52:15', '2023-12-17 07:52:15'),
(2, 'Perkantoran', 'https://i.imgur.com/6XnBJeg.png', '2023-12-17 07:52:15', '2023-12-17 07:52:15'),
(3, 'Teknik Komputer dan Jaringan', 'https://i.imgur.com/cR4omB4.png', '2023-12-17 07:52:15', '2023-12-17 07:52:15'),
(4, 'Teknik Sepeda Motor', 'https://i.imgur.com/inl3V64.png', '2023-12-17 07:52:15', '2023-12-17 07:52:15'),
(5, 'Farmasi', 'https://i.imgur.com/iceggyO.png', '2023-12-17 07:52:15', '2023-12-17 07:52:15'),
(6, 'Akuntansi', 'https://i.imgur.com/quBDDyg.png', '2023-12-17 07:52:15', '2023-12-17 07:52:15');

-- --------------------------------------------------------

--
-- Table structure for table `laporanakhirs`
--

CREATE TABLE `laporanakhirs` (
  `id` int(11) NOT NULL,
  `tanggal_a` datetime DEFAULT NULL,
  `file_laporan` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `laporanharians`
--

CREATE TABLE `laporanharians` (
  `id` int(11) NOT NULL,
  `tanggal_h` datetime DEFAULT NULL,
  `foto_kegiatan_h` varchar(255) DEFAULT NULL,
  `aktifitas_h` text DEFAULT NULL,
  `absen_h` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `laporanmingguans`
--

CREATE TABLE `laporanmingguans` (
  `id` int(11) NOT NULL,
  `tanggal_m` datetime DEFAULT NULL,
  `aktifitas_m` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pendaftaranpkls`
--

CREATE TABLE `pendaftaranpkls` (
  `id` int(11) NOT NULL,
  `status_id` int(11) DEFAULT NULL,
  `pkl_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `perusahaans`
--

CREATE TABLE `perusahaans` (
  `id` int(11) NOT NULL,
  `nama_perusahaan` varchar(255) DEFAULT NULL,
  `kabupaten` varchar(255) DEFAULT NULL,
  `alamat_lengkap` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `no_hp` varchar(255) DEFAULT NULL,
  `jurusan_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `perusahaans`
--

INSERT INTO `perusahaans` (`id`, `nama_perusahaan`, `kabupaten`, `alamat_lengkap`, `email`, `no_hp`, `jurusan_id`, `createdAt`, `updatedAt`) VALUES
(1, 'PT Modern Pulsa Investama', 'Bengkalan', 'Jl. Soekarno Hatta No. 23', 'modern@gmail.com', '0899989989', 3, '2023-12-17 14:55:21', '2023-12-17 14:55:21');

-- --------------------------------------------------------

--
-- Table structure for table `pkls`
--

CREATE TABLE `pkls` (
  `id` int(11) NOT NULL,
  `bidang_pkl` varchar(255) DEFAULT NULL,
  `syarat_pkl` text DEFAULT NULL,
  `tgl_mulai` datetime DEFAULT NULL,
  `tgl_selesai` datetime DEFAULT NULL,
  `perusahaan_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20231207063218-create-status.js'),
('20231207063329-create-jurusan.js'),
('20231207063600-create-perusahaan.js'),
('20231207063751-create-user.js'),
('20231207064705-create-pkl.js'),
('20231207071710-create-pendaftaran-pkl.js'),
('20231207072157-create-laporan-harian.js'),
('20231207072341-create-laporan-mingguan.js'),
('20231207072829-create-laporan-akhir.js');

-- --------------------------------------------------------

--
-- Table structure for table `statuses`
--

CREATE TABLE `statuses` (
  `id` int(11) NOT NULL,
  `nama_status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `statuses`
--

INSERT INTO `statuses` (`id`, `nama_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Menunggu', '2023-12-17 07:52:15', '2023-12-17 07:52:15'),
(2, 'Diterima', '2023-12-17 07:52:15', '2023-12-17 07:52:15'),
(3, 'Ditolak', '2023-12-17 07:52:15', '2023-12-17 07:52:15'),
(4, 'Selesai', '2023-12-17 07:52:15', '2023-12-17 07:52:15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nisn` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `jenis_kelamin` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nisn`, `nama`, `password`, `email`, `jenis_kelamin`, `alamat`, `createdAt`, `updatedAt`) VALUES
(1, '123456', 'test', '$2a$12$gV3w1H1ckp6yLird1MatdurfYAu604LQ2Hy9YzJf738M6ROaVit6O', 'test@gmail.com', 'L', 'Bandung', '2023-12-17 15:21:57', '2023-12-17 15:21:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jurusans`
--
ALTER TABLE `jurusans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laporanakhirs`
--
ALTER TABLE `laporanakhirs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `laporanharians`
--
ALTER TABLE `laporanharians`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `laporanmingguans`
--
ALTER TABLE `laporanmingguans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `pendaftaranpkls`
--
ALTER TABLE `pendaftaranpkls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `pkl_id` (`pkl_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `perusahaans`
--
ALTER TABLE `perusahaans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `jurusan_id` (`jurusan_id`);

--
-- Indexes for table `pkls`
--
ALTER TABLE `pkls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `perusahaan_id` (`perusahaan_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nisn` (`nisn`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jurusans`
--
ALTER TABLE `jurusans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `laporanakhirs`
--
ALTER TABLE `laporanakhirs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laporanharians`
--
ALTER TABLE `laporanharians`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laporanmingguans`
--
ALTER TABLE `laporanmingguans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pendaftaranpkls`
--
ALTER TABLE `pendaftaranpkls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `perusahaans`
--
ALTER TABLE `perusahaans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pkls`
--
ALTER TABLE `pkls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `laporanakhirs`
--
ALTER TABLE `laporanakhirs`
  ADD CONSTRAINT `laporanakhirs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `laporanakhirs_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `laporanharians`
--
ALTER TABLE `laporanharians`
  ADD CONSTRAINT `laporanharians_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `laporanharians_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `laporanmingguans`
--
ALTER TABLE `laporanmingguans`
  ADD CONSTRAINT `laporanmingguans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `laporanmingguans_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pendaftaranpkls`
--
ALTER TABLE `pendaftaranpkls`
  ADD CONSTRAINT `pendaftaranpkls_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pendaftaranpkls_ibfk_2` FOREIGN KEY (`pkl_id`) REFERENCES `pkls` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pendaftaranpkls_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `perusahaans`
--
ALTER TABLE `perusahaans`
  ADD CONSTRAINT `perusahaans_ibfk_1` FOREIGN KEY (`jurusan_id`) REFERENCES `jurusans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pkls`
--
ALTER TABLE `pkls`
  ADD CONSTRAINT `pkls_ibfk_1` FOREIGN KEY (`perusahaan_id`) REFERENCES `perusahaans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
