var jamnow = new Date().getHours();

let kondisi = "Hi, ";

if ( jamnow <= 10 ) {
    kondisi += "Selamat Pagi"
} else if ( jamnow <= 14 ) {
    kondisi += "Selamat Siang"
} else if ( jamnow <= 17 ) {
    kondisi += "Selamat Sore"
} else if ( jamnow <= 23 ) {
    kondisi += "Selamat Malam"
}

document.getElementById('header').innerHTML=kondisi
