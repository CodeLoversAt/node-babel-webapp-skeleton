# node-babel-webapp-skeleton
Webapp sekelton with ES6 support using babel and a node.js backend

## Usage

1. download the zip file: `wget https://github.com/CodeLoversAt/node-babel-webapp-skeleton/archive/master.zip`
2. unpack it: `unzip master.zip && cd node-babel-webapp-skeleton`
3. install dependencies: `npm install`
4. If you don't have gulp installed already, do so now: `npm install -g gulp`
5. Start it: `gulp watch`

## Directories

### `src`

This is the folder where you put all your code in. It is divided into `frontend` and `backend`. Put all your client-side stuff into `frontend` all your server-side stuff into `backend`. You can use ES6 on both ends; all sources will be transpiled to ES5 and put into `dist/frontend` and `dist/backend`.

The folder structure you use in `src/backend` will be kept in `dist/backend`. For the frontend part [browserify](http://browserify.org/) is used and all JavaScript sources are compiled into one single bundle file in `dist/frontend/js/app.js`.

#### `src/frontend/html`

Put your HTML files here. They will get minified before they are copied to `dist/frontend`. When copied to the `dist` folder, the `html` part of the part will be omitted. So `src/frontend/html/index.html` will land in `dist/frontend/index.html` and `src/frontend/html/partials/foo.html` will be copied to `dist/frontend/partials/foo.html`.

#### `src/frontend/js`

Here you put your client-side JavaScript code. As mentioned above, you can use ES6 and it will be transpiled and bundled into `dist/frontend/js/app.js`.

#### `src/frontend/scss`

This skeleton uses [SASS](http://sass-lang.com) to compile your stylesheets. Out of the box it already includes [bootstrap-sass](https://www.npmjs.com/package/bootstrap-sass) and [Bourbon](https://www.npmjs.com/package/bourbon).

### `dist`

This is where your compiled stuff will land eventually. It will have the same folder structure as your `src` folder (except `frontend/js` and `frontend/html` as described above).

### `test`

Your tests.

### `gulp`

Your gulp tasks.

## Managing dependencies

Since this skeleton uses you can leverage the power of npm for both server- and client-side dependencies. If you need a client-side module that's not available via npm, but f.e. via bower, you can use that too either via providing a shim for your browserify config (in `gulp/frontend/tasks/scripts.js`) or by putting a *browser* config to your `package.json`. Please refer to the [gulp-browserify](https://www.npmjs.com/package/gulp-browserify) and [browserify](http://browserify.org) documentations for more information.
