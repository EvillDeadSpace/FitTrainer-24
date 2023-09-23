import { AiFillYoutube, AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import React from 'react'

export const socialLinks = [
    {
        path: "https://www.youtube.com/@evilldeadspace/featured",
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />
    },
    {
        path: "https://github.com/EvillDeadSpace",
        icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />
    },
    {
        path: "https://www.linkedin.com/in/amar-tubic/",
        icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />
    },
    {
        path: "https://www.instagram.com/tubic.amar/",
        icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />
    }
]
export const quickLinks01 = [
    {
        path: "/",
        display: "Home"
    },
    {
        path: "/",
        display: "About Us"
    },
    {
        path: "/services",
        display: "Services"
    },
    {
        path: "/",
        display: "Blog",
    },
]
export const quickLinks02 = [
    {
        path: "/find-a-coach",
        display: "Find a Coach"
    },
    {
        path: "/",
        display: "Get a Opinions",
    },
    {
        path: "/",
        display: "Find a Locations",
    },
]
export const quickLinks03 = [
    {
        path: "/",
        display: "Donate Us"
    },
    {
        path: "/",
        display: "Contact Us",
    },
]




