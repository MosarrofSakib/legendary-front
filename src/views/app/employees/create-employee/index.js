import React, {useState} from 'react';
import { Row, InputGroup, Input, Button, InputGroupAddon, CustomInput, } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import DatePicker from "react-datepicker";
import { Steps } from 'rsuite';
import "react-datepicker/dist/react-datepicker.css";

const BlankPage = ({ match }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [step, setStep] = useState(0);

    const changeStep = ()=>{
        setStep(1);
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
                        <Input placeholder="Employee Name"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Email Address"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="checkbox" aria-label="Select all roles" />
                        Select all roles
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Companies Selection">
                            <option value="">Select Role</option>
                            <option>Administrative</option>
                            <option>Chieff</option>
                            <option>Bartender</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Companies Selection">
                            <option value="">Skill level</option>
                            <option>Beginner</option>
                            <option>Pro</option>
                            <option>Skilled</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Experience"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Phone"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="12" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Address"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="SSN No."/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="City/Location"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Zip Code"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Per Hour Charges"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                        Martial Status
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Single" />
                        Single
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Married" />
                        Married
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                        Gender
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Female" />
                        Female
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Male" />
                        Male
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <Input type="radio" aria-label="Other" />
                        Other
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        Date of birth: 
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="SSN"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="English Level"/>
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
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup>
                        <Input placeholder="Organization Name" />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup>
                        <Input placeholder="Address" />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        From:
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        To:
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="checkbox" aria-label="Select all roles" />
                        I am still working here
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">    
                <Button color="success" className="mb-2" >
                    <IntlMessages id="Add more experience"/>
                </Button>
            </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">Upload resume</InputGroupAddon>
                        <CustomInput
                        type="file"
                        id="exampleCustomFileBrowser1"
                        name="customFile"
                        />
                    </InputGroup>
                </Colxx>
            </Row>
    )
  return (
    <>
        <Row>
            <Colxx xxs="12">
            <Breadcrumb heading="menu.employees" match={match} />
            <Separator className="mb-5" />
            </Colxx>
        </Row>
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

export default BlankPage;
