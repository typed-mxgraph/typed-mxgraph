declare module 'mxgraph' {
  /**
   * @class mxPerimeter
   *
   * Provides various perimeter functions to be used in a style
   * as the value of {@link mxConstants.STYLE_PERIMETER}. Perimeters for
   * rectangle, circle, rhombus and triangle are available.
   *
   * ### Example
   *
   * @example
   * ```javascript
   * <add as="perimeter">mxPerimeter.RectanglePerimeter</add>
   * ```
   *
   * ### Or programmatically
   *
   * @example
   * ```javascript
   * style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
   * ```
   *
   * When adding new perimeter functions, it is recommended to use the
   * mxPerimeter-namespace as follows:
   *
   * @example
   * ```javascript
   * mxPerimeter.CustomPerimeter = function (bounds, vertex, next, orthogonal)
   * {
   *   var x = 0; // Calculate x-coordinate
   *   var y = 0; // Calculate y-coordainte
   *
   *   return new mxPoint(x, y);
   * }
   * ```
   *
   * #### The new perimeter should then be registered in the {@link mxStyleRegistry} as follows
   * @example
   * ```javascript
   * mxStyleRegistry.putValue('customPerimeter', mxPerimeter.CustomPerimeter);
   * ```
   *
   * #### The custom perimeter above can now be used in a specific vertex as follows:
   *
   * @example
   * ```javascript
   * model.setStyle(vertex, 'perimeter=customPerimeter');
   * ```
   *
   * Note that the key of the {@link mxStyleRegistry} entry for the function should
   * be used in string values, unless {@link mxGraphView.allowEval} is true, in
   * which case you can also use mxPerimeter.CustomPerimeter for the value in
   * the cell style above.
   *
   * #### Or it can be used for all vertices in the graph as follows:
   *
   * @example
   * ```javascript
   * var style = graph.getStylesheet().getDefaultVertexStyle();
   * style[mxConstants.STYLE_PERIMETER] = mxPerimeter.CustomPerimeter;
   * ```
   *
   * Note that the object can be used directly when programmatically setting
   * the value, but the key in the {@link mxStyleRegistry} should be used when
   * setting the value via a key, value pair in a cell style.
   *
   * The parameters are explained in {@link RectanglePerimeter}.
   */
  class mxPerimeter {
    /**
     * Describes a rectangular perimeter for the given bounds.
     *
     * @param bounds {@link mxRectangle} that represents the absolute bounds of the
     * vertex.
     * @param vertex {@link mxCellState} that represents the vertex.
     * @param next {@link mxPoint} that represents the nearest neighbour point on the
     * given edge.
     * @param orthogonal Boolean that specifies if the orthogonal projection onto
     * the perimeter should be returned. If this is false then the intersection
     * of the perimeter and the line between the next and the center point is
     * returned.
     */
    static RectanglePerimeter(bounds: mxRectangle, vertex: mxCellState, next: mxPoint, orthogonal?: boolean): mxPoint;

    /**
     * Describes an elliptic perimeter. See {@link RectanglePerimeter}
     * for a description of the parameters.
     */
    static EllipsePerimeter(bounds: mxRectangle, vertex: mxCellState, next: mxPoint, orthogonal?: boolean): mxPoint;

    /**
     * Describes a rhombus (aka diamond) perimeter. See {@link RectanglePerimeter}
     * for a description of the parameters.
     */
    static RhombusPerimeter(bounds: mxRectangle, vertex: mxCellState, next: mxPoint, orthogonal?: boolean): mxPoint;

    /**
     * Describes a triangle perimeter. See {@link RectanglePerimeter}
     * for a description of the parameters.
     */
    static TrianglePerimeter(bounds: mxRectangle, vertex: mxCellState, next: mxPoint, orthogonal?: boolean): mxPoint;

    /**
     * Describes a hexagon perimeter. See {@link RectanglePerimeter}
     * for a description of the parameters.
     */
    static HexagonPerimeter(bounds: mxRectangle, vertex: mxCellState, next: mxPoint, orthogonal?: boolean): mxPoint;
  }
}
