import React from "react";
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

function FirstFormEvents(props){
    const { changeStep, companies, saveData, apartments } = props;
    return (
        <Row>
        <Colxx xxs="12" xl="12" className="mb-4">
            <Row>
            
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Companies Selection" onChange={({target}) => saveData(target.value,"idCompanie")}>
                            <option value="">Select Companie</option>
                            {companies.map(data => <option value={data.id_companie}>{data.name_companie}</option>)}
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Name of the event" onChange={({target}) => saveData(target.value,"nameEvent")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Department selection" onChange={({target}) => saveData(target.value,"idApartment")}>
                            <option value="">Select Department</option>
                            {apartments.map((data)=> <option value={data.id_apartment}>{data.name_apartment}</option>)}
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="checkbox" aria-label="Exist BEO number?" onChange={({target}) => {
                            if (target.checked) {
                                saveData(true,"beoNumber");
                            } else {
                                saveData(false,"beoNumber");
                            }
                        }
                            }/>
                        Exist BEO number?
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="12" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Beo Number" onChange={({target}) => saveData(target.value,"beoNumber")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Contact Name" onChange={({target}) => saveData(target.value,"idApartment")}/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Contact phone number"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Description"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <Button color="success" className="mb-2" onClick={changeStep}>
                        <IntlMessages id="Next" />
                    </Button>
                </Colxx>
            </Row>
        </Colxx>
      </Row>
    )
}

export default FirstFormEvents;