declare module 'mxgraph' {
  class mxMorphing extends mxEventSource {
    steps: number;
    step: number;
    ease: number;
    delay: number;

    constructor(graph: mxGraph, steps?: number, ease?: number, delay?: number);

    startAnimation(): void;
    updateAnimation(): void;
    show(move: any): void;
    animateCell(cell: mxCell, move: any, recurse: any): void;
    stopRecursion(state: any, delta: any): boolean;
    getDelta(state: any): any;
    getOriginForCell(cell: mxCell): any;
  }
}
