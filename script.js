
async function fetchData(event){

    event.preventDefault();
    const query = document.getElementById('title').value;
    console.log(query)

    fetch(`https://api.animethemes.moe/search?q=${query}`)
    .then(res=>res.json())
    .then(updateDom)
}

function updateDom(data){
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    const hidden = document.getElementById('hidden');
    

    data.search.videos.forEach(vid => {
        console.log(vid);
        const source = `<video controls>
                
        <source src = "${vid.link}"></video></br><p>${vid.filename}</p>`;

        document.getElementById('search-results').insertAdjacentHTML('beforeend', source);
    });
    console.log(data);
}


function pageLoaded() {
    const form = document.getElementById('search_form');
    form.addEventListener("submit", fetchData);
}
function myFunction() {
    window.open("video.html")
}

function myFunction2() {
    window.open("random.html")
}

window.addEventListener("load", pageLoaded);
