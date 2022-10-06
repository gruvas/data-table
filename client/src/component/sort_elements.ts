import { sortStatesColumn } from "../@types/enum"
import { sortStatesType } from "../@types/enum"
import { ITableElement } from "../@types/ITableElement"
import sort_states from "../store/sort_states"


// Сортировка элементов, согласно выбранному столбцу
const sort_elements = (arr: ITableElement[]) => {

        // Сортировка строк из поля Name
        if(sort_states.column === sortStatesColumn.Name) {
            if(sort_states.type === sortStatesType.More) {
                
                let intermediate
                
                for(let i = 0; i < arr.length; i++) {
                    for(let i = 0; i < arr.length - 1; i++) {
                        if(arr[i].name < arr[i+1].name) {
                            intermediate = arr[i]
                            arr[i] = arr[i+1]
                            arr[i+1] = intermediate
                        }
                    }
                }

                
            } else {

                let intermediate
                
                for(let i = 0; i < arr.length; i++) {
                    for(let i = 0; i < arr.length - 1; i++) {
                        if(arr[i].name > arr[i+1].name) {
                            intermediate = arr[i]
                            arr[i] = arr[i+1]
                            arr[i+1] = intermediate
                        }
                    }
                }

            }
        } else if(sort_states.column === sortStatesColumn.Quantility) {
            // Сортировка чисел из поля quantility
            if(sort_states.type === sortStatesType.More) {
                arr.sort((a, b) => {
                    return (a.quantility - b.quantility)
                })
            } else {
                arr.sort((a, b) => {
                    return (b.quantility - a.quantility)
                })
            }
        } else if(sort_states.column === sortStatesColumn.Distance) {
            // Сортировка чисел из поля distance
            if(sort_states.type === sortStatesType.More) {
                
                let intermediate

                for(let i = 0; i < arr.length; i++) {
                    for(let i = 0; i < arr.length - 1; i++) {
                        if(Number(arr[i].distance) < Number(arr[i+1].distance)) {
                            intermediate = arr[i]
                            arr[i] = arr[i+1]
                            arr[i+1] = intermediate
                        }
                    }
                }
            } else {

                let intermediate

                for(let i = 0; i < arr.length; i++) {
                    for(let i = 0; i < arr.length - 1; i++) {
                        if(Number(arr[i].distance) > Number(arr[i+1].distance)) {
                            intermediate = arr[i]
                            arr[i] = arr[i+1]
                            arr[i+1] = intermediate
                        }
                    }
                }
            }
        }

        return arr
}

export default sort_elements