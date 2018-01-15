const path = require('path');

module.exports = {
  components: 'src/components/*/*.tsx',
  skipComponentsWithoutExample: true,
  webpackConfig: require('./config/webpack.config.dev.js'),
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'src/styleguide/components/Logo'),
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/components/StyleGuide'),
    ReactComponentRenderer: path.join(__dirname, 'src/styleguide/components/ReactComponent'),
  },
};
