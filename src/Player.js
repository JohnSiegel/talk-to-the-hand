import React from "react";
import VideoPlayer from "./VideoPlayer";
import { useNavigate, Link } from "react-router-dom";

const VPlayer = ({ words = ["yes"] }) => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "abolute", right: "50%" }}>
      <Link to="/">Back</Link>
      <VideoPlayer
        onDone={() => {
          navigate("/");
        }}
        filenames={words.map((w) => `/movies/${w}.mov`)}
      />
    </div>
  );
};

export default VPlayer;
