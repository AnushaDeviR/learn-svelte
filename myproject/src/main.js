import App from "./App.svelte";

const app = new App({
  // the selector to fetch the whole content stored in body; this can be changed to other selector query 
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
