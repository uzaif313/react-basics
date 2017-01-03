    import React from 'react'
    import {Link} from 'react-router'
    export default class Header extends React.Component{

        render(){
            return(
              <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">ReactRock</a>
                  </div>

                  <div class="navbar-collapse collapse in" id="bs-example-navbar-collapse-1" aria-expanded="true">
                    <ul class="nav navbar-nav">
                      <li class="active"><Link to="/">StopWatch</Link><span class="sr-only">(current)</span></li>
                      <li><Link to="contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>
            );
        }
    }
