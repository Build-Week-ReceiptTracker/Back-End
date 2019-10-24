const request = require("supertest");
const server = require("./server");

// testing registration
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
      it("throws error if incorrect login info is send", ()=>{
        const res = request(server).post("/api/login").send({	"username":"test1",

        "password": "test1"})
      })
      expect({
        "message": "Welcome test1!",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwic3ViamVjdCI6MSwiaWF0IjoxNTcxOTE5NTkxLCJleHAiOjE1NzE5NDgzOTF9.r3V7iFWSeOWHBU2Ws7RTEplG8aJZRScpYOJWHiIuNys"
      })
   
  
      })})

//testing login 
 





/**
 * Testing get a receipt by giving an existing user
 */

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwic3ViamVjdCI6MSwiaWF0IjoxNTcxOTE1MzczLCJleHAiOjE1NzE5NDQxNzN9.GPPhhO4LFNChiDpAJVWUetjv--3M3Jp1iF8kgyEFYvg"

describe('GET /api/auth/receipts/all', function () {
    it('respond with json array of objects', function (done) {
        request(server)
     
            .get('/api/auth/receipts/all')
            .set("Authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwic3ViamVjdCI6MSwiaWF0IjoxNTcxOTE1MzczLCJleHAiOjE1NzE5NDQxNzN9.GPPhhO4LFNChiDpAJVWUetjv--3M3Jp1iF8kgyEFYvg"
         )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
 
})})

/**
 * Testing get a receipt endpoint by giving a non-existing receipt #
 */
describe('GET /api/auth/receipts/:id', function () {
    it('respond with json not found', function (done) {
        request(server)
            .get('/api/auth/receipts/5')
            .set("Authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwic3ViamVjdCI6MSwiaWF0IjoxNTcxOTE1MzczLCJleHAiOjE1NzE5NDQxNzN9.GPPhhO4LFNChiDpAJVWUetjv--3M3Jp1iF8kgyEFYvg")

            .set('Accept', 'application/json')
      
            .expect(404) //expecting HTTP status code
            .expect({"message":"Sorry a receipt with id # 5 could not be found"}) // expecting content value')
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

// /**
//  * Testing post  endpoint
//  */
describe('POST /api/auth/receipts/add', function () {
    let data = {
      "date_of_transaction": "2016-05-12",
      "user_username": "test1",
      "amount_spent": ".98",
      "category": "other",
      "merchant": "Other Store",
      "image_url": "https://res.cloudinary.com/receipt-tracker-upload/image/upload/v1571862461/Receitps/best-receipt-ever_pmn16q.jpg",
      "description": null
    }
    it('respond with 201 created', function (done) {

        request(server)



            .post('/api/auth/receipts/add')
            .set("Authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwic3ViamVjdCI6MSwiaWF0IjoxNTcxOTE1MzczLCJleHAiOjE1NzE5NDQxNzN9.GPPhhO4LFNChiDpAJVWUetjv--3M3Jp1iF8kgyEFYvg")

            .send(data)
            .set('Accept', 'application/json')
        
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// /**
//  * Testing post receipts endpoint for failure
//  */
describe('POST /api/auth/receipts/add', function () {
    let data = {
     //no user_username
     "date_of_transaction": "2016-05-12",
 
     "amount_spent": ".98",
     "category": "other",
     "merchant": "Other Store",
     "image_url": "https://res.cloudinary.com/receipt-tracker-upload/image/upload/v1571862461/Receitps/best-receipt-ever_pmn16q.jpg",
     "description": null
    }
    it('respond with 409 conflict', function (done) {
        request(server)
            .post('/api/auth/receipts/add')
            .set("Authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwic3ViamVjdCI6MSwiaWF0IjoxNTcxOTE1MzczLCJleHAiOjE1NzE5NDQxNzN9.GPPhhO4LFNChiDpAJVWUetjv--3M3Jp1iF8kgyEFYvg")

            .send(data)
            .set('Accept', 'application/json')
          
            .expect(409)
              .expect('{"error":"Please provide all required fields."}')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

  