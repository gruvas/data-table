import { makeAutoObservable } from "mobx"
import { sortStatesType } from "../@types/enum"


class sort_states {
    column = 'Название'
    type = 'Больше'

    constructor() {
        makeAutoObservable(this)
    }

    change_column(name_column: string) {
        this.column = name_column
    }

    change_type() {
        if(this.type === sortStatesType.Less) {
            this.type = sortStatesType.More
        } else {
            this.type = sortStatesType.Less
        }
    }
}

export default new sort_states()