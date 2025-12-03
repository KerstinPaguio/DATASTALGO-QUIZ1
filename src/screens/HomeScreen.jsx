import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom"; // <-- added

// Load Google Fonts in JS
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Custard&family=Quicksand:wght@400;600&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const pageStyle = {
  backgroundColor: "#FFE4EE",
  minHeight: "100vh",
  padding: "20px",
  borderRadius: "15px",
  fontFamily: "'Quicksand', sans-serif",
  color: "#4B2E39",
};

const headingStyle = {
  color: "#D44C6F",
  fontWeight: 400,
  fontFamily: "'Custard', cursive",
};

const textStyle = {
  color: "#4B2E39",
  lineHeight: 1.6,
  fontFamily: "'Quicksand', sans-serif",
};

function HomeScreen() {
  return (
    <div style={pageStyle}>
      <Container className="my-5">
        
        {/* About Section */}
        <section className="mb-5">
          <h1 className="mb-4" style={headingStyle}>About CBK</h1>
          <p className="lead mb-3" style={textStyle}>
            CBK (ClosetByKayKay) is a lifestyle fashion brand designed for individuals who love clean, stylish, and confident fits.
            Based in Angeles City, CBK has grown into a go-to hub for curated classics, modern streetwear, and everyday elevated essentials.
          </p>
          <p style={textStyle}>
            What started as a passion for stylish everyday outfits has evolved into a brand that values comfort, personality, and creativity.
            At CBK, each piece is thoughtfully selected to help you express your style effortlessly—whether you’re dressing up for a day out, school, the office, or just staying casual and comfy.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="mb-5">
          <h2 className="mb-4" style={headingStyle}>What We Do</h2>
          <p className="mb-3" style={textStyle}>
            CBK curates apparel that blends modern simplicity with stylish street influence. We focus on:
          </p>
          <ul className="mb-3" style={textStyle}>
            <li>Everyday stylish fits for men and women</li>
            <li>Versatile wardrobe essentials</li>
            <li>Timeless silhouettes with a modern twist</li>
            <li>Comfort-first fashion suited for all-day wear</li>
            <li>Seasonal drops inspired by local and global trends</li>
          </ul>
          <p style={textStyle}>
            Shop our pieces through our official Shopee store:{" "}
            <a href="https://shopee.ph/closetbykay" target="_blank" rel="noopener noreferrer">
              shopee.ph/closetbykaykay
            </a>{" "}
            and enjoy nationwide delivery.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-5">
          <h2 className="mb-4" style={headingStyle}>Our Mission</h2>
          <Card className="bg-light">
            <Card.Body>
              <p className="mb-0" style={textStyle}>
                To inspire confidence through fashion by offering stylish, comfortable, and affordable pieces that elevate your daily wardrobe.
              </p>
            </Card.Body>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-5">
          <h2 className="mb-4" style={headingStyle}>Our Team</h2>
          <p style={textStyle}>
            CBK is powered by a small but dedicated team of creatives, fashion lovers, and customer-driven individuals who bring the brand to life.
            From product selection to styling and customer service, each team member plays a vital role in shaping the CBK experience.
          </p>
          <p style={textStyle}>
            Together, we aim to build a fashion community built on authenticity and style.
          </p>
        </section>

        {/* Why Choose CBK Section */}
        <section className="mb-5">
          <h2 className="mb-4" style={headingStyle}>Why Choose CBK?</h2>
          <Row>
            {[
              ["Modern & Stylish Fits", "Clothing designed to elevate your everyday look"],
              ["Comfort for Every Moment", "Easy-to-wear pieces built for movement and confidence"],
              ["Simple, Clean Aesthetic", "Minimal yet expressive wardrobe staples"],
              ["Affordable Quality", "Stylish fits without the premium price tag"],
              ["Customer-Centered Experience", "We make fashion simple, smooth, and enjoyable"],
            ].map(([title, desc], idx) => (
              <Col md={6} className="mb-3" key={idx}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <h5 style={headingStyle}>✓ {title}</h5>
                    <p style={{ ...textStyle, color: "#7B5E66" }}>{desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* ----------------------------- */}
        {/* CATEGORIES SECTION (ADDED)   */}
        {/* ----------------------------- */}
        <section className="mb-5">
          <h2 className="mb-4" style={headingStyle}>Categories</h2>

          <Row>
            <Col md={4}>
              <Link to="/clothes" style={{ textDecoration: "none" }}>
                <Card
                  className="border-0 shadow-sm"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#FFD8E4",
                    borderRadius: "15px"
                  }}>
                  <Card.Body className="text-center">
                    <h4 style={headingStyle}>Clothes</h4>
                    <p style={textStyle}>Explore our curated clothing pieces</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </section>

      </Container>
    </div>
  );
}

export default HomeScreen;
