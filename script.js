const mongoose = require('mongoose');
const User = require('./User')
mongoose.connect("mongodb://localhost/testdb")

run();
async function run() {
    try {
        const user = await User.create({
            name: "Ashish",
            age: 24,
            email: "Test@test.com",
            hobbies: ["Weight Lifting", "Bowling"],
            address: {
                street: "Main St.",
                city: "Kangra"
            }
        })
        // const user = new User({
        //     name: "Ashish",
        //     age: 34
        // })
        user.createAt = 5
        user.name = "Sally"
        await user.save()
        console.log("User save", user)

    } catch (e) {
        console.log(e.message);
    }

}
CheckData()
async function CheckData() {
    try {
        // const user = await User.findById("66068d671ff1e1f1ece0ce37");

        // const user = await User.findOne({name:"Sally"});

        // const user = await User.exists({name:"Sally"});

        // const user = await User.deleteOne({name:"Sally"});

        // const user = await User.where("name").equals("Ashish");

        // const user = await (await User.where("age").gt("12").lt("56").where("name").equals("Ashish"));


        // const user = await User.where("age").gt("12").where("name").equals("Ashish").populate('bestFriend').limit(1);
        // const user = await User.findByName("Sally");
        // const user = await User.where().byName("Sally");
        const user = await User.findOne({ name: 'Sally', email: "t@test.com" });
        console.log(user)
        await user.save()
        console.log(user.namedEmail)
        // user.sayHi()


    } catch (e) {
        console.log(e.message);
    }
}