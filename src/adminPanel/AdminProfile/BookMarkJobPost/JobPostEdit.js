import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { subURL } from "../../../utils/URLs";
import Select from "react-select";
import axios from "axios";

const JobPostEdit = () => {
  const [jobType, setJobType] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [skillName, setSkillName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [isCompanyNameHidden, setIsCompanyNameHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");

  const [jobTypeOptions, setJobTypeOptions] = useState([]);
  const [skillSetOptions, setSkillSetOptions] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchJobTypeOptions = async () => {
      const response = await fetch(`${subURL}/job_type/`);
      const data = await response.json();

      setJobTypeOptions(data);
    };

    fetchJobTypeOptions();
  }, []);

  useEffect(() => {
    axios
      .get(`${subURL}/company_save_details`)
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const fetchSkillSetOptions = async () => {
      const response = await fetch(`${subURL}/skillset/`);
      const data = await response.json();

      setSkillSetOptions(data);
    };

    fetchSkillSetOptions();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const options = data.map((country) => ({
        label: country.name,
        value: country.alpha2Code,
      }));
      setCountries(options);
    };
    fetchCountries();
  }, []);
  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  const handleChangeCompany = (event) => {
    setSelectedCompanyId(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // async function storeData() {
    //   const formData = {
    //     job_type_id: jobType,
    //     company_id: selectedCompanyId,
    //     is_company_name_hidden: isCompanyNameHidden,
    //     created_date:
    //     establishment_date: establishmentDate,
    //     company_website_url: companyWebsite,
    //   };
    //   console.log(formData);
    //   try {
    //     let headers = {
    //       "Content-Type": "application/json; charset=utf-8",
    //     };
    //     const res = await axios.post(
    //       `${subURL}/company_save_details/`,
    //       formData,
    //       { headers: headers }
    //     );
    //     console.log(res.data);

    //     if (res.status === 201) {
    //       console.log("success");
    //       setSuccessMessage("Data saved successfully!");
    //       setShowModal(true);
    //       // do something to log the user in, e.g. redirect to a dashboard page
    //     } else {
    //       console.log("error");
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Post a New Job!</h5>
              </div>
            </Col>
          </Row>
          <form
            action="#"
            className="job-post-form shadow mt-4"
            onSubmit={handleSubmit}
          >
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="jobType">Job Type</Label>
                    <Input
                      type="select"
                      name="jobType"
                      id="jobType"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
                      <option value="">Select Job Type</option>
                      {jobTypeOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.job_type.charAt(0).toUpperCase() +
                            option.job_type.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label for="skillLevel">Skill Name</Label>
                    <Input
                      type="select"
                      name="skillname"
                      id="skillname"
                      value={skillName}
                      onChange={(e) => setSkillName(e.target.value)}
                    >
                      <option value="">Select Skill Name</option>
                      {skillSetOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.skill_set_name.charAt(0).toUpperCase() +
                            option.skill_set_name.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label for="skillLevel">Skill Level</Label>
                    <Input
                      type="select"
                      name="skillLevel"
                      id="skillLevel"
                      value={skillLevel}
                      onChange={(e) => setSkillLevel(e.target.value)}
                    >
                      <option value="">Select Skill Level</option>
                      <option value="Entry Level"> 1</option>
                      <option value="Mid Level">2</option>
                      <option value="Senior Level">3</option>
                      <option value="Senior Level">4</option>
                      <option value="Senior Level">5</option>
                    </Input>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="streetAddress">Street Address</Label>
                    <Input
                      type="text"
                      name="streetAddress"
                      id="streetAddress"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="city">City</Label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="state">State</Label>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="country">Country</Label>
                    {/* <Input
                      type="text"
                      name="country"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    /> */}
                    <Select
                      placeholder="Select Country"
                      options={countries}
                      value={selectedCountry}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="zip">Zip</Label>
                    <Input
                      type="text"
                      name="zip"
                      id="zip"
                      maxLength={7}
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={3} style={{ marginTop: "3%" }}>
                  <div className="mb-4">
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={isCompanyNameHidden}
                        onChange={(e) =>
                          setIsCompanyNameHidden(e.target.checked)
                        }
                      />{" "}
                      Hide Company Name
                    </Label>
                  </div>
                </Col>
                <Col lg={3} style={{ marginTop: "3%" }}>
                  <div className="mb-4">
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                      />{" "}
                      Active
                    </Label>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="jobDescription">Job Description</Label>
                    <Input
                      type="textarea"
                      name="jobDescription"
                      id="jobDescription"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="jobDescription">Company Name</Label>
                    <Input
                      type="select"
                      name="companyname"
                      id="companyname"
                      // value={companies}
                      onChange={handleChangeCompany}
                    >
                      <option value="">Select Company Name</option>
                      {companies.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.company_name.charAt(0).toUpperCase() +
                            option.company_name.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/admin" className="btn btn-success">
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

export default JobPostEdit;
