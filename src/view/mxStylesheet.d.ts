declare module 'mxgraph' {
  export type StyleMap = {
    [key: string]: any;
  };

  /**
   * @class mxStylesheet
   *
   * Defines the appearance of the cells in a graph. See {@link putCellStyle} for an
   * example of creating a new cell style. It is recommended to use objects, not
   * arrays for holding cell styles. Existing styles can be cloned using
   * {@link mxUtils.clone} and turned into a string for debugging using
   * {@link mxUtils.toString}.
   *
   * ### Default Styles
   *
   * The stylesheet contains two built-in styles, which are used if no style is
   * defined for a cell:
   *
   * - defaultVertex Default style for vertices
   * - defaultEdge Default style for edges
   *
   * ### Example
   *
   * ```javascript
   * var vertexStyle = stylesheet.getDefaultVertexStyle();
   * vertexStyle[mxConstants.STYLE_ROUNDED] = true;
   * var edgeStyle = stylesheet.getDefaultEdgeStyle();
   * edgeStyle[mxConstants.STYLE_EDGE] = mxEdgeStyle.EntityRelation;
   * ```
   *
   * Modifies the built-in default styles.
   *
   * To avoid the default style for a cell, add a leading semicolon
   * to the style definition, eg.
   *
   * ```javascript
   * ;shadow=1
   * ```
   *
   * ### Removing keys
   *
   * For removing a key in a cell style of the form [stylename;|key=value;] the
   * special value none can be used, eg. highlight;fillColor=none
   *
   * See also the helper methods in mxUtils to modify strings of this format,
   * namely {@link mxUtils.setStyle}, {@link mxUtils.indexOfStylename},
   * {@link mxUtils.addStylename}, {@link mxUtils.removeStylename},
   * {@link mxUtils.removeAllStylenames} and {@link mxUtils.setStyleFlag}.
   *
   * Constructor: mxStylesheet
   *
   * Constructs a new stylesheet and assigns default styles.
   */
  class mxStylesheet {
    constructor();

    /**
     * Maps from names to cell styles. Each cell style is a map of key,
     * value pairs.
     */
    styles: StyleMap;

    /**
     * Creates and returns the default vertex style.
     */
    createDefaultVertexStyle(): StyleMap;

    /**
     * Creates and returns the default edge style.
     */
    createDefaultEdgeStyle(): StyleMap;

    /**
     * Sets the default style for vertices using defaultVertex as the
     * stylename.
     * @param style Key, value pairs that define the style.
     */
    putDefaultVertexStyle(style: StyleMap): void;

    /**
     * Sets the default style for edges using defaultEdge as the stylename.
     */
    putDefaultEdgeStyle(style: StyleMap): void;

    /**
     * Returns the default style for vertices.
     */
    getDefaultVertexStyle(): StyleMap;

    /**
     * Sets the default style for edges.
     */
    getDefaultEdgeStyle(): StyleMap;

    /**
     * Stores the given map of key, value pairs under the given name in
     * {@link styles}.
     *
     * Example:
     *
     * The following example adds a new style called 'rounded' into an
     * existing stylesheet:
     *
     * ```javascript
     * var style = new Object();
     * style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
     * style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
     * style[mxConstants.STYLE_ROUNDED] = true;
     * graph.getStylesheet().putCellStyle('rounded', style);
     * ```
     *
     * In the above example, the new style is an object. The possible keys of
     * the object are all the constants in {@link mxConstants} that start with STYLE
     * and the values are either JavaScript objects, such as
     * {@link mxPerimeter.RightAngleRectanglePerimeter} (which is in fact a function)
     * or expressions, such as true. Note that not all keys will be
     * interpreted by all shapes (eg. the line shape ignores the fill color).
     * The final call to this method associates the style with a name in the
     * stylesheet. The style is used in a cell with the following code:
     *
     * ```javascript
     * model.setStyle(cell, 'rounded');
     * ```
     *
     * @param name Name for the style to be stored.
     * @param style Key, value pairs that define the style.
     */
    putCellStyle(name: string, style: StyleMap): void;

    /**
     * Returns the cell style for the specified stylename or the given
     * defaultStyle if no style can be found for the given stylename.
     *
     * @param name String of the form [(stylename|key=value);] that represents the style.
     * @param defaultStyle Default style to be returned if no style can be found.
     */
    getCellStyle(name: string, defaultStyle?: StyleMap): StyleMap;
  }
}
