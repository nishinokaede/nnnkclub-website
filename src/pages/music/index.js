import React from 'react';
import {Alert, Avatar, List} from 'antd';
import './index.css';

const data = [
  {
    title: 'れもん☆れもねーど',
    description: 'れもねーど'
  },
  {
    title: 'カンフーミラクル～愛～',
    description: 'カンフーミラクル～愛～',
  },
  {
    title: 'Happy(2020ver.)',
    description: 'Happy(2020ver.)',
  },
];
const App = () => {
  return <div className='music-page-container'>
    <Alert
      message="Warning"
      description="此页面还在建设中..."
      type="warning"
      showIcon
      closable
    />
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}/>}
            title={item.title}
            // title={<a href="https://ant.design">{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  </div>
};
export default App;