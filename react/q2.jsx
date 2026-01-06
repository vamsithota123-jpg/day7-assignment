import { useMemo, useState } from "react";

function expensiveCalculation(num) {
  console.count("Calculation runs");

  if (num < 2) return { isPrime: false, factors: [], sum: 0 };

  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }

  return {
    isPrime: factors.length === 2,
    factors,
    sum: factors.reduce((a, b) => a + b, 0)
  };
}

export default function Analyzer() {
  const [number, setNumber] = useState(10);
  const [dark, setDark] = useState(false);

  // ✅ Memoized expensive computation
  const result = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        padding: "20px"
      }}
    >
      <h2>Number Analyzer</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />

      <button onClick={() => setDark(!dark)}>
        Toggle
    {dark ? " Light" : " Dark"} Theme