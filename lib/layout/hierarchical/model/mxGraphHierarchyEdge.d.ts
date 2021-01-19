declare module 'mxgraph' {
  /**
   * An abstraction of a hierarchical edge for the hierarchy layout
   *
   * @class mxGraphHierarchyEdge
   * @extends mxGraphAbstractHierarchyCell
   */
  class mxGraphHierarchyEdge extends mxGraphAbstractHierarchyCell {
    /**
     * Constructs a hierarchy edge
     * @param {Array<mxCell>} edges   a list of real graph edges this abstraction represents
     */
    constructor(edges: Array<mxCell>);

    /**
     * The graph edge(s) this object represents. Parallel edges are all grouped
     * together within one hierarchy edge.
     */
    edges: Array<mxCell>;

    /**
     * The object identities of the wrapped cells
     */
    ids: Array<string>;

    /**
     * The node this edge is sourced at
     */
    source: mxCell;

    /**
     * The node this edge targets
     */
    target: mxCell;

    /**
     * Whether or not the direction of this edge has been reversed
     * internally to create a DAG for the hierarchical layout
     */
    isReversed: boolean;

    /**
     * Inverts the direction of this internal edge(s)
     */
    invert(layer: number): void;

    /**
     * Returns the cells this cell connects to on the next layer up
     */
    getNextLayerConnectedCells(layer: number): mxCell;

    /**
     * Returns the cells this cell connects to on the next layer down
     */
    getPreviousLayerConnectedCells(layer: number): mxCell;

    /**
     * Returns true.
     */
    isEdge(): boolean;

    /**
     * Gets the value of temp for the specified layer
     */
    getGeneralPurposeVariable(layer: number): any;

    /**
     * Set the value of temp for the specified layer
     */
    setGeneralPurposeVariable(layer: number, value: any): void;

    /**
     * Gets the first core edge associated with this wrapper
     */
    getCoreCell(): mxCell;
  }
}
