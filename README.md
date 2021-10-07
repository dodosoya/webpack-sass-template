# webpack-sass-template

## Install Webpack
1. Install webpack and webpack-cli
    ```
    $ npm install --save-dev webpack webpack-cli 
    ```

2. Create src/index.js
    ```js
    const message = 'Hello World!';

    (function greet(message) {
      console.log(message);
    })(message);
    ```

3. Add build script in package.json
    ```json
    "scripts": {
      "build": "webpack",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```

4. Run webpack
    ```
    $ npm run build
    ```

5. Check dist/main.js
    ```js
    console.log("Hello World!");
    ```

## Customize Webpack configuration
1. Create webpack.config.js
    ```js
    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }
    };
    ```
2. Modify build script in package.json
    ```json
    "scripts": {
      "dev": "webpack --mode development",
      "deploy": "webpack --mode production",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
