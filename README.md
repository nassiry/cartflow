<div align="center">

# CartFlow

[![Project Showcase](https://img.shields.io/badge/See-Showcase-8A2BE2)](SHOWCASE.md)
[![Live Demo](https://img.shields.io/badge/demo-online-green?logo=github)](https://nassiry.github.io/cartflow/)
![Minified Size](https://img.shields.io/bundlephobia/min/cartflow)
![TypeScript Supported](https://img.shields.io/badge/TypeScript-Supported-3178C6?logo=typescript&logoColor=white)
![Total Downloads](https://img.shields.io/npm/dt/cartflow.svg)
![npm version](https://img.shields.io/npm/v/cartflow.svg)
![License](https://img.shields.io/npm/l/cartflow.svg)

</div>


**CartFlow** is a lightweight, modern JavaScript library to animate items moving to a shopping cart. It supports Node.js, browser environments, and UMD/ES module formats.

- ✨ Smooth "Add to Cart" animations
- 🔈 Optional sound effect support
- 🛒 Optional cart "shake" effect
- ⚙️ Fully customizable via configuration options
- 🌍 Works in modern browsers and Node.js
- 📚 Typed API for great IDE experience (TypeScript definitions included)
- ⚡ Uses GSAP if available, otherwise falls back gracefully

## Table Of Contents

1. [Installation](#installation)
    - [Install with npm](#1-install-with-npm)
    - [Using a `<script>` tag (for browsers)](#2-using-a-script-tag-for-browsers)
2. [Demo](#demo)
3. [Usage](#usage)
    - [In Node.js / TypeScript / ESM](#1-nodejs-commonjs--typescript)
    - [Quick Example](#2-quick-example)
4. [Configuration Options](#configuration-options)
5. [Browser & Nodejs Compatibility](#browser--nodejs-compatibility)
6. [Built With Cartflow.js](#built-with-cartflowjs)
7. [Contributing](#contributing)
8. [Changelog](#changelog)
9. [License](#license)

## Installation
- ### 1. Install with npm:

```bash
npm install cartflow
```

- ### 2. Using a `<script>` tag (for browsers):

```html
<script src="https://unpkg.com/cartflow"></script>
```
> Or use your own hosted file if needed: `<script src="dist/CartFlow.js"></script>`.

## Demo

See CartFlow in action here: [Live Demo](https://nassiry.github.io/cartflow/)
>  Try adding items to the cart and watch the smooth animation!

## Usage

- ### 1.  In Node.js / TypeScript / ESM

```javascript
// CommonJS (Node.js)
const CartFlow = require('cartflow');

// ES Module or TypeScript
import CartFlow from 'cartflow';
```

- ### 2. Quick Example

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

## Configuration Options

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

## Built With Cartflow.js

See how others are using this library in our [SHOWCASE.md](SHOWCASE.md).

_Using this library? [Add your project](SHOWCASE.md)_

## Contributing

We welcome contributions! Please read the [Contributions Guid](CONTRIBUTING.md) to get started.

## Changelog

See [Changelog](CHANGELOG.md) for full release history and version details.

## License
This package is open-source software licensed under the [MIT license](LICENSE).