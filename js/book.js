async function fetchBooks(query) {
    const REST_API_KEY = "f6dc9b9686118e7983b2e190264944f5"
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 20
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

async function swiperbookData() {
    try {
        // query와 section ID를 매핑
        const queries = [
            { query: "소설", sectionId: "slider" },
        ];

        for (const { query, sectionId } of queries) {
            const data = await fetchBooks(query);

            // 해당 섹션 내의 .box 요소 8개 선택
            const section = document.querySelector(`.${sectionId}`);
            const boxElements = section.querySelectorAll("#$swiper-slide");

            boxElements.forEach((div, i) => {
                const doc = data.documents[i];
                if (!doc) return;

                // 요소 생성 및 추가
                div.innerHTML = `<img src="${doc.thumbnail}" alt="${doc.title}">
                        <h6>${doc.title}</h6>
                        <p>${doc.authors}</p>
                        `
            });
        }
    } catch (error) {
        console.error('에러 발생:', error);
    }
}

swiperbookData();

async function swiperbookData() {
    try {
        // query와 section ID를 매핑
        const queries = [
            { query: "자바스크립트", sectionclass: "slider2" },
        ];

        for (const { query, sectionclass } of queries) {
            const data = await fetchBooks(query);

            // 해당 섹션 내의 .box 요소 8개 선택
            const section = document.querySelector(`.${sectionclass}`);
            const boxElements = section.querySelectorAll(".swiper-slide");

            boxElements.forEach((box, i) => {
                const doc = data.documents[i];
                if (!doc) return;

                // 요소 생성 및 추가
                box.innerHTML = `<img src="${doc.thumbnail}" alt="${doc.title}">
                        <h6>${doc.title}</h6>
                        <p>${doc.authors}</p>
                        `
            });
        }
    } catch (error) {
        console.error('에러 발생:', error);
    }
}

swiperbookData();


async function bookData() {
    try {
        // query와 section ID를 매핑
        const queries = [
            { query: "요리", sectionclass: "new" },
            { query: "오디세이", sectionclass: "best" },
            { query: "동화책", sectionclass: "classic" },
        ];

        for (const { query, sectionclass } of queries) {
            const data = await fetchBooks(query);
            
            //썸네일이 빈 문자열인것은 제외
            const origin = data.documents;
            let book = origin.filter((val)=>{
                return val.thumbnail != '' && val.contents !='' && val.authors !='';
            })

            // 해당 섹션 내의 .box 요소 8개 선택
            const section = document.querySelector(`.${sectionclass}`);
            const boxElements = section.querySelectorAll(".book-card");

            boxElements.forEach((box, i) => {
                const doc = book[i];
                if (!doc) return;

                // 요소 생성 및 추가
                box.innerHTML = `<img class="book-card__cover" src="${doc.thumbnail}" alt="${doc.title}">
                        <h6>${doc.title}</h6>
                        <p>${doc.authors}</p>
                        `
            });
        }
    } catch (error) {
        console.error('에러 발생:', error);
    }
}

bookData();