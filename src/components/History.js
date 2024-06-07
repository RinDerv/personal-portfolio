import React from "react";
import styles from "../data/history.module.css";
import hcaIcon from "../assets/imgSkills/HCA.png";
import hopebridgeIcon from "../assets/imgSkills/hopebridge.jpg";
import smileyIcon from "../assets/imgSkills/smiley.png";
import ITtech from "../assets/imgSkills/ITtech.png";

const history = [
  {
    role: "IT Technician",
    organisation: "GB IT Services",
    startDate: "Dec, 2023",
    endDate: "May, 2024",
    experiences: [
      "● Provide technical assistance and support to end-users for hardware, software, and network-related issues. Troubleshoot and resolve technical problems promptly. ",
      "● Assist in the setup, configuration, and maintenance of local area networks (LANs), wide area networks (WANs), and wireless networks. Monitor network performance and troubleshoot connectivity issues.",
      "● Perform routine maintenance tasks such as system updates, patches, and backups to ensure the security and reliability of IT systems. Monitor system performance and make recommendations for improvements.",
      "● Investigate and diagnose complex technical issues, escalating to higher levels of support when necessary. Document troubleshooting steps and resolutions for future reference."
    ],
    imageSrc: "ITtech.png"
  },
  {
    role: "Clinical Trial Manager",
    organisation: "HCA",
    startDate: "Jun, 2021",
    endDate: "Dec, 2023",
    experiences: [
      "● Oversee all aspects of clinical trial operations, including site selection, study start-up, monitoring, and close-out. Ensure that clinical trials are conducted according to the protocol, on time, and within budget. ",
      "● Develop and maintain clinical trial databases, including data entry, quality control, and data analysis. Ensure that clinical trial data is accurate, complete, and consistent.",
      "● Prepare clinical trial reports, including study reports, clinical study reports, and clinical sections of regulatory submissions. Ensure that clinical trial reports are accurate, complete, and submitted on time.",
      "● Work closely with cross-functional teams, including clinical development, regulatory affairs, biostatistics, and data management, to ensure that clinical trials are conducted efficiently and effectively."
    ],
    imageSrc: "HCA.png"
  },
  {
    role: "Research Technician",
    organisation: "AIM Hopebridge",
    startDate: "Sep, 2020",
    endDate: "Jun, 2021",
    experiences: [
      "● Collaborate with team members: Collaborate, communicate, and assist with the training of clients, parents, and staff to ensure that clinical trials are conducted efficiently and effectively.",
      "● Implement treatment plans: Implement skill acquisition and behavior reduction treatments as directed by the supervisor to ensure that clinical trials are conducted according to the protocol, on time, and within budget.",
      "● Carry out clinical assessments: Carry out clinical assessments and other administrative duties to ensure that clinical trial reports are accurate, complete, and submitted on time."
    ],
    imageSrc: "hopebridge.jpg"

  },
  {
    role: "Web Administrator",
    organisation: "Tarawadee Inc.",
    startDate: "Sep, 2020",
    endDate: "Jan, 2018",
    experiences: [
      "● Regularly update website content and design.",
      "● Ensure that websites are running efficiently and troubleshoot any issues that arise.",
      "● Ensure that content is organized, accurate, and aligned with organizational goals.",
      "● Troubleshoot and resolve issues related to website functionality, hosting, and domain management."
    ],
    imageSrc: "smiley.png"
  }
];

const historyIcon = {
  "HCA.png": hcaIcon,
  "hopebridge.jpg": hopebridgeIcon,
  "smiley.png": smileyIcon,
  "ITtech.png": ITtech,
};

export const History = () => {
    return (
      <section className={styles.container} id="history">
        <h2 className={styles.title}>History</h2>
        <div className={styles.content}>
          <div className={styles.history}>
            {history.map((item, id) => {
              return (
                <div key={id} className={styles.historyItem}>
                  <div className={styles.historyItemContent}>
                    <img
                      src={historyIcon[item.imageSrc]}
                      alt={`${item.organisation} Logo`}
                    />
                  </div>
                  <div className={styles.historyItemDetails}>
                    <h3>{`${item.role}, ${item.organisation}`}</h3>
                    <p>{`${item.startDate} - ${item.endDate}`}</p>
                    <ul>
                      {item.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
