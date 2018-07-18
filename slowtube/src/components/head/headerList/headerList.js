import React, { Component } from 'react';
import './headerList.css';

class HeaderList extends Component {
    render() {
        return(
            <div className="headerList">
                <ul>
                    <li><p>about</p><br /></li>
                    <li><p>playlists</p><br /></li>
                    <li><p>about</p><br /></li>
                </ul>
            </div>
            )
    }
}

export default HeaderList;