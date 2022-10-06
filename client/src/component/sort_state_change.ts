import sort_states from "../store/sort_states"

function sort_state_change(column: string) {
    sort_states.change_type()
    sort_states.change_column(column)
}

export default sort_state_change