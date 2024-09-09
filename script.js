<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Color Change</title>
    <style>
        #colorButton {
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            color: white;
        }
    </style>
</head>
<body>
    <button id="colorButton" onclick="changeColor()">Click me!</button>

    <script>
        function changeColor() {
            const button = document.getElementById('colorButton');
            button.style.backgroundColor = button.style.backgroundColor === 'blue' ? 'green' : 'blue';
        }
    </script>
</body>
</html>