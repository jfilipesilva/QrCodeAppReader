module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin', // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
      {
        globals: ['__scanCodes'], // https://github.com/rodgomesc/vision-camera-code-scanner
      },
    ],
  ],
};
