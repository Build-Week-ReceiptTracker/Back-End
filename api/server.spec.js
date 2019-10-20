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

})