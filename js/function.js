document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('load', function() {
    if (typeof WOW === 'function') {
      new WOW().init();
    }
  });

  const header = document.querySelector('header');
  const mnu = document.querySelectorAll('header > .container > nav > .gnb > li > a');
  let scrollTop = 0;
  let nowIdx = 0;
  const arrTopVal = [];

  // 각 section 요소의 위치값을 getBoundingClientRect로 계산해서 저장
  document.querySelectorAll('section').forEach(function(section, idx) {
    const rect = section.getBoundingClientRect();
    arrTopVal[idx] = rect.top + window.scrollY;

    console.log(`section ${idx} 위치:`, arrTopVal[idx]);
  });


  // 메뉴 클릭 시
  mnu.forEach(function(menuItem, idx) {
    menuItem.addEventListener('click', function(event) {
      event.preventDefault();
      nowIdx = idx;

      // 클릭한 메뉴의 부모 li에 'on' 클래스 추가 및 형제 li에서 제거
      mnu.forEach(function(item, i) {
        if (i === nowIdx) {
          item.parentElement.classList.add('on');
        } else {
          item.parentElement.classList.remove('on');
        }
      });

      // 부드러운 스크롤 이동
      window.scrollTo({
        top: arrTopVal[nowIdx],
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > arrTopVal[0]) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }

    for (let i = 0; i < arrTopVal.length; i++) {
      if (scrollTop >= arrTopVal[i]) {
        mnu.forEach((item, j) => {
          if (i === j) {
            item.parentElement.classList.add('on');
          } else {
            item.parentElement.classList.remove('on');
          }
        });
      }
    }
  });

  if (window.innerWidth < 768) {
    // 모바일 화면에서 추가 작업 가능
  }
});
