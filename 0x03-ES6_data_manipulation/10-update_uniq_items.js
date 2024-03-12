export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    const updateMap = new Map();

    map.forEach((quantity, item) => {
      if (quantity === 1) {
        updateMap.set(item, 100);
      } else {
        updateMap.set(item, quantity);
      }
    });

    return updateMap;
  }
}
