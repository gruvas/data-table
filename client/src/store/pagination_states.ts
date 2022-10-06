import { makeAutoObservable } from "mobx"


class Pagination_states {
    active_page = 0
    all_pages = 3
    
    // Количество элементов на странице
    amount_elements = 3

    state = false

    constructor() {
        makeAutoObservable(this)
    }

    change_active_page(page: number) {
        this.active_page = page
    }

    change_all_pages(pages: number) {
        this.all_pages = pages
    }

    change_state() {
        this.state = !this.state
    }
}

export default new Pagination_states()