let a = parseInt(prompt('input a'));
let b=parseInt(prompt('input b'));
let c=parseInt(prompt('input c'));
if(isNaN(a)||isNaN(b)||isNaN(c)){
    alert('input values should be ONLY numbers ')
}else if(a<=0||b<=0||c<=0){
 alert('A triangle must have 3 sides with a positive definite length ') 
}else if(a>=b+c||b>=a+c||c>=a+b){
 console.log('Triangle doesn’t exist') 
}else if(a===b&&b===c&&a===c){
 console.log('Equilateral triangle') 
}else if(a===b||a===c||b===c){
console.log('Isosceles triangle')
}else {
 console.log('Scalene triangle') 
}