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
                                <option>All Employees</option>
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Terminated</option>
                                <option>Slick Hours Paid</option>
                                <option>Holidays</option>
                                <option>SSN Duplicates Detections</option>
                                <option>Vacations</option>
                                <option>Certifications</option>
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
                <h3>Active Employees</h3>
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
                            <Button color="success" className="mb-2" onClick={sendToDetails}>
                                <IntlMessages id="View Details" />
                            </Button>
                            <Button color="success" className="mb-2" onClick={sendToEditEmployee}>
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
