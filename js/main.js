function parallax(event) {

    //this.getElementById('tower').style.transform = translateX(event.clientX + 'px');
    console.log(this.getElementById('tower').style.transform = 'translateX(' + (-event.clientX) / 100 + 'px)');
}

document.addEventListener('mousemove', parallax);