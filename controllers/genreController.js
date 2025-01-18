const Genre = require("../models/genre")
const asyncHandler = require("express-async-handler")

exports.genre_list = asyncHandler(async (req, resizeBy, next)=>{
    res.send("NOT IMPLEMENTED: Genre list.")
})

exports.genre_detail = asyncHandler(async (req, res, next)=>{
    res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`)
})

exports.genre_create_get = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Genre create get.")
})

exports.genre_create_post = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Genre create post.")
})

exports.genre_update_get = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Genre update get.")
})

exports.genre_update_post = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Genre update post.")
})

exports.genre_delete_get = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Genre delete get.")
})

exports.genre_delete_post = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Genre delete post.")
})