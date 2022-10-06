import { observer } from 'mobx-react-lite';
import React from 'react';
import { sortType } from '../../@types/enum';
import { ITableElement } from '../../@types/ITableElement';
import { useHttp } from '../../hook/http.hook';
import pagination_states from '../../store/pagination_states';
import filtration_states from '../../store/filtration_states';
import creating_page_elements from '../creating_page_elements';
import date_conversion from '../date_conversion';

import styles from './table.module.scss'


const Table = observer(() => {
    const {request} = useHttp()

    const [tableElement, setTableElement] = React.useState<ITableElement[]>([])
    const [pageElement, setPageElement] = React.useState<ITableElement[]>([])


    function table_loading() {
        let sort_options = filtration_states.column + ' ' + filtration_states.conditions

        // name
        
        if(sortType.Title_Equals === sort_options) {
            request('/api/filter/title-equals', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }       

        if(sortType.Title_Contains === sort_options) {
            request('/api/filter/title-contains', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }    
            
        if(sortType.Title_More === sort_options) {
            request('/api/filter/title-more', 'POST', {
                text_field_length: (filtration_states.text_field).length
            }).then((value) => {
                setTableElement(value)
            })
        }      

        if(sortType.Title_Less === sort_options) {
            request('/api/filter/title-less', 'POST', {
                text_field_length: (filtration_states.text_field).length
            }).then((value) => {
                setTableElement(value)
            })
        }


        // quantity

        if(sortType.Quantility_Equals === sort_options) {
            request('/api/filter/quantility-equals', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }
        
        if(sortType.Quantility_Contains === sort_options) {
            request('/api/filter/quantility-contains', 'POST', {
                text_field: (Number(filtration_states.text_field))
            }).then((value) => {
                setTableElement(value)
            })
        }    
            
        if(sortType.Quantility_More === sort_options) {
            request('/api/filter/quantility-more', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }      

        if(sortType.Quantility_Less === sort_options) {
            request('/api/filter/quantility-less', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }


        // distance

        if(sortType.Quantility_Equals === sort_options) {
            request('/api/filter/quantility-equals', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }
        
        if(sortType.Quantility_Contains === sort_options) {
            request('/api/filter/quantility-contains', 'POST', {
                text_field: (Number(filtration_states.text_field))
            }).then((value) => {
                setTableElement(value)
            })
        }    
            
        if(sortType.Quantility_More === sort_options) {
            request('/api/filter/quantility-more', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }      

        if(sortType.Quantility_Less === sort_options) {
            request('/api/filter/quantility-less', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }


        // quantility

        if(sortType.Distance_Equals === sort_options) {
            request('/api/filter/distance-equals', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }
        
        if(sortType.Distance_Contains === sort_options) {
            request('/api/filter/distance-contains', 'POST', {
                text_field: (Number(filtration_states.text_field))
            }).then((value) => {
                setTableElement(value)
            })
        }    
            
        if(sortType.Distance_More === sort_options) {
            request('/api/filter/distance-more', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }      

        if(sortType.Distance_Less === sort_options) {
            request('/api/filter/distance-less', 'POST', {
                text_field: filtration_states.text_field
            }).then((value) => {
                setTableElement(value)
            })
        }


        if(filtration_states.state) {
            filtration_states.state_change()
        }
    }

    React.useEffect(function(){
        request('/api/filter/title-contains', 'POST', {
            text_field: filtration_states.text_field
        }).then((value) => {
            setTableElement(value)
        })
    }, [])

    React.useEffect(function(){
        setPageElement(creating_page_elements(tableElement))
    }, [tableElement, pagination_states.active_page, filtration_states.state])

    
    React.useEffect(function(){
        if(filtration_states.state === true) {
            table_loading()
            filtration_states.state_change()
        }
    }, [filtration_states.state])




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