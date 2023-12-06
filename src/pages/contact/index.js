import {Card, Collapse, Space, Table, theme} from 'antd';
import Weibo from "../../assets/images/svg/weibo.svg";
import Bili from "../../assets/images/svg/bilibili.svg";
import React from "react";
import {RightOutlined} from '@ant-design/icons';
import {memberData} from '../../assets/data/members';
import "./index.css";


const App = () => {
  const {Meta} = Card;
  return (
    <div className='box'>
      <div className='leftBox'>
        <Card
          title={<h2>关于我们</h2>}
          bordered={false}
        >
          <p>
            娜娜捏口俱乐部
            <strong> ななねこCLUB </strong>
            成员7人平价易购的非处方药物系偶像;
          </p>
          <p>包裹糖衣、服用安全、质量稳定、疗效确切;观看有益健康，可减少生活带来的伤害。</p>
          <p>以王道偶像系舞台为主，</p>
          <p>融合J-ROCK、电子舞曲的士高、KAWII BASS等风格，</p>
          <p>绝赞呈现超有趣日系偶像LIVE</p>
          <p>无限向你靠近 就这样保持零距离</p>
          <br/>

          <br/>
          <p>
            <h4>【成员微博/メンバーSNS】</h4>
          </p>
          {
            memberData.map((e, index) => {
              return <p key={index}>
                <Space>
                  <RightOutlined/>{e.id}号成员@NNNK-{e.name}
                  <a href={e.weiboUrl}>
                    <img
                      style={{margin: '0 5px'}}
                      width={15}
                      src={Weibo}
                      alt="跳转至微博首页"
                      title="跳转至微博首页"
                    />
                    @NNNK-{e.name}
                  </a>
                  <a href={e.bilibiliUrl}>
                    <img
                      style={{margin: '0 5px'}}
                      width={15}
                      src={Bili}
                      alt="跳转至B站首页"
                      title="跳转至B站首页"
                    />
                    {e.biliName}
                  </a>
                </Space>
              </p>
            })
          }
        </Card>

        <Card
          title={<h2>合作联系</h2>}
          bordered={false}
        >
          <p>
            商务合作请私信
            <a href="https://weibo.com/u/7735680902">微博</a>或
            <a href="https://space.bilibili.com/1994167801">Bilibili</a>
          </p>
        </Card>

      </div>
      <div className='rightBox'>
        <Card
          onClick={() => {
            window.open(
              'https://www.bilibili.com/video/BV1vP411f74z'
            )
          }}
          hoverable
          style={{width: 260}}
          cover={
            <img
              src={require('../../assets/images/jpg/happy.jpg')}
              alt='NNNK一周年'
            />
          }
        >
          <Meta
            title="NNNK一周年 Happy"
            description={<div>
              <p>谢谢大家一年以来的关照和支持</p>
              <p>接下来的路 也一起吧</p>
              <p>約束だよ</p>
            </div>}
          />
        </Card>

        <Card
          hoverable
          style={{width: 260,marginTop:'20px'}}
          cover={
            <img
              src={require('../../assets/images/jpg/kanffu.jpg')}
              alt='カンフーミラクル～愛～'
            />
          }
        >
          <Meta
            title="カンフーミラクル～愛～"
            description="关于功夫！奇迹！愛！【娜娜捏口】カンフーミラクル～愛～|『Fantasy World Idol Live』|0709@MAO livehouse"
          />
        </Card>
      </div>
    </div>
  )

};
export default App;