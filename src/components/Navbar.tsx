import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      marginBottom: '1rem'
    }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Root</Link>
      <Link to="/page1" style={{ marginRight: '1rem' }}>Page 1</Link>
      <Link to="/page2">Page 2</Link>
    </nav>
  )
}

export default Navbar
