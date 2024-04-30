export default function Updates() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Latest Updates</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" />
        </div>
        <div className="text" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', maxWidth: '500px', color: 'black' }}>
            <h4>MERN Stack Exam</h4>
            <p>Date: May 10th, 2024</p>
            <p>Time: 9:00 AM - 12:00 PM</p>
            <p>Duration: 3 hours</p>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', maxWidth: '500px', color: 'black' }}>
            <h4>Python Exam</h4>
            <p>Date: May 15th, 2024</p>
            <p>Time: 10:00 AM - 1:00 PM</p>
            <p>Duration: 3 hours</p>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', maxWidth: '500px', color: 'black' }}>
            <h4>Mathematics Exam</h4>
            <p>Date: May 20th, 2024</p>
            <p>Time: 9:30 AM - 12:30 PM</p>
            <p>Duration: 3 hours</p>
          </div>
          {/* Add more updates for other subjects as needed */}
        </div>
      </div>
    </div>
  );
}
