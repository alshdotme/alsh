/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 150,
  bracketSameLine: true,
  filepath: '**/*.{astro,js,jsx,ts,tsx}',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
