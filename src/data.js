import React from "react";
import pythonIcon from "./python-icon.png";
import javascriptIcon from "./javascript-icon.png";
import reactIcon from "./react-icon.png";

const description = {
  title: "Career Profile",
  content: (
    <React.Fragment>
      <p>
        I am a self-taught developer with an entrepreneurial mindset. I am a
        planner and strategic thinker who is patient and perseveres toward my
        goals. I am a strong generalist with a broad range of experience which
        include mechanical repair, starting my own business and teaching. I am
        passionate about creating new things and am focused on software
        development.
      </p>
      <p>
        My main interests are in making visual tools, but I love all kinds of
        software, coding languages and creating new things with code. I’m not
        afraid to dive right in and make a plan to reach my goals.
      </p>
    </React.Fragment>
  ),
  japaneseTitle: "求人情報",
  japaneseContent: (
    <React.Fragment>
      <p>
        私は起業家精神のある独学の開発者です。
        私はプランナーであり、忍耐強く、戦略的な思想家です。
        私は機械の修理、自分のビジネスの開始、および指導の幅広い経験を持つ強力なジェネラリストです。
        私は新しいものを作成し、ソフトウェア開発に集中することに情熱を傾けています。
      </p>
      <p>
        私の主な関心はビジュアルツールの作成ですが、あらゆる種類のソフトウェア、コーディング言語、コードを使用して新しいものを作成するのが大好きです。
        私はすぐにジャンプして自分の目標を計画することを恐れていません。
      </p>
    </React.Fragment>
  ),
};

const webPresence = {
  title: "My Web Presence",
  japaneseTitle: "ウェブプレッスンス",
  content: [
    {
      what: "Project Site",
      japaneseWhat: "プロジェクトサイト（自分の）",
      url: "https://www.wmcooper2.com/",
      logo: "",
    },

    // {
    // what: "Tokyo Python",
    // japaneseWhat: "Tokyo Python",
    // url: "https://tokyopython.com",
    // logo: "",
    // },

    // {
    // what: "TEFL Assistant",
    // japaneseWhat: "TEFLアシスタント（自分の）",
    // url: "https://www.teflassistant.com",
    // logo: "",
    // },

    {
      what: "GitHub",
      japaneseWhat: "GitHub",
      url: "https://github.com/wmcooper2",
      logo: "",
    },

    {
      what: "LinkedIn",
      japaneseWhat: "LinkedIn",
      url: "https://www.linkedin.com/in/wandalcooper/",
      logo: "",
    },
  ],
};

const professionalExperience = [
  {
    company: "Borderlink, Inc.",
    location: "Tokyo, Japan.",
    year: ["placeholder1", "placeholder2"],
    jobTitle: "ALT",
    talkingPoints: ["one", "two", "three", "four"],
  },

  {
    company: "MorphoTrust USA",
    location: "Tokyo, Japan.",
    year: ["placeholder1", "placeholder2"],
    jobTitle: "ALT",
    talkingPoints: ["one", "two", "three", "four"],
  },

  {
    company: "Bubba Mac's Link Shack",
    location: "Tokyo, Japan.",
    year: ["placeholder1", "placeholder2"],
    jobTitle: "ALT",
    talkingPoints: ["one", "two", "three", "four"],
  },

  {
    company: "US Navy",
    location: "Tokyo, Japan.",
    year: ["placeholder1", "placeholder2"],
    jobTitle: "ALT",
    talkingPoints: ["one", "two", "three", "four"],
  },

  {
    company: "CTI Leasing",
    location: "Tokyo, Japan.",
    year: ["placeholder1", "placeholder2"],
    jobTitle: "ALT",
    talkingPoints: ["one", "two", "three", "four"],
  },
];

// tech used
const skills = {
  title: "Primary Skills",
  content: [
    { what: "Python3", logo: pythonIcon },
    { what: "Javascript", logo: javascriptIcon },
    { what: "React", logo: reactIcon },
  ],
  japaneseTitle: "専門技術",
};

// work experience
const experiences = {
  title: "Experiences",
  content: ["expereince 1", "experience 2"],
};

const education = {
  title: "Education",
  content: [
    {
      shortName: "DeVry",
      longName: "DeVry University",
      location: "Elk Grove, CA",
      shortWhere: "Elk Grove, CA",
      longWhere: "Elk Grove, California",
      year: [new Date(2012, 2), new Date(2014, 8)],
    },

    {
      shortName: "UTI",
      longName: "Universal Technical Institute",
      location: "Sacramento, CA",
      shortWhere: "Sacramento, CA",
      longWhere: "Sacramento, Calfornia",
      year: [new Date(2006, 7), new Date(2007, 6)],
    },

    // {
    // shortName: "Foothill Farms HS",
    // longName: "Foothill Farms High School",
    // location: "Sacramento, CA",
    // shortWhere: "Sacramento, CA",
    // longWhere: "Sacramento, California",
    // year: [new Date(2001, 6), new Date(2002, 10)],
    // },

    // {
    // shortName: "East Nicolaus HS",
    // longName: "East Nicolaus High School",
    // location: "Trowbridge, CA",
    // shortWhere: "Trowbridge, CA",
    // longWhere: "Trowbridge, California",
    // year: [new Date(2002, 10), new Date(2005, 6)],
    // },

    // {
    // shortName: "UTI",
    // longName: "Universal Technical Institute",
    // location: "Avondale, AZ",
    // shortWhere: "Avondale, AZ",
    // longWhere: "Avondale, Arizona",
    // year: [new Date(2005, 6), new Date(2006, 7)],
    // },

    // {
    // shortName: "NNPTC",
    // longName: "Naval Nuclear Power Training Command",
    // location: "Goose Creek, SC",
    // shortWhere: "Goose Creek, SC",
    // longWhere: "Goose Creek, South Carolina",
    // year: [new Date(2007, 12), new Date(2008, 10)],
    // },

    // {
    // shortName: "NPT",
    // longName: "Nuclear Prototype Training",
    // location: "Ballston Spa, NY",
    // shortWhere: "Ballston Spa, NY",
    // longWhere: "Ballston Spa, New York",
    // year: [new Date(2008, 10), new Date(2009, 5)],
    // },

    // {
    // shortName: "ARC",
    // longName: "American River College",
    // location: "Sacramento, CA",
    // shortWhere: "Sacramento, CA",
    // longWhere: "Sacramento, California",
    // year: [new Date(2010, 5), new Date(2011, 6)],
    // },
  ],
};

const certifications = {
  title: "Certifications",
  content: [
    {
      where: "MITx",
      what: "Introduction to Computer Science and Programming Using Python",
      url:
        "https://courses.edx.org/certificates/4117ecd2c2ee46a0a39e7622d71e93b1",
    },

    {
      where: "Free Code Camp",
      what: "Responsive Web Design",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/responsive-web-design",
    },
    {
      where: "Free Code Camp",
      what: "Javascript Algorithms and Data Structures",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/javascript-algorithms-and-data-structures",
    },
    {
      where: "Free Code Camp",
      what: "Front End Libraries",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/front-end-libraries",
    },
    {
      where: "Free Code Camp",
      what: "Data Visualization",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/front-end-libraries",
    },
    {
      where: "Free Code Camp",
      what: "APIs and Microservices",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/apis-and-microservices",
    },
    {
      where: "International TEFL Academy",
      what: "TEFL Certificate",
      url: "",
    },
    {
      where: "Tokyo, Japan",
      what: "JLPT N3",
      url: "",
    },
  ],
};

export {
  description,
  webPresence,
  skills,
  experiences,
  education,
  professionalExperience,
  certifications,
};
