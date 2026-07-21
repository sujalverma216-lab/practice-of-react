import "./Form.css";
import trading from "../assets/Trading.jpg";

function Form() {
  return (
    <form className="form-page">

      <div className="form-container">
        <h1>Student Registration Form</h1>

        <label>First Name</label>
        <input type="text" placeholder="Enter First Name" />

        <label>Last Name</label>
        <input type="text" placeholder="Enter Last Name" />

        <label>Age</label>
        <input type="number" placeholder="Enter Age" />

        <label>Course</label>
        <input type="text" placeholder="Enter Course" />

        <button>Submit</button>
      </div>

      <div className="form-image">
        <img src={trading} alt="Trading" />
      </div>

    </form>
  );
}

export default Form;