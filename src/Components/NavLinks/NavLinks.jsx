import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { links } from "../../assets/mylinks";
import "./NavLinks.css";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="head-list position-relative">
          <div className="span-head">
            <span
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
              className="lower-list-item w-100"
            >
              <span className="link-name">{link.name}</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                size="sm"
                className="faAngleDown"
              />
              <FontAwesomeIcon icon={faPlus} size="xs" className="faPlus" />
            </span>
            {link.submenu && (
              <div className="lower-hover-list pt-0">
                <Row className="sub-link">
                  {link.sublinks.map((mysublinks) => (
                    <Col className="">
                      <h6>{mysublinks.Head}</h6>
                      {mysublinks.sublink.map((slink) => (
                        <div className="header-droplist">
                          <li className="sub-list">
                            <span className="sub-list-span">{slink.name}</span>
                          </li>
                          <hr className="hr-line" />
                        </div>
                      ))}
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {link.subfeature && (
              <div className="mega-container">
                <Container className="">
                  <Row className="sub-link">
                    {link.sublinks.map((mysublinks) => (
                      <Col className="">
                        <h6>{mysublinks.Head}</h6>
                        {mysublinks.sublink.map((slink) => (
                          <div className="header-droplist">
                            <li className="sub-list d-flex justify-content-between">
                              <span className="sub-list-span">
                                {slink.name}
                              </span>
                              {slink.ten && (
                                <span className="text-danger">{slink.ten}</span>
                              )}
                            </li>
                            <hr className="hr-line" />
                          </div>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            )}
          </div>

          {/* mobile view */}
          <div className="d-block d-xl-none">
            <div
              className={` ${heading === link.name ? "d-lg-none" : "d-none"}`}
            >
              {link.sublinks.map((slinks, index) => (
                <div key={index}>
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        onClick={() =>
                          subHeading !== slinks.Head
                            ? setSubHeading(slinks.Head)
                            : setSubHeading("")
                        }
                        className="ps-3 mt-2 sub-feature"
                      >
                        {slinks.Head}
                      </h6>{" "}
                      <FontAwesomeIcon
                        icon={faPlus}
                        size="xs"
                        className={`${
                          slinks.Head === ""
                            ? "faPlus d-none"
                            : "faPlus d-block"
                        }`}
                      />
                    </div>
                    <div
                      className={`text-capitalize ${
                        subHeading === slinks.Head ? "d-lg-none" : "d-none"
                      }`}
                    >
                      {slinks.sublink.map((slink) => (
                        <li className="py-1 ps-4 sub-link">{slink.name}</li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
