 





//card header

const card = document.querySelector(".card");
const containercard = document.querySelector(".containercard");
const cardtitle = document.querySelector('.cardtitle')
const profil = document.querySelector('.profil img')
const icon = document.querySelector('.icon')
const resume = document.querySelector('.resume')

// animasi
containercard.addEventListener("mousemove",  (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//mouse masuk
containercard.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

//popup
  cardtitle.style.transform = "translateZ(50px)"; 
  profil.style.transform = "translateZ(100px) rotateZ(-5deg)";
  icon.style.transform = "translateZ(150px)";
  resume.style.transform = "translateZ(160px)";

  });

// mouse keluar
containercard.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
  //pop up off
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    cardtitle.style.transform = "translateZ(0px)"; 
    profil.style.transform = "translateZ(0px) rotateZ(0deg)";
    icon.style.transform = "translateZ(0px)";
    resume.style.transform = "translateZ(0px)";
  });


  //darkmode
  const darkSwitch = document.getElementById('darkSwitch');
  window.addEventListener('load', () => {
    if (darkSwitch) {
      initTheme();
      darkSwitch.addEventListener('change', () => {
        resetTheme();
      });
    }
  })

  function initTheme() {
    const darkThemeSelected =
      localStorage.getItem('darkSwitch') !== null &&
      localStorage.getItem('darkSwitch') === 'dark';
    darkSwitch.checked = darkThemeSelected;
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
      document.body.removeAttribute('data-theme');
  }

  function resetTheme() {
    if (darkSwitch.checked) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkSwitch', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('darkSwitch');
    }
  }

// scroll


$('.page-scroll').on('click', function(e) {

  var tujuan = $(this).attr('href');
 
  var elemenTujuan = $(tujuan);

  $('html, body').animate({
      scrollTop: elemenTujuan.offset().top-100
  }, 1250, 'swing' );

  e.preventDefault();
 
 });
