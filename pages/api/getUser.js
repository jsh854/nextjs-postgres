import { db } from "./connection";
export default async function getUser(req, res) {
  const {user_id} = req.body;
  if(req.method === 'GET'){
  try {
    const getUser= await db.oneOrNone('SELECT * FROM  "user" WHERE id=$1 and user_deleted=$2',[user_id,false]);
    if(!getUser){
        return res.status(404).json('user does not exist');
    }
    return res.status(200).json(getUser);

   // success
} 
catch(e) {
   // error
   return res.status(500).json(e);
}
  }else{
    return res.status(500).json('Method not permitted');
  }
}