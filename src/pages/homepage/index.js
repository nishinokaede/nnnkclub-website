import './index.css';
import {Card, Col, Row} from "antd";
import Weibo from "../../assets/images/svg/weibo.svg";
import Bili from "../../assets/images/svg/bilibili.svg";
import Taobao from "../../assets/images/svg/taobao.svg";


export default function Homepage() {
  return <>
    <div>
      <section className="text">
        广州女子偶像团体『娜娜捏口俱乐部』
      </section>
      <section className="img1">
        以广州为中心活动的偶像团体
      </section>
      <section className="text">
        以全国巡演为目标努力奋斗中
      </section>
      <section className="img2">
        平价易购的非处方药物系偶像
      </section>
      <section className="text">
        无限向你靠近 就这样保持零距离
      </section>
    </div>
    <h1 className='title'>ななねこCLUB</h1>
    <Row style={{marginLeft: "20%", marginRight: "20%", alignContent: "center"}} gutter={16}>
      <Col span={8}>
        <Card bordered={false}>
          <a title="跳转至微博首页" className='banner-content' href="https://weibo.com/u/7735680902">
            <img src={Weibo} alt=""/> @娜娜捏口俱乐部
          </a>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
          <a href="https://space.bilibili.com/1994167801" className='banner-content' title="跳转至B站首页">
            <img src={Bili} alt=""/> @娜娜捏口俱乐部
          </a>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
          <a className='banner-content' title="跳转至淘宝首页"
             href="https://shop137594360.taobao.com/shop/view_shop.htm?user_number_id=2657188013">
            <img src={Taobao} alt=""/> @娜娜捏口俱乐部
          </a>
        </Card>
      </Col>
    </Row>
  </>
}