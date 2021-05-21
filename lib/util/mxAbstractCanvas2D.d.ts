declare module 'mxgraph' {
  /**
   * This type does not exist in the mxGraph JavaScript code. It is inferred from the actual implementation
   * @internal
   */
  export interface mxCanvas2DState {
    dx: number;
    dy: number;
    scale: number;
    alpha: number;
    fillAlpha: number;
    strokeAlpha: number;
    fillColor: string;
    gradientFillAlpha: number;
    gradientColor: string;
    gradientAlpha: number;
    gradientDirection: string;
    strokeColor: string;
    strokeWidth: number;
    dashed: boolean;
    dashPattern: string;
    fixDash: boolean;
    lineCap: string;
    lineJoin: string;
    miterLimit: number;
    fontColor: string;
    fontBackgroundColor: string;
    fontBorderColor: string;
    fontSize: number;
    fontFamily: string;
    fontStyle: number;
    shadow: boolean;
    shadowColor: string;
    shadowAlpha: number;
    shadowDx: number;
    shadowDy: number;
    rotation: number;
    rotationCx: number;
    rotationCy: number;
  }

  /**
   * Base class for all canvases.
   * All color values of <mxConstants.NONE> will be converted to null in the state.
   *
   * The following methods make up the public interface of the canvas 2D for all painting in mxGraph:
   * - <save>, <restore>
   * - <scale>, <translate>, <rotate>
   * - <setAlpha>, <setFillAlpha>, <setStrokeAlpha>, <setFillColor>, <setGradient>,
   *   <setStrokeColor>, <setStrokeWidth>, <setDashed>, <setDashPattern>, <setLineCap>,
   *   <setLineJoin>, <setMiterLimit>
   * - <setFontColor>, <setFontBackgroundColor>, <setFontBorderColor>, <setFontSize>,
   *   <setFontFamily>, <setFontStyle>
   * - <setShadow>, <setShadowColor>, <setShadowAlpha>, <setShadowOffset>
   * - <rect>, <roundrect>, <ellipse>, <image>, <text>
   * - <begin>, <moveTo>, <lineTo>, <quadTo>, <curveTo>
   * - <stroke>, <fill>, <fillAndStroke>
   *
   * {@link arcTo} is an additional method for drawing paths. This is a synthetic method, meaning that it is turned into a
   * sequence of curves by default. Subclassers may add native support for arcs.
   *
   * Note: this type is not `abstract` in the mxGraph JavaScript code (ES5) but both its name and its usage shows that
   * it should not be instantiated and that it only serves as base class for usage and extension.
   */
  export abstract class mxAbstractCanvas2D {
    protected constructor();

    /**
     * Holds the current state.
     */
    state: mxCanvas2DState;

    /**
     * Stack of states.
     */
    states: mxCanvas2DState[];

    /**
     * Holds the current path as an array.
     */
    path: string[];

    /**
     * Switch for rotation of HTML.
     * @default true
     */
    rotateHtml: boolean;

    /**
     * Holds the last x coordinate.
     * @default 0
     */
    lastX: number;

    /**
     * Holds the last y coordinate.
     * @default 0
     */
    lastY: number;

    /**
     * Contains the string used for moving in paths.
     * @default 'M'
     */
    moveOp: string;

    /**
     * Contains the string used for moving in paths.
     * @default 'L'
     */
    lineOp: string;

    /**
     * Contains the string used for quadratic paths.
     * @default 'Q'
     */
    quadOp: string;

    /**
     * Contains the string used for bezier curves.
     * @default 'C'
     */
    curveOp: string;

    /**
     * Holds the operator for closing curves.
     * @default 'Z'
     */
    closeOp: string;

    /**
     * Boolean value that specifies if events should be handled.
     * @default false
     */
    pointerEvents: boolean;

    /**
     * Create a new {@link mxUrlConverter} and returns it.
     */
    createUrlConverter(): mxUrlConverter;

    /**
     * Resets the state of this canvas.
     */
    reset(): void;

    /**
     * Creates the state of the this canvas.
     */
    createState(): mxCanvas2DState;

    /**
     * Rounds all numbers to integers.
     */
    format(value: number | string): number;

    /**
     * Adds the given operation to the path.
     */
    addOp(): void;

    /**
     * Rotates the given point and returns the result as an <mxPoint>.
     */
    rotatePoint(x: number, y: number, theta: number, cx: number, cy: number): void;

    /**
     * Saves the current state.
     */
    save(): void;

    /**
     * Restores the current state.
     */
    restore(): void;

    /**
     * Sets the current link. Hook for subclassers.
     */
    setLink(link: string): void;

    /**
     * Scales the current state.
     */
    scale(value: number): void;

    /**
     * Translates the current state.
     */
    translate(dx: number, dy: number): void;

    /**
     * Rotates the current state.
     */
    rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

    /**
     * Sets the current alpha.
     */
    setAlpha(value: number): void;

    /**
     * Sets the current solid fill alpha.
     */
    setFillAlpha(value: number): void;

    /**
     * Sets the current stroke alpha.
     */
    setStrokeAlpha(value: number): void;

    /**
     * Sets the current fill color.
     */
    setFillColor(value: string): void;

    /**
     * Sets the current gradient.
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
     */
    setStrokeColor(value: string): void;

    /**
     * Sets the current stroke width.
     */
    setStrokeWidth(value: number): void;

    /**
     * Enables or disables dashed lines.
     * @param value specifies whether or not the lines are dashed
     * @param fixDash specifies whether or not the lines use fix dash
     */
    setDashed(value: boolean, fixDash: boolean): void;

    /**
     * Sets the current dash pattern.
     */
    setDashPattern(value: string): void;

    /**
     * Sets the current line cap.
     */
    setLineCap(value: string): void;

    /**
     * Sets the current line join.
     */
    setLineJoin(value: string): void;

    /**
     * Sets the current miter limit.
     */
    setMiterLimit(value: number): void;

    /**
     * Sets the current font color.
     */
    setFontColor(value: string): void;

    /**
     * Sets the current font color.
     */
    setFontBackgroundColor(value: string): void;

    /**
     * Sets the current font color.
     */
    setFontBorderColor(value: string): void;

    /**
     * Sets the current font size.
     */
    setFontSize(value: number): void;

    /**
     * Sets the current font family.
     */
    setFontFamily(value: string): void;

    /**
     * Sets the current font style.
     */
    setFontStyle(value: string): void;

    /**
     * Enables or disables and configures the current shadow.
     */
    setShadow(enabled: boolean): void;

    /**
     * Enables or disables and configures the current shadow.
     */
    setShadowColor(value: string): void;

    /**
     * Enables or disables and configures the current shadow.
     */
    setShadowAlpha(value: number): void;

    /**
     * Enables or disables and configures the current shadow.
     */
    setShadowOffset(dx: number, dy: number): void;

    /**
     * Starts a new path.
     */
    begin(): void;

    /**
     * Moves the current path the given coordinates.
     */
    moveTo(x: number, y: number): void;

    /**
     * Draws a line to the given coordinates. Uses moveTo with the op argument.
     */
    lineTo(x: number, y: number): void;

    /**
     * Adds a quadratic curve to the current path.
     */
    quadTo(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * Adds a bezier curve to the current path.
     */
    curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

    /**
     * Adds the given arc to the current path. This is a synthetic operation that
     * is broken down into curves.
     */
    arcTo(rx: number, ry: number, angle: number, largeArcFlag: number, sweepFlag: number, x: number, y: number): void;

    /**
     * Closes the current path.
     *
     * Note: the mxGraph JS code declares arguments (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number)
     * which are not used in the abstract implementation. The mxXmlCanvas2D JS implementation overrides this method without arguments.
     * Decision is then taken to remove them here.
     */
    close(): void;

    /**
     * Empty implementation for backwards compatibility. This will be removed.
     */
    end(): void;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////// Methods inferred from subclasses
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // They don't exist in the mxGraph JS code, but all subclasses have them
    // As mxAbstractCanvas2D is the preferred type when interacting with canvas2D code (for instance, when
    // developing new classes extending mxShape), these methods are then mandatory.

    /**
     * Paints the outline of the current path.
     */
    stroke(): void;

    /**
     * Fills the current path.
     */
    fill(): void;

    /**
     * Fills and paints the outline of the current path.
     */
    fillAndStroke(): void;

    rect(x: number, y: number, w: number, h: number): void;

    roundrect(x: number, y: number, w: number, h: number, dx: number, dy: number): void;

    ellipse(x: number, y: number, w: number, h: number): void;

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
  }
}
