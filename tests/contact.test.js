const request = require("supertest");
const app = require("../app");
require("dotenv").config({ path: ".env.testing" });
const mongoose = require("mongoose");
const Contact = require("../models/contact.model");

beforeEach((done) => {
  mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

describe("GET /contact/:id", () => {
  it("Should return a contact", async () => {
    const contact = await Contact.create({ name: "Test User" });
    const res = await request(app).get(`/api/contact/${contact._id}`).send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toEqual(contact.name);
  });

  it("Should return null if contact dont exist", async () => {
    const res = await request(app)
      .get(`/api/contact/${mongoose.Types.ObjectId()}`)
      .send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(null);
  });

  it("Should return error when passing invalid id", async () => {
    const res = await request(app).get(`/api/contact/invalidID}`).send();
    expect(res.statusCode).toEqual(400);
  });
});

describe("POST /contact", () => {
  it("Should create a contact", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "Test User",
      email: "test@user.com",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  });

  it("Fail without required name field", async () => {
    const res = await request(app).post("/api/contact").send({
      email: "test@user.com",
    });
    expect(res.statusCode).toEqual(400);
  });

  it("Fail with unexpected fields", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "Test",
      email: "test@user.com",
      surname: "User",
    });
    expect(res.statusCode).toEqual(400);
  });
});
