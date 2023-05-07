import { response } from 'express';
import ActionType, {SET_USER_AUTH} from "../action-types";
import { UserType } from "../types";


let initialState = {
  user: null as UserType | null
}

export type AuthStateType = typeof initialState;

const authReducer = (state: AuthStateType, action: ActionType) => {
  switch( action.type ){
    case SET_USER_AUTH: {
      return {user: action.payload};
    }
    default: return state;
  }
}

export const setUserAuthAction = (user: UserType | null) => ({type: SET_USER_AUTH, payload: user});
