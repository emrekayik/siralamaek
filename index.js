// Import stylesheets
import './style.css';

const kabarcikSiralama = dizi => {
  let diziUzunlugu = dizi.length;

  for (let i = 0; i < diziUzunlugu - 1; i++) {
    for (let j = 0; j < diziUzunlugu - i - 1; j++) {
      if (dizi[j] > dizi[j + 1]) {
        let temp = dizi[j];
        dizi[j] = dizi[j + 1];
        dizi[j + 1] = temp;
      }
    }
  }

  return dizi;
};

let dizi = [56, 43, 21, 90, 789, 3, 0, 76, 777, 232, 8, 17, 29];

console.log(kabarcikSiralama(dizi));

const secmeliSiralama = dizi => {
  const diziUzunlugu = dizi.length;
  for (let i = 0; i < diziUzunlugu; i++) {
    let enkucuk = i;
    for (let j = i + 1; j < diziUzunlugu; j++) {
      if (dizi[enkucuk] > dizi[j]) {
        enkucuk = j;
      }
    }
    if (enkucuk != i) {
      let yedek = dizi[i];
      dizi[i] = dizi[enkucuk];
      dizi[enkucuk] = yedek;
    }
  }
  return dizi;
};
console.log(secmeliSiralama(dizi));

const cuceSiralama = dizi => {
  //dU = diziUzunlugu
  const dU = dizi.length;
  let i = 1,
    j = 2;
  while (i < dU - 1) {
    if (dizi[i - 1] >= dizi[i]) {
      i = j;
      j++;
    } else {
      let yedek = dizi[i];
      dizi[i] = dizi[i - 1];
      dizi[i - 1] = yedek;
      i--;
      if (i == 0) {
        i = 2;
      }
    }
    return dizi;
  }
};
console.log(cuceSiralama(dizi));

function birlestirme(sol, sag) {
  let dizi = [];
  while (sol.length && sag.length) {
    if (sol[0] < sol[0]) {
      diz.push(sol.shift());
    } else {
      dizi.push(sag.shift());
    }
  }
  return [...dizi, ...sol, ...sag];
}
function birlestirmeliSiralama(dizi) {
  const yari = dizi.length / 2;
  if (dizi.length < 2) {
    return dizi;
  }

  const sol = dizi.splice(0, yari);
  return birlestirme(birlestirmeliSiralama(sol), birlestirmeliSiralama(dizi));
}
console.log(birlestirmeliSiralama(dizi));
