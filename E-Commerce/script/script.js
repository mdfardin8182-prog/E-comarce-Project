
var products = [
    {
        id:1, name:"Nike Shoes", 
        price:1500, 
        image:"image/360_F_550677031_fa7Ch74Q1O5BBq8ukR3liafwaPEjSyFN.jpg", 
        description:"Nike shoes are known for blending athletic performance with street style, using materials like leather, lightweight fabrics, and various foams (EVA, PU) for cushioning (React, Zoom Air) and support, featuring the iconic Swoosh, and offering specialized designs for running (road, trail, racing) and basketball, focusing on features like responsive cushioning, durable grip, and breathable uppers, all driven by strong marketing and athlete endorsements", 
        spec:"Color: Black/white\nComfort: High\nDurability: Excellent\nSize:6/10"},
    {
        id:2, 
        name:"Titan Watch", 
        price:16500, 
        image:"image/FetelugVrqT22HoORhN3ICtMsZ74wTHjcfxrElA6.jpg", 
        description:"The Titan Smart is a fashion smartwatch that features a 1.78-inch AMOLED display with a premium aluminum body. It serves as a comprehensive health and fitness companion, offering various monitoring and tracking functions. ", 
        spec:"Brand:Titan\nWaterproof: Yes\nStrap Material:Stainless Steel\nColor;Black\nWarenty: 2 Years\nMaterial: Steel"},
    {
        id:3, 
        name:"Polo T-shirt Black", 
        price:900, 
        image:"image/Men_s_Polo_black_800x.webp", 
        description:"A men's polo T-shirt is a versatile wardrobe staple that bridges the gap between casual comfort and polished style. Key features include a soft, structured collar, a two or three-button placket, and short sleeves, often crafted from breathable fabrics like piqué or jersey cotton. ", 
        spec:"Material: Cotton\nFit: Regular\nColor: Black\nSize:S,M,L,XL"},
    {
        id:4, 
        name:"Joyroom JR-JH1 Headphones", 
        price:4590, 
        image:"image/download-87-1.webp", 
        description:"JOYROOM JR-JH1 Hybrid ANC Wireless Headphones combine advanced audio technology with a sleek and comfortable design, delivering a high-quality listening experience for both casual and serious users.", 
        spec:"ANC: Yes\nBattery: 800mAh\nBluetooth: 5.3\nCharging Port: USB Type-C"},
    {
        id:5, name:"Lenovo HE05 Neckband", 
        price:490, image:"image/he05-01-500x500.webp", 
        description:"enovo HE05 is Equipped with an 8mm drive to deliver stunning sound for an enjoyable listening experience. Comes with a Built-in large-capacity battery for up to 12 hours of working time and 7 days of standby time..", 
        spec:"Connector: Bluetooth 5 \nBattery: 8 Hours\nBass: Heavy\nCharging: Type-C\nWarranty: No Warranty"},
    {
        id:6, 
        name:"Manja Pullover Hoodie", 
        price:800, image:"image/20250925_1429_Gray-Hoodie-Design_remix_01k5zzr4z4ff190hdbksxt8pg7.jpg", 
        description:"Upgrade your wardrobe with the Basic Manja Pullover Hoodie For Men the perfect combination of comfort, durability, and style.", 
        spec:"Color:Black, White , Grey\nSize:S,M,L,XL"}
];

function loadProductDetails() {
    
    if (window.location.pathname.indexOf("product.html") === -1) {
        return;
    }

  
    var queryString = window.location.search; 
    var params = new URLSearchParams(queryString);
    var id = parseInt(params.get("id")); 

    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            product = products[i];
            break;
        }
    }

    
    if (product === null) {
        document.getElementById("product-details").innerHTML = "Product not found.";
        return;
    }

    
    var html = "";
html += "<div class='details-box'>";
html += "<img src='" + product.image + "' class='details-img'>";
html += "<h2>" + product.name + "</h2>";
html += "<h3>Description</h3>";
html += "<p>" + product.description + "</p>";
html += "<h3>Specifications</h3>";
html += "<pre>" + product.spec + "</pre>";
html += "<p><strong>Price:</strong> " + product.price + " TK</p>";
html += "<button class='add-to-cart' onclick='addToCart(" + product.id + ")'>Add to Cart</button>";
html += "</div>";;

    
    document.getElementById("product-details").innerHTML = html;
}


var cart = [];

function addToCart(productId){
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }

    if (product !== null) {
        cart.push(product);
        alert(product.name + " added to cart! Total: " + cart.length + " items");
        
        var cartInfo = document.querySelector(".cart-info a");
        if (cartInfo) {
            var total = 0;
            for (var j = 0; j < cart.length; j++) {
                total += cart[j].price;
            }
            cartInfo.innerHTML = "Cart " + cart.length + " Products - BDT." + total + "TK";
        }
    }
}


loadProductDetails();


