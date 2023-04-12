import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.json({msg:"Inicio"});
})

router.get("/nosotros",(req,res)=>{
    res.json({msg:"Nosotros"});
});

export default router;