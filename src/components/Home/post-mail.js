import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function postMail () {

    return (
        <div className="home-form">
            <h1>OR JUST <span className="purple">MAIL</span> ME</h1>
            <form action="https://getform.io/f/b9d26210-0000-4fd7-82f5-77629b25c2c6" method="POST">
                <Container>
                    <Row className="home-form-row">
                        <Col md={2}>
                        </Col>
                        <Col md={1}>
                            <label>Title</label>
                        </Col>
                        <Col md={3}>
                            <input type="text" name="name" className="home-form-input" required/>
                        </Col>
                        <Col md={1}>
                            <label>Email</label>
                        </Col>
                        <Col md={3}>
                            <input type="email" name="email" className="home-form-input" required/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                            <label>Message</label>
                        </Col>
                        <Col md={6}>
                        <textarea type="text" name="message" className="home-form-input textarea"  required/>
                        </Col>
                    </Row>
                <Button type="submit" className="home-form-btn">Send</Button>
                </Container>
            </form>
        </div>
    )   
}

export default postMail;