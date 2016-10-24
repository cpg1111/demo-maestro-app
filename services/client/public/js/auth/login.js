'use strict';

import React from 'react'
import Redux from 'redux'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <form>
                    <input type="email" name="email" placeholder="email"/>
                    <input type="password" name="password" placeholder="password"/>
                    <input type="submit" name="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export Login;
