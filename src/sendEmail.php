<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Customize the email subject and content
    $subject = "Contact Us Form Submission";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Message:\n$message";

    // Set up email headers
    $headers = "From: $email";

    // Replace 'your_email@example.com' with the recipient's email address
    $recipient_email = "your_email@example.com";

    // Send the email
    if (mail($recipient_email, $subject, $email_content, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
}
?>
