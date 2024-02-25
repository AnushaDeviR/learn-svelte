# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Conditionals

- Conditionals = if-checks in Svelte

```svelte
<script>
  let num = 5;
</script>

{#if num > 20}
  <p>Greater than 20</p>
{:else if num > 5}
  <p>Greater than 5</p>
{:else}
  <p>Not greater than 5</p>
{/if}
```

- This is used to render HTML elements according to the provided conditions.
