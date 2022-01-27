import React from 'react';
import { Row, Table,Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const ViewEmployees = ({ match }) => {
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
        <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <Button color="success" className="mb-2">
                            <IntlMessages id="View Details" />
                        </Button>
                        <Button color="success" className="mb-2">
                            <IntlMessages id="Edit" />
                        </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Yahir</td>
                    <td>Sep</td>
                    <td>@Yasep</td>
                    <td>
                        <Button color="success" className="mb-2">
                            <IntlMessages id="View Details" />
                        </Button>
                        <Button color="success" className="mb-2">
                            <IntlMessages id="Edit" />
                        </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
        </Colxx>
      </Row>
    </>
  );
};

export default ViewEmployees;
