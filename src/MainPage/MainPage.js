import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import CommonChatting from './CommonChatting.js';
import OpenChatting from './OpenChatting.js';
//import './TopNav.scss';

function MyPage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <div>
                <Button className="btn" variant="outline-primary" onClick={handleShow}>로그인</Button>
                <Button className="btn" variant="outline-primary" onClick={handleShow}>회원가입</Button>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>아이디</Modal.Title>
                        <Modal.Title>비밀번호</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>데이터</Modal.Body>
                    <Modal.Footer>
                        <Button className="btn_close" variant="secondary" onClick={handleClose}>
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div> 
                <Button>open chatting</Button>{' '}
            </div>

            <div>
                <CommonChatting></CommonChatting>
            </div>

            <div>
                <OpenChatting></OpenChatting>
            </div>
            
        </div>
    )
}
export default MyPage;
