'use client'

import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import SubmitButton from './SubmitButton'
import toast from "react-hot-toast";
import { sendEmail } from '@/actions/sendEmail';

const Contact = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handleMessageChange = (event: any) => {
        setMessage(event.target.value);
    };

    return (
        <section id='contact' className=' scroll-mt-28 flex flex-col justify-center items-center'>
            <SectionHeading>Contact Me</SectionHeading>
            <div className='flex flex-col font-medium justify-center items-center'>
                <p className="text-xs  "> Please contact me through this form if you have any questions.</p>
                <p className='text-xs  mb-4'>
                    Or contact me directly on {" "}
                    <a className="font-semibold underline" href="mailto:mfa011096@gmail.com">mfa011096@gmail.com</a>
                </p>
            </div>
            <form
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!", {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    });

                    setMessage("");
                    setEmail("");

                }}
                className=' flex flex-col justify-center items-center '
            >
                <input
                    type="email"
                    name="senderEmail"
                    maxLength={50}
                    required
                    placeholder="Your Email"
                    onChange={handleEmailChange}
                    value={email}
                    className='border-2 rounded-xl border-gray-300 outline-none px-4 py-2 min-w-[400px] md:min-w-[600px] mx-2'
                />
                <textarea
                    name="message"
                    placeholder='Your Message'
                    maxLength={1000}
                    required
                    onChange={handleMessageChange}
                    value={message}
                    className='outline-none h-52 mt-5 border-2 border-gray-300 rounded-xl px-4 py-2 min-w-[400px] md:min-w-[600px] mx-2'
                >

                </textarea>
                <SubmitButton />
            </form>

        </section >
    )
}

export default Contact