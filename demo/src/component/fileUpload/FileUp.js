import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function FileUp() {
  const [Data, setData] = useState(null);
  const [Get, setget] = useState([]);

  const myhandler = (e) => {
    setData(e.target.files[0]);
  };
  const save = () => {
    let formData = new FormData();
    formData.append("file", Data);

    axios.post("http://localhost:8080/upload", formData).then((e) => {
      console.log(e.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8080/files").then((e) => {
      setget(e.data);
    });
  }, []);
  return (
    <div>
      <input type="file" onChange={myhandler} />
      <input
        type="button"
        value="save"
        className="btn btn-danger"
        onClick={save}
      />

      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>
            {Get.map((e) => {
              return (
                <tr>
                  <td>{e.name}</td>
                  <td>{e.url}</td>
                  <button className="btn btn-danger">
                    <a href={e.url} download>
                      download
                    </a>
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
