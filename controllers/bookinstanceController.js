const BookInstance = require("../models/bookinstance")
const asyncHandler = require("express-async-handler");

exports.bookinstance_list = asyncHandler(async (req, resizeBy, next)=>{
    res.send("NOT IMPLEMENTED: BookInstance list.")
})

exports.bookinstance_detail = asyncHandler(async (req, res, next)=>{
    res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`)
})

exports.bookinstance_create_get = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Bookinstance create get.")
})

exports.bookinstance_create_post = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: BookInstance create post.")
})

exports.bookinstance_update_get = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: BookInstance update get.")
})

exports.bookinstance_update_post = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: BookInstance update post.")
})

exports.bookinstance_delete_get = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: BookInstance delete get.")
})

exports.bookinstance_delete_post = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: BookInstance delete post.")
})