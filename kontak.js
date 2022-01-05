document.getElementById('kontak-kirim').onclick = () => {
    var token = '2101951191:AAGrFvlQiKxtO5yX6ockEPIOGfxGtLa1sPE';
    var chatid = '-590057804';
    var msg = document.getElementById('kontak-pesan').value;

    if (msg == '' || msg == ' ' || msg == ' ' || msg == ' ' || msg == ' ' || msg == null) return alert("Pesanmu kosong brow, lawak :v");

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${msg}`,
        method: `POST`,
    }).then(() => {
        alert("Berhasil Mengirim Pesan");
        window.location.reload();
    }).catch(err => {
        return alert(err);
    })
}