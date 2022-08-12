##### User

- User membuat folder yang memuat semua latihan dalam sebuah kursus secara manual

- Didalam folder yang baru saja dibuat, user akan melakukan `poko kursus` (akan muncul inquirer) untuk membuat folder utama latihan dengan setiap dependencies didalamnya

    - *Test library yang digunakan adalah mocha dan akan diinstall secara global oleh user

- setiap kursus hanya memiliki satu folder utama

- Didalam folder utama, user akan melakukan command `poko latihan` (akan muncul inquirer). command ini akan melakukan instalasi folder yang berisi soal, file jawaban, dan test

- user harus masuk (cd) ke folder latihan lalu menjawab soal

- setelah menjawab soal, user akan melakukan test dengan melakukan command `poko test`

- jika test berhasil maka user akan disarankan untuk melakukan submit jawaban

- saat submit test akan dijalankan lagi

- jika jawaban terbukti benar, aplikasi akan melakukan post request kepada server yang akan mengupdate progress latihan user menjadi "selesai"

##### Exercise Maker