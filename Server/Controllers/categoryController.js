module.exports = {
    getCategoryList: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_category_list()
        .then(categories=> {
            res.status(200).send(categories)
        })
        .catch(err=> {  
            console.log(err)         
            res.status(500).send('Something went wrong, unable to get category list!')
            
        })       
    },
}