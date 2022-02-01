import React from 'react';
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const DetailsEmployee = ({ match }) => {
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
                    <b>Name: </b> Mark
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Lastname: </b> Otto
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Username: </b> @Otto 
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Street: </b> Street 57 Lt
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>City: </b> Chicago
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>ST: </b> Test
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Zip Code: </b> 00045
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Gender: </b> M
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Date of birth: </b> 10/12/99
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>SSN: </b> 09929939391239
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>English Level: </b> B1
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <Button color="success" className="mb-2">
                        <IntlMessages id="View Certificate of vaccinate" />
                    </Button>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Date of hire: </b> 10/12/21
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Picture: </b> 
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Heal Insurance: </b> 
                </Colxx>
            </Row>
        </Colxx>
      </Row>
    </>
  );
};

export default DetailsEmployee;
