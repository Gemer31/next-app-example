import { Navigation } from './Navigation';

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
]

export default function Header() {
    return (
        <header className="container">
          <Navigation navLinks={navItems}/>
        </header>
    )
}