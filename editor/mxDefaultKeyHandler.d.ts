declare module 'mxgraph' {
  /**
   * Binds keycodes to actionnames in an editor.  This aggregates an internal {@link handler} and extends the implementation of {@link mxKeyHandler.escape} to not only cancel the editing, but also hide the properties dialog and fire an <mxEditor.escape> event via {@link editor}.  An instance of this class is created by {@link mxEditor} and stored in {@link mxEditor.keyHandler}.
   *
   * @Example
   * Bind the delete key to the delete action in an existing editor.
   * ```javascript
   * var keyHandler = new mxDefaultKeyHandler(editor);
   * keyHandler.bindAction(46, 'delete');
   * ```
   *
   * @Codec
   * This class uses the {@link mxDefaultKeyHandlerCodec} to read configuration data into an existing instance.  See {@link mxDefaultKeyHandlerCodec} for a description of the configuration format.
   *
   * @Keycodes
   * See {@link mxKeyHandler}.
   * An {@link mxEvent.ESCAPE} event is fired via the editor if the escape key is pressed.
   */
  class mxDefaultKeyHandler {
    /**
     * Constructs a new default key handler for the {@link mxEditor.graph} in the given {@link mxEditor}.  (The editor may be null if a prototypical instance for a {@link mxDefaultKeyHandlerCodec} is created.)
     *
     * @param editor
     */
    constructor(editor: mxEditor);

    /**
     * Reference to the enclosing {@link mxEditor}.
     */
    editor: mxEditor;

    /**
     * Holds the {@link mxKeyHandler} for key event handling.
     */
    handler: mxKeyHandler;

    /**
     * Binds the specified keycode to the given action in {@link editor}.  The optional control flag specifies if the control key must be pressed to trigger the action.
     *
     * @param code      Integer that specifies the keycode.
     * @param action    Name of the action to execute in {@link editor}.
     * @param control   Optional boolean that specifies if control must be pressed.  Default is false.
     */
    bindAction(code: number, action: string, control?: boolean): void;

    /**
     * Destroys the {@link handler} associated with this object.  This does normally not need to be called, the {@link handler} is destroyed automatically when the window unloads (in IE) by {@link mxEditor}.
     */
    destroy(): void;

    [key: string]: any;
  }
}
