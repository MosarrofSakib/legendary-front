import React from "react";
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

function FirstFormEvents({changeStep}){
    return (
        <Row>
        <Colxx xxs="12" xl="12" className="mb-4">
            <Row>
            
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Companies Selection">
                            <option value="">Select Companie</option>
                            <option>LG</option>
                            <option>Apple</option>
                            <option>Microsoft</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Name of the event"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Department selection">
                            <option value="">Select Department</option>
                            <option>Admin</option>
                            <option>Systems</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="12" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Beo Number"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Contact Name"/>
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