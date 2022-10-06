import React from 'react';

import styles from './styles.module.scss'

import arrow from '../../img/arrow_down.svg'
import filtration_states from '../../store/filtration_states';
import { IDropdownProps } from '../../@types/IDropdownProps';


const Dropdown = (props: IDropdownProps) => {
    // Массив находящийся в нутри dropdown
    const list = props.list

    // Наименование заголовка фильтрации
    const title = props.title

    // Активный элемент на момент загрузки
    const active = props.active

    // Открытие, закрытие dropdown
    const [open, setOpen] = React.useState(false)
    
    function change_open() {
        setOpen(!open)
    }

    const [value, setValue] = React.useState(active)

    React.useEffect(() => {
        if(title === 'колонки') {
            filtration_states.change_column(value)
        } else if(title === 'условия') {
            filtration_states.change_conditions(value)
        }
    }, [value])

    return (
        <div className={styles.dropdown_menu} key={'dropdown_menu' + title} onClick={change_open}>
            <div className={styles.title_dropdown}>
                <p>Выбор {title}</p>
                <img className={styles.arrow} src={arrow} alt="" />
            </div>

            <div className={styles.dropdown_input}>
                {value}
            </div>

            {open &&
                <div className={styles.dropdown_border}>
                    {list.map((item: string, index: number) =>
                        <p onClick={() => setValue(item)} key={item + index}>{item}</p>
                    )}
                </div>
            }
        </div>
    );
}

export default Dropdown;
