export interface IProducts {
    id: number;
    description: string;
    price: number;
    descriptionPrice: string;
    quantityStock: number;
    image: string;
}

export interface IProductsCart extends IProducts {
    quantity: number;
}

export const products: IProducts[] = [
    { id:1, description: "Calha de Chuva Peugeot 208 4 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/208.png", quantityStock: 15},
    { id:2, description: "Calha de Chuva GM Agile 4 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/agile.png", quantityStock: 10},
    { id:3, description: "Calha de Chuva Fiat Argo 4 Portas", price: 111.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/argo.png", quantityStock: 10},
    { id:4, description: "Calha de Chuva GM Astra 4 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/astra.png", quantityStock: 10},
    { id:5, description: "Calha de Chuva Kia Besta Antiga 2 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/BESTA ANTIGA.png", quantityStock: 10},
    { id:6, description: "Calha de Chuva Kia Bongo 2 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/Bongo.png", quantityStock: 10},
    { id:7, description: "Calha de Chuva Vw Brasilia 2 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/Brasilia 2p.png", quantityStock: 10},
    { id:8, description: "Calha de Chuva Gm Celta/Prisma 4 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/celta Prisma.png", quantityStock: 10},
    { id:9, description: "Calha de Chuva Kia Cerato 4 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/cerato.png", quantityStock: 10},
    { id:10, description: "Calha de Chuva Honda City 4 Portas", price: 110.99, descriptionPrice: "Pagamento em até 12x Sem Juros", image: "/assets/city 2018.png", quantityStock: 10}
]