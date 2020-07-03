<?php


$email = ($_REQUEST[email]);

// echo $name;
//  echo $email;
// echo $transaction_ID; cpses_now9hqat19 ID ID
// echo 'in';

// $servername = '67.20.76.172';
// $username = 'novabaor_novabao';
// $password = '$$Nvec2012';
// $dbname = 'novabaor_web';

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "NVBA";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM web_users WHERE user_email like '$email' ";


//Fetch 3 rows from actor table
$result = $conn->query($sql);

//Initialize array variable
  $dbdata = array();

//Fetch into associative array
  while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }

//Print array in JSON format
 echo json_encode($dbdata);
 


mysqli_close($conn);


?>