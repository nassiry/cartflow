# CartFlow Library

**CartFlow** is a lightweight, modern JavaScript library to animate items moving to a shopping cart. It supports Node.js, browser environments, and UMD/ES module formats.

### Features

- Smooth animations for "Add to Cart" interactions.

- Optional sound effect support.

- Optional cart "shake" effect after adding an item.

- Fully customizable via configuration options.

- Works seamlessly in modern browsers and Node.js environments.

- Callbacks with relevant elements for better integration.

### Installation
Using npm (for Node.js and bundlers like Webpack, Vite, or Rollup):
```bash
npm install cartflow
```
#### Using a `<script>` tag (for browsers):
```html
<script src="CartFlow.js"></script>
```
#### NodeJs
```javascript
const CartFlow = require('cartflow');
```

### Usage

See [online Demo]()

```javascript
const animation = new CartFlow({
    cartSelector: ".shopping-cart",
    buttonSelector: ".add-to-cart",
    onComplete: (item) => {
        console.log("Item successfully animated to the cart!", item);
    },
    onCartShake: (cart) => {
        console.log("Cart shake effect completed!", cart);
    },
    soundEffect: "click-sound.mp3",
  });
```

### Configuration Options
| Option  | Type | Default | Description |
| ------------- | ------------- | -------- | ------ |
| `cartSelector`  | `string`  | `.shopping-cart` | CSS selector for the shopping cart element. |
| `buttonSelector` | `string` | `.add-to-cart` | CSS selector for the "Add to Cart" buttons. |
| `itemSelector` | `string` | `.item` | CSS selector for the item container. |
| `imageSelector` | `string` | `img` | CSS selector for the item's image.|
| `animationDuration` | `number` | `1000` | Duration of the animation in milliseconds. |
| `easing` | `string` | `ease-in-out` | Easing function for the animation. |
| `shakeEffect` | `boolean` | `true` | Enable or disable the cart shake effect. | 
| `soundEffect` | `string or Audio` | `null` | URL or Audio object for a sound effect. |
| `onComplete` | `function` | `null` | Callback function after the animation completes, receives the affected item element. |
| `onCartShake` | `function` | `null` | Callback function after the cart shake effect, receives the cart element. |

### Browser & Nodejs Compatibility

Chrome | Firefox | Safari | Opera | Edge | Nodejs
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔


### Contributing

Feel free to submit issues or pull requests to improve the package. Contributions are welcome!

### License
This package is open-source software licensed under the [MIT license](LICENSE.md).