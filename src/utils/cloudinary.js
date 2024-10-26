import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'


cloudinary.config({
    cloud_name:CLOUDINARY_CLOUD_NAME,
    api_key:CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        //upload the file on cloudinary
        cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })

        console.log("file is uploaded on cloudnary", response.url)
        return response;
       

    } catch (error) {
        fs.unlinkSync(localFilePath)// remove locally saved temporaty file as the upload operation got failed
        return null
    }
}

export { uploadOnCloudinary }