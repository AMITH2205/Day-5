var sum = [1, 2, 3, 4, 5, 6];
var total = 0;
var result = () => {
  for (var i = 0; i < sum.length; i++) {
    total += sum[i];
    console.log(total);
  }
  return result;
};
result();
