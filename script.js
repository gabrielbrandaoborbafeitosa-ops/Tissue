let lencos = 1000;
function lenco() {
    if (lencos == 0) {
        alert('Acabou')
    } else {
        lencos = lencos - 1 ;
    document.getElementById('txtcontador').innerText = lencos;
    }
}