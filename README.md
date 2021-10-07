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

## Install CSS Loader
1. Install style-loader and css-loader 
    ```
    $ npm install --save-dev style-loader css-loader
    ```

2. Add style-loader and css-loader in webpack.config.js
    ```js
    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    };
    ```

3. Create src/style.css
    ```css
    h1 {
      color: #f00;
    }
    ```

4. Modify src/index.js to import style.css
    ```js
    import css from './style.css';
    ```

5. Create dist/index.html
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Webpack SASS Template</title>
      <script src="./bundle.js"></script>
    </head>
    <body>
      <h1>Webpack SASS Template</h1>
    </body>
    </html>
    ```

6. Run script to bundle js
    ```
    $ npm run dev
    ```

7. Open index.html and will see text "Webpack SASS Template" in red

## Install SASS Loader
1. Install sass and sass-loader
    ```
    $ npm install --save-dev sass sass-loader
    ```

2. Add sass-loader in webpack.config.js
    ```js
    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,  // read .sass and .scss file
            use: [
              'style-loader',     // create style node from JS strings
              'css-loader',       // translate CSS into CommonJS
              'sass-loader'       // compile SASS to CSS
            ]
          }
        ]
      }
    };
    ```

3. Change src/style.css to src/style.scss and modify content
    ```scss
    $color: skyblue;

    h1 {
      color: $color;
    }
    ```

4. Modify src/index.js
    ```js
    import './style.scss';
    ```

5. Run script to bundle js
    ```
    $ npm run dev
    ```

6. Refresh index.html and will see text "Webpack SASS Template" in skyblue

## Install Webpack Dev Server
1. Install webpack-dev-server
    ```
    $ npm install --save-dev webpack-dev-server
    ```

2. Modify webpack.config.js
    ```js
    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,  // read .sass and .scss file
            use: [
              'style-loader',     // create style node from JS strings
              'css-loader',       // translate CSS into CommonJS
              'sass-loader'       // compile SASS to CSS
            ]
          }
        ]
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 8080,
        open: true
      }
    };
    ```

3. Modify scripts in package.json
    ```json
    "scripts": {
      "dev": "webpack serve --mode development",
      "deploy": "webpack --mode production",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```

4. Run script to start a dev server listening on 8080 port
    ```
    $ npm run dev
    ```

5. Try to modify src/style.scss and index.html will automatically reload
