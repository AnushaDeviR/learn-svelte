# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Event Modifiers

- Event modifiers can be tagged at the end the event on certain elements.

- Common Event modifiers and its usage (ref: [Official Svelte Tutorial](https://learn.svelte.dev/tutorial/event-modifiers)):
  - `once`: to check that the event can only fire once; then it removes the handler
  - `preventDefault`: prevents the default action (eg: when submitting a form, its default action is to refresh the page, but by running preventDefault() it avoids it)
  - `self`: to only fire the event if the clicked event is the target

```html
<!--adding `self` after pipe (|) indicates that the event is triggered only when this element is clicked -->

<div class="backdrop" class:promo="{isPromo}" on:click|self />
```
