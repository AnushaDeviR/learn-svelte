<script>
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  let name;
  let beltColour;
  let age;

  let skills = [];

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
<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Name"
    bind:value={name}
  />

  <input type="number" name="age" id="age" placeholder="Age" bind:value={age} />
  <br />
  <!-- <input type="checkbox" bind:checked={fighting} /> fighting<br />
  <input type="checkbox" bind:checked={sneaking} /> sneaking<br />
  <input type="checkbox" bind:checked={running} /> running<br /> -->

  <input type="checkbox" bind:group={skills} value="fighting" /> fighting<br />
  <input type="checkbox" bind:group={skills} value="sneaking" /> sneaking<br />
  <input type="checkbox" bind:group={skills} value="running" /> running<br />

  <label>Belt Colour: </label>
  <select bind:value={beltColour}>
    <option value="black">black</option>
    <option value="orange">orange</option>
    <option value="blue">blue</option>
    <option value="brown">brown</option>
  </select>
  <br />
  <button>Add Person</button>
</form>

<style>
</style>
