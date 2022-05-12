const menuCategories = [
  {id: 1, image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" , title: "Appetizers"},
  {id: 2, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Burgers"},
  {id: 3, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Steak & Shrimp"},
  {id: 4, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Wings"},
  {id: 5, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Salads"},
  {id: 6, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Sides"},
  {id: 7, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Charcuterie"},
  {id: 8, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Lunches"},
  {id: 9, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Kids Menu"},
  {id: 10, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Desserts"}
  
]

function foodCategories(menuCategories){
menuCategories.forEach(function(category){
let cards = $(`
  <div class="card" style="width: 18rem;" >
    <img class="card-img-top" src="${category.image}" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">${category.title}</p>
    </div>
  </div>  


`)
$('.menu-categories').append(cards);
return cards;
}


}

                       
 function bootstrap(){
 foodCategories();
}

bootstrap();
