const loadProduct = () => {
    fetch('product.json')
        .then(res => res.json())
        .then(data => displayProduct(data))
}

const displayProduct = (data) => {
    const container = document.getElementById('container');
    data.forEach(product => {
        container.innerHTML += `
        <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img class="max-h-96" src="${product.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">
                  ${product.name}
                  <i id="icon-white" onclick="setBookmark('${product.id}', '${product.name}', '${product.price}')" class="fa-regular fa-bookmark"></i>
                  </h2>
                  <p>${product.description}</p>
                  <div class="card-actions justify-end">
                    <div class="border border-outline rounded text-3xl p-2">$<span>${product.price}</span></div> 
                    <div class="btn btn-primary">Buy Now</div>
                  </div>
                </div>
              </div>
        `
    });
}

const setBookmark = (id, name, price) => {
    let bookmark = [];
    const previousBookmark = JSON.parse(localStorage.getItem('bookmark'));
    const itemDetails = { id, name, price, bookmark: true }

    if (previousBookmark) {
        const a = previousBookmark.find(product => product.id == id);
        if (a) {
            alert('already bookmarked')
        }
        else {
            bookmark = [...previousBookmark, itemDetails]
            localStorage.setItem('bookmark', JSON.stringify(bookmark));
        }
    }
    else {
        bookmark.push(itemDetails);
        localStorage.setItem('bookmark', JSON.stringify(bookmark));
    }
}


loadProduct();


document.getElementById('icon-white').addEventListener('click', function(){
    console.log('clicked')
})

// document.getElementById('icon-white').innerHTML = `
    // <i id="icon-black" onclick="setBookmark('${product.id}', '${product.name}', '${product.price}')" class="fa-solid fa-bookmark"></i>
    // `

//<i class="fa-solid fa-bookmark"></i>

//${product.id}, ${product.name}, ${product.price}