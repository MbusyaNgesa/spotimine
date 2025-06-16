import { Album } from "../models/albumModel.js";
import { Song } from "../models/songModel.js";
import { User } from "../models/userModel.js";

export const getStats = async (req, res, next) => {
  try {
    // const totalSongs = await Song.countDocuments(); //countDocuments() will give you all the number of songs
    // const totalUsers = await User.countDocuments();
    // const totalAlbum = await Album.countDocuments();

    //This is an optimised version of the code above to run all simultaneously instead of retrieving in hierachial order
    const [totalSongs, totalUsers, totalAlbum, uniqueArtists] =
      await Promise.all([
        Song.countDocuments(),
        User.countDocuments(),
        Album.countDocuments(),

        //In this pipeline I have collected all Songs, fetched all albums,
        //combined them, grouped them by unique artists and count
        //number of artists
        Song.aggregate([
          {
            $unionWith: {
              coll: "albums",
              pipeline: [],
            },
          },
          {
            $group: {
              _id: "$artist",
            },
          },
          {
            $count: "count",
          },
        ]),
      ]);

    res.status(200).json({
      totalAlbum,
      totalSongs,
      totalUsers,
      totalArtists: uniqueArtists[0]?.count || 0,
    });
  } catch (error) {
    next(error);
  }
};
