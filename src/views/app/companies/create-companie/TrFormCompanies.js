import React from "react";
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

function TrFormCompanies({changeStep}){
    return(
        <Row>
            <Colxx xxs="12" className="mb-4">
                <Row>
                    <Colxx xxs="12" xl="12" className="mb-4">
                        Per Hour Charges
                    </Colxx>
                    <Colxx xxs="12" xl="12" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            Administrative
                            <Input placeholder="Administrative"/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="12" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            Sous Chef
                            <Input placeholder="Sous Chef"/>
                        </InputGroup>
                    </Colxx>
                </Row>
                <Colxx xxs="12" xl="6" className="mb-4">
                <Button color="danger" className="mb-2" onClick={()=>changeStep(1)}>
                        <IntlMessages id="Back" />
                    </Button>
                    <Button color="success" className="mb-2">
                        <IntlMessages id="Save" />
                    </Button>
                </Colxx>
            </Colxx>
        </Row>
    )
}

export default TrFormCompanies;