import { Router, Request, Response } from "express";
import { Post } from "../models/Post";

const router = Router();

// create a post route
router.post('/create', async (req: Request, res: Response) => {
    const { title, content, author } = req.body;
    const post = new Post({ title, content, author });
    await post.save();
    res.status(201).json(post);
})

router.get('/posts', async (req: Request, res: Response) => {
    const posts = await Post.find();
    res.json(posts);
});
// Get a post by ID route
router.get('/posts/:id', async (req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.json(post);
    } catch (error) {
        res.status(500).send('Error retrieving post');
    }
});

// update

router.put('/posts/:id', async (req: Request, res: Response) => {
    const { title, content, author } = req.body;
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, { title, content, author }, { new: true });
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.json(post);
    } catch (error) {
        res.status(400).send('Error updating post');
    }
});




// delete
router.delete('/posts/:id', async (req: Request, res: Response) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);;
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.status(201).send(); //no content to send
    } catch (error) {
        res.status(400).send('Error deleting in  post');
    }
});



export default router;