/// <reference path="../../index.d.ts" />
import factory, { mxCell, mxGraphExportObject } from 'mxgraph';


describe('mxGraphModel', () => {
  let mx: mxGraphExportObject;

  beforeAll(() => {
    mx = factory();
  });

  const newEdge = (name: string): mxCell => {
    const cell = new mx.mxCell('cell2');
    cell.setEdge(true);
    return cell;
  };

  it('filterDescendants: accept filter by cell', () => {
    const parent = new mx.mxCell('root');
    const model = new mx.mxGraphModel(parent);
    const child = newEdge('child');
    model.add(parent, child);
    const filteredCells = model.filterDescendants((cell: mxCell) => {
      return cell.isEdge();
    });
    expect(filteredCells).toEqual([child]);
  });

  it('filterCells: accept filter by cell', () => {
    const cell2 = newEdge('cell2');
    const model = new mx.mxGraphModel(new mx.mxCell('root'));
    const filteredCells = model.filterCells([new mx.mxCell('cell1'), cell2, new mx.mxCell('cell3')], (cell: mxCell) => {
      return cell.isEdge();
    });
    expect(filteredCells).toEqual([cell2]);
  });

});
