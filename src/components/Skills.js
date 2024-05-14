import React from "react";
import styles from "../data/skills.module.css";
import cssIcon from "../assets/imgSkills/css.png";
import reactIcon from "../assets/imgSkills/react.png";
import nodeIcon from "../assets/imgSkills/node.png";
import javascriptIcon from "../assets/imgSkills/javascript.png";
import mongodbIcon from "../assets/imgSkills/mongodb.png";
import htmlIcon from "../assets/imgSkills/html.png";
import mySqlIcon from "../assets/imgSkills/mySql.png";
import PythonIcon from "../assets/imgSkills/python.png"

const skills = [
  { title: "HTML", imageSrc: "html.png" },
  { title: "CSS", imageSrc: "css.png" },
  { title: "React", imageSrc: "react.png" },
  { title: "Node", imageSrc: "node.png" },
  { title: "Javascript", imageSrc: "javascript.png" },
  { title: "MongoDB", imageSrc: "mongodb.png" },
  { title: "MySQL", imageSrc: "mySql.png" },
  {title: "Python", imageSrc: "python.png"},
];

const skillIcons = {
  "html.png": htmlIcon,
  "css.png": cssIcon,
  "react.png": reactIcon,
  "node.png": nodeIcon,
  "javascript.png": javascriptIcon,
  "mongodb.png": mongodbIcon,
  "mySql.png": mySqlIcon,
  "python.png": PythonIcon,
};

export const Skills = () => {
  return (
<section className={styles.container} id="skills">
  <h2 className={styles['skills-title']}>Skills</h2>
  <div className={styles.content}>
    <div className={styles.skills}>
      {skills.map((skill, id) => {
        return (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={skillIcons[skill.imageSrc]} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        );
      })}
    </div>
    <ul className={styles.history}></ul>
  </div>
</section>
  );
};
