?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$message= $_POST['message'];
$to = "dsd.reliantdigitals@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n  phone = " . $phone . "\r\n Message =" . $message;
$headers = "From: noreply@reliantdigitals.xyz" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

<!-- Messge -->
<?php if(!empty($response)) {?>
<div class="alert text-center <?php echo $response['status']; ?>" role="alert">
<?php echo $response['message']; ?>
</div>
<?php }?>
//redirect
header("Location:thankyou.html");
?>
