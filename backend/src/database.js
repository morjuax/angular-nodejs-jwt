import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/angular-auth", {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));

// export default mongoose;
