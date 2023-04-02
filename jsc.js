function diceroll() {
    document.getElementById("Number").value = Math.floor(Math.random() * 6) + 1
}
/*
function diceroll(min, max) {
    1 = Math.ceil(1);
    6 = Math.floor(6);
    document.getElementById("Number").value = Math.random() * (6 - 1 + 1) + 1;
  }

 /* function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

*/