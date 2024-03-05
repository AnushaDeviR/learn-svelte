# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Event Forwarding

- In order to forward an event to the component it is being used in the parent component, `on:click` without invoking any functions is set onto the child component.

```html
<div class="backdrop" class:promo="{isPromo}" on:click />
```

- Then on the parent component, the actual function that needs to trigger upon the event on the child component is passed.

```html
<script>
  const toggleModal = () => {
    showModal = !showModal;
  };
</script>
<Modal
  message="Hey, props here"
  {showModal}
  isPromo={true}
  on:click={toggleModal}
/>
```
