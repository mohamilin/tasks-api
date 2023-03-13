const httpStatus = require('http-status');
const catchAsync = require('../../utils/catch-error');
const TaskService = require('./service');

const getAll = catchAsync(async (req, res) => {
    const tasks = await TaskService.getAll()
    return res.status(200).json({
        success: true,
        data: tasks
    })
})

const create = catchAsync(async (req, res) => {
    const tasks = await TaskService.create(req.body)
    return res.status(200).json({
        success: true,
        data: tasks
    })
})

const getById = catchAsync(async (req, res) => {
    const {id} = req.params;
    const task = await TaskService.getById(id);
    if(!task) return res.status(httpStatus.NOT_FOUND).json({
        success:false,
        message: 'Data Not Found'
    });


    return res.status(200).json({
        success: true,
        data: task
    })
})

const update = catchAsync(async (req, res) => {
    const {id} = req.params;
    const task = await TaskService.getById(id);
    if(!task) return res.status(httpStatus.NOT_FOUND).json({
        success:false,
        message: 'Data Not Found'
    });

    await TaskService.update({id, payload:req.body})
    return res.status(200).json({
        success: true,
        message: 'Successfully updated'
    })
})

const deleteTask = catchAsync(async (req, res) => {
    const {id} = req.params;
    const task = await TaskService.getById(id);
    if(!task) return res.status(httpStatus.NOT_FOUND).json({
        success:false,
        message: 'Data Not Found'
    });
    
    await TaskService.deleteTask(id)
    return res.status(200).json({
        success: true,
        message: 'Successfully deleted'
    })
})

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteTask
}