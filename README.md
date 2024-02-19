# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Each Loops

- When looping through an object - Svelte needs an `id` otherwise it would throw an error.

```html
<script>
  let people = [
    { name: "yoshi", beltColour: "black", age: 25, id: 1 },
    { name: "mario", beltColour: "orange", age: 45, id: 2 },
    { name: "luigi", beltColour: "brown", age: 15, id: 3 },
  ];
</script>

<main>
  <!-- keys are within the brackets -->
  {#each people as person (person.id)}
  <div>
    <h4>{person.name}</h4>
    <p>{person.age} years old, {person.beltColour} belt</p>
  </div>
  {:else}
  <p>There are no people to show...</p>
  {/each} {/each}
</main>
```
