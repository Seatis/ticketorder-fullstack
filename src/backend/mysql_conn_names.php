<?php
$servername = "localhost";
$username = "root";
$password = "GR18pv";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

mysqli_select_db($conn,"tickets");
$conn->set_charset("utf8");
?>
