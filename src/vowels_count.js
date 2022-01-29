function getCount(str) {
    const vowels = 'a, e, i, o, u';
    const vowelsArr = vowels.split(', ');
    return str.split('').reduce((acc, latter) => {
        if (vowelsArr.indexOf(latter) !== -1) acc++
        return acc
    }, 0)
}

console.log(getCount("o a kak ushakov lil vo kashu kakao"));