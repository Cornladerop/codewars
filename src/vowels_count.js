let getCount = str => str.split('').reduce((acc, el) => ['a', 'e', 'i', 'o', 'u'].includes(el) ? ++acc : acc, 0);

console.log(getCount("o a kak ushakov lil vo kashu kakao"));
