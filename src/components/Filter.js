import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className='Filter'>
          <div className="filter-result">{this.props.count} Products </div>
          <div className="filter-sort"> 
                    Order <select>
              <option>Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
              </select></div>
          <div className="filter-sort"> Filter 
          <select>
              <option value="ALL"></option>
              <option value="XS"></option>
              <option value="S"></option>
              <option value="M"></option>
              <option value="L"></option>
              <option value="XL"></option>
              <option value="XXL"></option>
              
              </select></div>
      </div>
    )
  } 
}
