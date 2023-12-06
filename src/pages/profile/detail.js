import './index.css';
import {useParams} from "react-router";
import {memberData} from "../../assets/data/members";
import React, {useEffect, useState} from "react";
import {RightOutlined} from "@ant-design/icons";
import Weibo from "../../assets/images/svg/weibo.svg";
import Bili from "../../assets/images/svg/bilibili.svg";

export default function Detail() {
  const {id} = useParams();
  const [member, setMember] = useState({});
  useEffect(() => {
    setMember(memberData.filter(e => e.id == id)[0]);
  }, []);
  return <div className='profile-container'>
    <p className='profile-title'>PROFILE</p>
    <div className='profile-box'>
      <div className='profile-left-box'>
        <div className="circle">
          <img className="profile-image" src={require(`../../assets/images/jpg/${id}.jpg`)} alt=""/>
        </div>
        <p className="profile-name">娜娜捏口俱乐部 {id}号成员</p>
        <p className="profile-name">{member.name}</p>
      </div>

      <div className='profile-rightBox'>
        <p>
          <RightOutlined/>
          <a
            className='profile-circle'
            href={member.weiboUrl}
          >
            <img
              style={{margin: '0 5px'}}
              width={15}
              src={Weibo}
              alt="跳转至微博首页"
              title="跳转至微博首页"
            />
            @NNNK-{member.name}
          </a>
        </p><RightOutlined/>
        <a
          className='profile-circle'
          href={member.bilibiliUrl}
        >
          <img
            style={{margin: '0 5px'}}
            width={15}
            src={Bili}
            alt="跳转至B站首页"
            title="跳转至B站首页"
          />
          {member.biliName}
        </a>
      </div>
    </div>

  </div>
}