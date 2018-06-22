import React, { Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import { Link, Redirect, Switch, Route } from 'dva/router';
import { Layout, Menu, Breadcrumb } from 'antd';
import {getRoutes} from "../utils/utils";
const { Header, Content, Footer } = Layout;

class ExceptionLayout extends React.PureComponent{

  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = 'Ant Design Pro';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - Ant Design Pro`;
    }
    return title;
  }

  render(){
    const { routerData, match } = this.props;
    console.log(match)
  }
}
export default ExceptionLayout;
