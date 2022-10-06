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
        cardContent={[
          { icon: <VscCircleFilled className="list-dot" />, text: "React / HTML / CSS" },
          { icon: <VscCircleFilled className="list-dot" />, text: "Python / Go / Java" },
          { icon: <VscCircleFilled className="list-dot" />, text: "Infra Architecture" },
          { icon: <VscCircleFilled className="list-dot" />, text: "React Native" },
          { icon: <VscCircleFilled className="list-dot" />, text: "Linux / Unix" },
          { icon: <VscCircleFilled className="list-dot" />, text: "DevOps" },
        ]}
      />

      <Card
        title="interests"
        cardIcon={InterestsIcon}
        cardContent={[
          { icon: <VscCircleFilled className="list-dot--color" />, text: "Development" },
          { icon: <VscCircleFilled className="list-dot--color" />, text: "Learning" },
          { icon: <VscCircleFilled className="list-dot--color" />, text: "Trekking" },
          { icon: <VscCircleFilled className="list-dot--color" />, text: "Chess" },
          { icon: <VscCircleFilled className="list-dot--color" />, text: "Gaming" },
          { icon: <VscCircleFilled className="list-dot--color" />, text: "Beer" },
        ]}
      />
    </>
  );
};
export default Cards;
