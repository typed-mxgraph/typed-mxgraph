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

  it('mxUtils.getPrettyXml should be a function', () => {
    expect(typeof(mx.mxUtils.getPrettyXml)).toEqual('function');
  });

});
