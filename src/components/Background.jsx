import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import config from "../data/tsparticles-config.json";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    init && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1   // <-- keeps it behind all other elements
        }}
      >
        <Particles id="tsparticles" options={config} />
      </div>
    )
  );
};

export default Background;
