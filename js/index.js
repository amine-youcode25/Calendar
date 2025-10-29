const gdSection = document.getElementById('gridSection');
const formcont = document.querySelector('.form-container');
const formsection = document.getElementById('form_user');



function getForm(){
    const data={
        client: document.getElementById('clientName').value,
        start: document.getElementById('startTime').value,
        end: document.getElementById('endTime').value,
        type: document.getElementById('reservationType').value
    }
}



gdSection.addEventListener('click', function (detector) {
    const day = detector.target.closest('.small_container');
    day.style.backgroundColor = 'red';
    formsection.style.display = 'block';




// formsection.classList.toggle('.tg-function')
})

// <div class="fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0" >hello mate</div>
























function add(whichday,getForm) {
    const reservationDiv = document.createElement('div');
    reservationDiv.className = 'fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0'
    reservationDiv.innerHTML= `<span>${getform.client}</span>
        <span>${getform.start} - ${getform.end}</span>
        <div>
            <button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-remove"><i class="fa-solid fa-trash"></i></button>
        </div>`
    whichday.appendChild(reservationDiv);
}

formcont.addEventListener('submit', function (e) {
    e.preventDefault();
    getForm();
    add(day);
    formcont.reset();
    formsection.style.display = 'none';
});


//if user press anywhere than grid section


formsection.addEventListener('click', function (e) {
    if (e.target === formsection) {
        formsection.style.display = 'none';
    }

})





