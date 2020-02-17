module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@Components': './src/components',
            '@Screens': './src/screens',
            '@Firebase': './src/utils/firebase',
            '@Navigation': './src/navigation',
            '@Assets': './assets',
            '@Utils': './src/utils',
            '@Env': './src/utils/enviroment',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  }
}
