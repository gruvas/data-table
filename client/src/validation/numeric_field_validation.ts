
// Заперет на ввод символов, кроме числовых
const numeric_field_validation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let theEvent = e || window.event;
    let key_number: number = theEvent.keyCode || theEvent.which;
    
    // Преобразуем номер клавиши в символ
    let key_string: string = String.fromCharCode( key_number );

    let regex = /[0-9]/;
    if( !regex.test(key_string) ) {
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

export default numeric_field_validation;