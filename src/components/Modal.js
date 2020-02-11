import React from 'react'
import { Modal, Button ,Input } from 'antd';


class MyModal extends React.Component {

  constructor(props){
    super(props)
    this.state={
      visible: this.props.visible,
      name:this.props.isEdit?this.props.el.name:'',
      img:this.props.isEdit?this.props.el.img:'',rate:this.props.isEdit?this.props.el.rate:''
    }
  }
 

  handleOk = e => {
    console.log(e);
    this.props.isEdit?
  this.props.handleEditData({name:this.state.name ,img:this.state.img , rate:this.state.rate}):  this.props.handleData({name:this.state.name ,img:this.state.img , rate:this.state.rate})

  };

  handleCancel = e => {
    this.props.handleCancel()
  };

  render() {
    console.log('this.props', this.props)
    return (
      <div className=''>

        <Modal
          title={`${this.props.isEdit ?"EDIT":""}CARD`}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <>
        <Input placeholder="name" value={this.state.name} onChange={v=>this.setState({name:v.target.value})} />
        <Input placeholder="img" value={this.state.img} onChange={v=>this.setState({img:v.target.value})} />
        <Input placeholder="rate" value={this.state.rate} onChange={v=>this.setState({rate:v.target.value})}/> 
        </>
        </Modal>
      </div>
    );
  }
}

export default MyModal