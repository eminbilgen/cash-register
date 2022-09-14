import { useState } from "react"

export default function App() {

  // creating variables for inputs and error box
  const [billAmount, setBill] = useState('');
  const [cashAmount, setCash] = useState('');
  const [error, setError] = useState(''); // show error box
  const [showErr, setShow] = useState('dont'); // error box msg

  // creating variables for change boxes
  const [twokk, setTwok] = useState("0");
  const [fhunn, setFhun] = useState("0");
  const [hunn, setHun] = useState("0");
  const [twee, setTwe] = useState("0");
  const [tenn, setTen] = useState("0");
  const [fivee, setFive] = useState("0");
  const [onee, setOne] = useState("0");

  // noticing that the bill box is filling up
  const handleBill = event => {
    try{
      setBill(parseInt(event.target.value)); // parse the int from our string
    }
    catch(err){ // show error
      console.log(err);
      setShow('do');
      setError('Invalid numbers.');
    }
  }

  // noticing that the cash box is filling up
  const handleCash = event => {
    try{
      setCash(parseInt(event.target.value)); // parse the int from our string
    }
    catch(err){ // show error
      console.log(err);
      setShow('do');
      setError('Invalid numbers.');
    }
  }

  // checks inputs for any invalid type 
  function checkGate(){
    // (if the bill or cash box is empty) or (if bill or cash input isn't number)
    if((billAmount === "" || cashAmount === "") || ((typeof(billAmount) !== "number" ||  typeof(cashAmount) !== "number") || (isNaN(cashAmount) || isNaN(billAmount)))){
      setShow('do');
      setError('Invalid numbers.');
    }
    else{
      if(cashAmount<billAmount){ // is your money enough to pay the bill??
        setShow('do');
        setError('Do you wanna wash plates?');
      }
      else{
        setShow('dont');
        calculate(billAmount,cashAmount) // if everything is ok, keep going to process
      }
    }
  }

  // calculating change for return and putting into box
  function calculate(bill,cash){
    var returnNumber = cash - bill; // calc of change
    var twok = 0; 
    var fhun = 0; 
    var hun = 0;  
    var twe = 0;  
    var ten = 0; 
    var five = 0; 
    var one = 0;  

    while(returnNumber > 0){ // loop until change is 0
      // keep looping until each banknote is smaller than the change
      if(returnNumber-2000>0){
        returnNumber -= 2000;
        twok = twok + 1;
        setTwok(twok);
      }else if(returnNumber - 500 > 0){
        returnNumber -= 500;
        fhun = fhun + 1;
        console.log(returnNumber+ ' fhun ' + fhun*500);
        setFhun(fhun);

      }else if(returnNumber - 100 > 0){
        returnNumber -= 100;
        hun = hun + 1;
        console.log(returnNumber+ ' hun ' + hun*100);
        setHun(hun);
      }
      else if(returnNumber - 20 > 0){
        returnNumber -= 20;
        twe = twe + 1;
        console.log(returnNumber+ ' twe ' + twe*20);
        setTwe(twe);

      }
      else if(returnNumber - 10 > 0){
        returnNumber -= 10;
        ten = ten + 1;
        console.log(returnNumber+ ' ten ' + ten*10);
        setTen(ten);
      }
      else if(returnNumber - 5 > 0){
        returnNumber -= 5;
        five = five + 1;
        console.log(returnNumber+ ' five ' + five*5);
        setFive(five);
      }
      else if(returnNumber - 1 >= 0){
        returnNumber -= 1;
        one = one + 1;
        console.log(returnNumber+ ' one ' + one);
        setOne(one);
      }
    }
  }
  
  return (
    <div className="flex flex-col justify-center items-center w-11/12 h-screen">
      <h1 className="text-4xl font-medium text-fuchsia-600 h-20">Cash Register Manager</h1>
      <h1 className="text-center text-2xl h-auto">Enter the bill amount and cash given by the customer and know minimum number of notes to return.</h1>
      <div className="w-full h-60 flex flex-col mt-8 items-center justify-center lg:h-64">
        <h1 className="text-xl font-medium h-10 flex items-center lg:text-3xl lg: h-24">Bill Amount:</h1>
        <input type="text" className="w-4/6 h-8 border-solid border-2 rounded-md border-fuchsia-600 text-center lg:h-24" onChange={handleBill}></input>
        <h1 className="text-xl font-medium h-10 flex items-center lg:text-3xl lg: h-24">Cash Given:</h1>
        <input type="text" className="w-4/6 h-8 border-solid border-2 rounded-md border-fuchsia-600 text-center lg:h-24" onChange={handleCash}></input>
        <input type="button" className="bg-fuchsia-600 w-3/12 mt-6 h-12 rounded-lg text-xl text-white lg:h-24" value="Check" onClick={() => checkGate()}></input>
        <p className={showErr}>{error}</p>
      </div>
      <table className="w-full flex flex-col items-center justify-center text-justify border-collapse">
        <caption className="text-3xl h-16 flex items-center lg:h-24">Return Change</caption>
        <tbody className="tbody">
          <tr>
            <th>
              No of Notes
            </th>
            <td className="no-of-notes">{twokk}</td>
            <td className="no-of-notes">{fhunn}</td>
            <td className="no-of-notes">{hunn}</td>
            <td className="no-of-notes">{twee}</td>
            <td className="no-of-notes">{tenn}</td>
            <td className="no-of-notes">{fivee}</td>
            <td className="no-of-notes">{onee}</td>
          </tr>
          <tr>
            <th>Note</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center items-center h-auto mt-12">
        <svg className="h-32 w-auto lg:h-36" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="500.000000pt" height="300.000000pt" viewBox="0 0 500.000000 300.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#c026d3" stroke="none">
        <path d="M3471 2278 c-158 -24 -327 -190 -475 -468 -63 -120 -104 -222 -118
        -297 -11 -60 -14 -66 -51 -84 -39 -20 -67 -20 -67 2 0 6 23 56 50 111 47 92
        53 118 29 118 -11 0 -72 -130 -91 -192 -11 -38 -10 -42 11 -59 29 -24 31 -24
        75 6 l37 25 23 -27 c22 -25 26 -26 58 -16 28 8 37 7 44 -5 9 -13 15 -13 49 3
        21 11 72 43 113 72 41 30 77 52 79 49 10 -10 -40 -146 -56 -150 -9 -3 -59 -15
        -111 -27 -109 -25 -260 -76 -372 -125 -162 -70 -275 -162 -299 -243 -25 -85
        32 -176 147 -232 56 -28 71 -31 131 -27 46 2 87 12 126 30 138 64 278 258 378
        522 23 60 40 91 54 96 11 4 70 11 130 15 163 10 199 -12 138 -87 l-27 -33 28
        25 c44 39 48 54 26 83 -13 16 -33 27 -53 29 l-32 3 30 17 c37 21 29 23 -17 4
        -19 -8 -52 -17 -74 -20 -21 -2 -65 -9 -96 -14 -44 -7 -58 -6 -58 4 0 7 16 57
        35 113 19 55 35 103 35 106 0 3 -20 5 -43 5 -29 0 -65 -10 -103 -30 -60 -30
        -149 -108 -159 -141 -7 -21 -42 -31 -67 -18 -14 8 -18 21 -17 67 0 31 6 75 12
        96 l12 39 114 28 c303 74 547 180 650 279 45 44 80 109 81 149 0 59 -62 140
        -138 180 -36 19 -112 27 -171 19z m183 -42 c230 -135 67 -354 -375 -505 -117
        -40 -327 -96 -334 -89 -7 7 104 219 158 301 107 164 212 267 314 308 70 28
        175 22 237 -15z m-404 -660 c0 -42 -188 -182 -212 -158 -35 35 72 142 172 173
        38 11 40 11 40 -15z m-81 -283 c-68 -185 -179 -372 -278 -466 -136 -130 -291
        -141 -411 -29 -77 71 -84 134 -25 224 50 75 216 175 405 243 89 32 276 83 307
        84 l23 1 -21 -57z"/>
        <path d="M1218 1926 c-10 -7 -55 -16 -100 -19 -210 -15 -356 -126 -345 -262 3
        -50 42 -153 53 -142 3 3 -2 20 -11 37 -28 54 -31 130 -7 176 49 96 184 164
        324 164 38 0 40 -1 27 -19 -8 -11 -41 -58 -74 -105 -43 -61 -66 -85 -82 -85
        -30 -1 -40 -21 -18 -37 13 -10 15 -17 8 -26 -18 -22 -43 -110 -43 -148 0 -27
        7 -43 31 -66 28 -26 37 -29 97 -28 48 0 84 7 129 26 38 15 64 21 66 15 2 -6
        46 32 97 84 52 52 88 89 80 83 -8 -6 -34 -25 -57 -43 -24 -18 -43 -30 -43 -26
        0 10 39 65 68 98 14 15 21 27 16 27 -14 0 -53 -44 -108 -122 -46 -66 -48 -68
        -125 -92 -44 -14 -101 -28 -128 -32 -43 -5 -53 -3 -77 18 -26 22 -28 28 -22
        74 4 28 20 75 34 104 32 64 36 65 215 76 158 9 137 26 -27 22 -79 -2 -126 1
        -126 7 0 16 97 140 135 174 19 17 41 29 47 26 7 -2 60 -6 117 -10 82 -5 102
        -3 99 7 -5 15 -60 26 -143 29 -33 0 -67 7 -75 14 -12 11 -18 11 -32 1z"/>
        <path d="M2455 1920 c151 -9 208 -21 287 -62 96 -51 98 -118 5 -172 -35 -21
        -201 -76 -228 -76 -4 0 15 37 43 82 50 81 75 135 66 144 -11 10 -38 -9 -38
        -27 0 -23 -29 -82 -76 -156 -22 -35 -41 -53 -54 -53 -22 0 -27 -16 -8 -22 7
        -3 -5 -32 -34 -79 -26 -41 -51 -87 -57 -104 -12 -34 -17 -41 68 91 29 46 59
        84 65 84 27 0 115 -31 137 -48 17 -15 21 -25 15 -46 -8 -34 -57 -56 -141 -66
        -45 -5 -55 -9 -41 -15 31 -14 126 11 166 44 67 54 34 115 -79 143 l-45 11 87
        23 c257 69 323 179 157 264 -67 34 -163 50 -300 48 l-125 -1 130 -7z"/>
        <path d="M2243 1901 c-76 -35 -77 -83 -2 -125 l34 -19 -32 31 c-53 50 -38 88
        44 118 22 7 29 13 18 13 -11 0 -39 -8 -62 -18z"/>
        <path d="M4451 1817 c-151 -108 -461 -432 -461 -481 0 -6 10 5 21 24 12 19 48
        64 79 100 80 90 317 304 341 308 11 2 41 -9 67 -24 63 -37 197 -130 211 -148
        14 -17 11 -19 -192 -111 -70 -32 -126 -60 -124 -62 4 -4 327 113 380 138 28
        12 37 39 14 39 -7 0 -58 28 -112 61 -55 34 -128 78 -162 99 l-62 37 27 20 c45
        34 20 34 -27 0z"/>
        <path d="M404 1711 c-100 -37 -186 -71 -193 -75 -19 -12 -12 -33 11 -40 13 -3
        88 -46 167 -96 107 -66 154 -90 178 -90 18 0 33 5 33 10 0 6 -11 10 -24 10
        -12 0 -45 12 -72 26 -68 36 -224 147 -224 159 0 6 69 41 153 79 144 66 183 86
        162 86 -6 -1 -91 -31 -191 -69z"/>
        <path d="M1847 1732 c-20 -22 -22 -42 -4 -42 19 0 50 37 42 49 -9 16 -20 14
        -38 -7z"/>
        <path d="M2857 1732 c-33 -36 -12 -57 28 -28 11 8 16 19 12 30 -8 21 -20 20
        -40 -2z"/>
        <path d="M3463 1671 c-97 -70 -166 -207 -129 -256 15 -19 15 -18 10 12 -5 24
        1 47 20 87 l27 55 114 3 c112 3 114 3 101 -17 -34 -52 -76 -123 -76 -129 0
        -22 40 3 93 57 114 115 179 150 129 69 -48 -78 -95 -184 -100 -227 -6 -54 17
        -95 52 -95 59 0 154 55 196 113 23 32 22 32 -16 -5 -91 -85 -153 -108 -189
        -68 -34 37 3 160 89 293 20 32 36 62 36 67 0 23 -85 -30 -168 -105 -28 -26
        -52 -41 -52 -33 0 16 56 114 70 123 5 3 10 11 10 17 0 7 -14 -1 -30 -17 -27
        -26 -39 -30 -103 -32 -70 -3 -71 -3 -40 11 44 20 68 58 53 85 -15 29 -50 26
        -97 -8z m87 -6 c0 -24 -44 -60 -91 -74 -22 -7 -43 -10 -45 -8 -3 2 18 25 47
        51 51 46 89 59 89 31z"/>
        <path d="M1780 1577 c-22 -47 -40 -89 -40 -95 0 -10 -110 -55 -117 -48 -3 2
        18 46 46 97 28 50 49 94 46 97 -9 10 -70 -25 -135 -77 -67 -54 -83 -54 -56 -2
        9 16 16 37 16 46 0 19 -30 19 -56 0 -16 -13 -16 -14 -1 -9 26 9 22 -19 -13
        -88 -16 -32 -30 -61 -30 -64 0 -16 43 13 96 65 66 64 111 97 121 88 8 -9 -15
        -61 -57 -127 -21 -31 -41 -68 -45 -80 l-7 -23 28 20 c35 24 130 73 143 73 5 0
        11 -9 14 -19 7 -30 39 -42 68 -27 14 7 37 16 51 19 15 4 41 25 58 47 18 22 40
        40 51 40 11 0 17 4 14 10 -3 5 9 24 27 41 28 27 27 26 -13 -5 -41 -32 -79 -47
        -79 -30 0 4 16 29 35 55 19 27 35 52 35 56 0 13 -41 -32 -70 -77 -26 -41 -37
        -49 -85 -62 -30 -8 -55 -13 -55 -9 0 3 16 35 35 71 37 68 41 85 25 95 -6 4
        -28 -30 -50 -78z m150 -71 c0 -2 -7 -9 -15 -16 -12 -10 -15 -10 -15 4 0 9 7
        16 15 16 8 0 15 -2 15 -4z m-81 -40 c-17 -30 -60 -56 -91 -56 -5 0 -8 12 -6
        28 3 23 11 30 53 44 68 22 67 23 44 -16z"/>
        <path d="M2085 1624 c-36 -18 -59 -38 -32 -29 25 10 22 -17 -6 -52 -36 -44
        -90 -172 -95 -225 -5 -55 15 -88 53 -88 57 0 144 51 195 114 18 22 10 18 -27
        -15 -84 -75 -145 -96 -178 -62 -24 24 -14 98 25 181 29 63 31 64 53 49 17 -11
        22 -24 21 -53 -1 -33 0 -36 11 -21 17 23 8 53 -21 76 -13 10 -24 22 -24 26 0
        3 14 26 31 51 37 54 35 69 -6 48z"/>
        <path d="M2216 1432 c6 -4 14 -14 17 -22 4 -10 6 -8 6 8 1 15 -5 22 -16 22
        -11 0 -14 -3 -7 -8z"/>
        <path d="M3926 1425 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0
        -7 -7 -4 -15z"/>
        </g>
        </svg>
      </div>
    </div>
  )
}