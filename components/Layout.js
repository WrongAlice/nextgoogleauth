import Nav from './Nav';

// Layout allows us to add the nav to every page we have. 

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            <main>{children}</main>
        </div>
    )
}
