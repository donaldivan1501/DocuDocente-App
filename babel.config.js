module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
    ],
    plugins: [
      // Agrega aquí plugins adicionales si los usas (ej. 'react-native-reanimated/plugin')
    ],
  };
};