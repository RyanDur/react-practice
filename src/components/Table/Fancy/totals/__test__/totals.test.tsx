import {mount} from 'enzyme';
import * as React from 'react';
import {Data} from '../../../../../core/types';
import {TotalsProps} from '../connector';
import {Totals} from '../Totals';

const mockProps = (
  columns: string[] = ['a', 'b', 'c'],
  totals: Data<number> = {a: 1, b: 2, c: 3}
): TotalsProps => ({columns, totals});

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
          {a: 0}
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
