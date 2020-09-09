import React from 'react'

export const HospitalDetails = ({ data }) => {
    if (data === null)
        return (<div></div>)
    else {
        return (
            <div className="container d-flex flex-column align-items-start">
                <div className="col-12">
                    <h3 className="text-info text-start" style={{textAlign:"start"}}>Hospital Details</h3>
                </div>
                <div className="col-12">
                <div className="row">
                    <div className="col-12 text-start" style={{fontWeight:"bold",textAlign:"start"}}>{data.hospital.hospitalName}</div>
                </div>
                <div className="row">
                    <div className="col-4">Contact:</div>
                    <div className="col-7">{data.hospital.contact}</div>
                </div>
                <div className="row">
                    <div className="col-4">Address: </div>
                    <div className="col-7">{data.hospital.hospitalAddress}</div>
                </div>
                </div>
            </div>
        )
    }
}




