<?php // PARALAX SCRIPTS
echo '<style>';
echo '
/* line 3, ../scss/style.scss */
html, body {
  height: 100%;
  width: 100%;
}

/* line 8, ../scss/style.scss */
body {
  overflow-x: hidden;
  margin: 0;
  padding-top: 43px;
}
@media (min-width: 768px) {
  /* line 8, ../scss/style.scss */
  body {
    padding-top: 49px;
  }
}

/* line 18, ../scss/style.scss */
.par-container {
  height: 70%;
  width: 100%;
}

/* line 24, ../scss/style.scss */
.container {
  z-index: 1;
}

/* line 28, ../scss/style.scss */
#men {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 48px;
}
/* line 33, ../scss/style.scss */
#men ul {
  width: 75%;
  max-width: 600px;
  margin: 0 auto;
}
/* line 37, ../scss/style.scss */
#men ul li {
  width: 150px;
  float: left;
}

/* line 44, ../scss/style.scss */
#par {
  margin-top: 50px;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  overflow-x: hidden !important;
}

/* line 70, ../scss/style.scss */
#par {
  overflow: auto;
  -webkit-perspective: 1px;
  -moz-perspective: 1px;
  -ms-perspective: 1px;
  -o-perspective: 1px;
  perspective: 1px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
/* line 79, ../scss/style.scss */
#par, #par * {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

/* line 103, ../scss/style.scss */
.par-container {
  margin: auto;
}
/* line 104, ../scss/style.scss */
.par-container .lax1 {
  -webkit-transform: translateZ(-0.4px) scale(1.4);
  -moz-transform: translateZ(-0.4px) scale(1.4);
  -ms-transform: translateZ(-0.4px) scale(1.4);
  -o-transform: translateZ(-0.4px) scale(1.4);
  transform: translateZ(-0.4px) scale(1.4);
  z-index: -400;
}
/* line 162, ../scss/style.scss */
.par-container > * {
  position: absolute;
}

/* line 167, ../scss/style.scss */
body {
  font-family: Roboto, sans-serif;
  font-weight: 100;
  background: #EEF1F3;
  line-height: 1;
}

/* line 174, ../scss/style.scss */
h1, h2 {
  font-weight: 100;
  margin: 0;
}

/* line 179, ../scss/style.scss */
h1 {
  font-size: 5em;
  color: #1586d1;
}

/* line 183, ../scss/style.scss */
h2 {
  font-size: 3em;
  -webkit-transform: translateZ(0.2px) scale(0.8);
  -moz-transform: translateZ(0.2px) scale(0.8);
  -ms-transform: translateZ(0.2px) scale(0.8);
  -o-transform: translateZ(0.2px) scale(0.8);
  transform: translateZ(0.2px) scale(0.8);
  z-index: 200;
}

/* line 188, ../scss/style.scss */
.team-member-module {
  max-height: 460px;
}

/* line 192, ../scss/style.scss */
.bg-logo {
  background-image: url("./responsive-images/logo-heard-marquee.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100%;
  padding-bottom: 20%;
  margin-top: 15%;
}

/* line 203, ../scss/style.scss */
.sun-light {
  padding-bottom: 69%;
  width: 100%;
  background-image: url("./responsive-images/marquee/sun-light/sun-light-480.jpg");
  background-repeat: no-repeat;
  background-position: center center;
}
@media (min-width: 480px) {
  /* line 203, ../scss/style.scss */
  .sun-light {
    background-image: url("./responsive-images/marquee/sun-light/sun-light-960.jpg");
  }
}
@media (min-width: 960px) {
  /* line 203, ../scss/style.scss */
  .sun-light {
    background-image: url("./responsive-images/marquee/sun-light/sun-light-1440.jpg");
  }
}
@media (min-width: 1440px) {
  /* line 203, ../scss/style.scss */
  .sun-light {
    background-image: url("./responsive-images/marquee/sun-light/sun-light-1920.jpg");
  }
}

/* line 221, ../scss/style.scss */
.marq {
  height: 0;
  padding-bottom: 60%;
}
/* line 224, ../scss/style.scss */
.marq .sun-light {
  margin-top: -38%;
}
@media (min-width: 480px) {
  /* line 224, ../scss/style.scss */
  .marq .sun-light {
    margin-top: -15%;
  }
}

/* line 235, ../scss/style.scss */
.nord-jacket {
  height: 0;
  padding-bottom: 50%;
}

/* line 240, ../scss/style.scss */
.g-nord {
  left: -10% !important;
  width: 50%;
  // padding-bottom: 69%;
  padding-bottom: 66%;
  margin-top:-10%;
  background-image: url("./responsive-images/guitar-nord/guitar-nord-240.jpg");
  background-repeat: no-repeat;
  background-position: 0 100%;
}
@media (min-width: 480px) {
  /* line 240, ../scss/style.scss */
  .g-nord {
    padding-bottom: 66%;
    margin-top:-20%;
    background-image: url("./responsive-images/guitar-nord/guitar-nord-480.jpg");
  }
}
@media (min-width: 960px) {
  /* line 240, ../scss/style.scss */
  .g-nord {
    margin-top:-7%;
    background-image: url("./responsive-images/guitar-nord/guitar-nord-768.jpg");
  }
}

@media(min-width:1240px) {
  .g-nord {
    margin-top:0;
    padding-bottom: 56%;
  }
}

/* line 257, ../scss/style.scss */
.stairs {
  left: -10% !important;
  width: 50%;
  // padding-bottom: 68.5%;
  padding-bottom: 56%;
  background-image: url("./responsive-images/stairs/stairs-260.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  // background-size: cover;
}
@media (min-width: 480px) {
  /* line 257, ../scss/style.scss */
  .stairs {
    background-image: url("./responsive-images/stairs/stairs-480.jpg");
  }
}
@media (min-width: 960px) {
  /* line 257, ../scss/style.scss */
  .stairs {
    background-image: url("./responsive-images/stairs/stairs-960.jpg");
  }
}

/* line 276, ../scss/style.scss */
.j-jacket {
  left: 60% !important;
  width: 50%;
  // padding-bottom: 69%;
  padding-bottom: 66%;
  margin-top:-10%;
  background-image: url("./responsive-images/jean-jacket/jean-jacket-240.jpg");
  background-repeat: no-repeat;
  background-position: center center;
}

@media (min-width: 480px) {
  /* line 276, ../scss/style.scss */
  .j-jacket {
    margin-top:-20%;
    background-image: url("./responsive-images/jean-jacket/jean-jacket-480.jpg");
  }
}
@media (min-width: 960px) {
  /* line 276, ../scss/style.scss */
  .j-jacket {
    margin-top:-7%;
    background-image: url("./responsive-images/jean-jacket/jean-jacket-768.jpg");
  }
}

@media(min-width:1240px) {
  .j-jacket {
    margin-top:0;
    padding-bottom: 56%;
  }
}

/* line 292, ../scss/style.scss */
.girl {
  left: 60% !important;
  width: 50%;
  padding-bottom: 56%;
  background-image: url("./responsive-images/girl-large/girl-large-240.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
@media (min-width: 480px) {
  /* line 292, ../scss/style.scss */
  .girl {
    background-image: url("./responsive-images/girl-large/girl-large-480.jpg");
  }
}
@media (min-width: 960px) {
  /* line 292, ../scss/style.scss */
  .girl {
    background-image: url("./responsive-images/girl-large/girl-large-960.jpg");
  }
}

/* line 310, ../scss/style.scss */
.man-phone {
  // padding-bottom: 69%;
  padding-bottom: 81%;
  width: 100%;
  background-image: url("./responsive-images/man-phone/man-phone-480.jpg");
  background-repeat: no-repeat;
  background-position: 50% 0;
}
@media (min-width: 480px) {
  /* line 310, ../scss/style.scss */
  .man-phone {
    background-image: url("./responsive-images/man-phone/man-phone-960.jpg");
  }
}
@media (min-width: 960px) {
  /* line 310, ../scss/style.scss */
  .man-phone {
    background-image: url("./responsive-images/man-phone/man-phone-1440.jpg");
  }
}
@media (min-width: 1440px) {
  /* line 310, ../scss/style.scss */
  .man-phone {
    background-image: url("./responsive-images/man-phone/man-phone-1920.jpg");
  }
}

/* line 328, ../scss/style.scss */
.dog {
  // padding-bottom: 69%;
  padding-bottom:80%;
  width: 100%;
  background-image: url("./responsive-images/dog/dog-480.jpg");
  background-repeat: no-repeat;
  // background-position: 100% 0;
  background-position: 100% -30%;
}
@media (min-width: 480px) {
  /* line 328, ../scss/style.scss */
  .dog {
    background-image: url("./responsive-images/dog/dog-960.jpg");
  }
}
@media (min-width: 960px) {
  /* line 328, ../scss/style.scss */
  .dog {
    background-image: url("./responsive-images/dog/dog-1440.jpg");
  }
}
@media (min-width: 1440px) {
  /* line 328, ../scss/style.scss */
  .dog {
    background-image: url("./responsive-images/dog/dog-1920.jpg");
  }
}

';
echo '</style>';
