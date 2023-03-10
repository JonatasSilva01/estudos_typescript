// Utilize o any apenas em utimo caso!
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage(['a', 'b', 'c']));
console.log(showMessage(1));
