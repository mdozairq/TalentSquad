export const Services = (props) => {
  return (
    <div id='services' className='text-center' style={{
      background:"#70C8D3"
    }}>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Bespoke answers right across your staffing challenge spectrum..
          </p>
        </div>
        <div className='row'>
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'} */}
          <h3>Our Expertise areas:</h3>
          <h4>Industries:</h4>
          Information Technology,
          BSFI (Banking & Financial),
          Consulting,
          Telecom,
          Etc.
          <h4>Technologies:</h4>
          IT Infrastructure,
          IT Application,
          SAP,
          etc.

          <h4>Market:</h4>
          India, Singapore, Malaysia, Hong Kong, Philippines, Indonesia, etc.
        </div>
      </div>
    </div>
  )
}
