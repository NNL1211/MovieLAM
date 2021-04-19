import { Row } from "react-bootstrap";

<><div>
 <a className="card" href="#" style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`}}>
                            <div className="overlay">
                            <div className="items"></div>
                            <div className="items head"><p>{movie.title}</p><hr/></div>
                            <ul className="card-slider-genres">
                               <li></li> 
                            </ul>
                            </div>
                        </a>
                        </div>

<Card className="bg-dark text-white">
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title className="overlay">{movie.title}</Card.Title>
                    <Card.Text className="overlay">>
                     This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="overlay">>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>

.popular{
    overflow:hidden
}
.overlay {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 2fr 1fr;
    background: rgba(43,41,41,.9);
    color: #fff;
    opacity: 0;
    transition: all .5s;
    font-family: "Playfair Display",serif;
}

.items {
    padding-left: 20px;
    letter-spacing: 3px;
}
.head {
    font-size: 50px;
    font-weight: bolder;
    line-height: 40px;
    transform: translateY(40px);
    transition: all .7s;
}

.card {
    width: 300px;
    height: 166px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #000;
    background-size: cover;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
    transition: .5s;
}

</>

adult: false
backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"
genre_ids: (2) [28, 878]
id: 399566
original_language: "en"
original_title: "Godzilla vs. Kong"
overview: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages."
popularity: 6065.197
poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
release_date: "2021-03-24"
title: "Godzilla vs. Kong"
video: false
vote_average: 8.3
vote_count: 4552


<Navbar variant="dark" className="nav-dark">
        <Navbar.Brand><img src={logo} alt="NetFlix" width="200px"/></Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
        <Nav.Link as={NavLink} to="/favorite">Favorite</Nav.Link>
        </Nav>
        <Form inline>
        <FaSearch />
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
    </Navbar>