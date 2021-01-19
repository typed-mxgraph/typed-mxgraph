/// <reference path="../index.d.ts" />
import factory, { mxGraphExportObject } from 'mxgraph';

describe('factory', () => {
  let mx: mxGraphExportObject;

  beforeAll(() => {
    mx = factory();
  });

  it('should be created', () => {
    expect(mx).toBeDefined();
  });

  it('version should be string', () => {
    expect(typeof(mx.mxClient.VERSION)).toEqual('string');
  });

});
