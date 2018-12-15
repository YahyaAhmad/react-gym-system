import React, { Component } from 'react'

export default class InOut extends Component {
  render() {
    let data = this.props.data;
    return (
      <tr>
          <td>{data.ID}</td>
          <td>{data.Full_Name}</td>
          <td>{data.Date}</td>
          <td>{data.Status==1?'IN':'OUT'}</td>
      </tr>
    )
  }
}
