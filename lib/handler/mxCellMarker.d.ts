declare module 'mxgraph' {
  export class mxCellMarker extends mxEventSource {
    constructor(graph: mxGraph, validColor: string, invalidColor: string, hotspot: number);

    /**
     * Variable: graph
     *
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: enabled
     *
     * Specifies if the marker is enabled. Default is true.
     */
    enabled: boolean;

    /**
     * Variable: hotspot
     *
     * Specifies the portion of the width and height that should trigger
     * a highlight. The area around the center of the cell to be marked is used
     * as the hotspot. Possible values are between 0 and 1. Default is
     * mxConstants.DEFAULT_HOTSPOT.
     */
    hotspot: number;

    /**
     * Variable: hotspotEnabled
     *
     * Specifies if the hotspot is enabled. Default is false.
     */
    hotspotEnabled: boolean;

    /**
     * Variable: validColor
     *
     * Holds the valid marker color.
     */
    validColor: string;

    /**
     * Variable: invalidColor
     *
     * Holds the invalid marker color.
     */
    invalidColor: string;

    /**
     * Variable: currentColor
     *
     * Holds the current marker color.
     */
    currentColor: string;

    /**
     * Variable: validState
     *
     * Holds the marked <mxCellState> if it is valid.
     */
    validState: mxCellState;

    /**
     * Variable: markedState
     *
     * Holds the marked <mxCellState>.
     */
    markedState: mxCellState;

    /**
     * Function: setEnabled
     *
     * Enables or disables event handling. This implementation
     * updates <enabled>.
     *
     * Parameters:
     *
     * enabled - Boolean that specifies the new enabled state.
     */
    setEnabled(enabled: boolean): void;

    /**
     * Function: isEnabled
     *
     * Returns true if events are handled. This implementation
     * returns <enabled>.
     */
    isEnabled(): boolean;

    /**
     * Function: setHotspot
     *
     * Sets the <hotspot>.
     */
    setHotspot(hotspot: number): void;

    /**
     * Function: getHotspot
     *
     * Returns the <hotspot>.
     */
    getHotspot(): number;

    /**
     * Function: setHotspotEnabled
     *
     * Specifies whether the hotspot should be used in <intersects>.
     */
    setHotspotEnabled(enabled: boolean): void;

    /**
     * Function: isHotspotEnabled
     *
     * Returns true if hotspot is used in <intersects>.
     */
    isHotspotEnabled(): boolean;

    /**
     * Function: hasValidState
     *
     * Returns true if <validState> is not null.
     */
    hasValidState(): boolean;

    /**
     * Function: getValidState
     *
     * Returns the <validState>.
     */
    getValidState(): mxCellState;

    /**
     * Function: getMarkedState
     *
     * Returns the <markedState>.
     */
    getMarkedState(): mxCellState;

    /**
     * Function: reset
     *
     * Resets the state of the cell marker.
     */
    reset(): void;

    /**
     * Function: process
     *
     * Processes the given event and cell and marks the state returned by
     * <getState> with the color returned by <getMarkerColor>. If the
     * markerColor is not null, then the state is stored in <markedState>. If
     * <isValidState> returns true, then the state is stored in <validState>
     * regardless of the marker color. The state is returned regardless of the
     * marker color and valid state.
     */
    process(me: mxMouseEvent): mxCellState;

    /**
     * Function: setCurrentState
     *
     * Sets and marks the current valid state.
     */
    setCurrentState(state: mxCellState, me: mxMouseEvent, color: string): void;

    /**
     * Function: markCell
     *
     * Marks the given cell using the given color, or <validColor> if no color is specified.
     */
    markCell(cell: mxCell, color: string): void;

    /**
     * Function: mark
     *
     * Marks the <markedState> and fires a <mark> event.
     */
    mark(): void;

    /**
     * Function: unmark
     *
     * Hides the marker and fires a <mark> event.
     */
    unmark(): void;

    /**
     * Function: isValidState
     *
     * Returns true if the given <mxCellState> is a valid state. If this
     * returns true, then the state is stored in <validState>. The return value
     * of this method is used as the argument for <getMarkerColor>.
     */
    isValidState(state: mxCellState): boolean;

    /**
     * Function: getMarkerColor
     *
     * Returns the valid- or invalidColor depending on the value of isValid.
     * The given <mxCellState> is ignored by this implementation.
     */
    getMarkerColor(evt: Event, state: mxCellState, isValid: boolean): string;

    /**
     * Function: getState
     *
     * Uses <getCell>, <getStateToMark> and <intersects> to return the
     * <mxCellState> for the given <mxMouseEvent>.
     */
    getState(me: mxMouseEvent): mxCellState;

    /**
     * Function: getCell
     *
     * Returns the <mxCell> for the given event and cell. This returns the
     * given cell.
     */
    getCell(me: mxMouseEvent): mxCell;

    /**
     * Function: getStateToMark
     *
     * Returns the <mxCellState> to be marked for the given <mxCellState> under
     * the mouse. This returns the given state.
     */
    getStateToMark(state: mxCellState): mxCellState;

    /**
     * Function: intersects
     *
     * Returns true if the given coordinate pair intersects the given state.
     * This returns true if the <hotspot> is 0 or the coordinates are inside
     * the hotspot for the given cell state.
     */
    intersects(state: mxCellState, me: mxMouseEvent): boolean;

    /**
     * Function: destroy
     *
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;
  }
}
