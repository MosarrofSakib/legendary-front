import React, { useState } from 'react';
import { Row, Table,Button, Modal, ModalBody } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import CreateEmploye from '../create-employee';
import EmployeeShortInfo from './employeeShortInfo';
const ViewEmployees = ({ match }) => {
  const [employees, setEmployees] = useState([]);
  const [modal, setModal] = useState(false);
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
				<Button color="success" className="mb-2" onClick={()=> setModal(true)}>
					<IntlMessages id="+ Add Employee" />
				</Button>
				<Button color="success" className="mb-2">
					<IntlMessages id="View Reports" />
				</Button>
            </Colxx>
      </Row>
		<Modal
			isOpen={modal}
      size="lg"
			toggle={() => setModal(!modal)}
		>
			<ModalBody>
				<CreateEmploye setEmployees={setEmployees} employees={employees} />
			</ModalBody>
        </Modal>
      <Row>
        <Colxx xxs="12" className="mb-4">
            <Table striped>
                <thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
                </thead>
                <tbody>
					{employees.map((data)=> <EmployeeShortInfo {...data} />)}
                </tbody>
              </Table>
        </Colxx>
      </Row>
    </>
  );
};

export default ViewEmployees;
