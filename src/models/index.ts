
import mongoose from 'mongoose'
const config = require('../config/env/config')()

class Database {
  public connect () {
    mongoose.connect(config.dbURL, { useNewUrlParser: true, useCreateIndex: true })
    mongoose
      .connection
      .on('connected', this.log.bind(this, `Mongoose connected to ${config.dbname}`))
      .on('error', this.log.bind(this, `Mongoose connection error:`))
      .on('disconnected', this.log.bind(this, `Mongoose disconnected from ${config.dbname}`))
  }

  public closeConnection () {
    mongoose.connection.close()
  }

  private log (message: string, aditionalInfo?: any) {
    const msg = (!!message && !!aditionalInfo) ? `${message} ${aditionalInfo}` : `${message}`
    console.log(msg)
  }
}

export default new Database()
