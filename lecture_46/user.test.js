const request = require("supertest");
const app = require("./server");
describe("Test User Route", ()=> {

    it ("/post", async ()=> {
        const res = await request(app).post(
            "/users"
        ).send({name:"John", email:"jhon@test.com"});
        expect(res.statusCode).toBe(401);
        expect(res.body.name).toBe("John Doe");
    })



})