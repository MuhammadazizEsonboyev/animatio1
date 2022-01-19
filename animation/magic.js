
document.addEventListener('keyup', (event) => {
    var name = event.key;
    let car = document.querySelectorAll('.car img');
    // let car2 = document.querySelector('.car .active');
    console.log(car);


    if (name == 'w') {
        car[0].style.display = 'block'
        car[1].style.display = 'none'
    }
    else if (name != 'w') {
        car[1].style.display = 'block'
        car[0].style.display = 'none'
    }


});
