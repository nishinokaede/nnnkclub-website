import './index.css';
import {Alert, Table} from "antd";
import {KongFu} from "../../assets/lyrics/kongfu";
import React, {useEffect, useState} from "react";

export default function Test() {
  const [dataSource, setDataSource] = useState([]);
  const [songName, setSongName] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get('title');
  useEffect(() => {
    console.log("title", title);
    console.log("dataSource", dataSource);
    switch (title) {
      case"kanfu":
        setDataSource(KongFu);
        setSongName("カンフーミラクル ～愛～");
        break;
      default:
        setDataSource([]);
        setSongName("");
        break;
    }
  }, []);
  const columns = [
    {
      title: '歌词及八拍数',
      dataIndex: 'lyric',
      key: 'lyric'
    },
    {
      title: 'MIX',
      dataIndex: 'mix',
      key: 'mix'
    },
    {
      title: '罗马音',
      dataIndex: 'romaji',
      key: 'romaji'
    },
    {
      title: '动作',
      dataIndex: 'action',
      key: 'action'
    },
  ]
  return <div className='music-page-container'>
    {
      songName === ""
        ?
        <></>
        :
        <h1>歌曲：{songName}</h1>
    }
    {
      dataSource.length === 0
        ?
        <Alert
          message="Warning"
          description="此页面还在建设中..."
          type="warning"
          showIcon
          closable
        />
        :
        <Table columns={columns} dataSource={dataSource} pagination={false}/>
    }

  </div>
}