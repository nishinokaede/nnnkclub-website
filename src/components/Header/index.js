import {Link} from "react-router-dom";

export default function Header(){
  return <div className={"menu"}>
    <ul className={"menugroup"}>
      <li className={"menulistleft"}>
        <Link to='/'>
          <a href="">池田瑛紗中国应援会</a>
        </Link>
      </li>

      <li className={"menulist"}><Link to='/AboutUs'>
        <a className={"Abox"}>关于我们</a></Link>
      </li>

      <li className={"menulist"}><Link to='/Panda'>
        <a className={"Abox"}>熊猫的低语</a></Link>
      </li>
      <li className={"menulist"}><Link to='/GameCards'>
        <a className={"Abox"}>卡牌制作</a></Link>
      </li>
      <li className={"menulist"}><Link to='/Blog'>
        <a className={"Abox"}>博客</a></Link>
      </li>
      <li className={"menulist"}><Link to='VideoSearch'>
        <a className={"Abox"}>视频</a></Link>
      </li>
      <li className={"menulist"}>
        <a className={"Abox"}><Link to='/'>主页</Link></a>
      </li>
    </ul>
  </div>
}