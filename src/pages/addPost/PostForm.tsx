import React, {useEffect} from 'react'
import TextField from '@mui/material/TextField';
import {AddPostModel} from 'models/PostModel';
import Avatar from '@mui/material/Avatar';

interface PostFormProps {
    setPost: React.Dispatch<React.SetStateAction<AddPostModel>>;
    post: AddPostModel;
    file: Blob | null;
}

export const PostForm: React.FC<PostFormProps> = ({setPost, post, file}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value,
        });
    }

    useEffect(() => {
        setPost({
            ...post,
            photo: file
        })
    }, [file])

    return (
        <main className='post-form'>

            <img src={URL.createObjectURL(file)} alt="XD" className="add-post__image"/>
            <div className="post-form__user-info">
                <Avatar alt="xd" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                <p>XD</p>
            </div>
            <div className="post-form__inputs">

                <TextField
                    fullWidth
                    label="Add description"
                    multiline
                    maxRows={4}
                    value={post?.description}
                    onChange={handleChange}
                    name='description'
                    className='post-form__input'
                />
                <TextField
                    fullWidth

                    label="Tags"
                    placeholder="#Tag #Tag #Tag"
                    value={post?.tags}
                    onChange={handleChange}
                    name='tags'
                    className='post-form__input'
                />
            </div>
        </main>
    );
}