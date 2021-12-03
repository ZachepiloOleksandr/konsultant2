import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import { Portal } from 'react-portal';

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

const Helper = (props) => {
    const [int, setInt] = useState(1);
    const [crt, setCrt] = useState(1);
    const [ini, setIni] = useState(1);
    const [pst, setPst] = useState(1);
    const [dru, setDru] = useState(1);
    const [emo, setEmo] = useState(1);

    const [vpluvashka, setVspluvashka] = props.vplivashkaState;
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    const onStart = () => {
        let res1 = '';
        let res2 = '';
        let res3 = '';
        setVspluvashka(true);

        const _int = int;
        const _crt = crt;
        const _ini = ini;
        const _ust = pst;
        const _dru = dru;
        const _emo = emo;
        
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

        res1 = stroka;

    
        poryadok.forEach((element, index) => {
            if (element.num === 1) {
                // stroka = stroka + '\n Що головне для клиэнта? \n' + golovne_texts[element.key];
                res2 = golovne_texts[element.key];

            }
        });
        poryadok.forEach((element, index) => {
            if (element.num === 1) {
                // stroka = stroka + '\n Дії консультанта \n' + dii_texts[element.key];
                res3 = dii_texts[element.key];

            }
        });
    
        console.log(res1, res2, res3);
        setText1(res1);
        setText2(res2);
        setText3(res3);
    }

    useEffect(() => {
        const asd = document.querySelectorAll('input[type="range');
        asd.forEach(item => {
            item.addEventListener('touchmove', e => {
                // e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            })
        });
    }, []);

console.log('-----------');

  return (
    <div className="helper">
      <h2>
          ТИП КЛІЄНТА
      </h2>
      Інтелект
      <br />
      <span id="inteligece_text">{int}</span>
      <div className="inputRow">
        <input className="no_swipe" type="range" min="1" max="4" value={int} onChange={(e) => setInt(e.target.value)}  />
      </div>
      Критичність мислення
      <br />
      <span id="critical_text">{crt}</span>
      <div className="inputRow">
        <input className="no_swipe" type="range" min="1" max="4" value={crt} onChange={(e) => setCrt(e.target.value)} /> 
      </div>
      Ініціативність
      <br />
      <span id="initiate_text">{ini}</span>
      <div className="inputRow">
        <input className="no_swipe" type="range" min="1" max="4" value={ini} onChange={(e) => setIni(e.target.value)}/>
      </div>
      Поступливість
      <br />
      <span id="ustupchivost_text">{pst}</span>
      <div className="inputRow">
        <input className="no_swipe" type="range" min="1" max="4" value={pst} onChange={(e) => setPst(e.target.value)}/>
      </div>
      Дружелюбність
      <br />
      <span id="friendlyest_text">{dru} </span>
      <div className="inputRow">
        <input className="no_swipe" type="range" min="1" max="4" value={dru} onChange={(e) => setDru(e.target.value)}/> 
      </div>
      Емоційність
      <br />
      <span id="emotions_text">{emo}</span>
      <div className="inputRow">
        <input className="no_swipe" type="range" min="1" max="4" value={emo} onChange={(e) => setEmo(e.target.value)}/> 
      </div>
      <br />
      <button onClick={onStart}>
          ОБРОБИТИ
      </button>
      {
        vpluvashka !== false && <Portal node={document && document.getElementById('portal')}>
        <div className="vspluvashka" id="vspluvashka">

            <div className="vspluvashka_content">
                <h3>Характеристика клієнта</h3>
                <p>
                  {text1}  
                </p>
                <h3>Головне для клієнта</h3>
                <p>
                {text2}  
                </p>
                <h3>Порада консультанту</h3>
                <p>
                {text3}  
                </p>
                <button onClick={() => setVspluvashka(false)}>
                    ОК
                </button>
            </div>
        </div>
    </Portal>
    }
        
    </div>
  );
}

export default React.memo(Helper);
