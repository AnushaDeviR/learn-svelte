# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Inline Event Handlers

- To allow `handleClick` to access "person", "person" data into the "on:click" event.

```svelte
<script>
  let people = [
    { name: "yoshi", beltColour: "black", age: 25, id: 1 },
    { name: "mario", beltColour: "orange", age: 45, id: 2 },
    { name: "luigi", beltColour: "brown", age: 15, id: 3 },
  ];

  const handleClick = () => {
    console.log(person); //this would throw undefined even though 'person' is accessible within the #each loop under the main tag.
  };
</script>

<main>
  {#each people as person (person.id)}
  <div>
    <h4>{person.name}</h4>
    <p>{person.age} years old, {person.beltColour} belt</p>
    <button on:click={handleClick}>delete</button>
  </div>
  {:else}
  <p>There are no people to show...</p>
  {/each}
</main>
```

- But feeding the "person" data into the on:click event would automatically invoke the function which would run immediately upon the load of the function -> this needs to be avoided; hence inline functions can be used.

```svelte
<main>
  {#each people as person (person.id)}
  <div>
    <h4>{person.name}</h4>
    <p>{person.age} years old, {person.beltColour} belt</p>
    <button on:click={() => handleClick(person.id)}>delete</button>
  </div>
  {:else}
  <p>There are no people to show...</p>
  {/each}
</main>
```

- By using the inline function, the `handleClick()` function is triggered only when the button is clicked.
