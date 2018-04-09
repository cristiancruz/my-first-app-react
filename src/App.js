import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//componentes
import Navigation from './components/nav/navigation';
import CardView from './components/card/card';
import CreateTask from './components/createCard/create';
//data
import {data} from './data/task.json';
//an design
import {Row, Col, Layout} from 'antd';
const { Content } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Tareas',
      counter: data.length,
      data
    }
    this.handleCreate = this.handleCreate.bind(this)
  }

  handleCreate(data) {
    this.setState({
      data: [...this.state.data, data ],
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation title={this.state.title} logo={logo} counterTask={this.state.counter}/>
        <Layout>
        <Content  style={{ padding: '20px 50px' }}>
          <Row>
            <Col xs={24} sm={12} md={6} lg={12} xl={12}>
              <CreateTask onAddTask={this.handleCreate}/>
            </Col>
            <Col xs={24} sm={12} md={18} lg={12} xl={12}>
              {
                this.state.data.map((item, index) => {
                  return <CardView {...item} key={index}/>
                })
              }
            </Col>
          </Row>
        </Content>
        </Layout>
      </div>
    );
  }
}

export default App;