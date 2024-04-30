export default function addcourse() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>ADDED COURSES</h2>
        <div style={{ marginBottom: '20px' }}>
          
        </div>
        <table style={{ margin: 'auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '8px' }}>Course</th>
              <th style={{ border: '1px solid #000', padding: '8px' }}>NAME</th>
              <th style={{ border: '1px solid #000', padding: '8px' }}>TIME</th>
              <th style={{ border: '1px solid #000', padding: '8px' }}>CODE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #000', padding: '8px' }}>MERN Stack Web Development</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>ABC</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>9:00</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>22CS2201A</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #000', padding: '8px' }}>Python</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>XYZ</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>10:00</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>22CA2202A</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #000', padding: '8px' }}>Mathematics</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>LMN</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>11:00</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>22MP2201</td>
            </tr>
            {/* Add more rows for other courses as needed */}
          </tbody>
        </table>
      </div>
    );
  }
  