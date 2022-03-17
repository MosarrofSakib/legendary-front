import React, {useState} from 'react';
import { Row} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import FirstFormCompanies from './FirstFormCompanies';
import SecondFormCompanies from './SecondFormCompanies';
import TrFormCompanies from './TrFormCompanies';
import { Steps } from 'rsuite';
import "react-datepicker/dist/react-datepicker.css";
import { addCompanie } from 'helpers/services/companyServices';

const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Please enter your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };


const CreateCompanie = ({ match, getCompanies }) => {
    const [nameCompanie, setNameCompanie] = useState("");
    const [emailCompanie, setEmailCompanie] = useState("");
    const [phoneCompanie, setPhoneCompanie] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [pinCode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const [title,setTitle] = useState("");
    const [bussinessContactName, setBussinessContactName] = useState("");
    const [bussinessContactPhone, setBussinessContactPhone] = useState("");
    const [bussinessContactEmail, setBussinessContactEmail] = useState("");
    const [apartmentName, setApartmentName] = useState("");
    const [apartmentCategory, setApartmentCategory] = useState("");
    const [apartmentAddress,setApartmentAddress] = useState("");
    const [apartmentContactName, setApartmentContactName] = useState("");
    const [apartmentContactPhone, setApartmentContactPhone] = useState("");
    const [apartmentContactEmail, setApartmentContactEmail] = useState("");
    const [perHourCharges, setPerHourCharges] = useState([]);
    const [errors, setErrors] = useState({
        emailCompanie: "",
        emailBussinessContact: "",
        emailApartmentContact: "",
    });

    const saveData = (dataValue, type) => {
        const typeData = {
            nameCompanie: value => setNameCompanie(value),
            emailCompanie: value => {
                setEmailCompanie(value)
                const validation = validateEmail(value);
                if(validation) {
                    setErrors({
                        ...errors,
                        emailCompanie: validation,
                    })
                } else {
                    setErrors({
                        ...errors,
                        emailCompanie: "",
                    })
                }
            },
            phoneCompanie: value => setPhoneCompanie(value),
            address: value => setAddress(value),
            state: value => setState(value),
            pinCode: value => setPincode(value),
            city: value => setCity(value),
            category: value => setCategory(value),
            title: value => setTitle(value),
            bussinessContactName: value => setBussinessContactName(value),
            bussinessContactPhone: value=> setBussinessContactPhone(value),
            bussinessContactEmail: value => {
                setBussinessContactEmail(value);
                const validation = validateEmail(value);
                if(validation) {
                    setErrors({
                        ...errors,
                        emailBussinessContact: validation,
                    })
                } else {
                    setErrors({
                        ...errors,
                        emailBussinessContact: "",
                    })
                }
            },
            apartmentName: value => setApartmentName(value),
            apartmentCategory: value => setApartmentCategory(value),
            apartmentAddress: value => setApartmentAddress(value),
            apartmentContactName: value => setApartmentContactName(value),
            apartmentContactPhone: value => setApartmentContactPhone(value),
            apartmentContactEmail: value => {
                setApartmentContactEmail(value)
                const validation = validateEmail(value);
                if(validation) {
                    setErrors({
                        ...errors,
                        emailApartmentContact: validation,
                    })
                } else {
                    setErrors({
                        ...errors,
                        emailApartmentContact: "",
                    })
                }
            },

        }
        typeData[type](dataValue);
    }

    const [step, setStep] = useState(0);

    const changeStep = (stepNumber)=>{
        setStep(stepNumber);
    }

    const normalizeData = () => {
        const dataNormalized = {
            name: nameCompanie,
            email: emailCompanie,
            phone: phoneCompanie,
            state: state,
            pincode: pinCode,
            city,
            address,
            category,
            title,
            contacts: [
                {
                    name: bussinessContactName,
                    phone: bussinessContactPhone,
                    email: bussinessContactEmail,
                }
            ],
            apartments: [
                {
                        
                    name: apartmentName,
                    category: apartmentCategory,
                    site: apartmentAddress,
                    contact: {
                        name: apartmentContactName,
                        phone: apartmentContactPhone,
                        email: apartmentContactEmail
                    }
                }
            ]
        };
        return dataNormalized;
    }

    const saveCompanie = async () => {
        const data = normalizeData();
        const response = await addCompanie(data);
        await getCompanies();
    }
  return (
    <>
        <Row>
            <Colxx xxs="12">
                <Steps current={step}>
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                </Steps>
              <Separator className="mb-5" />
            </Colxx>
        </Row>
        {step === 0 && (
            <FirstFormCompanies changeStep={changeStep} saveData={saveData} errors={errors} {...normalizeData()}/>
        )}
        {step === 1 && (
            <SecondFormCompanies changeStep={changeStep} saveData={saveData} errors={errors} {...normalizeData()}/>
        )}
        {step === 2 && (
            <TrFormCompanies 
                changeStep={changeStep} 
                saveData={saveData} 
                saveCompanie={saveCompanie} 
                errors={errors}
                {...normalizeData()}/>
        )}
    </>
  );
};

export default CreateCompanie;
