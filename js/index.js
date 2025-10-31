const gdSection = document.getElementById('gridSection');
const formcont = document.querySelector('.form-container');
const formsection = document.getElementById('form_user');

let day = 0; //div selected to store it


function formOnOff() {
    formsection.classList.toggle('tgFunction');
}


function getForm() {
    const data = {
        client: document.getElementById('clientName').value,
        start: document.getElementById('startTime').value,
        end: document.getElementById('endTime').value,
        nPerson: document.getElementById('numberOfPeople').value,
        type: document.getElementById('reservationType').value
    }
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
})

// <div class="fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0" >hello mate</div>


formcont.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = getForm();
    let validjs = data.client.trim();
    // let error= false;
    for (let i=0; i<validjs.length; i++) {

        if (!isNaN(validjs[i]) && validjs[i] !== " "){
            alert("client name cannot contain numbers");
            return;
        }
    }

    if (data.client === "" || data.start === "" || data.end === "" || data.type === "" || data.nPerson === "") {
        alert("please fill all fields");
        return;
    }

    if(data.start > data.end) {
        alert("start time before end time");
        return;
    }
    if (data.nPerson < 1 || data.nPerson > 10) {
        alert("number of people must be between 1 and 10");
        return;
    }
    // if (!error) { return cancel no need :)

        add(day, data);
        formcont.reset();
        formOnOff()

});


//c oblige poiur que l'utilisateur click outside de la form pour la ferme
formsection.addEventListener('click', function (e) {
    if (e.target === formsection) {
        formOnOff();
        formcont.reset();
    }

})


function add(whichday, getform) {
    const reservationDiv = document.createElement('div');
    reservationDiv.className = 'scaleR reservation fs-lg-6 rounded-1 d-flex align-items-center justify-content-between ps-1 pe-1 '



    //styling colors need to add text color too , je peux ajouter une animation sur vip
    if (getform.type === "standard"){
        reservationDiv.style.backgroundColor = 'green';
    }
    else if (getform.type === "birthday"){
        reservationDiv.style.backgroundColor = 'blue';
    }
    else if (getform.type === "group"){
        reservationDiv.style.backgroundColor = 'white';
    }
    else if (getform.type === "vip"){
        reservationDiv.style.backgroundColor = 'yellow';
    }


    reservationDiv.innerHTML = `<span>${getform.start.slice(0,2)}-${getform.end.slice(0,2)}</span>
<span>${getform.client.slice(0,8)}</span>
        <div class="d-flex justify-content-between align-items-center gap-1  ">
            <button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-remove"><i class="fa-solid fa-trash"></i></button>
        </div>`;

    // reservationDiv.addEventListener('mouseover', function (e) {
    //     e.stopPropagation()
    //     reservationDiv.querySelector('.btn-remove').style.display = 'inline-block';
    //     reservationDiv.querySelector('.btn-edit').style.display = 'inline-block';
    // })  solved through css hover
    reservationDiv.querySelector('.btn-remove').addEventListener('click', function (e) {
        e.stopPropagation()
        reservationDiv.remove();
    });

    reservationDiv.querySelector('.btn-edit').addEventListener('click', function (e) {
        e.stopPropagation()
        // Show form with existing data
         console.log("u clicked modify")
        day = whichday;
       document.getElementById('clientName').value = getform.client
     document.getElementById('startTime').value= getform.start
    document.getElementById('endTime').value=getform.end
        document.getElementById('numberOfPeople').value = getform.nPerson
        document.getElementById('reservationType').value = getform.type
        formOnOff()
        console.log("skipped toggle")
        reservationDiv.remove();

        // document.getElementById('clientName').value = getform.client
        // document.getElementById('startTime').value = getform.start
        // document.getElementById('endTime').value = getform.end
        // document.getElementById('reservationType').value = getform.type
    });
    whichday.appendChild(reservationDiv);
}



//if user press anywhere than grid section




