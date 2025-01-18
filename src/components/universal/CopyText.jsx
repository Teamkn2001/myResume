import React, { useState, useRef } from 'react'
import { Copy, CheckCheck } from 'lucide-react'

const CopyText = ({ text, label }) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const [copied, setCopied] = useState(false)
    const timeoutRef = useRef(null)

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current)
        setShowTooltip(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowTooltip(false)
        }, 300) // 300ms delay before hiding
    }

    const handleCopy = (e) => {
        e.stopPropagation()
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div 
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="cursor-pointer border-b border-dotted border-gray-400">
                {label || text}
            </span>

            {/* Made tooltip area bigger and added padding to prevent gaps */}
            <div className={`
                absolute -top-12 left-1/2 transform -translate-x-1/2
                transition-all duration-200 p-2
                ${showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}>
                <div className="
                    bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm
                    flex items-center gap-2 whitespace-nowrap shadow-lg
                    border border-gray-700
                ">
                    <span>{text}</span>
                    <button 
                        onClick={handleCopy}
                        className="hover:text-blue-300 transition-colors p-1
                                 rounded-md hover:bg-gray-700"
                    >
                        {copied ? (
                            <CheckCheck size={16} className="text-green-400" />
                        ) : (
                            <Copy size={16} />
                        )}
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default CopyText