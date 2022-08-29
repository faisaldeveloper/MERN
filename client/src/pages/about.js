import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>About</h2>
        <div className="p-2" style={{ fontFamily: 'georgia', textAlign: "left", margin:"20px", backgroundColor:"#f1f5f8" }}>
        <p>Lorem ipsum dolor sit amet. Est praesentium deserunt et galisum placeat et laborum voluptatem? Ea quaerat voluptatem aut quibusdam consequuntur ex nobis sint.</p>
        <p>In cumque sapiente aut delectus corporis et veniam molestias et modi accusantium cum obcaecati veniam et iure ipsam in sunt quis? Sed quisquam neque est sapiente rerum et consectetur quia ut mollitia repudiandae est molestiae sapiente. In repellat corporis 33 sequi fuga et ducimus sapiente est maxime mollitia ab natus dolorem qui alias veniam et suscipit repudiandae. Aut doloremque velit aut earum quia est odio incidunt qui autem labore.</p>
        <p>Rem quia fugit sit nulla magnam sit dignissimos architecto. Ex fuga odio aut laudantium maxime aut facilis voluptates sed autem tempora et reiciendis ullam sed veritatis nobis.</p>
        </div>

      <div className="p-4">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/100px70" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>       

      </main>
    );
  }