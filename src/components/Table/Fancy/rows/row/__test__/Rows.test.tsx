import {mount} from 'enzyme';
import * as React from 'react';
import {RowProps} from '../connector';
import {Props, Row} from '../Row';

describe('table row', () => {
  let props: TestRowProps;
  const tableRow = (props: TestRowProps) => mount(<Row {...props}/>);
  const rowDataCells = (props: TestRowProps) => tableRow(props).find('.row-cell').hostNodes();

  beforeEach(() => {
    props = mockProps({});
  });

  describe('with data', () => {
    it('should be as long as there are columns', () => {
      expect(rowDataCells(props).length).toBe(props.columns.length);
    });

    it('should be in the same order as the columns', () => {
      props.columns.map((column, index) =>
        expect(tableRow(props)
          .find(`#row-data-${column}-${index}`)
          .hostNodes()
          .getDOMNode()
          .getAttribute('data-column'))
          .toBe(column));
    });
  });

  describe('without data', () => {
    const rowWithoutData = {
      name: 'foo',
      data: {}
    };

    it('should should be as long as there are columns', () => {
      props.row = rowWithoutData;
      expect(rowDataCells(props).length).toBe(props.columns.length);
    });
    // rowDataCells(props).map(cell => cell.hostNodes().getDOMNode().getAttribute('[data-column]'))
    describe('table cell', () => {
      it('should default to —', () => {
        props.row = rowWithoutData;
        const actual = rowDataCells(props).hostNodes()
          .reduce((acc, cell) => ({
            ...acc,
            ...{[cell.hostNodes().getDOMNode().getAttribute('data-column')]: cell.text()}
          }), {});
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
      expect(tableRow(props).find('.row-header').hostNodes().text()).toBe('foo')
    });

    describe('checkbox', () => {
      it('should be able to set a default', () => {
        const checked = (tableRow(props)
          .find('.row-check')
          .hostNodes()
          .getDOMNode() as HTMLInputElement)
          .checked;
        expect(checked).toBeTruthy();
      });
    });
  });
});

type TestRowProps = RowProps & Props;
const mockProps = (
  {
    row = {
      name: 'foo',
      data: {a: 1, b: 2, c: 3}
    },
    columns = ['a', 'b', 'c'],
    defaultCheck = true,
    toggleChecked = jest.fn(),
    index = 1
  }
): TestRowProps => ({row, columns, defaultCheck, toggleChecked, index});
