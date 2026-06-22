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
$email = mysqli_real_escape_string($conexion, $_POST['email'] ?? '');
$telefono = mysqli_real_escape_string($conexion, $_POST['telefono'] ?? '');
$servicios = mysqli_real_escape_string($conexion, $_POST['servicios'] ?? '');
$mensaje = mysqli_real_escape_string($conexion, $_POST['mensaje'] ?? '');

$insertado = mysqli_query($conexion, "INSERT INTO prueba (nombre, email, telefono, servicios, mensaje)
VALUES ('$nombre', '$email', '$telefono', '$servicios', '$mensaje')");
mysqli_close($conexion);

if ($insertado) {
	header('Location: contact.html?status=ok');
} else {
	header('Location: contact.html?status=error');
}
exit;
?>