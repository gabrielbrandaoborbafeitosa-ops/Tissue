let lencos = 1000;
const som = new Audio('som.mp3');
function lenco() {
    if (lencos == 0) {
        alert('Acabou')
    } else {
        lencos = lencos - 1 ;
    document.getElementById('txtcontador').innerText = lencos;
    som.play() ;
    }
}
