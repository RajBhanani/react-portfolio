import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import School from "@mui/icons-material/School";

import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience-main">
      <VerticalTimeline className="timeline">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            10th, Shri Swaminarayan Gurukul
          </h3>
          <p>Grade: 89%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            12th, Shri Swaminarayan Gurukul
          </h3>
          <p>Grade: 91%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - ongoing"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Tech Computer Science and Engineering, VIT Bhopal
          </h3>
          <p>Current CGPA: 8.39</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
