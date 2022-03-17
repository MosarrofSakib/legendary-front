import React from "react";
import { Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';

function ShortCompaniesInfo(props) {
    const { 
        id_companie, 
        name_companie, 
        category, 
        city_companie, 
        state_companie, 
        pincode_companie, 
        phone_companie
    } = props;
    return (
        <tr>
            <th scope="row">{id_companie}</th>
            <td>{name_companie}</td>
            <td>{category}</td>
            <td>{city_companie}</td>
            <td>{state_companie}</td>
            <td>{pincode_companie}</td>
            <td>{phone_companie}</td>
            <td>
                <Button color="success" className="mb-2">
                    <IntlMessages id="View Details" />
                </Button>
                <Button color="success" className="mb-2" >
                    <IntlMessages id="Edit" />
                </Button>
            </td>
        </tr>
    )
}

export default ShortCompaniesInfo;