import React from 'react' 

const ServiceRegister = ({ serviceRegistration }) => {
    const rAuthData = JSON.parse(sessionStorage.getItem("body"))
    return (
        <div>
            
            <div>{rAuthData.fullName + "\t" + rAuthData.netid + "\t" + rAuthData.nonRutgersEmail + "\t" + rAuthData.gradYear}</div>
            {/* ABOVE SHOULD PULL FROM SESSION STORAGE AND RENDER VALS */}
            {serviceRegistration}
        </div>
    )
}

export default ServiceRegister