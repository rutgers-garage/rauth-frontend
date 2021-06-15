const ServiceRegister = ({ serviceRegistration }) => {

    return (
        <div>
            <h1>Thanks!</h1>
            <h1>Netid: </h1>
            <h1>Name: </h1>
            <h1>Grad Year: </h1>
            {/* ABOVE SHOULD PULL FROM SESSION STORAGE AND RENDER VALS */}
            {serviceRegistration}
        </div>
    )
}

export default ServiceRegister