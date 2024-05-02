# Inventory Application

Sistem manajemen inventaris yang memungkinkan pengguna untuk menambah, melihat, memperbarui, dan menghapus item inventaris. Anda dapat menyediakan fitur pemfilteran untuk memudahkan pengguna dalam mencari dan mengelola inventaris.

## Directory Structure

    ├── src
    │    ├── config
    │    ├── domain
    │    ├── middleware
    │    ├── public
    │    ├── utils
    │    ├── views
    │    ├── app.js
    ├── .env.template
    ├── .gitignore
    ├── package.json
    ├── README.md
    ├── server.js
    └── yarn.lock

1. **src**: Direktori kode sumber dari aplikasi yang teroranisir terorganisir.

   - **config**: Direktori yang berisi file konfigurasi basis data, konfigurasi server, atau variabel lingkungan (environment variables).

   - **domain**: Direktori yang berisi kode yang berhubungan dengan domain atau logika bisnis dari aplikasi , seperti model, service, atau controller.

   - **middleware**: Direktori yang berisi middleware kustom yang digunakan dalam aplikasi.

   - **public**: Direktori yang berisi file statis seperti gambar, stylesheet, atau file JavaScript yang akan disajikan secara langsung oleh server web (tanpa diproses oleh aplikasi).

   - **utils**: Direktori yang berisi utilitas atau fungsi pembantu yang digunakan dalam aplikasi.

   - **views**: Direktori yang berisi file-file template (misalnya, file EJS atau Pug) yang digunakan untuk merender halaman web.

   - **app.js**: Berkas utama aplikasi, di sini biasanya akan menginisialisasi dan mengkonfigurasi aplikasi Express.js.

2. **.env.template**: Template file untuk file lingkungan (environment variables). Ini berisi variabel-variabel yang diperlukan oleh aplikasi dengan nilai default.

3. **.gitignore**: File ini berisi daftar file dan direktori yang akan diabaikan oleh Git saat melakukan commit ke repositori.

4. **package.json**: Berkas metadata untuk proyek Node.js. Ini berisi informasi tentang proyek Anda, dependensi yang digunakan, skrip untuk menjalankan aplikasi, dan informasi lainnya yang berkaitan dengan proyek Node.js.

5. **README.md**: Berkas Markdown yang berisi dokumentasi singkat tentang proyek.

6. **server.js**: Berkas utama yang berfungsi sebagai entry point dari aplikasi. Ini adalah tempat Anda menjalankan server Express.js Anda.

7. **yarn.lock**: Berkas ini digunakan oleh Yarn (manajer paket untuk Node.js).

## Shema DB

**Product**

- \_id : string | uuid
- title : string
- price : number
- category : string
- supplier : string

**Category**

- \_id : string | uuid
- title : string

**Supplier**

- \_id : string | uuid
- title : string

**User**

- \_id : string | uuid
- name : string
- username : string
- password : string

## API Method & Routing

**Product**

> GET /api/v1/product

> GET /api/v1/product?id={id}

> POST /api/v1/product

```
{
    "title" : "Test",
    "price" : 10000,
    "category" : "Test Kategori",
    "supplier" : "Test Supplier"
}
```

> PUT /api/v1/product=?id={id}

```
{
    "title" : "Test",
    "price" : 10000,
    "category" : "Test Kategori",
    "supplier" : "Test Supplier"
}
```

> DELETE /api/v1/product=?id={id}

**Category**

> GET /api/v1/category

> GET /api/v1/category?id={id}

> POST /api/v1/category

```
{
    "title" : "Test",
}
```

> PUT /api/v1/category=?id={id}

```
{
    "title" : "Test"
}
```

> DELETE /api/v1/category=?id={id}

**Supplier**

> GET /api/v1/supplier

> GET /api/v1/supplier?id={id}

> POST /api/v1/supplier

```
{
    "title" : "Test",
}
```

> PUT /api/v1/supplier=?id={id}

```
{
    "title" : "Test"
}
```

> DELETE /api/v1/supplier=?id={id}

**User**

> GET /api/v1/user

> GET /api/v1/user?id={id}

> POST /api/v1/user

```
{
    "name" : "Test",
    "username" : "test12",
    "password" : "test12",
}
```

> PUT /api/v1/user=?id={id}

```
{
    "name" : "Test",
    "username" : "test12",
    "password" : "test12",
}
```

> DELETE /api/v1/user=?id={id}

## Setup & Running

> yarn install

Instal semua depensi yang dibutuhkan, serta lakukan setup penyesuaian kofigurasi di .env (environtment)

> yarn start

Lakukan ini untuk menjalankan proyek
