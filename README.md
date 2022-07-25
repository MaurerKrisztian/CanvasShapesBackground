# canvas-shapes-background.
### Animated shapes with Canvas


## Live demo: https://canvas-shapes-background.netlify.app/

##  Example usage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script  type='text/javascript' src="https://canvas-shapes-background.netlify.app/bundle.js"></script>
</head>
<body>
<canvas id="myCanvas"></canvas>
<script>
    createShapeCanvas("myCanvas", {
        MODEL_NUMBERS: 11,
        COLORS: ['blue', 'red', 'green', 'yellow'],
        BACKGROUND_COLOR: 'black', //'none',
        ENABLED_MODELS: ['Triangle', 'Circle', 'Rect'],
        MIN_SPEED: 11,
        MAX_SPEED: 11,
        LINE_WIDTH: 3,
        SIZE_MULTIPLAYER: 2,
        START_POSITION: 'random'
    })
</script>
</body>
</html>
```