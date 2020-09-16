'use strict'
const Hapi=require('hapi')
const mongoose = require('mongoose');
const imdb=require('./web.json');
const imdbs=require('./mdata')
const database=require('./dbmongo');


const server = new Hapi.Server({  
    host: 'localhost',
    port: 4000
})

server.route({
    path: '/',
    method: 'GET',
    handler: (req,h) => {
        return ('Hello, world');
    }
});

// insert
server.route({
    path: '/data',
    method: ['POST'],
    handler: async(req,h) => {
        try {
            let insert = await imdbs.create(imdb)
            return insert;
        } catch (error) {
            return error;
        }
    }
});


server.route({
    path: '/data',
    method: ['GET'],
    handler: async(req,h) => {
        console.log("getting all");
        try {
            let query= await imdbs.find({})
            return query;
        } catch (error) {
            return error;
        }
    }
});


server.route({
    path: '/data/{rank}',
    method: ['GET'],
    handler: async(req,h) => {
        console.log("getting by rank");
        try {
            let query= await imdbs.findOne({rank:req.params.rank})
            return query;
        } catch (error) {
            return error;
        }
    }
});

server.route({
    path: '/data/{rank}',
    method: ['PUT'],
    handler: async(req,h) => {
        console.log("UPdating");
        try {
            let query= await imdbs.findOneAndUpdate({rank:req.params.rank},{$set:req.payload})
            return query;
        } catch (error) {
            return error;
        }
    }
});

server.route({
    path: '/data/{rank}',
    method: ['DELETE'],
    handler: async(req,h) => {
        console.log("deleting");
        try {
            let query= await imdbs.findOneAndDelete({rank:req.params.rank})
            return "secuessfully delete!";
        } catch (error) {
            return error;
        }
    }
});

server.start((err)=>{
    if(err){
        throw err;
    }
})
console.log(`server running at : ${server.info.uri}`)