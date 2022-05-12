
function renderSelection(){
  $(".course").empty();
  $(".details").empty();
 let item = JSON.parse(localStorage.getItem('mealSelection'))
 
 let itemPicture = $(`
  <div class="dinner">
    <img src="${item.image}"/>  
      </div> 
  </div>`).data('item', item)
 
 $(".course").append(itemPicture);
 
 let itemDetails = $(`
  <div class="course-info">
        <div class="course-name">${item.title}</div>
        <div class="course-description">
          <p>${item.description}</p>
        </div>
        <div class="course-price">${item.price} | ${item.carbs}</div>
      </div>
      </div>

 
 `).data('item', item)
 $(".details").append(itemDetails);

}


renderSelection();

$('#addtocart').on('click', function(){
let count = JSON.parse(localStorage.getItem('cartCount'))
let bagCount = count + 1 
localStorage.setItem('cartCount', bagCount);
let newCartCount = localStorage.getItem('cartCount');                      
$('.count').text(newCartCount);	
	
let purchase = JSON.parse(localStorage.getItem('mealSelection'))
let newItem = {
productid: purchase.id,
image: purchase.image,	
name: purchase.title,	
quantity: 1,
price: purchase.price,
}	

console.log(purchase)
	
let myItems = JSON.parse(localStorage.getItem('MyItems'))		
if(!myItems){
myItems = [newItem]
localStorage.setItem('MyItems', JSON.stringify(myItems))	
}else if(myItems){
myItems = [...myItems, newItem]
localStorage.setItem('MyItems', JSON.stringify(myItems))
console.log(myItems);	
}
	

})


