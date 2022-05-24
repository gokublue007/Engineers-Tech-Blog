//*  Import express router and Comment and User model
const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

//*  CREATE a new comment
router.post("/", withAuth, async (req, res) => {
    try {
    const newComment = await Comment.create({
        comment_body: req.body.comment_body,
        date_created: req.body.date_created,
        thread_id: req.body.thread_id,
        user_id: req.session.user_id,
    });
    if (
    !(
        newComment.comment_body &&
        newComment.date_created &&
        newComment.thread_id &&
        newComment.user_id
    )
    ) {
        res
        .status(404)
        .json({ message: "Please enter data in all the required fields..." });
    }
    res.status(200).json(newComment);
} catch (err) {
    res.status(400).json(err);
}
});

router.put("/:id", withAuth, async (req, res) => {
    try {
    const selectedComment = await Comment.update(
    {
        comment_body: req.body.comment_body,
        thread_id: req.body.thread_id,
        date_created: req.body.dateCreated,
        user_id: req.session.user_id,
    },
    {
        where: {
        id: req.params.id,
        },
    }
    );
    if (!selectedComment)
        res.status(404).json({
        message: "You can't edit a comment that you didn't create...",
    });
    res.status(200).json(selectedComment);
} catch (err) {
    res.status(500).json(err);
}
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
    const selectedThread = await Comment.destroy({
        where: {
        id: req.params.id,
        user_id: req.session.user_id,
    },
    });
    if (!selectedThread) {
        res.status(404).json({
        message: "You can't delete a comment that you didn't create...",
    });
    }
    res.status(200).json(selectedThread);
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;
