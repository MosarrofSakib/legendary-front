import React, { useState } from "react";
import { Row, InputGroup, Input, Button } from "reactstrap";
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import DatePicker from "react-datepicker";

export default function FormExperience (props) {
    const { idExperience, deleteExperience } = props;
    const [startDate, setStartDate] = useState(new Date());

    return(
        <Row>
            <Colxx xxs="12" xl="12" className="mb-4">
                <InputGroup>
                    <Input placeholder="Organization Name" />
                </InputGroup>
            </Colxx>
            <Colxx xxs="12" xl="12" className="mb-4">
                <InputGroup>
                    <Input placeholder="Address" />
                </InputGroup>
            </Colxx>
            <Colxx xxs="12" xl="6" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    From:
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </InputGroup>
            </Colxx>
            <Colxx xxs="12" xl="6" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    To:
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </InputGroup>
            </Colxx>
            <Colxx xxs="12" xl="12" className="mb-4">
                <InputGroup size="sm" className="mb-3">
                    <Input type="checkbox" aria-label="Select all roles" />
                    I am still working here
                </InputGroup>
            </Colxx>
            <Colxx xxs="12" xl="6" className="mb-4">
                <Button color="danger" className="mb-2" onClick={()=> deleteExperience(idExperience)}>
                    <IntlMessages id="Delete Experience"/>
                </Button>
            </Colxx>
        </Row>
    )
}