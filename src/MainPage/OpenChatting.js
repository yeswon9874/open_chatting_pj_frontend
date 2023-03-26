import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './TopNav.scss';

function OpenChatting() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const openchattingBtn = () => {
        setShow(true)
    };

    return(
        <div>

            <div> 
                <Button className="btn" variant="outline-primary" onClick={openchattingBtn}>오픈채팅</Button>{' '}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>오픈채팅</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                    <Modal.Footer>
                        <Button className="btn_close" variant="secondary" onClick={handleClose}>
                            닫기
                        </Button>
                    </Modal.Footer>
                    <Modal.Footer/>
                </Modal>
            </div>
        </div>
    )
}
export default OpenChatting;
