import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Button, Logo } from "../commons"
import { Link } from "gatsby"

const Header = () => (
    <header className="sticky top-0 bg-white shadow">
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
            <Link className="flex items-center text-2xl" to="/">
                <div className="w-12 mr-3">
                    <Logo />
                </div>
                Fight COVID-19
            </Link>
            <div className="flex mt-4 sm:mt-0">
                <AnchorLink className="px-4" href="#features">
                    Principles
                </AnchorLink>
                <Link className="px-4" to="/blog">
                    Blog
                </Link>
                <AnchorLink className="px-4" href="#collaborate">
                    Collaborate
                </AnchorLink>
                <AnchorLink className="px-4" href="#testimonials">
                    Testimonials
                </AnchorLink>
            </div>
            <div className="hidden md:block">
                <Button className="text-sm">Use app</Button>
            </div>
        </div>
    </header>
)

export default Header
