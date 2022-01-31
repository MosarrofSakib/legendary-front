import React from 'react';
import { Row, InputGroup, Input, Button, Col} from 'reactstrap';
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
                <Colxx xxs="12" xl="6" className="mb-4">
                    <Row>
                        <Colxx xl="12" className="mb-4">
                            <InputGroup size="sm" className="mb-3">
                                <Input placeholder="Phone number"/>
                            </InputGroup>
                        </Colxx>
                        <Colxx xl="12" className="mb-4">
                            <Button color="success" className="mb-2">
                                <IntlMessages id="+ Contacts" />
                            </Button>
                        </Colxx>
                    </Row>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Book Event"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Time of event"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Uniform"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Equipment"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <Button color="success" className="mb-2">
                        <IntlMessages id="button.success" />
                    </Button>
                </Colxx>
            </Row>
        </Colxx>
      </Row>
    </>
  );
};

export default CreateEvent;
