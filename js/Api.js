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
        // console.log(datas);
        const newsCards = document.getElementById('news-cards');
        newsCards.innerHTML = '';
        // console.log(newsCards);
        datas.forEach(data =>{
          console.log(data);
          const newsDiv = document.createElement('div');
          // console.log(newsDiv);
          newsDiv.classList.add('row');
          newsDiv.innerHTML = `
          <div class="col-md-4">
          <img src="${data.thumbnail_url}"class=" rounded-start w-100 h-75" alt="...">
          </div>
          <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.details}</p>
            <div class="main d-flex justify-content-between">
            <div class="author d-flex gap-3">
              <div class="img">
              <img src="${data.author.img}" class="">
              </div>
              <div class="author-details">
              <p>${data.author.name}</p>
              <p>${data.author.published_date}</p>
              </div>
            </div>
            <div class="view">
             <p>${data.total_view}k</p>
            </div>
            <div class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            
            </div>
            <div class="arrow-icon">
            <i class="fa-solid fa-arrow-right"></i>
            </div>
           </div>
          </div>
        </div>

          `;
            newsCards.appendChild(newsDiv);
        });

 }

loadCategories();