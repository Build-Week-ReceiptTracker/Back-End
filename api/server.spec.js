<<<<<<< HEAD
const request = require('supertest');
const server = require("./server");

describe("server.js accessing routes",()=>{
  describe("Attempting endpoints",() =>{
   it("returns 404 error ,",async ()=>{
   const res = await request(server)
  .post("/")
  .send("")
  expect(res.status).toBe(404,)
   })
   it("throws error if information is not correct or entered", async ()=>{
     const res = await request(server).post("/");
     expect(res.status).toBe(404);
   })
  })
=======
const request = require("supertest")
const server = require("./server")

describe("Sever starts with out crashing",()=>{
    describe("npm run server",()=>{
     it("Api Up on 5000" ,async()=>{
        const res = await request(server)
            .then()
            .catch()
            expect(res.status).toBe();
        });
 
    });

>>>>>>> Mike_Harley
})