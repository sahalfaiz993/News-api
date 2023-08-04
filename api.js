let getNews = (search,page) =>{
fetch(`https://api.worldnewsapi.com/search-news?api-key=ef5b22024b944f9c9c9150c52008b50c&text= 
${search}&offset=${page?page:0}numbr=12`)
     .then(res =>res.json())
     .then(res => {console.log(res)
let news = document.getElementById("news");
const articles = res.news
for(var i=0;i<articles.length;i++){
    const {image, title, text} = articles[i];
    console.log(articles[i])
    news.innerHTML +=`
    <div class="card mt-2" style="width: 18rem;">
    <img src="${image}" class=" news-image  card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title.slice(0,20)}...</h5>
      <p class="card-text">${text.slice(0,50)}...</p>
      
    </div>
  </div>`
}



    })
    .catch(err=> console.log(err))

}
getNews()


let page = 1;

let newsSearch = () =>{
    let news = document.getElementById("news");
    let search = document.getElementById("search");

    news.innerHTML= ""
    getNews(search.value);
}

let loadMore = ()=>{
    let search = document.getElementById("search")
    page++
    getNews(search.value,page)
}