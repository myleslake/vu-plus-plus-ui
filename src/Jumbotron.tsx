// TODO: Needs to take in props
function Jumbotron() {
    return (
        <article className="mb-5 row">
            <div className="col-md-8 mb-3">
              <div className="position-relative" style={{ paddingTop: '50%' }}>
                <img
                  src="/src/assets/post-1.jpg"
                  alt="Blog post image"
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    border: '1px solid #e0e0e0'
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <h2 className="h3">Introducing New Features in VU++</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="post-metadata d-flex align-items-center">
                <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '32px', height: '32px' }}>
                  <span className="text-white fw-bold">J</span>
                </div>
                <div>
                  <p className="mb-0 fw-bold">John Doe</p>
                  <p className="text-muted mb-0"><small>May 15, 2023 · 5 min read</small></p>
                </div>
              </div>
            </div>
          </article>
    )
}

export default Jumbotron;
