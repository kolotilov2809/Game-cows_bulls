function play() {
            
    let goal = getGoalNumber();
    let rounds = 10;
    let playing = true;

    while(playing) {
        if(rounds > 0) {
            playing = findOut(goal);
            playing ? alert('Осталось ' + --rounds + ' ходов') : alert('Вы выиграли: ' + goal);
        } else {
            playing = false;
            alert('Кончились ходы, было загадано: ' + goal);
        }
    }
}

function getRandom() {
    return Math.floor(Math.random() * 10); // 0 - 9
}

function getGoalNumber() {
    let arr = [];
    while(arr.length < 4) {
        let num = getRandom();
        if(!arr.includes(num)) {
            arr.push(num);
        }
    }
    return arr;
}

function findOut(pc) {
    let user = [...prompt('Введите 4 числовых значения')];
    let bulls = 0;
    let cows = 0;

    user.forEach((el, index) => {
        if (el == pc[index]) {
            bulls++;
        } else if (pc.includes(+el)) {
            cows++;
        }
    })

    alert(`Ваш вариант ${user}`);
    alert(`Коров: ${cows}; Быков: ${bulls}`);

    return bulls === 4 ? false : true;
}

play()