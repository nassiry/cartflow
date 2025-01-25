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
     * Initialize the CartFlow library
     * @param {Object} options - Configuration options
     */
    constructor(options = {}) {
      this.DEFAULTS = {
        cartSelector: ".shopping-cart",
        buttonSelector: ".add-to-cart",
        itemSelector: ".item",
        imageSelector: "img",
        animationDuration: 1000,
        easing: "ease-in-out",
        shakeEffect: true,
        soundEffect: null,
        onComplete: null,
        onCartShake: null
      };

      this.settings = { ...this.DEFAULTS, ...options };
      this.cartElement = document.querySelector(this.settings.cartSelector);

      if (!this.cartElement) {
        throw new Error(`Cart element not found: ${this.settings.cartSelector}`);
      }

      this.animationQueue = [];
      this.isAnimating = false;

      this.initEventListeners();
    }

    /**
     * Set up event listeners for cart button clicks
     */
    initEventListeners() {
      document.body.addEventListener("click", (event) => {
        const button = event.target.closest(this.settings.buttonSelector);
        if (button) {
          this._handleButtonClick(button);
        }
      });
    }

    /**
     * Handle "Add to Cart" button click
     * @param {HTMLElement} button - The clicked button
     */
    _handleButtonClick(button) {
      const item = button.closest(this.settings.itemSelector);
      if (!item) {
        return;
      }

      const image = item.querySelector(this.settings.imageSelector);
      if (!image) {
        return;
      }

      if (this.settings.soundEffect) {
        if (typeof this.settings.soundEffect === "string" || this.settings.soundEffect instanceof HTMLAudioElement) {
          this._playSound(this.settings.soundEffect);
        } else {
          console.warn("Invalid soundEffect type. Must be a string or an HTMLAudioElement.");
        }
      }

      this.animationQueue.push(() => this._animateImageToCart(image, item));
      if (!this.isAnimating) this._processQueue();
    }

    /**
     * Play a sound effect
     * @param {string|HTMLAudioElement} soundEffect - Sound file URL or Audio object
     */
    _playSound(soundEffect) {
      try {
        const audio =
          typeof soundEffect === "string" ? new Audio(soundEffect) : soundEffect;
        audio?.play().catch((err) => console.error("Failed to play sound:", err));
      } catch (error) {
        console.error("Error playing sound:", error);
      }
    }

    /**
     * Process the animation queue
     */
    _processQueue() {
      if (this.animationQueue.length > 0) {
        const nextAnimation = this.animationQueue.shift();
        nextAnimation();
      }
    }

    /**
     * Animate the item image moving to the cart
     * @param {HTMLElement} image - The image element to animate
     * @param {HTMLElement} item - The item container element
     */
    _animateImageToCart(image, item) {
      this.isAnimating = true;

      const clone = image.cloneNode(true);
      const imageRect = image.getBoundingClientRect();
      const cartRect = this.cartElement.getBoundingClientRect();

      const computedStyles = window.getComputedStyle(image);
      Object.assign(clone.style, {
        position: "absolute",
        top: `${imageRect.top + window.scrollY}px`,
        left: `${imageRect.left + window.scrollX}px`,
        width: `${imageRect.width}px`,
        height: `${imageRect.height}px`,
        border: computedStyles.border,
        boxShadow: computedStyles.boxShadow,
        filter: computedStyles.filter,
        opacity: 0.7,
        zIndex: 1000,
        pointerEvents: "none",
      });

      document.body.appendChild(clone);

      if (typeof gsap !== "undefined") {
        // Use GSAP for animation if available
        gsap.to(clone, {
          duration: this.settings.animationDuration / 1000,
          x: cartRect.left - imageRect.left + 10,
          y: cartRect.top - imageRect.top + 10,
          width: 50,
          height: 50,
          opacity: 0,
          ease: this.settings.easing,
          onComplete: () => {
            clone.remove();
            this._finalizeAnimation(item);
          },
        });
      } else {
        // Fallback animation
        Object.assign(clone.style, {
          transition: `all ${this.settings.animationDuration}ms ${this.settings.easing}`,
        });

        requestAnimationFrame(() => {
          Object.assign(clone.style, {
            top: `${cartRect.top + window.scrollY + 10}px`,
            left: `${cartRect.left + window.scrollX + 10}px`,
            width: "50px",
            height: "50px",
            opacity: 0,
          });
        });

        setTimeout(() => {
          clone.remove();
          this._finalizeAnimation(item);
        }, this.settings.animationDuration);
      }
    }

    /**
     * Finalize the animation and process the queue
     * @param {HTMLElement} item - The animated item
     */
    _finalizeAnimation(item) {
      this.settings.onComplete?.(item);

      if (this.settings.shakeEffect) {
        this._shakeCart();
      }

      this.isAnimating = false;
      this._processQueue();
    }

    /**
     * Add a shake effect to the cart
     */
    _shakeCart() {
      if (typeof gsap !== "undefined") {
        // Use GSAP for shake animation
        gsap.fromTo(
          this.cartElement,
          { x: 0 },
          {
            x: -10,
            duration: 0.1,
            repeat: 3,
            yoyo: true,
            onComplete: () => this.settings.onCartShake?.(this.cartElement),
          }
        );
      } else {
        // Fallback CSS animation
        const keyframes = [
          { transform: "translateX(0)" },
          { transform: "translateX(-10px)" },
          { transform: "translateX(10px)" },
          { transform: "translateX(0)" },
        ];

        this.cartElement.animate(keyframes, {
          duration: 300,
          iterations: 1,
        });

        this.settings.onCartShake?.(this.cartElement);
      }
    }
  }

  return CartFlow;
});
