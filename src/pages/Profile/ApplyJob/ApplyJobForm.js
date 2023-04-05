import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";

const ApplyJobForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [salaryFrequency, setSalaryFrequency] = useState("monthly");
  const [currency, setCurrency] = useState("");
  const [skills, setSkills] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [rolesAndResponsibility, setRolesAndResponsibility] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [educationEndDate, setEducationEndDate] = useState("");
  const [percentage, setPercentage] = useState("");
  const [cgpa, setCgpa] = useState("");
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Apply for a New Job!</h5>
              </div>
            </Col>
          </Row>
          <form action="#" className="job-post-form shadow mt-4">
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="firstname" className="form-label">
                      First Name:
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="FirstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="lastname" className="form-label">
                      Last Name:
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="LastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="ctc" className="form-label">
                      Current Salary (CTC):
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="ctc"
                      placeholder="Current Salary"
                      value={currentSalary}
                      onChange={(e) => setCurrentSalary(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="monthlyorannually" className="form-label">
                      Monthly or Annually:
                    </Label>
                    <Input
                      type="select"
                      value={salaryFrequency}
                      onChange={(e) => setSalaryFrequency(e.target.value)}
                      required
                    >
                      <option value="">-- Select Salary Frequency --</option>
                      <option value="monthly">Monthly</option>
                      <option value="annually">Annually</option>
                    </Input>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="currency" className="form-label">
                      Currency:
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="currency"
                      placeholder="Currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="skills" className="form-label">
                      Skills:
                    </Label>
                    <Input
                      type="text"
                      id="skills"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      required
                    ></Input>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="currentlyWorking" className="form-label">
                      Currently working:
                    </Label>
                    <Input
                      type="checkbox"
                      className="form-control"
                      id="currentlyWorking"
                      checked={currentlyWorking}
                      onChange={(e) => setCurrentlyWorking(e.target.checked)}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="companyname" className="form-label">
                      Company Name
                    </Label>
                    <Input
                      type="text"
                      id="companyname"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    ></Input>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="startdate" className="form-label">
                      Start Date:
                    </Label>
                    <Input
                      type="date"
                      className="form-control"
                      id="startdate"
                      placeholder="Start date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="enddate" className="form-label">
                      End Date:
                    </Label>
                    <Input
                      type="date"
                      className="form-control"
                      id="enddate"
                      placeholder="End date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      Job Title
                    </Label>
                    <Input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      required
                      className="form-control"
                      id="jobtitle"
                      placeholder="Job Title"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="jobrole" className="form-label">
                      Job Roles and Responsiblities
                    </Label>
                    <textarea
                      className="form-control"
                      id="jobrole"
                      rows="3"
                      placeholder="Enter Job roles"
                      value={rolesAndResponsibility}
                      onChange={(e) =>
                        setRolesAndResponsibility(e.target.value)
                      }
                      required
                    ></textarea>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="degree" className="form-label">
                      Degree
                    </Label>
                    <Input
                      type="text"
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      required
                      className="form-control"
                      id="degree"
                      placeholder="Degree"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="university" className="form-label">
                      University Name
                    </Label>
                    <Input
                      type="text"
                      value={universityName}
                      onChange={(e) => setUniversityName(e.target.value)}
                      required
                      className="form-control"
                      id="university"
                      placeholder="University Name"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="startyear" className="form-label">
                      Education Start Date:
                    </Label>
                    <Input
                      type="date"
                      className="form-control"
                      id="startyear"
                      value={educationStartDate}
                      onChange={(e) => setEducationStartDate(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="endyear" className="form-label">
                      Education Completion Date:
                    </Label>
                    <Input
                      type="date"
                      className="form-control"
                      id="endyear"
                      value={educationEndDate}
                      onChange={(e) => setEducationEndDate(e.target.value)}
                      required
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <Label htmlFor="percentage" className="form-label">
                    Percentage
                  </Label>
                  <Input
                    type="number"
                    className="form-control"
                    id="percentage"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    placeholder="Percentage"
                  />
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="cgpa" className="form-label">
                      CGPA
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="cgpa"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      placeholder="CGPA"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <label
                      htmlFor="choices-single-location"
                      className="form-label"
                    >
                      Country
                    </label>
                    <select
                      className="form-select"
                      data-trigger
                      name="choices-single-location"
                      id="choices-single-location"
                      aria-label="Default select example"
                    >
                      <option value="ME">India</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                    </select>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/joblist" className="btn btn-success">
                      Back
                    </Link>
                    <Button to="#" className="btn btn-purple">
                      Submit <i className="mdi mdi-send"></i>
                    </Button>
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

export default ApplyJobForm;
