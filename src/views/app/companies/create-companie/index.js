import React, {useState} from 'react';
import { Row} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import FirstFormCompanies from './FirstFormCompanies';
import SecondFormCompanies from './SecondFormCompanies';
import TrFormCompanies from './TrFormCompanies';
import { Steps } from 'rsuite';
import "react-datepicker/dist/react-datepicker.css";

const CreateCompanie = ({ match }) => {
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
            <FirstFormCompanies changeStep={changeStep}/>
        )}
        {step === 1 && (
            <SecondFormCompanies changeStep={changeStep}/>
        )}
        {step === 2 && (
            <TrFormCompanies changeStep={changeStep}/>
        )}
    </>
  );
};

export default CreateCompanie;
