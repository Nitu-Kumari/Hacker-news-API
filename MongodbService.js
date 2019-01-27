const { MongoClient, ObjectId } = require('mongodb');
const dbName = "demo";
const url = "mongodb://localhost:27017";

class MongodbService{
  async init(){
    const client = await MongoClient.connect(url);
    this.db = client.db(dbName);
  }

  
  async addRegistration(registration){
  const newRegistration =  await this.db.collection('registrations').findOneAndUpdate(
        {name: registration.name},
        {$set: registration},
        { upsert: true });

        // console.log('newUser', newUser)
        // return {...user, _id: newUser.lastErrorObject.upserted, ...newUser.value }
        }

  
}


module.exports = MongodbService;