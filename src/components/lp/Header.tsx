

export default function Header() {
    return (
        <header className="w-full py-4 px-6 flex justify-between items-center border-b">
            {/* Logo Placeholder */}
            <div className="text-2xl font-bold">FreelanceFlow</div>

            {/* Navigation Links */}
            
                <nav className="space-x-6">
                    <a href="#features" className="hover:text-indigo-600">
                        Features
                    </a>
                    <a href="#pricing" className="hover:text-indigo-600">
                        Pricing
                    </a>
                    <a href="#blog" className="hover:text-indigo-600">
                        Blog
                    </a>
                    <a href="#login" className="hover:text-indigo-600">
                        Login
                    </a>
                    <a
                        href="#signup"
                        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
                    >
                        Sign Up
                    </a>
                </nav>
            
        </header>
    )
}
