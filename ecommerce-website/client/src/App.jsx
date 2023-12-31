import { useState, useEffect } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DealsContainer from './components/deals/dealsContainer';
import Topic from './components/topics';
import HomepageProducts from './components/homepageProducts'
import Profile from './components/profile/profile'
import CartPage from './components/cartPage';

const topics = [
  { id: 1, name: 'Clothing' },
  { id: 2, name: 'Technology' },
  { id: 3, name: 'Travel' },
  { id: 4, name: 'Food and Drink' },
  { id: 5, name: 'Fitness' },
  { id: 6, name: 'Movies' },
  { id: 7, name: 'Music' },
  { id: 8, name: 'Books' },
  { id: 9, name: 'Art and Design' },
  { id: 10, name: 'Sports' },
  // Add more topics as needed
];


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState(false);
  const [cart, setCartPage] = useState(false);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} profile={profile} setProfile={setProfile} setCartPage={setCartPage}/>
      <main>
        {profile ? ( 
          <>
            <Profile/>
          </>
        ) : cart ? (
          <>
            <CartPage/>
          </>
        ) : (
          <>
            <DealsContainer />
            <section className='content-container'>
              <aside className='topics-container'>
                <Topic topics={topics}/>
              </aside>
              <HomepageProducts/>
            </section>
            <footer>This is a footer</footer>
          </>
        )}
      </main>
    </>
  );
}


export default App
