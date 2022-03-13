import React, { useState, useEffect } from 'react';
import { Row, InputGroup, Input, Button, InputGroupAddon, CustomInput, } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import DatePicker from "react-datepicker";
import { Steps } from 'rsuite';
import FormExperience from './formExperience';
import "react-datepicker/dist/react-datepicker.css";
import { addEmployee } from 'helpers/services/employeesServices';

const EmployeesForm = ({ setEmployees, employees }) => {
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
    const [dependensMinors, setDependensMinors] = useState(0);
    const [dependensMayors, setDependensMayors] = useState(0);
    const [emergency_contact_name, setEmergencyContactName] = useState("");
    const [emergency_contact_phone, setEmergencyContactPhone] = useState("");
    const [sendData, setSendData] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [idExperience,setIdExperience] = useState(0);
    const [step, setStep] = useState(0);

    const changeStep = ()=>{
        setStep(1);
    }

    const saveData = (dataValue, type) => {
        const options = {
            name: (value) => setName(value),
            lastname: (value) => setLastname(value),
            email: (value) => setEmail(value),
            phone: (value) => setPhone(value),
            address: (value) => setAddress(value),
            role: (value) => setRole(value),
            skillLevel: (value) => setSkillLevel(value),
            experience: (value) => setExperience(value),
            ssn: (value) => setSsn(value),
            city: (value) => setCity(value),
            zipCode: (value) => setZipCode(value),
            perHourCharges: (value) => setPerHourCharges(value),
            martialStatus: (value) => setMartialStatus(value),
            gender: value => setGender(value),
            dateBirth: value => setDateBirth(value),
            englishLevel: value => setEnglishLevel(value),
            dateOfHiring: value => setDateOfHiring(value),
            healtInsurance: value => setHealtInsurance(value),
            sendData: () => setSendData(true),
        };
        options[type](dataValue);
    }

    useEffect(() => {

    },[sendData])


    const addMoreExperience = () => {
        const newIdExperience = idExperience+1;
        const newExperience = [
            ...experienceInCompanies,
            {
                organizationName: "",
                organizationAddress: "",
                from: "",
                to: "",
                iAmStillWorkingHere: false,
                idExperience: newIdExperience
            }
        ];
        setIdExperience(newIdExperience);
        setExperienceInCompanies([]);
        setExperienceInCompanies(newExperience);
    }

    const deleteExperience = (idExperience) => {
        const newExperienceInCompanies = [
            ...experienceInCompanies
        ]
        setExperienceInCompanies([]);
        const indexOfExperience = newExperienceInCompanies
        .map((data) => data.idExperience)
        .indexOf(idExperience);
        if (indexOfExperience > -1) {
            newExperienceInCompanies.splice(indexOfExperience, 1);
        }
        setExperienceInCompanies(newExperienceInCompanies);
    }

    const writeDataExperience = (idExperience, data, value) => {
        let newExperiences = [
            ...experienceInCompanies
        ]
        setExperienceInCompanies([])
        newExperiences = newExperiences.map((obj) => {
            if (obj.idExperience === idExperience) {
                return { 
                    ...obj, 
                    [value]: data
                };
            }

            return obj;
        });
        setExperienceInCompanies(newExperiences);
    }

    const saveEmployee = async () => {
        const newEmployee = {
            data: {

                name_employee: name,
                lastname_employee: lastname,
                email_employee: email,
                phone_employee: phone,
                address_employee: address,
                role_employee: role,
                skill_level: skillLevel,
                experience,
                ssn_employee: ssn,
                city_employee: city,
                zip_code: zipCode,
                per_hour_charge: perHourCharges,
                martial_status: martialStatus,
                gender,
                date_of_birth: dateBirth,
                dependensMinors,
                dependensMayors,
                englishLevel,
                dateOfHiring,
                healtInsurance,
                emergency_contact_name,
                emergency_contact_phone,
            },
            organizations: [],
        }
        await addEmployee(newEmployee);
    }
    const formOne = (
        <>
      <Row>
        <Colxx xxs="12">
            <Separator className="mb-5" />
        </Colxx>
        <Colxx xxs="12" className="mb-4">
            <Row>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Employee Name" onChange={({target}) => saveData(target.value, "name")} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Employee lastname" onChange={({target}) => saveData(target.value, "lastname")} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Email Address" onChange={({target}) => saveData(target.value, "email")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="checkbox" aria-label="Select all roles" onChange={({target}) => saveData("all", "role")}/>
                        Select all roles
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Companies Selection" onChange={({target}) => saveData(target.value, "role")}>
                            <option value="">Select Role</option>
                            <option>Administrative</option>
                            <option>Chieff</option>
                            <option>Bartender</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Companies Selection" onChange={({target}) => saveData(target.value, "skillLevel")}>
                            <option value="">Skill level</option>
                            <option>Beginner</option>
                            <option>Pro</option>
                            <option>Skilled</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Experience" onChange={({target}) => saveData(target.value, "experience")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Phone" onChange={({target}) => saveData(target.value, "phone")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="12" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Address" onChange={({target}) => saveData(target.value, "address")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="SSN No." onChange={({target}) => saveData(target.value, "ssn")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="City/Location" onChange={({target}) => saveData(target.value, "city")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Zip Code" onChange={({target}) => saveData(target.value, "zipCode")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Per Hour Charges" onChange={({target}) => saveData(target.value,"perHourCharges")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                        Martial Status
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Single" onChange={() => saveData("single","martialStatus")}/>
                        Single
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Married" onChange={() => saveData("married","lastname")}/>
                        Married
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                        Gender
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Female" onChange={() => saveData("female","gender")}/>
                        Female
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Male" onChange={() => saveData("male","gender")}/>
                        Male
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Other" onChange={() => saveData("other","gender")}/>
                        Other
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        Date of birth: 
                        <DatePicker selected={startDate} onChange={(date) => saveData(date,"dateBirth")} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="English Level" onChange={({target}) => saveData(target.value,"englishLevel")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">Upload certification and vaccine</InputGroupAddon>
                        <CustomInput
                        type="file"
                        id="exampleCustomFileBrowser1"
                        name="customFile"
                        />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        Date of Hiring:
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">Upload photo</InputGroupAddon>
                        <CustomInput
                        type="file"
                        id="exampleCustomFileBrowser1"
                        name="customFile"
                        />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Healt Insurance"/>
                    </InputGroup>
                </Colxx>
            </Row>
            <Colxx xxs="12" xl="6" className="mb-4">
                <Button color="success" className="mb-2" onClick={changeStep}>
                    <IntlMessages id="button.success"/>
                </Button>
            </Colxx>
        </Colxx>
      </Row>
        </>
    )

    const formTwo = (
            <Row>
                {experienceInCompanies.map(data => <FormExperience {...data} deleteExperience={deleteExperience} />)}
                <Colxx xxs="12" className="mb-4">    
                    <Button color="success" className="mb-2" onClick={addMoreExperience} >
                        <IntlMessages id="Add more experience"/>
                    </Button>
                </Colxx>
                <Colxx xxs="12" className="mb-4">
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">Upload resume</InputGroupAddon>
                        <CustomInput
                        type="file"
                        id="exampleCustomFileBrowser1"
                        name="customFile"
                        />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" className="mb-4">    
                    <Button color="success" className="mb-2" onClick={saveEmployee}>
                        <IntlMessages id="Guardar"/>
                    </Button>
                </Colxx>
            </Row>
    )
  return (
    <>
        <Row>
            <Colxx xxs="12">
                <Steps current={step}>
                    <Steps.Item />
                    <Steps.Item />
                </Steps>
            </Colxx>
        </Row>

        {step === 0 && (
            formOne
        )}
        {step === 1 && (
            formTwo
        )}
    </>
  );
};

export default EmployeesForm;
