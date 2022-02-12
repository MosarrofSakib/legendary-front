import React, { useState } from "react";
import { Row, InputGroup, Input, Button} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FirstFormEvents(){
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Row>
        <Colxx xxs="12" xl="12" className="mb-4">
            <Row>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="How to Enter Location">
                            <option value="">Select How to Enter Location</option>
                            <option>Lawn</option>
                            <option>Lobby</option>
                            <option>Back door and ring bell</option>
                            <option>Back door</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Choose Role">
                            <option value="">Select Role</option>
                            <option>Administrative</option>
                            <option>Sous Chef</option>
                            <option>Houseman</option>
                            <option>Bar attendant</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="number" placeholder="No. of Users"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input type="select" placeholder="Select Attire">
                            <option value="">Select Attire</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Input>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="4" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        Select Date:  
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="4" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="Start Time"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="4" className="mb-4">
                    <InputGroup size="sm" className="mb-3">
                        <Input placeholder="End Time"/>
                    </InputGroup>
                </Colxx>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <Button color="success" className="mb-2">
                        <IntlMessages id="Save" />
                    </Button>
                </Colxx>
            </Row>
        </Colxx>
      </Row>
    )
}

export default FirstFormEvents;