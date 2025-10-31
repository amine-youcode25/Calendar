const gdSection = document.getElementById('gridSection'); //for thewhole grid sectionthat containes all days
const formcont = document.querySelector('.form-container');  //form of reservation
const formsection = document.getElementById('form_user'); //the section of form

let day = 0; //div selected to store where to put the reservation div
let  cancelDelete = 0; //if user click outside of form while modifying
let holdFormForModify = 0; //for user if he click outside of form while modifying so the old data back
function formOnOff() { //toggle form on and off show up
    formsection.classList.toggle('tgFunction');
}

//create array for storage
// let localStorageDate = [];
function getForm() { //function to get form data
    const data = {
        client: document.getElementById('clientName').value,
        start: document.getElementById('startTime').value,
        end: document.getElementById('endTime').value,
        nPerson: document.getElementById('numberOfPeople').value,
        type: document.getElementById('reservationType').value
    }
    // localStorageDate.push(data);
    return data;
}



gdSection.addEventListener('click', function (detector) {
    day = detector.target.closest('.small_container');
    if(!day) {
        return;
    }

    // day.style.backgroundColor = 'red'; for debug
    formOnOff();

// formsection.classList.toggle('.tg-function')
}) //event listener just to showup the form and get where we should put the reservation

// <div class="fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0" >hello mate</div>


formcont.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = getForm();
    let validjs = data.client.trim(); //to remove spaces aftere and before
    // let error= false;
    for (let i=0; i<validjs.length; i++) { //loop until find a number

        if (!isNaN(validjs[i]) && validjs[i] !== " "){
            alert("client name cannot contain numbers");
            return;
        }
    }

    if (data.client === "" || data.start === "" || data.end === "" || data.type === "" || data.nPerson === "") {
        alert("please fill all fields");
        return; //no empty fields
    }

    if(data.start > data.end) {
        alert("start time before end time");
        return; //fair enough
    }
    if (data.nPerson < 1 || data.nPerson > 10) {
        alert("number of people must be between 1 and 10");
        return; //interval for person nmber
    }
    // if (!error) { return cancel no need :)

        add(day, data); //add reservation to day
        formcont.reset(); //clean up form
        formOnOff() //toggle form off
        cancelDelete = 0; //to cancel delete if user click outside of form while modifying
    // }

});


//c oblige poiur que l'utilisateur click outside de la form pour la form to toggle off
formsection.addEventListener('click', function (e) {
    if (e.target === formsection) {
        if ( cancelDelete === 1) { //to canel delete if user click outside of form while modifying , so instead of delete the old data i put it back
            add(day, holdFormForModify);
             cancelDelete = 0;
        }
        formOnOff(); //toggle form off
        formcont.reset();
    }

})


function add(whichday, getform) {
    //make the reservationdiv adding classesfrom bootstrap
    const reservationDiv = document.createElement('div');
    reservationDiv.className = 'scaleR reservation  fs-lg-6 rounded-1  d-sm-block d-lg-flex d-md-flex align-items-center justify-content-between ps-1 pe-1 '


    reservationDiv.style.color = 'white';
    //styling colors need to add text color too , je peux ajouter une animation sur vip
    if (getform.type === "standard"){
        reservationDiv.style.backgroundColor = 'rgb(61, 219, 219)';
    }
    else if (getform.type === "birthday"){
        reservationDiv.style.backgroundColor = 'rgb(255, 9, 147)';
    }
    else if (getform.type === "group"){
        reservationDiv.style.backgroundColor = 'rgb(132, 211, 67)';
    }
    else if (getform.type === "vip"){
        reservationDiv.style.backgroundColor = 'rgb(255, 206, 12)';
    }

    //adding html inside the reservation div
    reservationDiv.innerHTML = `<div class="fs-small-1 fs-small-2"><span class="fs-numbers-md fs-numbers-sm">${getform.start.slice(0,2)}h-${getform.end.slice(0,2)}h</span>
<span>${getform.client.slice(0,12)}</span></div>
        <div class="d-flex d-sm-flex justify-content-evenly align-items-center gap-1 fs-7 fs-9 ">
            <button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-remove"><i class="fa-solid fa-trash"></i></button>
        </div>`;

    // reservationDiv.addEventListener('mouseover', function (e) {
    //     e.stopPropagation()
    //     reservationDiv.querySelector('.btn-remove').style.display = 'inline-block';
    //     reservationDiv.querySelector('.btn-edit').style.display = 'inline-block';
    // })  solved through css hover


    // create event listner on del icon so it delete the whole rev
    reservationDiv.querySelector('.btn-remove').addEventListener('click', function (e) {
        e.stopPropagation()
        reservationDiv.remove();
    });


    //create event listner on edit icon so it modify the rev

    reservationDiv.querySelector('.btn-edit').addEventListener('click', function (e) {
        e.stopPropagation() //to stop the event from bubbling up to the grid section
        // Show form with existing data
         console.log("u clicked modify")
        day = whichday;
        //makeform values same as current reservation or clicked on
        document.getElementById('clientName').value = getform.client
        document.getElementById('startTime').value= getform.start
        document.getElementById('endTime').value=getform.end
        document.getElementById('numberOfPeople').value = getform.nPerson
        document.getElementById('reservationType').value = getform.type
        formOnOff()
        console.log("skipped toggle")
        reservationDiv.remove();
         cancelDelete = 1;
         holdFormForModify = getform; //holding the old data to put it back if user click outside of form while modifying
        // document.getElementById('clientName').value = getform.client
        // document.getElementById('startTime').value = getform.start
        // document.getElementById('endTime').value = getform.end
        // document.getElementById('reservationType').value = getform.type
    });
    whichday.appendChild(reservationDiv); //implemnt the reservation div to the day
}