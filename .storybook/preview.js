import { addParameters } from '@storybook/html';

// Import mdl-core.scss into all stories.
import '!style-loader!css-loader!sass-loader!./../src/scss/mdl-core.scss';
import '!style-loader!css-loader!sass-loader!./preview.scss';

// @storybook/addon-backgrounds
addParameters({
  backgrounds: [
    {
      name: 'gray',
      value: '#F3F3F3',
      default: true,
    },
    {
      name: 'white',
      value: '#FFFFFF',
    },
  ],
});
