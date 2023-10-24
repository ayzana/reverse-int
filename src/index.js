module.exports = function reverse (n) {
  let result = '' ;
  let num = Math.abs(n);
  for (i = 0; i < 3; i++) {
    result += num % 10;
    num = Math.trunc(num / 10);
   }
   return result;
}
