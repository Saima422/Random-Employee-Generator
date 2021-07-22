const arr = [];

let generateBtn = document.getElementById('generate-emp');
let refresh = document.getElementById('refresh');

const refreshArray = () => {
    arr.length = 0;
    displayOnDOM(`<div></div>`);
    return ;
}

window.onload = refreshArray;
refresh.addEventListener('click', refreshArray);


const randomEmp = () => {
    let randomIndex = Math.floor(Math.random()*team.length);

    while(1) {
        if(!arr.includes(randomIndex)){
            arr.push(randomIndex);
            break;
        }
        if(arr.length == team.length){
            refreshArray();
        }
        randomIndex = Math.floor(Math.random()*team.length);
    }

    let randomEmp = team[randomIndex];
    let empCard = generateCard(randomEmp);
    displayOnDOM(empCard);
}

generateBtn.addEventListener('click', randomEmp);

const generateCard = (e) => {
    const card = `
        <div class="card" style="width: 18rem;" id="${e.empid}">
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <h4>${e.company}</h4>
              <a href="#" class="btn btn-primary">View Profile</a>
            </div>
        </div>`;
    
    return card;
}

/* <button class="btn btn-primary delete" onclick="deleteEmployee(event,'${e.empId}')">Delete</button>  */


const displayOnDOM = (empCard) => {
    const targetDiv = document.getElementById('random-emp-card');
    targetDiv.innerHTML = empCard;
}









// const randonEmp = () => {

// }