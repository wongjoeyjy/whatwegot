module.exports = (db) => {

    const allItems = (req, res) => {

        console.log("allItems controller triggered");

        const userId = req.params.id;

        db.items.getAllItems(userId, (err, result) => {
            if (err) {
                console.log("Error at items controller, allItems ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })

    }

    const addItem = (req, res) => {

        console.log("addItem controller triggered");

        let { name, quantity, purchaseDate, expiryDate, description, userId } = req.body;

        db.items.getAddItem(name, quantity, purchaseDate, expiryDate, description, userId, (err, result) => {
            if (err) {
                console.log("Error at items controller, addItem ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const itemDetails = (req, res) => {

        console.log("itemDetails controller triggered");

        let itemId = req.params.id;

        db.items.getItemDetails(itemId, (err, result) => {
            if (err) {
                console.log("Error at items controller, itemDetails ===", err.message);
            }
            else {
                res.send(result.rows[0]);
            }
        })
    }

    const editItem = (req, res) => {

        console.log("editItem controller triggered");

        let { name, quantity, purchaseDate, expiryDate, description, itemId } = req.body;

        db.items.getEditItem(name, quantity, purchaseDate, expiryDate, description, itemId, (err, result) => {
            if (err) {
                console.log("Error at items controller, editItem ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const deleteItem = (req, res) => {

        console.log("deleteItem controller triggered");

        let itemId = req.params.id;

        db.items.getDeleteItem(itemId, (err, result) => {
            if (err) {
                console.log("Error at items controller, deleteItem ===", err.message);
            }
            else {
                res.send("Item deleted!");
            }
        })
    }

    const searchResults = (req, res) => {

        console.log("searchResults controller triggered");

        let userId = req.params.id;
        let searchQuery = req.params.query;

        db.items.getSearchResults(userId, searchQuery, (err, result) => {
            if (err) {
                console.log("Error at items model, searchResults ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    return {
        allItems,
        addItem,
        itemDetails,
        editItem,
        deleteItem,
        searchResults
    }

}