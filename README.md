# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Forms #1

- When submitting a form, it refreshes the page by default. To restrict that refresh we have to pipe `preventDefault` in events.

```html
<form on:submit|preventDefault={handleSubmit}>
```
