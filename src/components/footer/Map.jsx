function Map() {
  const iframeStyle = {
    border: "0",
  };
  return (
    <div className="border border-italia flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.592916417052!2d20.752253141153435!3d38.95612737182928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135c38fc8dbe46bd%3A0x513385bc1dfa3b1c!2sDal%20Forno%20Pizzeria-Restaurant!5e0!3m2!1sen!2sgr!4v1697449604460!5m2!1sen!2sgr"
        width="1800"
        height="250"
        style={iframeStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
