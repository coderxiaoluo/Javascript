function father() {
  this.num = 935;
  this.work = ['read', 'write', 'listen'];
}
function son() { }
son.prototype = new father();
let son1 = new son();
let son2 = new son();
son1.num = 117;
son1.work.pop();
console.log(son2.num);
console.log(son2.work);