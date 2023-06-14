import { FunctionComponent } from "react";
import BasicInfoIcon from "../../../assets/icons/note.png";
import SkillsIcon from "../../../assets/icons/star.png";
import InterestsIcon from "../../../assets/icons/life.png";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiBulb } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";
import Card from "../../molecules/card/card";
import "./cards.css";

const Cards: FunctionComponent = () => {
  const skills = [
    "React / HTML / CSS",
    "Python / Go / Java",
    "Infra Architecture",
    "React Native",
    "Linux / Unix",
    "DevOps",
  ];
  const interests = [
    "Development",
    "Learning",
    "Trekking",
    "Chess",
    "Gaming",
    "Beer",
  ];

  return (
    <>
      <Card
        title="info"
        cardIcon={BasicInfoIcon}
        cardContent={[
          { icon: <CgProfile />, text: "Ivan Markanović" },
          { icon: <MdOutlineWorkOutline />, text: "Staff Engineer@Infobip" },
          { icon: <BiHomeAlt />, text: "Zagreb, Croatia" },
          { icon: <BiBulb />, text: "Self motivated" },
          { icon: <IoGameControllerOutline />, text: "Gamer" },
        ]}
      />

      <Card
        title="skills"
        cardIcon={SkillsIcon}
        cardContent={skills.map((skill) => ({
          icon: <VscCircleFilled className="list-dot" />,
          text: skill,
        }))}
      />

      <Card
        title="interests"
        cardIcon={InterestsIcon}
        cardContent={interests.map((interest) => ({
          icon: <VscCircleFilled className="list-dot--red" />,
          text: interest,
        }))}
      />
    </>
  );
};
export default Cards;
