## MongoDB

if using jest with es-modules:

npm install --save-dev babel-jest

In your package.json file, make the following changes:
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
}

Install babel preset:
npm install @babel/preset-env --save-dev

Create a .babelrc file:
{
  "presets": ["@babel/preset-env"]
}

Run your tests:
npm run test