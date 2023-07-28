class Beer {
    constructor(id, name, photo, price) {
        this.id = id;
        this.productName = name;
        this.productPhoto = photo;
        this.price = price;
    }
}

var beerList = [
    new Beer(1, "Festival", "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1011.jpg", 1500000),
    new Beer(2, "Huda Gold", "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1011.jpg", 1500000),
    new Beer(3, "Huda Ice", "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1011.jpg", 1500000),
    new Beer(4, "Huda", "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1011.jpg", 1500000),
]

function renderBeerList() {
    let htmls = beerList.map(function (beer) {
        return `
            <tr>
                <td>${beer.id}</td>
                <td>${beer.productName}</td>
                <td>
                    <img src='${beer.productPhoto}' class='product-photo' alt =''/>
                </td>
                <td>${beer.price}</td>
                <td>
                    <button class='btn' onclick="editBeer(${beer.id})">Edit</button>
                </td>
            </tr>
        `
    })
    document.querySelector('#tbBeer').innerHTML = htmls.join("")
}

function findMaxId() {
    let max = 0;
    for (let i = 0; i < beerList.length; i++) {
        if (beerList[i].id > max) {
            max = beerList[i].id
        }
    }
    return max;
}

function findBeerById(id){
    for (let i = 0; i < beerList.length; i++) {
        if (beerList[i].id == id) {
            return beerList[i]
        }
    }
    return null;
}

function findPositionById(id){
    for (let i = 0; i < beerList.length; i++) {
        if (beerList[i].id == id) {
            return i;
        }
    }
    return -1;
}

function createBeer() {
    let name = document.querySelector('#productName').value;
    let photo = document.querySelector('#productPhoto').value;
    let price = Number(document.querySelector('#price').value);
    let id = findMaxId() + 1;
    let beer = new Beer(id, name, photo, price)

    beerList.push(beer);
    renderBeerList();
    clearFields();
}

function editBeer(beerId){
    document.querySelector('#btnCreate').classList.add('d-none');
    document.querySelector('#btnSave').classList.remove('d-none');
    let beer = findBeerById(beerId);
    console.log(beer);

    document.querySelector('#productName').value = beer.productName;
    document.querySelector('#productPhoto').value = beer.productPhoto;
    document.querySelector('#price').value = beer.price;
    document.querySelector('#beerId').value = beer.id;
}

function saveBeer(){
    document.querySelector('#btnCreate').classList.remove('d-none');
    document.querySelector('#btnSave').classList.add('d-none');

    let name = document.querySelector('#productName').value;
    let photo = document.querySelector('#productPhoto').value;
    let price = Number(document.querySelector('#price').value);
    let id = document.querySelector('#beerId').value;

    let pos = findPositionById(id);
    beerList[pos].productName = name;
    beerList[pos].productPhoto = photo;
    beerList[pos].price = price;

    renderBeerList();
    clearFields()
}

function clearFields(){
    document.querySelector('#productName').value = null;
    document.querySelector('#productPhoto').value = null;
    document.querySelector('#price').value = null;
    document.querySelector('#beerId').value = 0;

    document.querySelector('#btnCreate').classList.remove('d-none');
    document.querySelector('#btnSave').classList.add('d-none');
}

renderBeerList();