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
          title="Tutor Point Location on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.875174465783!2d77.38787789999999!3d28.663456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf073ca154be9%3A0x8f1e48478583de97!2sTutor%20Point!5e0!3m2!1sen!2sin!4v1767890791760!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>
    </section>
  );
}


