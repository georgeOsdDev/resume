import React from "react";
import Counter from "./Counter";

function Badges() {
  return (
    <p align="left">
      <a
        href="https://github.com/georgeOsdDev/resume/blob/main/LICENSE"
        style={{ marginRight: "2px" }}
      >
        <img
          src="https://img.shields.io/badge/license-0BSD-blue.svg"
          alt="Minimal Blog is released under the 0BSD license."
        />
      </a>
      <Counter />
    </p>
  );
}

export default Badges;
