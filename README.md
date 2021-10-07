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
