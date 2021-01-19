declare module 'mxgraph' {
  class mxCompositeLayout extends mxGraphLayout {
    constructor(graph: mxGraph, layouts: Array<mxGraphLayout>, master: mxGraphLayout);
  }
}
