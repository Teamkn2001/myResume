import React, { useState } from 'react'
import { Navigation } from './Navigation'

export default function Header({ isMobile }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        Logo
                    </div>

                    {/* Navigation */}
                    <Navigation 
                        isMobile={isMobile} 
                        isMenuOpen={isMenuOpen}
                        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </div>
        </header>
    )
}