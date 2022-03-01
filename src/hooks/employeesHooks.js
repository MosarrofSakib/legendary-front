import { useState } from "react";

const useEmployeesHooks = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");
    const [skillLevel, setSkillLevel] = useState("");
    const [experience, setExperience] = useState("");
    const [ssn, setSsn] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [perHourCharges, setPerHourCharges] = useState("");
    const [martialStatus, setMartialStatus] = useState("");
    const [gender, setGender] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [englishLevel, setEnglishLevel] = useState("");
    const [dateOfHiring, setDateOfHiring] = useState("");
    const [healtInsurance, setHealtInsurance] = useState("");
    const [experienceInCompanies, setExperienceInCompanies] = useState([]);
    const [sendData, setSendData] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [idExperience,setIdExperience] = useState(0);
    const [step, setStep] = useState(0);

    const changeStep = ()=>{
        setStep(1);
    }



    const saveData = (dataValue, type) => {
    //     const options = {
    //         name: (value) => setName(value),
    //         lastname: (value) => setLastname(value),
    //         email: (value) => setEmail(value),
    //         phone: (value) => setPhone(value),
    //         address: (value) => setAddress(value),
    //         role: (value) => setRole(value),
    //         skillLevel: (value) => setSkillLevel(value),
    //         experience: (value) => setExperience(value),
    //         ssn: (value) => setSsn(value),
    //         city: (value) => setCity(value),
    //         zipCode: (value) => setZipCode(value),
    //         perHourCharges: (value) => setPerHourCharges(value),
    //         martialStatus: (value) => setMartialStatus(value),
    //         gender: value => setGender(value),
    //         dateBirth: value => setDateBirth(value),
    //         englishLevel: value => setEnglishLevel(value),
    //         dateOfHiring: value => setDateOfHiring(value),
    //         healtInsurance: value => setHealtInsurance(value),
    //         sendData: () => setSendData(true),
    //     };
    //     options[type](dataValue);
    }

    // useEffect(() => {

    // },[sendData])


    const addMoreExperience = () => {
    //     const newIdExperience = idExperience+1;
    //     const newExperience = [
    //         ...experienceInCompanies,
    //         {
    //             organizationName: "",
    //             organizationAddress: "",
    //             from: "",
    //             to: "",
    //             iAmStillWorkingHere: false,
    //             idExperience: newIdExperience
    //         }
    //     ];
    //     setIdExperience(newIdExperience);
    //     setExperienceInCompanies([]);
    //     setExperienceInCompanies(newExperience);
    }

    const deleteExperience = (idExperience) => {
    //     const newExperienceInCompanies = [
    //         ...experienceInCompanies
    //     ]
    //     setExperienceInCompanies([]);
    //     const indexOfExperience = newExperienceInCompanies
    //     .map((data) => data.idExperience)
    //     .indexOf(idExperience);
    //     if (indexOfExperience > -1) {
    //         newExperienceInCompanies.splice(indexOfExperience, 1);
    //     }
    //     setExperienceInCompanies(newExperienceInCompanies);
    }

    const writeDataExperience = (idExperience, data, value) => {
    //     let newExperiences = [
    //         ...experienceInCompanies
    //     ]
    //     setExperienceInCompanies([])
    //     newExperiences = newExperiences.map((obj) => {
    //         if (obj.idExperience === idExperience) {
    //             return { 
    //                 ...obj, 
    //                 [value]: data
    //             };
    //         }

    //         return obj;
    //     });
    //     setExperienceInCompanies(newExperiences);
    }

    return {
        name,
        lastname,
        email,
        phone,
        address,
        role,
        skillLevel,
        experience,
        ssn,
        city,
        zipCode,
        perHourCharges,
        martialStatus,
        gender,
        dateBirth,
        englishLevel,
        dateOfHiring,
        healtInsurance,
        startDate,
        step,
        changeStep,
        saveData,
        setStartDate,
        addMoreExperience,
        deleteExperience,
        writeDataExperience, 
        experienceInCompanies
    }
}

export default useEmployeesHooks;
