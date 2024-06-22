const express = require('express');
const qrcode = require('qrcode')
exports.qrcode = (request,response)=>{
const url = request.body.url;
// response.send(url)
try{
    if(url.length==0){
        response.status(400).json({'message':'No url found of empty url'})
    }else{
        qrcode.toDataURL(url,(err,url)=>{
          response.status(200).send(url)
        })
    }
}catch(error){
    response.status(404).json({'message':"Server error please try again",error})
}

}