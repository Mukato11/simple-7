// task-with XML


let XmlTaskDiv = document.querySelector('.XmlTask');

function LoadData() {
    let OneRequest = new XMLHttpRequest();
    OneRequest.open('GET', "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");


    OneRequest.addEventListener('load', function() {;
    
    let response = this.responseText;
    let responseJs = JSON.parse(response);
    console.log(responseJs);

    let XmlTaskUi = document.createElement('ul');
    let XmlTaskLi = document.createElement('li');

    
    XmlTaskLi.textContent = responseJs.meals[2].strMeal + " " + responseJs.meals[2].strMealThumb;
    XmlTaskUi.appendChild(XmlTaskLi);
    XmlTaskDiv.appendChild(XmlTaskUi);
    });

    OneRequest.addEventListener('error', function() {
        let XmlTaskError = document.createElement('p');
        XmlTaskError.textContent = "Error with the request";
        XmlTaskDiv.appendChild(XmlTaskError);
        

    });

    OneRequest.send();
}

   LoadData();




// task-with Fetch

let FetchTaskDiv = document.querySelector('.FetchTask');

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
})

  .then(function(responesNew) {
    if(!responesNew.ok) {
        throw new Error();
    }
    return responesNew.json();
  })


  .then(function(data) {
    console.log(data);
    let FetchTaskUl = document.createElement('ul');

    data.forEach(function(user) {
        let FetchTaskLi = document.createElement('li');    
        FetchTaskLi.textContent = `${user.company.name}`;
        FetchTaskUl.appendChild(FetchTaskLi)        
    });

    FetchTaskDiv.appendChild(FetchTaskUl);
  })

    .catch(function(error) {
        console.log(error);
        let FetchTaskError = document.createElement('p');
        FetchTaskError.textContent = "Error with the request";
        FetchTaskDiv.appendChild(FetchTaskError);    
    });
    
    



    
