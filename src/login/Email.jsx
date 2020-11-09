import React, { Component } from 'react'
import {EmailWrap} from './StyledLogin'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {validate_password} from '../utils/validate'
import {EmailLogin}  from '../api/account'


export default class Email extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      userPassword:'',
    }
    this.onFinish = this.onFinish.bind(this);
  }
 
  emailSubmit=e=>{
    e.preventDefault();
    console.log(this.state)
  }

  // input输入框处理
  inputChange=(e)=>{
    let value = e.target.value
    console.log(value)
    this.setState({
      email:value,
      userPassword:value
    })
  }

// 登录处理
  onFinish =  (values)=> {
    EmailLogin().then(response=>{
      console.log(response)
    }).catch(error=>{
      // if(this.data.data==="用户不存在!"){
      //   alert('用户不存在')
      // }else{
      //   alert('验证码错误')
      // }
    })
    console.log(values)
   };

  //  路由跳转
   handleClick=(props)=>{
    let history = this.props.history
    history.push('/register')
}
  
  render() {
    const {email,userPassword} = this.state;
    return (
      <EmailWrap>
        <div>
           <Form
              name="normal_login"
              className="login-form"
              initialvalues={{ remember: true }}
              onSubmit={this.emailSubmit}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="email"
                rules={
                  [
                    { required: true, message: '请输入您的邮箱!' },
                    {type:"email",message:"邮箱格式不正确"}
                  ]
                }
              >
                <Input id="email" initialvalues={email}  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item
              // id="password"
                name="password"
                rules={
                  [
                    { required: true, message: '请输入您的密码!' },
                    {pattern:validate_password, message:"请输入大于6位小于12位的数字和英文"}
                  ]
                }
              >
                <Input
                  id ="userPassword"
                  initialvalues={userPassword}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <br/>
                <span onClick={this.handleClick} > 去注册</span>
              </Form.Item>
           </Form>
        </div>
      </EmailWrap>
    )
  }
}
