<script>
  let name;
  let beltColour;
  let age;

  const handleSubmit = () => {
    console.log(name, age, beltColour);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Name"
    bind:value={name}
  />
  <input
    type="text"
    name="name"
    id="belt color"
    placeholder="Belt Color"
    bind:value={beltColour}
  />
  <input type="number" name="age" id="age" placeholder="Age" bind:value={age} />
  <button>Add Person</button>
</form>

<style>
</style>
