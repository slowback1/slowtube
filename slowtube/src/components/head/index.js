import React, { Component } from 'react';
import HeaderList from './headerList/headerList';
import LogoSection from './logoSection/logoSection';
import './index.css';

class Head extends Component {
    render() {
        return (
                <div className="head">
                    <LogoSection />
                    <HeaderList />
                </div> 
            );
    }
}

export default Head;