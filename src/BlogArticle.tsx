import React from 'react';

// Define the props interface
interface BlogArticleProps {
  src: string;
  alt: string;
  title: string;
  text: string;
  author: string;
  date: string;
  timeToRead: string;
}

// Update the BlogArticle component to accept props
const BlogArticle: React.FC<BlogArticleProps> = ({ src, alt, title, text, author, date, timeToRead }) => {
  return (
    <div className="col-md-6">
      <article className="mb-5">
        <div className="position-relative" style={{ paddingTop: '50%' }}>
          <img 
            src={src} 
            alt={alt} 
            className="position-absolute top-0 start-0 w-100 h-100 mb-3" 
            style={{ 
              objectFit: 'cover',
              border: '1px solid #e0e0e0' 
            }} 
          />
        </div>
        <div className="mt-4">
          <h2 className="h3">{title}</h2>
          <p>{text}</p>
          <div className="post-metadata d-flex align-items-center">
            <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '32px', height: '32px' }}>
              <span className="text-white fw-bold">{author.charAt(0)}</span>
            </div>
            <div>
              <p className="mb-0 fw-bold">{author}</p>
              <p className="text-muted mb-0"><small>{date} · {timeToRead}</small></p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogArticle;