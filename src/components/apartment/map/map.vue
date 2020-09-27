<template>
  <div class="map-icon">
    <div class="show-map-detail" :class="{ 'show-hide': isShowHied }">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <button v-on:click="showHide">X</button>
          <div
            :class="index === 1 ? 'carousel-item active' : 'carousel-item'"
            v-for="(item, index) in itemApartment"
            :key="index"
          >
            <img class="d-block w-100" :src="item.img" alt="First slide" />
            <label for="">
              <h1 class="title-location">{{ item.name }}</h1>
            </label>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="map-iocn__container">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="888px"
        height="520px"
        viewBox="0 0 888 520"
        enable-background="new 0 0 888 520"
        xml:space="preserve"
      >
        <g>
          <g id="states">
            <a class="style-map" id="s01" title="Alabama">
              <path
                v-on:click="showloaction('binhthanh')"
                id="scale"
                d="M524.541,5.367c8.68,2.662,17.756,3.197,26.613,4.925
	c6.689,1.306,13.449,2.255,20.191,3.286c2.6,0.398,4.344,1.385,5.625,4.006c7.227,14.768,14.648,29.443,22.148,44.076
	c1.17,2.283,1.313,4.146,0.326,6.517c-6.119,14.718-12.184,29.46-18.055,44.278c-1.184,2.986-2.77,3.838-5.885,3.822
	c-8.814-0.045-17.637,0.238-26.447,0.586c-2.258,0.088-3.768-0.82-5.301-2.182c-6.473-5.744-13.029-11.395-19.441-17.205
	c-1.943-1.762-3.982-2.752-6.605-3.002c-9.439-0.9-18.881-1.842-28.289-3.014c-3.107-0.388-4.746,0.506-6.225,3.307
	c-4.037,7.637-8.242,15.203-12.811,22.527c-1.842,2.952-1.352,4.919,0.313,7.541c9.176,14.455,18.148,29.041,27.334,43.488
	c1.68,2.641,1.818,3.588-1.648,4.475c-37.816,9.692-75.595,19.532-113.369,29.393c-4.116,1.074-7.935-0.348-11.79-1.059
	c-20.597-3.803-41.148-7.857-61.743-11.672c-2.408-0.446-3.757-1.488-4.929-3.529c-9.098-15.855-18.225-31.693-27.531-47.424
	c-1.495-2.526-1.327-4.375-0.053-6.82c7.518-14.434,14.93-28.924,22.273-43.447c1.392-2.752,3.384-4.896,5.555-6.957
	c9.536-9.055,19.104-18.076,28.59-27.182c1.404-1.349,2.656-2.182,4.758-1.939c10.083,1.16,20.178,2.205,30.281,3.17
	c1.922,0.184,2.896,1.469,4.087,2.566c12.733,11.725,25.505,23.41,38.125,35.256c2.146,2.016,3.711,2.429,6.45,1.051
	c14.683-7.387,29.479-14.553,44.256-21.755c1.672-0.815,3.172-1.782,4.424-3.161c18.346-20.2,36.699-40.393,55.051-60.586
	c0.873-0.961,2.135-1.715,1.719-3.336C523.207,5.367,523.873,5.367,524.541,5.367z"
              ></path>
              <text x="360" y="140" title="Wyoming" class="hint" style="">
                Bình Thạnh
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M-1.393,150.348c2.888-6.434,2.453-13.502,3.803-20.233
	c1.109-5.535,1.645-11.188,2.379-16.795c0.354-2.699,1.337-4.963,3.15-7.111c16.541-19.598,33.047-39.225,49.36-59.012
	c2.407-2.921,4.955-3.83,8.49-3.883c18.976-0.286,37.947-0.785,56.921-1.094c7.844-0.127,14.84-3.383,22.116-5.602
	c8.577-2.615,17.128-5.322,25.625-8.182c2.855-0.961,5.242-0.863,8.035,0.457c37.385,17.664,74.799,35.266,112.3,52.68
	c4.117,1.911,4.304,3.41,2.106,7.147c-7.667,13.038-14.84,26.364-22.386,39.476c-3.196,5.553-8.032,8.554-14.747,8.015
	c-20.237-1.625-40.583-2.382-60.692-4.989c-18.76-2.433-37.271-6.791-55.889-10.32c-5.717-1.084-11.43-2.19-17.128-3.359
	c-2.73-0.561-5.275,0.225-7.879,0.758c-12.875,2.632-25.733,5.35-38.649,7.762c-2.711,0.507-3.941,1.698-4.875,4.1
	c-3.546,9.127-7.593,18.072-10.78,27.318c-1.554,4.506-3.842,5.082-8.058,4.656c-17.715-1.789-35.466-3.225-53.203-4.789
	C-1.393,155.015-1.393,152.681-1.393,150.348z"
              ></path>
              <text x="120" y="90" title="Wyoming" class="hint" style=""></text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                v-on:click="showloaction('district2')"
                d="M889.393,186.912c-5.121,16.615-10.504,33.184-15.258,49.931
	c-1.863,6.564-5.197,11.226-10.6,15.417c-33.545,26.025-66.865,52.338-100.143,78.707c-3.275,2.598-6.352,3.303-10.42,2.914
	c-20.543-1.967-41.117-3.596-61.67-5.438c-2.168-0.195-3.795,0.449-5.529,1.596c-9.574,6.328-19.289,12.445-28.779,18.898
	c-3.09,2.102-3.936,1.398-5.617-1.717c-3.318-6.143-3.348-11.914-1.379-18.512c3.277-10.973,5.639-22.219,8.443-33.338
	c1.846-7.309-1.297-14.076-2.291-21.053c-1.195-8.387-3.158-16.662-4.547-25.027c-0.436-2.633-1.484-4.006-4.055-4.838
	c-17.381-5.637-34.738-11.352-52.041-17.229c-2.281-0.773-4.154-0.49-6.209,0.187c-9.932,3.279-19.803,6.767-29.834,9.707
	c-3.566,1.046-4.186,2.619-3.734,5.943c1.432,10.553,2.527,21.148,3.885,31.709c0.322,2.49-0.227,4.445-1.707,6.461
	c-4.525,6.172-9.361,12.191-13.166,18.795c-4.193,7.277-9.998,11.252-18.047,13.238c-9.342,2.303-18.477,5.469-27.639,8.449
	c-2.545,0.828-4.682,0.734-7.172-0.275c-19.234-7.793-38.506-15.496-57.826-23.074c-2.88-1.129-3.595-2.258-2.589-5.355
	c3.229-9.953,6.135-20.014,9.014-30.076c0.683-2.389,1.91-4.063,3.879-5.52c15.793-11.68,31.498-23.475,47.316-35.12
	c2.4-1.767,3.973-3.723,4.709-6.646c3.201-12.73,6.479-25.443,9.908-38.113c0.893-3.295,0.422-5.84-1.459-8.771
	c-9.52-14.829-18.713-29.868-28.168-44.739c-1.533-2.412-1.662-4.223-0.139-6.668c3.691-5.919,7.205-11.955,10.568-18.067
	c1.246-2.265,2.602-2.8,5.139-2.485c8.256,1.025,16.549,1.766,24.84,2.482c1.908,0.165,3.414,0.594,4.85,2.008
	c5.332,5.258,11.063,10.134,16.148,15.611c3.371,3.629,6.955,4.962,11.805,4.673c8.467-0.506,16.967-0.682,25.449-0.646
	c4.6,0.02,7.359-1.245,9.201-5.97c5.248-13.456,11.219-26.631,16.672-40.01c1.232-3.024,2.318-3.919,5.762-2.983
	c16.357,4.436,32.873,8.297,49.209,12.805c5.67,1.564,10.994,1.645,16.645,0.369c12.975-2.93,26.027-5.518,39.018-8.377
	c2.496-0.548,4.281-0.375,6.195,1.631c20.34,21.328,40.771,42.563,61.203,63.8c1.344,1.396,1.873,3.04,2.334,4.849
	c2.215,8.697,4.713,17.326,6.713,26.068c0.695,3.033,1.967,3.989,4.938,4.264c31.652,2.932,63.291,6.003,94.934,9.049
	C888.461,186.455,888.754,186.656,889.393,186.912z"
              ></path>
              <text x="620" y="180" title="Wyoming" class="hint" style="">
                District 2
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                v-on:click="showloaction('district7')"
                d="M651.967,357.371c11.389-7.074,22.604-13.902,33.656-20.982
	c3.244-2.078,6.26-2.816,10.203-2.4c18.695,1.979,37.428,3.611,56.166,5.15c3.242,0.266,3.846,0.826,2.639,4.016
	c-15.865,41.924-31.596,83.898-47.357,125.861c-0.648,1.727-1.539,3.205-3.004,4.451c-15.965,13.607-31.936,27.211-47.758,40.982
	c-2.471,2.15-3.791,2.061-6.023-0.246c-47.467-49.063-95.002-98.059-142.563-147.029c-1.564-1.611-2.682-3.273-3.117-5.492
	c-2.023-10.277-4.043-20.555-6.221-30.799c-0.656-3.09-0.08-4.604,3.283-5.584c12.273-3.582,24.42-7.596,36.654-11.32
	c2.533-0.771,4.311-2.064,5.77-4.295c5.914-9.051,11.898-18.061,18.068-26.939c1.842-2.648,2.465-5.225,2.072-8.355
	c-1.182-9.412-2.068-18.861-3.365-28.254c-0.363-2.639,0.094-3.881,2.709-4.654c8.914-2.637,17.803-5.371,26.635-8.274
	c2.111-0.695,3.891-0.293,5.76,0.344c15.402,5.246,30.777,10.579,46.217,15.719c2.699,0.898,3.875,2.193,4.455,5.074
	c2.26,11.24,4.887,22.408,7.412,33.594c0.561,2.486,0.533,4.885-0.102,7.381c-3.316,13.043-6.391,26.15-9.889,39.143
	c-0.986,3.668-0.791,6.664,1.102,9.928C647.766,348.52,649.723,352.904,651.967,357.371z"
              ></path>
              <text x="600" y="380" title="Wyoming" class="hint" style="">
                District 7
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M255.568,143.198c-13.743,8.955-26.653,17.386-39.581,25.789
	c-49.487,32.167-99.012,64.276-148.408,96.582c-3.891,2.545-6.374,2.818-10.251-0.145c-17.581-13.434-35.438-26.504-53.257-39.622
	c-1.791-1.32-2.526-2.663-2.515-4.906c0.09-17.654,0.145-35.309-0.034-52.962c-0.034-3.353,1.103-3.772,4.016-3.485
	c16.554,1.623,33.144,2.903,49.676,4.722c4.761,0.522,7.036-0.462,8.559-5.296c2.888-9.166,6.708-18.033,9.928-27.102
	c0.953-2.684,2.434-3.887,5.208-4.453c12.042-2.463,24.083-4.967,36.031-7.844c6.871-1.652,13.218,0.539,19.573,1.983
	c39.033,8.868,78.68,13.038,118.491,16.081C253.469,142.576,253.922,142.769,255.568,143.198z"
              ></path>
              <text
                x="120"
                y="180"
                title="Wyoming"
                class="hint"
                style=""
              ></text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                v-on:click="showloaction('district1')"
                d="M502.484,177.628c-3.189,12.412-6.375,24.563-9.391,36.756
	c-0.6,2.422-2.381,3.498-4.078,4.748c-15.811,11.647-31.605,23.313-47.511,34.827c-2.443,1.77-3.952,3.82-4.825,6.629
	c-2.561,8.248-5.652,16.357-7.763,24.715c-1.991,7.883-6.035,13.957-11.863,19.57c-15.596,15.02-30.788,30.461-45.973,45.9
	c-2.382,2.422-4.229,2.76-7.311,1.5c-23.051-9.428-46.155-18.727-69.308-27.9c-3.282-1.301-3.487-2.238-1.305-4.979
	c29.353-36.848,58.613-73.77,87.833-110.723c1.36-1.72,2.985-2.48,4.945-2.96c38.255-9.357,76.509-18.722,114.767-28.069
	C501.141,177.535,501.627,177.628,502.484,177.628z"
              ></path>
              <text x="350" y="280" title="Wyoming" class="hint" style="">
                District 1
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M91.608,256.725c10.222-6.756,19.598-12.979,28.998-19.162
	c48.599-31.968,97.223-63.898,145.763-95.954c2.975-1.965,4.257-2.086,6.246,1.265c8.734,14.713,17.743,29.265,26.813,43.774
	c1.637,2.617,1.397,3.982-0.956,6.053c-35.591,31.313-71.08,62.743-106.588,94.151c-1.865,1.648-3.386,3.131-6.491,2.053
	C154.514,278.182,123.564,267.656,91.608,256.725z"
              ></path>
              <text x="160" y="230" title="Wyoming" class="hint" style="">
                Phú Nhuận
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M281.278,326.098c-11.148,12.223-21.756,23.869-32.383,35.498
	c-5.05,5.527-10.248,10.924-15.144,16.584c-1.698,1.963-2.802,2.041-4.879,0.646c-8.003-5.367-16.174-10.484-24.197-15.824
	c-2.563-1.705-5.149-2.615-8.278-2.85c-18.735-1.395-37.45-3.055-56.182-4.492c-2.382-0.182-3.906-1.076-5.381-2.873
	c-21.438-26.098-42.894-52.182-64.49-78.15c-2.137-2.568-1.324-3.289,0.763-5.262c8.674-8.193,17.451-7.625,28.377-3.852
	c48.931,16.9,98.198,32.826,147.343,49.111C258.007,318.34,269.176,322.07,281.278,326.098z"
              ></path>
              <text
                x="180"
                y="330"
                title="Wyoming"
                class="hint"
                style=""
              ></text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M377.106,207.138c-5.124,6.426-10.035,12.619-14.982,18.783
	c-24.888,31.008-49.818,61.981-74.618,93.059c-2.163,2.711-3.888,3.531-7.393,2.318c-27.279-9.449-54.645-18.646-81.981-27.93
	c-0.931-0.316-1.832-0.721-3.333-1.316c11.344-10.256,22.376-20.229,33.41-30.201c24.305-21.971,48.629-43.92,72.883-65.946
	c2.113-1.92,4.019-2.891,7.038-2.301c22.335,4.359,44.706,8.539,67.063,12.788C375.631,206.477,376.042,206.717,377.106,207.138z"
              ></path>
              <text x="260" y="260" title="Wyoming" class="hint" style="">
                District 3
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M287.608,439.387c-4.482-0.262-9.022-1.1-13.434-0.658
	c-7.423,0.746-12.429-2.799-17.397-7.545c-6.493-6.205-13.367-12.018-20.195-17.861c-1.817-1.555-2.848-3.168-2.52-5.553
	c0.022-0.164,0.001-0.332,0.003-0.5c0.064-7.656-1.786-16.029,0.739-22.764c2.446-6.525,9.34-11.41,14.365-16.939
	c11.752-12.932,23.597-25.779,35.294-38.76c1.95-2.164,3.565-2.635,6.354-1.441c23.509,10.063,47.068,20.008,70.676,29.834
	c2.667,1.109,3.421,2.406,2.966,5.176c-2.13,12.961-4.129,25.945-6.092,38.932c-0.398,2.635-1.623,4.414-3.791,6.012
	c-13.799,10.164-27.521,20.436-41.195,30.77c-2.11,1.594-4.143,2.342-6.835,2.127c-6.295-0.506-12.616-0.693-18.927-1.01
	C287.614,439.266,287.611,439.326,287.608,439.387z"
              ></path>
              <text
                x="280"
                y="390"
                title="Wyoming"
                class="hint"
                style=""
              ></text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M363.754,402.494c2.133-13.838,4.155-26.949,6.178-40.061
	c0.285-1.844,1.009-3.363,2.383-4.771c18.04-18.459,36.03-36.969,53.97-55.525c1.511-1.563,2.702-1.801,4.732-0.93
	c19.531,8.385,39.095,16.697,58.712,24.879c2.342,0.977,3.285,2.367,3.717,4.691c1.732,9.326,3.318,18.693,5.527,27.906
	c0.879,3.662-0.412,4.549-3.373,5.408c-40.203,11.678-80.388,23.428-120.577,35.156C371.528,400.27,368.026,401.266,363.754,402.494
	z"
              ></path>
              <text x="410" y="350" title="Wyoming" class="hint" style="">
                District 4
              </text>
              <title></title>
            </a>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import imgHomeBanner from "../../../assets/images/home-banner.jpg";
import imgApartment24 from "../../../assets/images/apartment/apartment-2-1.png";
import imgApartment21 from "../../../assets/images/apartment/apartment-2-2.png";
import imgApartment22 from "../../../assets/images/apartment/apartment-2-3.png";
import imgApartment23 from "../../../assets/images/apartment/apartment-2-4.png";
import imgApartment71 from "../../../assets/images/apartment/apartment-7-1.png";
import imgApartment72 from "../../../assets/images/apartment/apartment-7-2.png";
import imgApartment73 from "../../../assets/images/apartment/apartment-7-3.png";
import imgApartment74 from "../../../assets/images/apartment/apartment-7-4.png";
import imgApartmentBt1 from "../../../assets/images/apartment/apartment-bt-1.png";
import imgApartmentBt2 from "../../../assets/images/apartment/apartment-bt-2.png";
import imgApartmentBt3 from "../../../assets/images/apartment/apartment-bt-3.png";
import imgApartmentBt4 from "../../../assets/images/apartment/apartment-bt-4.png";
import imgApartment11 from "../../../assets/images/apartment/apartment-1-1.png";
import imgApartment12 from "../../../assets/images/apartment/apartment-1-2.png";
import imgApartment13 from "../../../assets/images/apartment/apartment-1-3.png";

let dataApartment = {
  district2: [
    { name: "New City", img: imgApartment21 },
    { name: "Gem Riverside", img: imgApartment22 },
    { name: "Masteri An Phú", img: imgApartment23 },
    { name: "Waterina Suites", img: imgApartment24 }
  ],
  district7: [
    { name: "Sunrise City", img: imgApartment71 },
    { name: "Golden King", img: imgApartment72 },
    { name: "	M-ONE Nam Sài Gòn", img: imgApartment73 },
    { name: "D-Vela", img: imgApartment74 }
  ],
  binhthanh: [
    { name: "Saigonres Plaza", img: imgApartmentBt1 },
    { name: "Pearl Plaza", img: imgApartmentBt2 },
    { name: "Soho Riverview", img: imgApartmentBt3 },
    { name: "Richmond City", img: imgApartmentBt4 }
  ],
  district1: [
    { name: " Grand Manhattan", img: imgApartment11 },
    { name: "The Marq", img: imgApartment12 },
    { name: " Alpha Hill ", img: imgApartment13 },
    { name: "Richmond City", img: imgApartment12 }
  ]
};

export default {
  name: "map-item",
  data: () => {
    return {
      imgHomeBanner,
      imgApartment21,
      imgApartment22,
      imgApartment23,
      imgApartment24,
      imgApartment71,
      imgApartment72,
      imgApartment73,
      imgApartment74,
      imgApartmentBt1,
      imgApartmentBt2,
      imgApartmentBt3,
      imgApartmentBt4,
      imgApartment11,
      imgApartment12,
      imgApartment13,
      dataApartment,
      itemApartment: [],
      isShowHied: false
    };
  },
  methods: {
    showHide() {
      this.isShowHied = !this.isShowHied;
    },
    showloaction(index) {
      this.isShowHied = !this.isShowHied;
      for (let key in this.dataApartment) {
        if (key === index) {
          this.itemApartment = [...dataApartment[key]];
        }
      }
      console.log(this.isShowHied);
    }
  }
};
</script>

<style>
.show-map-detail {
  animation: showmapdetail 1s linear;
  display: none;
}
@keyframes showmapdetail {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.show-hide {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: showhide 0.5s linear;
  animation-duration: 0.5s;
}
@keyframes showhide {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.show-map-detail .carousel {
  width: 70%;
}
.show-map-detail .carousel .carousel-inner {
  height: 100%;
}
.show-map-detail .carousel .carousel-inner .carousel-item img {
}
.show-map-detail .carousel .carousel-inner .carousel-item label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(99, 184, 200, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-map-detail
  .carousel
  .carousel-inner
  .carousel-item
  label
  .title-location {
  position: relative;
  color: white;
  animation: showtitle 1s linear;
  animation-duration: 1.5s;
}
.show-map-detail
  .carousel
  .carousel-inner
  .carousel-item
  label
  .title-location::before {
  position: absolute;
  top: 50%;

  left: 0;
  transform: translate(-100%, 50%);
  content: "";
  width: 100px;
  height: 4px;
  background-color: white;
  animation: showboder1 3s linear;
  animation-duration: 1.3s;
}
.show-map-detail
  .carousel
  .carousel-inner
  .carousel-item
  label
  .title-location::after {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(100%, 50%);
  content: "";
  width: 100px;
  height: 4px;
  background-color: white;
  animation: showboder2 3s linear;
  animation-duration: 1.3s;
}
@keyframes showboder1 {
  from {
    transform: translate(-800%, 50%);
    opacity: 0;
  }
  to {
    transform: translate(-100%, 50%);
    opacity: 1;
  }
}
@keyframes showboder2 {
  from {
    transform: translate(800%, 50%);
    opacity: 0;
  }
  to {
    transform: translate(100%, 50%);
    opacity: 1;
  }
}
@keyframes showtitle {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(2, 2);
  }
  100% {
    transform: scale(1, 1);
  }
}
.show-map-detail .carousel .carousel-inner button {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid white;
  border-radius: 50%;
  text-transform: uppercase;
  color: white;
  z-index: 99;
  outline: none;
  cursor: pointer;
}
@keyframes showinfor {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
.map-iocn__container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1ab47;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}

.style-map {
  stroke: white;
  stroke-width: 3;
  fill: #e8e8e8;
  cursor: pointer;
}
.style-map:hover {
  fill: #84292c;
}
.style-map text {
  font-weight: bold;
  fill: #84292c;
  stroke: white;
  stroke-width: 0.2;
  font-size: 18px;
}
.style-map:hover text {
  fill: white;
  animation: slaceText 6s infinite;
  animation-duration: 6s;
}
@keyframes slaceText {
  0% {
    font-size: 10px;
  }
  50% {
    font-size: 20px;
  }
  100% {
    font-size: 10px;
  }
}
</style>