import React, { Component } from 'react'

export default class FinanceItem extends Component {
  render() {
    let {data} = this.props;
    return (
      <tr>
          <td>{data.ID}</td>
          <td>{data.Full_Name}</td>
          <td>{data.Duration}</td>
          <td>${data.Price}</td>
          <td>{data.Date}</td>
      </tr>
    )
  }
}
