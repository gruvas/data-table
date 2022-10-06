import { ITableElement } from "../@types/ITableElement"
import pagination_states from "../store/pagination_states"

function creating_page_elements(tableElement: ITableElement[]) {
    if(tableElement.length !== 0) {
        let intermediate_array = []

        pagination_states.change_all_pages(Math.ceil(tableElement.length/pagination_states.amount_elements))
        
        // С какого элемента начинается отсчет
        let initial_element = pagination_states.active_page * pagination_states.amount_elements

        for(let i = 0; i < pagination_states.amount_elements; i++) {
            if(tableElement[initial_element] !== undefined) {
                intermediate_array.push(tableElement[initial_element])
                initial_element++
            }
        }

        return(intermediate_array)
    }

    return([])
}

export default creating_page_elements