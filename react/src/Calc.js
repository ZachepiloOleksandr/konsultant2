import React, { useState } from 'react';
import { Select, Button } from 'antd';

import 'antd/dist/antd.css'; 

const summu = {
  office: [0, 100],
  borg: [100, 200, 300 ,400],
  pukan: [100, 200, 300],
  status: [100, 200, 300],
  mozg: [100, 200, 300],
  kk: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
};

const Calc = (props) => {
  const [Rez, RezOn] = useState(500);
  const [office, setOffice] = useState("0");
  const [borg, setBorg] = useState("0");
  const [pukan, setPukan] = useState("0");
  const [status, setStatus] = useState("0");
  const [mozg, setMozg] = useState("0");
  const [kk, setKK] = useState("0");

  const onClick = () => {
    const _office_bill = summu.office[Number(office)];
    const _borg_bill = summu.borg[Number(borg)];
    const _pukan_bill = summu.borg[Number(pukan)];
    const _status_bill = summu.borg[Number(status)];
    const _mozg_bill = summu.borg[Number(mozg)];
    const _kk_bill = summu.borg[Number(kk)];
    RezOn(Rez + _office_bill + _borg_bill + _pukan_bill + _status_bill + _mozg_bill + _kk_bill);
  }

  return (
    <div>
        <div>
            Філія:
            <Select name="" className="Select" id="filiya">
                <Select.Option value="Київ">Київ</Select.Option>
                <Select.Option value="Харків">Харків</Select.Option>
                <Select.Option value="Дніпро">Дніпро</Select.Option>
                <Select.Option value="Одеса">Одеса</Select.Option>
                <Select.Option value="Львів">Львів</Select.Option>
                <Select.Option value="Одеса, пос. Котовського">Одеса, пос. Котовського</Select.Option>
                <Select.Option value="Кривий Ріг">Кривий Ріг</Select.Option>
                <Select.Option value="Запоріжжя">Запоріжжя</Select.Option>
                <Select.Option value="Миколаїв">Миколаїв</Select.Option>
                <Select.Option value="Вінниця">Вінниця</Select.Option>
                <Select.Option value="Полтава">Полтава</Select.Option>
                <Select.Option value="Рівне">Рівне</Select.Option>
                <Select.Option value="Маріуполь">Маріуполь</Select.Option>
                <Select.Option value="Черкаси">Черкаси</Select.Option>
                <Select.Option value="Чернігів">Чернігів</Select.Option>
                <Select.Option value="Суми">Суми</Select.Option>
                <Select.Option value="Кропивницький">Кропивницький</Select.Option>
                <Select.Option value="Ізмаїл">Ізмаїл</Select.Option>
                <Select.Option value="Одеса, мікрорайон Таїрова">Одеса, мікрорайон Таїрова</Select.Option>
                <Select.Option value="Хмельницький">Хмельницький</Select.Option>
                <Select.Option value="Ужгород">Ужгород</Select.Option>
                <Select.Option value="Івано-Франківськ">Івано-Франківськ</Select.Option>
                <Select.Option value="Біла Церква">Біла Церква</Select.Option>
                <Select.Option value="Тернопіль">Тернопіль</Select.Option>
            </Select>
        </div>
        <br />

        <div>
            Офіс/Дист:
            <Select defaultValue={office} style={{ width: 120 }} onChange={(value) => setOffice(value)}>
                <Select.Option value="0">Офіс</Select.Option>
                <Select.Option value="1">Дист</Select.Option>
            </Select>
        </div>
        <br />
        <div>
            Сума боргу:
            <Select value={borg} name="borg" onChange={(value) => setBorg(value)}>
                <Select.Option value="0">до 10000</Select.Option>
                <Select.Option value="1">10000-30000</Select.Option>
                <Select.Option value="2">30000-100000</Select.Option>
                <Select.Option value="3">100000 и ></Select.Option>
            </Select>
        </div>
        <br />
        <div>
            Пукан:
            <Select value={pukan} onChange={(value) => setPukan(value)}>
                <Select.Option value="0">холодний</Select.Option>
                <Select.Option value="1">теплий</Select.Option>
                <Select.Option value="2">гарячий</Select.Option>
            </Select>
        </div>
        <br />
        <div>
            Статус:
            <Select value={status} onChange={(value) => setStatus(value)}>
                <Select.Option value="0">бедный</Select.Option>
                <Select.Option value="1">середній</Select.Option>
                <Select.Option value="2">богатий</Select.Option>
            </Select>
        </div>
        <br />
        <div>
            Mозгйоб:
            <Select value={mozg} onChange={(value) => setMozg(value)}>
                <Select.Option value="0">не мозгойоб</Select.Option>
                <Select.Option value="1">хз</Select.Option>
                <Select.Option value="2">мозгойоб</Select.Option>
            </Select>
        </div>
        <br />
        <div>
            К/К:
            <Select value={kk} onChange={(value) => setKK(value)}>
                <Select.Option value="0">1</Select.Option>
                <Select.Option value="1">2</Select.Option>   
                <Select.Option value="2">3-4</Select.Option>
                <Select.Option value="3">5-7</Select.Option>
                <Select.Option value="4">8-11</Select.Option>
                <Select.Option value="5">12-16</Select.Option>
                <Select.Option value="6">17-22</Select.Option>
                <Select.Option value="7">23-29</Select.Option>
                <Select.Option value="8">30-37</Select.Option>
                <Select.Option value="9">38-46</Select.Option>
                <Select.Option value="10">47 и ></Select.Option>   
            </Select>
        </div>
        <Button type="primary" size="large"  onClick={onClick}>
            calc
        </Button>
        <br />
        Result: { Rez }
        
    </div>
  );
}

export default React.memo(Calc);
