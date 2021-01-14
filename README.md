Typed mxGraph
====

[![Build](https://github.com/typed-mxgraph/typed-mxgraph/workflows/Validation/badge.svg)](https://github.com/typed-mxgraph/typed-mxgraph/actions)
[![npm version](https://badge.fury.io/js/%40typed-mxgraph%2Ftyped-mxgraph.svg)](https://www.npmjs.com/package/@typed-mxgraph/typed-mxgraph)
[![GitHub license](https://img.shields.io/github/license/typed-mxgraph/typed-mxgraph)](https://github.com/typed-mxgraph/typed-mxgraph/blob/master/LICENSE)

mxGraph Typescript Declarations For [Official mxGraph NPM Package][mxgraph].

### Usage
1. Add `mxgraph` and `@typed-mxgraph/typed-mxgraph` dependencies to your project:

   npm:
   ```shell
    npm install --save mxgraph
    npm install --save-dev @typed-mxgraph/typed-mxgraph
    ```
   yarn:
   ```shell
   yarn add mxgraph
   yarn add --dev @typed-mxgraph/typed-mxgraph
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
4. (optional) Create a helper to import mxgraph
    ```ts
    // src/mxgraph.ts
    import factory from 'mxgraph';

    (window as any)['mxBasePath'] = 'assets/mxgraph';

    export default factory({
      // not working see https://github.com/jgraph/mxgraph/issues/479
      mxBasePath: 'assets/mxgraph',
    });
    ```
    ```ts
    // src/application.ts
    import mx from './mxgraph';                       // <- import values from factory()
    import { mxGraph, mxGraphModel } from 'mxgraph';  // <- import types only

    export class Application {

      constructor(container: HTMLElement) {
        if(mx.mxClient.isBrowserSupported()) {
          console.log('Yes! Yes!');
        }

        const graph: mxGraph = new mx.mxGraph(container);
        const model: mxGraphModel = graph.getModel();
        model.beginUpdate();
        try {
          graph.insertVertex(graph.getDefaultParent(), '', 'TEST', 0, 0, 100, 100);
        } finally {
          model.endUpdate();
        }
      }

    }
    ```

Demo: https://github.com/typed-mxgraph/typed-mxgraph-demo

### Progress

The definitions currently target mxGraph `4.1.1`. See the implementation status in the following table.
- progress: initial support
  - not yet: no support at all
  - partial: implementation started but some classes/fields/methods are missing
  - completed: all classes/fields/methods should exist (fill an issue and/or provide a Pull Request if you detect an issue) but
    - TSDoc is not fully accurate
    - some type declaration may be wrong
- checked: a finest review has been conducted about TSDoc, mxGraph types used by functions/methods, fields, ...

| Module         | Progress  | Checked |
|:---------------|:---------:|:-------:|
| editor         | partial   | no      |
| handler        | completed | no      |
| io             | completed | no      |
| layout         | completed | no      |
| model          | completed | no      |
| shape          | completed | no      |
| util           | partial   | no      |
| view           | partial   | no      |
| mxClient.d.ts  | completed | no      |


### Also See

We are actively developing, if you want to be a contributor, please refer to the following links

- [mxgraph-road-to-DefinitelyTyped]
- https://github.com/jgraph/mxgraph/issues/81
- https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5317

[mxgraph]: https://www.npmjs.com/package/mxgraph
[mxgraph-type-definitions]: https://github.com/hungtcs/mxgraph-type-definitions
[mxgraph-road-to-DefinitelyTyped]: https://github.com/process-analytics/mxgraph-road-to-DefinitelyTyped
