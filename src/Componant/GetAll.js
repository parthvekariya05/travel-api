import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const apiUrl = "http://localhost:4000/";
function GetAll() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  const formatedTravel = data.map((item) => {
    return (
      <>
        <div class="card col-3 w-50 text-bg-secondary border-dark ">
          <div class="card-body ">
            <h5 class="card-title">ID : {item.id}</h5>
            <p class="card-text">TravellerName : {item.TravellerName}</p>
            <p class="card-text">Destination : {item.Destination}</p>
            <p className="card-text">Amount : {item.ExpenseAmount}</p>
            <p className="card-text">Date:{item.ExpenseDate}</p>
            <Link to={"/" + item.id} type="button" class="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="container">
        <Link className="btn btn-primary" to="/add">
          Add
        </Link>

        <div className="container">
          <div className="row">{formatedTravel}</div>
        </div>
      </div>
    </>
  );
}
export default GetAll;
