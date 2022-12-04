import React from "react";
import "./fooor.css";

export default function Fooor2(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.datas.map((val, index) => {
            return (
              <tr>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.website}</td>
                <td>{val.Cname}</td>
                <td>
                  <button
                    onClick={() => {
                      props.cancel(index);
                    }}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
