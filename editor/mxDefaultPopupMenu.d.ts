declare module 'mxgraph' {
  /**
   * Creates popupmenus for mouse events.  This object holds an XML node which is a description of the popup menu to be created.  In {@link createMenu}, the configuration is applied to the context and the resulting menu items are added to the menu dynamically.  See {@link createMenu} for a description of the configuration format.
   * This class does not create the DOM nodes required for the popup menu, it only parses an XML description to invoke the respective methods on an {@link mxPopupMenu} each time the menu is displayed.
   *
   * @Codec
   * This class uses the {@link mxDefaultPopupMenuCodec} to read configuration data into an existing instance, however, the actual parsing is done by this class during program execution, so the format is described below.
   */
  class mxDefaultPopupMenu {
    /**
     * Constructs a new popupmenu-factory based on given configuration.
     *
     * @param config     XML node that contains the configuration data.
     */
    constructor(config: Element);
    /**
     * Base path for all icon attributes in the config.  Default is null.
     *
     * @default null
     */
    imageBasePath: string;

    /**
     * XML node used as the description of new menu items.  This node is used in {@link createMenu} to dynamically create the menu items if their respective conditions evaluate to true for the given arguments.
     */
    config: Element;

    /**
     * This function is called from {@link mxEditor} to add items to the
     * given menu based on {@link config}. The config is a sequence of
     * the following nodes and attributes.
     *
     * @ChildNodes:
     *
     * add - Adds a new menu item. See below for attributes.
     * separator - Adds a separator. No attributes.
     * condition - Adds a custom condition. Name attribute.
     *
     * The add-node may have a child node that defines a function to be invoked
     * before the action is executed (or instead of an action to be executed).
     *
     * @Attributes:
     *
     * as - Resource key for the label (needs entry in property file).
     * action - Name of the action to execute in enclosing editor.
     * icon - Optional icon (relative/absolute URL).
     * iconCls - Optional CSS class for the icon.
     * if - Optional name of condition that must be true (see below).
     * enabled-if - Optional name of condition that specifies if the menu item
     * should be enabled.
     * name - Name of custom condition. Only for condition nodes.
     *
     * @Conditions:
     *
     * nocell - No cell under the mouse.
     * ncells - More than one cell selected.
     * notRoot - Drilling position is other than home.
     * cell - Cell under the mouse.
     * notEmpty - Exactly one cell with children under mouse.
     * expandable - Exactly one expandable cell under mouse.
     * collapsable - Exactly one collapsable cell under mouse.
     * validRoot - Exactly one cell which is a possible root under mouse.
     * swimlane - Exactly one cell which is a swimlane under mouse.
     *
     * @Example:
     *
     * To add a new item for a given action to the popupmenu:
     *
     * ```
     * <mxDefaultPopupMenu as="popupHandler">
     *   <add as="delete" action="delete" icon="images/delete.gif" if="cell"/>
     * </mxDefaultPopupMenu>
     * ```
     *
     * To add a new item for a custom function:
     *
     * ```
     * <mxDefaultPopupMenu as="popupHandler">
     *   <add as="action1"><![CDATA[
     *		function (editor, cell, evt)
     *		{
     *			editor.execute('action1', cell, 'myArg');
     *		}
     *   ]]></add>
     * </mxDefaultPopupMenu>
     * ```
     *
     * The above example invokes action1 with an additional third argument via
     * the editor instance. The third argument is passed to the function that
     * defines action1. If the add-node has no action-attribute, then only the
     * function defined in the text content is executed, otherwise first the
     * function and then the action defined in the action-attribute is
     * executed. The function in the text content has 3 arguments, namely the
     * {@link mxEditor} instance, the {@link mxCell} instance under the mouse, and the
     * native mouse event.
     *
     * Custom Conditions:
     *
     * To add a new condition for popupmenu items:
     *
     * ```
     * <condition name="condition1"><![CDATA[
     *   function (editor, cell, evt)
     *   {
     *     return cell != null;
     *   }
     * ]]></condition>
     * ```
     *
     * The new condition can then be used in any item as follows:
     *
     * ```
     * <add as="action1" action="action1" icon="action1.gif" if="condition1"/>
     * ```
     *
     * The order in which the items and conditions appear is not significant as
     * all conditions are evaluated before any items are created.
     *
     * Parameters:
     *
     * @param editor - Enclosing {@link mxEditor} instance.
     * @param menu - {@link mxPopupMenu} that is used for adding items and separators.
     * @param cell - Optional {@link mxCell} which is under the mousepointer.
     * @param evt - Optional mouse event which triggered the menu.
     */
    createMenu(editor: mxEditor, menu: mxPopupMenu, cell?: mxCell, evt?: MouseEvent): void;

    /**
     * Recursively adds the given items and all of its children into the given menu.
     *
     * @param editor - Enclosing {@link mxEditor} instance.
     * @param menu - {@link mxPopupMenu} that is used for adding items and separators.
     * @param cell - Optional {@link mxCell} which is under the mousepointer.
     * @param evt - Optional mouse event which triggered the menu.
     * @param conditions - Array of names boolean conditions.
     * @param item - XML node that represents the current menu item.
     * @param parent - DOM node that represents the parent menu item.
     */
    addItems(
      editor: mxEditor,
      menu: mxPopupMenu,
      conditions: any[],
      item: Element,
      parent: HTMLElement,
      cell?: mxCell,
      evt?: MouseEvent
    ): void;

    /**
     * Helper method to bind an action to a new menu item.
     *
     * @param menu - {@link mxPopupMenu} that is used for adding items and separators.
     * @param editor - Enclosing {@link mxEditor} instance.
     * @param lab - String that represents the label of the menu item.
     * @param parent - DOM node that represents the parent menu item.
     * @param icon - Optional URL that represents the icon of the menu item.
     * @param action - Optional name of the action to execute in the given editor.
     * @param funct - Optional function to execute before the optional action. The function takes an {@link mxEditor}, the {@link mxCell} under the mouse and the mouse event that triggered the call.
     * @param cell - Optional {@link mxCell} to use as an argument for the action.
     * @param iconCls - Optional CSS class for the menu icon.
     * @param enabled - Optional boolean that specifies if the menu item is enabled. Default is true.
     */
    addAction(
      menu: mxPopupMenu,
      editor: mxEditor,
      lab: string,
      parent: HTMLElement,
      icon?: string,
      action?: string,
      funct?: Function,
      cell?: mxCell,
      iconCls?: string,
      enabled?: boolean
    ): void;

    /**
     * Evaluates the default conditions for the given context.
     *
     * @param editor
     * @param cell
     * @param evt
     */
    createConditions(editor: mxEditor, cell: mxCell, evt: MouseEvent): void;

    [key: string]: any;
  }
}
