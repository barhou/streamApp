import React, { Component } from 'react'
import { Input, Rate } from 'antd';
import { withRouter } from "react-router-dom"

import MyModal from './Modal'

import './home.css'
import Card from './card'






class Home extends Component {
  state = {
    rate: 0,
    search: '',
    isEdit: false,
    visible: false,
    el: {},
    myData: [{
      name: 'Star Wars',
      img: 'https://media.melty.fr/pmedia-4011986-ajust_700/rendez-vous-le-18-decembre-pour-star-wars.jpg',
      rate: 3
    }, {
      name: 'robin des bois',
      img: 'http://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/unnamed-9_1.jpg?1543160102',
      rate: 2
    }, {
      name: 'joker',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SY679_.jpg',
      rate: 3
    }],
    index: null
  }

  handleRate = (v) => {
    this.setState({ rate: v })
  }
  handleData = (val) => {
    console.log('val', val)
    const newData = this.state.myData
    newData.push(val)
    this.setState({ myData: newData, visible: false })
    //  this.props.handleData(val)
  }
  handleEditData = (val) => {
    const newData = this.state.myData
    newData.splice(this.state.index, 1, val)
    this.setState({ myData: newData, visible: false })
  }
  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }
  editItem = (i, el) => {
    this.setState({ isEdit: true, el: el, visible: true, index: i })
  }
  delete = (i, el) => {
    const newData = this.state.myData
    newData.splice(i, 1)
    this.setState({ myData: newData })
  }
  showModal = () => {
    this.setState({
      visible: true,
      isEdit: false
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,

    });
  }
  logout=()=>{
this.props.history.push('/')
  }
  render() {

    return (
      <div className='home'>
        <div className='homeheader'>
          <div className="styleSearch">
            <div style={{
              width: "100px"
            }}>Search</div>
            <Input onChange={this.handleSearch} style={{ width: '500px' }} />
          </div>
          <Rate onChange={this.handleRate} />
          <div onClick={this.logout}>Logout</div>
        </div>
        <div
          className='homebody'>
          {this.state.myData && this.state.myData.filter((el, i) => (el.rate >= this.state.rate) && (el.name.includes(this.state.search))).map((el, i) => {
            return <Card delete={() => this.delete(i, el)} editItem={() => this.editItem(i, el)} key={i} name={el.name} rate={el.rate} img={el.img} />
          })}
        </div>
        <div className='homefooter'>
          {this.state.visible && <MyModal handleEditData={this.handleEditData} el={this.state.el} handleCancel={this.handleCancel} visible={this.state.visible} isEdit={this.state.isEdit} handleData={this.handleData} />}
        </div>
        <button type="primary" onClick={this.showModal}>
          ADD CARD
        </button>
      </div>

    )
  }
}

export default withRouter(Home)