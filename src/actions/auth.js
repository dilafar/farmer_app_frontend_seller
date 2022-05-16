import {AUTH} from '../constans/actionTypes';
import * as api from '../api/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const signin = (formdata , navigate ) => async(dispatch) =>{

    try{
        const {data} = await api.signIn(formdata);
        if(data.result.isFarmer === "Approved"){
            console.log(data.result.isFarmer);
            console.log("success");
            
            dispatch({type: AUTH, data});
            navigate("/seller");
        }else{
            console.log(data.result);
            console.log("fail");
            dispatch({type: AUTH, data});
            navigate("/");
        }
            
        
        
    }catch(error){
      
            console.log(error);
    }
}

export const signup = (formdata , navigate) => async(dispatch) =>{

    try{
        const {data} = await api.signUp(formdata);
        console.log(data.result);
        dispatch({type: AUTH, data});
        alert("successs......");
        navigate("/seller");
        
    }catch(error){
        console.log(error);
    }
}

