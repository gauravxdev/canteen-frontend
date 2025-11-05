import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            V
          </div>
          <span className="hidden sm:inline font-semibold text-lg text-foreground">Logo</span>
        </Link>

        {/* Auth Buttons Section */}
        <div className="flex items-center gap-2 md:gap-3">
          <Button variant="ghost" size="sm" className="text-foreground hover:bg-secondary" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}


export default Navbar