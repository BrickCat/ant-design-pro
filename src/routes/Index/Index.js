import React, { PureComponent } from 'react';
import { List, Avatar, Icon ,Button ,Row, Col , Card, Popover, Tooltip, Breadcrumb, Tag } from 'antd';
import moment from "moment/moment";
import styles from './Index.less';

const { Meta } = Card;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default class Index extends PureComponent{

  state = {
    size: 5
  };

  handleLoadMore = type =>{

  }

  listData(){
    const listData = [];
    for (let i = 0; i < this.state.size; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).Ant Design, a design language for background applications, is refined by Ant UED Team.',
      });
    }
    return listData;
  }

  handleIconClick = type =>{
    console.log(type)
  }

  render (){

    const IconText = ({ type, text }) => (
      <span onClick={() => this.handleIconClick(type)}>
        <Icon type={type} style={{ marginRight: 8 }} />
            {text}
      </span>
    );

    const popoverContent = (
      <div>
        <div className={styles.userCard}>
          <div className={styles.avatar}>
            <Avatar
              size="large"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
              shape="square"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>曲丽丽</div>
            <div className={styles.contentDesc}>交互专家蚂蚁金服某某某事业群某某平台部某某技术部UED</div>
            <div className={styles.contentIcon}>
              <Tooltip placement="top" title="位置">
                <Icon style={{fontSize:16}} type="environment" />
              </Tooltip>
              <Tooltip placement="top" title="赞">
                <Icon style={{fontSize:16}} type="like" />
              </Tooltip>
              <Tooltip placement="top" title="API">
                <Icon style={{fontSize:16}} type="api" />
              </Tooltip>
              <Tooltip placement="top" title="终端">
                <Icon style={{fontSize:16}} type="code" />
              </Tooltip>
            </div>
          </div>
        </div>
        <Row type="flex" justify="space-around" align="middle" className={styles.userActionContent}>
          <Col span={8}>
            <strong className={styles.actionItemNumber}>3</strong>
            <span className={styles.actionItemDesc}>关注标签</span>
          </Col>
          <Col span={8}>
            <strong className={styles.actionItemNumber}>4</strong>
            <span className={styles.actionItemDesc}>关注用户</span>
          </Col>
          <Col span={8}>
            <strong className={styles.actionItemNumber}>125</strong>
            <span className={styles.actionItemDesc}>收藏帖子</span>
          </Col>
        </Row>
        <div style={{textAlign:'right'}}>
          <Button type="primary" style={{marginRight: 5}}>私信</Button>
          <Button>关注</Button>
        </div>
      </div>
    );

    const ListContent = ({ data: { content, avatar, href, title } }) => (
      <Row>
        <Row type="flex" justify="start">
          <Col className={styles.extra}>
            <Popover placement="topLeft" content={popoverContent}>
              <Avatar src={avatar} shape="square" style={{ backgroundColor: 'rgba(0,0,0,.05)',width:40,height:40,marginTop:5}}/>
            </Popover>
          </Col>
          <Col style={{marginLeft:10}}>
            <Row>
              <div>
                <a href="" className={styles.tag}>Linux</a>
                <a href="" className={styles.tag}>Docker</a>
                <span style={{color: 'rgba(0,0,0,.38)'}}>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                <a href="" style={{color: 'rgba(0,0,0,.54)',fontSize:12}}>
                  <span style={{color: '#fc0'}}>16</span>&nbsp;回复
                </a>
                &nbsp;&nbsp;
                <a href="" style={{color: 'rgba(0,0,0,.54)',fontSize:12}}>
                  <span style={{color: '#ffc1cc'}}>298</span>&nbsp;浏览
                </a>
              </div>
            </Row>
            <Row>
              <h2 className={styles.title}>
                {title}
              </h2>
            </Row>
          </Col>
        </Row>
        <Row style={{marginTop:'-1em',marginBottom:'-.5em'}}>
          <a href="" className={styles.contentArticle} style={{color:'#000'}}>
            {content}
          </a>
        </Row>
      </Row>
    );

    const loadMore =
      this.listData().length > 0 ? (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Button onClick={this.handleLoadMore}  style={{ paddingLeft: 48, paddingRight: 48 }}>
            {/*loading*/}
            {false ? (
              <span>
                <Icon type="loading" /> 加载中...
              </span>
            ) : (
              '加载更多'
            )}
          </Button>
        </div>
      ) : null;

    return (
      <div style={{maxWidth:1100,minWidth:720}}>
      <Row style={{margin:'5px 0 1em 0'}}>
        <Breadcrumb>
          <Breadcrumb.Item href="#/f/index">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Col span={16}>
          <List
            style={{marginTop:'-1em'}}
            itemLayout="vertical"
            size="large"
            loading={this.listData().length === 0 ? loading : false}
            loadMore={loadMore}
            dataSource={this.listData()}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText type="star-o" text="156" />,
                  <IconText type="like-o" text="156" />,
                  <IconText type="message" text="2" />]}
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <div>
                  <ListContent data={item} />
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col span={7} push={1}>
          <Card
            style={{ marginBottom: 20 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Col>
      </Row>
    </div>)
  }
}
