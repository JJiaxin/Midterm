
function pageLoaded() {
    let form = document.getElementById('search_form');
    // form.addEventListener("submit", searchTrack);
}

window.addEventListener("load", pageLoaded);
  
let page = 1;
fetchData();
function fetchData() {
    const results = document.getElementById('video');
    results.innerHTML = '';
    fetch(`https://api.animethemes.moe/video?page%5Bnumber%5D=${page}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.videos.forEach(vid => {
                console.log(vid);
                const source = `<video controls>
                        
                <source src = "${vid.link}"></video></br><p>${vid.filename}</p>`;

                results.insertAdjacentHTML('beforeend', source);
            });
            console.log(data);
        })
        .catch(error => console.log(error));
}
function Next() {
    
    page ++;
    fetchData();
    console.log(page)
    topFunction();
}

function Back() {
    
    page --;
    fetchData();
    console.log(page)
    topFunction();
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}