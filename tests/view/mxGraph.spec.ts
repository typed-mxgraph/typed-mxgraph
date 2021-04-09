/// <reference path="../../index.d.ts" />
import factory, { mxGraphExportObject } from 'mxgraph';

describe('mxGraph', () => {
  let mx: mxGraphExportObject;

  beforeAll(() => {
    mx = factory();
  });

  it('createSelectionCellsHandler: should be a function', () => {
    const graph = new mx.mxGraph(document.createElement('div'));
    expect(typeof(graph.createSelectionCellsHandler)).toEqual('function');
  });

});
