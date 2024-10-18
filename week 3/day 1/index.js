const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://amarhismoni123:RgS5Gi3SIgALqNY4@fma-node.pt6yc.mongodb.net/week3", {})
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

// const userSchema = new mongoose.Schema({
//   name: { type: String, require: true },
//   email: { type: String, require: true, unique: true },
//   age: { type: Number },
// });

// const productSchema = new mongoose.Schema({
//   name: { type: String, require: true },
//   price: { type: Number, require: true },
// });

// const User = mongoose.model("User", userSchema);
// const Product = mongoose.model("Product", productSchema);

// const user = new User({
//   name: "James Bond",
//   email: "james0047@gmail.com",
//   age: 43,
// });

// user
//   .save()
//   .then((user) => console.log("User created", user))
//   .catch((err) => console.log("Error creating user", err));

// User.findByIdAndUpdate("66e8711e67d3b3d47d6a5dbf", { age: 31 })
//   .then((users) => console.log("Update update:", users))
//   .catch((err) => console.error("Error updating user:", err));

// User.findByIdAndDelete("66e8711e67d3b3d47d6a5dbf", { age: 31 })
//   .then((users) => console.log("Update delete:", users))
//   .catch((err) => console.error("Error updating user:", err));

// User.find()
//   .then((users) => console.log("All users:", users))
//   .catch((err) => console.error("Error fetching users:", err));

// Create an array of 25 users
const users = [
  { name: "Alice", email: "alice@example.com", age: 25 },
  { name: "Bob", email: "bob@example.com", age: 30 },
  { name: "Charlie", email: "charlie@example.com", age: 35 },
  { name: "David", email: "david@example.com", age: 40 },
  { name: "Eve", email: "eve@example.com", age: 28 },
  { name: "Frank", email: "frank@example.com", age: 33 },
  { name: "Grace", email: "grace@example.com", age: 27 },
  { name: "Hank", email: "hank@example.com", age: 36 },
  { name: "Ivy", email: "ivy@example.com", age: 24 },
  { name: "Jack", email: "jack@example.com", age: 22 },
  { name: "Karen", email: "karen@example.com", age: 45 },
  { name: "Leo", email: "leo@example.com", age: 31 },
  { name: "Mandy", email: "mandy@example.com", age: 29 },
  { name: "Nick", email: "nick@example.com", age: 38 },
  { name: "Olivia", email: "olivia@example.com", age: 32 },
  { name: "Paul", email: "paul@example.com", age: 26 },
  { name: "Quincy", email: "quincy@example.com", age: 34 },
  { name: "Rachel", email: "rachel@example.com", age: 37 },
  { name: "Sam", email: "sam@example.com", age: 23 },
  { name: "Tina", email: "tina@example.com", age: 41 },
  { name: "Uma", email: "uma@example.com", age: 30 },
  { name: "Victor", email: "victor@example.com", age: 33 },
  { name: "Wendy", email: "wendy@example.com", age: 39 },
  { name: "Xander", email: "xander@example.com", age: 28 },
  { name: "Yvonne", email: "yvonne@example.com", age: 29 },
];

// Insert the users into the database
// User.insertMany(users)
//   .then((userdata) => {
//     console.log("Users inserted successfully", userdata);
//   })
//   .catch((err) => {
//     console.log("Error inserting users: ", err);
//   });

// User.find()
//   .then((users) => console.log("All users:", users))
//   .catch((err) => console.error("Error fetching users:", err));

// const page = 2;
// const limit = 5;

// User.find()
//   .skip((page - 1) * limit)
//   .limit(limit)
//   .then((users) => console.log("Paginated users:", users))
//   .catch((err) => console.error("Error fetching paginated users:", err));

// async function performTransaction() {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const user = new User({ name: "Alice", email: "alic2@example.com" });
//     await user.save({ session });

//     const product = new Product({ name: "Laptop", price: 1200 });
//     await product.save({ session });

//     await session.commitTransaction();
//     console.log("Transaction successful");
//   } catch (err) {
//     await session.abortTransaction();
//     console.error("Transaction failed:", err);
//   } finally {
//     session.endSession();
//   }
// }
// performTransaction();

const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post", postSchema);
const Comment = mongoose.model("Comment", commentSchema);

async function createPostWithComments() {
  const comment1 = new Comment({ text: "Great post!", author: "John" });
  const comment2 = new Comment({ text: "Very helpful", author: "Jane" });
  await comment1.save();
  await comment2.save();

  const post = new Post({
    title: "MongoDB Relationships",
    content: "This is a blog post",
    comments: [comment1._id, comment2._id],
  });
  await post.save();
  console.log("Post with comments created");
}
createPostWithComments();