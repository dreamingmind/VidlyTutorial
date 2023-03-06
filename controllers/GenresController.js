class GenresController
{
    data = [
        {id: 1, name: 'SciFi'},
        {id: 2, name: 'Mystery'},
    ]

    /**
     * @returns {[{name: string, id: number},{name: string, id: number}]}
     */
    index() {
        return this.data;
    }

    /**
     * @param id
     * @returns {{name: string, id: number}|{name: string, id: number}} | undefined
     */
    view(id) {
        return this.findById(id);
    }

    /**
     * @todo This should validate 'data' in a 'Table'?
     *
     * @param {{name}} data
     * @returns {{name, id: *}}
     */
    add(data) {
        let genre = {
            "name": data.name,
            "id": this.getNewId()
        }
        this.data.push(genre);
        return genre;
        // let index = this.findIndexOf(id);
        // if (!index) return false;
        /**
         * We need the request in here to do the edit.
         * The best approach is probably to send it as a constructor arg.
         * We could also send the response object for completeness.
         *
         * I've updated the constructor, but it does nothing yet
         * because the 'new GenresController' is in our export
         * and so, the values never get called.
         *
         * The calling/requiring code knows the req/res, so
         * we'll have to move the construction/new call there.
         */
    }

    findById(id) {
        return this.data.find(
            (value, index, collection) => {
                if (value.id === +id) return value;
            })
    }
    
    findIndexOf(id) {
        return this.data.find(
            (value,index,obj) => {
                if (value.id === +id) return index;
            }
        )
    }

    /**
     * @todo This should be abstracted to a 'Table'?
     *
     * @returns {*}
     */
    getNewId() {
        return this.data[this.data.length - 1].id + 1;
    }
}

module.exports = new GenresController();
