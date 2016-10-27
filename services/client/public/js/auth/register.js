'use strict';

import React from 'react'

export class Register extends React.Components {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <form>
                    <input type="text" name="name" placeholder="name"/>
                    <input type="email" name="email" placeholder="email"/>
                    <input type="password" name="password" placeholder="password"/>
                    <input type="password" name="confirm" placeholder="confirm password"/>
                    <input type="submit" name="submit" value="submit"/>
                </form>
            </div>
        );
    }
}
