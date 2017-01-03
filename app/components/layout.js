
 import React from 'react'
 import {Router, Route, IndexRoute,hashHistory} from 'react-router'
 import Header from './header'
 import Footer from './footer'
 import StopWatch from './stopwatch'
 import ContactUs from './contact_us'
 export default class Layout extends React.Component{

    constructor(){
        super();
    }

    render(){

        return (
            <div className="">
                    <Header/>
                    <Router history={hashHistory}>
                      <Route path="/" component={StopWatch}/>
                      <Route path="/contact" component={ContactUs}/>
                    </Router>
                <Footer/>
            </div>
        )
    }
 }
