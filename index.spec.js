const app = require("./index.js");
const request = require("supertest");
const should = require("should");

describe("GET /user is", () => {
  describe("성공시", () => {
    it("유저 객체를 담은 배열로 응답", (done) => {
      request(app)
        .get("/users")
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          done();
        });
    });
    it("최대 limit 갯수만큼 응답", (done) => {
      request(app)
        .get("/users?limit=2")
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });
  });
  describe("실패시", () => {
    it("limit이 숫자가 아닐 시 400 응답", (done) => {
      request(app).get("/users?limit=two").expect(400).end(done);
    });
  });
});

describe("GET /users/1 is", () => {
  describe("성공시", () => {
    it("id가 1인 유저 객체를 반환", (done) => {
      request(app)
        .get("/users/1")
        .end((err, res) => {
          res.body.should.have.property("id", 1);
          done();
        });
    });
  });
  describe("실패시", () => {
    it("숫자가 아닐 경우 400을 응답", (done) => {
      request(app).get("/users/one").expect(400).end(done);
    });
    it("없는 넘버를 찾는 경우", (done) => {
      request(app).get("/users/10").expect(404).end(done);
    });
  });
});

// describe("DELETE /delete");
