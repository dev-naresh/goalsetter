const asyncHandler = require('express-async-handler')

// Get goals
const getGoals = asyncHandler( async(req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// Set goals
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please send the text')
    }

    res.status(200).json({message: 'Set goals'})
})

// Update goals
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
})

// Delete goals
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}