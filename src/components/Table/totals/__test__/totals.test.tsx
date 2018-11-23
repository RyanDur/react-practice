import {mount} from 'enzyme';
import {Totals} from '../Totals';
import * as React from 'react';
import {TotalsProps} from '../connector';
import {Data, Row} from '../../types';

const mockProps = (
  columns: string[] = ['a', 'b', 'c'],
  totals: Data = {a: 1, b: 2, c: 3},
  rows: Row[] = [{name: '', data: [{a: 1, b: 2, c: 3}], checked: true}],
  updateTotals: () => void = jest.fn()
): TotalsProps => ({columns, totals, rows, updateTotals});


describe('table totals', () => {
  const footer = (props: TotalsProps) => mount(<Totals {...props}/>);
  let props: TotalsProps;

  beforeEach(() => {
    props = mockProps()
  });

  it('should be as long as the number of columns', () => {
    const actual = footer(props)
      .find('.total').hostNodes();

    expect(actual.length).toEqual(props.columns.length);
  });

  describe('table cell', () => {
    describe('without data', () => {
      it('should default to —', () => {
        const actual = footer(mockProps(
          ['a'],
          {a: 0},
          [{name: '', data: [{a: 1}], checked: true}]
        )).find('.total');

        actual.map(total => expect(total.text()).toBe('—'))
      });
    });

    describe('with data', () => {
      it('should display the total', () => {
        const total = footer(props)
          .find('#table-data-footer-0')
          .hostNodes();

        expect(total.text()).toBe('1');
      });
    });

    it('should correspond to the column', () => {
      const total = footer(props)
        .find('[data-column="c"]')
        .hostNodes();

      expect(total.text()).toBe('3');
    });

    it('should update if the rows that are checked have changed', () => {
      const rows = [{name: '', data: [{a: 1, b: 2, c: 3}], checked: false}];
      const totals = footer(props);
      expect(props.updateTotals).not.toHaveBeenCalled();
      totals.setProps({rows});
      expect(props.updateTotals).toHaveBeenCalled();
    });

    it('should not update if the rows that are checked have not changed', () => {
      const rows = [{name: '', data: [{a: 1, b: 2, c: 4}], checked: true}];
      const totals = footer(props);
      expect(props.updateTotals).not.toHaveBeenCalled();
      totals.setProps({rows});
      expect(props.updateTotals).not.toHaveBeenCalled();
    });
  });
});