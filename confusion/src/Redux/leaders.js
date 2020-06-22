import {LEADERS} from '../Components/leaders'
import * as ActionTypes from './ActionTypes'

export const Leaders = (state = {errmess: null , leaders: []}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state , errmess: null , leaders: action.payload}
        case ActionTypes.LEADS_FAILED:
            return {...state , errmess: action.payload , leaders: null}
       

        default:
            return state;
    }

}