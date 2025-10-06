import { Link, useParams } from "react-router"

export default function OrderPage() {
    let { name } = useParams();

    return (
        <>
            <h1>Bonjour {name}</h1>
            <br />
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </>
    )
}