import React from "react";
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

function FirstFormCompanies({changeStep}){
    return(
        <Row>
            <Colxx xxs="12" className="mb-4">
                <Row>

                    <Colxx xxs="12" xl="12" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Company Name"/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Email Id"/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Phone" type="number"/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Apartment, Suite, No, etc."/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="State"/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Pincode"/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="City"/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input type="select" placeholder="Companies Category">
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