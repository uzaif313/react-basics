    import React from 'react';

    export default class StopWatch extends React.Component{

        constructor(){
            super();
            this.state = {
                milli_second:0,
                second:0,
                is_start:false
            }
            this.timer = undefined;
        }

        render(){
            return (<div class="row">
                <div class="col-md-6 col-md-offset-3">
                   <div class="col-sm-2">
                        <input class="form-control"  value={this.state.milli_second}/>
                   </div>
                   <div class="col-md-2">
                       <input class="form-control"  value={this.state.second}/>
                    </div>
                </div>
                <hr/>
                <div class="col-md-6 col-md-offset-3">
                    <div class="col-sm-2">
                          {
                           this.state.is_start ?
                           <button class="btn btn-info" onClick={this.pauseWatch.bind(this)}>Pause</button>
                          :
                           <button class="btn btn-success" onClick={this.startWatch.bind(this)}> {this.state.second > 0 || this.milli_second > 0 ? "Resume" : "Start"}</button>
                          }
                    </div>
                   <div class="col-sm-2">
                      <button class="btn btn-danger" onClick={this.reset.bind(this)}>Reset</button>
                    </div>
                </div>


            </div>)
        }



       startWatch(){
           this.setState({is_start:true})
           this.timer = setInterval(()=>{
                var tsec = 0;
                if(this.state.milli_second > 60){
                 tsec = 0
                 this.setState({second:this.state.second+1})
                }else{
                  tsec = this.state.milli_second+1

                }
                this.setState({milli_second:tsec})
            },10)
        }

        pauseWatch(){
          this.setState({is_start:false})
          clearInterval(this.timer)
        }

        reset(){
          clearInterval(this.timer)
          this.setState({milli_second:0,second:0,is_start:false})
        }

    }
