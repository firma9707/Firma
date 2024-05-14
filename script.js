// 사이트별 정보 시작
var infoData = {
    '基本情報': `
        <div class="info-section">
            <h2 class="info-title">Korean Shop</h2>
            <ul class="info-list">
                <li class="info-item"><span class="info-emphasis">귀사는 한국의 여러제품들을 판매하고 있습니다.</span></li>
                <li class="info-item"><span class="info-highlight">다양성을 추구하며, 고객의 모든 필요를 충족시키기 위해 1000개가 넘는 고품질의 상품을 제공합니다</span></li>
                <li class="info-item"><span class="info-emphasis">궁금하신 부분이 있으실 경우 연락 주시기 바랍니다.</span></li>
            </ul>
        </div>
    `,
    'シンシン釣り': `
        <div class="info-section">
            <h2 class="info-title">シンシン釣り</h2>
            <ul class="info-list">
                <li class="info-item">업력: <span class="info-emphasis">1980년대에 설립되어 업계를 선도하는 혁신과 전통의 조화로 30년 이상의 업력을 자랑합니다.</span></li>
                <li class="info-item">상품 종류: <span class="info-highlight">다양성을 추구하며, 고객의 모든 필요를 충족시키기 위해 1000개가 넘는 고품질의 상품을 제공합니다</span></li>
                <li class="info-item">본사: <span class="info-emphasis">한국의 경상남도 부산에 본사를 두고 전 세계로 뻗어가는 글로벌 낚시용품 기업입니다.</span></li>
            </ul>
        </div>
    `,
    '韓国コスメ': `
        <div class="info-section">
            <h2 class="info-title">韓国コスメ</h2>
            <ul class="info-list">
                <li class="info-item">업력: <span class="info-emphasis">세계적으로 인정받는 혁신적인 K-뷰티 제품들을 판매하며 꾸준히 성장해온 한국 화장품 회사입니다.</span></li>
                <li class="info-item">상품 종류: <span class="info-highlight">다양성을 추구하며, 고객의 모든 다양한 필요를 충족시키기 위해 여러 상품을 제공합니다</span></li>
                <li class="info-item">본사: <span class="info-emphasis">천연 성분을 사용한 스킨케어에서 시작하여 메이크업,건강보조 식품 제품에 이르기까지 다양한 라인업을 자랑합니다.</span></li>
            </ul>
        </div>
    `,
    '本社': `
        <div class="info-section">
            <h2 class="info-title">本社</h2>
            <ul class="info-list">
                <li class="info-item">본사: <span class="info-emphasis">나의 회사는 일본에 본사를 두고 있으며 앞으로 한국과 관련된 물건들을 일본에 판매할 예정입니다.</span></li>
                <li class="info-item">비전: <span class="info-highlight">우리는 한일 양국 간의 문화적 가교가 되어 양국의 우호적 관계 증진에 기여하고자 합니다.</span></li>
                <li class="info-item">고객 만족: <span class="info-emphasis">고객에게 최상의 제품과 서비스를 제공하여 한국의 우수한 제품을 일본 시장에 성공적으로 정착시키는 것을 목표로 합니다.</span></li>
            </ul>
        </div>
    `,
};

// 정보를 출력하는 함수
window.onload = function() {
    displayInfo('基本情報');
}

function displayInfo(key) {
    var infoText = document.getElementById('info-text'); // Select the info-text paragraph
    if (infoData.hasOwnProperty(key)) {
        // Update the content of the info-text paragraph
        infoText.innerHTML = infoData[key];
    }
}


// 사이트별 정보 종료

// 관련웹사이트 해당 주소로 이동 시작

document.getElementById('myButton1').addEventListener('click', function() {
    window.location.href = 'https://www.example.com'; // 이동할 웹사이트 주소
});
document.getElementById('myButton2').addEventListener('click', function() {
    window.location.href = 'https://www.example.com'; // 이동할 웹사이트 주소
});
document.getElementById('myButton3').addEventListener('click', function() {
    window.location.href = 'https://www.example.com'; // 이동할 웹사이트 주소
});

// 관련웹사이트 해당 주소로 이동 종료
