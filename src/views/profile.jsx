import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <>
      <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Header />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3"><strong>Profile</strong></h1>

            <div className="main-section">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Profile Details</h5>
                    </div>
                    <div className="card-body text-center">
                      <img src="./img/avatar.png" alt="" className="img-fluid rounded-circle mb-2" width="128" height="128" />
                      <h5 className="card-title mb-0">Shekhor Saha</h5>
                      <div className="text-muted mb-2">Tourist</div>
                      <div className="mt-2">
                        <a href="mailto:shekhorsaha@gmail.com">shekhorsaha@gmail.com</a> , <a href="javascript:void(0)">+79081212123</a>
                      </div>
                    </div>
                    <hr className="my-0" />
                    <hr className="my-0" />
                    <div className="card-body">
                      <h5 className="h6 card-title">About</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home feather-sm me-1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Lives in <a href="#" onClick={(e) => e.preventDefault()}>Yekaterinburg, Russia</a></li>
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase feather-sm me-1"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> Studies at <a href="#" onClick={(e) => e.preventDefault()}>UrFU</a></li>
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin feather-sm me-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> From <a href="#" onClick={(e) => e.preventDefault()}>Dhaka, Bangladesh</a></li>
                      </ul>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <h5 className="h6 card-title">Elsewhere</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1"><a href="#">Facebook</a></li>
                        <li className="mb-1"><a href="#">Instagram</a></li>
                        <li className="mb-1"><a href="#">LinkedIn</a></li>
                        <li className="mb-1"><a href="#">GitHub</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">Update Details</div>
                    <form action="#" onSubmit={(e) => {e.preventDefault();}}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Enter full name" defaultValue={'Shekhor Saha'} />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" defaultValue={'shekhorsaha@gmail.com'} />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter phone" defaultValue={'+79081212123'} />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="current_address">Current Address</label>
                        <input type="text" name="current_address" className="form-control" id="current_address" placeholder="Enter current address" defaultValue={'Yekaterinburg, Russia'} />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="permanent_address">Permanent Address</label>
                        <input type="text" name="permanent_address" className="form-control" id="permanent_address" placeholder="Enter permanent address" defaultValue={'Dhaka, Bangladesh'} />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="occupation">Occupation</label>
                        <input type="text" name="occupation" className="form-control" id="occupation" placeholder="Enter occupation" defaultValue={'Studies at UrFU'} />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="designation">Designation</label>
                        <input type="text" name="designation" className="form-control" id="designation" placeholder="Enter designation" defaultValue={'Tourist'} />
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="facebook">Facebook</label>
                            <input type="text" name="facebook" className="form-control" id="facebook" placeholder="Enter facebook" defaultValue={'@shekhorsaha'} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="instagram">Instagram</label>
                            <input type="text" name="instagram" className="form-control" id="instagram" placeholder="Enter instagram" defaultValue={'@shekhorsaha'} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input type="text" name="linkedin" className="form-control" id="linkedin" placeholder="Enter linkedin" defaultValue={'@shekhorsaha'} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="github">Github</label>
                            <input type="text" name="github" className="form-control" id="github" placeholder="Enter github" defaultValue={'@shekhorsaha'} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-info">Save</button>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </main>
        <Footer />
      </div>
    </div>
    </>
  );
}
 
export default Profile;