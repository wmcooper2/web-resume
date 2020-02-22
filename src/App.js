import React from "react";
import "./App.sass";

function App() {
  return (
    <div className="resume wireframe">
      <div className="profilebar wireframe">
        <div className="picture wireframe">Picture</div>
        <div className="name wireframe">Name</div>
        <div className="engjap wireframe">EngJap</div>
        <div className="qrcode wireframe">QR Code</div>
      </div>

      <div className="details wireframe">
        <div className="description wireframe">Description</div>
        <div className="personalsite wireframe">Personal Sites</div>
        <div className="skills wireframe">Skills</div>
        <div className="experience wireframe">Experience</div>
        <div className="education wireframe">Education</div>
        <div className="certifications wireframe">Certifications</div>
      </div>
    </div>
  );
}

export default App;
