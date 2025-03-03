"use client";
import { useState } from "react";

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState<number | "">("");
  const [fromUnit, setFromUnit] = useState("C");
  const [toUnit, setToUnit] = useState("F");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    if (typeof temperature !== "number" || isNaN(temperature)) {
      setResult("Please enter a valid temperature.");
      return;
    }

    let convertedValue: number;

    if (fromUnit === "C") {
      convertedValue = toUnit === "F" ? temperature * 1.8 + 32 : temperature + 273.15;
    } else if (fromUnit === "F") {
      convertedValue = toUnit === "C" ? (temperature - 32) / 1.8 : (temperature - 32) / 1.8 + 273.15;
    } else {
      convertedValue = toUnit === "C" ? temperature - 273.15 : (temperature - 273.15) * 1.8 + 32;
    }

    setResult(`Converted temperature: ${convertedValue.toFixed(2)}°${toUnit}`);
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value === "" ? "" : parseFloat(e.target.value))}
            placeholder="Enter temperature"
          />
        </label>
        <label>
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </label>
        <label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </label>
        <button type="button" onClick={convertTemperature}>Convert</button>
      </form>
      <p>{result}</p>
    </div>
  );
}
