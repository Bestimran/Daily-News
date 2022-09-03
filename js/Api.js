const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCatagories(data.data.news_category));

}

displayCatagories = Categories =>{
    const categoriList = document.getElementById('news-catagory');
//    console.log(Categories);
   Categories.forEach(category =>{
    // console.log(category);
    const categoriDiv = document.createElement('li');
    categoriDiv.innerHTML = `
      <a href="#" class="pen" onclick="loadId('${category.category_id}')">${category.category_name}</a>
    `;
    categoriList.appendChild(categoriDiv);
   });
       
    
  
   
}
 const loadId = (id) =>{
   const url = `https://openapi.programming-hero.com/api/news/category/${id}`
   fetch(url)
   .then(res => res.json())
   .then(data =>displayId(data.data));
 }

 const displayId = (datas) =>{
        // console.log(datas);
        datas.forEach(data =>{
            console.log(data);
        });

 }

loadCategories();