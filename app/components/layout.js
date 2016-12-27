 
 import React from 'react'
 import Header from './header'
 import Footer from './footer'
 import StopWatch from './stopwatch'
 export default class Layout extends React.Component{

    constructor(){
        super();
    }

    render(){

        return (
            <div className="container">
                <Header/>
                   <StopWatch/> 
                <Footer/>
            </div>
        )
    }
 }
