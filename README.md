# A JAMStack Template

* Vue3
* TailwindCSS
* Autocompletion
* Linting
* Formatting

Install these VSCode plugins:

* ESLint
* Headwind
* Prettier - Code formatter
* Tailwind CSS IntelliSense
* Vetur
* Vue VSCode Snippets

Add these to your `.vscode/settings.json` file:

```json
{
  "vetur.validation.template": false,
  "eslint.validate": ["vue", "javascript"],
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
