import React, {Component} from 'react';
import { Badge } from 'antd';
import './navigation.css';

class Navigation extends Component {
    render() { 
        return ( 
            <nav>
                <img src={this.props.logo} className="App-logo" alt="logo" />
                {this.props.title}   <Badge count={this.props.counterTask} style={{ backgroundColor: '#FFEB3B',color:'#000000' }} />
            </nav>
         )
    }
}
 
export default Navigation;