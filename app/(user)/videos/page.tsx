'use client'
import React,{useState} from 'react'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon,SearchIcon } from "@/components/icons";
import { Input,Kbd,Textarea,Button,Skeleton,Card} from "@nextui-org/react";
import {  Autocomplete,  AutocompleteSection,  AutocompleteItem} from "@nextui-org/autocomplete";
import axios from 'axios';

import {languages} from "@/components/languages"

export default function Videos({ params }: { params: { symbol: string } }) {
    const [isLoaded, setIsLoaded] = useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  const url="http://localhost:3000/api/getvideos";

  const [videos,setVideos]=useState([]);

  const apicall = async()=>{
    try{
       const userid= localStorage.getItem("userid");
       const data={
         userid:userid
       }
       axios.post(url,data,{
         headers:{
            "Content-Type":"application/json",
            "authentication_type":"User",
            "authentication_credinals":localStorage.getItem("token")
         }
       }).then((res)=>{
          if(res.data.status === 200){
            setVideos(res.data.videos);
          }
        }).catch((err)=>{
          console.log(err);
        }
        )
        
    }catch(error){
       console.log(error)
    }
  }
  
    const skeleton=(
    
        <div className="flex flex-col gap-3">
        <Card className="w-[200px] space-y-5 p-4" radius="lg">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <div className="h-24 rounded-lg bg-secondary"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
              <div className="h-3 w-full rounded-lg bg-secondary"></div>
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
              <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
              <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
            </Skeleton>
          </div>
        </Card>
        <Button size="sm" variant="flat" color="secondary" onPress={toggleLoad}>
          {isLoaded ? "Show" : "Hide"} Skeleton
        </Button>
      </div>
    )

    
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
    </section>
  );
}
