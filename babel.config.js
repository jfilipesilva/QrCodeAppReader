module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    // ['@babel/preset-env', {targets: {node: 'current'}}],
  ],
  plugins: [
    'react-native-reanimated/plugin', // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
  ],
};
