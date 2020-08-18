declare module 'mxgraph' {
  /**
   * Provides animation effects.
   *
   * @class mxEffects
   */
  class mxEffects {
    /**
     * Asynchronous animated move operation. See also: <mxMorphing>.
     *
     * @example
     * ```javascript
     * graph.model.addListener(mxEvent.CHANGE, function(sender, evt)
     * {
     *   var changes = evt.getProperty('edit').changes;
     *
     *   if (changes.length < 10)
     *   {
     *     mxEffects.animateChanges(graph, changes);
     *   }
     * });
     * ```
     *
     * @param graph - <mxGraph> that received the changes.
     * @param changes - Array of changes to be animated.
     * @param done - Optional function argument that is invoked after the
     * last step of the animation.
     */
    static animateChanges(graph: mxGraph, changes: Array<any>, done?: Function): void;

    /**
     * Sets the opacity on the given cell and its descendants.
     *
     * @param graph - <mxGraph> that contains the cells.
     * @param cell - <mxCell> to set the opacity for.
     * @param opacity - New value for the opacity in %.
     */
    static cascadeOpacity(graph: mxGraph, cell: mxCell, opacity: number): void;

    /**
     * Asynchronous fade-out operation.
     */
    static fadeOut(
      node: HTMLElement,
      from?: number,
      remove?: boolean,
      step?: number,
      delay?: number,
      isEnabled?: boolean
    ): void;
  }
}
