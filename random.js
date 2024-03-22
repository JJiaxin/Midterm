const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

// let page = 1;
const pg = random(1, 1165)

fetchData()

function fetchData() {
    fetch(
        `https://api.animethemes.moe/video?page%5Bnumber%5D=${pg}`)
    .then(res => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
        
        console.log(pg)
        // const randID = random(data.meta.from, data.meta.to)
        const randIndex = random(0, 14)
        
        const vid = data.videos[randIndex]
        console.log(vid)
        const source = `<video controls autoplay>
                        
        <source src = "${vid.link}"></video></br><p>${vid.filename}</p>`;
        document.getElementById('video').insertAdjacentHTML('beforeend', source);
        // document.getElementsByTagName('title').innerHTML = `<title>${vid.filename}</title>`;

    });
}

function Random() {
    location.reload();
}