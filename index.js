const mongoose = require('mongoose');
const app = require("./app")
const dotenv = require('dotenv');
dotenv.config()



const port= process.env.RUNNING_PORT || 5000



mongoose.connect(`${process.env.DATABASE_ATLAST}`)
.then(()=>{
    console.log(`Database connection is successful ` );
    
    app.listen(port, () => {
        console.log(`Server Running on Port ${port}`)
    })
});
  


