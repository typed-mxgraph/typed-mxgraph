/// <reference path="../../index.d.ts" />
import factory, { mxGraphExportObject } from 'mxgraph';

describe('factory', () => {
  let mx: mxGraphExportObject;

  beforeAll(() => {
    mx = factory();
  });

  it('bind: should return the correct type', () => {
    const compareFn = mx.mxUtils.bind({}, (a: number, b: number) => {
      return a - b;
    });
    [].sort(compareFn);
  });

});
