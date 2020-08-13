declare module 'mxgraph' {
  /**
   * Event handler that highlights cells
   *
   * @example
   * ```javascript
   * new mxCellTracker(graph, '#00FF00');
   * ```
   *
   * For detecting dragEnter, dragOver and dragLeave on cells, the following code can be used:
   * @example
   * ```javascript
   * graph.addMouseListener(
   * {
   *   cell: null,
   *   mouseDown: function(sender, me) { },
   *   mouseMove: function(sender, me)
   *   {
   *     var tmp = me.getCell();
   *
   *     if (tmp != this.cell)
   *     {
   *       if (this.cell != null)
   *       {
   *         this.dragLeave(me.getEvent(), this.cell);
   *       }
   *
   *       this.cell = tmp;
   *
   *       if (this.cell != null)
   *       {
   *         this.dragEnter(me.getEvent(), this.cell);
   *       }
   *     }
   *
   *     if (this.cell != null)
   *     {
   *       this.dragOver(me.getEvent(), this.cell);
   *     }
   *   },
   *   mouseUp: function(sender, me) { },
   *   dragEnter: function(evt, cell)
   *   {
   *     mxLog.debug('dragEnter', cell.value);
   *   },
   *   dragOver: function(evt, cell)
   *   {
   *     mxLog.debug('dragOver', cell.value);
   *   },
   *   dragLeave: function(evt, cell)
   *   {
   *     mxLog.debug('dragLeave', cell.value);
   *   }
   * });
   * ```
   */
  export class mxCellTracker extends mxCellMarker {
    /**
     * Constructs an event handler that highlights cells.
     *
     * @param graph   Reference to the enclosing {@link mxGraph}.
     * @param color   Color of the highlight. Default is blue.
     * @param funct   Optional JavaScript function that is used to override {@link mxCellMarker.getCell}.
     */
    constructor(graph: mxGraph, color: string, funct?: Function);

    /**
     * Ignores the event. The event is not consumed.
     */
    // TODO types
    mouseDown(sender: any, me: mxMouseEvent): void;

    /**
     * Handles the event by highlighting the cell under the mousepointer if it
     * is over the hotspot region of the cell.
     */
    // TODO types
    mouseMove(sender: any, me: mxMouseEvent): void;

    /**
     * Handles the event by resetting the highlight.
     */
    // TODO types
    mouseUp(sender: any, me: mxMouseEvent): void;

    /**
     * Function: destroy
     *
     * Destroys the object and all its resources and DOM nodes. This doesn't
     * normally need to be called. It is called automatically when the window
     * unloads.
     */
    destroy(): void;
  }
}
