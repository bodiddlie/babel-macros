import baseTheme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: '#d6deeb',
    background: '#011627',
    link: '#addb67',
  },
  prism: {
    style: okaidia,
  },
};
