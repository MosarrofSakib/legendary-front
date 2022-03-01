import React, { useState } from 'react';
import { Row, Table,Button, Modal, ModalBody} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import CreateEvent from '../create-event';

const ViewEmployees = ({ match }) => {
	const [modal,setModal] = useState(false);
	const sendToDetails = () => {
		window.location.href = "/app/events/details"
	}
	const sendToEditEmployee = ()=>{
		window.location.href = "/app/events/edit";
	}
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.events" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
            <Colxx xxs="12" xl="12" className="mb-4">
				<Button color="success" className="mb-2" onClick={()=>setModal(true)}>
					<IntlMessages id="+ Add Event" />
				</Button>
				<Button color="success" className="mb-2">
					<IntlMessages id="View Reports" />
				</Button>
            </Colxx>
      </Row>
      <Modal
			isOpen={modal}
			toggle={() => setModal(!modal)}
		>
			<ModalBody>
				<CreateEvent />
			</ModalBody>
        </Modal>
      <Row>
        <Colxx xxs="12" className="mb-4">
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
