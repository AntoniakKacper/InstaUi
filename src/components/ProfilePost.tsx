import React, {useState} from 'react';
import {PostModel} from "../models/PostModel";
import {PostDialog} from "./PostDialog";
import {Modal} from "./Modal";

interface ProfilePostProps {
    post: PostModel
}

const ProfilePost: React.FC<ProfilePostProps> = ({ post }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }


    return (
        <div>
        <div className="profile-posts-item" onClick={toggle}>
            <img className="profile-posts-item-image" src={post.img_url} alt="xd"/>
            <div className="profile-posts-item-overlay">
                <div className="profile-posts-item-overlay-container">
                    <div className="profile-posts-item-overlay-icon">
                        <i className="fas fa-comment"/>
                        <p>{post.comments_count}</p>
                    </div>
                    <div className="profile-posts-item-overlay-icon">
                        <i className="fas fa-heart"/>
                        <p>{post.likes_count}</p>
                    </div>
                </div>
            </div>
        </div>
            <Modal children={<PostDialog post={post} />} open={open} setOpen={setOpen}/>
        </div>
    );
};

export default ProfilePost;
