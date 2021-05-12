declare module 'mxgraph' {
  /**
   * Extends mxShape to implement a text shape.
   * To change vertical text from bottom to top to top to bottom,
   * the following code can be used:
   * @example
   * ```javascript
   * mxText.prototype.verticalTextRotation = 90;
   * ```
   * @class mxText
   * @extends {mxShape}
   */
  class mxText extends mxShape {
    /**
     * @param value             String that represents the text to be displayed.  This is stored in {@link value}.
     * @param bounds            mxRectangle that defines the bounds.  This is stored in {@link mxShape.bounds}.
     * @param align             Specifies the horizontal alignment.  Default is ‘’.  This is stored in {@link align}.
     * @param valign            Specifies the vertical alignment.  Default is ‘’.  This is stored in {@link valign}.
     * @param color             String that specifies the text color.  Default is ‘black’.  This is stored in {@link color}.
     * @param family            String that specifies the font family.  Default is {@link mxConstants.DEFAULT_FONTFAMILY}.  This is stored in {@link family}.
     * @param size              Integer that specifies the font size.  Default is {@link mxConstants.DEFAULT_FONTSIZE}.  This is stored in {@link size}.
     * @param fontStyle         Specifies the font style.  Default is {@link mxConstants.DEFAULT_FONTSTYLE}.  This is stored in {@link fontStyle}.
     * @param spacing           Integer that specifies the global spacing.  Default is 2.  This is stored in {@link spacing}.
     * @param spacingTop        Integer that specifies the top spacing.  Default is 0.  The sum of the spacing and this is stored in {@link spacingTop}.
     * @param spacingRight      Integer that specifies the right spacing.  Default is 0.  The sum of the spacing and this is stored in {@link spacingRight}.
     * @param spacingBottom     Integer that specifies the bottom spacing.  Default is 0.The sum of the spacing and this is stored in {@link spacingBottom}.
     * @param spacingLeft       Integer that specifies the left spacing.  Default is 0.  The sum of the spacing and this is stored in {@link spacingLeft}.
     * @param horizontal        Boolean that specifies if the label is horizontal.  Default is true.  This is stored in {@link horizontal}.
     * @param background        String that specifies the background color.  Default is null.  This is stored in {@link background}.
     * @param border            String that specifies the label border color.  Default is null.  This is stored in {@link border}.
     * @param wrap              Specifies if word-wrapping should be enabled.  Default is false.  This is stored in {@link wrap}.
     * @param clipped           Specifies if the label should be clipped.  Default is false.  This is stored in {@link clipped}.
     * @param overflow          Value of the overflow style.  Default is ‘visible’.
     * @param labelPadding      Specify the label padding. Default is ‘0’.
     * @param textDirection     Specify the text direction. See `mxConstants.TEXT_DIRECTION_` constants of the overflow style.
     */
    constructor(
      value: string,
      bounds: mxRectangle,
      align?: string,
      valign?: string,
      color?: string,
      family?: string,
      size?: number,
      fontStyle?: number,
      spacing?: number,
      spacingTop?: number,
      spacingRight?: number,
      spacingBottom?: number,
      spacingLeft?: number,
      horizontal?: boolean,
      background?: string,
      border?: string,
      wrap?: boolean,
      clipped?: boolean,
      overflow?: string,
      labelPadding?: number,
      textDirection?: string
    );

    value: string;
    color: string;
    valign: string;
    align: string;
    family: string;
    size: number;
    fontStyle: number;
    spacingTop: number;
    spacingRight: number;
    spacingBottom: number;
    spacingLeft: number;
    horizontal: boolean;
    background: string;
    border: string;
    wrap: boolean;
    clipped: boolean;
    overflow: string;
    labelPadding: number;
    textDirection: string;

    /**
     * Specifies the spacing to be added to the top spacing. Use the
     * value `5` here to get the same label positions as in mxGraph 1.x.
     * @default 0
     */
    baseSpacingTop: number;

    /**
     * Specifies the spacing to be added to the bottom spacing. Use the
     * value `1` here to get the same label positions as in mxGraph 1.x.
     * @default 0
     */
    baseSpacingBottom: number;

    /**
     * Specifies the spacing to be added to the left spacing.
     * @default 0
     */
    baseSpacingLeft: number;

    /**
     * Specifies the spacing to be added to the right spacing.
     * @default 0
     */
    baseSpacingRight: number;

    /**
     * Specifies if linefeeds in HTML labels should be replaced with BR tags.
     * @default true
     */
    replaceLinefeeds: boolean;

    /**
     * Rotation for vertical text.
     * @default -90 (bottom to top).
     */
    verticalTextRotation: number;

    /**
     * Specifies if the string size should be measured in {@link updateBoundingBox} if
     * the label is clipped and the label position is center and middle. If this is
     * `true`, then the bounding box will be set to {@link bounds}.
     * {@link ignoreStringSize} has precedence over this switch.
     * @default true.
     */
    ignoreClippedStringSize: boolean;

    /**
     * Specifies if the actual string size should be measured. If disabled the
     * boundingBox will not ignore the actual size of the string, otherwise
     * {@link bounds} will be used instead.
     * @default false
     */
    ignoreStringSize: boolean;

    /**
     * Specifies the padding to be added to the text width for the bounding box.
     * This is needed to make sure no clipping is applied to borders.
     * @default 4 for IE 8 standards mode and 3 for all others.
     */
    textWidthPadding: 4 | 3;

    /**
     * Contains the last rendered text value. Used for caching.
     */
    lastValue: string;

    /**
     * Specifies if caching for HTML labels should be enabled.
     * @default true
     */
    cacheEnabled: boolean;

    /**
     * Text shapes do not contain VML markup and do not need to be parsed. This
     * method returns false to speed up rendering in IE8.
     */
    isParseVml(): boolean;

    /**
     * Returns true if HTML is allowed for this shape. This implementation returns
     * true if the browser is not in IE8 standards mode.
     */
    isHtmlAllowed(): boolean;

    /**
     * Disables offset in IE9 for crisper image output.
     */
    getSvgScreenOffset(): 0 | 0.5;

    /**
     * Returns `true` if the bounds are not null and all of its variables are numeric.
     */
    checkBounds(): boolean;

    /**
     * Generic rendering code.
     */
    paint(c: mxAbstractCanvas2D, update?: boolean): void;

    /**
     * Renders the text using the given DOM nodes.
     */
    redraw(): void;

    /**
     * Resets all styles.
     */
    resetStyles(): void;

    /**
     * Extends mxShape to update the text styles.
     * @param state @{mxCellState} of the corresponding cell.
     */
    apply(state: mxCellState): void;

    /**
     * Used to determine the automatic text direction.
     * This is not invoked for HTML, wrapped content or if {@link value} is a DOM node.
     * @return {@link mxConstants.TEXT_DIRECTION_LTR} or {@link mxConstants.TEXT_DIRECTION_RTL} depending on the contents of {@link value}
     */
    getAutoDirection(): string;

    /**
     * Updates the {@link boundingBox} for this shape using the given node and position.
     */
    updateBoundingBox(): void;

    /**
     * @return 0 to avoid using rotation in the canvas via {@link updateTransform}.
     */
    getShapeRotation(): 0;

    /**
     * @return the rotation for the text label of the corresponding shape.
     */
    getTextRotation(): number;

    /**
     * Inverts the bounds if the horizontal style is `false` and the cell is a vertex.
     */
    isPaintBoundsInverted(): boolean;

    /**
     * Sets the state of the canvas for drawing the shape.
     */
    configureCanvas(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

    /**
     * Sets the width and height of the container to 1px.
     */
    updateVmlContainer(): void;

    /**
     * Updates the HTML node(s) to reflect the latest bounds and scale.
     */
    redrawHtmlShape(): void;

    updateHtmlTransform(): void;

    /**
     * Sets the inner HTML of the given element to the {@link value}.
     */
    updateInnerHtml(elt: HTMLElement): void;

    /**
     * Rotated text rendering quality is bad for IE9 quirks/IE8 standards
     */
    updateHtmlFilter(): void;

    /**
     * Updates the HTML node(s) to reflect the latest bounds and scale.
     */
    updateValue(): void;

    /**
     * Updates the HTML node(s) to reflect the latest bounds and scale.
     */
    updateFont(node: HTMLElement): void;

    /**
     * Updates the HTML node(s) to reflect the latest bounds and scale.
     */
    updateSize(node: HTMLElement, enableWrap: boolean): void;

    /**
     * Returns the spacing as an <mxPoint>.
     */
    updateMargin(): void;

    /**
     * Returns the spacing as an {@link mxPoint}.
     */
    getSpacing(): mxPoint;
  }
}
