function foodCategories(){
 const menuCategories = [
  {id: 1, image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/01/taco-cups-6-500x500.jpg" , title: "Appetizers"},
  {id: 2, image: "https://www.ketodietyum.com/wp-content/uploads/2020/06/Keto-Bunless-Burger-Recipes.jpg" , title: "Burgers"},
  {id: 3, image: "https://www.heinens.com/wp-content/uploads/2020/07/Steak-and-Shrimp-Skillet_1_600x700.jpg" , title: "Steak & Shrimp"},
  {id: 4, image: "https://embed.widencdn.net/img/mccormick/ozgppyreoa/2024x1139px/Franks%20RedHot%20Original%20Buffalo%20Chicken%20Wings?crop=true&anchor=10,226&q=80&color=ffffffff&u=o2hyef" , title: "Wings"},
  {id: 5, image: "https://cdn.shopify.com/s/files/1/2364/6329/articles/primalkitchen_blog_kalesalad_03_2048x.jpg?v=1570834892" , title: "Salads"},
  {id: 6, image: "https://hip2keto.com/wp-content/uploads/sites/3/2019/10/Untitled-13.jpg?resize=1024%2C538&strip=all" , title: "Sides"},
  {id: 7, image: "https://www.lowcarbnomad.com/wp-content/uploads/2020/09/Keto-Breakfast-Charcuterie-Board-21-500x500.jpg" , title: "Charcuterie"},
  {id: 8, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20200204-keto-stuffed-cabbage-delish-ehg-9582-1582730138.jpg?crop=1.00xw:0.715xh;0,0.161xh&resize=480:*" , title: "Lunches"},
  {id: 9, image: "https://i1.wp.com/thebestketorecipes.com/wp-content/uploads/2020/08/keto-pizza-mini-muffins-5.jpg?fit=800%2C1174&ssl=1" , title: "Kids Menu"},
  {id: 10, image: "https://www.tapiocadelightpng.com/wp-content/uploads/2020/04/delish-sugar-free-cheesecake.jpg" , title: "Desserts"}
  
] 
 
 menuCategories.forEach(function(category){
  let cards = $(`
  <div class="card" style="width: 18rem;" >
    <img class="card-img-top" src="${category.image}" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">${category.title}</p>
    </div>
  </div>  
`).data('category', category);
$('.menu-categories').append(cards);
return cards;
 })
 
 $(".card").on('click', function(event){
  event.preventDefault();
  let option = $(this).closest('.card').data('category');
  console.log(option)
  let id = option.id
  console.log(id)
  localStorage.setItem('optionID', JSON.stringify(option.id))
  window.location = "/options";    
});
}


 function bootstrap(){
 foodCategories();
}

bootstrap();
