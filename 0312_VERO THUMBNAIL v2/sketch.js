const categories = document.querySelectorAll('.category');
const shape1Container = document.getElementById('shape1Container');
const shape2Container = document.getElementById('shape2Container');

var chosenCat = [];

categories.forEach(cat => {
    cat.addEventListener('click', function() {
        cat.classList.add('active-category');
        var clickedButtonID = this.id;
        // Store the ID in the array
        // chosenCat.push(clickedButtonID);

        const valueToAdd = clickedButtonID;
      
        if (valueToAdd !== null && valueToAdd.trim() !== '') {
          addValueToArray(valueToAdd, chosenCat);
        } else {
          console.log('Invalid value. Please enter a valid value to add.');
        };
        console.log(chosenCat);
    });
  });

  function addValueToArray(value, array) {
    if (array.length < 2) {
      array.push(value);
      console.log(`Value '${value}' added to the array. Current array:`, array);
    } else {
      console.log('Array already contains two values. Cannot add more.');
    }
  }
  


const render = document.getElementById("render");
render.addEventListener('click', renderThumbnail);


function createShape1() {
    var shape1 = document.createElement('div');
    shape1.id = "shape1";
    shape1Container.appendChild(shape1);
    shape1.style.background ="linear-gradient(black, black) padding-box, linear-gradient(#5157D9, #71FFAD) border-box";
    shape1.style.border = "50px solid transparent";
    shape1.style.borderRadius = "30px";

    var shape1overlay = document.createElement('div');
    shape1overlay.id = "shape1overlay";
    shape1Container.appendChild(shape1overlay);
    shape1overlay.style.boxShadow = "0px 0px 30px 3px #F589FF inset, 0px 0px 30px 0px #F589FF inset"; 
}


function createShape1(background,border,borderRadius,overlayShadow) {
    var shape1 = document.createElement('div');
    shape1.id = "shape1";
    shape1Container.appendChild(shape1);
    shape1.style.background = background;
    shape1.style.border = border;
    shape1.style.borderRadius = borderRadius;

    var shape1overlay = document.createElement('div');
    shape1overlay.id = "shape1overlay";
    shape1Container.appendChild(shape1overlay);
    shape1overlay.style.boxShadow = overlayShadow; 
}


function createShape2(background,border,borderRadius,overlayShadow,overlayRadius) {
  var shape2 = document.createElement('div');
  shape2.id = "shape2";
  shape2Container.appendChild(shape2);
  shape2.style.background = background;
  shape2.style.border = border;
  shape2.style.borderRadius = borderRadius;

  var shape2overlay = document.createElement('div');
  shape2overlay.id = "shape2overlay";
  shape2Container.appendChild(shape2overlay);
  shape2overlay.style.boxShadow = overlayShadow; 
  shape2overlay.style.borderRadius = overlayRadius; 

}

// Objects with values
const pa = {
  background: "linear-gradient(black, black) padding-box, linear-gradient(#0D00FF, #2D72F6) border-box",
  border: "100px solid transparent",
  borderRadius: "0px",
  overlayShadow: "0px 0px 30px 10px #71FFAD inset"
};

const pr = {
  background: "linear-gradient(black, black) padding-box, linear-gradient(#FFFE00, #81FF00) border-box",
  border: "100px solid transparent",
  borderRadius: "50%",
  overlayShadow: "0px 0px 30px 3px #1000FF inset, 0px 0px 30px 0px #FF1000 inset",
  overlayRadius: "50%"
};

const ev = {
  background: "linear-gradient(black, black) padding-box, linear-gradient(#FFFE00, #81FF00) border-box",
  border: "100px solid transparent",
  borderRadius: "50%",
  overlayShadow: "0px 0px 30px 3px #1000FF inset, 0px 0px 30px 0px #FF1000 inset",
  overlayRadius: "50%"
};

const ai = {
  background: "linear-gradient(black, black) padding-box, linear-gradient(#FF0000, #81FF00) border-box",
  border: "100px solid transparent",
  borderRadius: "50%",
  overlayShadow: "0px 0px 30px 3px #1000FF inset, 0px 0px 30px 0px #FF1000 inset",
  overlayRadius: "50%"
};

// Your array of values

// Execute functions based on the values in the array
function renderThumbnail()  {
if (chosenCat.length > 0) {
    const firstValue = chosenCat[0];
    switch (firstValue) {
        case 'pa':
            createShape1(pa.background, pa.border, pa.borderRadius, pa.overlayShadow);
            break;
        case 'pr':
            createShape1(pr.background, pr.border, pr.borderRadius, pr.overlayShadow);
            break;
        case 'ev':
          console.log('first value is Event')
          break;
        case 'ai':
          console.log('first value is AI')
            break;
        default:
            console.log(`No corresponding function found for the first value: ${firstValue}`);
    }
}

if (chosenCat.length > 1) {
    const secondValue = chosenCat[1];
    switch (secondValue) {
        case 'pa':
          console.log('second value is PA')
            break;
        case 'pr':
            createShape2(pr.background, pr.border, pr.borderRadius, pr.overlayShadow, pr.overlayRadius);
            break;
        case 'ev':
          var shape2 = document.createElement('div');
          shape2.id = "shape2";
          shape2Container.appendChild(shape2);
          shape2.innerHTML = svgCode;
            break;
        case 'ai':
          console.log('second value is AI');
            break;
        default:
            console.log(`No corresponding function found for the second value: ${secondValue}`);
    }
}
}

function checkPr() {
const wordToCheck = 'pr';
if (chosenCat.includes(wordToCheck)) {
  createShape2(pr.background,pr.border,pr.borderRadius,pr.overlayShadow,pr.overlayRadius);
  } else {
    console.log('pr is not included');
  }
}

const svgCode = `<svg width="768" height="864" viewBox="0 0 768 864" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_852_433)">
<path d="M154.2 763.949L385.199 246.878L613.819 763.949H154.2Z" stroke="url(#paint0_linear_852_433)" stroke-width="200"/>
</g>
<defs>
<filter id="filter0_i_852_433" x="0" y="0.65625" width="767.371" height="863.293" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="50"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.592157 0 0 0 0 0.278431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_852_433"/>
</filter>
<linearGradient id="paint0_linear_852_433" x1="10.2773" y1="0.656241" x2="10.2773" y2="863.949" gradientUnits="userSpaceOnUse">
<stop offset="0.427083" stop-color="#5157D9"/>
<stop offset="1" stop-color="#71FFAD"/>
</linearGradient>
</defs>
</svg>`;