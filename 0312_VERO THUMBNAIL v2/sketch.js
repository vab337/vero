const categories = document.querySelectorAll('.category');
const shape1Container = document.getElementById('shape1Container');
const shape2Container = document.getElementById('shape2Container');
const thumbnail = document.getElementById('thumbnail');

const PrSvgCode = `<svg width="100%" height="100%" viewBox="0 0 960 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_942_447)">
<path d="M125 125L224.051 125L736.027 955H125L125 125Z" stroke="url(#paint0_linear_942_447)" stroke-width="250"/>
</g>
<defs>
<filter id="filter0_i_942_447" x="0" y="0" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="50"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.187376 0 0 0 0 0.1506 0 0 0 0 0.886114 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_942_447"/>
</filter>
<linearGradient id="paint0_linear_942_447" x1="12.8572" y1="-1.28857e-05" x2="12.8572" y2="1080" gradientUnits="userSpaceOnUse">
<stop offset="0.276042" stop-color="#5B61DF"/>
<stop offset="1" stop-color="#F44333"/>
</linearGradient>
</defs>
</svg>`
;

const PaSvgCode = `<svg width="100%" height="100%" viewBox="0 0 960 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_942_448)">
<rect x="125" y="125" width="710" height="830" stroke="url(#paint0_linear_942_448)" stroke-width="250"/>
</g>
<defs>
<filter id="filter0_i_942_448" x="0" y="0" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_innerShadow_942_448"/>
<feOffset/>
<feGaussianBlur stdDeviation="50"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.443137 0 0 0 0 1 0 0 0 0 0.678431 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_942_448"/>
</filter>
<linearGradient id="paint0_linear_942_448" x1="12.8572" y1="-1.28857e-05" x2="12.8572" y2="1080" gradientUnits="userSpaceOnUse">
<stop stop-color="#5157D9"/>
<stop offset="1" stop-color="#1434DD"/>
</linearGradient>
</defs>
</svg>
`
;

const EvSvgCode = `<svg width="100%" height="100%" viewBox="0 0 960 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_942_455)">
<path d="M478.181 892.965L166.9 544.861L478.185 189.271L792.406 544.857L478.181 892.965Z" stroke="url(#paint0_linear_942_455)" stroke-width="250"/>
</g>
<defs>
<filter id="filter0_i_942_455" x="0" y="0" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="125"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0856772 0 0 0 0 0.116766 0 0 0 0 0.769623 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_942_455"/>
</filter>
<linearGradient id="paint0_linear_942_455" x1="772" y1="726.5" x2="407.444" y2="363.051" gradientUnits="userSpaceOnUse">
<stop offset="0.174842" stop-color="#0D04B9"/>
<stop offset="0.998166" stop-color="#FAD409"/>
</linearGradient>
</defs>
</svg>

`;

const AiSvgCode = `<svg width="100%" height="100%" viewBox="0 0 960 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_942_461)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M233.279 0H960V88.8355H878.156H400V138H878.156V476.915H203.232V592.871H370.076V531.5H951.084V864.249H816.552V981.468H177.413V1080H0V807.338H639.139V690.119H773.671V667.184H547.488V767.001H25.8192V302.785H700.743V262.894H233.279V0Z" fill="url(#paint0_linear_942_461)"/>
</g>
<defs>
<filter id="filter0_i_942_461" x="0" y="0" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="53.05"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0897932 0 0 0 0 0.12791 0 0 0 0 0.92836 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_942_461"/>
</filter>
<linearGradient id="paint0_linear_942_461" x1="102.456" y1="140.132" x2="996.046" y2="1149.71" gradientUnits="userSpaceOnUse">
<stop stop-color="#CACCF3"/>
<stop offset="0.248724" stop-color="#2A22BB"/>
<stop offset="0.614583" stop-color="white"/>
<stop offset="1" stop-color="#282561"/>
</linearGradient>
</defs>
</svg>`;

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

function createShape1SVG(svg) {
  var shape1 = document.createElement('div');
  shape1.id = "shape1";
  shape1Container.appendChild(shape1);
  shape1.innerHTML = svg;
}

function createShape2SVG(svg) {
  var shape2 = document.createElement('div');
  shape2.id = "shape2";
  shape2Container.appendChild(shape2);
  shape2.innerHTML = svg;
}

// Objects with values
const pr = {
  // background: "linear-gradient(black, black) padding-box, linear-gradient(#FFFE00, #81FF00) border-box",
  // border: "100px solid transparent",
  // borderRadius: "50%",
  // overlayShadow: "0px 0px 30px 3px #1000FF inset, 0px 0px 30px 0px #FF1000 inset",
  // overlayRadius: "50%",
  svg: PrSvgCode
};


const pa = {
  svg: PaSvgCode
};


const ev = {
  svg: EvSvgCode
};

const ai = {
  svg: AiSvgCode
};

// Your array of values


const title = document.getElementById('title');
const titleInput = document.getElementById('title-input');

// Execute functions based on the values in the array
function renderThumbnail()  {
  title.innerHTML = titleInput.value
if (chosenCat.length > 0) {
    const firstValue = chosenCat[0];
    switch (firstValue) {
        case 'pa':
          createShape1SVG(pa.svg);
            break;
        case 'pr':
          createShape1SVG(pr.svg);
            break;
        case 'ev':
          createShape1SVG(ev.svg);
          break;
        case 'ai':
          createShape1SVG(ai.svg);
            break;
        default:
            console.log(`No corresponding function found for the first value: ${firstValue}`);
    }
}

if (chosenCat.length > 1) {
    const secondValue = chosenCat[1];
    switch (secondValue) {
        case 'pa':
          createShape2SVG(pa.svg);
          break;
        case 'pr':
          createShape2SVG(pr.svg);
            break;
        case 'ev':
          createShape2SVG(ev.svg);
            break;
        case 'ai':
          createShape2SVG(ai.svg);
            break;
        default:
            console.log(`No corresponding function found for the second value: ${secondValue}`);
    }
}
}

//IMG Input
window.addEventListener('load', function () {
  document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files) {
 {
      thumbnail.style.backgroundImage="url("+ URL.createObjectURL(this.files[0]); + ")";
      this.value = '';
      shape1.style.opacity = '0.5'; 
      shape2.style.opacity = '0.5'; 
    }
  }
  });
});

