import {Link} from "react-router-dom";
import './index.css'

export default function Header() {
  return <div className="menu">
    <ul className={"menu-group"}>
      <li className={"menu-list-left"}>
        <Link to='/'>
          <a href="">娜娜捏口俱乐部</a>
        </Link>
      </li>

      <li className={"menu-list"}><Link to='/contact'>
        <a className={"box"}>关于我们</a></Link>
      </li>

      <li className={"menu-list"}><Link to='/profile'>
        <a className={"box"}>成员</a></Link>
      </li>

      <li className={"menu-list"}><Link to='/news'>
        <a className={"box"}>新闻</a></Link>
      </li>

      <li className={"menu-list"}><Link to='/schedule'>
        <a className={"box"}>日程</a></Link>
      </li>

      <li className={"menu-list"}><Link to='videos'>
        <a className={"box"}>视频</a></Link>
      </li>

      <li className={"menu-list"}>
        <a className={"box"}><Link to='/'>主页</Link></a>
      </li>
    </ul>
  </div>
}