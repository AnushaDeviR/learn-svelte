# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Forms #2

## Check boxes in Svelte

- To manipulate the data with check boxes, it could either be done with:
  - `bind:checked` -> that value being declared as a variable
  - `bind:group` -> to store the selected values onto an array

## Select boxes in Svelte

```html
<label>Belt Colour: </label>
<select bind:value="{beltColour}">
  <option value="black">black</option>
  <option value="orange">orange</option>
  <option value="blue">blue</option>
  <option value="brown">brown</option>
</select>
```
