
// 06/20/2020 06:19 am - SSN - [20200620-0557] - [002] - M04 - Implementing React components and Redux state

import { createStore } from 'redux';
import { defaultState } from '../../server/defaultState'

export const store = createStore ( 

    function reducer ( state = defaultState , action ) {

        return state;
        
    }
)