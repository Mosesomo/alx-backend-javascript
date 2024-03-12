export default function cleanSet(set, startString) {
  const setArray = Array.from(set);

  if (startString === '') {
    return '';
  }
  const filteredValues = setArray.filter((value) => value.startsWith(startString));
  const resultString = filteredValues.map((value) => value.substring(startString.length)).join('-');

  return resultString;
}
