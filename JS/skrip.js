function dataPerson() {
    // Tugasny adalah lengkapi kode berikut dan tampilkan hasilnya ada pada HTML 
    // isian nama, isian pekerjaan, isian hobby
    let nama = document.getElementById('nama').value;
    let pekerjaan = document.getElementById('pekerjaan').value;
    let hobby = document.getElementById('hobby').value;

    let hasil = "<h2>Hasil Input</h2>";
    hasil = "Nama: " + nama + "<br>";
    hasil += "Pekerjaan: " + pekerjaan + "<br>";
    hasil += "Hobby: " + hobby;

    document.getElementById('hasil').innerHTML = hasil;
}
