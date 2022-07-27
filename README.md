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
    <script type='text/javascript' src="https://canvas-shapes-background.netlify.app/bundle.js"></script>
</head>
<body>
<canvas id="myCanvas"></canvas>
<script>
    createShapeCanvas("myCanvas", {
        modelNumbers: 11,
        colors: ['blue', 'red', 'green', 'yellow'],
        backgroundColor: 'black', //'none',
        enabledModels: ['Triangle', 'Circle', 'Rect'],
        minSpeed: 11,
        maxSpeed: 11,
        lineWidth: 3,
        sizeMultiplier: 2,
        startPosition: 'random', //  'middle' | 'random',
        isFullScreen: true,
    })
</script>
</body>
</html>
```