declare module 'mxgraph' {
  /**
   * Extends <mxGraphLayout> for partitioning the parent cell vertically or
   * horizontally by filling the complete area with the child cells. A horizontal
   * layout partitions the height of the given parent whereas a a non-horizontal
   * layout partitions the width. If the parent is a layer (that is, a child of
   * the root node), then the current graph size is partitioned. The children do
   * not need to be connected for this layout to work.
   *
   * Example:
   *
   * @example
   * ```javascript
   * var layout = new mxPartitionLayout(graph, true, 10, 20);
   * layout.execute(graph.getDefaultParent());
   * ```
   * @class
   */
  class mxPartitionLayout extends mxGraphLayout {
    /**
     * Constructs a new stack layout layout for the specified graph,
     * spacing, orientation and offset.
     * @param {mxGraph} graph
     * @param {boolean} [horizontal]
     * @param {number} [spacing]
     * @param {number} [border]
     * @memberof mxPartitionLayout
     */
    constructor(graph: mxGraph, horizontal?: boolean, spacing?: number, border?: number);

    /**
     * Boolean indicating the direction in which the space is partitioned.
     * Default is true.
     */
    horizontal: boolean;

    /**
     * Integer that specifies the absolute spacing in pixels between the
     * children. Default is 0.
     */
    spacing: number;

    /**
     * Integer that specifies the absolute inset in pixels for the parent that
     * contains the children. Default is 0.
     */
    border: number;

    /**
     * Boolean that specifies if vertices should be resized. Default is true.
     */
    resizeVertices: boolean;

    /**
     * Returns <horizontal>.
     */
    isHorizontal(): boolean;

    /**
     * Implements {@link mxGraphLayout.moveCell}.
     *
     * @param {mxCell} cell
     * @param {number} x
     * @param {number} y
     * @memberof mxPartitionLayout
     */
    moveCell(cell: mxCell, x: number, y: number): void;

    /**
     * Implements <mxGraphLayout.execute>. All children where <isVertexIgnored>
     * returns false and <isVertexMovable> returns true are modified.
     */
    execute(parent: mxCell): void;
  }
}
