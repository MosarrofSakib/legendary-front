import React from 'react';
import { Row, Table, Button} from 'reactstrap';
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
                    <b>Companie: </b> Microsft
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Name of the Event: </b> End of year
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Department: </b> Systems
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Contacts: </b>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Type 1</td>
                                <td>557817131</td>
                            </tr>
                        </tbody>
                    </Table>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Book Event: </b>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Time of event: </b> 3hours
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Uniform: </b> Gala
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <b>Equipament: </b> Detail
                </Colxx>
            </Row>
        </Colxx>
      </Row>
    </>
  );
};

export default DetailsEmployee;
