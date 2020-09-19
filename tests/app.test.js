const request = require("supertest");
const app = require("../app.js");

describe("User API", () => {
  it("should show all users", async (done) => {
    const res = await request(app).get("/event");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
});
