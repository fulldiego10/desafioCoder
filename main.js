class ProductManager {
    constructor() {
        this.products = [];
    }


    static id = 0;

    addProduct(title, description, price, image, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`Codigo ${code} en Uso`)
                break;
            }
        }


        const newProduct = {
            title,
            description,
            price,
            image,
            code,
            stock,
        };

        if (!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++;
            this.products.push({
                ...newProduct,
                id: ProductManager.id,
            });
        } else {
            console.log("Todo los campos Requeridos")
        }
    }

    getProduct() {
        return this.products;
    }




    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
    }
}


const productos = new ProductManager();
// primera llamadda array vacio
console.log(productos.getProduct());

//Agregamos productos

productos.addProduct("Tomate", "TomatePerita", 500, "ImagenTomate", "abc123", 5);
productos.addProduct("Tomate Lata", "Lata de Tomate", 1000, "ImagenLata", "abc124", 3);


//Segunda llamda = arreglo producto
console.log(productos.getProduct());

//Validacion code repetido
productos.addProduct("Tomate frasco", "Frasco de Tomate", 1500, "ImagenFrasco", "abc124", 8);


//Busqueda de productos por ID
productos.getProductById(2)

//Busqueda de productos por ID no encontrado
productos.getProductById(3)