(function(){
  let spending = localStorage.getItem('cartItems')
  if (!spending){
  localStorage.setItem('cartItems', 0)
  }else if (spending){
$('.count').text(spending);
  }
})();

