declare module 'mxgraph' {
  /**
   * @class mxGraphSelectionModel
   *
   * Implements the selection model for a graph. Here is a listener that handles
   * all removed selection cells.
   *
   * @example
   * ```javascript
   * graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt)
   * {
   *   var cells = evt.getProperty('added');
   *
   *   for (var i = 0; i < cells.length; i++)
   *   {
   *     // Handle cells[i]...
   *   }
   * });
   * ```
   *
   * ### Event: mxEvent.UNDO
   *
   * Fires after the selection was changed in {@link changeSelection}. The
   * `edit` property contains the {@link mxUndoableEdit} which contains the
   * {@link mxSelectionChange}.
   *
   * ### Event: mxEvent.CHANGE
   *
   * Fires after the selection changes by executing an {@link mxSelectionChange}. The
   * `added` and `removed` properties contain arrays of
   * cells that have been added to or removed from the selection, respectively.
   * The names are inverted due to historic reasons. This cannot be changed.
   */
  class mxGraphSelectionModel extends mxEventSource {
    /**
     * @constructor
     * Constructs a new graph selection model for the given {@link mxGraph}.
     *
     * @param graph Reference to the enclosing {@link mxGraph}.
     */
    constructor(graph: mxGraph);

    /**
     * Specifies the resource key for the status message after a long operation.
     * If the resource for this key does not exist then the value is used as
     * the status message. Default is 'done'.
     */
    doneResource: 'done' | '';

    /**
     * Specifies the resource key for the status message while the selection is
     * being updated. If the resource for this key does not exist then the
     * value is used as the status message. Default is 'updatingSelection'.
     */
    updatingSelectionResource: 'updatingSelection' | '';

    /**
     * Reference to the enclosing {@link mxGraph}.
     */
    graph: mxGraph;

    /**
     * Specifies if only one selected item at a time is allowed.
     * Default is false.
     */
    singleSelection: boolean;

    /**
     * Returns {@link singleSelection} as a boolean.
     */
    isSingleSelection(): boolean;

    /**
     * Sets the {@link singleSelection} flag.
     *
     * @param {boolean} singleSelection Boolean that specifies the new value for
     * {@link singleSelection}.
     */
    setSingleSelection(singleSelection: boolean): void;

    /**
     * Returns true if the given {@link mxCell} is selected.
     */
    isSelected(cell: mxCell): boolean;

    /**
     * Returns true if no cells are currently selected.
     */
    isEmpty(): boolean;

    /**
     * Clears the selection and fires a {@link change} event if the selection was not
     * empty.
     */
    clear(): void;

    /**
     * Selects the specified {@link mxCell} using {@link setCells}.
     *
     * @param cell {@link mxCell} to be selected.
     */
    setCell(cell: mxCell): void;

    /**
     * Selects the given array of {@link mxCell} and fires a {@link change} event.
     *
     * @param cells Array of {@link mxCell} to be selected.
     */
    setCells(cells: Array<mxCell>): void;

    /**
     * Returns the first selectable cell in the given array of cells.
     */
    getFirstSelectableCell(cells: Array<mxCell>): mxCell;

    /**
     * Adds the given {@link mxCell} to the selection and fires a {@link select} event.
     *
     * @param cell {@link mxCell} to add to the selection.
     */
    addCell(cell: mxCell): void;

    /**
     * Adds the given array of {@link mxCell} to the selection and fires a {@link select}
     * event.
     *
     * @param cells Array of {@link mxCell} to add to the selection.
     */
    addCells(cells: Array<mxCell>): void;

    /**
     * Removes the specified {@link mxCell} from the selection and fires a {@link select}
     * event for the remaining cells.
     *
     * @param cell {@link mxCell} to remove from the selection.
     */
    removeCell(cell: mxCell): void;

    /**/
    removeCells(cells: Array<mxCell>): void;

    /**
     * Adds/removes the specified arrays of {@link mxCell} to/from the selection.
     *
     * @param added Array of {@link mxCell} to add to the selection.
     * @param remove Array of {@link mxCell} to remove from the selection.
     */
    changeSelection(added: Array<mxCell>, removed: Array<mxCell>): void;

    /**
     * Inner callback to add the specified {@link mxCell} to the selection. No event
     * is fired in this implementation.
     *
     * Paramters:
     *
     * @param cell {@link mxCell} to add to the selection.
     */
    cellAdded(cell: mxCell): void;

    /**
     * Inner callback to remove the specified {@link mxCell} from the selection. No
     * event is fired in this implementation.
     *
     * @param cell {@link mxCell} to remove from the selection.
     */
    cellRemoved(cell: mxCell): void;
  }

  /**
   * @class mxSelectionChange
   * Action to change the current root in a view.
   */
  class mxSelectionChange {
    /**
     * Creates an instance of mxSelectionChange.
     *
     * @param {mxGraphSelectionModel} selectionModel
     * @param {Array<mxCell>} added
     * @param {Array<mxCell>} removed
     */
    constructor(selectionModel: mxGraphSelectionModel, added: Array<mxCell>, removed: Array<mxCell>);

    /**
     * Changes the current root of the view.
     */
    execute(): void;
  }
}
