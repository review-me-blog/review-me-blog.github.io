import React from 'react';

// Styles
const cardLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const cardStyle = {
  boxShadow: 'var(--card-shadow)',
  padding: '16px',
  borderRadius: '8px',
  marginBottom: '16px',
  backgroundColor: 'var(--card-background)',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const cardBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const cardHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1em',
  marginBottom: '0.2em',
};

const cardDateStyle = {
  fontSize: '14px',
  color: 'var(--card-text)',
};

const cardTitleStyle = {
  fontSize: '20px',
  marginBottom: '8px',
  color: 'var(--card-text)',
};

const cardAuthorsStyle = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginRight: 'auto', // Pushes authors to the left
};

const authorStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  marginRight: '0.5rem',
};

const authorImageStyle = {
  width: '30px',
  borderRadius: '50%',
  marginRight: '4px',
};

function BlogPostCard({ permalink, title, date, authors }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <a href={permalink} style={cardLinkStyle}>
      <div className="card" style={cardStyle}>
        <div className="card-body" style={cardBodyStyle}>
          <h3 className="card-title" style={cardTitleStyle}>{title}</h3>
          <div className="card-header" style={cardHeaderStyle}>
            <div className="card-authors" style={cardAuthorsStyle}>
              {authors.map((author) => (
                <span key={author.name} style={authorStyle}>
                  {author.imageURL && (
                    <img src={author.imageURL} alt={author.name} style={authorImageStyle}/>
                  )}
                </span>
              ))}
            </div>
            <div className="card-date" style={cardDateStyle}>{formattedDate}</div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default BlogPostCard;
