import { useEffect, useState } from "react";
import "./Headerstles.css";

const Header = () => {
  const [DateTime, setDateTime] = useState("DD");
  const [MonthTime, setMonthTime] = useState("MM");
  const [YearTime, setYearTime] = useState("YY");
  const [Day, setDay] = useState("TODAY");
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    const curDate = new Date();
    const curYearTime = curDate.getFullYear();
    const curMonthTime = month[curDate.getMonth()];
    const curDateTime = curDate.getDate();
    const curDay = weekday[curDate.getDay()];
    setDay(curDay);
    setDateTime(curDateTime);
    setMonthTime(curMonthTime);
    setYearTime(curYearTime);
  }, []);
  return (
    <div className="DateTime">
      <div className="day">{DateTime}</div>
      <div>
        <div className="month">{MonthTime}</div>
        <div className="year">{YearTime}</div>
      </div>

      <div className="today">{Day}</div>
    </div>
  );
};

export default Header;
