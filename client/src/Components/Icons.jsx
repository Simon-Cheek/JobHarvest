import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faComments,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

export function ResumeIcon() {
  return <FontAwesomeIcon icon={faFileAlt} />;
}

export function InterviewIcon() {
  return <FontAwesomeIcon icon={faComments} />;
}

export function ExporeIcon() {
  return <FontAwesomeIcon icon={faCompass} />;
}
