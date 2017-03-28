<?php
    // $items = array('Item One', 'Item Two', 'Item Three');

    if (isset($_POST['newitem']) and htmlspecialchars(strip_tags($_POST['newitem'])) === '') {
        unset($_POST['newitem']);
    }
    $addedItems = array_values($_POST);
    // $allItems = array_merge($items, $_POST);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Form Example</title>
</head>
<body>
    <h1>List of Items</h1>
    <ul>
        <?php foreach ($addedItems as $item) : ?>
            <li><?= htmlspecialchars(strip_tags($item)); ?></li>
        <?php endforeach; ?>
    </ul>

    <form method="POST" action="./form-example.php">
        <?php foreach ($addedItems as $index => $item) : ?>
            <input type="hidden" name="addeditem-<?= $index; ?>" value="<?= $item; ?>">
        <?php endforeach; ?>
        <input type="text" id="newitem" name="newitem" placeholder="Add new item">
        <input type="submit" value="add">
    </form>
</body>
</html>