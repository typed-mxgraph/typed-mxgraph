declare module 'mxgraph' {
  class mxUndoableEdit {
    constructor(source: any, significant: boolean);

    /**
     * Variable: source
     *
     * Specifies the source of the edit.
     */
    source: any;

    /**
     * Variable: changes
     *
     * Array that contains the changes that make up this edit. The changes are
     * expected to either have an undo and redo function, or an execute
     * function. Default is an empty array.
     */
    changes: Array<
      | mxGeometryChange
      | mxChildChange
      | mxStyleChange
      | mxVisibleChange
      | mxCollapseChange
      | mxValueChange
      | mxTerminalChange
      | mxCurrentRootChange
      | any
    >;

    /**
     * Variable: significant
     *
     * Specifies if the undoable change is significant.
     * Default is true.
     */
    significant: boolean;

    /**
     * Variable: undone
     *
     * Specifies if this edit has been undone. Default is false.
     */
    undone: boolean;

    /**
     * Variable: redone
     *
     * Specifies if this edit has been redone. Default is false.
     */
    redone: boolean;

    /**
     * Function: isEmpty
     *
     * Returns true if the this edit contains no changes.
     */
    isEmpty(): boolean;

    /**
     * Function: isSignificant
     *
     * Returns <significant>.
     */
    isSignificant(): boolean;

    /**
     * Function: add
     *
     * Adds the specified change to this edit. The change is an object that is
     * expected to either have an undo and redo, or an execute function.
     */
    add(change: mxUndoableChange): void;

    /**
     * Function: notify
     *
     * Hook to notify any listeners of the changes after an <undo> or <redo>
     * has been carried out. This implementation is empty.
     */
    notify(): void;

    /**
     * Function: die
     *
     * Hook to free resources after the edit has been removed from the command
     * history. This implementation is empty.
     */
    die(): void;

    /**
     * Function: undo
     *
     * Undoes all changes in this edit.
     */
    undo(): void;

    /**
     * Function: redo
     *
     * Redoes all changes in this edit.
     */
    redo(): void;
  }

  interface mxUndoableChange {
    execute(): void;
  }
}
