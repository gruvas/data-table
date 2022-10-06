import React from 'react';

import styles from './style/Сontainer.module.scss'

import Dropdown from '../../component/dropdown/Dropdown';
import Table from '../../component/table/Table';
import Input from '../../component/input/Input';
import { observer } from 'mobx-react-lite';
import filtration_states from '../../store/filtration_states';
import CreateEntry from '../../component/CreateEntry/CreateEntry';
import Pagination from '../../component/Pagination/Pagination';
import pagination_states from '../../store/pagination_states';


const Container = observer(() => {
    let arr_conditions = ['Равно', 'Содержит', 'Больше', 'Меньше']
    let arr_column = ['Название', 'Количество', 'Расстояние']

    function search() {
        filtration_states.state_change()
        pagination_states.change_active_page(0)
    }
    
    
    return (
        <div>
            <header className={styles.header}>Table</header>
            
            <div className={styles.table_container}>
                <div className={styles.filter}>
                    <Dropdown active={filtration_states.column} list={arr_column} title='колонки'/>
                    <Dropdown active={filtration_states.conditions} list={arr_conditions} title='условия'/>
                </div>

                <div className={styles.central_block}>
                    <Input/>

                    <button onClick={search}>
                        Применить фильтры
                    </button>
                </div>

                <CreateEntry/>

                <Table/>

                <Pagination/>
            </div>
        </div>
    );
})

export default Container;