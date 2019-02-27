const remove = <T>(
  things: T[],
  ...thingsToRemove: T[]
): T[] =>
  thingsToRemove.reduce((
    acc: T[],
    thing: T
  ): T[] => {
    const index = acc.indexOf(thing);
    return [...acc.slice(0, index), ...acc.slice(index + 1)];
  }, things);

export const toggle = <T>(selection: T, selected: T[] = []): T[] => {
  if (!selection) return selected;
  return selected.includes(selection) ?
    remove(selected, selection) :
    [...selected, selection];
};
