import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FeaturedPlaces from "./components/featured-places";

const Places = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Header />
        <main className="content">
          <div className="container-fluid p-0">

            <div className="main-section">
              <div className="row">
                <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="h3 mb-3"><strong>Places</strong></h1>
                  </div>
                  <div className="col-md-6 text-end">
                    <Link to="/create-place" className="btn btn-info btn-sm">Create New Place</Link>
                  </div>
                </div>
                  <div className="card">
                    <img className="card-img-top" src="./img/places/p1.jpg" alt="Place 1" style={{height: "300px", objectFit: 'cover'}} />
                    <div className="card-header">
                      <h5 className="card-title mb-0 pb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
                    </div>
                    <div className="card-body pt-1">
                        <p className="text-muted">Dargavs, Russia</p>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores possimus voluptate aperiam quae commodi tempora voluptatum, magni veniam quidem. Necessitatibus reiciendis iusto autem ipsum ipsam eligendi ab architecto accusantium vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, explicabo officia! Dolore, animi quam. Debitis minus laborum blanditiis, beatae vero impedit incidunt possimus maxime hic ipsam nesciunt veniam? Aliquid, totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni possimus quod aperiam assumenda libero aut facilis, sint quaerat, voluptate porro rem esse quia nulla iusto laboriosam odit nisi nobis!
                      </p>
                      <div className="jj-actions">
                        <Link to="/place-details" className="btn btn-primary">View Details</Link>
                        <a href="#" className="card-link ms-3">Show in Map</a>
                        <a href="#" className="card-link ms-3">5/5 Rating</a>
                        <a href="#" className="card-link ms-3">30 deg/cel</a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <img className="card-img-top" src="./img/places/p2.jpg" alt="Place 1" style={{height: "300px", objectFit: 'cover'}} />
                    <div className="card-header">
                      <h5 className="card-title mb-0 pb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
                    </div>
                    <div className="card-body pt-1">
                        <p className="text-muted">Kamchatka, Russia</p>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores possimus voluptate aperiam quae commodi tempora voluptatum, magni veniam quidem. Necessitatibus reiciendis iusto autem ipsum ipsam eligendi ab architecto accusantium vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, explicabo officia! Dolore, animi quam. Debitis minus laborum blanditiis, beatae vero impedit incidunt possimus maxime hic ipsam nesciunt veniam? Aliquid, totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni possimus quod aperiam assumenda libero aut facilis, sint quaerat, voluptate porro rem esse quia nulla iusto laboriosam odit nisi nobis!
                      </p>
                      <div className="jj-actions">
                        <Link to="/place-details" className="btn btn-primary">View Details</Link>
                        <a href="#" className="card-link ms-3">Show in Map</a>
                        <a href="#" className="card-link ms-3">5/5 Rating</a>
                        <a href="#" className="card-link ms-3">30 deg/cel</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                    <FeaturedPlaces />
                </div>
              </div>
            </div>


          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
 
export default Places;