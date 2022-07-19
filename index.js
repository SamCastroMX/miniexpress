const express =  require('express');


const app = express();

app.listen(process.env.PORT || 3000)


const router = express.Router();

router.get("/sam",(req,res)=> res.json("hola"));

app.use(router);