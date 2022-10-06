const db = require('../db')

class DataController {
    
    async createElement(req, res) {
        try {
            const {date, name, quantility, distance} = req.body

            const newData = await db.query(`insert into "data" (date, name, quantility, distance) values ($1, $2, $3, $4) returning *`, [date, name, quantility, distance])    

            res.json(newData.rows[0])
        } catch(e) {
            console.log(e)
            res.status(409).json(e)
        }
    }

    async getElements(req, res) {
        try {
            const data = await db.query('select * from "data"')    
            res.status(200).json(data.rows)
        } catch(e) {
            console.log(e)
            res.status(409).json(e)
        }
    }

    async getOneElement(req, res) {
        try {
            const id = req.params.id

            const element = await db.query(`select * from "data" where id = $1`, [id])    
            
            res.json(element.rows[0])
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async updateElement(req, res) {
        try {
            const {id, name, quantility, distance} = req.body

            const element = await db.query(`UPDATE data set name = $1, 
            quantility = $2, distance = $3 where id = $4 RETURNING *`, [name, quantility, distance, id])    
            
            res.json(element.rows[0])
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async deleteElement(req, res) {
        try {
            const id = req.params.id

            const element = await db.query(`delete from "data" where id = $1`, [id])    
            
            res.json(element.rows[0])
        } catch(e) {
            console.log(e)
            res.status(400).json(e)
        }
    }
}

module.exports = new DataController()