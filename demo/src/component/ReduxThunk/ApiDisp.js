import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "./Action/ActionT";
import { useEffect } from "react";

export default function ApiDisp() {
  const select = useSelector((y) => y.user.data.data);
  const show = useDispatch();
  console.log(select);

  useEffect(() => {
    show(getUserList());
  }, []);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {select?.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.id}</td>
                  <td>{e.first_name}</td>
                  <td>{e.last_name}</td>
                  <td>{e.email}</td>
                  <hr />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
