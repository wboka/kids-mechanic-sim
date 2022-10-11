import { ReactElement, useState } from "react";
import formStyles from "../styles/Form.module.css";

function Form(): ReactElement {
  const [problem, setProblem] = useState("unknown");
  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("Ford");
  const [model, setModel] = useState("Model T");
  const [type, setType] = useState("CAR");
  const [mileage, setMileage] = useState(123456);

  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setYear(year || new Date().getFullYear());
    setMake(make || "Ford");
    setModel(model || "Model T");
    setType(type || "CAR");
    setMileage(mileage || 123456);

    const res = await fetch("/api/diagnose", {
      body: JSON.stringify({
        year,
        make,
        model,
        type,
        mileage,
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
    <div>
      <form onSubmit={registerUser}>
        <div className="flex">
          <div className="flex-item">
            <label htmlFor="year">Year</label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(+e.target.value)}
            />
          </div>
          <div className="flex-item">
            <label htmlFor="mileage">Mileage</label>
            <input
              id="mileage"
              type="number"
              value={mileage}
              onChange={(e) => setMileage(+e.target.value)}
            />
          </div>
          <div className="flex-item">
            <label htmlFor="make">Make</label>
            <input
              id="make"
              type="text"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <div className="flex-item">
            <label htmlFor="model">Model</label>
            <input
              id="model"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="flex-item">
            <label htmlFor="type">Vehicle Type</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">** Select a vehicle type **</option>
              <option value="CAR">Car</option>
              <option value="SUV">SUV</option>
              <option value="TRUCK">Truck</option>
              <option value="RV">RV</option>
              <option value="BIG_RIG">Big Rig</option>
              <option value="SCHOOL_BUS">School Bus</option>
            </select>
          </div>
        </div>

        <button type="submit" className={formStyles.register}>
          Repair
        </button>
      </form>

      <hr />

      <p className={formStyles.problem}>
        The problem is <b>{problem}</b>
      </p>
    </div>
  );
}

export default Form;
