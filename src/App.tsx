import { Router } from './Router';
import { Header } from './components/Header/Header';
import { MenuColumn } from './components/Products/MenuColumn';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='py-24 flex flex-1 min-w-screen'>
        <div className='hidden lg:block lg:w-60 ml-2'>
          <MenuColumn />
        </div>
        <div className='flex-1'>
          <Router />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default App;
