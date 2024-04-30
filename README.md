# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Slots

- To send something more complex such as HTML tags, `slots` can be used instead of props.

```html
<!-- Component that is being sent to Modal.svelte -->
<Modal {showModal} on:click="{toggleModal}">
  <h3>Add a new person</h3>
  <form action="">
    <input type="text" name="name" id="name" placeholder="Name" />
    <input type="text" name="name" id="belt color" placeholder="Belt Color" />
    <button>Add Person</button>
  </form>
</Modal>

<!-- Modal.svelte -->
<div class="backdrop" class:promo="{isPromo}" on:click|self>
  <div class="modal">
    <!-- the component is being appended here -->
    <slot></slot>
  </div>
</div>
```

- To send a named slot:

```html
<div slot="title"><h3>Add a new person</h3></div>

<!-- Modal.svelte -->
<slot name="title"></slot>
```
