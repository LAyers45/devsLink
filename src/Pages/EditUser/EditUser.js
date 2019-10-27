import React from "react";
import "./EditUser";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Input, TextArea, FormBtn } from "../../components/Form";




function EditUser() {
    return (
        <div>
            <Navbar />
            <Input />
            <TextArea />
            <FormBtn
                Save
            />
            <Footer />
        </div>
    )

}

export default EditUser;