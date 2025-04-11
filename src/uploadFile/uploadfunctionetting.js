import multer from 'multer'
import {v4 as uuidv4} from 'uuid'
import { AppError } from '../utilites/ErrorInhertance.js'

const uploadFile = (floderName)=>{

    // the file is storage 
    const storage = multer.diskStorage({
        destination :  (req,file,cb)=>{
            cb(null, `uploads/${floderName}`)
        },
        filename :  (req,file,cb)=> {
            cb(null , uuidv4()+'_' +file.originalname)
        }
    })

   function fileFilter (req,file,cb)
    {
    
        if (file.mimetype.startsWith('image'))
        {
            cb(null , true)
        }
        else 
        {
            cb(new AppError("Only Image" , 400),false)
        }
        
    }

   const upload = multer({storage , fileFilter , limits : {fileSize : 5*1024*1024}})


    return upload

}

export const uploadSingle = (floderName , fieldName)=> 
    uploadFile(floderName).single(fieldName)

export const uploadMixFiles = (folderName,arrayOfFields) =>
     uploadFile(folderName).fields(arrayOfFields)