document.getElementById('courseForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('thumbnail', document.getElementById('thumbnail').files[0]);
    formData.append('video', document.getElementById('video').files[0]);
  
    try {
      const response = await fetch('http://localhost:5000/api/courses/add', {
        method: 'POST',
        body: formData
      });
  
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding course');
    }
  });
  