import React, {useState} from 'react';

const ContactForm = ()=>{
    const [data,setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        comment:''
    });

    const onUpdate= (event)=>{
        const newData = {...data}
        newData[event.target.name]=event.target.value
        setData(newData)
    }

    const onSendData = (event)=>{
        event.preventDefault();
        console.log(data);
    }

    return(

        <form action="" onSubmit={onSendData}>
            <div className="title">Contact Us</div>
            <div className="name-wrapper">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    autoFocus
                    required
                    value={data.firstName}
                    onChange={onUpdate}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={onUpdate}
                    required
                />
            </div>
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={onUpdate}
                value={data.email}
            />
            <textarea
                name="comment"
                form="cform"
                placeholder="Message"
                value={data.comment}
                required
                onChange={onUpdate}>
            </textarea>
            <button id="submit" name="submit" type="submit"></button>
        </form>
    )
}

export default ContactForm;