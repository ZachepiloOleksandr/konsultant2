import React, { useEffect, useState } from 'react';
import { Select, Button, notification } from 'antd';

import 'antd/dist/antd.css'; 

const summu = {
  vid: [1000, 500, 2000],
  office: [1.1, 1],
  borg: [1, 1.1, 1.3, 1.6, 2.1, 2.5, 3.1, 3.8, 4.7],
  pukan: [0.85, 1, 1.15],
  status: [0.85, 1, 1.15],
  mozg: [1, 1.05, 1.1],
  fil: [2.05, 1.23, 1.38, 1.28, 1.29, 1.28, 1.38, 1.39, 1.40, 1.28, 1.31, 1.30, 1.50, 1.24, 1.21, 1.23, 1.15, 1.28, 1.28, 1.30, 1.30, 1.29, 1.47, 1.23, 1.15, 2.05],
};

const Calc = (props) => {
  const [Rez, RezOn] = useState(null);
  const [vid, setVid] = useState("0");
  const [office, setOffice] = useState("0");
  const [borg, setBorg] = useState("0");
  const [pukan, setPukan] = useState("0");
  const [status, setStatus] = useState("0");
  const [mozg, setMozg] = useState("0");
  const [fil, setFil] = useState("0");

  const onClick = () => {
    const _vid = summu.vid[Number(vid)];
    const _office_bill = summu.office[Number(office)];
    const _borg_bill = summu.borg[Number(borg)];
    const _pukan_bill = summu.pukan[Number(pukan)];
    const _status_bill = summu.status[Number(status)];
    const _mozg_bill = summu.mozg[Number(mozg)];
    const _fil_bill = summu.fil[Number(fil)];
    console.log(_vid , _office_bill , _borg_bill , _pukan_bill , _status_bill , _mozg_bill , _fil_bill);
    const float = _vid * _office_bill * _borg_bill * _pukan_bill * _status_bill * _mozg_bill * _fil_bill;
    const _rez = Math.round(float/10)*10;
    RezOn(_rez);

    notification['success']({
        message: 'Результат розрахунку',
        description:
          'Мінімальна сума гонорару складає:' + _rez,
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
  }

  useEffect(() => {
    RezOn(null);
  }, [vid, office, borg, pukan, status, mozg, fil])

  return (
    <div className="calc">
          <h2>
                КАЛЬКУЛЯТОР ГОНОРАРУ
            </h2>
        <div>
            <div className="label">Філія:</div>
            <Select defaultValue={fil} onChange={(value) => setFil(value)}>
                <Select.Option value="0">Київ</Select.Option>
                <Select.Option value="1">Харків</Select.Option>
                <Select.Option value="2">Дніпро</Select.Option>
                <Select.Option value="3">Одеса</Select.Option>
                <Select.Option value="4">Львів</Select.Option>
                <Select.Option value="5">Одеса, пос. Котовського</Select.Option>
                <Select.Option value="6">Кривий Ріг</Select.Option>
                <Select.Option value="7">Запоріжжя</Select.Option>
                <Select.Option value="8">Миколаїв</Select.Option>
                <Select.Option value="9">Вінниця</Select.Option>
                <Select.Option value="10">Полтава</Select.Option>
                <Select.Option value="11">Рівне</Select.Option>
                <Select.Option value="12">Маріуполь</Select.Option>
                <Select.Option value="13">Черкаси</Select.Option>
                <Select.Option value="14">Чернігів</Select.Option>
                <Select.Option value="15">Суми</Select.Option>
                <Select.Option value="16">Кропивницький</Select.Option>
                <Select.Option value="17">Ізмаїл</Select.Option>
                <Select.Option value="18">Одеса, мікрорайон Таїрова</Select.Option>
                <Select.Option value="19">Хмельницький</Select.Option>
                <Select.Option value="20">Ужгород</Select.Option>
                <Select.Option value="21">Івано-Франківськ</Select.Option>
                <Select.Option value="22">Біла Церква</Select.Option>
                <Select.Option value="23">Тернопіль</Select.Option>
                <Select.Option value="24">Херсон</Select.Option>
                <Select.Option value="25">Київ, Дарницький район</Select.Option>
            </Select>
        </div>
        <br />

        <div>
            <div className="label">Вид послуг:</div>
            <Select defaultValue={vid} onChange={(value) => setVid(value)}>
                <Select.Option value="0">Абонобслуговування</Select.Option>
                <Select.Option value="1">Разова послуга</Select.Option>
                <Select.Option value="2">Судова справа</Select.Option>
            </Select>
        </div>
                
        <br />

        <div>
            <div className="label">Офіс/Дист:</div>
            <Select defaultValue={office} onChange={(value) => setOffice(value)}>
                <Select.Option value="0">Офіс</Select.Option>
                <Select.Option value="1">Дист</Select.Option>
            </Select>
        </div>
        <br />
        <div>
            <div className="label">Сума боргу:</div>
            <Select value={borg} onChange={(value) => setBorg(value)}>
                <Select.Option value="0">0 - 5 000</Select.Option>
                <Select.Option value="1">5 001 - 15 000</Select.Option>
                <Select.Option value="2">15 001 - 30 000</Select.Option>
                <Select.Option value="3">30 001 - 50 000</Select.Option>
                <Select.Option value="4">50 001 - 100 000</Select.Option>
                <Select.Option value="5">100 001 - 200 000</Select.Option>
                <Select.Option value="6">200 001 - 500 000</Select.Option>
                <Select.Option value="7">500 001 - 1 000 000</Select.Option>
                <Select.Option value="8">1 000 001 - ∞</Select.Option>
            </Select>
        </div>
        <br />
        <div>
            <div className="label">Пукан:</div>
            <Select value={pukan} onChange={(value) => setPukan(value)}>
                <Select.Option value="0">холодний</Select.Option>
                <Select.Option value="1">теплий</Select.Option>
                <Select.Option value="2">гарячий</Select.Option>
            </Select>
        </div>
        <br />
        <div>
            <div className="label">Статус:</div>
            <Select value={status} onChange={(value) => setStatus(value)}>
                <Select.Option value="0">бедный</Select.Option>
                <Select.Option value="1">середній</Select.Option>
                <Select.Option value="2">богатий</Select.Option>
            </Select>
        </div>
        <br />
        <div>
            <div className="label">Mозгйоб:</div>
            <Select value={mozg} onChange={(value) => setMozg(value)}>
                <Select.Option value="0">не мозгойоб</Select.Option>
                <Select.Option value="1">хз</Select.Option>
                <Select.Option value="2">мозгойоб</Select.Option>
            </Select>
        </div>
        <br />

        <Button type="primary" size="large"  onClick={onClick}>
            РАХУВАТИ
        </Button>

        <br />
        <br />
        <br />
        { Rez && <h2>{ Rez }</h2> }
        
        
    </div>
  );
}

export default React.memo(Calc);
