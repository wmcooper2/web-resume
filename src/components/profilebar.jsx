import React from "react";
import ReactCardFlip from "react-card-flip";
import americanFlag from "../images/americanFlag.png";
import casualPic from "../images/casualpicture.jpg";
import japaneseFlag from "../images/japaneseFlag.png";
import largePic from "../images/picture-large.jpg";
import medPic from "../images/picture-medium.jpg";
import smallPic from "../images/picture-small.jpg";
import {
  ENGLISH,
  MYNAME,
  MYJAPANESENAME,
  NOTOSERIF,
  SMALLMAX,
  MEDMAX,
} from "./utilities_constants.js";

const ProfileBar = (props) => {
  const {
    screenW,
    changeLanguage,
    language,
    casualPicFlipped,
    flipPic,
  } = props;
  const myName = language === ENGLISH ? MYNAME : MYJAPANESENAME;

  const image =
    screenW < SMALLMAX ? smallPic : screenW < MEDMAX ? medPic : largePic;

  const barHeight =
    screenW < SMALLMAX ? "80px" : screenW < MEDMAX ? "100%" : "100%";
  const lang = language === ENGLISH ? "日本語" : ENGLISH;
  const flag = lang === ENGLISH ? americanFlag : japaneseFlag;

  const nameStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const engjapStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: NOTOSERIF,
  };

  let imageStyles = { display: "flex", overflow: "hidden" };
  imageStyles.boxShadow = "2px 2px 2px 2px rgba(0, 0, 0, 0.2)";
  if (image === medPic) {
    imageStyles.margin = "auto auto";
  }

  if (image === largePic) {
    imageStyles.margin = "auto auto";
  }

  let pictureStyles = {};
  if (image === largePic) {
    pictureStyles.width = "250px";
  }

  return (
    <div className="profilebar" style={{ height: barHeight }}>
      <div className="picture" style={pictureStyles}>
        {screenW >= MEDMAX ? (
          <ReactCardFlip isFlipped={casualPicFlipped}>
            <React.Fragment>
              <img
                src={image}
                alt="profile pic"
                style={imageStyles}
                onClick={() => flipPic()}
              />
            </React.Fragment>
            <React.Fragment>
              <img
                src={casualPic}
                alt="profile pic"
                style={imageStyles}
                onClick={() => flipPic()}
              />
            </React.Fragment>
          </ReactCardFlip>
        ) : (
          <img src={image} alt="profile pic" style={imageStyles} />
        )}
      </div>
      <div className="name" style={nameStyles}>
        {myName}
      </div>
      <div
        className="engjap"
        style={engjapStyles}
        onClick={() => changeLanguage()}
      >
        {lang}
        <img
          className="flag"
          src={flag}
          alt="flag"
          width="40px"
          height="40px"
        ></img>
      </div>
    </div>
  );
};

export default ProfileBar;
