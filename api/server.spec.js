const request = require("supertest");
const server = require("./server");

let token; //Saving token

describe("server.js accessing routes", () => {
    describe("Attempt Registration", () => {
      it("returns 200 ok", async () => {
        const res = await request(server)
          .post("/api/register")
          .send({
            username: "testw1",
            email:"mike1@mike.com",
            password: "test11"
          });
        expect(res.status).toBe(500);
      })
      it("throws error if username or email has already been used", () =>{
       const res =  request(server).post("api/register").send({      username: "testw",
        email:"mike@mike.com",
        password: "test1"})

  
      })
      it("throws error if login info is missing", () => {
        const res = request(server).post("/api/login");
        expect(res.status).toBe(500);
      });
    })});
  describe("server.js accessing routes",()=>{
    describe("Attempt Login",()=>{
      const res =  request(server)
      .post('/api/login')
      .send({
        "username":"MIke",
        "password":"test"
      })
      expect(status).toBe(409)
    })
  })

