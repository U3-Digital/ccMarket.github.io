import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Masonry from 'react-masonry-css';
import { data } from '../../data/galleryData/Images';
import { Container, Row, Col, Card, CardHeader, CardBody, Media } from 'reactstrap'


const MesonryDesc = () => {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1
    };
    return (
        <Fragment>
            <Breadcrumb parent="Gallery" title="Masonry Gallery With Description" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Masonry Gallery With Description</h5>
                            </CardHeader>
                            <CardBody className="photoswipe-pb-responsive">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid masonry-with-dec my-gallery gallery-with-description row grid"
                                    columnClassName="col-xl-3 col-sm-6 col-md-4 grid-item"
                                >
                                    {data.map((element, index) =>
                                        <li style={{ listStyle: "none" }} key={index} >
                                            <a href="#javascript" data-size="1600x950">
                                                <Media src={element.src} style={{ width: '100%' }} alt="" />
                                                <div className="caption">
                                                    <h4>Portfolio Title</h4>
                                                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </a>
                                        </li>
                                    )}
                                </Masonry>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default MesonryDesc;