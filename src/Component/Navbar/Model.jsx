import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Model() {

  const navigate=useNavigate();
  return (

    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
        <Modal.Dialog>
        <Modal.Body>
        <Button variant="secondary" onClick={()=>navigate("/Sign")}>SIGN UP</Button>
          <Button variant="primary" onClick={()=>navigate("/Login")} >LOGIN</Button>
        </Modal.Body>
        </Modal.Dialog>
    </div>
  );
}

export default Model;