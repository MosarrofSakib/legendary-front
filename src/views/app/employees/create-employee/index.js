import React, { useState, useEffect } from 'react';
import { Row, InputGroup, Input, Button, InputGroupAddon, CustomInput, } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import DatePicker from "react-datepicker";
import { Steps } from 'rsuite';
import FormExperience from './formExperience';
import "react-datepicker/dist/react-datepicker.css";
import { addEmployee } from 'helpers/services/employeesServices';

const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Please enter your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

const EmployeesForm = ({ getEmployees }) => {
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
    const [haveADependents, setHaveADependents] = useState(false);
    const [dateBirth, setDateBirth] = useState(new Date());
    const [englishLevel, setEnglishLevel] = useState("");
    const [dateOfHiring, setDateOfHiring] = useState(new Date());
    const [healtInsurance, setHealtInsurance] = useState("");
    const [experienceInCompanies, setExperienceInCompanies] = useState([]);
    const [dependensMinors, setDependensMinors] = useState(0);
    const [dependensMayors, setDependensMayors] = useState(0);
    const [emergency_contact_name, setEmergencyContactName] = useState("");
    const [emergency_contact_phone, setEmergencyContactPhone] = useState("");
    const [sendData, setSendData] = useState(false);
    const [idExperience,setIdExperience] = useState(0);
    const [step, setStep] = useState(0);
    const [validationOfEmail, setValidationOfEmail] = useState(undefined);
    const [errors, setErros] = useState({
        email: ""
    });
    const [responseSave, setResponseSave] = useState("");

    const changeStep = (type)=>{
        if(type === "back"){
            setStep(0);
        } else {
            setStep(1);
        }
    }

    const saveData = (dataValue, type) => {
        const options = {
            name: (value) => setName(value),
            lastname: (value) => setLastname(value),
            email: (value) => {
                setEmail(value);
                const validation = validateEmail(value);
                if(validation) {
                    setValidationOfEmail(false);
                    setErros({
                        ...errors,
                        email: validation,
                    })
                } else {
                    setValidationOfEmail(true);
                }

            },
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
            healthInsurance: value => setHealtInsurance(value),
            dependensMinors: value => setDependensMinors(value),
            dependensMayors: value => setDependensMayors(value),
            emergencyContactName: value => setEmergencyContactName(value),
            emergencyContactPhone: value => setEmergencyContactPhone(value),
            haveADependents: value => setHaveADependents(value),
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

    const normalizeDate = (date) => {
        const getDate = new Date(date);
        const getDay = getDate.getDate();
        const getMonth = getDate.getMonth();
        const getYear = getDate.getFullYear();
        return `${getYear}-${getMonth}-${getDay}`;
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
                date_of_birth: normalizeDate(dateBirth),
                dependensMinors,
                dependensMayors,
                englishLevel,
                dateOfHiring: normalizeDate(dateOfHiring),
                healtInsurance,
                emergency_contact_name,
                emergency_contact_phone,
                haveDependents: haveADependents
            },
            organizations: [],
        }
        const response = await addEmployee(newEmployee);
        await getEmployees();
    }
    let validateDisabledRoles = role === "all" ? true : false;
    const disabledRoles = {
        disabled: validateDisabledRoles
    }
    const checkedRole = {
        checked : validateDisabledRoles,
    }
    const checkedDependents = {
        checked: haveADependents
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
                        <Row>
                            <Colxx xxs="12">
                                Employee Name
                            </Colxx>
                            <Colxx xxs="12">
                                <Input defaultValue={name} onChange={({target}) => saveData(target.value, "name")} />
                            </Colxx>
                        </Row>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Row>
                            <Colxx xxs="12">
                                Employee lastname
                            </Colxx>
                            <Colxx xxs="12">
                                <Input defaultValue={name} onChange={({target}) => saveData(target.value, "lastname")} />
                            </Colxx>
                        </Row>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Row>
                            <Colxx xxs="12">
                                Email Address
                            </Colxx>
                            <Colxx xxs="12">
                                <Input defaultValue={name} onChange={({target}) => saveData(target.value, "email")} />
                            </Colxx>
                        </Row>
                        {validationOfEmail === false && (
								<div className="invalid-feedback d-block">
									{errors.email}
								</div>
                        )}
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="checkbox" {...checkedRole} aria-label="Select all roles" onChange={({target}) => {
                            if (target.checked) {
                                saveData("all", "role")
                                saveData("Skilled", "skillLevel");
                            } else {
                                saveData("","role");
                                saveData("", "skillLevel");
                            }
                        }
                            }/>
                        Select all roles
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Companies Selection" onChange={({target}) => {saveData(target.value, "role")}} {...disabledRoles}>
                            <option value="">Select Role</option>
                            <option>Administrative</option>
                            <option>Chieff</option>
                            <option>Bartender</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Companies Selection" onChange={({target}) => saveData(target.value, "skillLevel")} {...disabledRoles} >
                            <option value="">Skill level</option>
                            <option>Beginner</option>
                            <option>Pro</option>
                            <option>Skilled</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Experience" defaultValue={experience} onChange={({target}) => saveData(target.value, "experience")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Phone" defaultValue={phone} onChange={({target}) => saveData(target.value, "phone")} type="number" />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="12" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Address" defaultValue={address} onChange={({target}) => saveData(target.value, "address")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="SSN No." defaultValue={ssn} onChange={({target}) => saveData(target.value, "ssn")} type="number"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="City/Location" defaultValue={city} onChange={({target}) => saveData(target.value, "city")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Zip Code" defaultValue={zipCode} onChange={({target}) => saveData(target.value, "zipCode")} type="number"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Per Hour Charges" defaultValue={perHourCharges} onChange={({target}) => saveData(target.value,"perHourCharges")} type="number"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className='mb-3'>
                        <Row>
                            <Colxx xxs="12">
                                Martial Status
                            </Colxx>
                            <Colxx xxs="6">
                                <InputGroup size="sm" className="mb-3">
                                    <Input type="radio" aria-label="Single" onChange={() => saveData("single","martialStatus")}/>
                                    Single
                                </InputGroup>
                            </Colxx>
                            <Colxx xxs="6">
                                <InputGroup size="sm" className="mb-3">
                                    <Input type="radio" aria-label="Married" onChange={() => saveData("married","lastname")}/>
                                    Married
                                </InputGroup>
                            </Colxx>
                        </Row>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3"> 
                            <Row>
                                <Colxx xxs="12">
                                    Gender
                                </Colxx>
                                <Colxx xxs="4">
                                    <InputGroup size="sm" className="mb-3">
                                        <Input type="radio" aria-label="Female" onChange={() => saveData("female","gender")}/>
                                        Female
                                    </InputGroup>
                                </Colxx>
                                <Colxx xxs="4">
                                    <InputGroup size="sm" className="mb-3">
                                        <Input type="radio" aria-label="Male" onChange={() => saveData("male","gender")}/>
                                        Male
                                    </InputGroup>
                                </Colxx>
                                <Colxx xxs="4">
                                    <InputGroup size="sm" className="mb-3">
                                        <Input type="radio" aria-label="Other" onChange={() => saveData("other","gender")}/>
                                        Other
                                    </InputGroup>   
                                </Colxx>
                            </Row>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="checkbox" {...checkedDependents} aria-label="Do you have dependents?" onChange={({target}) => {
                            if (target.checked) {
                                saveData(true, "haveADependents")
                            } else {
                                saveData(false,"haveADependents");
                            }
                        }
                            }/>
                        Do you have dependents?
                    </InputGroup>
                </Colxx>
                { haveADependents && (
                    <>
                        <Colxx xxs="12" xl="6" className="mb-4">
                            <InputGroup size="sm" className="mb">
                                <Row>
                                    <Colxx xxs="12">
                                        Dependents Minors
                                    </Colxx>
                                    <Colxx xxs="12">
                                        <Input type="number" onChange={({target})=> saveData(target.value, "dependensMinors")} />
                                    </Colxx>
                                </Row>
                            </InputGroup>
                        </Colxx>
                        <Colxx xxs="12" xl="6" className="mb-4">
                            <InputGroup size="sm" className="mb">
                                <Row>
                                    <Colxx xxs="12">
                                        Dependents Mayors
                                    </Colxx>
                                    <Colxx xxs="12">
                                        <Input type="number" onChange={({target})=> saveData(target.value, "dependensMayors")} />
                                    </Colxx>
                                </Row>
                            </InputGroup>
                        </Colxx>
                    </>
                )}
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        Date of birth: 
                        <DatePicker selected={dateBirth} onChange={(date) => saveData(date,"dateBirth")} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        Date of Hiring:
                        <DatePicker selected={dateOfHiring} onChange={(date) => saveData(date,"dateOfHiring")} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="12" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Row>
                            <Colxx xxs="12">
                                English Level
                            </Colxx>
                            <Colxx xxs="12">
                                <Input onChange={({target}) => saveData(target.value,"englishLevel")}/>
                            </Colxx>
                        </Row>
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
                        <Row>
                            <Colxx xxs="12">
                                Health Insurance
                            </Colxx>
                            <Colxx xxs="12">
                                <Input onChange={({target})=> saveData(target.value,"healthInsurance")}/>
                            </Colxx>
                        </Row>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb">
                        <Row>
                            <Colxx xxs="12">
                                Emergency Contact Name
                            </Colxx>
                            <Colxx xxs="12">
                                <Input type="number" onChange={({target})=> saveData(target.value, "emergencyContactName")} />
                            </Colxx>
                        </Row>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb">
                        <Row>
                            <Colxx xxs="12">
                                Emergency Contact Phone
                            </Colxx>
                            <Colxx xxs="12">
                                <Input type="number" onChange={({target})=> saveData(target.value, "emergencyContactPhone")} />
                            </Colxx>
                        </Row>
                    </InputGroup>
                </Colxx>
            </Row>
            <Colxx xxs="12" xl="6" className="mb-4">
                <Button color="success" className="mb-2" onClick={()=>changeStep("next")}>
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
                    <Button color="danger" className="mb-2" onClick={()=>changeStep("back")}>
                        <IntlMessages id="Back"/>
                    </Button>  
                    <Button color="success" className="mb-2" onClick={saveEmployee}>
                        <IntlMessages id="Guardar"/>
                    </Button>
                </Colxx>
                <Colxx xxs="12" className="mb4">
                    <div>
                        
                    </div>
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
