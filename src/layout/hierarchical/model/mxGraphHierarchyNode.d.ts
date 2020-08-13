declare module 'mxgraph' {
  /**
   * An abstraction of a hierarchical edge for the hierarchy layout
   *
   * @class mxGraphHierarchyNode
   */
  class mxGraphHierarchyNode extends mxGraphAbstractHierarchyCell {
    /**
     * Constructs an internal node to represent the specified real graph cell
     *
     * @param {mxCell} cell   the real graph cell this node represents
     */
    constructor(cell: mxCell);

    /**
     * The graph cell this object represents.
     */
    cell: mxCell;

    /**
     * The object identity of the wrapped cell
     */
    id: string;

    /**
     * Collection of hierarchy edges that have this node as a target
     */
    connectsAsTarget: any;

    /**
     * Collection of hierarchy edges that have this node as a source
     */
    connectsAsSource: any;

    /**
     * Assigns a unique hashcode for each node. Used by the model dfs instead
     * of copying HashSets
     */
    hashCode: boolean;

    /**
     * Returns the integer value of the layer that this node resides in
     */
    getRankValue(layer: number): number;

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
    isVertex(): boolean;

    /**
     * Gets the value of temp for the specified layer
     */
    getGeneralPurposeVariable(layer: number): any;

    /**
     * Set the value of temp for the specified layer
     */
    setGeneralPurposeVariable(layer: number, value: any): void;

    /**/
    isAncestor(otherNode: any): boolean;

    /**
     * Gets the core vertex associated with this wrapper
     */
    getCoreCell(): mxCell;
  }
}
