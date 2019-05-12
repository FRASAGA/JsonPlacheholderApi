var btn= document.getElementById("btn").addEventListener("click",getPost);
var con=0
var div= document.getElementById("cardDiv")

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
      return res.json();
    })
    .then((post)=>{
        for(let i = 0; i < 1;i++){
            //const e = array[i];
            div.innerHTML+=
            `
            <div class= "card">
                <img class="card-img-top" src="${post[con].thumbnailUrl}">            
                <div class="card-body">
                    <h5 class="card-title">${post[con].id}</h5>
                    <p class="card-text">${post[con].title}</p>
                </div>
            </div>            
            
            `


            con=con+1;
        }
    })
    .catch((error)=>{
        console.log(error)
    })
}
