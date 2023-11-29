import React, {useEffect, useState} from 'react';
import {Badge, Calendar} from 'antd';
import './index.css';
import zhCN from "antd/es/locale/zh_CN";
import {ConfigProvider} from 'antd';
import {schedules} from "../../assets/data/schedule";
import dayjs from 'dayjs';
import {useLocation, useNavigate} from "react-router";

const App = ({date}) => {
  const currentDate = new Date();
  const dateToday = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
  const [calendarValue, setCalendarValue] = useState(() => dayjs(dateToday));

  function GetDateSchedules(current) {
    return schedules.filter(e => {
      return e.date === current.format("YYYY.MM.DD")
    })
  }

  function GetMonthSchedules(current) {
    const schedulesList = schedules.filter(e => {
      return e.date.substring(0, 7) === current.format("YYYY.MM")
    })
    return schedulesList.length;
  }

  const monthCellRender = (value) => {
    const num = GetMonthSchedules(value);
    return num ? (
      <div className="notes-month">
        <Badge color='blue' text={`${num}个日程`}/>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = GetDateSchedules(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge title={`${item.type} | ${item.title}`} color={item.color} text={`${item.type} | ${item.title}`}/>
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  useEffect(() => {
    const inputDate = date.substring(0, 4) + "-" + date.substring(4, 6);
    if (dateToday.substring(0, 7) !== inputDate) {
      setCalendarValue(() => dayjs(inputDate + "-01"));
    }
  }, []);
  const navigate = useNavigate();
  return <ConfigProvider locale={zhCN}>
    <Calendar
      value={calendarValue}
      //选择的月份/年份更变
      onPanelChange={(newValue) => {
        const selectMonth = newValue.format("YYYYMM");
        navigate(`/schedule?date=${selectMonth}`);
        setCalendarValue(newValue);
      }}
      cellRender={cellRender}
      //选择日期
      onSelect={(date, {source}) => {
        setCalendarValue(date);
        if (source === 'date') {
          console.log(date.format("YYYYMMDD"));
          navigate(`?date=${date.format("YYYYMM")}#${date.format("YYYYMMDD")}`);
          const hash = window.location.hash;
          if (hash) {
            const targetElement = document.getElementById(hash.substring(1)); // 去掉 #
            if (targetElement) {
              targetElement.scrollIntoView({behavior: 'smooth'});
            }
          }
        }
      }}
    />
  </ConfigProvider>

};
export default App;