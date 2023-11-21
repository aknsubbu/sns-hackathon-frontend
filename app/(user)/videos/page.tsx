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

import {languages} from "@/components/languages"

export default function Videos() {
    const [isLoaded, setIsLoaded] = useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };
  
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
