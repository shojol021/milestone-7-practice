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
                <figure><img src="${product.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <div class="border border-outline rounded text-3xl p-2">$<span>12.99</span></div> 
                    <div class="btn btn-primary">Products</div>
                  </div>
                </div>
              </div>
        `
        // console.log(product.name)
    });
}

loadProduct();