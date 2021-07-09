<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    include "includes/header.php";
  ?>
  <p><a href="create.php">Create</a></p>
  <ul>
    <li>Item 1 [<a href="edit.php?id=1">Edit</a>] [<a href="create.php?id=1">Delete</a>]</li>
    <li>Item 2 [<a href="edit.php?id=2">Edit</a>] [<a href="create.php?id=2">Delete</a>]</li>
    <li>Item 3 [<a href="edit.php?id=3">Edit</a>] [<a href="create.php?id=3">Delete</a>]</li>
  </ul>
</body>
</html>