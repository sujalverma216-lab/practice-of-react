import { useState } from "react";
import axios from "axios";
import "./Form.css";
import trading from "../assets/Trading.jpg";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/student", {
        firstName,
        lastName,
        age: Number(age),
        course
      });
      alert("Student Registration Successful!");
      setFirstName("");
      setLastName("");
      setAge("");
      setCourse("");
    } catch (error) {
      alert("Registration failed.");
    }
  };

  return (
    <form className="form-page" onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Student Registration Form</h1>

        <label>First Name</label>
        <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label>Last Name</label>
        <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label>Age</label>
        <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} required />

        <label>Course</label>
        <input type="text" placeholder="Enter Course" value={course} onChange={(e) => setCourse(e.target.value)} required />

        <button type="submit">Submit</button>
      </div>

      <div className="form-image">
        <img src={trading} alt="Trading" />
      </div>
    </form>
  );
}

export default Form;