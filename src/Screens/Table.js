import React from 'react'
import { Save, Granted, Rejected, items } from "./ContactDetails";

export const SideDetails = ({ data }) => {

  if (data === null) {
    return (<>
    </>)
  } else {
    return (
      <div >
        <div className="details d-flex flex-column align-items-start my-2">
          <div>
            <h4 className="text-info">Driver Details</h4>
          </div>
          <div className="details d-flex flex-column align-items-start">
            <h5>{data.driver.DriverName}</h5>
            <p>Banaras Hindu University, Varanasi, UP</p>
            <div className="container p-0 d-flex">
              <div className="hospital-details col-4 p-0 text-start col-md-4 col-sm">
                <p className="text-bold">Address :</p>
                <p className="text-bold">Contact :</p>
              </div>
              <div className="hospital-details col-8 text-start col-md-8 col-sm" >
                <p>Banaras Hindu University, Varanasi, UP-221005</p>
                <p>{data.driver.driverContact}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="details d-flex flex-column align-items-start my-2">
          <div>
            <h4 className="text-info">Hospiital Details</h4>
          </div>
          <div className="details d-flex flex-column align-items-start">
            <h5>{data.hospital.hospitalName}</h5>
            <div className="container p-0 d-flex">
              <div className="hospital-details col-4 p-0 text-start col-md-4 col-sm">
                <p className="text-bold">Address :</p>
                <p className="text-bold">Contact :</p>
              </div>
              <div className="hospital-details col-8 text-start col-md-8 col-sm" >
                <p>{data.hospital.hospitalAddress}</p>
                <p>{data.hospital.contact}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ "marginTop": "66px" }}>
          <div className="details d-flex flex-column align-items-start my-2">
            <div>
              <h3 className="text-info">Patient Details</h3>
            </div>
            <div className="details d-flex flex-column align-items-start">
              <div className="container p-0 d-flex">
                <div className="hospital-details col-4 p-0 text-start col-md-4 col-sm">
                  <p className="text-bold">Age :</p>
                  <p className="text-bold">Contact :</p>
                  <p className="text-bold">Priority Level :</p>
                  <p className="text-bold">Case :</p>
                  <p className="text-bold">Details :</p>
                  <p className="text-bold">Route :</p>
                </div>
                <div className="hospital-details col-8 text-start col-md-8 col-sm" >
                  <p>{data.patient.patientAge}</p>
                  <p>{data.patient.guardianMobileNo}</p>
                  <p className="text-bold text-danger">{data.patient.plevel}</p>
                  <p className="text-bold text-danger">{data.patient.case}</p>
                  <p>Banaras Hindu University, Varanasi, UP-221005</p>
                  <p>Banaras Hindu University, Varanasi, UP-221005</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const SaveData = (patient, driver, hospital, props) => {
  let items = {
    "patient": patient,
    "driver": driver,
    "hospital": hospital,
    "props": props
  }
  Save.push(items)
  let data = Save.map((props) => {

    return (
      <tr key={props.patient.id}>
        <td>{props.patient.id}</td>
        <td>{props.patient.time}</td>
        <td>{props.patient.requestTime}</td>
        <td>{props.driver.DriverName}</td>
        <td>{props.patient.hospitalName}</td>
        <td>{props.patient.patientName}</td>
        <td>{props.patient.case}</td>
        <td>{props.patient.plevel}</td>
      </tr>
    )
  })
  return data
}

const GrantedData = (patient, driver, hospital, props) => {
  let items = {
    "patient": patient,
    "driver": driver,
    "hospital": hospital,
    "props": props
  }
  Granted.push(items)

  let data = Granted.map((props) => {
    return (
      <tr key={props.patient.id}>
        <td>{props.patient.id}</td>
        <td>{props.patient.time}</td>
        <td>{props.patient.requestTime}</td>
        <td>{props.driver.DriverName}</td>
        <td>{props.patient.hospitalName}</td>
        <td>{props.patient.patientName}</td>
        <td>{props.patient.case}</td>
        <td>{props.patient.plevel}</td>
      </tr>
    )
  })
  return data
}

const RejectedData = (patient, driver, hospital, props) => {
  let items = {
    "patient": patient,
    "driver": driver,
    "hospital": hospital,
    "props": props
  }
  Rejected.push(items)

  let data = Rejected.map((props) => {
    return (
      <tr key={props.patient.id}>
        <td>{props.patient.id}</td>
        <td>{props.patient.time}</td>
        <td>{props.patient.requestTime}</td>
        <td>{props.driver.DriverName}</td>
        <td>{props.patient.hospitalName}</td>
        <td>{props.patient.patientName}</td>
        <td>{props.patient.case}</td>
        <td>{props.patient.plevel}</td>
      </tr>
    )
  })
  return data
}


const RenderRequestBody = (props) => {
  return (

    <tr key={props.patient.id} role="button" onClick={() => props.setDriverData({ driver: props.driver, patient: props.patient, hospital: props.hospital })}>
      <td>{props.patient.id}</td>
      <td>{props.patient.time}</td>
      <td>{props.patient.requestTime}</td>
      <td>{props.driver.DriverName}</td>
      <td>{props.hospital.hospitalName}</td>
      <td>{props.patient.patientName}</td>
      <td>{props.patient.case}</td>
      <td>{props.patient.plevel}</td>
      <td className="d-flex align-items-center">
        <div className="radio">
          <input type="radio" value="option1" name="myRadio" id={props.patient.patientName} className="radio__input radio1" />
          <label for={props.patient.patientName} className="radio__label">a</label>
          <input type="radio" value="option2" name="myRadio" id={props.driver.DriverName} className="radio__input radio2" />
          <label for={props.driver.DriverName} className="radio__label">b</label>
          <input type="radio" value="option3" name="myRadio" id={props.patient.id} className="radio__input radio3" />
          <label for={props.patient.id} className="radio__label">c</label>
        </div>
      </td>
      <td className="opration">
        <button
          style={{ borderRadius: '0' }}
          className="btn btn-save btn-sm"
          onClick={() => SaveData(props.patient, props.driver, props.hospital, props)}
        >
          {' '}
          Save
        </button>
      </td>
      <td className="opration">
        <button
          style={{ borderRadius: '0' }}
          className="btn btn-grant btn-sm"
          onClick={() => GrantedData(props.patient, props.driver, props.hospital, props)}
        >
          Grand
        </button>
      </td>
      <td className="opration">
        <button
          style={{ borderRadius: '0' }}
          className="btn btn-reject btn-sm"
          onClick={() => RejectedData(props.patient, props.driver, props.hospital, props)}
        >
          Reject
        </button>
      </td>
    </tr>
  )
}

export const Table = (props) => {
  console.log("pat1", props);

  const table = props.patients.map((pat) => {
    const drive = props.drivers.map((drive) => {
      const hospital = props.hospitals.map((hos) => {
        if ((pat.driverId === drive.id) && (drive.hospitalId === hos.id)) {
          return <RenderRequestBody patient={pat} driver={drive} hospital={hos} setDriverData={props.setDriverData} />
        }
      })
      return hospital
    })
    return drive
  })

  return (
    <>
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
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </>
  )
}


export const RejectTable = (props) => {
  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
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
          </tr>
        </thead>
        <tbody>
          <RejectedData />
        </tbody>
      </table>
    </>
  )
}

export const SaveTable = () => {
  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
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
          </tr>
        </thead>
        <tbody>
          <SaveData />
        </tbody>
      </table>
    </>
  )
}

export const GrantedTable = () => {
  return (
    <>
      <table style={{ height: '40vh' }} className="table table-striped">
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
          </tr>
        </thead>
        <tbody>
          <GrantedData />
        </tbody>
      </table>
    </>
  )
}
