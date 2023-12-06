import './index.css';
import {videos} from "../../assets/data/videos";
import React, {useState} from "react";
import {Table} from "antd";

export default function Videos() {
  const columns = [
    {
      key: '1',
      title: "标题",
      dataIndex: 'title'
    },
    {
      key: '2',
      title: '来源UP',
      dataIndex: 'up',
    },
    {
      key: '3',
      title: '日期',
      dataIndex: 'date'
    },
    {
      key: '4',
      title: '链接',
      render: (_, data) => {
        return <a onClick={() => {
          setData(data)
        }}>
          跳转到
        </a>
      }
    }
  ]
  const defaultData = {
    aid: '748410779',
    bid: 'BV1eC4y1E7Uz',
    title: '【娜娜捏口俱乐部】20231111 广州SDlivehouse AT LIVE EXPLORE vol.002 双马尾大作战 LIVE映像',
    up: '首领SAMA',
    date: '2023-11-11',
    cover: 'http://i1.hdslb.com/bfs/archive/37f1679f01545fae2f6194981ec2089405fcacbc.jpg',
  }
  const [data, setData] = useState(defaultData)
  return <div className='video-page-container'>
    <div className='video'>
      <iframe
        src={`//player.bilibili.com/player.html?aid=${data.aid}&bvid=${data.bid}&page=1&high_quality=1&danmaku=1&as_wide=1`}
        allowFullScreen="allowfullscreen"
        width="1000"
        height="500"
        scrolling="no"
        frameBorder="0"
        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
      />
    </div>
    <Table
      dataSource={videos}
      columns={columns}
    />
  </div>
}