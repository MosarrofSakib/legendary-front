import axios from 'axios';
import URLSERVICE from "./urlServices";
const URL = `http://${URLSERVICE}/api/v1/companies`;

export const addCompanie = async (dataEvent) => {
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

export const editCompanie = async () => {
    try{

    }catch(err){
        console.error("ERR CALL BACK", err);
    }
}

export const getOneCompanie = async () => {
    try{

    }catch(err){

    }
}

export const getAllCompanies = async () => {
    try{
        const data = await axios({
            method: "GET",
            url: `${URL}/view/all`
        });
        return data.data;
    }catch(err){

    }
}