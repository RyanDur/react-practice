const remove = <T>(
  thingsToRemove: T[],
  things: T[]
): T[] =>
  thingsToRemove.reduce((
    acc: T[],
    thing: T
  ): T[] => {
    const index = acc.indexOf(thing);
    return [...acc.slice(0, index), ...acc.slice(index + 1)];
  }, things);

export const toggleSelected = <T>(selection: T, selected: T[] = []): T[] => {
  if (!selection) return [];
  return selected.includes(selection) ?
    remove([selection], selected) :
    [...selected, selection];
};
