<?php
$logic;
$p = $_POST;
$success = (object)array('status_code'=>'200', 'message'=> $p);
$success = json_encode($success);

$first_name=$p['first_name'];
$last_name=$p['last_name'];
//$first_name=htmlspecialchars($_POST["first_name"])
ignore_user_abort(true);
header("HTTP/1.1 200 OK");
header('Content-Type: application/json');

ob_start();
//echo $first_name;
try{
	require "Logic.php";
	$logic = new Logic();
	// if ($logic->error) {
	// 	echo "Error!";
	// }
	$logic->InsertData($p);
	echo $success;
} catch (Exception $e){
	echo $p;
	echo $e->getMessage();
}

?>