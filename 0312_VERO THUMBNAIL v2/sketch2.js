const categories = document.querySelectorAll('.category');
const shape1Container = document.getElementById('shape1Container');
const shape2Container = document.getElementById('shape2Container');
const thumbnail = document.getElementById('thumbnail');
const ratioSelector = document.getElementById('ratio-selector');
const ratioOptions = document.querySelectorAll('.ratio');
const ratioFrames = document.querySelectorAll('.frame');

const layoutSelector = document.getElementById('layout-selector');
const removePhotoButton = document.getElementById('removePhoto');

const renderButton = document.getElementById('render');
const downloadButton = document.getElementById('download');

const randomizeButton = document.getElementById('randomize');
const shapeContainer = document.getElementById('shapeContainer');

const colorChips = document.querySelectorAll('.color-chip');


let imagePresent = false;




// const PrSvgCode = `<svg width="960" height="1080" viewBox="0 0 960 1080" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_i_942_461)">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M233.279 0H960V88.8355H878.156H400V138H878.156V476.915H203.232V592.871H370.076V531.5H951.084V864.249H816.552V981.468H177.413V1080H0V807.338H639.139V690.119H773.671V667.184H547.488V767.001H25.8192V302.785H700.743V262.894H233.279V0Z" fill="url(#paint0_linear_942_461)"/>
// </g>
// <defs>
// <filter id="filter0_i_942_461" x="0" y="0" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset/>
// <feGaussianBlur stdDeviation="53.05"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0897932 0 0 0 0 0.12791 0 0 0 0 0.92836 0 0 0 1 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_942_461"/>
// </filter>
// <linearGradient id="paint0_linear_942_461" x1="102.456" y1="140.132" x2="996.046" y2="1149.71" gradientUnits="userSpaceOnUse">
// <stop stop-color="#CACCF3"/>
// <stop offset="0.248724" stop-color="#2A22BB"/>
// <stop offset="0.614583" stop-color="white"/>
// <stop offset="1" stop-color="#282561"/>
// </linearGradient>
// </defs>
// </svg>


// `
// ;

// const DiSvgCode = `<svg width="960" height="1081" viewBox="0 0 960 1081" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_i_2137_1128)">
// <path d="M125 125.581L224.051 125.581L736.027 955.581H125L125 125.581Z" stroke="url(#paint0_linear_2137_1128)" stroke-width="250" vector-effect="non-scaling-stroke" />
// </g>
// <defs>
// <filter id="filter0_i_2137_1128" x="0" y="0.581299" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset/>
// <feGaussianBlur stdDeviation="50"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.187376 0 0 0 0 0.1506 0 0 0 0 0.886114 0 0 0 1 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2137_1128"/>
// </filter>
// <linearGradient id="paint0_linear_2137_1128" x1="12.8572" y1="0.581286" x2="12.8572" y2="1080.58" gradientUnits="userSpaceOnUse">
// <stop offset="0.276042" stop-color="#5B61DF"/>
// <stop offset="1" stop-color="#F44333"/>
// </linearGradient>
// </defs>
// </svg>
// `
// ;

// const BeSvgCode = `
// <svg width="960" height="1080" viewBox="0 0 960 1080" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_i_942_455)">
// <path d="M478.181 892.965L166.9 544.861L478.185 189.271L792.406 544.857L478.181 892.965Z" stroke="url(#paint0_linear_942_455)" stroke-width="250" vector-effect="non-scaling-stroke"/>
// </g>
// <defs>
// <filter id="filter0_i_942_455" x="0" y="0" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset/>
// <feGaussianBlur stdDeviation="125"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0856772 0 0 0 0 0.116766 0 0 0 0 0.769623 0 0 0 1 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_942_455"/>
// </filter>
// <linearGradient id="paint0_linear_942_455" x1="772" y1="726.5" x2="407.444" y2="363.051" gradientUnits="userSpaceOnUse">
// <stop offset="0.174842" stop-color="#0D04B9"/>
// <stop offset="0.998166" stop-color="#FAD409"/>
// </linearGradient>
// </defs>
// </svg>
// `;

// const GovSvgCode = `<svg width="960" height="1080" viewBox="0 0 960 1080" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_i_942_448)">
// <rect x="125" y="125" width="710" height="830" stroke="url(#paint0_linear_942_448)" stroke-width="250" vector-effect="non-scaling-stroke" />
// </g>
// <defs>
// <filter id="filter0_i_942_448" x="0" y="0" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_innerShadow_942_448"/>
// <feOffset/>
// <feGaussianBlur stdDeviation="50"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.443137 0 0 0 0 1 0 0 0 0 0.678431 0 0 0 1 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_942_448"/>
// </filter>
// <linearGradient id="paint0_linear_942_448" x1="12.8572" y1="-1.28857e-05" x2="12.8572" y2="1080" gradientUnits="userSpaceOnUse">
// <stop stop-color="#5157D9"/>
// <stop offset="1" stop-color="#1434DD"/>
// </linearGradient>
// </defs>
// </svg>
// `;

const PrSvgCode = `<svg width="1080" height="1083" viewBox="0 0 1080 1083" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2149_465)">
<path d="M779.072 49.9907L1024.12 541.013L779.072 1032.04L300.928 1032.04L55.8803 541.013L300.928 49.9907L779.072 49.9907Z" stroke="url(#paint0_linear_2149_465)" stroke-width="100" vector-effect="non-scaling-stroke"/>
</g>
<defs>
<filter id="filter0_i_2149_465" x="0" y="-0.00927734" width="1080" height="1082.04" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="12.0594"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.187376 0 0 0 0 0.1506 0 0 0 0 0.886114 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2149_465"/>
</filter>
<linearGradient id="paint0_linear_2149_465" x1="1080" y1="-66.9719" x2="-0.000231986" y2="-66.972" gradientUnits="userSpaceOnUse">
<stop offset="0.0707769" stop-color="#5B61DF"/>
<stop offset="1" stop-color="#71FFAD"/>
</linearGradient>
</defs>
</svg>
`
;

const DiSvgCode = `
<svg width="960" height="1081" viewBox="0 0 960 1081" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2148_471)">
<path d="M50 50.0132L265.909 50.0132L870.411 1030.01H50L50 50.0132Z" stroke="url(#paint0_linear_2148_471)" stroke-width="100" vector-effect="non-scaling-stroke"/>
</g>
<defs>
<filter id="filter0_i_2148_471" x="0" y="0.0131836" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="50"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.187376 0 0 0 0 0.1506 0 0 0 0 0.886114 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2148_471"/>
</filter>
<linearGradient id="paint0_linear_2148_471" x1="12.8572" y1="0.0131707" x2="12.8572" y2="1080.01" gradientUnits="userSpaceOnUse">
<stop offset="0.276042" stop-color="#5B61DF"/>
<stop offset="1" stop-color="#F44333"/>
</linearGradient>
</defs>
</svg>
`
;

const BeSvgCode = `
<svg width="960" height="1081" viewBox="0 0 960 1081" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2148_3708)">
<path d="M477.919 1005.86L66.7601 546.061L477.921 76.3797L892.962 546.059L477.919 1005.86Z" stroke="url(#paint0_linear_2148_3708)" stroke-width="100" vector-effect="non-scaling-stroke"/>
</g>
<defs>
<filter id="filter0_i_2148_3708" x="0" y="0.671387" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="17.4957"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.187376 0 0 0 0 0.1506 0 0 0 0 0.886114 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2148_3708"/>
</filter>
<linearGradient id="paint0_linear_2148_3708" x1="12.8572" y1="0.671374" x2="12.8572" y2="1080.67" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B61DF"/>
<stop offset="0.935" stop-color="#FFF000"/>
</linearGradient>
</defs>
</svg>
`;

const GovSvgCode = `<svg width="960" height="1081" viewBox="0 0 960 1081" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2148_4325)">
<rect x="50" y="50.6714" width="860" height="980" stroke="url(#paint0_linear_2148_4325)" stroke-width="100" vector-effect="non-scaling-stroke"/>
</g>
<defs>
<filter id="filter0_i_2148_4325" x="0" y="0.671387" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="17.4957"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.187376 0 0 0 0 0.1506 0 0 0 0 0.886114 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2148_4325"/>
</filter>
<linearGradient id="paint0_linear_2148_4325" x1="12.8572" y1="0.671374" x2="12.8572" y2="1080.67" gradientUnits="userSpaceOnUse">
<stop offset="0.53552" stop-color="#5B61DF"/>
<stop offset="0.857094" stop-color="#423D98"/>
</linearGradient>
</defs>
</svg>
`;


const overPrSvgCode = `<svg width="1080" height="1084" viewBox="0 0 1080 1084" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2149_466)">
<path d="M779.072 50.969L1024.12 541.992L779.072 1033.01L300.928 1033.01L55.8803 541.991L300.928 50.969L779.072 50.969Z" stroke="url(#paint0_linear_2149_466)" stroke-opacity="0.01" stroke-width="100" vector-effect="non-scaling-stroke"/>
</g>
<defs>
<filter id="filter0_i_2149_466" x="0" y="0.968994" width="1080" height="1082.04" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="20"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.187376 0 0 0 0 0.1506 0 0 0 0 0.886114 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2149_466"/>
</filter>
<linearGradient id="paint0_linear_2149_466" x1="1080" y1="-65.9937" x2="-0.000231986" y2="-65.9937" gradientUnits="userSpaceOnUse">
<stop offset="0.0707769" stop-color="#5B61DF"/>
<stop offset="1" stop-color="#71FFAD"/>
</linearGradient>
</defs>
</svg>

`
;

const overDiSvgCode = `
<svg width="960" height="1081" viewBox="0 0 960 1081" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2149_467)">
<path d="M50 50.969L265.909 50.969L870.411 1030.97H50L50 50.969Z" stroke="url(#paint0_linear_2149_467)" stroke-opacity="0.01" stroke-width="100" vector-effect="non-scaling-stroke"/>
</g>
<defs>
<filter id="filter0_i_2149_467" x="0" y="0.968994" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="20"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.933333 0 0 0 0 0.25098 0 0 0 0 0.207843 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2149_467"/>
</filter>
<linearGradient id="paint0_linear_2149_467" x1="12.8572" y1="0.968981" x2="12.8572" y2="1080.97" gradientUnits="userSpaceOnUse">
<stop offset="0.276042" stop-color="#5B61DF"/>
<stop offset="1" stop-color="#F44333"/>
</linearGradient>
</defs>
</svg>

`
;

const overBeSvgCode = `
<svg width="960" height="1081" viewBox="0 0 960 1081" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2149_468)">
<path d="M477.919 1006.15L66.7601 546.359L477.921 76.6773L892.962 546.357L477.919 1006.15Z" stroke="url(#paint0_linear_2149_468)" stroke-opacity="0.01" stroke-width="100" vector-effect="non-scaling-stroke"/>
</g>
<defs>
<filter id="filter0_i_2149_468" x="0" y="0.968994" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="17.4957"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.941176 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2149_468"/>
</filter>
<linearGradient id="paint0_linear_2149_468" x1="12.8572" y1="0.968981" x2="12.8572" y2="1080.97" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B61DF"/>
<stop offset="0.935" stop-color="#FFF000"/>
</linearGradient>
</defs>
</svg>


`;

const overGovSvgCode = `<svg width="960" height="1081" viewBox="0 0 960 1081" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2149_469)">
<rect x="50" y="50.969" width="860" height="980" stroke="url(#paint0_linear_2149_469)" stroke-opacity="0.01" stroke-width="100" vector-effect="non-scaling-stroke"/>
</g>
<defs>
<filter id="filter0_i_2149_469" x="0" y="0.968994" width="960" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="17.4957"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.443137 0 0 0 0 1 0 0 0 0 0.678431 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2149_469"/>
</filter>
<linearGradient id="paint0_linear_2149_469" x1="12.8572" y1="0.968981" x2="12.8572" y2="1080.97" gradientUnits="userSpaceOnUse">
<stop offset="0.53552" stop-color="#5B61DF"/>
<stop offset="0.857094" stop-color="#423D98"/>
</linearGradient>
</defs>
</svg>


`;





var chosenCat = [];
let selectedTextColor = 'white'; // Default text color
let selectedRatio = '960x540'; // Default ratio
// let selectedLayout = 'left-right'; // Default layout



categories.forEach(cat => {
  cat.addEventListener('click', function() {
    cat.classList.toggle('active-category');
    var clickedButtonID = this.id;
    const valueToAdd = clickedButtonID;
    if (chosenCat.includes(valueToAdd)) {
      chosenCat = chosenCat.filter(cat => cat !== valueToAdd);
    } else if (chosenCat.length < 4) {
      chosenCat.push(valueToAdd);
    }
    console.log(chosenCat);
  });
});

colorChips.forEach(chip => {
  chip.addEventListener('click', function() {
    colorChips.forEach(c => c.classList.remove('selected'));
    this.classList.add('selected');
    selectedTextColor = this.getAttribute('data-color');
    renderThumbnail();
  });
});

ratioOptions.forEach(option => {
  option.addEventListener('click', function() {
    ratioOptions.forEach(o => {
      o.classList.remove('selected');
      o.querySelector('.frame').classList.remove('active-frame');
    });

    this.classList.add('selected');
    this.querySelector('.frame').classList.add('active-frame');

    selectedRatio = this.getAttribute('value');
    renderThumbnail();
  });
});

removePhotoButton.addEventListener('click', removePhoto);
renderButton.addEventListener('click', renderThumbnail);
randomizeButton.addEventListener('click', randomizeShapes);
downloadButton.addEventListener('click', downloadThumbnail);

function renderThumbnail() {
  shapeContainer.innerHTML = '';

  const [width, height] = selectedRatio.split('x').map(Number);
  thumbnail.style.width = `${width}px`;
  thumbnail.style.height = `${height}px`;

  const title = document.getElementById('title');
  const titleInput = document.getElementById('title-input');
  title.innerHTML = titleInput.value;
  title.style.color = selectedTextColor;


  const total = chosenCat.length;
  const layout = layoutSelector.value;

  if (total === 1) {
    createShapeSVG(chosenCat[0], 'grid-area-span-all');
  } else if (total === 2) {
    if (layout === 'left-right') {
      createShapeSVG(chosenCat[0], 'grid-area-span-left');
      createShapeSVG(chosenCat[1], 'grid-area-span-right');
    } else if (layout === 'top-bottom') {
      createShapeSVG(chosenCat[0], 'grid-area-span-top');
      createShapeSVG(chosenCat[1], 'grid-area-span-bottom');
    }
  } else if (total === 3) {
    if (layout === '2-top-1-bottom') {
      createShapeSVG(chosenCat[0], 'grid-area-1');
      createShapeSVG(chosenCat[1], 'grid-area-2');
      createShapeSVG(chosenCat[2], 'grid-area-span-bottom');
    } else if (layout === '2-bottom-1-top') {
      createShapeSVG(chosenCat[0], 'grid-area-span-top');
      createShapeSVG(chosenCat[1], 'grid-area-3');
      createShapeSVG(chosenCat[2], 'grid-area-4');
    } else if (layout === '2-left-1-right') {
      createShapeSVG(chosenCat[0], 'grid-area-1');
      createShapeSVG(chosenCat[1], 'grid-area-3');
      createShapeSVG(chosenCat[2], 'grid-area-span-right');
    } else if (layout === '2-right-1-left') {
      createShapeSVG(chosenCat[0], 'grid-area-2');
      createShapeSVG(chosenCat[1], 'grid-area-4');
      createShapeSVG(chosenCat[2], 'grid-area-span-left');
    }
  } else if (total === 4) {
    createShapeSVG(chosenCat[0], 'grid-area-1');
    createShapeSVG(chosenCat[1], 'grid-area-2');
    createShapeSVG(chosenCat[2], 'grid-area-3');
    createShapeSVG(chosenCat[3], 'grid-area-4');
  }
}

 
function createShapeSVG(category, gridAreaClass) {
  let svgCode = '';
  if (imagePresent) {
    switch (category) {
      case 'pr':
        svgCode = overPrSvgCode;
        break;
      case 'di':
        svgCode = overDiSvgCode;
        break;
      case 'be':
        svgCode = overBeSvgCode;
        break;
      case 'gov':
        svgCode = overGovSvgCode;
        break;
      default:
        console.log(`No corresponding SVG code found for category: ${category}`);
    }
  } else {
    switch (category) {
      case 'pr':
        svgCode = PrSvgCode;
        break;
      case 'di':
        svgCode = DiSvgCode;
        break;
      case 'be':
        svgCode = BeSvgCode;
        break;
      case 'gov':
        svgCode = GovSvgCode;
        break;
      default:
        console.log(`No corresponding SVG code found for category: ${category}`);
    }
  }

  const shape = document.createElement('div');
  shape.className = `shape ${gridAreaClass}`;
  shape.innerHTML = svgCode;
  shapeContainer.appendChild(shape);
}

  

// IMG Input
window.addEventListener('load', function () {
  document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files) {
      thumbnail.style.backgroundImage = "url(" + URL.createObjectURL(this.files[0]) + ")";
      this.value = '';
      imagePresent = true; // Set the flag to true when an image is uploaded
      renderThumbnail();
    }
  });
});

function removePhoto() {
  thumbnail.style.backgroundImage = '';
  imagePresent = false;
  renderThumbnail();
}

// Function to randomize the shapes
function randomizeShapes() {
    chosenCat = chosenCat.sort(() => Math.random() - 0.5);
    renderThumbnail();
  }

  
function downloadThumbnail() {
    html2canvas(thumbnail, { scale: 2 }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'thumbnail.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }