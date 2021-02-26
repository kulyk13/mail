//Global variables
let SENDERS = JSON.parse(DATA);
const mailListEl = document.getElementById('mailList');
const btnRefrshEl = document.getElementById('btnRefresh');
const messageEl = document.querySelectorAll('.letter');
const allCountEl = document.getElementById('allCount')
const unreadCountEl = document.getElementById('unreadCount')
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
        SENDERS = JSON.parse(DATA)
        renderLetters(SENDERS, mailListEl)
    }
})

mailListEl.addEventListener('click', event => {
    const letterEl = event.target.closest('.letter');
    console.log('click on letter')
    if (letterEl) {
        const letterId = letterEl.dataset.id
        console.log(letterId);
        SENDERS.forEach((message, i, array) => {
            if (message.id == letterId) {
                if (!message.seen) {
                    array[i] = {...array[i], seen: true}
                } else{
                    array.splice(i, 1)
                }
            }
        })
        renderLetters(SENDERS, mailListEl)
    }
})


renderLetters(SENDERS, mailListEl)

function renderLetters(data_array, element) {
    let html = '';
    allCountEl.textContent = data_array.length
    unreadCountEl.textContent = data_array.filter(mess => !mess.seen).length
    data_array.sort((a,b) => {
        return a.seen - b.seen || b.date - a.date
    })
    data_array.forEach(letter => {
        html += createLetterHTML(letter);
    });
    element.innerHTML = html;
}

function createLetterHTML(letter_data) {
    return `<div class="letter d-flex align-items-center py-3 ps-4 col mb-2" data-id="${letter_data.id}">
    <i class="text-primary me-3 ${letter_data.seen ? 'far' : 'fas'} fa-circle"></i>
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



// console.log(1);
// let result = null
// setTimeout(() => {
//     console.log(2.1);
//     result = 20
// }, 0);
// setTimeout(() => {
//     console.log(2.2);
// }, 0);
// setTimeout(() => {
//     console.log(2.3);
//     console.log(result);
// }, 0);


// for (let i = 0; i < 1000000000; i++) {
//     i*2
// }



// function getAsyncData(cb) {
//     setTimeout(() => {
//         let rand = (Math.random() * 10).toFixed(0)
//         cb(rand)
//     }, Math.random() * 3000);
// }


// getAsyncData(result => {
//     console.log(result);
// })


function getAsyncData() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let rand = (Math.random() * 10).toFixed(0)
            if (rand > 5) {
                resolve(rand)
            } else{
                reject({error: 'Num is very small', result: rand})
            }
        }, Math.random() * 3000);
    })
}

const promiseResult = getAsyncData()

promiseResult
    .finally(() => console.log('Finally! Yahoo!!'))
    .then(result => console.log('then',result))
    .catch(error => console.log('catch',error))
    



// let aa = {
//     num: 5
// }

// console.log(aa);

// setTimeout(() => {
//     aa.num = 25
// }, 2000);