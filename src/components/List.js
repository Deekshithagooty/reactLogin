import React from 'react';

export default function List() {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>This is the Courses related page</p>
            
            <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#mern">Jump to MERN</a>
                <a href="#python">Jump to Python</a>
            </div>
            
            <div style={{ display: 'inline-block' }}>
                <h2 id="mern">MERN</h2>
                <table border="3">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name of the Experiment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            
            <div style={{ marginRight: "10000px" }}>
                <label htmlFor="fileselector">UPLOAD</label>
                <input type="file" id="fileselector" />
            </div>
            
            <br/><br/><br/><br/><br/><br/><br/><br/>
            
            <div style={{ display: 'inline-block' }}>
                <h2 id="python">Python</h2>
                <table border="3">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name of the Experiment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            
            <div style={{ marginRight: "1000px" }}>
                <details>
                    <summary>1. What is your Name?</summary>
                    <p>My Name is Tommy</p>
                </details>
            </div>
        </div>
    );
}

function renderRows() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(
            <tr key={i}>
                <td>{i}</td>
                <td>Experiment {i}</td>
            </tr>
        );
    }
    return rows;
}
