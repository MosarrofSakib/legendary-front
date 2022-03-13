import axios from 'axios';

const URL = `http://${process.env.URL}/api/v1/users`;

async function loginService(email, password) {
    try{
        const DATA = await axios({
            method: "POST",
            url: `${URL}/login`,
            auth: {
                username: email, 
                password
            }
        })
        return DATA.data;
    }catch(err){
        console.log("ERROR OF CONNECTION BACK =>", err);
    }
}

async function registerService(email, password) {
    try{
        const DATA = await axios({
            method: "POST",
            url: `${URL}/register`,
            data: {
                email, 
                password,
            }
        })
        return DATA.data;
    }catch(err){
        console.log("ERROR OF CONNECTION BACK =>", err);
    }
}

export {
    loginService,
    registerService,
}