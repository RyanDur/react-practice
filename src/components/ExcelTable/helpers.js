export const sum = (acc, [, val]) => acc + val;
const toEntries = row => Object.entries(row);

export const transposeRows = rows => {
  const rowEntries = rows.map(toEntries);
  return rowEntries[0]?.map((_, index) => rowEntries.map(row => row[index])) || [];
};

export const collectEntries = fn => row =>
  row.reduce((acc, [key]) =>
    ({...acc, [key]: row.reduce(fn, 0)}), {});

export const flattenObjects =
  (acc, obj) => Object.assign({}, acc, obj);

export const sumColumns = (rows) => {
  return transposeRows(getCheckedRows(rows))
    .map(collectEntries(sum))
    .reduce(flattenObjects, {});
};

export const getRows = (rows = []) =>
  rows.map(row => row.data);

export const updateChecked = (namedRow = {}, rows = []) =>
  rows.map((row) => namedRow.name === row.name ?
    {name: row.name, data: row.data, checked: !row.checked} : row);

export const getCheckedRows = (rows = []) =>
  rows.filter(row => row.checked)
    .map(row => row.data);