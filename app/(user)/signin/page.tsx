'use client'
import React,{useState} from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Input, Button} from "@nextui-org/react";

export default function Signin() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return(
        <section className="flex flex-col items-center justify-center gap-4 py-8">
            <Card
                className='w-[full] md:w-[500px]'
            >
                <CardHeader className='flex justify-center'>
                    <p className='text-md'>Signin</p>
                </CardHeader>
                <Divider/>
                <CardBody
                    className='py-8'
                >
                    <div className='flex flex-col gap-3 items-center'>
                    <Input 
                        type="text" 
                        label="Email" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input 
                        type="password" 
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    </div>
                    <Button className="bg-gradient-to-b from-red-900 via-orange-400 to-amber-700  mt-5">Signin</Button>
                </CardBody>
                <Divider/>
                <CardFooter className='inline-block w-full text-center justify-center'>
                    <p>Don't have an account? </p>
                    <Link 
                        href='/signup'
                        showAnchorIcon
                    >
                        Signup
                    </Link>
                </CardFooter>
            </Card>
        </section>
    );
};

