import axios from "axios";
import {userActions} from "./user-slice";

//handle user signup

export const getSignUp = (user) => async(dispatch) => {
    try{
        dispatch(userActions.getSignUpRequest());
        const {data} = await axios.post("/api/v1/rent/user/signup", user)
        dispatch(userActions.getSignUpDetails(data.user));
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
};

//handle user login
export const getLogIn = (user) => async(dispatch) =>{
    try{
        dispatch(userActions.getLoginRequest());
        const {data} = await axios.post("/api/v1/rent/login", user);
        dispatch(userActions.getLogInDetails(data.user));
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
};

// get current user information

export const currentUser =() => async(dispatch) => {
    try{
        dispatch(userActions.getCurrentUserRequest());
        const {data} = await axios.get("/api/v1/rent/user/me");
        dispatch(userActions.getCurrentUser(data.user));
    } catch (error) {
        dispatch(userActions.getError(error.response.data.message));
    }
};

// to update user information
export const updateUser = (updateUser) => async(dispatch) =>{
    try{
        dispatch(userActions.getUpdateUserRequest());
        await axios.patch("/api/v1/rent/user/updateMe", updateUser);
        const {data} = await axios.get("/api/v1/rent/user/me");
        dispatch(userActions.getCurrentUser(data.user));
    } catch (error){
        dispatch(userActions.getError(error.response.data.message));
    }
};

//to handle forgot password

export const forgotPassword =(email) =>async (dispatch) =>{
    try{
        await axios.post("/spi/v1/rent/user/forgotPassword", { email });
    } catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
};

//password reset
export const resetPassword = (repassword, token) => async(dispatch) =>{
    try{
        await axios.patch(`/api/v1/rent/user/resetPasswrod/${token}`, repassword);
    } catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
};

//password update 
export const updatePassword =(passwords) => async(dispatch) =>{
    try{
        dispatch(userActions.getPasswordRequest());
        await axios.patch("/api/v1/rent/user.updateMyPassword", passwords);
        dispatch(userActions.getPasswordSuccess(true))
    } catch(error){
        dispatch(userActions.getError(error.respons.data.message));
    }
};

//user logout

export const Logout =() => async(dispatch) =>{
    try{
        await axios.get("api/v1/rent/user/logout");
        dispatch(userActions.getLogout(null));
    }
    catch(error){
        dispatch(userActions.getError(error));
    }
};
