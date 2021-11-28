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
            <img className="profile-posts-item-image" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/>
            <div className="profile-posts-item-overlay">
                <div className="profile-posts-item-overlay-container">
                    <div className="profile-posts-item-overlay-icon">
                        <i className="fas fa-comment"/>
                        <p>23</p>
                    </div>
                    <div className="profile-posts-item-overlay-icon">
                        <i className="fas fa-heart"/>
                        <p>12</p>
                    </div>
                </div>
            </div>
        </div>
            <Modal children={<PostDialog post={post} />} open={open} setOpen={setOpen}/>
        </div>
    );
};

export default ProfilePost;
