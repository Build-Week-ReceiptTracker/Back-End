const request = require("supertest");
const server = require("./server");


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
       const res =  request(server).post("api/register").send({ username: "testw",
        email:"mike@mike.com",
        password: "test1"})
       })
      it("throws error if login info is missing", () => {
        const res = request(server).post("/api/login");
        expect(res.status).toBe(500);
      });
    })});
  describe("Server.js login route ",()=>{
    describe("Attempt Login",()=>{
      const res =  request(server)
      .post('/api/login')
      .send({
        "username":"MIke",
        "password":"test"
      })
      expect(res.status)(409)

    })
  })

describe("Attempt to access auth route not logged in" ,() => {
   const res = request(server).get('/api/auth/receipts/all')
   expect(res).toBe({})
})
