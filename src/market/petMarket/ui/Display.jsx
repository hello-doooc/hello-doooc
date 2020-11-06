import React, { Component } from 'react';

import {DisplayWrap} from '../StyledPetMarket'
import timg from '@a/images/timg.jpeg'

class Display extends Component {
    constructor(props){
        super(props)
        this.state={
            num: 0,
            pagenum:this.props.current
        }
    }
    setNext=()=>{
        if(this.state.pagenum < this.props.totalPage){
            this.setState({
                num:this.state.num + this.props.pageSize,
                pagenum:this.state.pagenum + 1
            },function () {
                console.log(this.state)
                this.props.setPage(this.state.num,this.state.pagenum)
            })
        }
    }
    setUp=()=>{
        if(this.state.pagenum > 1){
            this.setState({
                num:this.state.num - this.props.pageSize,
                pagenum:this.state.pagenum - 1
            },function () {
                console.log(this.state)
                this.props.setPage(this.state.num,this.state.pagenum)
            })
        }
    }
    
    componentDidMount(){
        // console.log(this.props);
    }
    render() {
        return (
            <DisplayWrap>
                <div className="display-wrap">
                    <div className="display_img">
                        <h2>宠物展示</h2>
                        <div className="pet_display">
                            <div className="pet_box clear_fix">
                                {
                                    this.props.petShow && this.props.petShow.map(value=>{
                                        return (
                                            <div key={value['pet'+value.pn+'TableId']+value.n} className="pet">
                                                <img src={value['pet'+value.pn+'TableImage']} alt=""/>
                                                <div className="pet_detail clear_fix">
                                                    <div className="pet_price float_left">
                                                        ￥<span>{value['pet'+value.pn+'TablePrice']}</span>
                                                    </div>
                                                    <div className="pet_type float_left">
                                                        <div>{value['pet'+value.pn+'TableName']}</div>
                                                        <div>
                                                            <span>品种:</span>
                                                            <span>{value['pet'+value.pn+'TableCategory']}</span>
                                                        </div>
                                                    </div>
                                                    <span></span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="page clear_fix">
                            <span onClick={this.setUp}>上一页</span>
                            <span onClick={this.setNext}>下一页</span>
                        </div>
                    </div>
                    <div className="display_video">
                        <h2>宠物视频</h2>
                        <div className="pet_video">
                            <div className="petVideo clear_fix">
                                {
                                    this.props.petShow && this.props.petShow.map(value=>{
                                        return(
                                            <div key={value['pet'+value.pn+'TableId']+value.n} className="video_box float_left">
                                                <video src={value['pet'+value.pn+'TableImage']} controls="controls" />
                                                <div className="video_desc">
                                                    <div>{value['pet'+value.pn+'TableName']}</div>
                                                    <div>品种:<span>{value['pet'+value.pn+'TableCategory']}</span></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayWrap>
        );
    }
}

export default Display;