import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Dropzone} from "../../components/Dropzone";
import StepLabel from '@mui/material/StepLabel';
import {PostForm} from "./PostForm";
import {AddPostModel} from 'models/PostModel';
import axios from "../../utils/axiosInstance";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setLoadingPost} from "../../store/actions/postAction";


interface AddPostProps {

}


const steps = ['Add image', 'Create post'];


export const AddPost: React.FC<AddPostProps> = ({}) => {

    const { user } = useSelector((state: RootState) => state.auth);
    const [file, setFile] = useState<Blob | null>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [post, setPost] = useState<AddPostModel>({
        photo: null,
        description: '',
        tags: ''
    });
    const action = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();

    // const fetchData = async () => {
    //     let img_url = '';
    //
    //     await axios.get(`./posts/${state.id}`, {
    //         headers: {
    //             Accept: "application/json",
    //         },
    //     })
    //         .then((response) => {
    //             const post = response.data.data;
    //             console.log(post);
    //             img_url = post.img_url;
    //             setPost(
    //                 {
    //                     ...post,
    //                     description: post.description,
    //                     tags: post.tags
    //                 }
    //             );
    //         }).catch((error) => console.log(error))
    //
    //     await axios.get(`./posts/${state.id}/photo`, {
    //         headers: {
    //             Accept: "application/json",
    //         },
    //     })
    //         .then((response) => {
    //             //const post = response.data.data;
    //             console.log(response.data);
    //             console.log(new Blob([response.data]));
    //             // img_url = post.img_url;
    //             setPost(
    //                 {
    //                     ...post,
    //                     photo:new Blob([response.data])
    //                 }
    //             );
    //         }).catch((error) => console.log(error))
    //     console.log(img_url);
    //
    // }
    //
    // useEffect(() => {
    //     if(isEditMode){
    //         fetchData();
    //     }
    // }, []);


    useEffect(() => {

    }, [file]);

    const handleOpen = () => {
        //Okienko do otwierania edytora
        setIsOpen(true);
    }





    const stepsElements = [
        {
             htmlElement: !file ? <Dropzone setFile={setFile}/> : <img src={URL.createObjectURL(file)} alt="post" onClick={handleOpen} className="add-post__image"/>
        },
        {
            htmlElement: <PostForm setPost={setPost} post={post} file={file}/>
        }
    ]
    const handleNext = () => {setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const removeImage = () => {
        setFile(null);
    }

    const handleAddPost = async () => {
        action(setLoadingPost(true));
        const fData = new FormData();
        post.photo && fData.append('photo', post.photo);
        post.description && fData.append('description', post.description);
        post.tags && fData.append('tags', post.tags);

        await axios.post(`./posts`,
            fData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then((res) => {
            console.log(res.data);
            navigate(`/profile/${user!.id}`);
            action(setLoadingPost(false));
        }).catch((error) => console.log(error))
    }

    return (
        <main className='add-post'>
            <Box sx={{width: '100%'}}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/*{post.photo && <img src={URL.createObjectURL(post.photo)} alt="post" />}*/}
                    {/*{isEditMode && post.photo ? <img src={URL.createObjectURL(post.photo)} alt="post" /> : stepsElements[activeStep].htmlElement}*/}
                    {stepsElements[activeStep].htmlElement}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={!file && activeStep === 0}
                            onClick={activeStep === steps.length - 1 ? handleBack : removeImage}
                            sx={{ mr: 1 }}
                        >
                            {activeStep === steps.length - 1 ? 'Back' : 'Remove photo'}
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={activeStep === steps.length - 1 ? handleAddPost : handleNext} disabled={!file}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
            </Box>
        </main>
    );
}