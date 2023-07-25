function downloadPDF() {
    fetch('./../Files/GitStarterGuide.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'GitStarterGuide.pdf';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
      });
  }