import React from 'react';
import {Alert, Avatar, Button, List} from 'antd';
import './index.css';

const data = [
  {
    title: 'れもん☆れもねーど',
    description: 'れもねーど',
    href: 'lemon'
  },
  {
    title: 'カンフーミラクル～愛～',
    description: 'カンフーミラクル～愛～',
    href: 'kanfu'
  },
  {
    title: 'Happy(2020ver.)',
    description: 'Happy(2020ver.)',
    href: 'happy'
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
            avatar={<img
              className='menu-logo'
              src={require('../../assets/images/jpg/head_image.jpg')}
              alt="logo"
            />}
            // title={item.title}
            title={<Button type='link' href={`music/details?title=${item.href}`}>{item.title}</Button>}
          />
        </List.Item>
      )}
    />
  </div>
};
export default App;