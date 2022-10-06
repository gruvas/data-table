import React from 'react';

import search_img from '../../img/search.svg'
import filtration_states from '../../store/filtration_states';

const Input = () => {
    const [text, setText] = React.useState('')

    React.useEffect(() => {
        filtration_states.change_text_field(text)
    }, [text])

    return (
        <div>
            <input className='input_search' value={text} onChange={(e) => setText(e.target.value)} type="text" maxLength={30} />
            <img className='search_img' src={search_img} alt="" />
        </div>
    );
}

export default Input;
