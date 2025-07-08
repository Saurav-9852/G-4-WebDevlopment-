async function fetchprod() {
      try {
        let product = await fetch('https://dummyjson.com/products');
        let data = await product.json();

        const container = document.getElementById('product-list');
        container.innerHTML = '';

        data.products.forEach(prod => {
          const div = document.createElement('div');
          div.className = 'product';
          div.innerHTML = `
            <h3>${prod.title}</h3>
            <p>${prod.description}</p>
            <strong>Price: $${prod.price}</strong>
          `;
          container.appendChild(div);
        });

      } catch (err) {
        console.log("error:", err.message);
      }
    }
    document.getElementById('fetch-btn').addEventListener('click', fetchprod);