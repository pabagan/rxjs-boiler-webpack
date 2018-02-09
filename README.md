# Webpack + Babel configuration for latest ECMAs

I am maintaining this one just to maintain a configuration able to run latest ECMA (6/7)features. Also to play:

* [Lite Server](https://github.com/johnpapa/lite-server) will show `index.html` with the bundle js from `/dist` at [http://127.0.0.1:8000/](http://127.0.0.1:8000/).
* [Analize Bundles](https://www.npmjs.com/package/webpack-bundle-analyzer) to inspect your bundle content (I just discovered this cool package). Will show a visualization of the bundle file at [http://127.0.0.1:8888/](http://127.0.0.1:8888/) after each `webpack` build.

```bash
# Dev
npm start
# Build
npm run build
```
