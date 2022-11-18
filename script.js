
function openInNewTab(userCoord){
    localStorage.setItem('userCoords',userCoord);
    location.href="yandex.html"
   
}


;(async function loadData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let body = await response.json();
     localStorage.setItem("items",JSON.stringify(body)) 

     let users = JSON.parse(localStorage.getItem("items"));
     let list = document.querySelector("#ul");

     
     
    for(let user of users){
        let userCoord = `${user.address.geo.lat},${user.address.geo.lat}`
            list.innerHTML += `<li>
            <p onclick = "openInNewTab(userCoords)">${user.name}</p>
            </li>`
           ;
          
}
        return userCoord;
    })();

