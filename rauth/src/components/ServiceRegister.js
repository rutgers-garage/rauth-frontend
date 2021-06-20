import React from 'react' 

const ServiceRegister = ({ serviceRegistration }) => {
    const rAuthData = JSON.parse(sessionStorage.getItem("body"))
    return (
        <div>
            
            <div>{rAuthData.fullName.stringValue + "\t" + rAuthData.netid.stringValue + "\t" + rAuthData.nonRutgersEmail.stringValue + "\t" + rAuthData.gradYear.stringValue}</div>
            {/* ABOVE SHOULD PULL FROM SESSION STORAGE AND RENDER VALS */}
            {serviceRegistration}
        </div>
    )
}

export default ServiceRegister