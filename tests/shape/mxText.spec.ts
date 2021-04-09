/// <reference path="../../index.d.ts" />
import factory, { mxGraphExportObject, mxRectangle, mxShape, mxText } from 'mxgraph';

describe('mxText', () => {
  let mx: mxGraphExportObject;

  beforeAll(() => {
    mx = factory();
  });

  it('mxText instance should be assignable to mxShape variables', () => {
    const shape: mxShape = new mx.mxText('a label', new mx.mxRectangle(0, 10, 30, 100));

    expect(shape).not.toBeNull();
  });
});
