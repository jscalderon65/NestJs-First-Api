# **CRUD en NestJs**

## **Descripción:**
<p style="text-align:justify">API de practica hecha con NestJs, en donde se manipula un archivo txt mediante la librería de node FileStream.</p>

## **Rutas**

### *getData()*
Retorna todo los datos del archivo txt.

* **URL**

  /crud/api/data

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Body**

  None
 
* **Error Response:**

    **Content:** `{ ErrorMsg: 'Failed' }`

### *getDataById()*
Retorna un objeto según su Id.

* **URL**

  /crud/api/element/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Body**

  None
 
* **Error Response:**

    **Content:** `{ ErrorMsg: 'Failed' }`

### *addNewData()*
Agrega un objeto al array que se encuentra en el archivo txt, retorna todos los datos del archivo.

* **URL**

  /crud/api/add

* **Method:**

  `POST`
  
*  **URL Params**
 
   `none`

* **Body**

    `{data:[]}`
 
* **Error Response:**

    **Content:** `{ ErrorMsg: 'Failed' }`

### *modifyDataById()*
Modifíca un objeto según su Id en el array que se encuentra en el archivo txt, retorna el objeto modificado.

* **URL**

  /crud/api/modify/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Body**

    `{data:[]}`
 
* **Error Response:**

    **Content:** `{ ErrorMsg: 'Failed' }`

### *deleteElementById()*
Elimina un objeto según su Id en el array que se encuentra en el archivo txt, retorna todos los datos del archivo txt.

* **URL**

  /crud/api/delete/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Body**

  None
 
* **Error Response:**

    **Content:** `{ ErrorMsg: 'Failed' }`

<hr/>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
