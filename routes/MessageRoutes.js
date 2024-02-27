import { Router } from "express";
import { addMessage ,getMessages,addImageMessage, getInitialContactsWithMessage,searchMessages} from "../controllers/MessageController.js";
import multer from "multer";



const  uploadImage =multer({dest:"uploads/images"})
const upload = multer({dest:"uploads/audio"}) 

const router = Router();

router.post("/add-message",addMessage);
router.get("/get-messages/:from/:to",getMessages);
router.post("/add-image-message",uploadImage.single("image"),addImageMessage);
//router.post("/add-audio-message",upload.single("audio"),addAudioMessage)
router.get("/get-current-contacts/:from",getInitialContactsWithMessage)
router.get("/search-messages/:from/:to/:search/:image/:audio/:message", searchMessages);




export default router;