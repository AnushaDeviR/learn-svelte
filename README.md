# [Notes] Svelte Tutorial for Beginners - NetNinja

# Svelte Basics

## Basic Svelte folder structure:

my-app
│  
└── node_modules
│ └─ bin
│ │ ...
└── public
│ └─ build
│ │ bundle.css
│ │ bundle.js
│ │ bundle.js.map
│ favicon.png
│ global.css
│ index.html
└── scripts
│ │ setupTypeScript.js
└── src
│ │ App.svelte
│ │ main.js
│ .gitignore
│ package-lock.json
│ package.json
│ README.md
│ rollup.config.js

- The source code is within the `src` folder.
- `rollup.config.js` is like a webpack file for svelte.
- When deploying a Svelte application on production, Svelte complies the code and is put into `public` folder.
