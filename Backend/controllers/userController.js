const userModel = require('../models/userModel');


const getAllUsers= async(req,res)=>{
  try{
  const users= await userModel.findAll();
  res.status(201).json({data:users});
  }catch(err){
    res.status(500).json({error:'Erreur'})
  }

};

const getUserByid = async (req,res)=>{
  try{
    const {id}=req.params;
    const user = await userModel.findByPk(id);
 if(!user){
  return res.status(404).json({error:'User not found'})
 }
 return res.status(201).json({data:user})
  }catch(err){
    res.status(500).json({error:'Erreur'})
  }
}
const createUser = async (req, res) => {
  try {
      console.log('Request body:', req.body); // Debugging
      const { firstName, lastName } = req.body;

      if (!firstName || !lastName) {
          return res.status(400).json({ error: 'Missing required fields: firstName, lastName' });
      }

      const User = await userModel.create({ firstName, lastName });
      return res.status(201).json({ message: 'User created successfully', data: User });
  } catch (err) {
      console.error('Error creating user:', err.stack);
      return res.status(500).json({ error: 'Error creating user', details: err.message });
  }
};

const updateUser = async(req,res)=>{
  try{
    const {id}=req.params;
    const {firstName,lastname}=req.body;
    const UpdatedUser= await userModel.update({firstName,lastname},{where:{id}});
    if(!UpdatedUser){
      return res.status(404).json({message:'user not found'})
    }
    return res.status(201).json({message:'User updated successfully',data : UpdatedUser});
  }catch(err){
    res.status(500).json({error:'Error updating the user'})
  }
};

const DeleteUser = async (req,res)=>{
  try{
    const {id}=req.params;
    const DeletedUser = await userModel.destroy({where:{id}});
    if(!DeletedUser)
    {
      return res.status(404).json({message:'User not found'})
    }
    return res.status(201).json({message:'User deleted successfully'});

  }catch(err){
   return res.status(500).json({message:'Error deleting user'})
  }
  
};




module.exports = {
  getAllUsers,
  createUser,
  DeleteUser,
  getUserByid,
  updateUser
}