import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full py-6 px-6 bg-background border-t text-center">
            <p>© {new Date().getFullYear()} FreelanceFlow CRM. All rights reserved.</p>
            <div className="mt-2 space-x-4">
                <a href="#" className="hover:text-indigo-400">
                    Privacy
                </a>
                <a href="#" className="hover:text-indigo-400">
                    Terms
                </a>
                <a href="#" className="hover:text-indigo-400">
                    Contact
                </a>
            </div>
        </footer>
    )
}
