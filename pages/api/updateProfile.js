import { db } from "./connection";
export default async function updateProfile(req, res) {
  const { description, location, user_id } = req.body;
  var updateProfile;
  if (req.method === "PUT") {
    try {
      if (description && location) {
        updateProfile = await db.one(
          'UPDATE "profile"  SET description=$1,location=$2 where user_id=$3',
          [description, location, user_id]
        );
      } else if (!location) {
        updateProfile = await db.one(
          'UPDATE "profile"  SET description=$1 where user_id=$2',
          [description, user_id]
        );
      } else if (!description) {
        updateProfile = await db.one(
          'UPDATE "profile"  SET location=$1 where user_id=$2',
          [location, user_id]
        );
      }

      return res.status(200).json(updateProfile);
      // success
    } catch (e) {
      // error
      return res.status(500).json(e);
    }
  } else {
    return res.status(500).json("method not permitted");
  }
}
