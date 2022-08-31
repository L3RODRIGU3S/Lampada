const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLamp () {
    return lamp.src.indexOf ( 'funcionando' ) > -1
}

function lampOn () {
    if ( !isLamp () ) {
        lamp.src = './img/lampada-acesa.png';
    }
}

function lampOff () {
    if ( !isLamp () ) {
        lamp.src = './img/lampada-apagada.png';
    }
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
