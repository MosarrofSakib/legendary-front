import React from "react";
import { Row, InputGroup, Input, Button, InputGroupAddon, CustomInput} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

function SecondFormCompanies({changeStep, saveData}){
    return(
        <Row>
            <Colxx xxs="12" className="mb-4">
                <Row>

                    <Colxx xxs="12" xl="12" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Title" onChange={({target})=> saveData(target.value,"title")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Bussines Contact Person Name" onChange={({target})=> saveData(target.value,"bussinessContactName")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Bussines Contact Phone" onChange={({target})=> saveData(target.value,"bussinessContactPhone")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Bussiness Contact Email" onChange={({target})=> saveData(target.value,"bussinessContactEmail")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Apartment Name" onChange={({target})=> saveData(target.value,"apartmentName")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Apartment Category" onChange={({target})=> saveData(target.value,"apartmentCategory")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Apartment Address." onChange={({target})=> saveData(target.value,"apartmentAddress")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Apartment Contact Person Name" onChange={({target})=> saveData(target.value,"apartmentName")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Aparment Contact Person Phone" onChange={({target})=> saveData(target.value,"apartmentContactPhone")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup size="sm" className="mb-3">
                            <Input placeholder="Apartment Contact Person Email" onChange={({target})=> saveData(target.value,"apartmentContactEmail")}/>
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">Incorporation Document</InputGroupAddon>
                            <CustomInput
                            type="file"
                            id="exampleCustomFileBrowser1"
                            name="customFile"
                            />
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">Irs Document</InputGroupAddon>
                            <CustomInput
                            type="file"
                            id="exampleCustomFileBrowser1"
                            name="customFile"
                            />
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">Upload Businnes Logo</InputGroupAddon>
                            <CustomInput
                            type="file"
                            id="exampleCustomFileBrowser1"
                            name="customFile"
                            />
                        </InputGroup>
                    </Colxx>
                    <Colxx xxs="12" xl="6" className="mb-4">
                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">Upload Profile Picture</InputGroupAddon>
                            <CustomInput
                            type="file"
                            id="exampleCustomFileBrowser1"
                            name="customFile"
                            />
                        </InputGroup>
                    </Colxx>
                </Row>
                <Colxx xxs="12" xl="6" className="mb-4">
                    <Button color="danger" className="mb-2" onClick={()=>changeStep(0)}>
                        <IntlMessages id="Back" />
                    </Button>
                    <Button color="success" className="mb-2" onClick={()=>changeStep(2)}>
                        <IntlMessages id="Next" />
                    </Button>
                </Colxx>
            </Colxx>
        </Row>
    )
}

export default SecondFormCompanies;