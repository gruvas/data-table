const Router = require('express')

const dataController = require('../controler/data.controller')

const router = new Router()


// /api/data/
// Созданиеи элемента
router.post('/create-element', dataController.createElement)
// Получение всех элементов
router.get('/get-elemnt', dataController.getElements)
// Получение элемента по id
router.get('/get-elemnt/:id', dataController.getOneElement)
// Обновление
router.put('/update-element', dataController.updateElement)
// Удаление элемента
router.delete('/delete-element/:id', dataController.deleteElement)


module.exports = router
