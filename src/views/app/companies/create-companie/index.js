import React, {useState} from 'react';
import { Row} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import FirstFormCompanies from './FirstFormCompanies';
import SecondFormCompanies from './SecondFormCompanies';
import TrFormCompanies from './TrFormCompanies';
import { Steps } from 'rsuite';
import "react-datepicker/dist/react-datepicker.css";

const CreateCompanie = ({ match }) => {
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

    const saveData = (dataValue, type) => {
        const typeData = {
            nameCompanie: value => setNameCompanie(value),
            emailCompanie: value => setEmailCompanie(value),
            phoneCompanie: value => setPhoneCompanie(value),
            address: value => setAddress(value),
            state: value => setState(value),
            pinCode: value => setPincode(value),
            city: value => setCity(value),
            category: value => setCategory(value),
            title: value => setTitle(value),
            bussinessContactName: value => setBussinessContactName(value),
            bussinessContactPhone: value=> setBussinessContactPhone(value),
            bussinessContactEmail: value => setBussinessContactEmail(value),
            apartmentName: value => setApartmentName(value),
            apartmentCategory: value => setApartmentCategory(value),
            apartmentAddress: value => setApartmentAddress(value),
            apartmentContactName: value => setApartmentContactName(value),
            apartmentContactPhone: value => setApartmentContactPhone(value),
            apartmentContactEmail: value => setApartmentContactEmail(value),

        }
        typeData[type](dataValue);
    }

    const [step, setStep] = useState(0);

    const changeStep = (stepNumber)=>{
        setStep(stepNumber);
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
            <FirstFormCompanies changeStep={changeStep} saveData={saveData}/>
        )}
        {step === 1 && (
            <SecondFormCompanies changeStep={changeStep} saveData={saveData}/>
        )}
        {step === 2 && (
            <TrFormCompanies changeStep={changeStep} saveData={saveData}/>
        )}
    </>
  );
};

export default CreateCompanie;
