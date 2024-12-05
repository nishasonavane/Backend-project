import multer from 'multer';

const storage = multer.diskStorage({
    destination : function (req,file,cb){
        cb(null,"./public/temp")

    },
    filename :function(req,file,cb){
        cb(null,file.originalname)


    }
})
export const upload =multer({
    storage,
})

//multer.diskStorage: This method creates a storage engine for multer to save files to disk.
//destination: Defines where the files will be stored.

// filename: Ensures the files retain their original names.

// storage: Combines the above configurations into a storage engine.

// upload: The middleware that handles file uploads using the defined storage settings.
