export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      result += `${element.substring(startString.length)}-`;
    }
  });

  return result.slice(0, -1);
}
