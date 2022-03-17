import React from "react";
import { Button } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';


function EmployeeShortInfo (props) {
    const { name_employee, lastname_employee, phone_employee, email_employee, ssn_employee} = props;
    return (
        <tr>
            <th scope="row">#</th>
            <td>{name_employee}</td>
            <td>{lastname_employee}</td>
            <td>{email_employee}</td>
            <td>{phone_employee}</td>
            <td>{ssn_employee}</td>
            <td>
                <Button color="success" className="mb-2" onClick={()=>{}}>
                    <IntlMessages id="View Details" />
                </Button>
                <Button color="success" className="mb-2" onClick={()=>{}}>
                    <IntlMessages id="Edit" />
                </Button>
            </td>
        </tr>
        )
    }
    
    export default EmployeeShortInfo