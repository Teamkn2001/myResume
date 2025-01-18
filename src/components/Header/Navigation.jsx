import { Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"

// this component used for navigation bar (hamburger menu)
export function Navigation({ isMobile, isMenuOpen, onMenuToggle }) {
    const NavLinks = () => (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </>
    )

    if (isMobile) {
        return (
            <>
                <button 
                    onClick={onMenuToggle}
                    className="p-2 rounded-md hover:bg-gray-100"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white shadow-lg">
                        <nav className="flex flex-col p-4">
                            <NavLinks />
                        </nav>
                    </div>
                )}
            </>
        )
    }

    return (
        <nav className="hidden md:flex items-center space-x-4">
            <NavLinks />
        </nav>
    )
}