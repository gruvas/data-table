import { makeAutoObservable } from "mobx"

class filtration_states {
    column = 'Название'
    conditions = 'Содержит'
    text_field = ''

    state = false

    constructor() {
        makeAutoObservable(this)
    }

    change_column(name_column: string) {
        this.column = name_column
    }

    change_conditions(name_conditions: string) {
        this.conditions = name_conditions
    }

    change_text_field(name_text_field: string) {
        this.text_field = name_text_field
    }
    
    state_change() {
        this.state = !this.state
    }
}

export default new filtration_states()