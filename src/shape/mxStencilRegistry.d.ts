declare module 'mxgraph' {
  /**
   * A singleton class that provides a registry for stencils and the methods
   * for painting those stencils onto a canvas or into a DOM.
   *
   * @class mxStencilRegistry
   */
  class mxStencilRegistry {
    static stencils: { [key: string]: mxStencil };

    /**
     * Adds the given <mxStencil>.
     * @static
     * @param {string} name
     * @param {mxStencil} stencil
     */
    static addStencil(name: string, stencil: mxStencil): void;

    /**
     * Returns the <mxStencil> for the given name.
     * @static
     * @param {string} name
     * @returns {mxStencil}
     */
    static getStencil(name: string): mxStencil;
  }
}
