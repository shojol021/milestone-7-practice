console.log('hi')

const loadProduct = () => {
    fetch('product.json')
        .then(res => res.json())
        .then(data => displayProduct(data))
}

const displayProduct = (data) => {
    // console.log(data)
    const container = document.getElementById('container');
    data.forEach(product => {
        container.innerHTML += `
        <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img class="max-h-96" src="${product.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">
                  ${product.name}
                  <i class="fa-regular fa-bookmark"></i>
                  </h2>
                  <p>${product.description}</p>
                  <div class="card-actions justify-end">
                    <div class="border border-outline rounded text-3xl p-2">$<span>${product.price}</span></div> 
                    <div class="btn btn-primary">Buy Now</div>
                  </div>
                </div>
              </div>
        `
        // console.log(product.name)
    });
}

loadProduct();