<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	header('Location: contact.html');
	exit;
}

$conexion = mysqli_connect("localhost", "root", "", "prueba");

if (!$conexion) {
	header('Location: contact.html?status=error');
	exit;
}

$nombre = mysqli_real_escape_string($conexion, $_POST['nombre'] ?? '');
$correo = mysqli_real_escape_string($conexion, $_POST['correo'] ?? '');
$fecha_reunion = mysqli_real_escape_string($conexion, $_POST['fecha_reunion'] ?? '');
$hora_reunion = mysqli_real_escape_string($conexion, $_POST['hora_reunion'] ?? '');

$insertado = mysqli_query($conexion, "INSERT INTO agenda (nombre, correo, fecha_reunion, hora_reunion)
VALUES ('$nombre', '$correo', '$fecha_reunion', '$hora_reunion')");
mysqli_close($conexion);

if ($insertado) {
	header('Location: contact.html?status=ok');
} else {
	header('Location: contact.html?status=error');
}
exit;
?>