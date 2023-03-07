class GenresController
{
    data = [
        {id: 1, name: 'SciFi'},
        {id: 2, name: 'Mystery'},
    ]

    Joi = require('joi');

    schema = this.Joi.object({
        name: this.Joi.string()
            .pattern(/^[a-zA-Z_ -]{3,100}$/)
            .required(),
        id: this.Joi.number()
    })

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
     * @param {{name}} data
     * @returns {{name, id: *}}
     */
    add(data) {
        let genre = {
            "name": data.name,
            "id": this.getNewId()
        }

        let { error } = this.schema.validate(genre);
        if(error) return {
            error: error.message,
            post_data: data
        };

        this.data.push(genre);
        return genre;
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
