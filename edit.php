<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <?php
    include "includes/header.php";
  ?>
  <p><a href="/">Back</a></p>
  Edit <?php echo $_GET['id']; ?>
  <div id="root"></div>
  <script src="/front/dist/index_bundle.js"></script>
</body>
</html>
