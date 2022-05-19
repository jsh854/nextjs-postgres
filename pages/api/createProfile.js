import { db } from "./connection";
export default async function createUser(req, res) {
  const {description,location,user_id} = req.body;
  if(req.method === 'POST'){
  try {
     const createUserProfile= await db.one('INSERT INTO  "profile" (description,location,user_id) values ($1,$2,$3)',[description,location,user_id]);
     return res.status(200).json(createUserProfile);
    // success
} 
catch(e) {
    // error
    return res.status(500).json(e);
}}else{
    return res.status(500).json('method not permitted');
}
}