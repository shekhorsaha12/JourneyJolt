import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const EditPlace = () => {
  return (
    <>
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Header />
        <main className="content">
          <div className="container-fluid p-0">
          <h1 className="h3 mb-3"><strong>Edit Place</strong></h1>

            <div className="main-section">
              <div className="row">
                <div className="card">
                  <form action="#" onSubmit={(e) => {e.preventDefault(); location.reload();}}></form>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name" className="form-control" id="name" placeholder="Place name" defaultValue={'Dargavs, Russia'} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="images">Images</label>
                          <input type="file" name="images" className="form-control" multiple />
                        </div>
                      </div>
                      <div className="col-md-12 mt-2">
                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea name="description" id="description" className="form-control" cols="30" rows="10" placeholder="Place description" defaultValue={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores possimus voluptate aperiam quae commodi tempora voluptatum, magni veniam quidem. Necessitatibus reiciendis iusto autem ipsum ipsam eligendi ab architecto accusantium vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, explicabo officia! Dolore, animi quam.'}></textarea>
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input type="text" name="title" className="form-control" id="title" placeholder="Place title" defaultValue={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="location">Location</label>
                          <input type="text" name="location" className="form-control" id="location" placeholder="Place location" defaultValue={'Dargavs, Russia'} />
                        </div>
                      </div>
                      <div className="col-md-12 mt-2">
                        <div className="form-group">
                          <label htmlFor="tags">Tags</label>
                          <input type="text" name="tags" className="form-control" id="tags" placeholder="Place tags" defaultValue={'Russia, Mountain, Tourism, Hiking, Attractions'} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success">Edit Place</button>
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
 
export default EditPlace;