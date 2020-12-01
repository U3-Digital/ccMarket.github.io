import React, { Fragment,useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader'
import {Container,Row,Col,Card,CardBody,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import DatePicker from "react-datepicker";
import {useForm} from 'react-hook-form'
import {ADD_NEW_PROJECT} from '../../../redux/actionTypes'
import { useDispatch } from 'react-redux';
import {useHistory,Link} from 'react-router-dom'
import defaultimg from "../../../assets/images/user/3.jpg"

const Newproject = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm();
    const [url, setUrl] = useState(defaultimg);
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())

    const handleStartDate = date => {
      setstartDate(date);
    };

    const handleEndDate = date => {
      setendDate(date);
    };
    
    const getUploadParams = ({ meta }) => { 
        setUrl(meta.previewUrl)
        return { 
          url: 'https://httpbin.org/post' 
        }
    }
    

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { }

    const AddProject = data => {
      if (data !== '') {
        dispatch({type:ADD_NEW_PROJECT,payload:{data,url}})
        history.push(`${process.env.PUBLIC_URL}/app/project/project-list`)
      } else {
        errors.showMessages();
      }
    };

    return (
        <Fragment>
        <Breadcrumb parent="Project" title="Create Project" /> 
        <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <Form className="theme-form" onSubmit={handleSubmit(AddProject)}>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Project Title</Label>
                            <Input className="form-control" type="text"  name="title" placeholder="Project name *" innerRef={register({ required: true })} />
                            <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Client name</Label>
                            <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.client_name && 'Client Name is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Project Rate</Label>
                            <Input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" innerRef={register({ required: true })}/>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Progress Level</Label>
                            <Input type="select"  name="progress_level" className="form-control digits" innerRef={register({ required: true })}>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="70">70</option>
                              <option value="100">100</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Project Status</Label>
                            <Input type="select" name="status" placeholder="Select Status" className="form-control digits" innerRef={register({ required: true })}>
                              <option value="Done">Done</option>
                              <option value="Doing">Doing</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Project Size</Label>
                            <select className="form-control digits">
                              <option>Small</option>
                              <option>Medium</option>
                              <option>Big</option>
                            </select>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Starting date</Label>
                            <DatePicker className="datepicker-here form-control"  selected={startDate} onChange={handleStartDate} />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label>Ending date</Label>
                            <DatePicker className="datepicker-here form-control"  selected={endDate} endDate={endDate} onChange={handleEndDate} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Enter some Details</Label>
                            <Input  type="textarea" className="form-control" name="description" rows="3" innerRef={register({ required: true })}/>
                            <span style={{ color: "red" }}>{errors.description && 'Some Details is required'}</span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label>Upload project file</Label>
                                <Dropzone
                                    getUploadParams={getUploadParams}
                                    onChangeStatus={handleChangeStatus}
                                    maxFiles={1}
                                    multiple={false}
                                    canCancel={false}
                                    inputContent="Drop A File"
                                    styles={{
                                        dropzone: { width: '100%', height: 50 },
                                        dropzoneActive: { borderColor: 'green' },
                                    }}
                                />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup className="mb-0">
                              <Button color="success" className="mr-3">Add</Button>
                              <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                              <Button color="danger">Cancel</Button>
                              </Link>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Fragment>
    );
}

export default Newproject;