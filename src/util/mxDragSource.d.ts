declare module 'mxgraph' {
  /**
   * @class mxDragSource
   *
   * Wrapper to create a drag source from a DOM element so that the element can
   * be dragged over a graph and dropped into the graph as a new cell.
   *
   * Problem is that in the dropHandler the current preview location is not
   * available, so the preview and the dropHandler must match.
   *
   */
  class mxDragSource {
    /**
     * Constructs a new drag source for the given element.
     *
     * @param {HTMLElement} element
     * @param {Function} dropHandler
     */
    constructor(element: HTMLElement, dropHandler?: Function);

    /**
     * Reference to the DOM node which was made draggable.
     */
    element: HTMLElement;

    /**
     * Holds the DOM node that is used to represent the drag preview. If this is
     * null then the source element will be cloned and used for the drag preview.
     */
    dropHandler: Function;

    /**
     * {@link mxPoint} that specifies the offset of the {@link dragElement}. Default is null.
     */
    dragOffset: mxPoint;

    /**
     * Holds the DOM node that is used to represent the drag preview. If this is
     * null then the source element will be cloned and used for the drag preview.
     */
    dragElement: HTMLElement;

    /**
     * Optional {@link mxRectangle} that specifies the unscaled size of the preview.
     */
    previewElement: mxRectangle;

    /**
     * Specifies if this drag source is enabled. Default is true.
     */
    enabled: boolean;

    /**
     * Reference to the {@link mxGraph} that is the current drop target.
     */
    currentGraph: mxGraph;

    /**
     * Holds the current drop target under the mouse.
     */
    currentDropTarget: mxCell;

    /**
     * Holds the current drop location.
     */
    currentPoint: mxPoint;

    /**
     * Holds an {@link mxGuide} for the {@link currentGraph} if {@link dragPreview} is not null.
     */
    currentGuide: mxGuide;

    /**
     * Holds an {@link mxGuide} for the {@link currentGraph} if {@link dragPreview} is not null.
     * @note wrong doc
     */
    currentHighlight: mxCellHighlight;

    /**
     * Specifies if the graph should scroll automatically. Default is true.
     */
    autoscroll: boolean;

    /**
     * Specifies if {@link mxGuide} should be enabled. Default is true.
     */
    guidesEnabled: boolean;

    /**
     * Specifies if the grid should be allowed. Default is true.
     */
    gridEnabled: boolean;

    /**
     * Specifies if drop targets should be highlighted. Default is true.
     */
    highlightDropTargets: boolean;

    /**
     * ZIndex for the drag element. Default is 100.
     */
    dragElementZIndex: number;

    /**
     * Opacity of the drag element in %. Default is 70.
     */
    dragElementOpacity: number;

    /**
     * Whether the event source should be checked in {@link graphContainerEvent}. Default
     * is true.
     */
    checkEventSource: boolean;

    /**
     * Returns {@link enabled}.
     */
    isEnabled(): boolean;

    /**
     * Sets {@link enabled}.
     */
    setEnabled(value: boolean): void;

    /**
     * Returns {@link guidesEnabled}.
     */
    isGuidesEnabled(): boolean;

    /**
     * Sets {@link guidesEnabled}.
     */
    setGuidesEnabled(value: boolean): void;

    /**
     * Returns {@link gridEnabled}.
     */
    isGridEnabled(): boolean;

    /**
     * Sets {@link gridEnabled}.
     */
    setGridEnabled(value: boolean): void;

    /**
     * Returns the graph for the given mouse event. This implementation returns
     * null.
     */
    getGraphForEvent(evt: MouseEvent): mxGraph;

    /**
     * Returns the drop target for the given graph and coordinates. This
     * implementation uses {@link mxGraph.getCellAt}.
     */
    getDropTarget(graph: mxGraph, x: number, y: number, evt: PointerEvent): mxCell;

    /**
     * Creates and returns a clone of the {@link dragElementPrototype} or the {@link element}
     * if the former is not defined.
     */
    createDragElement(evt: Event): Node;

    /**
     * Creates and returns an element which can be used as a preview in the given
     * graph.
     */
    createPreviewElement(graph: mxGraph): HTMLElement;

    /**
     * Returns true if this drag source is active.
     */
    isActive(): boolean;

    /**
     * Stops and removes everything and restores the state of the object.
     */
    reset(): void;

    /**
     * Returns the drop target for the given graph and coordinates. This
     * implementation uses {@link mxGraph.getCellAt}.
     *
     * To ignore popup menu events for a drag source, this function can be
     * overridden as follows.
     *
     * @example
     * ```javascript
     * var mouseDown = dragSource.mouseDown;
     *
     * dragSource.mouseDown(evt)
     * {
     *   if (!mxEvent.isPopupTrigger(evt))
     *   {
     *     mouseDown.apply(this, arguments);
     *   }
     * };
     * ```
     */
    mouseDown(evt: mxMouseEvent): void;

    /**
     * Creates the {@link dragElement} using {@link createDragElement}.
     */
    startDrag(evt: mxMouseEvent): void;

    /**
     * Invokes {@link removeDragElement}.
     */
    stopDrag(): void;

    /**
     * Removes and destroys the {@link dragElement}.
     */
    removeDragElement(): void;

    /**
     * Returns the topmost element under the given event.
     */
    getElementForEvent(evt: Event): Element;

    /**
     * Returns true if the given graph contains the given event.
     */
    graphContainsEvent(graph: mxGraph, evt: Event): boolean;

    /**
     * Gets the graph for the given event using {@link getGraphForEvent}, updates the
     * {@link currentGraph}, calling {@link dragEnter} and {@link dragExit} on the new and old graph,
     * respectively, and invokes {@link dragOver} if {@link currentGraph} is not null.
     */
    mouseMove(evt: MouseEvent): void;

    /**
     * Processes the mouse up event and invokes {@link drop}, {@link dragExit} and {@link stopDrag}
     * as required.
     */
    mouseUp(evt: MouseEvent): void;

    /**
     * Actives the given graph as a drop target.
     */
    removeListeners(): void;

    /**
     * Actives the given graph as a drop target.
     */
    dragEnter(graph: mxGraph, evt: Event): void;

    /**
     * Deactivates the given graph as a drop target.
     */
    dragExit(graph: mxGraph, evt: Event): void;

    /**
     * Implements autoscroll, updates the {@link currentPoint}, highlights any drop
     * targets and updates the preview.
     */
    dragOver(graph: mxGraph, evt: Event): void;

    /**
     * Returns the drop target for the given graph and coordinates. This
     * implementation uses {@link mxGraph.getCellAt}.
     */
    drop(graph: mxGraph, evt: Event, dropTarget: mxCell, x: number, y: number): void;
  }
}
