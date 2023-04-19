<!DOCTYPE html>
<html>
<head>
    <title>Récapitulatif de contact</title>
</head>
<body>
    <h1>Récapitulatif de contact</h1>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        
        echo "<p>Nom : " . $name . "</p>";
        echo "<p>Email : " . $email . "</p>";
        echo "<p>Message : " . $message . "</p>";
    }
    ?>
</body>
</html>
//a faire