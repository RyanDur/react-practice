import {mount} from "enzyme";
import * as React from "react";
import {Rows} from "../Rows";
import {RowsProps} from "../connector";

describe('table rows', () => {
  const columns = ['a', 'b', 'c'];
  const rows = [{
    name: 'foo',
    data: {a: 1, b: 2, c: 3}
  }, {
    name: 'bar',
    data: {a: 4, b: 5, c: 6}
  }, {
    name: 'baz',
    data: {a: 7, b: 8, c: 9}
  }];
  const toggleChecked = jest.fn();
  const defaultChecked = true;

  const tableRows = (props: RowsProps) => mount(<Rows {...props}/>);
  const firstRow = (props: RowsProps = {rows, columns, defaultChecked, toggleChecked}) => tableRows(props)
    .find('.table-row')
    .first()
    .find('.row-cell')
    .hostNodes();

  describe('with data', () => {
    it('should should be as long as there are columns', () => {
      expect(firstRow().length).toBe(columns.length);
    });

    it('should be in the same order as the columns', () => {
      columns.map((column, index) =>
        expect(firstRow().find(`#table-data-body-${index}`)
          .getDOMNode()
          .getAttribute('data-column'))
          .toBe(column));
    });
  });

  describe('without data', () => {
    const rowsWithoutData = [{
      name: 'foo',
      data: {}
    }, {
      name: 'bar',
      data: {}
    }, {
      name: 'baz',
      data: {}
    }];

    it('should should be as long as there are columns', () => {
      expect(firstRow({rows: rowsWithoutData, columns, defaultChecked, toggleChecked}).length)
        .toBe(columns.length);
    });

    describe('table cell', () => {
      it('should default to —', () => {
        const actual = firstRow({rows: rowsWithoutData, columns, defaultChecked,  toggleChecked})
          .map(cell => ({[cell.getDOMNode().getAttribute('data-column')]: cell.text()}))
          .reduce((acc, cell) => ({...acc, ...cell}), {});
        expect(actual)
          .toEqual({
            a: '—',
            b: '—',
            c: '—'
          });
      });
    });
  });

  describe('row header', () => {
    it('should hold the name', () => {
      const firstRowsHeader = (props: RowsProps = {rows, columns, defaultChecked, toggleChecked}) => tableRows(props)
        .find('.row-header')
        .first()
        .find('.row-label')
        .hostNodes();

      expect(firstRowsHeader().first().text()).toBe('foo')
    });

    describe('checkbox', () => {
      it('should be able to set a default', () => {
        const tableRowsChecked = (props: RowsProps) => mount(<Rows {...props}/>);
        const allRows = () => tableRowsChecked({rows, columns, defaultChecked, toggleChecked})
          .find('.row-check')
          .hostNodes();
        // @ts-ignore
        const checked = allRows().map((row) => row.getDOMNode().checked);
        expect(checked).toEqual([true, true, true])
      });
    });
  });
});