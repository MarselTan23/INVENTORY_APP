const formatCurrency = require("../../utils/currency");
const CategoryServices = require("../category/category.services");
const SupplierServices = require("../suppliers/supplier.services");
const ProductServices = require("./Product.services");

class ProductController {
  // Controller get Product
  static async get(request, response, next) {
    try {
      const { id } = request.query;
      if (id) return response.json(await ProductServices.getById(id));
      return response.json(await ProductServices.get());
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller store Product
  static async store(request, response, next) {
    try {
      return response.json(await ProductServices.store(request.body));
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller update Product
  static async update(request, response, next) {
    try {
      return response.json(
        await ProductServices.update(request.query.id, request.body)
      );
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller delete Product
  static async delete(request, response, next) {
    try {
      return response.json(await ProductServices.delete(request.query.id));
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller view product/index
  static async v_index(request, response, next) {
    let products = await ProductServices.get();
    products = products.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: formatCurrency(product.price),
        category: product.category,
        supplier: product.supplier,
      };
    });
    response.render("product/index", {
      title: "Product",
      data: products,
    });
  }

  // Controller view add
  static async v_add(request, response, next) {
    if (request.method == "GET") {
      const categories = await CategoryServices.get();
      const suppliers = await SupplierServices.get();
      response.render("product/add", {
        title: "Add Product",
        data: {
          categories,
          suppliers,
        },
      });
    } else {
      await ProductServices.store(request.body);
      response.redirect("/product");
    }
  }

  // Controller view edit
  static async v_edit(request, response, next) {
    const { id } = request.query;
    if (request.method == "GET") {
      const product = await ProductServices.getById(id);
      const categories = await CategoryServices.get();
      const suppliers = await SupplierServices.get();
      response.render("product/edit", {
        title: "Edit Product",
        data: {
          product,
          categories,
          suppliers,
        },
      });
    } else {
      await ProductServices.update(id, request.body);
      response.redirect("/product");
    }
  }

  // Controller view delete
  static async v_delete(request, response, next) {
    const { id } = request.query;
    if (!id) return ProductServices.redirect("/product");
    await ProductServices.delete(id);
    return response.redirect("/product");
  }
}

module.exports = ProductController;
