import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className="form-participants d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Vrsta plovila" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Marina" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Regija" required />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__boat-btn">Pretraga</button>
        </FormGroup>
      </div>  
    </Form>
  );
};

export default FindCarForm;
