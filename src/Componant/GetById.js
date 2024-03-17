import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const apiUrl = "http://localhost:4000";
function GetById() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(apiUrl + "/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  return (
    <>
      <div className="container mt-3 border border-3 border-primary rounded">
        <div className="row ">
          <div className="col">
            <table class="table">
              <tr>
                <td>
                  <h1 className="h1 text-primary ">id is :- {data.id}</h1>
                  <h5 className="p1 text-danger ">
                    Name is :- {data.TravellerName}
                  </h5>
                  <h5 className="p1 text-danger">
                    Destination :- {data.Destination}
                  </h5>
                  <h5 className="p1 text-danger ">
                    Amount is :- {data.ExpenseAmount}
                  </h5>
                  <h5 className="p1 text-danger">Date :- {data.ExpenseDate}</h5>
                  <button
                    className="btn btn-warning m-3  border border-2 border-warning"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary border border-2 border-primary m-3"
                    onClick={() => {
                      navigate("/" + id + "/edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger m-3  border border-2 border-danger"
                    onClick={() => {
                      fetch(apiUrl + "/" + id, {
                        method: "DELETE",
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((res) => {
                          console.log(res);
                          navigate("/");
                        });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetById;
