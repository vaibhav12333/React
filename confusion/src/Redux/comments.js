import {COMMENTS} from '../Components/comments'
import * as ActionTypes from './ActionTypes'


export const Comments = (state = {errMess: null , comments: []}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state , errmess: null , comments: action.payload}
            case ActionTypes.ADD_COMMENT:
            var comment  = action.payload;
            return { ...state, comments:state.concat(comment)};

            case ActionTypes.COMMENTS_FAILED:
                return {...state  , errmess: action.payload };
           
        default:
            return state;
    }

}