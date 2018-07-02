import React, { PureComponent } from 'react';
import { List, Avatar, Icon ,Button ,Row, Col , Card, Popover,Tooltip} from 'antd';
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
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
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
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size="large"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            shape="square"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>曲丽丽</div>
          <div>交互专家蚂蚁金服某某某事业群某某平台部某某技术部UED</div>
        </div>
      </div>
    );

    const ListContent = ({ data: { content, avatar, href, title } }) => (
      <div className={styles.listContent}>
        <div className={styles.extra}>
          <div style={{flex:1,minWidth:1}}>
            <Popover content={popoverContent}>
              <Avatar src={avatar} shape="square"/>
            </Popover>
            <a style={{fontSize: 18,fontWeight: 700, color: '#000'}}>{title}</a>
          </div>

        </div>
        <div className={styles.description}>{content}</div>
      </div>
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
      <Row>
        <Col span={16}>
          <List
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

                  {/*<List.Item.Meta*/}
                    {/*avatar={<Avatar src={item.avatar} />}*/}
                    {/*title={<a href={item.href}>{item.title}</a>}*/}
                    {/*description={item.description}*/}
                  {/*/>*/}
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
