
const hamburgerBtn = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

if (hamburgerBtn && primaryNav) { 
    hamburgerBtn.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        
        if (primaryNav.classList.contains('open')) {
            hamburgerBtn.innerHTML = '&#10006;'; 
        } else {
            hamburgerBtn.innerHTML = '&#9776;';  
        }
    });
}

const productForm = document.getElementById("product-form");

if (productForm) {
    const inventoryBody = document.getElementById("inventory-body");
    const totalPriceElement = document.getElementById("total-price");
    let inventory = [];
    
    const storedData = localStorage.getItem("myCustomInventory");
    if (storedData) {
        const productsArray = storedData.split("|");
        productsArray.forEach(itemString => {
            const props = itemString.split(',');
            if (props.length === 4) {
                const loadedProduct = {
                    name: props[0],
                    category: props[1],
                    quantity: parseInt(props[2]),
                    price: parseFloat(props[3])
                };
                inventory.push(loadedProduct);
            }
        });
    }

    function renderInventory() {
        inventoryBody.innerHTML = "";
        if (inventory.length === 0) {
            inventoryBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No products found. Add some!</td></tr>';
            totalPriceElement.textContent = '0.00';
            return;
        }
        
        let totalValue = 0;
        inventory.forEach((product, index) => {   
            const subtotal = product.quantity * product.price;
            totalValue += subtotal;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button class="delete-btn" data-index="${index}">❌</button></td>
            `;
            inventoryBody.appendChild(row);
        });
        totalPriceElement.textContent = totalValue.toFixed(2);
        
        const deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach(button => {
            button.addEventListener("click", deleteProduct);
        });
    }

    renderInventory();

    function saveData() {
        const textArray = inventory.map(product => {
            return `${product.name},${product.category},${product.quantity},${product.price}`;
        });
        const finalText = textArray.join("|");
        localStorage.setItem("myCustomInventory", finalText);
    }

    function addProduct(event) {
        event.preventDefault();
        const nameInput = document.getElementById("name").value.trim();
        const categoryInput = document.getElementById('category').value;
        const quantityInput = parseInt(document.getElementById('quantity').value);
        const priceInput = parseFloat(document.getElementById('price').value);
        
        if (nameInput !== '' && categoryInput !== '' && quantityInput > 0 && priceInput > 0) {
            const newProduct = {
                name: nameInput,
                category: categoryInput,
                quantity: quantityInput,
                price: priceInput,
            };
            inventory.push(newProduct);
            saveData();
            renderInventory();
            productForm.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    }

    function deleteProduct(event) {
        const index = event.target.getAttribute("data-index");
        inventory.splice(index, 1);
        saveData();
        renderInventory();
    }

    productForm.addEventListener('submit', addProduct);
}