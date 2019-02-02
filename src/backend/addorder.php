<?php
include("mysql_conn_names.php");

$postdata = file_get_contents("php://input");

// foreach($_GET as $key => $value) {
// 	$$key=$value;
// }

$obj = json_decode($postdata);

// echo $obj->{'nev'};

foreach($obj as $key=>$value) {
  $$key=$value;
}

$sql = "INSERT INTO orders (vezeteknev, keresztnev, email, telefonszam, jegy, datum) VALUES ('$vezeteknev', '$keresztnev', '$email', '$telefonszam', '$jegy', '2018. 06. 07.')";


// $result = mysqli_query($conn,$sql);

$result = $conn->query($sql);

$response = new \stdClass();
if (!$result) {
  $response->status = 'error';
  $response->error = $conn->error;
  // printf("Errormessage: %s\n", $conn->error)
} else {
  $response->status = 'OK';
}

// echo json_encode($result);
echo json_encode($response);

mysqli_close($conn);
?>
