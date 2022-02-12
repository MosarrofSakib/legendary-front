import React, {useState} from 'react';
import { Row, Table,Button, Modal, ModalBody} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import CreateCompanie from "../create-companie";
const ViewComapanies = ({ match }) => {
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
          <Breadcrumb heading="Companies" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
            <Colxx xxs="12" xl="12" className="mb-4">
				<Button color="success" className="mb-2"  onClick={() => setModal(true)}>
					<IntlMessages id="+ Add Companie" />
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
                    <CreateCompanie />
                </ModalBody>
        </Modal>
      <Row>
        <Colxx xxs="12" className="mb-4">
            <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Pincode</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Test companie</td>
                    <td>HOF</td>
                    <td>EU</td>
                    <td>California</td>
                    <td>030303</td>
                    <td>559393938</td>
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

export default ViewComapanies;
