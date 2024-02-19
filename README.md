# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - User Input and Data Binding

- In svelte two-way binding of the data in input can be done using the `bind:` directive. This allows data to flow the other way round from child to parent. [[Ref.](https://svelte.dev/docs/element-directives#bind-property)]

```html
<!-- traditional way of keeping the input and data display in sync -->
<input type="text" on:input="{handleInput}" value="{beltColour}" />

<!-- // svelte's way of updating the value in sync -->
<input type="text" bind:value="{beltColour}" />
```

Notes:

- A function without `()` is invoked only when it is used.
