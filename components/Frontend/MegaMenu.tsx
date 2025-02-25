"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const megaMenu = [
    {
        title:" Top Booked",
        services: [
            {
                title:"Virtual Consultation",
                slug: "virtual-consult",
                description: "Connect with an experienced lawyer from anywhere via a secure video or phone call.Get legal advice, discuss your case, and explore your options without leaving your home." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Document Drafting & Review",
                slug: "doc-drafting-review",
                description: "Ensure your legal documents are accurate, enforceable, and tailored to your needs. Our lawyers will review, edit, or draft contracts, agreements, wills, and other essential documents to protect your rights and interests. Get expert guidance to avoid legal pitfalls and ensure compliance." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Contract & Business Advisory",
                slug: "contract-business advisory",
                description: "Get expert legal guidance on contracts, business structuring, and compliance. Our lawyers help draft, review, and negotiate agreements to protect your interests, minimize risks, and ensure smooth business operations. Whether you're starting a new venture or managing an existing one, we provide strategic advice to keep your business legally sound." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Legal Representation",
                slug: "virtual-consult",
                description: "Protect your rights with professional legal advocacy. Our experienced lawyers represent individuals and businesses in negotiations, disputes, and court proceedings. Whether you need defense in litigation, assistance with mediation, or advocacy in regulatory matters, we provide dedicated support to achieve the best possible outcome for your case." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
        ]
    },
    {
        title: "Lawyers",
        services: [
            {
                title:"Virtual Consultation",
                slug: "virtual-consult",
                description: "Connect with an experienced lawyer from anywhere via a secure video or phone call.Get legal advice, discuss your case, and explore your options without leaving your home." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Document Drafting & Review",
                slug: "doc-drafting-review",
                description: "Ensure your legal documents are accurate, enforceable, and tailored to your needs. Our lawyers will review, edit, or draft contracts, agreements, wills, and other essential documents to protect your rights and interests. Get expert guidance to avoid legal pitfalls and ensure compliance." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Contract & Business Advisory",
                slug: "contract-business advisory",
                description: "Get expert legal guidance on contracts, business structuring, and compliance. Our lawyers help draft, review, and negotiate agreements to protect your interests, minimize risks, and ensure smooth business operations. Whether you're starting a new venture or managing an existing one, we provide strategic advice to keep your business legally sound." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Legal Representation",
                slug: "virtual-consult",
                description: "Protect your rights with professional legal advocacy. Our experienced lawyers represent individuals and businesses in negotiations, disputes, and court proceedings. Whether you need defense in litigation, assistance with mediation, or advocacy in regulatory matters, we provide dedicated support to achieve the best possible outcome for your case." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
        ],
    },
    {
        title: "Experts",
        services: [
            {
                title:"Virtual Consultation",
                slug: "virtual-consult",
                description: "Connect with an experienced lawyer from anywhere via a secure video or phone call.Get legal advice, discuss your case, and explore your options without leaving your home." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Document Drafting & Review",
                slug: "doc-drafting-review",
                description: "Ensure your legal documents are accurate, enforceable, and tailored to your needs. Our lawyers will review, edit, or draft contracts, agreements, wills, and other essential documents to protect your rights and interests. Get expert guidance to avoid legal pitfalls and ensure compliance." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Contract & Business Advisory",
                slug: "contract-business advisory",
                description: "Get expert legal guidance on contracts, business structuring, and compliance. Our lawyers help draft, review, and negotiate agreements to protect your interests, minimize risks, and ensure smooth business operations. Whether you're starting a new venture or managing an existing one, we provide strategic advice to keep your business legally sound." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Legal Representation",
                slug: "virtual-consult",
                description: "Protect your rights with professional legal advocacy. Our experienced lawyers represent individuals and businesses in negotiations, disputes, and court proceedings. Whether you need defense in litigation, assistance with mediation, or advocacy in regulatory matters, we provide dedicated support to achieve the best possible outcome for your case." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
        ],
    },
    {
        title: "Legal Issues",
        services: [
            {
                title:"Virtual Consultation",
                slug: "virtual-consult",
                description: "Connect with an experienced lawyer from anywhere via a secure video or phone call.Get legal advice, discuss your case, and explore your options without leaving your home." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Document Drafting & Review",
                slug: "doc-drafting-review",
                description: "Ensure your legal documents are accurate, enforceable, and tailored to your needs. Our lawyers will review, edit, or draft contracts, agreements, wills, and other essential documents to protect your rights and interests. Get expert guidance to avoid legal pitfalls and ensure compliance." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Contract & Business Advisory",
                slug: "contract-business advisory",
                description: "Get expert legal guidance on contracts, business structuring, and compliance. Our lawyers help draft, review, and negotiate agreements to protect your interests, minimize risks, and ensure smooth business operations. Whether you're starting a new venture or managing an existing one, we provide strategic advice to keep your business legally sound." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
            {
                title:"Legal Representation",
                slug: "virtual-consult",
                description: "Protect your rights with professional legal advocacy. Our experienced lawyers represent individuals and businesses in negotiations, disputes, and court proceedings. Whether you need defense in litigation, assistance with mediation, or advocacy in regulatory matters, we provide dedicated support to achieve the best possible outcome for your case." 
                 /*"Document Review", "In-Person Consult", "Contract & Business advisory" */
            },
        ],
    },
]

export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
       {
        megaMenu.map((item,i)=>{
            return(
                <NavigationMenuItem key={i}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {item.services.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={'/services${component.slug}'}
                >
                  {component.description}
                </ListItem>
              ))};
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
            );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

