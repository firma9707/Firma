window.addEventListener('scroll', function() {
    var element = document.getElementById('second-Banner');
    var position = element.getBoundingClientRect();

    // 화면 내에 요소가 보이는지 확인
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1; // 이미지를 보이게 변경
    }
});
window.addEventListener('scroll', function() {
    var element = document.getElementById('fadeImage1');
    var position = element.getBoundingClientRect();

    // 화면 내에 요소가 보이는지 확인
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1; // 이미지를 보이게 변경
    }
});
window.addEventListener('scroll', function() {
    var element = document.getElementById('fadeMainText1');
    var position = element.getBoundingClientRect();

    // 화면 내에 요소가 보이는지 확인
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1; // 이미지를 보이게 변경
    }
});
window.addEventListener('scroll', function() {
    var element = document.getElementById('third-Banner');
    var position = element.getBoundingClientRect();

    // 화면 내에 요소가 보이는지 확인
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1; // 이미지를 보이게 변경
    }
});
window.addEventListener('scroll', function() {
    var element = document.getElementById('fadeImage2');
    var position = element.getBoundingClientRect();

    // 화면 내에 요소가 보이는지 확인
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1; // 이미지를 보이게 변경
    }
});
window.addEventListener('scroll', function() {
    var element = document.getElementById('fadeMainText2');
    var position = element.getBoundingClientRect();

    // 화면 내에 요소가 보이는지 확인
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1; // 이미지를 보이게 변경
    }
});

// 인라인 메뉴 !!!
// 현재 열려 있는 정보창의 ID를 추적하는 변수입니다.
let currentVisibleContentId = null;

function toggleInlineContent(contentId) {
    // 현재 보이는 정보창이 있고, 다른 정보창을 클릭했다면, 이전 정보창을 숨깁니다.
    if (currentVisibleContentId && currentVisibleContentId !== contentId) {
        document.getElementById(currentVisibleContentId).classList.add('hidden');
    }

    // 클릭한 정보창의 표시 상태를 토글합니다.
    var contentToShow = document.getElementById(contentId);
    if (contentToShow.classList.contains('hidden')) {
        contentToShow.classList.remove('hidden');
        currentVisibleContentId = contentId; // 새로 표시된 정보창의 ID를 추적합니다.
    } else {
        contentToShow.classList.add('hidden');
        currentVisibleContentId = null; // 정보창이 닫히면 추적 중인 ID를 초기화합니다.
    }
}
