import { ReactElement, useState } from "react";
import formStyles from "../styles/Form.module.css";

function Form(): ReactElement {
  const [problem, setProblem] = useState("unknown");

  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch("/api/diagnose", {
      body: JSON.stringify({
        year: event.target.year.value,
        make: event.target.make.value,
        model: event.target.model.value,
        type: event.target.type.value,
        mileage: event.target.mileage.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    setProblem(result.problem);
  };

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="year">Year</label>
      <input id="year" type="number" autoComplete="year" required />
      <label htmlFor="mileage">Mileage</label>
      <input id="mileage" type="number" autoComplete="mileage" required />
      <label htmlFor="make">Make</label>
      <input id="make" type="text" autoComplete="make" required />
      <label htmlFor="model">Model</label>
      <input id="model" type="text" autoComplete="model" required />
      <label htmlFor="type">Vehicle Type</label>
      <select id="type" required>
        <option value="">** Select a vehicle type **</option>
        <option value="CAR">Car</option>
        <option value="SUV">SUV</option>
        <option value="TRUCK">Truck</option>
        <option value="RV">RV</option>
        <option value="BIG_RIG">Big Rig</option>
        <option value="SCHOOL_BUS">School Bus</option>
      </select>
      <button type="submit" className={formStyles.register}>
        Repair
      </button>

      <hr />

      <p>
        The problem is <b>{problem}</b>
      </p>
    </form>
  );
}

export default Form;
