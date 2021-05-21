declare module 'mxgraph' {
  class mxXmlCanvas2D extends mxAbstractCanvas2D {
    constructor(root: Element);

    /**
     * Reference to the container for the SVG content.
     */
    root: Element;

    /**
     * Specifies if text output should be enabled.
     * @default true
     */
    textEnabled: boolean;

    /**
     * Specifies if the output should be compressed by removing redundant calls.
     * @default true
     */
    compressed: boolean;

    /**
     * Writes the rendering defaults to {@link root}:
     */
    writeDefaults(): void;

    /**
     * Returns a formatted number with 2 decimal places.
     */
    format(value: string | number): number;

    /**
     * Creates the given element using the owner document of {@link root}.
     */
    createElement(name: string): Element;

    /**
     * Saves the drawing state.
     */
    save(): void;

    /**
     * Restores the drawing state.
     */
    restore(): void;

    /**
     * Scales the output.
     *
     * @param scale Number that represents the scale where 1 is equal to 100%.
     */
    scale(value: number): void;

    /**
     * Translates the output.
     *
     * @param dx Number that specifies the horizontal translation.
     * @param dy Number that specifies the vertical translation.
     */
    translate(dx: number, dy: number): void;

    /**
     * Rotates and/or flips the output around a given center. (Note: Due to
     * limitations in VML, the rotation cannot be concatenated.)
     *
     * @param theta Number that represents the angle of the rotation (in degrees).
     * @param flipH Boolean indicating if the output should be flipped horizontally.
     * @param flipV Boolean indicating if the output should be flipped vertically.
     * @param cx Number that represents the x-coordinate of the rotation center.
     * @param cy Number that represents the y-coordinate of the rotation center.
     */
    rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

    /**
     * Sets the current alpha.
     *
     * @param value Number that represents the new alpha. Possible values are between
     * 1 (opaque) and 0 (transparent).
     */
    setAlpha(value: number): void;

    /**
     * Sets the current fill alpha.
     *
     * @param value Number that represents the new fill alpha. Possible values are between
     * 1 (opaque) and 0 (transparent).
     */
    setFillAlpha(value: number): void;

    /**
     * Sets the current stroke alpha.
     *
     * @param value Number that represents the new stroke alpha. Possible values are between
     * 1 (opaque) and 0 (transparent).
     */
    setStrokeAlpha(value: number): void;

    /**
     * Sets the current fill color.
     *
     * @param value Hexadecimal representation of the color or 'none'.
     */
    setFillColor(value: string): void;

    /**
     * Sets the gradient. Note that the coordinates may be ignored by some implementations.
     *
     * @param color1 Hexadecimal representation of the start color.
     * @param color2 Hexadecimal representation of the end color.
     * @param x X-coordinate of the gradient region.
     * @param y y-coordinate of the gradient region.
     * @param w Width of the gradient region.
     * @param h Height of the gradient region.
     * @param direction One of {@link mxConstants.DIRECTION_NORTH}, {@link mxConstants.DIRECTION_EAST},
     * {@link mxConstants.DIRECTION_SOUTH} or {@link mxConstants.DIRECTION_WEST}.
     * @param alpha1 Optional alpha of the start color.
     * @default 1 Possible values
     * are between 1 (opaque) and 0 (transparent).
     * @param alpha2 Optional alpha of the end color.
     * @default 1 Possible values
     * are between 1 (opaque) and 0 (transparent).
     */
    setGradient(
      color1: string,
      color2: string,
      x: number,
      y: number,
      w: number,
      h: number,
      direction: string,
      alpha1: number,
      alpha2: number
    ): void;

    /**
     * Sets the current stroke color.
     *
     * @param value Hexadecimal representation of the color or 'none'.
     */
    setStrokeColor(value: string): void;

    /**
     * Sets the current stroke width.
     *
     * @param value Numeric representation of the stroke width.
     */
    setStrokeWidth(value: number): void;

    /**
     * Enables or disables dashed lines.
     *
     * @param value Boolean that specifies if dashed lines should be enabled.
     * @param value Boolean that specifies if the stroke width should be ignored
     * for the dash pattern.
     * @default false
     */
    setDashed(value: boolean, fixDash: boolean): void;

    /**
     * Sets the current dash pattern.
     * @default '3 3'
     *
     * @param value String that represents the dash pattern, which is a sequence of
     * numbers defining the length of the dashes and the length of the spaces
     * between the dashes. The lengths are relative to the line width - a length
     * of 1 is equals to the line width.
     */
    setDashPattern(value: string): void;

    /**
     * Sets the line cap.
     * @default 'flat' which corresponds to 'butt' in SVG
     *
     * @param value String that represents the line cap. Possible values are flat, round
     * and square.
     */
    setLineCap(value: string): void;

    /**
     * Sets the line join.
     * @default 'miter'
     *
     * @param value String that represents the line join. Possible values are miter,
     * round and bevel.
     */
    setLineJoin(value: string): void;

    /**
     * Sets the miter limit.
     * @default 10
     *
     * @param value Number that represents the miter limit.
     */
    setMiterLimit(value: number): void;

    /**
     * Sets the current font color.
     * @default '#000000'
     *
     * @param value Hexadecimal representation of the color or 'none'.
     */
    setFontColor(value: string): void;

    /**
     * Sets the current font background color.
     *
     * @param value Hexadecimal representation of the color or 'none'.
     */
    setFontBackgroundColor(value: string): void;

    /**
     * Sets the current font border color.
     *
     * @param value Hexadecimal representation of the color or 'none'.
     */
    setFontBorderColor(value: string): void;

    /**
     * Sets the current font size.
     * @default {@link mxConstants.DEFAULT_FONTSIZE}
     *
     * @param value Numeric representation of the font size.
     */
    setFontSize(value: number): void;

    /**
     * Sets the current font family.
     * @default {@link mxConstants.DEFAULT_FONTFAMILY}
     *
     * @param value String representation of the font family. This handles the same
     * values as the CSS font-family property.
     */
    setFontFamily(value: string): void;

    /**
     * Sets the current font style.
     *
     * @param value Numeric representation of the font family. This is the sum of the
     * font styles from {@link mxConstants}.
     */
    setFontStyle(value: string): void;

    /**
     * Enables or disables shadows.
     *
     * @param value Boolean that specifies if shadows should be enabled.
     */
    setShadow(value: boolean): void;

    /**
     * Sets the current shadow color. Default {@link mxConstants.SHADOWCOLOR}
     *
     *
     * @param value Hexadecimal representation of the color or 'none'.
     */
    setShadowColor(value: string): void;

    /**
     * Sets the current shadows alpha. Default is {@link mxConstants.SHADOW_OPACITY}
     *
     * @param value Number that represents the new alpha. Possible values are between 1 (opaque) and 0 (transparent).
     */
    setShadowAlpha(value: number): void;

    /**
     * Sets the current shadow offset.
     *
     * @param dx Number that represents the horizontal offset of the shadow.
     * @param dy Number that represents the vertical offset of the shadow.
     */
    setShadowOffset(dx: number, dy: number): void;

    /**
     * Puts a rectangle into the drawing buffer.
     *
     * @param x Number that represents the x-coordinate of the rectangle.
     * @param y Number that represents the y-coordinate of the rectangle.
     * @param w Number that represents the width of the rectangle.
     * @param h Number that represents the height of the rectangle.
     */
    rect(x: number, y: number, w: number, h: number): void;

    /**
     * Puts a rounded rectangle into the drawing buffer.
     *
     * @param x Number that represents the x-coordinate of the rectangle.
     * @param y Number that represents the y-coordinate of the rectangle.
     * @param w Number that represents the width of the rectangle.
     * @param h Number that represents the height of the rectangle.
     * @param dx Number that represents the horizontal rounding.
     * @param dy Number that represents the vertical rounding.
     */
    roundrect(x: number, y: number, w: number, h: number, dx: number, dy: number): void;

    /**
     * Puts an ellipse into the drawing buffer.
     *
     * @param x Number that represents the x-coordinate of the ellipse.
     * @param y Number that represents the y-coordinate of the ellipse.
     * @param w Number that represents the width of the ellipse.
     * @param h Number that represents the height of the ellipse.
     */
    ellipse(x: number, y: number, w: number, h: number): void;

    /**
     * Paints an image.
     *
     * @param x Number that represents the x-coordinate of the image.
     * @param y Number that represents the y-coordinate of the image.
     * @param w Number that represents the width of the image.
     * @param h Number that represents the height of the image.
     * @param src String that specifies the URL of the image.
     * @param aspect Boolean indicating if the aspect of the image should be preserved.
     * @param flipH Boolean indicating if the image should be flipped horizontally.
     * @param flipV Boolean indicating if the image should be flipped vertically.
     */
    image(
      x: number,
      y: number,
      w: number,
      h: number,
      src: string,
      aspect: boolean,
      flipH: boolean,
      flipV: boolean
    ): void;

    /**
     * Starts a new path and puts it into the drawing buffer.
     */
    begin(): void;

    /**
     * Moves the current path the given point.
     *
     * @param x Number that represents the x-coordinate of the point.
     * @param y Number that represents the y-coordinate of the point.
     */
    moveTo(x: number, y: number): void;

    /**
     * Draws a line to the given coordinates.
     *
     * @param x Number that represents the x-coordinate of the endpoint.
     * @param y Number that represents the y-coordinate of the endpoint.
     */
    lineTo(x: number, y: number): void;

    /**
     * Adds a quadratic curve to the current path.
     *
     * @param x1 Number that represents the x-coordinate of the control point.
     * @param y1 Number that represents the y-coordinate of the control point.
     * @param x2 Number that represents the x-coordinate of the endpoint.
     * @param y2 Number that represents the y-coordinate of the endpoint.
     */
    quadTo(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * Adds a bezier curve to the current path.
     *
     * @param x1 Number that represents the x-coordinate of the first control point.
     * @param y1 Number that represents the y-coordinate of the first control point.
     * @param x2 Number that represents the x-coordinate of the second control point.
     * @param y2 Number that represents the y-coordinate of the second control point.
     * @param x3 Number that represents the x-coordinate of the endpoint.
     * @param y3 Number that represents the y-coordinate of the endpoint.
     */
    curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

    /**
     * Closes the current path.
     */
    close(): void;

    /**
     * Paints the given text. Possible values for format are empty string for
     * plain text and html for HTML markup. Background and border color as well
     * as clipping is not available in plain text labels for VML. HTML labels
     * are not available as part of shapes with no foreignObject support in SVG
     * (eg. IE9, IE10).
     *
     * @param x Number that represents the x-coordinate of the text.
     * @param y Number that represents the y-coordinate of the text.
     * @param w Number that represents the available width for the text or 0 for automatic width.
     * @param h Number that represents the available height for the text or 0 for automatic height.
     * @param str String that specifies the text to be painted.
     * @param align String that represents the horizontal alignment.
     * @param valign String that represents the vertical alignment.
     * @param wrap Boolean that specifies if word-wrapping is enabled. Requires w > 0.
     * @param format Empty string for plain text or 'html' for HTML markup.
     * @param overflow Specifies the overflow behaviour of the label. Requires w > 0 and/or h > 0.
     * @param clip Boolean that specifies if the label should be clipped. Requires w > 0 and/or h > 0.
     * @param rotation Number that specifies the angle of the rotation around the anchor point of the text.
     * @param dir Optional string that specifies the text direction. Possible values are rtl and lrt.
     */
    text(
      x: number,
      y: number,
      w: number,
      h: number,
      str: string,
      align: string,
      valign: string,
      wrap: string,
      format: string,
      overflow: string,
      clip: string,
      rotation: number,
      dir: string
    ): void;

    /**
     * Paints the outline of the current drawing buffer.
     */
    stroke(): void;

    /**
     * Fills the current drawing buffer.
     */
    fill(): void;

    /**
     * Fills the current drawing buffer and its outline.
     */
    fillAndStroke(): void;
  }
}
