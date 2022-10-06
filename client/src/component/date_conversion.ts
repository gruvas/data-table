
// Перевод даты (которая приходит от сервера)
// в удобоваримый формат. 
// Пример итогового вывода: 2022 год 20 Октября
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

export default date_conversion