/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': [
      'enabled', // Reemplaza 'enabled' por 'error', 'warn' o 0 para habilitar la regla con el nivel deseado
      {
        ignore: [], // Aquí puedes poner una lista de nombres de propiedades que quieres ignorar en la validación de propTypes.
        customValidators: [], // Puedes proporcionar funciones personalizadas de validación de propTypes aquí.
        skipUndeclared: false, // Establece en 'true' si quieres omitir la verificación de propTypes en componentes no declarados (como en caso de Componentes de orden superior, HOC).
      },
    ],
  },
}
