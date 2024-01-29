import Link from "next/link";
import './globals.css';
export default function RootLayout(
    {
    children,
}: {
    children:React.ReactNode;
}) { 
    return (
        <html>
            <body>
                <main>
                    <nav>
                        {/* insert Global Navbar */}
                        <Link href="/">Home</Link>
                        <Link href="/notes">Notes</Link>


                        
                    </nav>
                    {children}
                </main>
            </body>
            
        </html>
    )
}