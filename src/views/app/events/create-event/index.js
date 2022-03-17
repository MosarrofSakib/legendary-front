import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Steps } from 'rsuite';
import FirstFormEvents from './firstFormEvents';
import SecondFormEvents  from './secondFormEvents';
import { getAllCompanies, getApartments, getContactApartment, getContactsCompanie } from 'helpers/services/companyServices';

const CreateEvent = ({ match }) => {
	const [idCompanie, setIdCompanie] = useState(0);
	const [nameOfEvent, setNameOfEvent] = useState("");
	const [idDepartment, setIdDepartment] = useState(0);
	const [existBeoNumber, setExistBeoNumber] = useState(false);
	const [beoNumber, setBeoNumber] = useState("");
	const [useContactForApartment, setUseContactForApartment] = useState(false);
	const [idContact, setIdContact] = useState(0);
	const [contactName, setContactName] = useState("");
	const [contactPhoneNumber, setContactPhoneNumber] = useState("");
	const [description, setDescription] = useState("");
	const [howEnterLocation, setHowEnterLocation] = useState("");
	const [companies, setCompanies] = useState([]);
	const [apartments, setApartments] = useState([]);
	const [contacts, setContacts] = useState([]);
    const [step, setStep] = useState(0);

	const callAllCompanies = async () => {
		try {
			const companies = await getAllCompanies();
			setCompanies(companies.data);
		} catch (err) {
			console.log("ERR GET COMPANIES => ", err);
			return false;
		}
	}

	const callApartmentsForCompanie = async (idCompanie) => {
		try {
			const dataApartments = await getApartments(idCompanie);
			setApartments(dataApartments.data);
		} catch (err) {
			console.log("ERROR IN CALL APARTMENTS => ", err);
		}
		return;
	}

	const callContactsForCompanie = async (idCompanie, departmentContacts = []) => {
		try {
			setContacts([]);
			const dataContacts = await getContactsCompanie(idCompanie);
			const newContacts = [
				...dataContacts.data,
				...departmentContacts,
			]; 

			setContacts(newContacts);
		} catch (err) {
			console.log("ERROR CALL CONTACTS OF COMPANIE => ", err);
		}
		return;
	}
	
	const callContactsForApartment = async (idApartment) => {
		try { 
			const dataContactForApartment = await getContactApartment(idApartment);
			await callContactsForCompanie(idCompanie, dataContactForApartment);
		} catch (err) {
			console.log("ERROR CALL CONTACTS FOR APARTMENT => ", err);
		}
		return;
	}  

	const saveData = (dataValue, type) => {
		const selectOption = {
			idCompanie: value => {
				setIdCompanie(value);
				callApartmentsForCompanie(value);
			},
			nameEvent: value => setNameOfEvent(value),
			idDepartment: value => {
				setIdDepartment(value);
				callContactsForApartment(value);
			},
			existBeoNumber: value => setExistBeoNumber(value),
			beoNumber: value => setBeoNumber(value),
			useContactForApartment: value => setUseContactForApartment(value),
			idContact: value => setIdContact(value),
			contactName: value => setContactName(value),
			contactPhone: value => setContactPhoneNumber(value),
			description: value => setDescription(value),
			HowEnterLocation: value => setHowEnterLocation(value),
		};
		selectOption[type](dataValue);
	}
	useEffect(()=>{
		(async () => {
			await callAllCompanies();
		})()
	},[])
    const changeStep = ()=>{
        setStep(1);
    }
    return (
    <>
		<Row>
			<Colxx xxs="12">
				<Steps current={step}>
					<Steps.Item />
					<Steps.Item />
				</Steps>
				<Separator className="mb-5" />
			</Colxx>
		</Row>
		{step === 0 && (
			<FirstFormEvents changeStep={changeStep} companies={companies} saveData={saveData} />
		)}
		{step === 1 && (
			<SecondFormEvents />
		)}
    </>
  );
};

export default CreateEvent;
