import axios from 'axios';

const URL = `http://${process.env.URL}/api/v1/employees`;

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

    }catch(err){

    }
}