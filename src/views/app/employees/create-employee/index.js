import React from 'react';
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const BlankPage = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.employees" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
            <Row>

                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Name"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Last Name"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Email"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Street Name"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="City"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="State"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Zip Code"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Gender"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Date of Birth"/>
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
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Add Certification and vaccine"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Date of hire"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Request a picture"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Healt Insurance"/>
                    </InputGroup>
                </Colxx>
            </Row>
            <Colxx xxs="12" xl="6" className="mb-4">
                <Button color="success" className="mb-2">
                    <IntlMessages id="button.success" />
                </Button>
            </Colxx>
        </Colxx>
      </Row>
    </>
  );
};

export default BlankPage;
