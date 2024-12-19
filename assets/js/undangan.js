function musikUndangan(){
    const musik = document.querySelector('#kotak-musik');
    musik.style.display = 'block';
    const lagu = document.querySelector('#lagu');
    lagu.play();
}

function putarLagu(){
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector ('#kontrol');

    if(lagu.paused){
        lagu.play();
        tombol.src = 'assets/img/music1.png';
    }else{
        lagu.pause();
        tombol.src = 'assets/img/musik2.png';
    }
}

function copyAccount() {
    const accountDetails = "Bank Account: 123456789";
    navigator.clipboard.writeText(accountDetails).then(() => {
        alert("Detail rekening telah disalin!");
    });
}
