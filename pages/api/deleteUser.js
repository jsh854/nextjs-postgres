import { db } from "./connection";
export default async function getUser(req, res) {
  const {user_id} = req.body;
  if(req.method === 'PUT'){
    try{
        await db.none('UPDATE "user"  SET user_deleted=$1 where id=$2',[true,user_id]);
       return res.status(200).json('user successfully deleted')
   }catch(error){
       return res.status(500).json(error);

   }
  }else{
      return res.status(500).json('method not permitted');
  }
    

}