const router = require("express").Router()

const protect = require("../middleware/authMiddleware")

const {
 createTask,
 getTasks,
 updateTask,
 deleteTask,
 toggleTaskStatus
} = require("../controllers/taskController")

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management APIs
 */


/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */
router.post("/",protect,createTask)



/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */
router.get("/",protect,getTasks)



/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 */
router.put("/:id",protect,updateTask)



/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags: [Tasks]
 */
router.delete("/:id",protect,deleteTask)



/**
 * @swagger
 * /api/v1/tasks/{id}/status:
 *   patch:
 *     summary: Toggle task status
 *     tags: [Tasks]
 */
router.patch("/:id/status",protect,toggleTaskStatus)

module.exports = router