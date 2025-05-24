let reservation =
{
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
}

function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    if( document.querySelector(`.${className}`) != null){
    document.querySelector(`.${className}`).classList.remove('hidden');
    }
}

document.querySelector('#new-reservation').addEventListener('click', (e) => cleanData(e));

function cleanData(e) {
    e.preventDefault(); // спира submit-а на бутона
    changeContent('search-form-content');
}

function submitGuestDetails() {
    reservation.name = document.getElementById('guestName').value;
    reservation.phone = document.getElementById('guestPhone').value;
    reservation.email = document.getElementById('guestEmail').value;

    alert(`Guest submitted:\nName: ${reservation.name}\nPhone: ${reservation.phone}\nEmail: ${reservation.email}`);

    // Показване на thank-you
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    document.querySelector('.thank-you-content.custom-form').classList.remove('hidden');
}