export function LocationMap() {
  return (
    <section
      aria-label="Business location"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Our Location</h2>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        }}
      >
<iframe
  title="Study Ways Home Tutors Location on Google Maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.2187936291552!2d77.38723416949351!3d28.66345599847799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf072c48ada8b%3A0xb4a33cb07029f066!2sSF%20-%203%2C%20247%2C%20Sector%201%2C%20Vasundhara%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201012!5e0!3m2!1sen!2sin!4v1769014963321!5m2!1sen!2sin"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>
    </section>
  );
}


