/**
 * Copyright (c) A.S Nassiry
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/nassiry/cartflow
 */
(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
      module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
      define(factory);
    } else {
      global.CartFlow = factory();
    }
  })(typeof window !== "undefined" ? window : this, function () {
    "use strict";
  
    class CartFlow {
      /**
       * Initialize the animation library
       * @param {Object} options - Configuration options
       */
      constructor(options = {}) {
        const defaults = {
          cartSelector: ".shopping-cart",
          buttonSelector: ".add-to-cart",
          itemSelector: ".item",
          imageSelector: "img",
          animationDuration: 1000,
          easing: "ease-in-out",
          shakeEffect: true,
          soundEffect: null,
          onComplete: null,
          onCartShake: null,
        };
  
        this.settings = { ...defaults, ...options };
  
        this.cartElement = document.querySelector(this.settings.cartSelector);
        if (!this.cartElement) {
          throw new Error("Cart element not found. Check the cartSelector option.");
        }
  
        this.initEventDelegation();
      }
  
      /**
       * Initialize event delegation for all buttons
       */
      initEventDelegation() {
        document.body.addEventListener("click", (event) => {
          const button = event.target.closest(this.settings.buttonSelector);
          if (button) {
            this.handleButtonClick(button);
          }
        });
      }
  
      /**
       * Handle button click
       * @param {HTMLElement} button - Clicked button
       */
      handleButtonClick(button) {
        const item = button.closest(this.settings.itemSelector);
        if (!item) {
          console.warn("Item container not found. Check the itemSelector option.");
          return;
        }
  
        const image = item.querySelector(this.settings.imageSelector);
        if (!image) {
          console.warn("Image not found inside item. Check the imageSelector option.");
          return;
        }
  
        if (this.settings.soundEffect) {
          this.playSound(this.settings.soundEffect);
        }
  
        this.animateImage(image, item);
      }
  
      /**
       * Play sound effect
       * @param {string|HTMLAudioElement} soundEffect - Sound file URL or Audio object
       */
      playSound(soundEffect) {
        let audio;
        if (typeof soundEffect === "string") {
          audio = new Audio(soundEffect);
        } else if (soundEffect instanceof HTMLAudioElement) {
          audio = soundEffect;
        }
  
        if (audio) {
          audio.play().catch((err) => console.error("Failed to play sound:", err));
        }
      }
  
      /**
        * Animate image towards the cart
        * @param {HTMLElement} image - Image element to animate
        * @param {HTMLElement} item - Item container element
        */  
      animateImage(image, item) {
        const clone = image.cloneNode(true);
        const rect = image.getBoundingClientRect();
        const cartRect = this.cartElement.getBoundingClientRect();
  
        Object.assign(clone.style, {
          position: "absolute",
          top: `${rect.top + window.scrollY}px`,
          left: `${rect.left + window.scrollX}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          opacity: 0.7,
          zIndex: 1000,
          pointerEvents: "none",
          transition: `all ${this.settings.animationDuration}ms ${this.settings.easing}`,
        });
  
        document.body.appendChild(clone);
  
        setTimeout(() => {
          Object.assign(clone.style, {
            top: `${cartRect.top + window.scrollY + 10}px`,
            left: `${cartRect.left + window.scrollX + 10}px`,
            width: "50px",
            height: "50px",
            opacity: 0,
          });
        }, 10);
  
        setTimeout(() => {
          clone.remove();
          if (typeof this.settings.onComplete === "function") {
            this.settings.onComplete(item);
          }
          
          if (this.settings.shakeEffect === true) {
            this.shakeCart();
          }
        
        }, this.settings.animationDuration);
      }
  
      /**
       * Shake the shopping cart
       */
      shakeCart() {
        const keyframes = [
          { transform: "translateX(0px)" },
          { transform: "translateX(-10px)" },
          { transform: "translateX(10px)" },
          { transform: "translateX(0px)" },
        ];
  
        this.cartElement.animate(keyframes, {
          duration: 300,
          iterations: 1,
        });
  
        if (typeof this.settings.onCartShake === "function") {
          this.settings.onCartShake(this.cartElement);
        }
      }
    }
  
    return CartFlow;
  });