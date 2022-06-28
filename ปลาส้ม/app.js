function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector('.history-card').style.display = 'none'
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('.history-card').style.display = 'block'
}

let members = [
    {
        name: "กิตติธร เหลาะหมาน",
        no: "1",
        position: "รองหัวหน้ากลุ่ม",
        image: "images/not.jpg"
    },
    {
        name: "จิตติพัฒน์ ตุ้ยนะ",
        no: "3",
        position: "หัวหน้ากลุ่ม",
        image: "images/tum.jpg"
    },
    {
        name: "ศนิชา ศรีผล",
        no: "31",
        position: "เลขานุการ",
        image: "images/sanicha.jpg"
    },
    {
        name: "ธนาดร ยิ้มละม่อม",
        no: "8",
        position: "สมาชิกในกลุ่ม",
        image: "images/golf.jpg"
    },
    {
        name: "ธัญชนก แดงศรีวัลย์",
        no: "17",
        position: "สมาชิกในกลุ่ม",
        image: "images/fah.jpg"
    },
    {
        name: "อรอุมา ณ อุบล",
        no: "35",
        position: "สมาชิกในกลุ่ม",
        image: "images/pan(1).jpg"
    }
]

let card = '';
members.map((member) => {
    card += `<div class="card" style="width: 18rem;">`
    card += `<img src="${member.image}" class="card-img-top" alt="...">`
    card += `<div class="card-body">`
    card += `<p class="card-text">${member.name}</p>`
    card += `<p class="card-text">เลขที่: ${member.no}</p>`
    card += `<p class="card-text">ตำแหน่ง: ${member.position}</p>`
    card += `</div>`
    card += `</div>`
})

document.querySelector('.history-card').innerHTML = card

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});