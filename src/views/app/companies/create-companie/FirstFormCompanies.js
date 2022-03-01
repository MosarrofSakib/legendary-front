import React from "react";
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

function FirstFormCompanies({changeStep, saveData}){
    return(
        <Row>
            <Colxx xxs="12" className="mb-4">
                <Row>

                    <Colxx xxs="12" xl="12" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Company Name" onChange={({target})=> saveData(target.value,"nameCompanie")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Email Id" onChange={({target})=> saveData(target.value,"emailCompanie")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Phone" type="number" onChange={({target})=> saveData(target.value,"phoneCompanie")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Apartment, Suite, No, etc." onChange={({target})=> saveData(target.value,"address")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="State" onChange={({target})=> saveData(target.value,"state")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Pincode" onChange={({target})=> saveData(target.value,"pinCode")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="City" onChange={({target})=> saveData(target.value,"city")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input type="select" placeholder="Companies Category" onChange={({target})=> saveData(target.value,"category")}>
                                <option value="">Category</option>
                                <option>FRONT OF THE HOUSE</option>
                                <option>BACK OF THE HOUSE</option>
                            </Input>
                        </InputGroup>
                    </Colxx>
                </Row>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <Button color="success" className="mb-2" onClick={()=>changeStep(1)}>
                        <IntlMessages id="Next" />
                    </Button>
                </Colxx>
            </Colxx>
        </Row>
    )
}

export default FirstFormCompanies;