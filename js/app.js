//Global variables
let SENDERS = JSON.parse(DATA);
const mailListEl = document.getElementById('mailList');
const btnRefrshEl = document.getElementById('btnRefresh');
const dateFormater = new Intl.DateTimeFormat();
const timeFormater = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit'
});

// {
//     "id": 1,
//     "phone": "+63 (924) 979-2252",
//     "name": "Guss Marvelley",
//     "message": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
//     "avatar": "https://robohash.org/repellendusimpeditnisi.png?size=50x50&set=set1",
//     "date": "1609595510000",
//     "seen": false
//   },



btnRefrshEl.addEventListener('click', event => {
    const btnEl = event.target.closest('.btn-refresh');
    console.log('Click')
    if (btnEl) {
    renderLetters(SENDERS, mailListEl)
    }
})

mailListEl.addEventListener('click', event => {
    const letterEl = event.target.closest('.letter');
    console.log('click on letter')
    
})


renderLetters(SENDERS, mailListEl)

function renderLetters(data_array, element) {
    let html = '';

    data_array.forEach(letter => {
        html += createLetterHTML(letter);
    });
    element.innerHTML = html;
}

function sortLetters(letter) {

}


function createLetterHTML(letter_data) {
    if (letter_data.seen == false) {

    }
    return `<div class="letter d-flex align-items-center py-3 ps-4 col">
    <img src="${letter_data.avatar}"
        width="1" height="1" loading="lazy" class="avatar"
        alt="avatar">
    <div class="contact-block col-3 ms-3">
        <h2 class="fs-5">${letter_data.name}</h2>
        <a href="tel:${letter_data.phone}"
            class="tel m-0 text-decoration-none">${letter_data.phone}</a>
    </div>
    <p class="m-0 lh-sm">${letter_data.message}</p>
    <div class="date-time-block col-4 text-center">
        <span class="col-4">${timeFormater.format(letter_data.date)}</span>
        <span>${dateFormater.format(letter_data.date)}</span>
    </div>
</div>`
}