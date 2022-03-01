import React from "react";
import { Button } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';


function EmployeeShortInfo (props) {
    const { name, lastname, phone, email } = props;
    return (
        <tr>
            <th scope="row">#</th>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{phone}</td>
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