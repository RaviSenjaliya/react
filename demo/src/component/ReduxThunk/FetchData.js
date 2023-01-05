import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ApiDispp() {
  const select = useSelector((y) => y.Fatch.data);
  const show = useDispatch();

  useEffect(() => {
    show({
      type: "FetchRequest",
    });
  }, []);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {select?.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.userId}</td>
                  <td>{e.title}</td>
                  <td>{e.body}</td>
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
