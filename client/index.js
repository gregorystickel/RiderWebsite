const options = {
    method: 'GET',
    url: 'https://pro-cycling-stats.p.rapidapi.com/riders',
    headers: {
      'X-RapidAPI-Key': '6c6a650323msh4e92ec679eccab3p1b5200jsnd3c0c4917891',
      'X-RapidAPI-Host': 'pro-cycling-stats.p.rapidapi.com'
    }
  };

//let urlteam =
  
function getRider () {
    console.log('button clicked!')
    axios.request(options).then(function (response) {
         console.log(response.data);
         let {name, team, height, weight} = response.data[0]["Main info"]
         let image = response.data[0]["Main info"]["riders photo url"]
         console.log(name, team, height, weight, image);
         let div = document.createElement("div")
         div.innerHTML = `<img src="${image}" alt="rider"><br>Rider name: ${name}<br>Team: ${team}<br>Height: ${height}<br>Weight: ${weight}`
         //let p = document.createElement("p")
         document.body.appendChild(div)
    }).catch(function (error) {
         console.error(error);
    });
}
function getSpecRider(riderName) {
console.log("Button clicked")
axios.request(options).then(function (response) {
    
    console.log(riderName)
    let selection = "";
    for (const key in response.data){
        
        console.log(response.data[key].name)
        if (riderName === response.data[key].name){
          selection = response.data[key]
        }
    }
    console.log(selection);
    let {name, team, height, weight} = selection
    console.log(name, team, height, weight);
    // let image = response.data[0]["Main info"]["riders photo url"]
    // console.log(name, team, height, weight, image);
    // let div = document.createElement("div")
    // div.innerHTML = `<img src="${image}" alt="rider"><br>Rider name: ${name}<br>Team: ${team}<br>Height: ${height}<br>Weight: ${weight}`
    // //let p = document.createElement("p")
    // document.body.appendChild(div)
}).catch(function (error) {
    console.error(error);
});
}

let getRiderBtn = document.getElementById("getRider")
//console.log(getRiderBtn)
getRiderBtn.addEventListener(`click`, getRider)
//let getAllRidersBtn = document.getElementById("getAllRiders")
//getAllRidersBtn.addEventListener('click', getAllriders)
let submitButton = document.getElementById("submit")
console.log(submitButton)
submitButton.addEventListener('click', function(){
    event.preventDefault();
    getSpecRider(document.getElementById("riderSelection").value);
});