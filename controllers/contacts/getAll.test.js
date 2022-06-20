import express from "express";
import request from "supertest";
import contacts from "./index.js";

const { getAll } = contacts;
const app = express();
const server = app.listen(3000);
app.get("/api/contacts", getAll);

describe("test getAll controller", () => {
  beforeAll(() => server);
  afterAll(() => server.close());

  test("getAll return status 200", async () => {
    const response = await request(app).get("/api/contacts");
    expect(response.status).toBe(200);
  });

  test("getAll return products array", async () => {
    const response = await request(app).get("/api/contacts");
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("id is string", async () => {
    const response = await request(app).get("/api/contacts");
    const [product] = response.body;
    expect(typeof product._id).toBe("string");
  });

  test("name is string", async () => {
    const response = await request(app).get("/api/contacts");
    const [product] = response.body;
    expect(typeof product.name).toBe("string");
  });

  test("phone is string", async () => {
    const response = await request(app).get("/api/contacts");
    const [product] = response.body;
    expect(typeof product.phone).toBe("string");
  });

  test("email is string", async () => {
    const response = await request(app).get("/api/contacts");
    const [product] = response.body;
    expect(typeof product.email).toBe("string");
  });
});
