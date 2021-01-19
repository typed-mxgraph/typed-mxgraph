declare module 'mxgraph' {
  class mxCircleLayout {
    x0: number;
    y0: number;
    radius: number;
    moveCircle: boolean;
    disableEdgeStyle: boolean;

    constructor(graph: mxGraph, radius?: number);

    execute(parent: mxCell): void;

    getRadius(count: number, max: number): number;
  }
}
