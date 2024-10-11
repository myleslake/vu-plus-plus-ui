import './App.css'
import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />

      <main className="py-5">
        <div className="container container-narrow">

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

          <div className="row">

            <div className="col-md-6">
              <article className="mb-5">
                <div className="position-relative" style={{ paddingTop: '50%' }}>
                  <img 
                    src="/src/assets/post-2.jpg" 
                    alt="Blog post image" 
                    className="position-absolute top-0 start-0 w-100 h-100 mb-3" 
                    style={{ 
                      objectFit: 'cover',
                      border: '1px solid #e0e0e0' 
                    }} 
                  />
                </div>
                <div className="mt-4">
                  <h2 className="h3">Optimizing Performance in VU++ Applications</h2>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className="post-metadata d-flex align-items-center">
                    <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '32px', height: '32px' }}>
                      <span className="text-white fw-bold">J</span>
                    </div>
                    <div>
                      <p className="mb-0 fw-bold">Jane Smith</p>
                      <p className="text-muted mb-0"><small>May 10, 2023 · 8 min read</small></p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-6">
              <article className="mb-5">
                <div className="position-relative" style={{ paddingTop: '50%' }}>
                  <img 
                    src="/src/assets/post-3.jpg" 
                    alt="Blog post image" 
                    className="position-absolute top-0 start-0 w-100 h-100 mb-3" 
                    style={{ 
                      objectFit: 'cover',
                      border: '1px solid #e0e0e0' 
                    }} 
                  />
                </div>
                <div className="mt-4">
                  <h2 className="h3">Exploring Advanced VU++ Techniques</h2>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <div className="post-metadata d-flex align-items-center">
                    <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '32px', height: '32px' }}>
                      <span className="text-white fw-bold">A</span>
                    </div>
                    <div>
                      <p className="mb-0 fw-bold">Alice Johnson</p>
                      <p className="text-muted mb-0"><small>May 5, 2023 · 10 min read</small></p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
