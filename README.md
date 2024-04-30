# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Dispatching Custom Events

[Documentation](https://svelte.dev/docs#run-time-svelte-createeventdispatcher)

- Whenever we want to emit an event with custom data from a component to be handled in a parent component, `createEventDispatcher()` is used (which is imported from the Svelte library).

- `let dispatch = createEventDispatcher();` -> to dispatch the custom event with some custom data to another component.

- Event dispatchers are functions that can take two arguments: name and detail.

```html
<!-- AddPersonForm.svelte -->
<script>
  const handleSubmit = () => {
    const person = {
      name,
      age,
      beltColour,
      skills,
      id: Math.random(),
    };
    // dispatching a custom event (addPerson)
    dispatch("addPerson", person);
  };
</script>

<!-- When handleSubmit is invoked the dispatch is going to send the custom event and data -->
<form on:submit|preventDefault="{handleSubmit}">
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Name"
    bind:value="{name}"
  />
</form>

<!-- App.svelte -->
<Modal {showModal} on:click="{toggleModal}">
  <AddPersonForm on:addPerson="{addPerson}" />
</Modal>
```

`NOTE:`

- When an object contains the same key and value pair naming:

```js
const person = {
  name: name,
  age: age,
  beltColour: beltColour,
  skills: skills,
  id: Math.random(),
};
```

it can be written as:

```js
const person = {
  name,
  age,
  beltColour,
  skills,
  id: Math.random(),
};
```

- Svelte looks for the updated data and to let Svelte know that the data needs to be assigned to a variable.

```js
let people = [
  { name: "yoshi", beltColour: "black", age: 25, id: 1 },
  { name: "mario", beltColour: "orange", age: 45, id: 2 },
  { name: "luigi", beltColour: "brown", age: 15, id: 3 },
];

const addPerson = (e) => {
  const person = e.detail; //this is how svelte knows that person is being updated with new values
  people = [person, ...people];
};
```
