import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const apiUrl = "http://localhost:4000";
function TravelUpdate() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(apiUrl + "/" + id)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <input
        type="text"
        value={data.TravellerName}
        onChange={(e) => {
          setData({ ...data, TravellerName: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        value={data.Destination}
        onChange={(e) => {
          setData({ ...data, Destination: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        value={data.ExpenseAmount}
        onChange={(e) => {
          setData({ ...data, ExpenseAmount: e.target.value });
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch(apiUrl + "/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then(() => {
              navigate("/");
            });
        }}
      >
        Save
      </button>
    </>
  );
}
export default TravelUpdate;
