(function() {
  $('.main').empty();
  let selected = JSON.parse(localStorage.getItem('optionID'))
  
  if(selected === 1){
  renderApps();
  }
  
  if(selected === 2){
  renderBurgers();
  }
  
  if(selected === 3){
  renderSteak();
  }
  
  
})();



function renderApps(){
  const menuItemsApp = [
  {id: 1, image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" , title: "Taco Bites", description: "Keto Friendly Taco bites, crunchy taco shells made of chhese, filled with beef, our special taco seasoning, and cheese, topped off with a scoop of sour cream,fresh peppers and  bacon bits." , price: "$10.99" , carbs: "3 Carbs"},
  
  {id: 2, image: "https://www.patrickmaese.com/wp-content/uploads/2019/03/Chili-Cheese-Dogs-blog-1-500x500.jpg" , title: "Chilli Cheese Hot Dogs", description: "These Keto Chili Cheese Dogs have everything you love about this classic, without the carbs! Easy, low carb, gluten free pigs in a blanket are smothered with keto chili and shredded cheddar cheese!" , price: "$9.99" , carbs: "3.8 Carbs"},
  
  {id: 3, image: "https://theketoqueens.com/wp-content/uploads/2018/04/Low-Carb-Keto-Tortilla-Chips-Recipe-500x375.jpg" , title: "Guacamole & Chips", description: "This Homemade Low Carb Keto Tortilla Chips Recipe will become your go-to tortilla chips recipe! It’s perfect when you’re craving crispy chips paired with salsa, guacamole, or queso." , price: "$8.99" , carbs: "2.6 Carbs"},
  
  {id: 4, image: "https://www.foodnetwork.com/content/dam/images/food/video/9/94/947/9471/9471366.jpg" , title: "Bacon Cheese Burger Bites", description: "Low carb, bunless burger bites, that come with letteuce, cheese, pickles, bacon, tomato, and a juicy ground beef patty." , price: "$11.99" , carbs: "1 Carbs"}, 
  
]

  menuItemsApp.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `)
    
   $('.main').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(){
     window.location = "/orderpage";    
});


}


function renderBurgers(){
const menuItemsBurgers = [
  {id: 1, image: "https://kaseytrenum.com/wp-content/uploads/2020/05/keto-stuffed-burger.jpg" , title: "The Plain Jane", description: "Basic Keto, burger with all the flavor. Comes with lettuce, tomato, onion, and pickles." , price: "$11.99" , carbs: "3 Carbs"},
  
 {id: 2, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "The Big Boy", description: "For those with a monster appetite, the big boy. Double patty bunless burger topped with lettuce, grilled onions, mushroom, bacon, and cheese." , price: "$13.99" , carbs: "5 Carbs"}, 
  
 {id: 3, image: "https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg" , title: "The All You Need", description: "Keto friendly bun, topped with lettuce, fresh onions, and cheese." , price: "$13.99" , carbs: "5 Carbs"},  
  
 {id: 4, image: "https://pbs.twimg.com/media/DVyp25YWsAA30ik.jpg" , title: "Cheese Bruger Wraps", description: "Low carb tortilla wraps, grilled stuffed with burger meat, cheese, tomato, lettuce, and our special dipping sauce." , price: "$13.99" , carbs: "4 Carbs"},   
  
]

  menuItemsBurgers.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `)
    
   $('.main').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(){
     window.location = "/orderpage";    
});


}


function renderSteak(){
const menuItemsSteakShrimp = [
  {id: 1, image: "https://www.aymag.com/wp-content/uploads/2020/05/Garlic-Butter-Steak-Shrimp-Recipe-IMAGE-1.jpg" , title: "Steak and Garlic Shrimp", description: "Our delicious marinated steak grilled over a flame, paired with our famount garlic butter shrimp." , price: "$21.99" , carbs: "10 Carbs"},
  
  {id: 2, image: "https://www.noshtastic.com/wp-content/uploads/2018/08/low-carb-beef-and-broccoli-sq-1-of-1.jpg" , title: "Steak and Broccoli", description: "Our delicious marinated steak grilled over a flame, paired with steam broccoli." , price: "$17.99" , carbs: "4 Carbs"},
  
  {id: 3, image: "https://www.justataste.com/wp-content/uploads/2016/06/skinny-shrimp-scampi-photo.jpg" , title: "Shrimp Scampi", description: "Well seasone, shrimped layed over a bed of zucchini noodles." , price: "$10.99" , carbs: "5 Carbs"},
  
  {id: 4, image: "https://dadwithapan.com/wp-content/uploads/2017/08/Steak-Shrimp-Paleo-Bowl-1-656x875.jpg" , title: "Shrimp and Steak Bowl with Veggies", description: "Our famously marinated steak and sauted shrimp paired with a vegetable melody." , price: "$13.99" , carbs: "4 Carbs"},
  
]

  menuItemsSteakShrimp.forEach(function(item){
    let cards = $(`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <button class="btn" id="tacos">Order</button>
  </div>
</div>  
  
  `)
    
   $('.main').append(cards);
    return cards;
  })
  
 $(".btn").on('click', function(){
     window.location = "/orderpage";    
});


}



