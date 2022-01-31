import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/User.model";
import { setUserLogin, unsetUserLogin } from "../actions/user.actions";

export interface State {
    user: User;
}

export const initialState: State = {
    user: null
};

const _userReducer = createReducer(initialState,
    on(setUserLogin, (state, { user }) => ({ ...state, user: { ...user } })),
    on(unsetUserLogin, (state) => ({ ...state, user: null }))
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}