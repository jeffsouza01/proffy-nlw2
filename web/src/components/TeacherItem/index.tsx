import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
    return (
                <article className="teacher-item">
                <header>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGT3wC_w5f6TQ/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=brw_SElxiFb3hztg1F8vpHGh5qwqjHjGP_NpO8yUjms" alt="Jefferson da Silva"/>
                    <div>
                        <strong> Jefferson da Silva</strong>
                        <span>Inglês</span>
                    </div>
                </header>


                <p>
                    Ensinando ingles para todos.
                    Bilingue e Multidata.


                </p>

                <footer>
                    <p>
                        Preço/Hora
                        <strong> R$50,00</strong>
                    </p>
                    <button type='button'>
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    );
}