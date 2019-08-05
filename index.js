var p = ['', 150, 300, 100]
var t = [0, 150, 300, 100]
var count = ['', 1, 1, 1]
var T=0 ;


function increment1() {
   count[1]++ 
        t[1] = p[1] *count[1]
  T = t.reduce((a, b) => a + b )   
  document.getElementById('quantity-price').innerHTML = count[1]
  document.getElementById('item1-price-total').innerHTML = t[1]
  document.getElementById('totalPrice').innerHTML = T 
}
function decrement1() {
   if (parseInt(document.getElementById('quantity-price').innerHTML) <= 0) 
   return
   count[1]--
   t[1] = t[1]* count[1]
T = t.reduce((a, b) => a + b)
document.getElementById('quantity-price').innerHTML = count[1]
document.getElementById('item1-price-total').innerHTML = t[1]
document.getElementById('totalPrice').innerHTML = T
}
function increment2() {
   count[2]++
        t[2] = p[2] *count[2]
   T = t.reduce((a, b) => a + b) 
   document.querySelector('#quantity2-price').innerHTML = count[2]
   document.querySelector('#item2-price-total').innerHTML = t[2]
   document.querySelector('#totalPrice').innerHTML = T 
} 
function decrement2() {
   if (parseInt(document.querySelector('#quantity2-price').innerHTML) <= 0) 
   return
   count[2]--
   t[2] = t[2]* count[2]
T = t.reduce((a, b) => a + b)
document.querySelector('#quantity2-price').innerHTML = count[2]
document.querySelector('#item2-price-total').innerHTML = t[2]
document.querySelector('#totalPrice ').innerHTML = T
}
function increment3() {
   count[3]++
        t[3] = p[3] *count[3]
   T = t.reduce((a, b) => a + b) 
   document.querySelector('.quantity3-price').innerHTML = count[3]
   document.querySelector('#item3-price-total').innerHTML = t[3]
   document.querySelector('#totalPrice').innerHTML = T 
} 
function decrement3() {
   if (parseInt(document.querySelector('.quantity3-price').innerHTML) <= 0) 
   return
   count[3]--
   t[3] = t[3]* count[3]
T = t.reduce((a, b) => a + b)
document.querySelector('.quantity3-price').innerHTML = count[3]
document.querySelector('#item3-price-total').innerHTML = t[3]
document.querySelector('#totalPrice').innerHTML = T
}
