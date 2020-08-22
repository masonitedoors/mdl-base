module.exports = {
  stories: ['../docs/**/*.stories.(js|mdx)'],
  addons: [
    {
      name: '@storybook/addon-a11y',
      options: {},
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
        actions: false,
      },
    },
  ],
};
