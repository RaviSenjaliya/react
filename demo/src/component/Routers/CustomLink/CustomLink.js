import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustComLink({ children, to, ...props }) {
  let track = useResolvedPath(to);
  let match = useMatch({ path: track.pathname });
  console.log(track);
  console.log(to);
  console.log(match);
  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
}
