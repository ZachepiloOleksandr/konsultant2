
const inteligeceHandler = (event) => {

    const inteligece_text = document.getElementById("inteligece_text");

    inteligece_text.innerHTML = event.target.value;
    event.target.focus();
    console.log('focus');
};
const criticalHandler = (event) => {
    const critical_text = document.getElementById("critical_text");

    critical_text.innerHTML = event.target.value;
};
const initiateHandler = (event) => {
    const initiate_text = document.getElementById("initiate_text");

    initiate_text.innerHTML = event.target.value;
};
const ustupchivostHandler = (event) => {
    const ustupchivost_text = document.getElementById("ustupchivost_text");

    ustupchivost_text.innerHTML = event.target.value;
};
const friendlyestHandler = (event) => {
    const ifriendlyest_text = document.getElementById("friendlyest_text");

    ifriendlyest_text.innerHTML = event.target.value;
};
const emotionsHandler = (event) => {
    const emotions_text = document.getElementById("emotions_text");

    emotions_text.innerHTML = event.target.value;
};


const buttonClick = () => {
    const inteligece_input = document.getElementById("inteligece_input");
    const critical_input = document.getElementById("critical_input");
    const initiate_input = document.getElementById("initiate_input");
    const ustupchivost_input = document.getElementById("ustupchivost_input");
    const friendlyest_input = document.getElementById("friendlyest_input");
    const emotions_input = document.getElementById("emotions_input");

    const _int = inteligece_input.value;
    const _crt = critical_input.value;
    const _ini = initiate_input.value;
    const _ust = ustupchivost_input.value;
    const _dru = friendlyest_input.value;
    const _emo = emotions_input.value;
    
    const types = {
        INT: ['', 'E', 'T', 'G', 'A'],
        CRT: ['', 'E', 'G', 'T', 'A'],
        INI: ['', 'G', 'A', 'E', 'T'],
        UST: ['', 'T', 'A', 'E', 'G'],
        DRU: ['', 'A', 'T', 'E', 'G'],
        EMO: ['', 'G', 'A', 'T', 'E'],
    };
    
    const firstStep = [
        types.INT[_int],
        types.CRT[_crt],
        types.INI[_ini],
        types.UST[_ust],
        types.DRU[_dru],
        types.EMO[_emo],
    ];
    console.log(firstStep);
    
    let kolich = {
        "E": 0,
        "T": 0,
        "G": 0,
        "A": 0,
    };
    
    const poryadok = [];

    firstStep.forEach(element => {
        kolich[element] = kolich[element] + 1;
    });

    const procentu = {
        "E": kolich["E"]/6 * 100,
        "T": kolich["T"]/6 * 100,
        "G": kolich["G"]/6 * 100,
        "A": kolich["A"]/6 * 100,
    };


    for (let i in kolich) {
        poryadok.push({
            key: i, // E
            value: kolich[i], // 2
        });
    }

    poryadok.sort((a, b) => b.value - a.value);
    
    // for (let i in kolich) {
    //     console.log(kolich[i], i);
    //     console.log(status_texts[kolich[i]] + bokvu_texts[i][kolich[i]]);
    // }

    poryadok.forEach((element, index) => {
        let num = poryadok[index - 1]?.num + 1 || 1;

        if(index !== 0) {

            if (element.value === poryadok[0].value) {
                num = poryadok[0].num;
                poryadok[index].num = num;
            }


            if (element.key !== poryadok[1].key &&  element.value === poryadok[1].value) {
                num = poryadok[1].num;
                poryadok[index].num = num;
            }

console.log('-----');
console.log(num);

            if (element.key !== poryadok[2].key && element.value === poryadok[2].value) {
                num = poryadok[2].num;
                poryadok[index].num = num;
            }
// console.log(num);
//             if (element.key !== poryadok[3].key && element.value === poryadok[3].value) {
//                 num = poryadok[3].num;
//                 poryadok[index].num = num;
//             }
        }


        poryadok[index].num = num;
        console.log(element.key, element.value);
        console.log(status_texts[num] + bokvu_texts[element.key][num]);

    });
 
    // let stroka =  status_texts[kolich.E] + E_texts[kolich.E];

        // if(kolich["E"]===1) {
        //     stroka = status_texts.z
        // }
        // if(kolich["E"]===2) {
        //     stroka = status_texts.vc + E_texts.vc;
        // }
        // if(kolich["E"]===3) {
        //     stroka = status_texts.ch
        // }
        // if(kolich["E"]===4) {
        //     stroka = status_texts.n
        // }


    let status = {
        "E": 0,
        "T": 0,
        "G": 0,
        "A": 0,
    };


// console.log('kolich', kolich);
// console.log('procentu', procentu);
console.log("poryadok", poryadok);

// console.log(poryadok[0].value);
// console.log(poryadok[0].key);

}






document.addEventListener("DOMContentLoaded", () => {
    const inteligece_input = document.getElementById("inteligece_input");
    const critical_input = document.getElementById("critical_input");
    const initiate_input = document.getElementById("initiate_input");
    const ustupchivost_input = document.getElementById("ustupchivost_input");
    const friendlyest_input = document.getElementById("friendlyest_input");
    const emotions_input = document.getElementById("emotions_input");
    const button = document.getElementById("button");

    inteligece_input.addEventListener('input', inteligeceHandler)
    critical_input.addEventListener('input', criticalHandler)
    initiate_input.addEventListener('input', initiateHandler)
    ustupchivost_input.addEventListener('input', ustupchivostHandler)
    friendlyest_input.addEventListener('input', friendlyestHandler)
    emotions_input.addEventListener('input', emotionsHandler)
    button.addEventListener('click', buttonClick)
});


const bokvu_texts = {
    A: {
        "1": "Розумний, хитрий і розважливий. Любить точність. Мислить критично. Уникає ризиків. Обережний. Ненаполегливий.",
        "2": " розумний.",
        "3": " розумний.",
        "4": " розумний.",
    },
    T: {
        "1": "Цілеспрямований. Схильний командувати. Нетерплячий до повчань. Упертий і запальний. Любить порядок. Налаштований на результат. Людина дії.",
        "2": " цілеспрямований.",
        "3": " цілеспрямований.",
        "4": " цілеспрямований.",
    },
    G: {
        "1": "Цінує відносини з людьми. Безініціативність. Не любить зміни. Терплячий і привітний у спілкуванні. Уникає сварок. На першому місці стоять відносини. Сентиментальний.",
        "2": " сентиментальний.",
        "3": " сентиментальний.",
        "4": " сентиментальний.",
    },
    E: {
        "1": "Готовий до ризику. Енергійний. Неорганізований. Емоційний. Оптиміст. Непередбачуваний. Схильний до порушень домовленостей.",
        "2": " емоційний.",
        "3": " емоційний.",
        "4": " емоційний.",
    }
}

const status_texts = {
    "1": "",
    "2": "В цілому",
    "3": "Частково",
    "4": "Не",
};
