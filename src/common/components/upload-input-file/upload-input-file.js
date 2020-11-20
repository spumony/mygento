import React, { useRef, useState } from 'react';
import { Col, Input, Row } from 'reactstrap';

import ClipIcon from '../icons/clip-icon';

const InputFile = () => {
  const inputEl = useRef(null);
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleFileDelete = () => {
    setFiles([]);

    if (inputEl?.current) {
      inputEl.current.value = '';
    }
  };

  return (
    <>
      <Row
        className={`d-flex justify-content-between uploaded-file ${
          files.length < 1 ? 'hide-block' : ''
        }`}
      >
        <Col className={`${files.length < 1 ? 'hide-block' : ''}`}>
          <ClipIcon />{' '}
          {files.map((item, index) => (
            <span key={index}>{item.name}</span>
          ))}
        </Col>
        <Col xs="1" className={`${files.length < 1 ? 'hide-block' : ''}`}>
          <a onClick={handleFileDelete} className="delete-file">
            x
          </a>
        </Col>
      </Row>
      <Input
        innerRef={inputEl}
        type="file"
        className={`form-control-file text-primary font-weight-bold ${
          files.length > 0 ? 'hidden' : ''
        }`}
        id="inputFile"
        accept="application/pdf"
        onChange={handleChange}
        data-title="Загрузить резюме"
      />
    </>
  );
};

export default InputFile;
