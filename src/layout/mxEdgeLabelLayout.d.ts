declare module 'mxgraph' {
  /**
   * Extends <mxGraphLayout> to implement an edge label layout. This layout
   * makes use of cell states, which means the graph must be validated in
   * a graph view (so that the label bounds are available) before this layout
   * can be executed.
   *
   * @example
   * ```javascript
   * var layout = new mxEdgeLabelLayout(graph);
   * layout.execute(graph.getDefaultParent());
   * ```
   */
  class mxEdgeLabelLayout extends mxGraphLayout {
    /**
     * Constructs a new edge label layout.
     *
     * @param graph   {@link mxGraph} that contains the cells.
     */
    // TODO radius is declared in mxgraph-js 4.1.1 but is not used
    constructor(graph: mxGraph, radius?: number);

    /**
     * Implements {@link mxGraphLayout.execute}
     */
    execute(parent: mxCell): void;

    /**
     * Places the labels of the given edges.
     *
     * @param v   vertexes
     * @param e   edges
     */
    placeLabels(v: Array<mxCell>, e: Array<mxCell>): void;

    /**
     * Places the labels of the given edges.
     */
    avoid(edge: mxCell, vertex: mxCell): void;
  }
}
