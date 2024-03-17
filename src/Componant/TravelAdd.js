import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = "http://localhost:4000";
function TravelAdd() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, id: e.target.value });
        }}
        placeholder="ID"
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, TravellerName: e.target.value });
        }}
        placeholder="TravellerName"
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, Destination: e.target.value });
        }}
        placeholder="Destination"
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, ExpenseAmount: e.target.value });
        }}
        placeholder="Enter Amount"
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, ExpenseDate: e.target.value });
        }}
        placeholder="Date"
      />
      <br />
      <button
        type="button"
        onClick={() => {
          fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => {
            navigate("/");
          });
        }}
      >
        Add
      </button>
    </>
  );
}
export default TravelAdd;
