import './App.css'
import BlogArticle from './BlogArticle'
import Footer from './Footer'
import Header from './Header'
import Jumbotron from './Jumbotron'

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />

      <main className="py-5">
        <div className="container container-narrow">

          {/* TODO: Add props to Jumbotron */}
          <Jumbotron />
          
          <div className="row">

          <BlogArticle 
            src="/src/assets/post-2.jpg" 
            alt="Blog post image" 
            title="Optimizing Performance in VU++ Applications" 
            text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            author="Jane Smith" 
            date="May 10, 2023" 
            timeToRead="8 min read" 
          />

          <BlogArticle 
            src="/src/assets/post-3.jpg" 
            alt="Blog post image" 
            title="Exploring Advanced VU++ Techniques" 
            text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
            author="Alice Johnson" 
            date="May 5, 2023" 
            timeToRead="10 min read" 
          />

          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
