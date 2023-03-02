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
     * @param id
     * @returns {{name: string, id: number}|{name: string, id: number}} | undefined
     */
    view = function(id) {
        return this.findById(id);
    }

    edit = function(id) {
        let index = this.findIndexOf(id);
        if (!index) return false;
        /**
         * We need the request in here to do the edit.
         * The best approach is probably to send it as a constructor arg.
         * We could also send the response object for completeness.
         */
    }

    findById(id) {
        return GenresController.data.find(
            (value, index, collection) => {
                if (value.id === +id) return value;
            })
    }
    
    findIndexOf(id) {
        return GenresController.data.find(
            (value,index,obj) => {
                if (value.id === +id) return index;
            }
        )
    }
}

module.exports = new GenresController();
