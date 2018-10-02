export const sum = (acc, [, val]) => acc + val;
const toEntries = row => Object.entries(row);

export const transposeRows = rows => {
  const rowEntries = rows.map(toEntries);
  return rowEntries[0]
    .map((_, index) => rowEntries.map(row => row[index]));
};

export const collectEntries = fn => row =>
  row.reduce((acc, [key]) =>
    ({...acc, [key]: row.reduce(fn, 0)}), {});

export const flattenObjects =
  (acc, obj) => Object.assign({}, acc, obj);

export const getKeyValues = (obj = {}) => {
  const key = Object.keys(obj)[0];
  return {key: key, value: obj[key]};
};

export const isEmpty = (obj) => {
  for (let x in obj) if (obj.hasOwnProperty(x)) return false;
  return true;
};

export const sumColumns = (rows) =>
  transposeRows(rows)
    .map(collectEntries(sum))
    .reduce(flattenObjects, {});

export const getRows = ({data}) => {
  return data
    .map(getKeyValues)
    .map(row => row.value);
};