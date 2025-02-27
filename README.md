# Welcome to **waiterapp-api**👋
This is an API that has nine endpoints related to categories, products and orders. Are they:
- **List Categories** (*GET*): 'baseUrl/categories';
- **Create Category** (*POST*): 'baseUrl/categories', which expects an object {icon: (string), name: (string)} in JSON format;
  
- **List Products** (*GET*): 'baseUrl/products';
- **Get Products by Category** (*GET*): 'baseUrl/categories/:categoryId/products';
- **Create Product** (*POST*): 'baseUrl/products', which expects an object 
{name: (string), description: (string), image: (file), price (number), category (string)} in multipart/form-data format;

- **List Orders** (*GET*): 'baseUrl/orders';
- **Create Order** (*POST*): 'baseUrl/orders', which expects an object
{table: (string), products, (Array of {product: string, quantity: number})} in JSON format;
- **Change Order Status** (*PATCH*): 'baseUrl/orders', which expects an object
{status: ""} in JSON format; 
  Obs: Status should be one of these: WAITING, IN_PRODUCTION, DONE.
- **Cancel Order** (*Delete*): 'baseUrl/orders/:orderId/';

## A preview of the endpoints:
https://github.com/user-attachments/assets/e82c61da-aa17-43cf-9de9-080e49f9adbf



## Techs:
Built with **Express** + **Node**. Also used:
- **TypeScript** to better define some application data;
- **Eslint** to better formatting and identification of problems in the code;
- **Nodemon** to better expierence in development;
- **Mongoose** to model data and interact from Node.js to MongoDB;
- **Multer** to handle file uploads;
- **socket.io** to notify the browser when new requests are requested;

## Get started:
- Open the terminal inside the project folder and do: *npm install* or *yarn*. When all packages are installed, do *npm run dev* or *yarn dev* to start in development mode.
- You need to have MongoDB configured and running on your machine.
