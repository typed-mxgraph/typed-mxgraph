declare module 'mxgraph' {
  /**
   * @class mxEvent
   *
   * Cross-browser DOM event support. For internal event handling,
   * {@link mxEventSource} and the graph event dispatch loop in {@link mxGraph} are used.
   *
   * ### Memory Leaks:
   *
   * Use this class for adding and removing listeners to/from DOM nodes. The
   * {@link removeAllListeners} function is provided to remove all listeners that
   * have been added using {@link addListener}. The function should be invoked when
   * the last reference is removed in the JavaScript code, typically when the
   * referenced DOM node is removed from the DOM.
   */
  class mxEvent {
    /**
     * Binds the function to the specified event on the given element. Use
     * {@link mxUtils.bind} in order to bind the "this" keyword inside the function
     * to a given execution scope.
     */
    static addListener(element: Node | Window, eventName: string, funct: Function): void;

    /**
     * Removes the specified listener from the given element.
     */
    static removeListener(element: Node | Window, eventName: string, funct: Function): void;

    /**
     * Removes all listeners from the given element.
     */
    static removeAllListeners(element: Node | Window): void;

    /**
     * Adds the given listeners for touch, mouse and/or pointer events. If
     * {@link mxClient.IS_POINTER} is true then pointer events will be registered,
     * else the respective mouse events will be registered. If {@link mxClient.IS_POINTER}
     * is false and {@link mxClient.IS_TOUCH} is true then the respective touch events
     * will be registered as well as the mouse events.
     */
    static addGestureListeners(
      node: Node | Window,
      startListener: Function,
      moveListener?: Function,
      endListener?: Function
    ): void;

    /**
     * Removes the given listeners from mousedown, mousemove, mouseup and the
     * respective touch events if {@link mxClient.IS_TOUCH} is true.
     */
    static removeGestureListeners(
      node: Node | Window,
      startListener: Function,
      moveListener?: Function,
      endListener?: Function
    ): void;

    /**
     * Redirects the mouse events from the given DOM node to the graph dispatch
     * loop using the event and given state as event arguments. State can
     * either be an instance of {@link mxCellState} or a function that returns an
     * {@link mxCellState}. The down, move, up and dblClick arguments are optional
     * functions that take the trigger event as arguments and replace the
     * default behaviour.
     */
    static redirectMouseEvents(
      node: Node | Window,
      graph: mxGraph,
      state: ((event: Event) => mxCellState) | mxCellState,
      down?: Function,
      move?: Function,
      up?: Function,
      dblClick?: Function
    ): void;

    /**
     * Removes the known listeners from the given DOM node and its descendants.
     *
     * @param element DOM node to remove the listeners from.
     */
    static release(element: Node | Window): void;

    /**
     * Installs the given function as a handler for mouse wheel events. The
     * function has two arguments: the mouse event and a boolean that specifies
     * if the wheel was moved up or down.
     *
     * This has been tested with IE 6 and 7, Firefox (all versions), Opera and
     * Safari. It does currently not work on Safari for Mac.
     *
     * ### Example
     *
     * @example
     * ```javascript
     * mxEvent.addMouseWheelListener(function (evt, up)
     * {
     *   mxLog.show();
     *   mxLog.debug('mouseWheel: up='+up);
     * });
     * ```
     *
     * @param funct Handler function that takes the event argument and a boolean up
     * argument for the mousewheel direction.
     * @param target Target for installing the listener in Google Chrome. See
     * https://www.chromestatus.com/features/6662647093133312.
     */
    static addMouseWheelListener(funct: (event: Event, up: boolean) => void, target?: Node | Window): void;

    /**
     * Disables the context menu for the given element.
     */
    static disableContextMenu(element: Node): void;

    /**
     * Returns the event's target or srcElement depending on the browser.
     */
    static getSource<T extends EventTarget = any>(evt: Event): T;

    /**
     * Returns true if the event has been consumed using {@link consume}.
     */
    static isConsumed(evt: mxEventObject | mxMouseEvent | Event): boolean;

    /**
     * Returns true if the event was generated using a touch device (not a pen or mouse).
     */
    static isTouchEvent(evt: Event): boolean;

    /**
     * Returns true if the event was generated using a pen (not a touch device or mouse).
     */
    static isPenEvent(evt: Event): boolean;

    /**
     * Returns true if the event was generated using a touch device (not a pen or mouse).
     */
    static isMultiTouchEvent(evt: Event): boolean;

    /**
     * Returns true if the event was generated using a mouse (not a pen or touch device).
     */
    static isMouseEvent(evt: Event): boolean;

    /**
     * Returns true if the left mouse button is pressed for the given event.
     * To check if a button is pressed during a mouseMove you should use the
     * {@link mxGraph.isMouseDown} property. Note that this returns true in Firefox
     * for control+left-click on the Mac.
     */
    static isLeftMouseButton(evt: MouseEvent): boolean;

    /**
     * Returns true if the middle mouse button is pressed for the given event.
     * To check if a button is pressed during a mouseMove you should use the
     * {@link mxGraph.isMouseDown} property.
     */
    static isMiddleMouseButton(evt: MouseEvent): boolean;

    /**
     * Returns true if the right mouse button was pressed. Note that this
     * button might not be available on some systems. For handling a popup
     * trigger {@link isPopupTrigger} should be used.
     */
    static isRightMouseButton(evt: MouseEvent): boolean;

    /**
     * Returns true if the event is a popup trigger. This implementation
     * returns true if the right button or the left button and control was
     * pressed on a Mac.
     */
    static isPopupTrigger(evt: Event): boolean;

    /**
     * Returns true if the shift key is pressed for the given event.
     */
    static isShiftDown(evt: MouseEvent): boolean;

    /**
     * Returns true if the alt key is pressed for the given event.
     */
    static isAltDown(evt: MouseEvent): boolean;

    /**
     * Returns true if the control key is pressed for the given event.
     */
    static isControlDown(evt: MouseEvent): boolean;

    /**
     * Returns true if the meta key is pressed for the given event.
     */
    static isMetaDown(evt: MouseEvent): boolean;

    /**
     * Returns the touch or mouse event that contains the mouse coordinates.
     */
    static getMainEvent(e: TouchEvent): Touch;
    static getMainEvent(e: MouseEvent): MouseEvent;

    /**
     * Returns true if the meta key is pressed for the given event.
     */
    static getClientX(e: TouchEvent | MouseEvent): number;

    /**
     * Returns true if the meta key is pressed for the given event.
     */
    static getClientY(e: TouchEvent | MouseEvent): number;

    /**
     * Consumes the given event.
     *
     * @param evt Native event to be consumed.
     * @param preventDefault Optional boolean to prevent the default for the event.
     * Default is true.
     * @param stopPropagation Option boolean to stop event propagation. Default is
     * true.
     */
    static consume(evt: Event, preventDefault?: boolean, stopPropagation?: boolean): void;

    /**
     * Index for the label handle in an mxMouseEvent. This should be a negative
     * value that does not interfere with any possible handle indices.
     * @default -1
     */
    static LABEL_HANDLE: -1;

    /**
     * Index for the rotation handle in an mxMouseEvent. This should be a
     * negative value that does not interfere with any possible handle indices.
     * @default -2
     */
    static ROTATION_HANDLE: -2;

    /**
     * Start index for the custom handles in an mxMouseEvent. This should be a
     * negative value and is the start index which is decremented for each
     * custom handle.
     * @default -100
     */
    static CUSTOM_HANDLE: -100;

    /**
     * Start index for the virtual handles in an mxMouseEvent. This should be a
     * negative value and is the start index which is decremented for each
     * virtual handle.
     * This assumes that there are no more
     * than VIRTUAL_HANDLE - CUSTOM_HANDLE custom handles.
     *
     * @default -100000
     */
    static VIRTUAL_HANDLE: -100000;

    //
    // Event names
    //

    /**
     * Specifies the event name for mouseDown.
     */
    static MOUSE_DOWN: 'mouseDown';

    /**
     * Specifies the event name for mouseMove.
     */
    static MOUSE_MOVE: 'mouseMove';

    /**
     * Specifies the event name for mouseUp.
     */
    static MOUSE_UP: 'mouseUp';

    /**
     * Specifies the event name for activate.
     */
    static ACTIVATE: 'activate';

    /**
     * Specifies the event name for resizeStart.
     */
    static RESIZE_START: 'resizeStart';

    /**
     * Specifies the event name for resize.
     */
    static RESIZE: 'resize';

    /**
     * Specifies the event name for resizeEnd.
     */
    static RESIZE_END: 'resizeEnd';

    /**
     * Specifies the event name for moveStart.
     */
    static MOVE_START: 'moveStart';

    /**
     * Specifies the event name for move.
     */
    static MOVE: 'move';

    /**
     * Specifies the event name for moveEnd.
     */
    static MOVE_END: 'moveEnd';

    /**
     * Specifies the event name for panStart.
     */
    static PAN_START: 'panStart';

    /**
     * Specifies the event name for pan.
     */
    static PAN: 'pan';

    /**
     * Specifies the event name for panEnd.
     */
    static PAN_END: 'panEnd';

    /**
     * Specifies the event name for minimize.
     */
    static MINIMIZE: 'minimize';

    /**
     * Specifies the event name for normalize.
     */
    static NORMALIZE: 'normalize';

    /**
     * Specifies the event name for maximize.
     */
    static MAXIMIZE: 'maximize';

    /**
     * Specifies the event name for hide.
     */
    static HIDE: 'hide';

    /**
     * Specifies the event name for show.
     */
    static SHOW: 'show';

    /**
     * Specifies the event name for close.
     */
    static CLOSE: 'close';

    /**
     * Specifies the event name for destroy.
     */
    static DESTROY: 'destroy';

    /**
     * Specifies the event name for refresh.
     */
    static REFRESH: 'refresh';

    /**
     * Specifies the event name for size.
     */
    static SIZE: 'size';

    /**
     * Specifies the event name for select.
     */
    static SELECT: 'select';

    /**
     * Specifies the event name for fired.
     */
    static FIRED: 'fired';

    /**
     * Specifies the event name for fireMouseEvent.
     */
    static FIRE_MOUSE_EVENT: 'fireMouseEvent';

    /**
     * Specifies the event name for gesture.
     */
    static GESTURE: 'gesture';

    /**
     * Specifies the event name for tapAndHold.
     */
    static TAP_AND_HOLD: 'tapAndHold';

    /**
     * Specifies the event name for get.
     */
    static GET: 'get';

    /**
     * Specifies the event name for receive.
     */
    static RECEIVE: 'receive';

    /**
     * Specifies the event name for connect.
     */
    static CONNECT: 'connect';

    /**
     * Specifies the event name for disconnect.
     */
    static DISCONNECT: 'disconnect';

    /**
     * Specifies the event name for suspend.
     */
    static SUSPEND: 'suspend';

    /**
     * Specifies the event name for suspend.
     */
    static RESUME: 'resume';

    /**
     * Specifies the event name for mark.
     */
    static MARK: 'mark';

    /**
     * Specifies the event name for root.
     */
    static ROOT: 'root';

    /**
     * Specifies the event name for post.
     */
    static POST: 'post';

    /**
     * Specifies the event name for open.
     */
    static OPEN: 'open';

    /**
     * Specifies the event name for open.
     */
    static SAVE: 'save';

    /**
     * Specifies the event name for beforeAddVertex.
     */
    static BEFORE_ADD_VERTEX: 'beforeAddVertex';

    /**
     * Specifies the event name for addVertex.
     */
    static ADD_VERTEX: 'addVertex';

    /**
     * Specifies the event name for afterAddVertex.
     */
    static AFTER_ADD_VERTEX: 'afterAddVertex';

    /**
     * Specifies the event name for done.
     */
    static DONE: 'done';

    /**
     * Specifies the event name for execute.
     */
    static EXECUTE: 'execute';

    /**
     * Specifies the event name for executed.
     */
    static EXECUTED: 'executed';

    /**
     * Specifies the event name for beginUpdate.
     */
    static BEGIN_UPDATE: 'beginUpdate';

    /**
     * Specifies the event name for startEdit.
     */
    static START_EDIT: 'startEdit';

    /**
     * Specifies the event name for endUpdate.
     */
    static END_UPDATE: 'endUpdate';

    /**
     * Specifies the event name for endEdit.
     */
    static END_EDIT: 'endEdit';

    /**
     * Specifies the event name for beforeUndo.
     */
    static BEFORE_UNDO: 'beforeUndo';

    /**
     * Specifies the event name for undo.
     */
    static UNDO: 'undo';

    /**
     * Specifies the event name for redo.
     */
    static REDO: 'redo';

    /**
     * Specifies the event name for change.
     */
    static CHANGE: 'change';

    /**
     * Specifies the event name for notify.
     */
    static NOTIFY: 'notify';

    /**
     * Specifies the event name for layoutCells.
     */
    static LAYOUT_CELLS: 'layoutCells';

    /**
     * Specifies the event name for click.
     */
    static CLICK: 'click';

    /**
     * Specifies the event name for scale.
     */
    static SCALE: 'scale';

    /**
     * Specifies the event name for translate.
     */
    static TRANSLATE: 'translate';

    /**
     * Specifies the event name for scaleAndTranslate.
     */
    static SCALE_AND_TRANSLATE: 'scaleAndTranslate';

    /**
     * Specifies the event name for up.
     */
    static UP: 'up';

    /**
     * Specifies the event name for down.
     */
    static DOWN: 'down';

    /**
     * Specifies the event name for add.
     */
    static ADD: 'add';

    /**
     * Specifies the event name for remove.
     */
    static REMOVE: 'remove';

    /**
     * Specifies the event name for clear.
     */
    static CLEAR: 'clear';

    /**
     * Specifies the event name for addCells.
     */
    static ADD_CELLS: 'addCells';

    /**
     * Specifies the event name for cellsAdded.
     */
    static CELLS_ADDED: 'cellsAdded';

    /**
     * Specifies the event name for moveCells.
     */
    static MOVE_CELLS: 'moveCells';

    /**
     * Specifies the event name for cellsMoved.
     */
    static CELLS_MOVED: 'cellsMoved';

    /**
     * Specifies the event name for resizeCells.
     */
    static RESIZE_CELLS: 'resizeCells';

    /**
     * Specifies the event name for cellsResized.
     */
    static CELLS_RESIZED: 'cellsResized';

    /**
     * Specifies the event name for toggleCells.
     */
    static TOGGLE_CELLS: 'toggleCells';

    /**
     * Specifies the event name for cellsToggled.
     */
    static CELLS_TOGGLED: 'cellsToggled';

    /**
     * Specifies the event name for orderCells.
     */
    static ORDER_CELLS: 'orderCells';

    /**
     * Specifies the event name for cellsOrdered.
     */
    static CELLS_ORDERED: 'cellsOrdered';

    /**
     * Specifies the event name for removeCells.
     */
    static REMOVE_CELLS: 'removeCells';

    /**
     * Specifies the event name for cellsRemoved.
     */
    static CELLS_REMOVED: 'cellsRemoved';

    /**
     * Specifies the event name for groupCells.
     */
    static GROUP_CELLS: 'groupCells';

    /**
     * Specifies the event name for ungroupCells.
     */
    static UNGROUP_CELLS: 'ungroupCells';

    /**
     * Specifies the event name for removeCellsFromParent.
     */
    static REMOVE_CELLS_FROM_PARENT: 'removeCellsFromParent';

    /**
     * Specifies the event name for foldCells.
     */
    static FOLD_CELLS: 'foldCells';

    /**
     * Specifies the event name for cellsFolded.
     */
    static CELLS_FOLDED: 'cellsFolded';

    /**
     * Specifies the event name for alignCells.
     */
    static ALIGN_CELLS: 'alignCells';

    /**
     * Specifies the event name for labelChanged.
     */
    static LABEL_CHANGED: 'labelChanged';

    /**
     * Specifies the event name for connectCell.
     */
    static CONNECT_CELL: 'connectCell';

    /**
     * Specifies the event name for cellConnected.
     */
    static CELL_CONNECTED: 'cellConnected';

    /**
     * Specifies the event name for splitEdge.
     */
    static SPLIT_EDGE: 'splitEdge';

    /**
     * Specifies the event name for flipEdge.
     */
    static FLIP_EDGE: 'flipEdge';

    /**
     * Specifies the event name for startEditing.
     */
    static START_EDITING: 'startEditing';

    /**
     * Specifies the event name for editingStarted.
     */
    static EDITING_STARTED: 'editingStarted';

    /**
     * Specifies the event name for editingStopped.
     */
    static EDITING_STOPPED: 'editingStopped';

    /**
     * Specifies the event name for addOverlay.
     */
    static ADD_OVERLAY: 'addOverlay';

    /**
     * Specifies the event name for removeOverlay.
     */
    static REMOVE_OVERLAY: 'removeOverlay';

    /**
     * Specifies the event name for updateCellSize.
     */
    static UPDATE_CELL_SIZE: 'updateCellSize';

    /**
     * Specifies the event name for escape.
     */
    static ESCAPE: 'escape';

    /**
     * Specifies the event name for doubleClick.
     */
    static DOUBLE_CLICK: 'doubleClick';

    /**
     * Specifies the event name for start.
     */
    static START: 'start';

    /**
     * Specifies the event name for reset.
     */
    static RESET: 'reset';
  }
}
