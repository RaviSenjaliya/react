import React from "react";
import { Outlet } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <div className="text-center mt-5">
        <h3>this user</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          corporis hic explicabo excepturi vitae esse deserunt nam aliquam
          magnam earum?
        </p>
      </div>
      <Outlet />;
    </div>
  );
}
