const db = require('../db')

class DataController {

    // name

    async titleEquals(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where name = \'${text_field}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }
    
    async titleContains(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where name LIKE \'${"%" + text_field + "%"}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async titleMore(req, res) {
        try {
            const {text_field_length} = req.body

            const elements = await db.query(`select * from "data" where length(name) > \'${text_field_length}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async titleLess(req, res) {
        try {
            const {text_field_length} = req.body

            const elements = await db.query(`select * from "data" where length(name) < \'${text_field_length}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }



    // quantility
    async quantilityEquals(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where quantility = \'${Number(text_field)}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async quantilityContains(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where quantility::Text LIKE \'${"%" + text_field + "%"}\'`)

            res.json(elements.rows)
        } catch(e) {
            // console.log(e)
            res.status(400).json(e)
        }
    }

    async quantilityMore(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where quantility > \'${text_field}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async quantilityLess(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where quantility < \'${text_field}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }


    // distance
    async distanceEquals(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where distance = \'${Number(text_field)}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async distanceContains(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where distance::Text LIKE \'${"%" + text_field + "%"}\'`)

            res.json(elements.rows)
        } catch(e) {
            res.status(400).json(e)
        }
    }

    async distanceMore(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where distance > \'${text_field}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async distanceLess(req, res) {
        try {
            const {text_field} = req.body

            const elements = await db.query(`select * from "data" where distance < \'${text_field}\'`)

            res.json(elements.rows)
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }
    
}

module.exports = new DataController()