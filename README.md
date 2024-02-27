# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - CSS & Conditional Styles

- The `global.css` file which is present under the public folder contains stylings that are applied across the project on different components.

- Svelte bundles the css unique numbers to identify styling implemented upon each components.

## Conditional Styles

```svelte
<script>
  let isPromo=true
</script>

<!-- promo class is applied upon the condition given by isPromo -->
<div class="backdrop" class:promo={isPromo}>
  <div class="modal">
    <p>Sign up for offers!</p>
  </div>
</div>

<style>
  .promo .modal {
    background-color: lightsalmon;
    color: white;
  }
</style>
```
