declare module 'mxgraph' {
  /**
   * An abstraction of an internal hierarchy node or edge
   * @class mxGraphAbstractHierarchyCell
   */
  class mxGraphAbstractHierarchyCell {
    /**
     * The maximum rank this cell occupies. Default is -1.
     */
    maxRank: number;

    /**
     * The minimum rank this cell occupies. Default is -1.
     */
    minRank: number;

    /**
     * The x position of this cell for each layer it occupies
     */
    x: Array<number>;

    /**
     * The y position of this cell for each layer it occupies
     */
    y: Array<number>;

    /**
     * The width of this cell. Default is 0.
     */
    width: number;

    /**
     * The height of this cell. Default is 0.
     */
    height: number;

    /**
     * A cached version of the cells this cell connects to on the next layer up
     */
    nextLayerConnectedCells: Array<mxCell>;

    /**
     * A cached version of the cells this cell connects to on the next layer down
     */
    previousLayerConnectedCells: Array<mxCell>;

    /**
     * Temporary variable for general use. Generally, try to avoid
     * carrying information between stages. Currently, the longest
     * path layering sets temp to the rank position in fixRanks()
     * and the crossing reduction uses this. This meant temp couldn't
     * be used for hashing the nodes in the model dfs and so hashCode
     * was created
     */
    temp: Array<any>;

    /**
     * Returns the cells this cell connects to on the next layer up
     */
    getNextLayerConnectedCells(layer: any): mxCell;

    /**
     * Returns the cells this cell connects to on the next layer down
     */
    getPreviousLayerConnectedCells(layer: any): mxCell;

    /**
     * Returns whether or not this cell is an edge
     */
    isEdge(): boolean;

    /**
     * Returns whether or not this cell is a node
     */
    isVertex(): boolean;

    /**
     * Gets the value of temp for the specified layer
     */
    getGeneralPurposeVariable(layer: any): any;

    /**
     * Set the value of temp for the specified layer
     */
    setGeneralPurposeVariable(layer: number, value: any): any;

    /**
     * Set the value of x for the specified layer
     */
    setX(layer: number, value: number): void;

    /**
     * Gets the value of x on the specified layer
     */
    getX(layer: number): number;

    /**
     * Set the value of y for the specified layer
     */
    setY(layer: number, value: number): void;
  }
}
