module.exports = {
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '*.stories.mdx',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
