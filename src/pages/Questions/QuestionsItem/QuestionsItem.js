import React, {useState} from 'react';
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"


const QuestionsItem = () => {

    const [accordion, setAccordion] = useState(false)

    return (
        <li className="questions__item" onClick={() => setAccordion(!accordion)}>
            <div className="questions__item-top">
                <p className="questions__item-text">
                    Вопрос от покупателя
                </p>
                {
                    accordion ?
                        <AiOutlineMinus/>
                        :
                        <AiOutlinePlus/>
                }

            </div>
            <div className="questions__item-bottom" style={{display: accordion ? 'block' : 'none'}}>
                <p className="questions__item-question">
                    Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.
                    Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.
                </p>
            </div>
        </li>
    );
};

export default QuestionsItem;