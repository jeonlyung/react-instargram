const express = require("express");
const router = express.Router();

const { Message } = require("../models/Message");

//=================================
//             Message
//=================================

//메시지 등록 API
router.post('/dm/save', (req,res) => {
    const message = new Message(req.body);

    message.save((err, message) => {
        if (err) return res.json({ success: false, err });

        

    })

});

module.exports = router;