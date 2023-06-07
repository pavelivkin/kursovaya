const bLeft = document.querySelector('.bLeft_js')
const bRigth = document.querySelector('.bRight_js')
const slider = document.querySelector('.slider')
const btn_buy = document.querySelector('.btn_buy_js')
const podloj = document.querySelector('.podloj')
const places = document.querySelector('.places')
const row1 = document.querySelector('.row1')
const seats = document.querySelectorAll('.seat')
const pocup = document.querySelector('.pocup')
const sale = document.getElementById('cost')
const all_plc = document.querySelector('.all_plc')
const ths = document.querySelector('.ths')
let offset = 0

bLeft.addEventListener('click', function levo(){
    if (offset>=0){
        offset=-990*5
    }
    offset+=990
    slider.style.left= offset + 'px'
})
function pravo(){
    if (offset<=-990*4){
        offset=990
    }
    offset-=990
    slider.style.left= offset + 'px'
}
setInterval(pravo, 3000)

btn_buy.addEventListener('click',function buy(){
    places.style.display = 'block'
    document.getElementsByTagName('body')[0].style.overflowY ='hidden'
    podloj.style.display = 'block'
    pocup.style.display = 'block'
    podloj.style.opacity = 80 + '%'
    seat.addEventListener('click', function place(){
        seat.backgroundColor = 'green'
    })

})

let cost = 0

seats.forEach(seat=>{
    seat.addEventListener('click', function(){
        if (this.style.backgroundColor==='green'){
            this.style.backgroundColor = 'white'
            cost-=350
            sale.textContent = cost + '₽'
        }
        else{
            this.style.backgroundColor = 'green'
            cost+=350
            sale.textContent = cost + '₽'
        }
    })
})
pocup.addEventListener('click', function(){
    if (cost===0){
        sale.textContent = 'Выберете место'
    }
    else{
        all_plc.style.display = 'none'
        ths.style.display = 'block'
    }
})
podloj.addEventListener('click', function(){
    places.style.display = 'none'
    podloj.style.display = 'none'
    pocup.style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY ='scroll'
})