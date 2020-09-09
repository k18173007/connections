import React from 'react'


export const DriverDetails = ({ driver }) => {

  return (
    <div className="my-2">
      <div className="details d-flex flex-column align-items-start">
        <h4 className="text-info">Driver Details</h4>
        <div className="container p-0 d-flex">
          <div className="hospital-details col-4 p-0 text-start col-md-4 col-sm">
            <p className="text-bold">Name :</p>
            <p className="text-bold">Contact :</p>
          </div>
          <div className="hospital-details col-8 text-start col-md-8 col-sm" >
            <p>{driver.DriverName}</p>
            <p>{driver.driverContact}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const RenderRequestBody = (props) => {
  return (
    <tr key={props.patient.id} role="button" >
      <td>{props.patient.id}</td>
      <td>{props.patient.time}</td>
      <td>{props.patient.requestTime}</td>
      <td>{props.driver.DriverName}</td>
      <td>{props.hospital.hospitalName}</td>
      <td>{props.patient.patientName}</td>
      <td>{props.patient.case}</td>
      <td>{props.patient.plevel}</td>
      <td className="opration">
        <button
          style={{ borderRadius: '0' }}

          className="btn btn-grant">
          {' '}
          Grant
        </button>
      </td>
    </tr>
  )
}

export const DriverDetailsTable = (props) => {

  const table = props.patients.map((pat) => {
    const drive = props.drivers.map((drive) => {
      const hospital = props.hospitals.map((hos) => {
        if ((pat.driverId === drive.id) && (drive.hospitalId === hos.id) && (props.driver === null || props.data.driver.id === drive.id)) {
          return <RenderRequestBody patient={pat} driver={drive} hospital={hos} />
        }
      })
      return hospital
    })
    return drive
  })

  return (
    <div className="table-scroll">
      <table className="table table-striped">
        <thead style={{ background: '#12565d', color: 'aliceblue' }}>
          <tr>
            <th>id</th>
            <th>Request</th>
            <th>Time</th>
            <th>Drivername</th>
            <th>hospitalName</th>
            <th>patientName</th>
            <th>patientCase</th>
            <th>level</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  )
}


const RenderGrantedBody = (props) => {

  return (
    <tr key={props.driver.id} role="button" onClick={() => { props.setDriver(props.driver); props.setData({ driver: props.driver, hospital: props.hospital }) }}>
      <td>{props.driver.DriverName}</td>
      <td style={{ textAlign: "end" }}>{props.hospital.hospitalName}</td>
    </tr>
  )
}

export const GrantedTable = (props) => {

  const table = props.patients.map((pat) => {
    const drive = props.drivers.map((drive) => {
      const hospital = props.hospitals.map((hos) => {
        if ((pat.driverId === drive.id) && (drive.hospitalId === hos.id)) {
          return <RenderGrantedBody patient={pat} driver={drive} hospital={hos} setDriver={props.setDriver} setData={props.setData} />
        }
      })
      return hospital
    })
    return drive
  })
  return (
    <div id="d-name-h-name">
      <table className="table table-striped">
        <thead style={{ background: '#fff', color: '#12565d' }}>
          <tr>
            <th>Drivername</th>
            <th style={{ textAlign: "end" }}>hospitalName</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  )
}
