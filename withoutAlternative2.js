const without =  (arr1, arr2) => {
  /* let final = [...arr1]; */
  let final = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      final.push(arr1[i]);
    }
    /* while (final.indexOf(arr2[i]) > -1) {
      final.splice(final.indexOf(arr2[i]),1);
    } */
  }
  return final;
};