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
          <Breadcrumb heading="menu.new-event" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
            <Colxx xxs="5" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input placeholder="Companies Selection"/>
                </InputGroup>
            </Colxx>
            <Colxx xxs="5" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input placeholder="Name of the event"/>
                </InputGroup>
            </Colxx>
            <Colxx xxs="5" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input placeholder="Drop down of the department options"/>
                </InputGroup>
            </Colxx>
            <Colxx xxs="5" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input placeholder="Phone number"/>
                </InputGroup>
            </Colxx>
            <Colxx xxs="5" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input placeholder="Book Event"/>
                </InputGroup>
            </Colxx>
            <Colxx xxs="5" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input placeholder="Time of event"/>
                </InputGroup>
            </Colxx>
            <Colxx xxs="5" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input placeholder="Uniform"/>
                </InputGroup>
            </Colxx>
            <Colxx xxs="5" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input placeholder="Equipment"/>
                </InputGroup>
            </Colxx>
            <Colxx xxs="5" className="mb-4">
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
