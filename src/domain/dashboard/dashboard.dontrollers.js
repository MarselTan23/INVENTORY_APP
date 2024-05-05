const CategoryServices = require("../category/category.services");
const ProductServices = require("../products/Product.services");
const SupplierServices = require("../suppliers/supplier.services");




class DashboardController {
    static async v_index(request, response, next) {
        var products = await ProductServices.get()
        var categories = await CategoryServices.get();
        response.render('dashboard/index.ejs', {
            title: "Dashboard", products: products,
            categories: categories
        });
    }
    static async index(req, res, next) {
        const categoryId = req.params.categoryId;
        var categories = await CategoryServices.get();
        var suppliers = await SupplierServices.get();

        if (categoryId == 'all') {
            var product = await ProductServices.get();
            return res.json({
                message: "success get data",
                data: product,
                product_length: product.length,
                supplier_length: suppliers.length,
                category_length: categories.length
            });
        } else {
            var category = await CategoryServices.getById(categoryId);
            var product = await ProductServices.getByCategory(category.title);
            return res.json({
                message: "success get data",
                data: product,
                product_length: product.length,
                supplier_length: suppliers.length,
                category_length: categories.length
            });
        }
    }
}



module.exports = DashboardController;