# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte - Reactive values and statements

- Reactive values in Svelte are values that change according to the updates made to them.

```js
// fullName is a reactive variable and whenever firstName or lastName changes, the variable gets updated instantly
$: fullName = `${firstName} ${lastName}`;
```

- Reactive statements in Svelte updates upon any given changes of the data within the statement.

```js
// prints the data upon whenever the beltColour changes
$: console.log(beltColour);
```

```js
// prints both the vars upon any changes that takes place on the data
$: {
  console.log(beltColour);
  console.log(fullName);
}
```
