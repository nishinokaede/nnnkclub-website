import {Link} from "react-router-dom";
import './index.css'

export default function Header() {
  return <div className="menu">
    <ul className="menu-group">
      <li className="menu-list-left">
        <Link to='/'>

          <a className="menu-box">
            <img
              className='menu-logo'
              src={require('../../assets/images/jpg/head_image.jpg')}
              alt="logo"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;娜娜捏口俱乐部
          </a>
        </Link>
      </li>

      <li className="menu-list">
        <Link to='/contact'>
          <a className="menu-box">关于我们</a>
        </Link>
      </li>

      <li className="menu-list">
        <Link to='/music'>
          <a className="menu-box">音乐</a>
        </Link>
      </li>

      <li className="menu-list">
        <Link to='/profile'>
          <a className="menu-box">成员</a>
        </Link>
      </li>

      <li className="menu-list">
        <Link to='/schedule'>
          <a className="menu-box">日程</a>
        </Link>
      </li>

      <li className={"menu-list"}>
        <Link to='videos'>
          <a className="menu-box">视频</a>
        </Link>
      </li>

      <li className={"menu-list"}>
        <Link to='/'>
          <a className="menu-box">主页</a>
        </Link>
      </li>
    </ul>
  </div>
}