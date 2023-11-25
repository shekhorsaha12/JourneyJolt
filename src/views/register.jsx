import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const onSubmitSignUp =(e) =>{
    e.preventDefault();
    navigate('/login');
  }
  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
               <h1 className="h2"> Welcome </h1>
                <p className="lead"> Sign up & continue </p>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={(e)=> onSubmitSignUp(e)}>
                      
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input className="form-control form-control-lg" type="text" name="name" placeholder="Enter your full name" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input className="form-control form-control-lg" type="password" name="password" placeholder="Retype your password" />
                      </div>
                      
                      <div className="d-grid gap-2 mt-3">
                        
                        <button className="btn btn-lg btn-primary"  >Sign up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-center mb-3"> Already have an account? <Link to="/login">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default Register;