import axios from 'axios';
import URLSERVICE from "./urlServices";
const URL = `http://${URLSERVICE}/api/v1/employees`;

export const addEmployee = async (dataEvent) => {
    try{
        const data = await axios({
            method: "POST",
            url: `${URL}/create`,
            data: dataEvent
        })
        return data.data;
    }catch(err){
        console.error("ERR CALL BACK", err);
    }
}

export const editEmployee = async () => {
    try{

    }catch(err){
        console.error("ERR CALL BACK", err);
    }
}

export const getOneEmployee = async () => {
    try{

    }catch(err){

    }
}

export const getAllEmployees = async () => {
    try{
        const data = await axios({
            method: "GET",
            url: `${URL}/view/all`,
        });
        return data.data;
    }catch(err){
        console.log("ERR CALL API => ",err);
        return false;
    }
}