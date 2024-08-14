function run() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;
    const output = document.getElementById("output");
  
    try {
      // Create a script element for the JavaScript code
      const script = document.createElement('script');
      script.textContent = jsCode;
  
      // Set the iframe's content
      output.contentDocument.body.innerHTML = htmlCode + `<style>${cssCode}</style>`;
  
      // Append the script to the iframe's body
      output.contentDocument.body.appendChild(script);
    } catch (error) {
      console.error('Error executing code:', error);
      // Display an error message to the user
      output.contentDocument.body.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  