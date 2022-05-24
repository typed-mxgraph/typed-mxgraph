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
    
    declare global {
      interface Window {
        mxBasePath: string;
        mxLoadResources: boolean;
        mxForceIncludes: boolean;
        mxLoadStylesheets: boolean;
        mxResourceExtension: string;
      }
    }

    window.mxBasePath = 'assets/mxgraph';
    window.mxLoadResources = true;
    window.mxForceIncludes = false;
    window.mxLoadStylesheets = true;
    window.mxResourceExtension = '.txt';

    export default factory({
      // not working see https://github.com/jgraph/mxgraph/issues/479
      mxBasePath: 'assets/mxgraph',
    });
    ```
    ```ts
    // src/application.ts
    import mx from './mxgraph';                       // <- import values from factory()
    import type { mxGraph, mxGraphModel } from 'mxgraph';  // <- import types only, "import type" is a TypeScript 3.8+ syntax

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
    
There a known issues is https://github.com/typed-mxgraph/typed-mxgraph/issues/50 the error message may look similar to

```
Uncaught TypeError: Cannot set properties of undefined (setting 'mxBasePath')
```

For detailed reasons, please refer to:

- https://github.com/typed-mxgraph/typed-mxgraph/issues/50#issuecomment-1114008885
- and https://github.com/typed-mxgraph/typed-mxgraph/issues/50#issuecomment-1120176914

Demos: 
- https://github.com/typed-mxgraph/typed-mxgraph-example-bundled-with-rollup
- https://github.com/typed-mxgraph/typed-mxgraph-example-bundled-with-webpack



### Implementation

Types have been initially created from mxGraph `4.1.0` by hand (1st hosting repository was [mxgraph-type-definitions]) and progressively updated when new mxgraph
versions have been released.

The mxgraph lib is almost fully covered by types in this project. The issues you may encounter are
* API changes in recent mxgraph have not been reported. We haven't decided how we will manage this in the future, so for now, they are updated when user detect issues
* Function arguments types or 'mandatoriness' may not be accurate: even by reading the JS code, it is sometimes hard to figure out what is the correct type.
* Historically, we try to avoid `any` and use optional when we don't know.
* We expect user to provide feedbacks by creating GitHub issues and/or Pull Requests when they notice issue with the types.


### Implementation Progress

The definitions target mxGraph `4.2.2`. See the implementation status in the following table.
- progress: initial support
  - not yet: no support at all
  - partial: implementation started, but some classes/fields/methods are missing
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


### Development

* converting mxGraph API documentation to TSDoc: see [regexp conversion helpers](./tsdoc-conversion-helpers.md) 


### Also See

We are actively developing, if you want to be a contributor, please refer to the following links

- [mxgraph-road-to-DefinitelyTyped]
- https://github.com/jgraph/mxgraph/issues/81
- https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5317

[mxgraph]: https://www.npmjs.com/package/mxgraph
[mxgraph-type-definitions]: https://github.com/hungtcs/mxgraph-type-definitions
[mxgraph-road-to-DefinitelyTyped]: https://github.com/process-analytics/mxgraph-road-to-DefinitelyTyped
