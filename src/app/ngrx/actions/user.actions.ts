import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/User.model";

export const setUserLogin = createAction(
    '[User Login] set Login',
    props<{user: User}>()
)
export const unsetUserLogin = createAction(
    '[User Login] Unset Login'
)