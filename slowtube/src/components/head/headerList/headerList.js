import React, { Component } from 'react';
import './headerList.css';

class HeaderList extends Component {
    render() {
        return(
            <div className="headerList">
                <ul>
                    <li><p>About</p><br /></li>
                    <li><p>Playlists</p><br /></li>
                    <li><p>Sign in</p><br /></li>
                </ul>
            </div>
            )
    }
}

export default HeaderList;