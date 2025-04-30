window.addEventListener('load', function () {
    var backgroundText = document.getElementById('backgroundText');
    var backgroundText1 = document.getElementById('backgroundText1');

    if (backgroundText) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 2500) {
                backgroundText.style.opacity = '0'; // 2500px 이상이면 숨김
            } else if (window.scrollY === 0) {
                backgroundText.style.opacity = '1'; // 맨 위에서는 다시 보이게
            }
        });
    }

    if (backgroundText1) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 180) {
                backgroundText1.style.opacity = '1'; // 텍스트 표시
            } else {
                backgroundText1.style.opacity = '0'; // 텍스트 숨김
            }
        });
    }
});
