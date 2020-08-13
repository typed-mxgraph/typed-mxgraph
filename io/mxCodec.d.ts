declare module 'mxgraph' {
  /**
   * XML codec for JavaScript object graphs. See {@link mxObjectCodec} for a
   * description of the general encoding/decoding scheme. This class uses the
   * codecs registered in {@link mxCodecRegistry} for encoding/decoding each object.
   *
   * ### References
   *
   * In order to resolve references, especially forward references, the mxCodec
   * constructor must be given the document that contains the referenced
   * elements.
   *
   * ### Examples
   *
   * The following code is used to encode a graph model.
   *
   * @example
   * ```javascript
   * var encoder = new mxCodec();
   * var result = encoder.encode(graph.getModel());
   * var xml = mxUtils.getXml(result);
   * ```
   *
   * #### Example
   *
   * Using the code below, an XML document is decoded into an existing model. The
   * document may be obtained using one of the functions in mxUtils for loading
   * an XML file, eg. {@link mxUtils.get}, or using {@link mxUtils.parseXml} for parsing an
   * XML string.
   *
   * @example
   * ```javascript
   * var doc = mxUtils.parseXml(xmlString);
   * var codec = new mxCodec(doc);
   * codec.decode(doc.documentElement, graph.getModel());
   * ```
   *
   * #### Example
   *
   * This example demonstrates parsing a list of isolated cells into an existing
   * graph model. Note that the cells do not have a parent reference so they can
   * be added anywhere in the cell hierarchy after parsing.
   *
   * @example
   * ```javascript
   * var xml = '<root><mxCell id="2" value="Hello," vertex="1"><mxGeometry x="20" y="20" width="80" height="30" as="geometry"/></mxCell><mxCell id="3" value="World!" vertex="1"><mxGeometry x="200" y="150" width="80" height="30" as="geometry"/></mxCell><mxCell id="4" value="" edge="1" source="2" target="3"><mxGeometry relative="1" as="geometry"/></mxCell></root>';
   * var doc = mxUtils.parseXml(xml);
   * var codec = new mxCodec(doc);
   * var elt = doc.documentElement.firstChild;
   * var cells = [];
   *
   * while (elt != null)
   * {
   *   cells.push(codec.decode(elt));
   *   elt = elt.nextSibling;
   * }
   *
   * graph.addCells(cells);
   * ```
   *
   * #### Example
   *
   * Using the following code, the selection cells of a graph are encoded and the
   * output is displayed in a dialog box.
   *
   * @example
   * ```javascript
   * var enc = new mxCodec();
   * var cells = graph.getSelectionCells();
   * mxUtils.alert(mxUtils.getPrettyXml(enc.encode(cells)));
   * ```
   *
   * Newlines in the XML can be converted to <br>, in which case a '<br>' argument
   * must be passed to {@link mxUtils.getXml} as the second argument.
   *
   * ### Debugging
   *
   * For debugging I/O you can use the following code to get the sequence of
   * encoded objects:
   *
   * @example
   * ```javascript
   * var oldEncode = encode;
   * encode(obj)
   * {
   *   mxLog.show();
   *   mxLog.debug('mxCodec.encode: obj='+mxUtils.getFunctionName(obj.constructor));
   *
   *   return oldEncode.apply(this, arguments);
   * };
   * ```
   *
   * Note that the I/O system adds object codecs for new object automatically. For
   * decoding those objects, the constructor should be written as follows:
   *
   * @example
   * ```javascript
   * var MyObj(name)
   * {
   *   // ...
   * };
   * ```
   *
   * @class mxCodec
   */
  class mxCodec {
    /**
     * @constructor
     *
     * Constructs an XML encoder/decoder for the specified
     * owner document.
     *
     * @param document - Optional XML document that contains the data.
     * If no document is specified then a new document is created
     * using {@link mxUtils.createXmlDocument}.
     */
    constructor(document?: XMLDocument);

    /**
     * The owner document of the codec.
     */
    document: XMLDocument;

    /**
     * Maps from IDs to objects.
     */
    objects: Array<string>;

    /**
     * Lookup table for resolving IDs to elements.
     */
    elements: Array<any>;

    /**
     * Specifies if default values should be encoded. Default is false.
     */
    encodeDefaults: boolean;

    /**
     * Assoiates the given object with the given ID and returns the given object.
     *
     * @param id ID for the object to be associated with.
     * @param obj Object to be associated with the ID.
     */
    putObject(id: string, obj: any): any;

    /**
     * Returns the decoded object for the element with the specified ID in
     * {@link document}. If the object is not known then {@link lookup} is used to find an
     * object. If no object is found, then the element with the respective ID
     * from the document is parsed using {@link decode}.
     */
    getObject(id: string): any;

    /**
     * Hook for subclassers to implement a custom lookup mechanism for cell IDs.
     * This implementation always returns null.
     *
     * Example:
     *
     * ```javascript
     * var codec = new mxCodec();
     * codec.lookup(id)
     * {
     *   return model.getCell(id);
     * };
     * ```
     *
     * @param id ID of the object to be returned.
     */
    lookup(id: string): any;

    /**
     * Returns the element with the given ID from {@link document}.
     *
     * @param id String that contains the ID.
     */
    getElementById(id: string): Element;

    /**
     * Returns the element with the given ID from {@link document}.
     *
     * @param id String that contains the ID.
     */
    updateElements(): void;

    /**
     * Adds the given element to {@link elements} if it has an ID.
     */
    addElement(node: Node): void;

    /**
     * Returns the ID of the specified object. This implementation
     * calls {@link reference} first and if that returns null handles
     * the object as an {@link mxCell} by returning their IDs using
     * {@link mxCell.getId}. If no ID exists for the given cell, then
     * an on-the-fly ID is generated using {@link mxCellPath.create}.
     *
     * @param obj Object to return the ID for.
     */
    getId(obj: any): string;

    /**
     * Hook for subclassers to implement a custom method
     * for retrieving IDs from objects. This implementation
     * always returns null.
     *
     * Example:
     *
     * ```javascript
     * var codec = new mxCodec();
     * codec.reference(obj)
     * {
     *   return obj.getCustomId();
     * };
     * ```
     *
     * @param obj Object whose ID should be returned.
     */
    reference(obj: any): any;

    /**
     * Encodes the specified object and returns the resulting
     * XML node.
     *
     * @param obj Object to be encoded.
     */
    encode(obj: any): XMLDocument;

    /**
     * Decodes the given XML node. The optional "into"
     * argument specifies an existing object to be
     * used. If no object is given, then a new instance
     * is created using the constructor from the codec.
     *
     * The function returns the passed in object or
     * the new instance if no object was given.
     *
     * @param node XML node to be decoded.
     * @param into Optional object to be decodec into.
     */
    decode(node: Node, into?: any): any;

    /**
     * Encoding of cell hierarchies is built-into the core, but
     * is a higher-level function that needs to be explicitely
     * used by the respective object encoders (eg. {@link mxModelCodec},
     * {@link mxChildChangeCodec} and {@link mxRootChangeCodec}). This
     * implementation writes the given cell and its children as a
     * (flat) sequence into the given node. The children are not
     * encoded if the optional includeChildren is false. The
     * function is in charge of adding the result into the
     * given node and has no return value.
     *
     * @param cell {@link mxCell} to be encoded.
     * @param node Parent XML node to add the encoded cell into.
     * @param includeChildren Optional boolean indicating if the
     * function should include all descendents. Default is true.
     */
    encodeCell(cell: mxCell, node: Node, includeChildren?: boolean): void;

    /**
     * Returns true if the given codec is a cell codec. This uses
     * {@link mxCellCodec.isCellCodec} to check if the codec is of the
     * given type.
     */
    isCellCodec(codec: mxCodec): boolean;

    /**
     * Decodes cells that have been encoded using inversion, ie.
     * where the user object is the enclosing node in the XML,
     * and restores the group and graph structure in the cells.
     * Returns a new {@link mxCell} instance that represents the
     * given node.
     *
     * @param node XML node that contains the cell data.
     * @param restoreStructures Optional boolean indicating whether
     * the graph structure should be restored by calling insert
     * and insertEdge on the parent and terminals, respectively.
     * Default is true.
     */
    decodeCell(node: Node, restoreStructures?: boolean): mxCell;

    /**
     * Inserts the given cell into its parent and terminal cells.
     */
    insertIntoGraph(cell: mxCell): void;

    /**
     * Sets the attribute on the specified node to value. This is a
     * helper method that makes sure the attribute and value arguments
     * are not null.
     *
     * @param node XML node to set the attribute for.
     * @param attributes Attributename to be set.
     * @param value New value of the attribute.
     */
    setAttribute(node: Node, attribute: string, value: any): void;
  }
}
