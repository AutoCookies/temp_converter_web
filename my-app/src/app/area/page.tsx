"use client";
import { useState } from "react";

export default function AreaConverter() {
  const [area, setArea] = useState<number | "">("");
  const [fromUnit, setFromUnit] = useState("m²");
  const [toUnit, setToUnit] = useState("km²");
  const [result, setResult] = useState("");

  const convertArea = () => {
    if (typeof area !== "number" || isNaN(area)) {
      setResult("Please enter a valid area.");
      return;
    }

    const conversionRates: { [key: string]: number } = {
      "m²": 1,
      "km²": 0.000001,
      "cm²": 10000,
      "mm²": 1000000,
      "ha": 0.0001,
      "acre": 0.000247105,
      "ft²": 10.7639,
      "in²": 1550.0031,
      "yd²": 1.19599,
    };

    const convertedValue = (area * conversionRates[toUnit]) / conversionRates[fromUnit];
    setResult(`Converted area: ${convertedValue.toFixed(4)} ${toUnit}`);
  };

  return (
    <div>
      <h1>Area Converter</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value === "" ? "" : parseFloat(e.target.value))}
            placeholder="Enter area"
          />
        </label>
        <label>
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            <option value="m²">Square Meter (m²)</option>
            <option value="km²">Square Kilometer (km²)</option>
            <option value="cm²">Square Centimeter (cm²)</option>
            <option value="mm²">Square Millimeter (mm²)</option>
            <option value="ha">Hectare (ha)</option>
            <option value="acre">Acre</option>
            <option value="ft²">Square Foot (ft²)</option>
            <option value="in²">Square Inch (in²)</option>
            <option value="yd²">Square Yard (yd²)</option>
          </select>
        </label>
        <label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value="m²">Square Meter (m²)</option>
            <option value="km²">Square Kilometer (km²)</option>
            <option value="cm²">Square Centimeter (cm²)</option>
            <option value="mm²">Square Millimeter (mm²)</option>
            <option value="ha">Hectare (ha)</option>
            <option value="acre">Acre</option>
            <option value="ft²">Square Foot (ft²)</option>
            <option value="in²">Square Inch (in²)</option>
            <option value="yd²">Square Yard (yd²)</option>
          </select>
        </label>
        <button type="button" onClick={convertArea}>Convert</button>
      </form>
      <p>{result}</p>
    </div>
  );
}
