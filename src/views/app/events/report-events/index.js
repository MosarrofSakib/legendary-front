import React from 'react';
import { Row, Table,Button, InputGroup, Input} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const ViewEmployees = ({ match }) => {
	const sendToDetails = () => {
		window.location.href = "/app/employees/details"
	}
	const sendToEditEmployee = ()=>{
		window.location.href = "/app/employees/edit";
	}
  return (
    <>
        <Row>
            <Colxx xxs="12">
            <Breadcrumb heading="menu.employees" match={match} />
            <Separator className="mb-5" />
            </Colxx>
        </Row>
        <Row>
            <Colxx xxs="12" xl="12" className="mb-4">
                <Row>
                    <Colxx xxs="12" xl="4" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input type="select" placeholder="Department selection">
                                <option value="">Select Report</option>
                                <option>Total Positions requested per Event and position</option>
                                <option>Total Assigned Employees per events</option>
                                <option>Total Cover</option>
                                <option>Events per Date/ month </option>
                                <option>Cover positions</option>
                            </Input>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="4" className="mb-4">
                        <Button color="success" className="mb-2">
                            <IntlMessages id="View Report" />
                        </Button>
                        <Button color="success" className="mb-2">
                            <IntlMessages id="Download Report" />
                        </Button>
                    </Colxx>
                </Row>
            </Colxx>
        </Row>
        <Row>
            <Colxx xxs="12" className="mb-4">
                <h3>Active Events</h3>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Companie</th>
                        <th>Name of the event</th>
                        <th>Department</th>
                        <th>Contacts</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Microsft</td>
                        <td>End Year</td>
                        <td>Systems</td>
                        <td>557894144, 43124434, 543545345</td>
                        <td>
                            <Button color="success" className="mb-2" onClick={sendToDetails}>
                                <IntlMessages id="View Details" />
                            </Button>
                            <Button color="success" className="mb-2" onClick={sendToEditEmployee}>
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
