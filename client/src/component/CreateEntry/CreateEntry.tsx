import React from 'react';
import { useHttp } from '../../hook/http.hook';
import pagination_states from '../../store/pagination_states';
import sort_states from '../../store/sort_states';
import numeric_dot_field_validation from '../../validation/numeric_dot_field_validation';
import numeric_field_validation from '../../validation/numeric_field_validation';
import repeating_dot_validation from '../../validation/repeating_dot_validation';

import styles from './style.module.scss'


const CreateEntry = () => {
    const {request} = useHttp()

    const date = React.useRef<HTMLInputElement>(null)
    const name = React.useRef<HTMLInputElement>(null)
    const quantility = React.useRef<HTMLInputElement>(null)
    const distance = React.useRef<HTMLInputElement>(null)

    function create_entry() {

        // Проверка на дублирующиеся точки
        if(repeating_dot_validation(distance.current!.value)) {
            // Проверка на заполненность полей
            if(date.current!.valueAsDate && name.current!.value
                && quantility.current!.value && distance.current!.value) {

                request('/api/data/create-element', 'POST', {
                    date: date.current!.valueAsDate, 
                    name: name.current!.value, 
                    quantility: quantility.current!.value, 
                    distance: distance.current!.value
                })

                sort_states.state_change()
                pagination_states.change_active_page(0)
            } else {
                alert('Необходимо заполнить все поля')
            }
        } else {
            alert('Точка не должна быть первым символом или дублироваться')
        }

        
    }


    return (
        <div className={styles.create_entry}>
            <div className={styles.create_entry_block}>
                <div>
                    <p>Дата</p>
                    <input type="date" ref={date}/>
                </div>
                <div>
                    <p>Название</p>
                    <input type="text" ref={name} maxLength={30}/>
                </div>
                <div>
                    <p>Количество</p>
                    <input type="text" ref={quantility} maxLength={10} onKeyPress={numeric_field_validation}/>
                </div>
                <div>
                    <p>Расстояние</p>
                    <input type="text" ref={distance} maxLength={10} onKeyPress={numeric_dot_field_validation}/>
                </div>
            </div>

            <button onClick={create_entry}>Создать запись</button>
        </div>
    );
}

export default CreateEntry;
