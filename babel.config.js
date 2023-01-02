module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'nativewind/babel',
        {
          root: ['./'],
          alias: {
            '@': './app',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}