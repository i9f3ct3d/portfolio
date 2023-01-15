import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from 'react-icons/md'
import "./InstitutionCard.css";

const InstitutionCard = (
  { style, imgSrc, id, institutionName, timeSpan, desc, link, delay, animate, isWork }
) => {
  const colors = ["#FD2155", "#E4EE89", "#80D8F6", "#FEA400", "#D36DD5"];
  const [index, setIndex] = useState(-1);

  const cardRef = useRef();

  useEffect(() => {
    if (index === -1) {
      setIndex(Math.floor(Math.random() * 5 + 0));
    }
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    if (animate) {
      if (
        !cardRef.current.classList.contains(
          "animated_institution-card__full-div"
        )
      ) {
        setTimeout(() => {
          cardRef.current.classList.add("animated_institution-card__full-div");
        }, delay);
      }
    }
  }, [animate]);

  return (
    <div ref={cardRef} className="institution-card__full-div">
      <div
        style={{
          backgroundColor: index !== -1 && colors[index],
        }}
        className="institution-card__top-border"
      />
      <p
        style={{
          color: index !== -1 && colors[index],
        }}
        className="institution-card__institution-name"
      >
        {institutionName}
      </p>
      <p className="institution-card__role">Student</p>
      <p className="institution-card__time-span">{timeSpan}</p>
      <p className="institution-card__desc">{desc}</p>
      <a
        style={{
          backgroundColor: index !== -1 && colors[index],
        }}
        className="institution-card__link"
        href={link}
      >
        LEARN MORE
      </a>
      {isWork ? <MdWork
        style={{
          backgroundColor: index !== -1 && colors[index],
        }}
        className="institution-card__icon"
      /> : <FaGraduationCap
        style={{
          backgroundColor: index !== -1 && colors[index],
        }}
        className="institution-card__icon"
      />}
    </div>
  );
};

export default InstitutionCard;
