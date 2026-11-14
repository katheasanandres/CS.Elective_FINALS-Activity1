function StudentCard({ name, course, section }) {
  return (
    <div style={cardStyle}>
      <div style={headerStripeStyle} />
      <div style={contentStyle}>
        <h2 style={nameStyle}>{name}</h2>
        <div style={dividerStyle} />
        <p style={detailStyle}>
          <strong style={labelStyle}>Course:</strong> {course}
        </p>
        <p style={detailStyle}>
          <strong style={labelStyle}>Section:</strong> {section}
        </p>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '2px solid #6f4e37', // choco border
  borderRadius: '12px',
  width: '260px',
  backgroundColor: '#fffdf7', // cream background
  fontFamily: 'sans-serif',
  overflow: 'hidden',
};

const headerStripeStyle = {
  height: '14px',
  backgroundColor: '#ffa7d4', // light pink top accent
  borderBottom: '4px solid #6f4e37', // brown stripe
};

const contentStyle = {
  padding: '18px 20px',
};

const nameStyle = {
  margin: '0 0 10px 0',
  color: '#4a2c2a', // dark brown
  fontSize: '20px',
  fontWeight: '700',
};

const dividerStyle = {
  height: '2px',
  backgroundColor: '#fbcfe8', // soft penk divider
  marginBottom: '12px',
};

const detailStyle = {
  margin: '6px 0',
  color: '#5c4033', // brooooown text
  fontSize: '14px',
};

const labelStyle = {
  color: '#ff91c2', // pink label accent
};

export default StudentCard;