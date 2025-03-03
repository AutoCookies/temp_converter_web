"use client";
import { useState } from "react";

export default function LengthConverter() {
  const [length, setLength] = useState<number | "">("");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState("");

  const convertLength = () => {
    if (typeof length !== "number" || isNaN(length)) {
      setResult("Please enter a valid length.");
      return;
    }

    const conversionRates: { [key: string]: number } = {
      m: 1,
      km: 0.001,
      cm: 100,
      mm: 1000,
      mi: 0.000621371,
      yd: 1.09361,
      ft: 3.28084,
      in: 39.3701,
    };

    const convertedValue = (length * conversionRates[toUnit]) / conversionRates[fromUnit];
    setResult(`Converted length: ${convertedValue.toFixed(4)} ${toUnit}`);
  };

  return (
    <div>
      <h1>Length Converter</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value === "" ? "" : parseFloat(e.target.value))}
            placeholder="Enter length"
          />
        </label>
        <label>
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            <option value="m">Meter</option>
            <option value="km">Kilometer</option>
            <option value="cm">Centimeter</option>
            <option value="mm">Millimeter</option>
            <option value="mi">Mile</option>
            <option value="yd">Yard</option>
            <option value="ft">Foot</option>
            <option value="in">Inch</option>
          </select>
        </label>
        <label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value="m">Meter</option>
            <option value="km">Kilometer</option>
            <option value="cm">Centimeter</option>
            <option value="mm">Millimeter</option>
            <option value="mi">Mile</option>
            <option value="yd">Yard</option>
            <option value="ft">Foot</option>
            <option value="in">Inch</option>
          </select>
        </label>
        <button type="button" onClick={convertLength}>Convert</button>
      </form>
      <p>{result}</p>
    </div>
  );
}
