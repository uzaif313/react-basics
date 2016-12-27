    import React from 'react';

    export default class StopWatch extends React.Component{
       
        constructor(){
            super();
            this.state = {
                msec:0,
                sec:0
            }
        }
        
        render(){
            return (<div class="row">
                <div class="col-md-6 col-md-offset-3">
                   <div class="col-sm-2">
                        <input class="form-control"  value={this.state.msec}/>
                   </div> 
                   <div class="col-md-2">
                       <input class="form-control"  value={this.state.sec}/>
                    </div>
                </div>
                    <hr/> 
                <div class="col-md-6 col-md-offset-3">
                    <div class="col-sm-2">
                        <button class="btn btn-success" onClick={this.startWatch.bind(this)}>Start</button>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-danger">Stop</button>
                    </div>
                </div>
            </div>)
        }

       startWatch(){
            setInterval(()=>{
                var tsec = 0;
                if(this.state.msec > 60){
                 tsec = 0 
                 this.setState({sec:this.state.sec+1})
                }else{
                  tsec = this.state.msec+1
                     
                }
                
                this.setState({msec:tsec})
            },10);
        }


    }
