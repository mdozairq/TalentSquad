import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Career</h2>
          <p>
            To be a Reliable Partner for Quality IT Projects and Professional Resources at Competitive Prices.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-12 col-md-12 col-lg-12'>
                  {/* <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} /> */}
                  <div className="card" style={{
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: "#f1f1f1",
                    height:"300px",
                    margin:"10px"
                  }}>
                    <div className="card-body">Latest Recruitment Post here</div>
                  </div>
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
