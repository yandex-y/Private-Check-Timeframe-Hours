//VARIABEL
const input_hours = document.getElementById('input-hours');
const input_minutes = document.getElementById('input-minutes');
const display = document.getElementById('display');
const header = document.getElementById('header');

//EVENT LISTENER
input_hours.addEventListener('input', (e) => {
    focusToMinutes(e.target, 2, input_minutes)
    validasiValue(e.target, 23)
    logic()
})
input_minutes.addEventListener('input', (e) => {
    validasiValue(e.target, 59)
    logic()
})
input_minutes.addEventListener('keydown', (e) => {
    focusToHours(e, input_hours)
})

//RUN FUNCTION
logic()
timeCondition()

//FUNCTION

function validasiValue(target, maxvalue) {
    if (target.value > maxvalue) {
        target.value = maxvalue
    }
}

function logic() {
    const getDateNow = new Date().getTime();
    const getDateTarget = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), parseInt(input_hours.value), parseInt(input_minutes.value), new Date().getSeconds(), new Date().getMilliseconds()).getTime();
    let calc = getDateTarget - getDateNow;

    if (calc < 0) {
        calc = calc + 86400000
    }

    const toHours = Math.floor(calc / 1000 / 60 / 60);
    const toMinutes = Math.floor((calc / 1000 / 60) - toHours * 60);

    if (input_hours.value.length == 0 || input_minutes.value.length == 0) {
        display.innerHTML = 'Masukkan Input Terlebih Dahulu'
    } else if (toHours == 0 && toMinutes == 0) {
        display.innerHTML = 'Now'
    } else {
        display.innerHTML = `Kurang ${toHours == 0 ? '': toHours + ' Jam'} ${toMinutes == 0 ? '': toMinutes + ' Menit'} Lagi`
    }
}

function timeCondition() {
    const getHours = new Date().getHours();
    let con;

    if (getHours < 11) {
        con = 'Pagi'
    } else if (getHours < 15) {
        con = 'Siang'
    } else if (getHours < 19) {
        con = 'Sore'
    } else {
        con = 'Malam'
    }

    header.innerHTML = 'Selamat ' + con
}

function focusToMinutes(target, maxlength, next) {
    if (target.value.length > 1) {
        next.focus()
    }
}
function focusToHours(e, to) {
    if (e.key == 'Backspace') {
        if (e.target.value.length == 0) {
            to.focus()
        }
    }
}