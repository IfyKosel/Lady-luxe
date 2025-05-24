import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchModal() {
  const value = ["xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="lg"
        onClick={() => handleShow(value)}
        className="upper-items d-none d-sm-inline"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={() => handleShow(value)}
        className="upper-items d-sm-none d-block"
      />
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton />
        <Modal.Body className="h-100 d-flex align-items-center justify-content-between px-4 px-md-5">
          <div className="position-relative w-100">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search a Product"
              style={{ outline: "none" }}
              className="border-3 border-bottom border-top-0 border-start-0 border-end-0 bg-body w-100 text-secondary fs-5 pb-2"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              className="upper-items position-absolute top-50 end-0 translate-middle-y text-secondary"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModal;
