import Background from '../assets/images/Books.jpg'
import Library from '../assets/images/Library.jpg'

function Home() {
  return (
    <>
      <div style={{ backgroundImage: `url(${ Background })`}} className='home'>
      </div>
      <div className='imagediv'>
        <img src={Library} alt='' className='Centerimage'></img>
      </div>
    </>
  )
}

export default Home

