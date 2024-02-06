# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte Basics

- The root component is called `App.svelte` and should have `.svelte` as an extension.
- A svelte file contains 3 parts:

  1. script code - containing the component logic
  2. HTML template - the building component
  3. style tag - the component's stylings

- The `main.js` file runs first and sets everything.

```js
import App from "./App.svelte"; //automatically exported from .svelte files

const app = new App({
  //the App instance is injected into the `body` tag
  target: document.body,
  // sends data into the App instance
  props: {
    name: "world",
  },
});

export default app;
```

- When the project is built, svelte compiles all the components into a single JS file and places it into the bundle folder; these are called from the `index.html`.

- Once the component is created it get injected in DOM which is fetched using the `document.body` query in the `main.js` file.

- Under the `<script>` tag, if a variable's data is being passed as a prop then it must be exported, if not it will be undefined.
