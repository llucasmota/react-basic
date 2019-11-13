module.exports = {
  presets: [
    "@babel/preset-env", //responsável por tratar funcionalidades que o navegador ainda não entendi
    "@babel/preset-react" // responsável por fazer o navegador entender funcs do jsx
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
