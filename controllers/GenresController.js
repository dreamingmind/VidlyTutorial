class GenresController
{
    static data = [
        {id: 1, name: 'SciFi'},
        {id: 2, name: 'Mystery'},
    ]

    index = function() {
        return GenresController.data;
    }

    /**
     *
     * @param id
     * @returns {{name: string, id: number}|{name: string, id: number}} | undefined
     */
    view = function(id) {
        return this.findById(id);
    }

    findById(id) {
        return GenresController.data.find(
            (element, index, collection) => {
                if (element.id === +id) return element;
            })
    }
}

module.exports = new GenresController();
