declare module 'mxgraph' {
  /**
   * Codec for {@link mxValueChange}s, {@link mxStyleChange}s, {@link mxGeometryChange}s,
   * {@link mxCollapseChange}s and {@link mxVisibleChange}s. This class is created
   * and registered dynamically at load time and used implicitely
   * via {@link mxCodec} and the {@link mxCodecRegistry}.
   *
   * ### Transient Fields:
   *
   * - model
   * - previous
   *
   * ### Reference Fields:
   *
   * - cell
   *
   * ----
   *
   * Factory function that creates a {@link mxObjectCodec} for
   * the specified change and fieldname.
   *
   * @param obj - An instance of the change object.
   * @param variable - The fieldname for the change data.
   *
   */
  export function mxGenericChangeCodec(obj: any, variable: string): mxObjectCodec;
}
