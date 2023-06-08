// Retrieve the certificate parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const certificate = urlParams.get('certificate');

// Set the certificate title and image source based on the parameter
const certificateTitle = document.getElementById('certificateTitle');
const certificateImage = document.getElementById('certificateImage');

switch (certificate) {
  case 'CNN':
    certificateTitle.textContent = 'Certificate in Convolutional Neural Networks (CNN)';
    certificateImage.src = 'CNN.png';
    break;
  case 'NLP':
    certificateTitle.textContent = 'Certificate in Natural Language Processing (NLP)';
    certificateImage.src = 'NLP.png';
    break;
  case 'DS':
    certificateTitle.textContent = 'Certificate in Data Science (DS)';
    certificateImage.src = 'DS.png';
    break;
  case 'DA':
    certificateTitle.textContent = 'Certificate in Data Analytics and Reporting';
    certificateImage.src = 'Data Analytics and reporting.png';
    break;
  default:
    // Redirect to the index page if the certificate parameter is not valid
    window.location.href = 'index.html';
    break;
}
