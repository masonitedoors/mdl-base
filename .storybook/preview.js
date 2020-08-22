// Import mdl-core.scss into all stories.
import '!style-loader!css-loader!sass-loader!./../src/scss/mdl-core.scss';
import '!style-loader!css-loader!sass-loader!./preview.scss';

export const parameters = {
  viewMode: 'docs',
  layout: 'padded',
  docs: {
    transformSource: (src) => sanitizeSource(src),
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#F3F3F3',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
    ],
  },
};

function sanitizeSource(src) {
  // Remove backticks.
  src = src.replace(/`/gm, '');

  // Remove groups of 4 spaces.
  src = src.replace(/^(    )/gm, '');

  // Remove groups of 2 spaces.
  src = src.replace(/^(  )/gm, '');

  return src;
}
