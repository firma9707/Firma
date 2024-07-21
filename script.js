// 사이트별 정보 시작
var infoData = {
    '基本情報': `
        <div class="info-section">
            <h2 class="info-title">Korean Shop</h2>
            <ul class="info-list">
                <li class="info-item"><span class="info-emphasis">御社は韓国の様々な製品を販売しています。</span></li>
                <li class="info-item"><span class="info-highlight">多様性を追求し、お客様のあらゆるニーズに応えるために、1000以上の高品質な商品を提供しています。</span></li>
                <li class="info-item"><span class="info-emphasis">ご不明な点がございましたら、ご連絡ください。(080-8495-2082)</span></li>
            </ul>
        </div>
    `,
    '韓国商品': `
        <div class="info-section">
            <h2 class="info-title">韓国商品</h2>
            <ul class="info-list">
                <li class="info-item">業歴: <span class="info-emphasis">KPOPやドラマ、ファッションなどの韓国商品を販売しています。</span></li>
                <li class="info-item">送品集類: <span class="info-highlight">多様性を追求し、お客様のあらゆるニーズに応えるために、100以上の多様な商品を提供しています。</span></li>
                <li class="info-item">本社: <span class="info-emphasis">韓国の慶尚南道釜山に本社を置き、世界中に展開するグローバルな韓国商品を販売します。</span></li>
            </ul>
        </div>
    `,
    '韓国雑貨': `
        <div class="info-section">
            <h2 class="info-title">韓国雑貨</h2>
            <ul class="info-list">
                <li class="info-item">業歴: <span class="info-emphasis">世界的に認められる革新的なK-雑貨製品を販売し、着実に成長してきた韓国の化粧品会社です。</span></li>
                <li class="info-item">送品集類: <span class="info-highlight">多様性を追求し、お客様のすべての多様なニーズを満たすために、様々な商品を提供しています。</span></li>
                <li class="info-item">本社: <span class="info-emphasis">天然成分を使用した掃除用品から始まり、キッチン用品、生活家電製品、K-ドラマ関連商品、韓国のお菓子、衣類に至るまで、様々な雑貨を販売しています。pan></li>
            </ul>
        </div>
    `,
    '本社': `
        <div class="info-section">
            <h2 class="info-title">本社</h2>
            <ul class="info-list">
                <li class="info-item">本社: <span class="info-emphasis">私の会社は日本に本社を置いており、今後韓国に関連する商品を日本で販売する予定です。</span></li>
                <li class="info-item">ビジョン: <span class="info-highlight">弊社が販売する韓国製品は、日本国内で韓国文化を愛する方々のために販売しており、両国の友好関係に良い影響を与えることを願っています。</span></li>
                <li class="info-item">カスタマー満足: <span class="info-emphasis">また、お客様に最高の製品とサービスを提供し、韓国の優れた製品を日本市場に成功裏に定着させることを目指しています。</span></li>
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
