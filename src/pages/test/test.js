import './index.css';
import {Table} from "antd";
import {KongFu} from "../../assets/lyrics/kongfu";
import {useParams} from "react-router";

export default function Test() {
  const {live} = useParams();
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
  return <div className='music-container'>
    <Table columns={columns} dataSource={KongFu} pagination={false}/>
  </div>
}