const list = [1, 5, 63, 2, 82, 10, 24, 11, 20];
const sum = list.reduce((a, b) => a + b);
const media = sum / list.length;

console.log(media);
