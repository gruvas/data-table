const Router = require('express')

const filterController = require('../controler/filter.controller')

const router = new Router()


// /api/filter/

// Поле name
// Поле name равно запросу
router.post('/title-equals', filterController.titleEquals)

// Поле name содержит похожий текст из запроса
router.post('/title-contains', filterController.titleContains)

// Выборка элементов, больших по длинне
router.post('/title-more', filterController.titleMore)

// Выборка элементов, меньше по длинне
router.post('/title-less', filterController.titleLess)


// Поле quantility
// Равно
router.post('/quantility-equals', filterController.quantilityEquals)

// Ищет поля с совподающими цифрами
router.post('/quantility-contains', filterController.quantilityContains)

// Больше
router.post('/quantility-more', filterController.quantilityMore)

// Меньше
router.post('/quantility-less', filterController.quantilityLess)


// Поле distance
// Равно
router.post('/distance-equals', filterController.distanceEquals)

// Ищет поля с совподающими цифрами
router.post('/distance-contains', filterController.distanceContains)

// Больше
router.post('/distance-more', filterController.distanceMore)

// Меньше
router.post('/distance-less', filterController.distanceLess)


module.exports = router
