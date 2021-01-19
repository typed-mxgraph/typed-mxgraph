declare module 'mxgraph' {
  /**
   * Event handler that selects rectangular regions.
   * This is not built-into [mxGraph].
   * To enable rubberband selection in a graph, use the following code.
   */
  export class mxRubberband {
    graph: mxGraph;

    /**
     * Optional fade out effect.  Default is false.
     */
    fadeOut: boolean;

    /**
     * Specifies the default opacity to be used for the rubberband div.  Default is 20.
     */
    defaultOpacity: number;

    /**
     * Constructs an event handler that selects rectangular regions in the graph using rubberband selection.
     */
    constructor(graph: mxGraph);

    /**
     * Creates the rubberband selection shape.
     */
    createShape(): HTMLElement;

    isEnabled(): boolean;

    start(x: number, y: number): void;
  }
}
