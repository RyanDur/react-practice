import {toggle} from '../helpers';

describe('util helpers', () => {
  it('should add a previously unselected selection', () => {
    const actual = toggle('row', []);
    expect(actual).toEqual(['row']);
  });

  it('should remove a previously selected selection', () => {
    const actual = toggle('row', ['row']);
    expect(actual).toEqual([]);
  });

  it('should always return the original list if nothing is given', () => {
    const actual = toggle(null, []);
    expect(actual).toEqual([]);
  });
});
