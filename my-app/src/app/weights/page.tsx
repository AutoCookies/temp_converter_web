"use client";
import { useState } from "react";

export default function WeightConverter() {
  const [weight, setWeight] = useState<number | "">("");
  const [unit, setUnit] = useState("kg");
  const [result, setResult] = useState("");

  const convertWeight = () => {
    let convertedValue = 0;
    if (typeof weight === "number") {
      switch (unit) {
        case "kg":
          convertedValue = weight;
          break;
        case "g":
          convertedValue = weight * 1000;
          break;
        case "mg":
          convertedValue = weight * 1e6;
          break;
        case "lb":
          convertedValue = weight * 2.20462;
          break;
        case "oz":
          convertedValue = weight * 35.274;
          break;
        default:
          convertedValue = weight;
      }
      setResult(`Converted weight: ${convertedValue} ${unit}`);
    } else {
      setResult("Please enter a valid weight.");
    }
  };

  return (
    <div className="container">
      <h1 className="welcome-header">Weight Converter</h1>
      <p className="description">
        Please enter the weight and select the unit to convert to.
      </p>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : "")}
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="kg">Kilogram</option>
        <option value="g">Gram</option>
        <option value="mg">Milligram</option>
        <option value="lb">Pound</option>
        <option value="oz">Ounce</option>
      </select>
      <button onClick={convertWeight}>Convert</button>
      <p>{result}</p>
    </div>
  );
}
