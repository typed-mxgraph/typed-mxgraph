import factory, { mxGraphExportObject } from 'mxgraph';

describe('factory', () => {
  let mxgraph: mxGraphExportObject;

  beforeAll(() => {
    mxgraph = factory();
  });

  it('should be created', () => {
    expect(mxgraph).toBeDefined();
  });

  it('version should be string', () => {
    expect(typeof(mxgraph.mxClient.VERSION)).toEqual('string');
  });

});
