$(document).ready(function(){
  $('.members-base').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

const options = {
  mode: 'no-cors',
  headers: {"Content-Type": "application/json"}
}

axios.get('https://humblenoxiousproducts.johnlz.repl.co/', options).then(resp => {

    console.log(resp.data);
});