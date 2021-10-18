
const inteligeceHandler = (event) => {

    const inteligece_text = document.getElementById("inteligece_text");

    inteligece_text.innerHTML = event.target.value;
    event.target.focus();
};
const criticalHandler = (event) => {
    const critical_text = document.getElementById("critical_text");

    critical_text.innerHTML = event.target.value;
    event.target.focus();
};
const initiateHandler = (event) => {
    const initiate_text = document.getElementById("initiate_text");

    initiate_text.innerHTML = event.target.value;
    event.target.focus();
};
const ustupchivostHandler = (event) => {
    const ustupchivost_text = document.getElementById("ustupchivost_text");

    ustupchivost_text.innerHTML = event.target.value;
    event.target.focus();
};
const friendlyestHandler = (event) => {
    const ifriendlyest_text = document.getElementById("friendlyest_text");

    ifriendlyest_text.innerHTML = event.target.value;
    event.target.focus();
};
const emotionsHandler = (event) => {
    const emotions_text = document.getElementById("emotions_text");

    emotions_text.innerHTML = event.target.value;
    event.target.focus();
};
const strelkaClickHandler = () => {
    const blik_client = document.getElementById("client");
    blik_client.style.left = '-'+window.innerWidth+'px';
    
    const strelkaLeft = document.getElementById("strelkaLeft");
    strelkaLeft.style.display ="flex";

    const strelka = document.getElementById("strelka");
    strelka.style.display ="none";
    

};
const strelkaLeftClickHandler = () => {
    const blik_client = document.getElementById("client");
    blik_client.style.left = '0px';

    
    const strelkaLeft = document.getElementById("strelkaLeft");
    strelkaLeft.style.display ="none";

    const strelka = document.getElementById("strelka");
    strelka.style.display ="flex";
    

};



const buttonClick = () => {
    const inteligece_input = document.getElementById("inteligece_input");
    const critical_input = document.getElementById("critical_input");
    const initiate_input = document.getElementById("initiate_input");
    const ustupchivost_input = document.getElementById("ustupchivost_input");
    const friendlyest_input = document.getElementById("friendlyest_input");
    const emotions_input = document.getElementById("emotions_input");
    const vspluvashka = document.getElementById("vspluvashka");
    const res1 = document.getElementById("res1");
    const res2 = document.getElementById("res2");
    const res3 = document.getElementById("res3");

    vspluvashka.style.display = 'block';

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

    let stroka = "";

    poryadok.forEach((element, index) => {
        let num = poryadok[index - 1]?.num + 1 || 1;

        if(index !== 0) {
            console.log(num);
            if (element.value === poryadok[0].value) {
                num = poryadok[0].num;
                poryadok[index].num = num;
            }
console.log(num);

            if (element.key !== poryadok[1].key &&  element.value === poryadok[1].value) {
                num = poryadok[1].num;
                poryadok[index].num = num;
            }
console.log(num);

            if (element.key !== poryadok[2].key && element.value === poryadok[2].value) {
                num = poryadok[2].num || num;
                poryadok[index].num = num;
            }

        }


        poryadok[index].num = num;
        console.log(element.key, element.value);
        console.log(status_texts[num] , bokvu_texts[element.key][num]);
        console.log(status_texts[num] + bokvu_texts[element.key][num]);
        stroka = stroka + status_texts[num] + bokvu_texts[element.key][num];
    });

    res1.innerHTML = stroka;

 
    poryadok.forEach((element, index) => {
        if (element.num === 1) {
            // stroka = stroka + '\n Що головне для клиэнта? \n' + golovne_texts[element.key];
            res2.innerHTML = golovne_texts[element.key];

        }
    });
    poryadok.forEach((element, index) => {
        if (element.num === 1) {
            // stroka = stroka + '\n Дії консультанта \n' + dii_texts[element.key];
            res3.innerHTML = dii_texts[element.key];

        }
    });

    // vspluvashka.innerHTML = stroka;

}


const okClick = () => {
    const vspluvashka = document.getElementById("vspluvashka");

    vspluvashka.style.display = 'none';
};


document.addEventListener("DOMContentLoaded", () => {
    const inteligece_input = document.getElementById("inteligece_input");
    const critical_input = document.getElementById("critical_input");
    const initiate_input = document.getElementById("initiate_input");
    const ustupchivost_input = document.getElementById("ustupchivost_input");
    const friendlyest_input = document.getElementById("friendlyest_input");
    const emotions_input = document.getElementById("emotions_input");
    const button = document.getElementById("button");
    const ok = document.getElementById("ok");
    const strelka = document.getElementById("strelka");
    const strelkaLeft = document.getElementById("strelkaLeft");    

    inteligece_input.addEventListener('input', inteligeceHandler)
    critical_input.addEventListener('input', criticalHandler)
    initiate_input.addEventListener('input', initiateHandler)
    ustupchivost_input.addEventListener('input', ustupchivostHandler)
    friendlyest_input.addEventListener('input', friendlyestHandler)
    emotions_input.addEventListener('input', emotionsHandler)
    button.addEventListener('click', buttonClick);
    ok.addEventListener('click', okClick);
    strelka.addEventListener('click', strelkaClickHandler);
    strelkaLeft.addEventListener('click', strelkaLeftClickHandler);

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
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
        "1": "Цінує відносини з людьми. Безініціативний. Не любить зміни. Терплячий і привітний у спілкуванні. Уникає сварок. На першому місці стоять відносини. Сентиментальний.",
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
    "2": " В цілому",
    "3": " Майже не",
    "4": " Не",
};

const golovne_texts = {
    "A": "Отримання максимальної вигоди за мінімальні витрати.",
    "T": "100% результат в найкоротші терміни.",
    "G": "Привітні і дружні відносини в процесі ведення справи.",
    "E": "Видимість бурхливої та емоційної деятеьлності в роботі.",
};
const dii_texts = {
    "A": "Чітко і детально викладати свої думки. Говорити повільно. Надавати точні дані і вміти їх довести. Намалювати клієнтові повну картину. Бути логічним. Не підштовхувати клієнта до швидких рішень. Не намагатися домінувати.",
    "T": "Ретельно готуватися до зустрічі. Бути лаконічним. Бути енергійним і швидко переходити до справи. Триматися діловито і професійно. Запропонувати можливість вибору. Бути наполегливим. Наголосити на невідкладності і актуальності швидких дій прямо зараз.",
    "G": "Говорити повільно. Триматися дружелюбно. Ставити особисті питання. Бути привітним в спілкуванні. Пропонувати свою допомогу. Підкреслювати своє бажання допомогти. Виявляти особисту зацікавленість у справі.",
    "E": "Надихати до дії. Посилатися на думку інших людей. Давати можливість співрозмовнику виговоритися. Триматися впевнено. Впевнено переходити до справи. Говорити ясно і однозначно.",
};