function Header() {
    return (
        <header className="bg-dark text-white py-2 sticky-top">
        <div className="container position-relative">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/src/assets/vu-logo.jpg" alt="VU++ Logo" className="me-3 rounded-circle" style={{ height: '40px', width: '40px', objectFit: 'cover' }} />
              <h1 className="h3 mb-0">VU++ Tech Blog</h1>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-search me-3" style={{ fontSize: '1.2rem' }}></i>
              <i className="bi bi-bookmark me-3" style={{ fontSize: '1.2rem' }}></i>
              <div className="bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '32px', height: '32px' }}>
                <span className="text-white fw-bold">M</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;
