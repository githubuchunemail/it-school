import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from "../../Assets/img/Fronted.png"
import Logo2 from "../../Assets/img/Trading.png"
import Logo3 from "../../Assets/img/Cyber-security.png"
import Logo4 from "../../Assets/img/Smm.png"
import "./Section.scss"
import { Link } from 'react-router-dom';

function BasicExample() {
    return (
        <div className="card__wrapper">


            <Card style={{ width: '18rem' }}>
                <img src={Logo} alt="" />
                <Card.Body>
                    <Card.Title>Fronted</Card.Title>
                    <Card.Text>
                        Front-End dasturlovchi veb-saytning foydalanuvchiga korinadigan qismini tayyorlash bilan shugullanadi.
                    </Card.Text>
                    <button> <Link className='link' to={"button"} variant="primary">Kursga yozilish</Link></button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <img src={Logo2} alt="" />
                <Card.Body>
                    <Card.Title>Trading</Card.Title>
                    <Card.Text>
                        Trading, odatda, ommalashtirilgan moliyalarni sotib olish va sotish amaliyotlarini anglatadi.
                    </Card.Text>
                    <button> <Link className='link' to={"button"} variant="primary">Kursga yozilish</Link></button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <img src={Logo3} alt="" />
                <Card.Body>
                    <Card.Title>Cyber-security</Card.Title>
                    <Card.Text>
                        Kiber-xavfsizlik (yoki kiber-muhofaza) internet, kompyuterlar, texnologiyalar va ma'lumotlarga qarshi zararli qurilma.
                    </Card.Text>
                    <button> <Link className='link' to={"button"} variant="primary">Kursga yozilish</Link></button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <img src={Logo4} alt="" />
                <Card.Body>
                    <Card.Title>SMM</Card.Title>
                    <Card.Text>
                        Kiber-xavfsizlik (yoki kiber-muhofaza) internet, kompyuterlar, texnologiyalar va ma'lumotlarga qarshi zararli qurilma.
                    </Card.Text>
                    <button> <Link className='link' to={"button"} variant="primary">Kursga yozilish</Link></button>
                </Card.Body>
            </Card>

        </div>

    );
}

export default BasicExample;