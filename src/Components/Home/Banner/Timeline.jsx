import { FaLaptopCode } from "react-icons/fa6";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkApproach = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Research & Learning"
        iconStyle={{ background: "#60a5fa", color: "#fff" }}
        icon={<FaLaptopCode />}
      >
        <h3 className="vertical-timeline-element-title">Research & Learning</h3>
        <p>
          I believe in starting every project with a strong foundation. I invest
          time in thorough research and learning, often exploring multiple
          resources...
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Development"
        iconStyle={{ background: "#60a5fa", color: "#fff" }}
        icon={<FaLaptopCode />}
      >
        <h3 className="vertical-timeline-element-title">Development</h3>
        <p>
          Once the research phase is complete, I move on to developing the
          project with a clear understanding...
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Testing & Refinement"
        iconStyle={{ background: "#60a5fa", color: "#fff" }}
        icon={<FaLaptopCode />}
      >
        <h3 className="vertical-timeline-element-title">
          Testing & Refinement
        </h3>
        <p>
          After development, I rigorously test the project to ensure everything
          works as expected...
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default WorkApproach;
