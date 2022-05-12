function renderItems(){
  const menuItemsApp = [
  {id: 1, image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" , title: "Taco Bites", description: "Keto Friendly Taco bites, crunchy taco shells made of chhese, filled with beef, our special taco seasoning, and cheese, topped off with a scoop of sour cream,fresh peppers and  bacon bits." , price: "$10.99" , carbs: "3 Carbs"},
  
  {id: 2, image: "https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg" , title: "Chilli Cheese Hot Dogs", description: "These Keto Chili Cheese Dogs have everything you love about this classic, without the carbs! Easy, low carb, gluten free pigs in a blanket are smothered with keto chili and shredded cheddar cheese!" , price: "$9.99" , carbs: "3.8 Carbs"},
  
  {id: 3, image: "https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg" , title: "Guacamole & Chips", description: "This Homemade Low Carb Keto Tortilla Chips Recipe will become your go-to tortilla chips recipe! It’s perfect when you’re craving crispy chips paired with salsa, guacamole, or queso." , price: "$8.99" , carbs: "2.6 Carbs"},
  
  {id: 4, image: "https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg" , title: "Bacon Cheese Burger Bites", description: "Low carb, bunless burger bites, that come with letteuce, cheese, pickles, bacon, tomato, and a juicy ground beef patty." , price: "$11.99" , carbs: "1 Carbs"}, 
  
]

  menuItemsApp.forEach(function(){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Taco Bites</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `)
    
   $('.main').append(cards);
    return cards;
  })


}

renderItems();
