-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-08-2024 a las 10:43:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema_incidencias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `ID` int(11) NOT NULL,
  `Incidencia_ID` int(11) DEFAULT NULL,
  `Usuario_ID` int(11) DEFAULT NULL,
  `Contenido` text NOT NULL,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`ID`, `Incidencia_ID`, `Usuario_ID`, `Contenido`, `Fecha`) VALUES
(1, NULL, NULL, 'Espero que se resuelva pronto.', '2024-07-17 16:50:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--

CREATE TABLE `imagen` (
  `ID` int(11) NOT NULL,
  `Incidencia_ID` int(11) DEFAULT NULL,
  `URL` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `imagen` (`ID`, `Incidencia_ID`, `URL`) VALUES
(1, NULL, 'http://localhost:5000/uploads/1721246327053-1-12-23 ZC Puebla-36-EDIT.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencia`
--

CREATE TABLE `incidencia` (
  `ID` int(11) NOT NULL,
  `Usuario_ID` int(11) DEFAULT NULL,
  `Asunto` varchar(255) NOT NULL,
  `Tipo` varchar(255) NOT NULL,
  `Descripción` text NOT NULL,
  `Estado` enum('pendiente','en progreso','resuelto') NOT NULL,
  `Fecha_creación` timestamp NOT NULL DEFAULT current_timestamp(),
  `Fecha_actualización` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `incidencia`
--

INSERT INTO `incidencia` (`ID`, `Usuario_ID`, `Asunto`, `Tipo`, `Descripción`, `Estado`, `Fecha_creación`, `Fecha_actualización`) VALUES
(18, 6, 'Se quemo la tina', 'fontaneria', 'La tina se quemo y no se que hacer, 3er piso. ', 'en progreso', '2024-08-02 08:34:51', '2024-08-02 08:42:30'),
(19, 7, 'Hay problemas con la lavadora', 'fontaneria', 'no podemos hacer que funcione la lavadora.', 'pendiente', '2024-08-02 08:36:10', '2024-08-02 08:36:10'),
(20, 8, 'Fuga de agua en el baño', ' Fontanería', ' Hay una fuga de agua en el baño del segundo piso, justo al lado del lavabo. El agua cae constantemente y ha causado charcos en el suelo.', 'en progreso', '2024-08-02 08:40:13', '2024-08-02 08:42:33'),
(21, 8, 'Problema con la electricidad en la sala', 'Electricidad', 'Los enchufes en la sala principal no están funcionando correctamente. Algunos aparatos no encienden, y hay una chispa ocasional al conectar algo.', 'pendiente', '2024-08-02 08:40:29', '2024-08-02 08:40:29'),
(22, 10, 'Abertura en la puerta de la oficina', 'Carpintería', ' La puerta de la oficina tiene una abertura considerable en la parte inferior. La puerta no cierra completamente, lo que permite que entre aire frío.', 'resuelto', '2024-08-02 08:41:17', '2024-08-02 08:42:35'),
(23, 10, 'Problema con el aire acondicionado', 'Climatización', 'El aire acondicionado en la oficina no está enfriando correctamente. La temperatura en la oficina sigue siendo alta, y el ventilador hace un ruido constante y molesto.', 'resuelto', '2024-08-02 08:41:50', '2024-08-02 08:42:37'),
(24, 10, 'Aire acondicionado de oficina no funciona correctamente', 'Mantenimiento de climatización', 'El aire acondicionado en la oficina de la planta 2 no está funcionando de manera adecuada. Aunque el aparato está encendido, la temperatura ambiente sigue siendo considerablemente más alta que la establecida en el termostato. El equipo emite un ruido constante, similar a un zumbido o vibración, que resulta bastante molesto durante las horas de trabajo. Además, se han notado algunas fugas de agua alrededor de la unidad, que podrían estar relacionadas con el mal funcionamiento. Este problema ha estado ocurriendo durante los últimos dos días y está afectando la comodidad y productividad del personal. Se requiere una revisión exhaustiva para determinar si es necesario reparar o reemplazar componentes del sistema de climatización.', 'en progreso', '2024-08-02 08:42:07', '2024-08-02 08:42:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Contraseña` varchar(255) NOT NULL,
  `Tipo` enum('residente','administrador') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `Nombre`, `Email`, `Contraseña`, `Tipo`) VALUES
(4, 'Erick Rabago', 'erick.rabago@example.com', '$2b$10$hcGwfjY0txQZ7qtNVLmpEONEBDBdjSISR4l2Tbmh7RzBU2g.FaWE2', 'administrador'),
(6, 'Jose Marinez', 'jose.martinez2@example.com', '$2b$10$eXO8yQjESrIa/piS59tvfe2qtlEzBi7WdINCxnOShBQVh0fNsj6ki', 'residente'),
(7, 'Noe Perez', 'noe.martinez@example.com', '$2b$10$wni/8ej8FpEKvsr/HhjFMOYG7cDTGJhHeLmpvMpR6h1jK0FHkE2vm', 'residente'),
(8, 'Perro Pascal', 'perropascal@example.com', '$2b$10$FzVX3wQnG66nQmvVfRiIyOxbt4IliT2Ut6eUv5ZyoFDiRnYtBx90O', 'residente'),
(10, 'Elias Acasia', 'elias.acasia@example.com', '$2b$10$MoedTKf0yLZbXUvH..yzSe03/K9jJN7GyZLdxNG50LM7I0Y/DwVTi', 'residente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Incidencia_ID` (`Incidencia_ID`),
  ADD KEY `Usuario_ID` (`Usuario_ID`);

--
-- Indices de la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Incidencia_ID` (`Incidencia_ID`);

--
-- Indices de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Usuario_ID` (`Usuario_ID`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagen`
--
ALTER TABLE `imagen`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`Incidencia_ID`) REFERENCES `incidencia` (`ID`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`Usuario_ID`) REFERENCES `usuario` (`ID`);

--
-- Filtros para la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD CONSTRAINT `imagen_ibfk_1` FOREIGN KEY (`Incidencia_ID`) REFERENCES `incidencia` (`ID`);

--
-- Filtros para la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD CONSTRAINT `incidencia_ibfk_1` FOREIGN KEY (`Usuario_ID`) REFERENCES `usuario` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
