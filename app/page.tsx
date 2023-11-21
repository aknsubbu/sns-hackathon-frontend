'use client'
import React,{useState} from 'react'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon,SearchIcon } from "@/components/icons";
import { Input,Kbd,Textarea,Button } from "@nextui-org/react";
import {  Autocomplete,  AutocompleteSection,  AutocompleteItem} from "@nextui-org/autocomplete";

import {languages} from "@/components/languages"

export default function Home() {
 const [News_title,setNews_Title]=useState("")
 const [desc,setDesc]=useState("")
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block w-full text-center justify-center">
        <h1 className={title()}>Create&nbsp;</h1>
        <h1 className={title({ color: "text_grad" })}>comprehensive news videos&nbsp;</h1>
        <br />
        <h1 className={title()}>
         using text to enable better access
        </h1>
        
      </div>

      <div className="flex gap-5 mt-10 flex-col w-1/2 ">
        <div className="flex flex-col gap-3 items-center">
		<Input
		     variant="bordered"	
			size="lg"
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
		
			labelPlacement="outside"
			placeholder="Enter your Title ..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
			value={News_title}
			onChange={(e) => setNews_Title(e.target.value)}
			endContent={
				<Autocomplete
				isRequired
				variant='underlined'
				size='sm'
				defaultItems={languages}
				placeholder="Select a language"
				defaultSelectedKey="cat"
				className="max-w-[180px]"
				>
				{(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
				</Autocomplete>
			}
			
		/>

		<Textarea
		variant="bordered"
        label="Description"
        labelPlacement="outside"
        placeholder="Enter your description"
        value={desc}
		description="Enter a concise description of your article."
        onValueChange={setDesc}
		/>
        
		

		<Button className="bg-gradient-to-b from-red-900 via-orange-400 to-amber-700  mt-5">Generate Video</Button>
		</div>
      </div>
    </section>
  );
}
