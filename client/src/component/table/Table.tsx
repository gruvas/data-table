import { observer } from 'mobx-react-lite';
import React from 'react';
import { sortType } from '../../@types/enum';
import { ITableElement } from '../../@types/ITableElement';
import { useHttp } from '../../hook/http.hook';
import pagination_states from '../../store/pagination_states';
import sort_states from '../../store/sort_states';
import creating_page_elements from '../creating_page_elements';

import styles from './table.module.scss'


const Table = observer(() => {
    const {request} = useHttp()

    const [tableElement, setTableElement] = React.useState<ITableElement[]>([])
    const [pageElement, setPageElement] = React.useState<ITableElement[]>([])


    
    



    function table_loading() {
        let sort_options = sort_states.column + ' ' + sort_states.conditions

        // name
        
        if(sortType.Title_Equals === sort_options) {
            request('/api/filter/title-equals', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }       

        if(sortType.Title_Contains === sort_options) {
            request('/api/filter/title-contains', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }    
            
        if(sortType.Title_More === sort_options) {
            request('/api/filter/title-more', 'POST', {
                text_field_length: (sort_states.text_field).length
            }).then((value) => {
                setTableElement(value)
            })
        }      

        if(sortType.Title_Less === sort_options) {
            request('/api/filter/title-less', 'POST', {
                text_field_length: (sort_states.text_field).length
            }).then((value) => {
                setTableElement(value)
            })
        }


        // quantity

        if(sortType.Quantility_Equals === sort_options) {
            request('/api/filter/quantility-equals', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }
        
        if(sortType.Quantility_Contains === sort_options) {
            request('/api/filter/quantility-contains', 'POST', {
                text_field: (Number(sort_states.text_field))
            }).then((value) => {
                setTableElement(value)
            })
        }    
            
        if(sortType.Quantility_More === sort_options) {
            request('/api/filter/quantility-more', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }      

        if(sortType.Quantility_Less === sort_options) {
            request('/api/filter/quantility-less', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }


        // distance

        if(sortType.Quantility_Equals === sort_options) {
            request('/api/filter/quantility-equals', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }
        
        if(sortType.Quantility_Contains === sort_options) {
            request('/api/filter/quantility-contains', 'POST', {
                text_field: (Number(sort_states.text_field))
            }).then((value) => {
                setTableElement(value)
            })
        }    
            
        if(sortType.Quantility_More === sort_options) {
            request('/api/filter/quantility-more', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }      

        if(sortType.Quantility_Less === sort_options) {
            request('/api/filter/quantility-less', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }


        // quantility

        if(sortType.Distance_Equals === sort_options) {
            request('/api/filter/distance-equals', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }
        
        if(sortType.Distance_Contains === sort_options) {
            request('/api/filter/distance-contains', 'POST', {
                text_field: (Number(sort_states.text_field))
            }).then((value) => {
                setTableElement(value)
            })
        }    
            
        if(sortType.Distance_More === sort_options) {
            request('/api/filter/distance-more', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }      

        if(sortType.Distance_Less === sort_options) {
            request('/api/filter/distance-less', 'POST', {
                text_field: sort_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }


        if(sort_states.state) {
            sort_states.state_change()
        }
    }

    React.useEffect(function(){
        request('/api/filter/title-contains', 'POST', {
            text_field: sort_states.text_field
        }).then((value) => {
            setTableElement(value)
        })
    }, [])

    React.useEffect(function(){
        setPageElement(creating_page_elements(tableElement))
    }, [tableElement, pagination_states.active_page, sort_states.state])

    
    React.useEffect(function(){
        if(sort_states.state === true) {
            table_loading()
            sort_states.state_change()
        }
    }, [sort_states.state])




    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <>
                        <tr>
                            <th>Дата</th>
                            <th>Название</th>
                            <th>Количество</th>
                            <th>Расстояние</th>
                        </tr>

                        {pageElement.map((element, index) => {
                            return(
                                <tr key={element.id}>
                                    <td>{date_conversion(element.date)}</td>
                                    <td className={styles.name}>{element.name}</td>
                                    <td>{element.quantility}</td>
                                    <td>{element.distance}</td>
                                </tr>
                            )
                        })}
                    </>
                </thead>
            </table>
        </div>
    );
})

export default Table;


function date_conversion(date: string) {
    let arr_month = [
        "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля",
        "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ]

    let main_date: Date = new Date(date)


    return (
        main_date.getFullYear() +  " год " +
        main_date.getDate() + " " +
        arr_month[main_date.getMonth()]
    )
}