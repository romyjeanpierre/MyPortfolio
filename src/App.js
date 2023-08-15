import{BsFillCloudMoonFill} from 'react-icons/bs'
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
      <title>Romy A. Jean-Pierre Portfolio</title>
      </head>

      <main className='bg-black px-0'>
        <section className='bg-slate-600 min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='bg-gradient-to-r  from-cyan-500 to text-teal-950 text-white px-4 py-2 rounded-md ml-8 text-xl font-burtons border'>About </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillCloudMoonFill className='cursor-pointer text 2xl'/>
                  </li>
              <li>
                <a className="bg-gradient-to-r  from-cyan-500 to text-teal-950 text-white px-4 py-2 rounded-md ml-8 text-xl font-burtons border" href="#">Resume</a>
                </li>
            </ul>
          </nav>

        </section>
      </main>
    </div>
  );
}

export default App;
