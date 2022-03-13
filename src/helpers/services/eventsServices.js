import axios from 'axios';

const URL = `http://${process.env.URL}/api/v1/events`;

export const createEvent = async (dataEvent) => {
    try{
        const data = await axios({

        })
    }catch(err){
        console.error("ERR CALL BACK", err);
    }
}

export const editEvent = async () => {
    try{

    }catch(err){
        console.error("ERR CALL BACK", err);
    }
}

export const getOneEvent = async () => {
    try{

    }catch(err){

    }
}

export const getAllEvents = async () => {
    try{

    }catch(err){

    }
}