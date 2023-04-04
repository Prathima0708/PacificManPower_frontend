import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";

const AddNews = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Post a News !</h5>
              </div>
            </Col>
          </Row>
          <form action="#" className="job-post-form shadow mt-4">
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      News Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Title"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="newsdescription" className="form-label">
                      News Description
                    </Label>
                    <textarea
                      className="form-control"
                      id="newsdescription"
                      rows="3"
                      placeholder="Enter news Description"
                    ></textarea>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/admin" className="btn btn-success">
                      Back
                    </Link>
                    <Link to="#" className="btn btn-primary">
                      Post Now <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AddNews;
