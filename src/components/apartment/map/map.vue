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
                d="M605.78,70.658c20.561,5.192,40.518,10.303,60.527,15.202
	c2.639,0.646,5.644,0.718,8.306,0.189c14.522-2.878,28.97-6.134,43.502-8.95c1.818-0.353,4.613,0.524,5.906,1.854
	c20.083,20.655,40.023,41.45,59.89,62.314c1.627,1.709,2.964,4.019,3.607,6.283c2.362,8.316,4.498,16.705,6.46,25.127
	c0.803,3.446,2.387,4.641,6.035,4.971c31.489,2.855,62.953,5.988,94.886,9.084c-0.251,1.434-0.335,2.688-0.695,3.859
	c-5.383,17.483-10.75,34.973-16.292,52.406c-0.607,1.91-1.929,3.918-3.493,5.152c-36.617,28.879-73.29,57.688-110.07,86.358
	c-1.719,1.34-4.59,1.917-6.839,1.745c-17.594-1.341-35.178-2.841-52.74-4.543c-5.478-0.53-10.191,0.006-14.992,3.321
	c-9.969,6.888-20.416,13.085-30.98,19.763c-4.672-8.221-8.927-15.506-5.217-25.65c4.035-11.029,6.112-22.784,8.861-34.267
	c0.522-2.184,0.638-4.666,0.18-6.851c-2.494-11.884-5.271-23.707-7.841-35.576c-0.578-2.668-1.738-4.203-4.527-5.072
	c-15.878-4.943-31.672-10.154-47.54-15.133c-1.963-0.615-4.357-0.981-6.269-0.449c-9.448,2.633-18.768,5.729-28.21,8.385
	c-2.753,0.773-3.286,2.014-2.942,4.621c1.244,9.405,2.207,18.848,3.449,28.252c0.503,3.81-0.081,6.995-2.448,10.241
	c-5.884,8.068-11.263,16.504-17.106,24.604c-1.341,1.857-3.526,3.591-5.679,4.297c-13.114,4.303-26.32,8.33-39.531,12.332
	c-1.464,0.443-3.375,0.666-4.708,0.107c-21.47-9.005-42.879-18.152-64.297-27.282c-0.286-0.121-0.495-0.423-0.904-0.787
	c3.763-12.197,7.447-24.445,11.402-36.607c0.552-1.695,2.223-3.248,3.74-4.377c15.898-11.833,31.922-23.498,47.757-35.412
	c1.924-1.447,3.623-3.9,4.275-6.211c3.297-11.682,6.342-23.442,9.138-35.256c0.456-1.928-0.228-4.598-1.314-6.348
	c-9.92-15.982-19.992-31.871-30.167-47.691c-1.645-2.556-1.888-4.471-0.226-7.16c4.196-6.791,8.16-13.737,11.956-20.762
	c1.386-2.564,2.929-3.529,5.855-3.168c9.085,1.119,18.216,1.881,27.292,3.066c1.799,0.235,3.652,1.479,5.102,2.706
	c6.479,5.489,12.934,11.019,19.156,16.792c2.669,2.477,5.362,3.314,8.962,3.058c8.464-0.603,16.954-0.858,25.438-1.099
	c3.385-0.096,5.231-1.367,6.503-4.723C594.295,99.244,599.993,85.244,605.78,70.658z"
              ></path>
              <text x="620" y="180" title="Wyoming" class="hint" style="">
                District 2
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M659.418,517c-16.863-17.35-33.344-34.284-49.802-51.24
	c-28.885-29.761-57.755-59.533-86.63-89.302c-3.131-3.228-6.329-6.395-9.344-9.728c-1.067-1.18-2.114-2.679-2.433-4.188
	c-2.474-11.709-4.769-23.455-7.21-35.649c11.985-3.786,23.753-7.834,35.726-11.148c5.972-1.655,10.209-4.447,13.415-9.875
	c4.733-8.016,10.433-15.457,15.348-23.374c1.344-2.166,2.068-5.219,1.854-7.763c-0.889-10.583-2.245-21.128-3.466-32.014
	c10.437-3.236,20.551-6.438,30.721-9.443c1.285-0.381,2.955,0.014,4.307,0.469c15.443,5.197,30.84,10.536,46.302,15.678
	c2.674,0.889,4.067,2.253,4.633,5.03c1.927,9.451,3.737,18.946,6.211,28.26c1.69,6.361,1.306,12.312-0.398,18.54
	c-3.116,11.387-5.982,22.851-8.584,34.364c-0.558,2.472-0.103,5.522,0.861,7.912c1.905,4.724,4.494,9.171,6.986,14.102
	c11.145-6.915,21.95-13.426,32.531-20.281c3.961-2.565,7.71-3.613,12.544-3.097c19.343,2.073,38.739,3.655,58.551,5.458
	c-0.599,1.89-1.019,3.465-1.589,4.983c-15.438,41.104-30.88,82.206-46.381,123.284c-0.684,1.814-1.562,3.837-2.965,5.054
	C693.753,487.644,676.783,502.122,659.418,517z"
              ></path>
              <text x="600" y="380" title="Wyoming" class="hint" style="">
                District 7
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                v-on:click="showloaction('district2')"
                d="M585.889,116.782c-10.45,0-20.923,0.104-31.391-0.109
	c-1.58-0.033-3.346-1.297-4.658-2.419c-6.455-5.515-12.706-11.271-19.215-16.719c-1.678-1.404-3.953-2.585-6.086-2.866
	c-9.403-1.23-18.864-2.008-28.281-3.141c-3.159-0.38-5.168,0.264-6.773,3.336c-3.926,7.518-8.094,14.926-12.503,22.17
	c-1.809,2.973-1.783,5.083,0.12,8.041c9.633,14.977,19.007,30.119,28.465,45.207c0.964,1.539,1.872,3.111,3.172,5.276
	c-9.388,2.308-18.353,4.548-27.336,6.716c-30.066,7.256-60.129,14.526-90.227,21.656c-2.674,0.633-5.667,0.771-8.369,0.306
	c-22.787-3.924-45.555-7.958-68.277-12.236c-2.237-0.421-4.841-2.254-6.06-4.194c-9.911-15.785-19.461-31.795-29.314-47.615
	c-1.636-2.627-1.705-4.595-0.295-7.271c7.9-15.012,15.593-30.131,23.474-45.152c1.052-2.003,2.511-3.958,4.219-5.427
	c10.73-9.23,21.504-18.415,32.478-27.351c1.822-1.484,4.753-2.491,7.073-2.326c9.456,0.669,18.894,1.734,28.29,3.014
	c1.908,0.26,3.834,1.831,5.359,3.226c12.283,11.241,24.524,22.529,36.647,33.941c2.502,2.357,4.48,2.941,7.785,1.262
	c14.377-7.313,28.957-14.227,43.373-21.465c2.297-1.153,4.394-2.979,6.148-4.893c17.787-19.379,35.538-38.793,53.139-58.341
	c2.307-2.563,4.526-3.361,7.799-2.794c14.261,2.469,28.567,4.671,42.799,7.292c2.07,0.381,4.663,2.074,5.586,3.886
	c7.463,14.673,14.62,29.502,21.752,44.341c0.649,1.35,1.072,3.331,0.577,4.627C599.079,83.219,592.611,99.606,585.889,116.782z"
              ></path>

              <text x="360" y="140" title="Wyoming" class="hint" style="">
                Bình Thạnh
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                v-on:click="showloaction('district7')"
                d="M302.211,85.026c-8.628,16.446-16.963,32.735-25.738,48.782
	c-2.309,4.224-6.591,6.48-11.784,5.709c-32.58-4.837-65.18-9.549-97.723-14.621c-12.813-1.995-25.491-4.85-38.25-7.205
	c-1.755-0.324-3.683-0.309-5.433,0.039c-13.536,2.691-27.02,5.66-40.587,8.17c-3.515,0.649-5.02,2.382-6.188,5.42
	c-3.581,9.309-7.302,18.566-11.18,27.756c-0.566,1.341-2.364,3.213-3.454,3.125c-18.714-1.512-37.405-3.293-56.773-5.076
	c1.305-9.236,2.556-18.076,3.803-26.914c0.279-1.978,0.738-3.951,0.791-5.934c0.286-10.678,5.042-18.964,12.099-26.893
	c14.61-16.414,28.45-33.516,42.438-50.474c2.041-2.473,4.199-3.33,7.202-3.381c18.812-0.319,37.679,0.008,56.409-1.423
	c9.917-0.758,19.638-4.47,29.367-7.142c7.051-1.936,13.935-4.475,20.969-6.473c1.728-0.491,4.028-0.496,5.61,0.245
	c38.997,18.288,77.934,36.706,116.875,55.114C301.101,84.058,301.454,84.443,302.211,85.026z"
              ></path>

              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M5.542,158.708c11.13,1.104,22.01,2.164,32.886,3.266
	c7.618,0.771,15.246,1.488,22.839,2.457c3.044,0.389,4.383-0.703,5.451-3.491c3.628-9.471,7.649-18.792,11.282-28.261
	c1.187-3.096,2.738-4.706,6.233-5.318c13.104-2.293,26.047-5.797,39.227-7.259c7.176-0.797,14.818,1.084,22.058,2.646
	c37.94,8.184,76.194,14.259,114.828,17.961c1.304,0.125,2.587,0.471,4.558,0.842c-1.409,1.146-2.291,2.012-3.308,2.669
	c-62.906,40.666-125.839,81.29-188.69,122.04c-3.146,2.04-5.173,2.062-8.193-0.219c-17.811-13.442-35.834-26.604-53.648-40.041
	c-1.612-1.217-3.103-3.675-3.209-5.636c-1.068-19.612-1.838-39.239-2.667-58.863C5.155,160.712,5.382,159.914,5.542,158.708z"
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
                d="M295.417,324.368c13.408-16.868,26.359-33.143,39.291-49.433
	c17.184-21.646,34.315-43.333,51.602-64.896c1.438-1.794,3.722-3.477,5.909-4.021c37.917-9.425,75.881-18.663,113.836-27.935
	c0.453-0.111,0.933-0.111,2.109-0.242c-0.804,3.446-1.49,6.614-2.284,9.754c-2.12,8.381-4.108,16.802-6.545,25.091
	c-0.682,2.318-2.312,4.8-4.231,6.241c-15.845,11.887-31.91,23.48-47.763,35.358c-1.956,1.466-3.583,3.884-4.446,6.2
	c-2.434,6.534-4.911,13.13-6.417,19.914c-2.589,11.662-8.727,20.61-17.413,28.731c-15.077,14.097-29.35,29.054-43.926,43.684
	c-1.829,1.836-3.27,3.229-6.375,1.933c-23.471-9.798-47.035-19.371-70.567-29.022C297.467,325.427,296.775,325.035,295.417,324.368z"
              ></path>
              <text x="350" y="280" title="Wyoming" class="hint" style="">
                District 1
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M275.806,137.768c11.173,18.282,22.082,36.131,33.256,54.414
	c-3.918,3.585-7.788,7.157-11.692,10.692c-31.577,28.601-63.138,57.22-94.82,85.702c-1.389,1.249-4.251,2.207-5.869,1.657
	c-33.512-11.397-66.943-23.033-100.387-34.631c-0.425-0.146-0.813-0.4-1.819-0.908C155.021,215.652,215.214,176.838,275.806,137.768
	z"
              ></path>
              <text x="160" y="230" title="Wyoming" class="hint" style="">
                Phú Nhuận
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M70.504,270.07c6.696-4.163,12.956-8.276,19.47-11.938
	c1.542-0.867,4.14-0.795,5.912-0.18c51.652,17.945,103.262,36.016,154.877,54.063c13.302,4.652,26.604,9.3,40.746,14.243
	c-17.454,19.31-34.457,38.122-51.614,57.103c-9.774-6.813-19.243-13.587-28.927-20.037c-2.346-1.563-5.343-2.688-8.14-2.947
	c-18.557-1.722-37.146-3.09-55.707-4.771c-1.918-0.174-4.262-1.174-5.491-2.587c-23.49-27.005-46.844-54.129-70.213-81.238
	C71.114,271.428,70.963,270.942,70.504,270.07z"
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
                d="M292.856,324.574c-30.502-10.745-60.718-21.39-91.617-32.272
	c7.547-6.837,14.542-13.177,21.54-19.513c28.261-25.583,56.494-51.197,84.864-76.659c1.59-1.428,4.481-2.535,6.495-2.191
	c23.935,4.075,47.818,8.455,72.734,12.938C355.323,246.372,324.141,285.409,292.856,324.574z"
              ></path>
              <text x="260" y="260" title="Wyoming" class="hint" style="">
                District 3
              </text>
              <title></title>
            </a>
            <a class="style-map" id="s01" title="Alabama">
              <path
                d="M371.213,358.873c-2.329,14.907-4.519,29.368-6.942,43.789
	c-0.26,1.546-1.603,3.235-2.918,4.231c-14.075,10.646-28.211,21.213-42.441,31.649c-1.439,1.056-3.622,1.626-5.43,1.563
	c-13.137-0.455-26.27-1.054-39.391-1.826c-1.786-0.105-3.815-1.067-5.197-2.255c-8.589-7.374-17.124-14.818-25.425-22.512
	c-1.571-1.456-2.569-4.063-2.843-6.261c-0.427-3.435,0.498-7.057-0.048-10.455c-1.476-9.184,2.73-15.463,8.783-21.828
	c14.221-14.956,27.808-30.514,41.627-45.85c1.479-1.642,2.542-3.053,5.353-1.853C321.1,337.847,345.941,348.236,371.213,358.873z"
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
                d="M366.699,403.116c1.264-8.759,2.51-17.412,3.763-26.065
	c0.071-0.493,0.294-0.982,0.279-1.468c-0.409-13.546,6.441-23.029,16.023-31.926c14.744-13.689,28.564-28.377,42.659-42.755
	c2.183-2.228,3.962-2.712,6.908-1.423c20.85,9.119,41.809,17.991,62.633,27.166c1.725,0.76,3.504,3.008,3.917,4.862
	c2.204,9.894,3.961,19.885,5.92,29.833c0.543,2.757,0.382,4.404-3.107,5.321c-45.794,12.035-91.535,24.27-137.292,36.443
	C368.095,403.188,367.747,403.116,366.699,403.116z"
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
  stroke-width: 4;
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