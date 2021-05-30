import React, { Component } from 'react'
import menuList from '../../config/menuconfig'
import {formateDate} from '../../utils/dateUtils'
import {withRouter} from 'react-router-dom'
import './Header.less'

class Header extends Component {

    state = {
        currentTime:formateDate(Date.now()),
    }

    getTime = () => {
        this.intervalId = setInterval(()=>{
            const currentTime = formateDate(Date.now());
            this.setState({currentTime})
        },1000)
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item=>{
            if(item.key===path){
                title = item.title
            }else if(item.children){
                const cItem = item.children.find(cItem => cItem.key===path)
                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title
    }

   
    // run one time after render()
    componentDidMount(){
        this.getTime()
    }

    // run before this component uninstall
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render() {
        const {currentTime} = this.state
        const title = this.getTitle()
        return (
            <div className="header">
                <div className="header-top">
                    <span>Welcome, Admin</span>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)