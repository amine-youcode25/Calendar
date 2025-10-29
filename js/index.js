const gdSection = document.getElementById('gridSection');
const formcont = document.querySelector('.form-container');
const formsection = document.getElementById('form_user');

let day = 0;


function formOnOff(){
    formsection.classList.toggle('tgFunction');
}


function getForm(){
    const data={
        client: document.getElementById('clientName').value,
        start: document.getElementById('startTime').value,
        end: document.getElementById('endTime').value,
        type: document.getElementById('reservationType').value
    }
    return data;
}



gdSection.addEventListener('click', function (detector) {
    day = detector.target.closest('.small_container');
    day.style.backgroundColor = 'red';
    formOnOff();

// formsection.classList.toggle('.tg-function')
})

// <div class="fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0" >hello mate</div>





    formcont.addEventListener('submit', function (e) {
        e.preventDefault();
        getForm();
        add(day,getForm());
        formcont.reset();
        formOnOff();
    });




//c oblige poiur que l'utilisateur click outside de la form pour la ferme
formsection.addEventListener('click', function (e) {
    if (e.target === formsection) {
        formOnOff();
        formcont.reset();
    }

})












function add(whichday,getform) {
    const reservationDiv = document.createElement('div');
    reservationDiv.className = 'fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0'
    reservationDiv.innerHTML= `<span>${getform.client}</span>
        <span>${getform.start} - ${getform.end}</span>
        <div>
            <button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-remove"><i class="fa-solid fa-trash"></i></button>
        </div>`;
    reservationDiv.querySelector('.btn-remove').addEventListener('click', function() {
        reservationDiv.remove();
    });


    reservationDiv.querySelector('.btn-edit').addEventListener('click', function() {
        // Show form with existing data

    });
    whichday.appendChild(reservationDiv);
}


//if user press anywhere than grid section







