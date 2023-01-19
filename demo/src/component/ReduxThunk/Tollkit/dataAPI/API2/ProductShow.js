import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./ProductToll";

const ProductShow = () => {
  const data = useSelector((e) => e.product);
  const show = useDispatch();

  useEffect(() => {
    show(getPosts());
  }, []);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
            </tr>
          </thead>
          {data?.userlist?.map((e) => {
            return (
              <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.price}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ProductShow;
