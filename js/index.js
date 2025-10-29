const gdSection = document.getElementById('gridSection');
const formcont = document.querySelector('.form-container');
const formsection =document.getElementById('form_user');
console.log(formcont)

gdSection.addEventListener('click',function (detector) {
const day = detector.target.closest('.small_container');
day.style.backgroundColor = 'red';
formsection.style.display = 'block';
// formsection.classList.toggle('.tg-function')
})

// <div class="fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0" >hello mate</div>


function add(whichday){
    let name = document.getElementById('name').value;
    whichday.appendChild(`<div class="fs-6 bg-warning rounded-1 d-flex align-items-center justify-content-center p-0" > ${name}</div>`)
}



//if user press anywhere than grid section


gdSection.addEventListener('click',function (e) {
    if (e.target === formsection) {
        formsection.style.display = 'none';
    }

})



//
//
// section.addEventListener('click', function(detector) {
//     const day = detector.target.closest('.small_container');
//
//         formcont[0].style.display = 'block';
//
//         function addReservation(e) {
//             e.preventDefault();
//
//             // Create reservation div with delete/modify buttons
//             const reservationDiv = document.createElement('div');
//             reservationDiv.innerHTML = `
//                 <span>Reservation</span>
//                 <button class="btn-modify">Edit</button>
//                 <button class="btn-delete">Delete</button>
//             `;
//
//             // Delete listener
//             reservationDiv.querySelector('.btn-delete').addEventListener('click', function() {
//                 reservationDiv.remove();
//             });
//
//             // Modify listener
//             reservationDiv.querySelector('.btn-modify').addEventListener('click', function() {
//                 // Show form with existing data
//                 formcont[0].style.display = 'block';
//             });
//
//             day.appendChild(reservationDiv);
//             formcont[0].style.display = 'none';
//         }
//
//         document.querySelector('form').onsubmit = addReservation;
//
// });
//
//




