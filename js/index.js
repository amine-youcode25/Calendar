const gdSection = document.getElementById('gridSection');
const formcont = document.querySelector('.form-container');
const formsection = document.getElementById('form_user');

let day = 0;


function formOnOff() {
    formsection.classList.toggle('tgFunction');
}


function getForm() {
    const data = {
        client: document.getElementById('clientName').value,
        start: document.getElementById('startTime').value,
        end: document.getElementById('endTime').value,
        type: document.getElementById('reservationType').value
    }
    return data;
}


gdSection.addEventListener('click', function (detector) {
    day = detector.target.closest('.small_container');
    // day.style.backgroundColor = 'red'; for debug
    formOnOff();

// formsection.classList.toggle('.tg-function')
})

// <div class="fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0" >hello mate</div>


formcont.addEventListener('submit', function (e) {
    e.preventDefault();
    getForm();
    add(day, getForm());
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
    reservationDiv.className = 'reservation fs-6 rounded-1 d-flex align-items-center justify-content-around p-0'



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


    reservationDiv.innerHTML = `<span>${getform.client}</span>
        <span>${getform.start} - ${getform.end}</span>
        <div>
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
        reservationDiv.remove();
        day = whichday;
       document.getElementById('clientName').value = getform.client
     document.getElementById('startTime').value= getform.start
    document.getElementById('endTime').value=getform.end
        document.getElementById('reservationType').value = getform.type
        formOnOff()
        console.log("skipped toggle")

        // document.getElementById('clientName').value = getform.client
        // document.getElementById('startTime').value = getform.start
        // document.getElementById('endTime').value = getform.end
        // document.getElementById('reservationType').value = getform.type
    });
    whichday.appendChild(reservationDiv);
}



//if user press anywhere than grid section







