import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function gobacke() {
    navigate("/contact");
  }
  return (
    <>
      <section className="p-5">
        <div>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis distinctio incidunt commodi a alias aperiam aspernatur
            voluptatibus at! Dolorum vitae repudiandae commodi ad sit natus
            dolor fugit ipsam placeat?
          </h6>
        </div>
        <button className="btn btn-danger" onClick={gobacke}>
          go contact page
        </button>
      </section>
    </>
  );
};

export default About;
