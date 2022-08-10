# Pojokding CLI
Pojokoding CLI adalah aplikasi command line untuk berinteraksi dengan fitur latihan dan proyek di Pojokoding.

## Instalasi
```
npm install -g pojokoding-cli
```
Install aplikasi CLI secara global sehingga aplikasi dapat diakses di setiap _directory_

## Cara kerja

1. Pojokoding CLI akan menginstall folder proyek yang akan menjadi tempat untuk melakukan dan menyelesaikan latihan

Jika kamu menjalankan perintah sebagai berikut

```
poko latihan javascript/1
```

Maka Pojokoding CLI akan membuat folder latihan javascript sebagai berikut

```
javascript-1-manipulasi-string
```

2. Didalam folder proyek terdapat file kerja sebagai tempat user untuk menyelesaikan proyeknya

nama default dari file kerja adalah `index.js` di file inilah user bisa menuliskan solusi terhadap permasalahan yang diberikan

3. Didalam folder proyek juga terdapat file panduan pengerjaan yang berisikan soal dari latihan dan persayaratan yang harus dipenuhi oleh user

4. Terakhir adalah folder test, yaitu folder yang berisikan rangkaian test untuk menguji ketepatan program yang dibuat oleh user.

5. Jika user berhasil membuat program yang ditugaskan, maka user dapat mensubmit program tersebut, jika benar, latihan akan secara otomatis terselesaikan

## TODO

- Auth
- Get latihan
- Test latihan
- Submit latihan
- Validasi jawaban
- Handle jawaban benar

## Security

- Proof Key for Code Exchange (PKCE)
- Proxy