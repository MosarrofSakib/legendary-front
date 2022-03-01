import React, { useState } from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Steps } from 'rsuite';
import FirstFormEvents from './firstFormEvents';
import SecondFormEvents  from './secondFormEvents';

const CreateEvent = ({ match }) => {
	const [idCompanie, setIdCompanie] = useState(0);
	const [nameOfEvent, setNameOfEvent] = useState("");
	const [idDepartment, setIdDepartment] = useState(0);
	const [beoNumber, setBeoNumber] = useState("");
	const [contactName, setContactName] = useState("");
	const [contactPhoneNumber, setContactPhoneNumber] = useState("");
	const [description, setDescription] = useState("");
	const [howEnterLocation, setHowEnterLocation] = useState("");
    const [step, setStep] = useState(0);
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
			<FirstFormEvents changeStep={changeStep}/>
		)}
		{step === 1 && (
			<SecondFormEvents />
		)}
    </>
  );
};

export default CreateEvent;
