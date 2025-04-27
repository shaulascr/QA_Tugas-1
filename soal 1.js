const ages = [12, 5, 8, 10, 29, 19];

function determineAge(ages) {

    const result = {
        child: 0,
        teen: 0,
        adult: 0,
        elder: 0
    };

    ages.forEach(age => {
        
        if (age >= 0 && age <= 12) {
            result.child++;
        } else if (age > 12 && age < 18) {
            result.teen++;
        } else if (age > 17 && age < 60) {
            result.adult++;
        } else if (age > 59) {
            result.elder++;
        }
    });

    return result;
}

const hasilUmur = determineAge(ages);

console.log(`Anak anak: ${hasilUmur.child} orang`);
console.log(`Remaja: ${hasilUmur.teen} orang`);
console.log(`Dewasa : ${hasilUmur.adult} orang`);
console.log(`Lansia: ${hasilUmur.elder} orang`);