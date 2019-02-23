import {toggleSelected} from '../helpers';

describe('util helpers', () => {
  it('should add a previously unselected selection', () => {
    const actual = toggleSelected('row', []);
    expect(actual).toEqual(['row']);
  });

  it('should remove a previously selected selection', () => {
    const actual = toggleSelected('row', ['row']);
    expect(actual).toEqual([]);
  });

  it('should always return the original list if nothing is given', () => {
    const actual = toggleSelected(null, []);
    expect(actual).toEqual([]);
  });
});
