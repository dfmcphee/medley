module.exports = {
  components: 'src/components/*/*.tsx',
  skipComponentsWithoutExample: true,
  webpackConfig: require('./config/webpack.config.dev.js'),
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse
};