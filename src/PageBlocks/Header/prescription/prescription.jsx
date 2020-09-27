import React from 'react';
import {useState, useEffect} from 'react';
import ImageUploader from 'react-images-upload';


// function SubmitButton(props) {
//     const pictures = props.pictures;
//     console.log("sds")
//     console.log(pictures);
//     if (pictures) {
//         return (
//             <div className="col s12 m6 l4" style={{'text-align':'center'}}>
//         <a class="waves-effect waves-light btn">Submit</a>
//         </div>
//         )
//     }
//     return '';
//   }

const Prescription = () => {
    const [pictures, setPictures] =  useState([]);
    const onDrop = (picture) =>  {
        console.log("krishna")
        console.log(picture);
        //if(pictures == [])
        setPictures(picture)
        //use this for multiple uploads
        //setPictures(pictures.concat(picture))
        // this.setState({
        //     pictures: this.state.pictures.concat(picture),
        // });
    }

    
    return (
        <div id="prescription-modal" className="modal modal-fixed-footer">
        <div className="modal-content">
        <ImageUploader
                            withIcon={true}
                            withLabel = {false}
                            label= {"Max file size: 5 MB"}
                            buttonText='Upload Prescription'
                            onChange={onDrop}
                            imgExtension={['.jpg', '.jpeg', '.png']}
                            maxFileSize={5242880}
                            withPreview = {true}
                            singleImage={true}

                        /> 
        
       {/* <SubmitButton pictures = {pictures}/> */}
       <div className="col s12 m6 l4" style={{'textAlign':'center', 'display': pictures.length > 0 ? "block " : "none"}} >
        <a className="waves-effect waves-light btn">Submit</a>
        </div>
        </div>
        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
    </div>
                            
    )
}

export default Prescription;