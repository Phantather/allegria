import React from 'react';
import QuestionsItem from "./QuestionsItem/QuestionsItem";

const Questions = () => {
    return (
        <main>
            <section className="questions">
                <div className="container-small">
                    <h2 className="questions__title">
                        Популярные вопросы
                    </h2>
                    <div className="questions__row">
                        <div className="questions__left">
                            <div className="questions__block">
                                <h3 className="questions__block-title">
                                    ПОКУПКИ
                                </h3>
                                <ul className="questions__list">
                                    <QuestionsItem/>
                                    <QuestionsItem/>
                                    <QuestionsItem/>
                                    <QuestionsItem/>
                                    <QuestionsItem/>
                                </ul>
                            </div>
                            <div className="questions__block">
                                <h3 className="questions__block-title">
                                    ВОЗВРАТ И ОБМЕН
                                </h3>
                                <ul className="questions__list">
                                    <QuestionsItem/>
                                    <QuestionsItem/>
                                    <QuestionsItem/>
                                </ul>
                            </div>
                        </div>
                        <form className="questions__form">
                            <h3 className="questions__form-title">
                                Есть вопросы
                                или предложения?
                                НАПИШИТЕ НАМ
                            </h3>
                            <input type="text" className="questions__form-input" placeholder="Имя"/>
                            <input type="email" className="questions__form-input" placeholder="Email"/>
                            <textarea className="questions__form-area" placeholder="Текс сообщения"></textarea>
                            <button className="questions__form-btn" type="submit">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Questions;