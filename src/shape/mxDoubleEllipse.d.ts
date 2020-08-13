declare module 'mxgraph' {
  /**
   * Extends {@link mxShape} to implement a double ellipse shape.
   *
   * This shape is registered under {@link mxConstants.SHAPE_DOUBLE_ELLIPSE} in {@link mxCellRenderer}.
   *
   * Use the following override to only fill the inner ellipse in this shape:
   * @example
   * ```javascript
   * mxDoubleEllipse.prototype.paintVertexShape = function(c, x, y, w, h)
   * {
   *   c.ellipse(x, y, w, h);
   *   c.stroke();
   *
   *   var inset = mxUtils.getValue(this.style, mxConstants.STYLE_MARGIN, Math.min(3 + this.strokewidth, Math.min(w / 5, h / 5)));
   *   x += inset;
   *   y += inset;
   *   w -= 2 * inset;
   *   h -= 2 * inset;
   *
   *   if (w > 0 && h > 0)
   *   {
   *     c.ellipse(x, y, w, h);
   *   }
   *
   *   c.fillAndStroke();
   * };
   * ```
   */
  class mxDoubleEllipse extends mxShape {
    /**
     * Constructs a new ellipse shape.
     *
     * @param bounds         {@link mxRectangle} that defines the bounds. This is stored in {@link mxShape.bounds}.
     * @param fill           String that defines the fill color. This is stored in {@link mxShape.fill}.
     * @param stroke         String that defines the stroke color. This is stored in {@link mxShape.stroke}.
     * @param strokewidth    Optional integer that defines the stroke width. Default is 1. This is stored in {@link mxShape.strokewidth}.
     */
    constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

    /**
     * Scale for improving the precision of VML rendering.
     * @default `10`
     */
    mxDoubleEllipse: number;

    /**
     * Paints the background.
     */
    paintBackground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Paints the foreground.
     */
    paintForeground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * @returns the bounds for the label.
     */
    getLabelBounds(rect: mxRectangle): mxRectangle;
  }
}
