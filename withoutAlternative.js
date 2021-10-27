const without =  (arr1, arr2) => {
  let final = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    while (final.indexOf(arr2[i]) > -1) {
      final.splice(final.indexOf(arr2[i]),1);
    }
  }
  return final;
};

console.log(without([1, 3,2,3,2,1], [3,2]));