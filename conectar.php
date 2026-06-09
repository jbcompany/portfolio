<?php
$conexion = mysqli_connect("localhost", "root", "", "prueba") or die("Connection failed: " . mysqli_connect_error());

$nombre = mysqli_real_escape_string($conexion, $_POST['nombre'] ?? '');
$email = mysqli_real_escape_string($conexion, $_POST['email'] ?? '');
$telefono = mysqli_real_escape_string($conexion, $_POST['telefono'] ?? '');
$servicios = mysqli_real_escape_string($conexion, $_POST['servicios'] ?? '');
$mensaje = mysqli_real_escape_string($conexion, $_POST['mensaje'] ?? '');

mysqli_query($conexion, "INSERT INTO prueba (nombre, email, telefono, servicios, mensaje)
VALUES ('$nombre', '$email', '$telefono', '$servicios', '$mensaje')") or die("Error: " . mysqli_error($conexion));
mysqli_close($conexion);

echo "registrado con exito";
?>