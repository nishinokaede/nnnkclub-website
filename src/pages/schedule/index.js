import Calendar from "./calendar";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {getDaysInMonth} from "../../utils/Common";
import {schedules} from "../../assets/data/schedule";
import './index.css';
import Cake from '../../assets/images/svg/cake.svg';
import Microphone from '../../assets/images/svg/microphone.svg';

/**
 * 判断6组数字是否能被匹配为YYYYMM格式
 * @param input
 * @returns {boolean}
 */
function isValidYYYYMMFormat(input) {
  const regex = /^(19|20)\d{2}(0[1-9]|1[0-2])$/;
  return regex.test(input);
}

export default function Schedule() {
  const [dayCount, setDayCount] = useState(30);
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const dateParam = urlParams.get('date');
  useEffect(() => {
    if (!dateParam || !isValidYYYYMMFormat(dateParam)) {
      const currentDate = new Date().toISOString().slice(0, 7).replace(/-/g, '');
      navigate(`/schedule?date=${currentDate}`);
    } else {
      setDayCount(getDaysInMonth(dateParam))
    }
  }, [dateParam])
  const Icon = ({type}) => {
    switch (type) {
      case"birthday":
        return <img className='schedule-icon' alt='birthday' src={Cake}/>
      case "live":
        return <img className='schedule-icon' alt='live' src={Microphone}/>
      default:
    }
  }
  const DateSchedule = ({day}) => {
    const date = dateParam + String(day).padStart(2, '0');
    const dateList = schedules.filter((e) => e.date.replace(/\./g, "") === date);
    return dateList.length > 0 ? <div className='date-container' id={date}>
      <span className='date'>{date}</span>
      <hr className='date-hr'/>
      <hr className='date-hr'/>
      {dateList.map((e) => {
        return <div className='schedule-title' key={e.date + e.title}>
          <h3 style={{margin: '10px 0'}}><Icon type={e.type}/>{e.title}</h3>
          <p className='schedule-content'>{e.desc}</p>
        </div>
      })}
    </div> : null
  }
  const ScheduleList = () => {
    let dateHtml = [];
    for (let i = 1; i <= dayCount; i++) {
      dateHtml.push(i);
    }
    return <>
      {dateHtml.map(e => {
        return <DateSchedule day={e} key={e}/>
      })}
    </>;
  }
  return <div className='schedules-container'>
    <Calendar date={dateParam}/>
    <ScheduleList/>
  </div>
}