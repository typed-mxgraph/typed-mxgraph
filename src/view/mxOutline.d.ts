declare module 'mxgraph' {
  /**
   * @class mxOutline
   *
   * Implements an outline (aka overview) for a graph. Set {@link updateOnPan} to true
   * to enable updates while the source graph is panning.
   *
   * ### Example
   *
   * @example
   * ```javascript
   * var outline = new mxOutline(graph, div);
   * ```
   *
   * If an outline is used in an {@link mxWindow} in IE8 standards mode, the following
   * code makes sure that the shadow filter is not inherited and that any
   * transparent elements in the graph do not show the page background, but the
   * background of the graph container.
   *
   * @example
   * ```javascript
   * if (document.documentMode == 8)
   * {
   *   container.style.filter = 'progid:DXImageTransform.Microsoft.alpha(opacity=100)';
   * }
   * ```
   *
   * To move the graph to the top, left corner the following code can be used.
   *
   * @example
   * ```javascript
   * var scale = graph.view.scale;
   * var bounds = graph.getGraphBounds();
   * graph.view.setTranslate(-bounds.x / scale, -bounds.y / scale);
   * ```
   *
   * To toggle the suspended mode, the following can be used.
   *
   * @example
   * ```javascript
   * outline.suspended = !outln.suspended;
   * if (!outline.suspended)
   * {
   *   outline.update(true);
   * }
   * ```
   */
  class mxOutline {
    /**
     * @constructor mxOutline
     *
     * Constructs a new outline for the specified graph inside the given
     * container.
     *
     * @param source {@link mxGraph} to create the outline for.
     * @param container DOM node that will contain the outline.
     */
    constructor(source: mxGraph, container: HTMLElement);

    /**
     * Reference to the source {@link mxGraph}.
     */
    source: mxGraph;

    /**
     * Reference to the {@link mxGraph} that renders the outline.
     */
    outline: mxGraph;

    /**
     * Renderhint to be used for the outline graph.
     * @default faster
     */
    graphRenderHint: string;

    /**
     * Specifies if events are handled.
     * @default true
     */
    enabled: boolean;

    /**
     * Specifies a viewport rectangle should be shown.
     * @default true
     */
    showViewport: boolean;

    /**
     * Border to be added at the bottom and right.
     * @default 10
     */
    border: number;

    /**
     * Specifies the size of the sizer handler.
     * @default 8
     */
    sizerSize: number;

    /**
     * Specifies if labels should be visible in the outline.
     * @default false
     */
    labelsVisible: boolean;

    /**
     * Specifies if {@link update} should be called for {@link mxEvent.PAN} in the source
     * graph.
     * @default false
     */
    updateOnPan: boolean;

    /**
     * Optional {@link mxImage} to be used for the sizer.
     * @default null
     */
    sizerImage: mxImage;

    /**
     * Minimum scale to be used.
     * @default 0.0001
     */
    minScale: number;

    /**
     * Optional boolean flag to suspend updates. This flag will
     * also suspend repaints of the outline. To toggle this switch, use the
     * following code.
     *
     * @default false
     *
     * @example
     * ```javascript
     * nav.suspended = !nav.suspended;
     *
     * if (!nav.suspended)
     * {
     *   nav.update(true);
     * }
     * ```
     */
    suspended: boolean;

    /**
     * Specifies if VML should be used to render the handles in this control. This
     * is true for IE8 standards mode and false for all other browsers and modes.
     * This is a workaround for rendering issues of HTML elements over elements
     * with filters in IE 8 standards mode.
     */
    forceVmlHandles: number;

    /**
     * Creates the {@link mxGraph} used in the outline.
     */
    createGraph(container: HTMLElement): mxGraph;

    /**
     * Initializes the outline inside the given container.
     */
    init(container: HTMLElement): void;

    /**
     * Returns true if events are handled. This implementation
     * returns {@link enabled}.
     */
    isEnabled(): boolean;

    /**
     * Enables or disables event handling. This implementation
     * updates {@link enabled}.
     *
     * @param value Boolean that specifies the new enabled state.
     */
    setEnabled(value: boolean): void;

    /**
     * Enables or disables the zoom handling by showing or hiding the respective
     * handle.
     *
     * @param value Boolean that specifies the new enabled state.
     */
    setZoomEnabled(value: boolean): void;

    /**
     * Invokes {@link update} and revalidate the outline. This method is deprecated.
     */
    refresh(): void;

    /**
     * Creates the shape used as the sizer.
     */
    createSizer(): mxShape;

    /**
     * Returns the size of the source container.
     */
    getSourceContainerSize(): mxRectangle;

    /**
     * Returns the offset for drawing the outline graph.
     */
    getOutlineOffset(scale?: number): mxPoint;

    /**
     * Returns the offset for drawing the outline graph.
     */
    getSourceGraphBounds(): mxRectangle;

    /**
     * Updates the outline.
     */
    update(revalidate: boolean): void;

    /**
     * Handles the event by starting a translation or zoom.
     */
    mouseDown(sender: mxEventSource, me: mxMouseEvent): void;

    /**
     * Handles the event by previewing the viewrect in {@link graph} and updating the
     * rectangle that represents the viewrect in the outline.
     */
    mouseMove(sender: mxEventSource, me: mxMouseEvent): void;

    /**
     * Gets the translate for the given mouse event. Here is an example to limit
     * the outline to stay within positive coordinates:
     *
     * @example
     * ```javascript
     * outline.getTranslateForEvent(me)
     * {
     *   var pt = new mxPoint(me.getX() - this.startX, me.getY() - this.startY);
     *
     *   if (!this.zoom)
     *   {
     *     var tr = this.source.view.translate;
     *     pt.x = Math.max(tr.x * this.outline.view.scale, pt.x);
     *     pt.y = Math.max(tr.y * this.outline.view.scale, pt.y);
     *   }
     *
     *   return pt;
     * };
     * ```
     */
    getTranslateForEvent(me: mxMouseEvent): mxPoint;

    /**
     * Handles the event by applying the translation or zoom to {@link graph}.
     */
    mouseUp(sender: mxEventSource, me: mxMouseEvent): void;

    /**
     * Destroy this outline and removes all listeners from {@link source}.
     */
    destroy(): void;
  }
}
