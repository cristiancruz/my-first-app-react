import React, {Component} from 'react';
import { Card } from 'antd';


class CardView extends Component {
    render() { 
        return ( 
    
            <Card title={this.props.title} bordered={false} style={{ marginTop: '10px', marginLeft: '10px',display: 'inline-block'}} sm={12}>
              <p><strong>Prioridad:</strong> {this.props.priority}</p>
              <p><strong>Responsable:</strong> {this.props.responsible}</p>
              <p><strong>Descripción:</strong> {this.props.description}</p>
            </Card>  
        
         )
    }
}
 
export default CardView;