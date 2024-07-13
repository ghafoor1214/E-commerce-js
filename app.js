


const fetchData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            console.log("It's Work");
        }
        const data = await response.json();
        console.log("Data fetched:", data);
        renderUI(data);
    } catch (error) {
        console.error("Operation Failed", error);
    }
};

const renderUI = (items) => {
    const parent = document.getElementById("parent");
    parent.innerHTML = "";
    for (const product of items) {
        parent.innerHTML += `<div class="col-lg-3">
                <div class="card" style="width: 90%; margin-left: 20px;">
                    <img src="${product.image}" style="width: 100%; height: 300px; cursor: pointer;" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description.slice(0, 100)}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;
    }
};

fetchData();


