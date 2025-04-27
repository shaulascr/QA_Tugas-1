const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function tambah (a, b){
    return a + b;
}

function kurang (a, b) {
    return a - b;
}

function kali (a, b){
    return a * b;
}

function bagi (a, b) {
    return a/b ;
}

function calculator(operations, c, d){
    var text = "";
    var hasil = "";

    switch(parseInt(operations)){
        case 1:
            text = "Penjumlahan";
            hasil = tambah(c, d);
            break;
        case 2:
            text = "Pengurangan";
            hasil = kurang(c, d);
            break;
        case 3:
            text = "Perkalian";
            hasil = kali(c, d);
            break;
        case 4:
            text = "Pembagian";
            hasil = bagi(c, d);
        break;
        default:
            text = "Pilih Penjumlahan, Pengurangan, Pembagian, Perkalian"
            hasil = "-";
    }

    console.log(`\nOperasi: ${text}`);
    console.log(`Angka 1: ${c}`);
    console.log(`Angka 2: ${d}`);
    console.log(`Hasil: ${hasil}`);

    readline.close();
}

console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");

readline.question("\nMasukkan nomor 1 - 4: ", (operasiInput) => {
    readline.question("Masukkan angka pertama: ", (angka1Input) => {
      readline.question("Masukkan angka kedua: ", (angka2Input) => {
        const angka1 = parseFloat(angka1Input);
        const angka2 = parseFloat(angka2Input);
  
        if (!isNaN(angka1) && !isNaN(angka2)) {
          calculator(operasiInput, angka1, angka2);
        } else {
          console.log("Input angka tidak valid.");
          readline.close();
        }
      });
    });
  });