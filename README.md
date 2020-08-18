Typed mxGraph
====

[![Build](https://github.com/typed-mxgraph/typed-mxgraph/workflows/Validation/badge.svg)](https://github.com/typed-mxgraph/typed-mxgraph/actions)
[![npm version](https://badge.fury.io/js/%40typed-mxgraph%2Ftyped-mxgraph.svg)](https://badge.fury.io/js/%40typed-mxgraph%2Ftyped-mxgraph)
[![GitHub license](https://img.shields.io/github/license/typed-mxgraph/typed-mxgraph)](https://github.com/typed-mxgraph/typed-mxgraph/blob/master/LICENSE)

mxGraph Typescript Declarations For [Official mxGraph NPM Package][official mxgraph npm package].

### Usage
1. Add `mxgraph` and `@typed-mxgraph/typed-mxgraph` dependencies to your project:
    ```shell
    npm install --save mxgraph
    npm install --save-dev @typed-mxgraph/typed-mxgraph
    ```
2. Update `tsconfig.json` append `node_modules/@typed-mxgraph` to `typeRoots`:
    ```json
    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "esModuleInterop": true,
        "typeRoots": [
          "node_modules/@types",
          "node_modules/@typed-mxgraph"
        ]
      }
    }
    ```
3. Import mxGraph factory:
    ```typescript
    import factory from 'mxgraph';

    const mx = factory({
      mxBasePath: '',
    });
    console.log(mx.mxClient.VERSION);
    ```

[mxgraph-type-definitions]: https://github.com/hungtcs/mxgraph-type-definitions
[official mxgraph npm package]: https://www.npmjs.com/package/mxgraph