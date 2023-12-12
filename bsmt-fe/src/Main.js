import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Main.css";
import Select from "react-select";
import { Steps } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Main = () => {
  const fiscalPeriodOptions = [
    {
      value: "FY24 Q4 - Wk8 OL - ELT02_CSG_CPG (Active)",
      label: "FY24 Q4 - Wk8 OL - ELT02_CSG_CPG (Active)",
    },
    {
      value: "FY24 Q4 - Wk8 OL - ELT02_FIN_CFO (Active)",
      label: "FY24 Q4 - Wk8 OL - ELT02_FIN_CFO (Active)",
    },
    {
      value: "FY24 Q4 - Wk10 OL - ELT02_CSG_CSB (Inactive)",
      label: "FY24 Q4 - Wk10 OL - ELT02_CSG_CSB (Inactive)",
    },
  ];

  const ELTLevelOptions = [
    { value: "ELT02", label: "ELT02" },
    { value: "ELT03", label: "ELT03" },
    { value: "ELT04", label: "ELT04" },
    { value: "ELT05", label: "ELT05" },
  ];

  const ELTOrgOptions = [{ value: "ELT02_CSG_CSB", label: "ELT02_CSG_CSB" }];
  const [current, setCurrent] = useState(0);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [selectedFiscalPeriod, setSelectedFiscalPeriod] = useState({
    value: "FY24 Q4 - Wk8 OL - ELT02_CSG_CPG (Active)",
    label: "FY24 Q4 - Wk8 OL - ELT02_CSG_CPG (Active)",
  });

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const handleChevronClick = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <>
      <Container fluid className="mainSection">
        <Card className="loadDataCard">
          <Card.Body className="loadDataBody">
            <span id="loadDataLabel">Load Data In</span>
            <label>Fiscal Period/Scenario: </label>
            <Select
              defaultValue={fiscalPeriodOptions[0]}
              isSearchable
              options={fiscalPeriodOptions}
              className="basic-single"
              classNamePrefix="select"
              onChange={(e) => setSelectedFiscalPeriod(e)}
            />
            <label>ELT Level</label>
            <Select
              defaultValue={ELTLevelOptions[0]}
              isSearchable
              options={ELTLevelOptions}
              className="basic-single"
              classNamePrefix="select"
            />

            <label>ELT Org(s)</label>
            <Select
              defaultValue={ELTOrgOptions[0]}
              isSearchable
              options={ELTOrgOptions}
              className="basic-single"
              classNamePrefix="select"
            />

            <Button variant="primary">Load Data</Button>
          </Card.Body>
        </Card>
        <Card className="searchCard">
          <div className="searchRow">
            {/* <Card.Body>This is some text within a card body.</Card.Body> */}
            <Form
              style={{
                marginRight: "1rem",
                width: "80%",
                marginTop: "10px",
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Type anything to search"
                />
              </Form.Group>
            </Form>
            <Button
              style={{
                marginRight: "1rem",
                width: "150px",
                backgroundColor: "#6ea204",
                height: "50%",
                marginTop: "10px",
              }}
            >
              Search
            </Button>
            <Button
              style={{
                width: "150px",
                backgroundColor: "#b7b7b7",
                height: "50%",
                marginTop: "10px",
              }}
            >
              Clear
            </Button>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#b7b7b7",
                borderRadius: "5px",
                marginLeft: "1.5rem",
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {showAdvancedSearch ? (
                <UpOutlined onClick={() => handleChevronClick()} />
              ) : (
                <DownOutlined onClick={() => handleChevronClick()} />
              )}
            </div>
          </div>
          {showAdvancedSearch === true && (
            <div style={{ marginTop: "1rem" }}>
              <span>Advanced Search Options</span>
            </div>
          )}
        </Card>
        <Card className="dataCard">
          <Card.Body>
            <p>Outlook HC</p>
            <p>Data is from Q3 W13 HC report</p>
            {selectedFiscalPeriod.value.includes("Active") && (
              <div id="stepsContainer">
                <Steps
                  current={current}
                  onChange={onChange}
                  // style={{ width: "50%" }}
                  items={[
                    {
                      title:
                        "L1 Business Operations Leader; L3 Financial Controller - ELT02",
                      status: "finish",
                      // description: "Hello World!",
                      icon: (
                        <div
                          className={
                            current === 0 ? "activeStepItem" : "stepItem"
                          }
                        >
                          <span>1</span>
                        </div>
                      ),
                    },
                    {
                      title: "L4 Financial Planning & Analysis - ELT02",
                      status: "finish",
                      description: "ELT02_CSG_CPG",
                      icon: (
                        <div
                          className={
                            current === 1 ? "activeStepItem" : "stepItem"
                          }
                        >
                          <span>2</span>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            )}
            <Tabs
              defaultActiveKey="activeHC"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="activeHC" title="Active HC" className="tabItem">
                Tab content for Active HC
              </Tab>
              <Tab eventKey="openReq" title="Open Req">
                Tab content for Open Req
              </Tab>
              <Tab eventKey="hcSummary" title="HC Summary">
                Tab content for HC Summary
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Main;
