import './index.css';

export default function Profile() {
  return <div className='profile-container'>
    <p className='profile-title'>PROFILE</p>
    <div className='profile-header'>
      <img
        className='profile-header-image'
        src={require('../../assets/images/jpg/profile.jpg')}
        alt="nnnk的profile"/>
      <p>广州女子偶像团体『娜娜捏口俱乐部』</p>
      <p>以广州为中心活动的偶像团体，以全国巡演为目标努力奋斗中</p>
    </div>

    <div className="circle-container">

      <div className="circle">
        <img className="profile-image" src={require('../../assets/images/jpg/1.jpg')} alt=""/>
        <p className="profile-name">娜娜捏口俱乐部 1号成员</p>
        <p className="profile-name">萤火</p>
      </div>

      <div className="circle">
        <img className="profile-image" src={require('../../assets/images/jpg/2.jpg')} alt=""/>
        <p className="profile-name">娜娜捏口俱乐部 2号成员</p>
        <p className="profile-name">DOKI</p>
      </div>

      <div className="circle">
        <img className="profile-image" src={require('../../assets/images/jpg/3.jpg')} alt=""/>
        <p className="profile-name">娜娜捏口俱乐部 3号成员</p>
        <p className="profile-name">秃秃</p>
      </div>

      <div className="circle">
        <img className="profile-image" src={require('../../assets/images/jpg/4.jpg')} alt=""/>
        <p className="profile-name">娜娜捏口俱乐部 4号成员</p>
        <p className="profile-name">小废</p>
      </div>

      <div className="circle">
        <img className="profile-image" src={require('../../assets/images/jpg/5.jpg')} alt=""/>
        <p className="profile-name">娜娜捏口俱乐部 5号成员</p>
        <p className="profile-name">疯疯</p>
      </div>

      <div className="circle">
      </div>

      <div className="circle">
        <img className="profile-image" src={require('../../assets/images/jpg/7.jpg')} alt=""/>
        <p className="profile-name">娜娜捏口俱乐部 7号成员</p>
        <p className="profile-name">夜雨</p>
      </div>
    </div>
  </div>
}