import { useEffect, useState, useRef, useCallback } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const [password, setPassword] = useState(null)
  const passwordRef = useRef(null)


  const copyPassword = useCallback(() => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 5000);

    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
  }, [password]);

  const generatePasword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}|;:<>?/`~"

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass)
  }, [length, charAllowed, numberAllowed, setPassword]);


  useEffect(() => {
    generatePasword()
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className='h-[100vh] w-[100vw] bg-slate-800 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-8 bg-white shadow-2xl p-10 rounded-lg w-[600px]'>
        <h1 className='font-extrabold text-4xl text-gray-800 mb-10'>Password Generator</h1>

        <div className='flex border-2 border-gray-300 rounded-md overflow-hidden w-full'>
          <input
            className='w-full px-4 py-2 text-lg outline-none'
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className={`text-white px-4 py-2 text-lg transition-all duration-300 ease-in-out ${isClicked ? 'bg-green-600' : 'bg-blue-800 hover:bg-blue-700'}`}
            onClick={copyPassword}>
            {isClicked ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className='flex gap-6 items-center'>
          <div>
            <input
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              id='range'
              type="range"
              min={10}
              max={30}
              value={length}
            />
            <label className='cursor-pointer mt-2 text-lg' htmlFor="range">
              Length: {length}
            </label>
          </div>

          <div className='flex items-center'>
            <input
              className='cursor-pointer'
              onChange={() => setNumberAllowed((prev) => !prev)}
              type="checkbox"
              id="number"
              checked={numberAllowed}
            />
            <label className='cursor-pointer ml-2 text-lg' htmlFor="number">
              Numbers
            </label>
          </div>

          <div className='flex items-center'>
            <input
              className='cursor-pointer'
              onChange={() => setCharAllowed((prev) => !prev)}
              type="checkbox"
              id="char"
              checked={charAllowed}
            />
            <label className='cursor-pointer ml-2 text-lg' htmlFor="char">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
