(function(){
  let spending = localStorage.getItem('cartItems')
  if (!spending){
  let value = parseInt($(".count").text(),0);
  }else if (spending){
$('.count').text(spending);
  }
})();
