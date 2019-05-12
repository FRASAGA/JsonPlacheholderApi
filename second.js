var div = document.getElementById('users');
var con = 0

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      return res.json();
    })
    .then((post)=>{
        for(let i = 0; i < 1;i++){
            //const e = array[i];
            div.innerHTML+=
            `
            <div class= "card">
                          
                <div class="card-body">
                    <h5 class="card-title">${post[con].userId}</h5>
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
    getPost()
}