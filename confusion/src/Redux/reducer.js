import {DISHES} from '../shared/dishes'
import {PROMOTIONS} from '../Components/promotions'
import {LEADERS} from '../Components/leaders'
import {COMMENTS} from '../Components/comments'



export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    comments:COMMENTS
}

export const Reducer  = (state = initialState , action) => {
    return state;
}