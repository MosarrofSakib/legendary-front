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
        console.log("ERR CALL GET ALL COMPANIES => ", err);
    }
}

export const getApartments = async (idCompanie) => {
    try {
        const data = await axios({
            method: "GET",
            url: `${URL}/get/aparments?idCompanie=${idCompanie}`
        });
        return data.data;
    } catch (err) {
        console.log("ERR CALL APARTMENTS => ", err);
    }
}

export const getContactsCompanie = async (idCompanie) => {
    try { 
        const data = await axios({
            method: "GET",
            url: `${URL}/get/contacts?type=companie&id=${idCompanie}`
        })
        return data.data
    } catch (err) {
        console.log("ERR CALL GET CONTACTS FOR COMPANIE => ", err);
    }
}

export const getContactApartment = async (idApartment) => {
    try {
        const data = await axios({
            method: "GET",
            url: `${URL}/get/contacts?type=apartment&id=${idApartment}`
        })
        return data.data
    } catch (err) {
        console.log("ERR CALL GET CONTACTS FOR APARTMENT => ", err);
    }
}