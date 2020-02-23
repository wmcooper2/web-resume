import React from "react";
import { FaPython, FaJsSquare, FaReact } from "react-icons/fa";

const description = {
  title: "About Me",
  content:
    "I'm a self-taught developer with 5 years experience. My primary strengths are Python and Javascript. I enjoy making online games and tools for TEFL teachers. I'm looking for my first professional software position. Feel free to pass around my information to anyone who may be interested.",
  japaneseTitle: "求人情報",
  japaneseContent: "自分の紹介"
};

//github projects
const projects = {
  title: "My Web Presence",
  content: [
    { what: "Project Site", url: "https://www.wmcooper2.com/", logo: "" },
    { what: "TEFL Assistant", url: "https://www.teflassistant.com", logo: "" },
    { what: "GitHub", url: "https://github.com/wmcooper2", logo: "" },
    {
      what: "LinkedIn",
      url: "https://www.linkedin.com/in/wandalcooper/",
      logo: ""
    }
  ],
  japaneseTitle: "ウェブプレッスンス"
};

// tech used
const skills = {
  title: "Skills",
  content: [
    { what: "Python3", logo: <FaPython /> },
    { what: "Javascript", logo: <FaJsSquare /> },
    { what: "React", logo: <FaReact /> }
  ],
  japaneseTitle: "専門技術"
};

// work experience
const experiences = {
  title: "Experiences",
  content: ["expereince 1", "experience 2"]
};

const education = {
  title: "Education",
  content: [
    {
      what: "Foothill Farms HS",
      where: "Sacramento, CA",
      when: [new Date(2001, 6), new Date(2002, 10)]
    },
    {
      what: "East Nicolaus HS",
      where: "Trowbridge, CA",
      when: [new Date(2002, 10), new Date(2005, 6)]
    },
    {
      what: "Universal Technical Institute",
      where: "Avondale, AZ",
      when: [new Date(2005, 6), new Date(2006, 7)]
    },
    {
      what: "Universal Technical Institute",
      where: "Sacramento, CA",
      when: [new Date(2006, 7), new Date(2007, 6)]
    },
    {
      what: "Naval Nuclear Power Training Command",
      where: "Goose Creek, SC",
      when: [new Date(2007, 12), new Date(2008, 10)]
    },
    {
      what: "Nuclear Prototype Training",
      where: "Ballston Spa, NY",
      when: [new Date(2008, 10), new Date(2009, 5)]
    },
    {
      what: "American River College",
      where: "Sacramento, CA",
      when: [new Date(2010, 5), new Date(2011, 6)]
    },
    {
      what: "DeVry University",
      where: "Elk Grove, CA",
      when: [new Date(2012, 2), new Date(2014, 8)]
    }
  ]
};

const certifications = {
  title: "Certifications",
  content: [
    {
      where: "MITx",
      what: "Introduction to Computer Science and Programming Using Python",
      url:
        "https://courses.edx.org/certificates/4117ecd2c2ee46a0a39e7622d71e93b1"
    },
    {
      where: "Free Code Camp",
      what: "Responsive Web Design",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/responsive-web-design"
    },
    {
      where: "Free Code Camp",
      what: "Javascript Algorithms and Data Structures",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/javascript-algorithms-and-data-structures"
    },
    {
      where: "Free Code Camp",
      what: "Front End Libraries",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/front-end-libraries"
    },
    {
      where: "Free Code Camp",
      what: "Data Visualization",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/front-end-libraries"
    },
    {
      where: "Free Code Camp",
      what: "APIs and Microservices",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/apis-and-microservices"
    },
    {
      where: "International TEFL Academy",
      what: "TEFL Certificate",
      url: ""
    },
    {
      where: "",
      what: "JLPT N3",
      url: ""
    }
  ]
};

export {
  description,
  projects,
  skills,
  experiences,
  education,
  certifications
};
