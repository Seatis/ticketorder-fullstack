<?php
include("mysql_conn_names.php");

foreach($_GET as $key => $value) {
	$$key=$value;
}

if (isset($id)) {
  $sql = "SELECT email FROM orders WHERE id='$id'";
  $result = $conn->query($sql);
  while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
    $rows[] = $row;
  }
  $response = new \stdClass();
  if (isset($rows)) {
    $sql = "DELETE FROM orders WHERE id='$id'";

    $result = $conn->query($sql);

    if (!$result) {
      $response->status = 'error';
      $response->error = $conn->error;
    } else {
      $response->status = 'Delete OK!';
      $response->deleted_id = $id;
      $response->deleted_person = $rows[0]['email'];
    }
  } else {
    $response->status = 'error';
    $response->error = "id={$id} not found";
  }
  echo json_encode($response);
}

mysqli_close($conn);
?>
