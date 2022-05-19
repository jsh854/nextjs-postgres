import { db } from "./connection";
export default async function createUser(req, res) {
  const {username,email} = req.body;
  if(req.method === 'POST'){
  try {
      await db.none('INSERT INTO  "user" (username,email) values ($1,$2)',[username,email]);
    return res.status(200).json("user created successfully");
    // success
} 
catch(e) {
    // error
    return res.status(500).json(e);
}}else{
  return res.status(500).json('method not permitted');
}
}
