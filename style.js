document.getElementById('btn').addEventListener('click',() => {
    document.getElementById('education').innerHTML=``
    fetch(`http://universities.hipolabs.com/search?country=${document.getElementById('education-input').value}`)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data.results);
       for(let uni of data) {
           console.log(uni);
    document.getElementById("education").innerHTML +=
    `
    <div class="container-fluid">
             <div style="justify-content: space-around;" class="row">
                 <div style="width:74%;" class="col-md-3">
                 <a class="card" style="background-color: transparent;border:0 none;" href="#">
                 <div class="card__background" style="background-image: url(front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.avif)"></div>
                 <div class="card__content">
                   <p style=color:white class="card__category">${uni.name}</p>
                   <h3 class="card__heading">${uni.country}</h3>
                 </div>
               </a>
                 </div>
             </div>
         </div>
    `
    }
    })
})
// document.getElementById('btn').addEventListener