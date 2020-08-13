declare module 'mxgraph' {
  export class mxKeyHandler {
    /**
     * Constructs an event handler that executes functions bound to specific keystrokes.
     * @author 鸿则 <hungtcs@163.com>
     * @date 2020-01-09
     * @param {mxGraph} graph Reference to the associated mxGraph.
     * @param {*} target      Optional reference to the event target.
     *                        If null, the document element is used as the event target, that is,
     *                        the object where the key event listener is installed.
     */
    constructor(graph: mxGraph, target?: EventTarget);

    /**
     * Reference to the mxGraph associated with this handler.
     */
    public graph: mxGraph;

    /**
     * Reference to the target DOM, that is, the DOM node where the key event listeners are installed.
     */
    public target: EventTarget;

    /**
     * Maps from keycodes to functions for non-pressed control keys.
     */
    public normalKeys: [(event: KeyboardEvent) => void];

    /**
     * Maps from keycodes to functions for pressed shift keys.
     */
    public shiftKeys: [(event: KeyboardEvent) => void];

    /**
     * Maps from keycodes to functions for pressed control keys.
     */
    public controlKeys: [(event: KeyboardEvent) => void];

    /**
     * Maps from keycodes to functions for pressed control and shift keys.
     */
    public controlShiftKeys: [(event: KeyboardEvent) => void];

    /**
     * Specifies if events are handled.  Default is true.
     */
    public enabled: boolean;

    /**
     * Returns true if events are handled.  This implementation returns enabled.
     */
    public isEnabled(): boolean;

    /**
     * Enables or disables event handling by updating enabled.
     */
    public setEnabled(enabled: boolean): void;

    /**
     * Binds the specified keycode to the given function.  This binding is used if the control key is not pressed.
     */
    public bindKey(code: number, funct: (event: KeyboardEvent) => void): void;

    /**
     * Binds the specified keycode to the given function.  This binding is used if the shift key is pressed.
     */
    public bindShiftKey(code: number, funct: (event: KeyboardEvent) => void): void;

    /**
     * Binds the specified keycode to the given function.  This binding is used if the control key is pressed.
     */
    public bindControlKey(code: number, funct: (event: KeyboardEvent) => void): void;

    /**
     * Binds the specified keycode to the given function.  This binding is used if the control and shift key are pressed.
     */
    public bindControlShiftKey(code: number, funct: (event: KeyboardEvent) => void): number;

    /**
     * Returns true if the control key is pressed.  This uses mxEvent.isControlDown.
     */
    public isControlDown(evt: KeyboardEvent): boolean;

    /**
     * Returns the function associated with the given key event or null if no function is associated with the given event.
     */
    public getFunction(evt: KeyboardEvent): (event: KeyboardEvent) => void;

    /**
     * Returns true if the event should be processed by this handler, that is, if the event source is either the target, one of its direct children, a descendant of the <mxGraph.container>, or the mxGraph.cellEditor of the graph.
     */
    public isGraphEvent(evt: KeyboardEvent): boolean;

    /**
     * Handles the event by invoking the function bound to the respective keystroke if isEnabledForEvent returns true for the given event and if isEventIgnored returns false, except for escape for which isEventIgnored is not invoked.
     */
    public keyDown(evt: KeyboardEvent): boolean;

    /**
     * Returns true if the given event should be handled.  isEventIgnored is called later if the event is not an escape key stroke, in which case escape is called.  This implementation returns true if isEnabled returns true for both, this handler and graph, if the event is not consumed and if isGraphEvent returns true.
     */
    public isEnabledForEvent(evt: KeyboardEvent): boolean;

    /**
     * Returns true if the given keystroke should be ignored.  This returns graph.isEditing().
     */
    public isEventIgnored(evt: KeyboardEvent): boolean;

    /**
     * Hook to process ESCAPE keystrokes.  This implementation invokes mxGraph.stopEditing to cancel the current editing, connecting and/or other ongoing modifications.
     */
    public escape(evt: KeyboardEvent): void;

    /**
     * Destroys the handler and all its references into the DOM.  This does normally not need to be called, it is called automatically when the window unloads (in IE).
     */
    public destroy(): void;
  }
}
