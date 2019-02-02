import {mount} from 'enzyme';
import {Totals} from '../Totals';
import * as React from 'react';
import {TotalsProps} from '../connector';
import {Data, Row} from '../../../types';

const mockProps = (
  columns: string[] = ['a', 'b', 'c'],
  totals: Data = {a: 1, b: 2, c: 3},
  rows: Row[] = [{name: '', data: [{a: 1, b: 2, c: 3}], checked: true}]
): TotalsProps => ({columns, totals, rows});

describe('table totals', () => {
  const footer = (propsToAdd: TotalsProps) => mount(<Totals {...propsToAdd}/>);
  let props: TotalsProps;

  beforeEach(() => {
    props = mockProps();
  });

  it('should be as long as the number of columns', () => {
    const actual = footer(props)
      .find('.total').hostNodes();

    expect(actual).toHaveLength(props.columns.length);
  });

  describe('table cell', () => {
    describe('without data', () => {
      it('should default to —', () => {
        const actual = footer(mockProps(
          ['a'],
          {a: 0},
          [{name: '', data: [{a: 1}], checked: true}]
        )).find('.total');

        actual.map(total => expect(total.text()).toBe('—'));
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
  });
});
