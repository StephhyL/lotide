const middle = (arr) => {
  let result = [];

  const arrLength = arr.length;
  const centre = arrLength / 2;
  const centreIndex = centre - 1;

  if (arrLength <= 2) {
    result = [];
  } else if (Number.isInteger(centreIndex)) {
    result.push(arr[centreIndex], arr[centreIndex + 1]);
  } else {
    result.push(arr[Math.ceil(centreIndex)]);
  }
  return result;
};

module.exports = middle;