import React, { Component } from 'react'
import {userContext,courseContext} from './App'
 class CompD extends Component {
  render() {
    return (
      <div>
          ComponentD
          <userContext.Consumer>
              {
                  user=>
                  {
                      return (<courseContext.Consumer>
                          {
                              course=>
                              {
                                  return <h1>{user} is taking {course}</h1>
                              }
                          }
                      </courseContext.Consumer>)

                  }
              }
          </userContext.Consumer>
          
          </div>
    )
  }
}
export default CompD;
