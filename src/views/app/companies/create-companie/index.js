import React from 'react';
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const CreateEvent = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.new-company" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
            <Row>

                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Company Name"/>
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
                        <Input placeholder="ST"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="ZIP Code"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Button Add Departament"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Department"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Main Contact: Full Name / Phone Number"/>
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

export default CreateEvent;
