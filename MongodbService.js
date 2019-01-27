const { MongoClient } = require("mongodb");
const dbName = "hacker";
const url = "mongodb://localhost:27017";

class MongodbService {
  async init() {
    const client = await MongoClient.connect(url);
    this.db = client.db(dbName);
  }

  async registration(user) {
    await this.db
      .collection("users")
      .findOneAndUpdate(
        { username: user.username },
        { $set: user },
        { upsert: true }
      );
    delete user.password;
    return user;
  }

  async login(user) {
    const existUser = await this.db
      .collection("users")
      .findOne({ username: user.username });
    // if user doesn't exist then return null
    if (!existUser) {
      return null;
    }
    if (existUser.password === user.password) {
      // delete password
      delete existUser.password;
      return existUser;
    } else {
      return null;
    }
  }

  async getUser(username) {
    const existUser = await this.db.collection("users").findOne({ username });
    return existUser;
  }
}
module.exports = MongodbService;
