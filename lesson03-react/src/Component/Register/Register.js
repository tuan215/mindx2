import "./Register.css"

function Register({type,placeholder}){
    return(
        <div className="Register">
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Register;