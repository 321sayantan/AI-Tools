import React, { useState } from 'react';

const ScifiImage = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate image');
      }

      const data = await response.json();
      console.log(data)
    //   setImageUrl(`http://localhost:5000/${data.imageUrl}`);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Image Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter an image prompt"
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '5px',
          border: '2px solid #007BFF', // Highlight with a blue border
        }}
      />
      <button
        onClick={generateImage}
        style={{
          padding: '10px 20px',
          marginLeft: '10px',
          borderRadius: '5px',
          border: '2px solid #007BFF', // Highlight with a blue border
          backgroundColor: '#007BFF',
          color: '#fff',
          cursor: 'pointer',
        }}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
{error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      {imageUrl && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={imageUrl}
            alt="Generated"
            style={{
              width: '400px',
              height: 'auto',
              border: '2px solid #007BFF', // Highlight with a blue border
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ScifiImage;