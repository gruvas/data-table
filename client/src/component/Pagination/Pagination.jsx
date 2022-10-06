import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import pagination_states from '../../store/pagination_states';


const Pagination = observer(() => {
    const [state, setState] = React.useState()

    let arr = []

    function page_change(i) {
        pagination_states.change_active_page(i)
    }


    useEffect(() => {
        arr = []
        
        for(let i = 0; i < pagination_states.all_pages; i++) {
            arr.push(
                <button className={(
                    pagination_states.active_page === i ? 'active' : ''
                )}
                    onClick={() => page_change(i)}
                    key={'pagination' + i}
                >
                    {i+1}
                </button>
            )
        }

        setState(arr)
        
    }, [pagination_states.state, pagination_states.active_page, pagination_states.all_pages])


    return (
        <div className='pagination'>
            <>
                {state}
            </>
        </div>
    );
})

export default Pagination;
