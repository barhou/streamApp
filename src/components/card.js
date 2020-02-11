import React, { Component } from 'react'
import {  Rate } from "antd";
import './card.css'


export default class Card extends Component {
    render() {
        return (
         <div>
            <div className='card'>
              <div>{this.props.name}</div>
              <div style={{
                  display:"flex",
                  justifyContent:"space-between"
              }}>
              <button onClick={this.props.editItem}>edit</button>
              <button style={{
                  backgroundColor:"red"
              }} onClick={this.props.delete}>delete</button>
              </div>
       
              <img className='img' src={this.props.img} alt=''/>
              <div> <Rate value={this.props.rate}/></div>
            </div>
        </div>
            
        )
    }
}
