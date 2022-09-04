const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCatagories(data.data.news_category));

}

displayCatagories = Categories =>{
    const categoriList = document.getElementById('news-catagory');
  //  console.log(Categories);
   Categories.forEach(category =>{
    // console.log(category);
    const categoriDiv = document.createElement('li');
    categoriDiv.innerHTML = `
      <a  href="#" class="category" onclick="loadId('${category.category_id}')">${category.category_name}</a>
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
        console.log(datas);
        const newsCards = document.getElementById('news-cards');
        newsCards.innerHTML = '';
        // console.log(newsCards);
        datas.forEach(data =>{
          const newsDiv = document.createElement('div');
          // console.log(newsDiv);
          newsDiv.classList.add('row', 'mb-3');
          newsDiv.innerHTML = `
          <div class="col-md-4">
          <img src="${data.thumbnail_url}" class="img-fluid rounded-start w-100" alt="...">
          </div>
          <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

          `;
            newsCards.appendChild(newsDiv);
        });

 }

loadCategories();