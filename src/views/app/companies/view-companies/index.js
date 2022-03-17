import React, {useEffect, useState} from 'react';
import { Row, Table,Button, Modal, ModalBody} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import CreateCompanie from "../create-companie";
import ShortCompaniesInfo from './shortInformation';
import { getAllCompanies } from 'helpers/services/companyServices';
const ViewComapanies = ({ match }) => {
	const [companies, setCompanies] = useState([]);
    const [modal, setModal] = useState(false);
	const sendToDetails = () => {
		window.location.href = "/app/employees/details"
	}
	const sendToEditEmployee = ()=>{
		window.location.href = "/app/employees/edit";
	}

	const getCompanies = async () => {
		try {
			const companies = await getAllCompanies();
			if(companies) {
				setCompanies(companies.data);
			}
		} catch (err) {
			console.log("ERR GET COMPANIES => ", err);
		}
	}

	useEffect(()=>{
		(async () => await getCompanies())()
	},[])
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
                    <CreateCompanie getCompanies={getCompanies}/>
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
					{companies.map((data) => <ShortCompaniesInfo {...data} />)}
                </tbody>
              </Table>
        </Colxx>
      </Row>
    </>
  );
};

export default ViewComapanies;
