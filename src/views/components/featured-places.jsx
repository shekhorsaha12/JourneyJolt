import { Link } from "react-router-dom";

const FeaturedPlaces = () => {
  return (
    <>
      <h1 className="h3 mb-3"><strong>Featured Places</strong></h1>
      <div className="card">
      <img className="card-img-top" src="./img/places/p3.webp" alt="Place 1" style={{height: "180px", objectFit: 'cover'}} />
      <div className="card-header">
        <h5 className="card-title mb-0 pb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
      </div>
      <div className="card-body pt-1">
          <p className="text-muted">Republic of Dagestan, Russia</p>
        {/* <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores possimus voluptate aperiam quae commodi tempora voluptatum, magni veniam quidem. Necessitatibus reiciendis iusto autem ipsum ipsam eligendi ab architecto accusantium vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, explicabo officia! Dolore, animi quam. Debitis minus laborum blanditiis, beatae vero impedit incidunt possimus maxime hic ipsam nesciunt veniam? Aliquid, totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni possimus quod aperiam assumenda libero aut facilis, sint quaerat, voluptate porro rem esse quia nulla iusto laboriosam odit nisi nobis!
        </p> */}
        <div className="jj-actions">
          <Link to="/place-details" className="card-link">View Details</Link>
          {/* <a href="#" className="card-link ms-3">Show in Map</a> */}
          <a href="#" className="card-link ms-3">5/5 Rating</a>
          {/* <a href="#" className="card-link ms-3">30 deg/cel</a> */}
        </div>
      </div>
      </div>

      <div className="card">
      <img className="card-img-top" src="./img/places/p4.jpg" alt="Place 1" style={{height: "180px", objectFit: 'cover'}} />
      <div className="card-header">
        <h5 className="card-title mb-0 pb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
      </div>
      <div className="card-body pt-1">
          <p className="text-muted">Kazan, Russia</p>
        {/* <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores possimus voluptate aperiam quae commodi tempora voluptatum, magni veniam quidem. Necessitatibus reiciendis iusto autem ipsum ipsam eligendi ab architecto accusantium vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, explicabo officia! Dolore, animi quam. Debitis minus laborum blanditiis, beatae vero impedit incidunt possimus maxime hic ipsam nesciunt veniam? Aliquid, totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni possimus quod aperiam assumenda libero aut facilis, sint quaerat, voluptate porro rem esse quia nulla iusto laboriosam odit nisi nobis!
        </p> */}
        <div className="jj-actions">
          <Link to="/place-details" className="card-link">View Details</Link>
          {/* <a href="#" className="card-link ms-3">Show in Map</a> */}
          <a href="#" className="card-link ms-3">5/5 Rating</a>
          {/* <a href="#" className="card-link ms-3">30 deg/cel</a> */}
        </div>
      </div>
      </div>
    </>
  );
}
 
export default FeaturedPlaces;