class GenresController
{
    static data = [
        {id: 1, name: 'SciFi'},
        {id: 2, name: 'Mystery'},
    ]

    index = function() {
        return GenresController.data;
    }

}

module.exports = new GenresController();
