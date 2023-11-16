//0xb7467b9A79Cd8174402E2BccA209Ed6374d97022
//https://eth-sepolia.g.alchemy.com/v2/WxaleaieEh_qaWOTOZXBRCIbVahNmWaT
const express=require('express')
const ABI=require("./abi.json")
const {Web3}=require("web3")
const cors=require("cors")


const app=express();
app.use(cors())
app.use(express.json())

const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/WxaleaieEh_qaWOTOZXBRCIbVahNmWaT")
const contractAddress="0xb7467b9A79Cd8174402E2BccA209Ed6374d97022";
const contract=new web3.eth.Contract(ABI,contractAddress);





app.post("/api/ethereum/sign-up",async(req,res)=>{
    const {email}=req.body;
   const {message,}=await contract.methods.emailCheck(email).call();
    
    try{
       if(message=="email is found"){
            res.status(409).json({status:409,message:"email is already resister"}); 
        }else{
            res.status(200).json({status:200,message:"Now you can create account"});
        }
    }catch(error){
        res.status(404).json({status:500,message:"server is not runing properly"});
    }
})
app.post("/api/ethereum/sign-in",async(req,res)=>{
    const {email,password}=req.body;
    const message=await contract.methods.signIn(email,password).call();

    if(message=="Account not found"){
        res.status(404).json({status:500,message:"Incorrect Email"});
    }else if(message=="Incorrect password"){
        res.status(404).json({status:500,message:"Incorrect password"});
    }else{
        res.status(200).json({status:200,message:message});
    }
})


console.log("server is running");

app.listen(3000);